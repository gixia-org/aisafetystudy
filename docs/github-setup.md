# GitHub集成设置指南

## 1. 获取GitHub Token

1. 访问 [GitHub Settings > Personal Access Tokens](https://github.com/settings/tokens)
2. 点击 "Generate new token" > "Generate new token (classic)"
3. 设置以下权限：
   - `repo` (如果是私有仓库)
   - `public_repo` (如果是公开仓库)
4. 复制生成的token

## 2. 配置环境变量

创建 `.env.local` 文件：

```env
GITHUB_TOKEN=your_github_token_here
```

## 3. 测试连接

运行测试脚本验证连接：

```bash
npm run test:github
```

## 4. 自动发现文件

系统会自动发现以下文件：
- `talk-*.md` - 讲座文件
- `course-*.md` - 课程文件  
- `seminar-*.md` - 研讨会文件

## 5. 文件格式要求

每个Markdown文件应包含：

```markdown
# 事件标题

## 基本信息
- 日期: 2025-02-15
- 时间: 19:00-21:00
- 地点: 线上会议
- 演讲者: 张三博士

## 描述
这里是事件的详细描述...

## 视频
[观看视频](https://bilibili.com/xxx)
```

## 6. 故障排除

### 常见问题

1. **401 Unauthorized**
   - 检查GitHub Token是否正确
   - 确认Token权限足够

2. **404 Not Found**
   - 检查仓库名称和所有者是否正确
   - 确认仓库是公开的或Token有访问权限

3. **解析失败**
   - 检查Markdown文件格式
   - 查看控制台错误信息

### 调试模式

在 `lib/github-events.ts` 中启用详细日志：

```typescript
console.log('GitHub API响应:', response);
console.log('解析结果:', event);
```

## 7. 生产环境部署

### Vercel部署
1. 在Vercel项目设置中添加环境变量
2. 设置 `GITHUB_TOKEN`
3. 重新部署项目

### 其他平台
根据部署平台的要求设置环境变量

## 8. 监控和维护

- 定期检查GitHub API使用量
- 监控解析成功率
- 及时更新Token（如果过期）
