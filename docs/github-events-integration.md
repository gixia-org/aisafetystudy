# GitHub Events Integration

## 概述

这个功能允许网站自动从GitHub仓库获取和显示事件数据，替代了之前静态的三个方框展示方式。

## 功能特性

### 1. 自动数据获取
- 从GitHub仓库自动获取事件数据
- 支持Markdown文件解析
- 缓存机制减少API调用

### 2. 丰富的事件展示
- 详细的事件信息（标题、描述、时间、地点、演讲者等）
- 视频链接和文档链接
- 标签分类
- 事件类型区分（研讨会、讲座、课程）

### 3. 用户交互
- 事件类型筛选
- 展开/收起功能
- 响应式设计

## 文件结构

```
lib/
├── github-events.ts      # GitHub API集成和Markdown解析
├── use-events.ts         # React Hook用于获取事件数据
└── i18n.ts              # 更新的事件数据结构

app/
├── api/events/route.ts   # API路由提供事件数据
└── page.tsx             # 更新的主页面

components/
└── event-card.tsx       # 事件卡片组件

.github/workflows/
└── update-events.yml    # GitHub Actions自动更新
```

## 使用方法

### 1. 基本使用

事件数据现在通过API自动获取：

```typescript
import { useEvents } from '@/lib/use-events';

function EventsSection() {
  const { events, loading, error, refresh } = useEvents();
  
  if (loading) return <div>加载中...</div>;
  if (error) return <div>错误: {error}</div>;
  
  return (
    <div>
      {events.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}
```

### 2. GitHub仓库结构

为了支持自动解析，GitHub仓库应该按以下结构组织：

```
aisafetystudy-doc/
├── seminars/
│   ├── 2025-01-ai-alignment.md
│   └── 2024-12-ai-interpretability.md
├── lectures/
│   └── 2025-01-llm-safety.md
└── courses/
    └── 2025-01-ai-safety-basics.md
```

### 3. Markdown文件格式

每个事件文件应该包含以下信息：

```markdown
# 事件标题

日期: 2025-02-15
时间: 19:00-21:00
地点: 线上会议
演讲者: 张三博士

## 描述
事件详细描述...

## 视频
[视频链接](https://example.com/video)

## 标签
AI对齐, RLHF, 宪法AI
```

## 配置

### 1. 环境变量

创建 `.env.local` 文件：

```env
GITHUB_TOKEN=your_github_token_here
```

### 2. GitHub Token权限

Token需要以下权限：
- `repo` (如果仓库是私有的)
- `public_repo` (如果仓库是公开的)

## API端点

### GET /api/events
获取所有事件数据

响应：
```json
{
  "success": true,
  "data": [...],
  "cached": false,
  "timestamp": 1234567890
}
```

### POST /api/events
手动刷新事件数据缓存

响应：
```json
{
  "success": true,
  "message": "Cache refreshed successfully",
  "data": [...],
  "timestamp": 1234567890
}
```

## 自动更新

### GitHub Actions

配置了自动工作流，每天更新事件数据：

```yaml
on:
  schedule:
    - cron: '0 1 * * *'  # 每天北京时间上午9点
  workflow_dispatch:      # 手动触发
```

### 手动更新

可以通过以下方式手动更新：

1. 调用API端点：
   ```bash
   curl -X POST http://localhost:3000/api/events
   ```

2. 在GitHub Actions中手动触发工作流

## 自定义和扩展

### 1. 添加新的事件类型

1. 更新 `lib/i18n.ts` 中的类型定义
2. 更新 `lib/github-events.ts` 中的解析逻辑
3. 更新 `components/event-card.tsx` 中的显示逻辑

### 2. 自定义Markdown解析

修改 `lib/github-events.ts` 中的 `parseEventFromMarkdown` 函数来支持不同的格式。

### 3. 添加新的字段

1. 更新 `GitHubEventData` 接口
2. 更新解析逻辑
3. 更新UI组件

## 故障排除

### 常见问题

1. **API调用失败**
   - 检查GitHub Token是否正确
   - 检查网络连接
   - 查看控制台错误信息

2. **数据解析失败**
   - 检查Markdown文件格式
   - 查看解析函数的正则表达式
   - 检查文件路径是否正确

3. **缓存问题**
   - 使用POST请求刷新缓存
   - 检查缓存时间设置

### 调试

启用详细日志：

```typescript
// 在 lib/github-events.ts 中
console.log('Parsing content:', content);
console.log('Parsed event:', event);
```

## 性能优化

1. **缓存机制**: 5分钟缓存减少API调用
2. **并行请求**: 同时获取多个文件
3. **错误处理**: 失败时返回缓存数据
4. **响应式设计**: 适配不同屏幕尺寸

## 安全考虑

1. **Token安全**: 使用环境变量存储GitHub Token
2. **API限制**: 遵守GitHub API速率限制
3. **数据验证**: 验证从GitHub获取的数据
4. **错误处理**: 不暴露敏感错误信息

## 未来改进

1. **实时更新**: 使用WebSocket实现实时更新
2. **搜索功能**: 添加事件搜索和过滤
3. **通知系统**: 新事件通知
4. **数据分析**: 事件参与度统计
5. **多语言支持**: 支持更多语言的Markdown解析
