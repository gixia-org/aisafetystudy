import { NextRequest, NextResponse } from 'next/server';
import { fetchAllEvents, GitHubEventData } from '@/lib/github-events';

// 缓存事件数据，避免频繁调用GitHub API
let eventsCache: GitHubEventData[] = [];
let cacheTimestamp = 0;
// 把缓存时间拉长一点，减少命中 GitHub 的频率（比如 30 分钟）
const CACHE_DURATION = 30 * 60 * 1000;

// 为整个获取流程再包一层超时保护，避免因为底层网络异常导致长时间卡死
// 支持在超时时执行额外的清理逻辑（例如 abort 一个 AbortController）
async function withTimeout<T>(
  promise: Promise<T>,
  ms: number,
  label: string,
  onTimeout?: () => void,
): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const timer = setTimeout(() => {
      const err = new Error(`withTimeout: ${label} timed out after ${ms}ms`);
      console.error(err.message);
      if (onTimeout) {
        try {
          onTimeout();
        } catch (e) {
          console.error(`withTimeout: onTimeout handler for ${label} threw`, e);
        }
      }
      reject(err);
    }, ms);

    promise
      .then((value) => {
        clearTimeout(timer);
        resolve(value);
      })
      .catch((err) => {
        clearTimeout(timer);
        reject(err);
      });
  });
}

export async function GET(request: NextRequest) {
  const now = Date.now();
  const requestId = `${now}-${Math.random().toString(36).slice(2, 8)}`;
  console.log(`[events][GET][${requestId}] incoming request`);

  try {
    // 检查缓存是否有效
    if (eventsCache.length > 0 && now - cacheTimestamp < CACHE_DURATION) {
      console.log(`[events][GET][${requestId}] hit cache, size=${eventsCache.length}`);
      return NextResponse.json({
        success: true,
        data: eventsCache,
        cached: true,
        timestamp: cacheTimestamp,
      });
    }

    console.log(`[events][GET][${requestId}] cache miss, fetching from GitHub...`);
    const startedAt = Date.now();

    // 使用 AbortController 让整个链路可取消
    const controller = new AbortController();

    // 整体获取流程再加一层超时（比如 8 秒），超时后会 abort 底层的 GitHub 请求
    const events = await withTimeout(
      fetchAllEvents(controller.signal),
      8000,
      'fetchAllEvents',
      () => controller.abort(),
    );

    const duration = Date.now() - startedAt;
    console.log(`[events][GET][${requestId}] fetched ${events.length} events in ${duration}ms`);

    // 更新缓存
    eventsCache = events;
    cacheTimestamp = now;

    return NextResponse.json({
      success: true,
      data: events,
      cached: false,
      timestamp: cacheTimestamp,
    });
  } catch (error) {
    console.error(`[events][GET][${requestId}] Error fetching events:`, error);

    // 如果获取失败，返回缓存的数据（如果有的话），保证用户侧尽量不超时
    if (eventsCache.length > 0) {
      console.log(`[events][GET][${requestId}] return stale cache, size=${eventsCache.length}`);
      return NextResponse.json({
        success: false,
        data: eventsCache,
        cached: true,
        timestamp: cacheTimestamp,
        error: 'Failed to fetch fresh data, returning cached data',
      });
    }

    // 没有缓存时，尽快返回错误，不要一直挂着
    return NextResponse.json(
      {
        success: false,
        data: [],
        error: 'Failed to fetch events data',
      },
      { status: 500 },
    );
  }
}

// 手动刷新缓存（可以配合 cron/脚本调用，而不是用户请求实时打 GitHub）
export async function POST(request: NextRequest) {
  const requestId = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  console.log(`[events][POST][${requestId}] manual refresh requested`);

  try {
    const startedAt = Date.now();

    // 使用 AbortController 让整个链路可取消
    const controller = new AbortController();

    // 重新获取数据，这里同样加超时防护（10 秒），超时会中止底层 GitHub 请求
    const events = await withTimeout(
      fetchAllEvents(controller.signal),
      10000,
      'refreshEventsData',
      () => controller.abort(),
    );

    const duration = Date.now() - startedAt;
    console.log(`[events][POST][${requestId}] refreshed ${events.length} events in ${duration}ms`);

    // 更新缓存
    eventsCache = events;
    cacheTimestamp = Date.now();

    return NextResponse.json({
      success: true,
      message: 'Cache refreshed successfully',
      data: events,
      timestamp: cacheTimestamp,
    });
  } catch (error) {
    console.error(`[events][POST][${requestId}] Error refreshing cache:`, error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to refresh cache',
      },
      { status: 500 },
    );
  }
}

