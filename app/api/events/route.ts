import { NextRequest, NextResponse } from 'next/server';
import { fetchAllEvents, GitHubEventData } from '@/lib/github-events';

// 缓存事件数据，避免频繁调用GitHub API
let eventsCache: GitHubEventData[] = [];
let cacheTimestamp = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5分钟缓存

export async function GET(request: NextRequest) {
  try {
    const now = Date.now();
    
    // 检查缓存是否有效
    if (eventsCache.length > 0 && (now - cacheTimestamp) < CACHE_DURATION) {
      return NextResponse.json({
        success: true,
        data: eventsCache,
        cached: true,
        timestamp: cacheTimestamp,
      });
    }
    
    // 从GitHub获取最新数据
    const events = await fetchAllEvents();
    
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
    console.error('Error fetching events:', error);
    
    // 如果获取失败，返回缓存的数据（如果有的话）
    if (eventsCache.length > 0) {
      return NextResponse.json({
        success: false,
        data: eventsCache,
        cached: true,
        timestamp: cacheTimestamp,
        error: 'Failed to fetch fresh data, returning cached data',
      });
    }
    
    return NextResponse.json({
      success: false,
      data: [],
      error: 'Failed to fetch events data',
    }, { status: 500 });
  }
}

// 手动刷新缓存
export async function POST(request: NextRequest) {
  try {
    // 清除缓存
    eventsCache = [];
    cacheTimestamp = 0;
    
    // 重新获取数据
    const events = await fetchAllEvents();
    
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
    console.error('Error refreshing cache:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to refresh cache',
    }, { status: 500 });
  }
}
