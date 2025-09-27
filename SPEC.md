# AI Safety Study Group - 项目规格说明

## 项目概述

**项目名称**: AI Safety Study Group (AI安全学习小组)  
**版本**: 0.3.0  
**项目类型**: Next.js 15 单页面应用  
**语言**: TypeScript + React 19  
**目标**: 为AI安全学习小组提供官方网站，展示活动、博客和联系信息  
**国际化**: 支持中文和英文双语切换  
**GitHub集成**: 自动从GitHub仓库获取事件数据并展示

## 技术栈

### 核心框架
- **Next.js**: 15.3.1 (使用 Turbopack 进行开发)
- **React**: 19.0.0
- **TypeScript**: 5.8.3

### UI 框架与样式
- **Tailwind CSS**: 4.1.4 (使用 PostCSS 8.5.3)
- **shadcn/ui**: 0.0.4 (New York 风格)
- **Framer Motion**: 12.9.2 (动画效果)
- **Lucide React**: 0.503.0 (图标库)

### 工具库
- **class-variance-authority**: 0.7.1 (样式变体管理)
- **clsx**: 2.1.1 (类名合并)
- **tailwind-merge**: 3.2.0 (Tailwind 类名合并)

## 项目结构

```
aisafetystudy/
├── app/                    # Next.js App Router
│   ├── globals.css        # 全局样式配置
│   ├── layout.tsx         # 根布局组件（包含语言提供者）
│   ├── page.tsx           # 主页面组件（支持多语言）
│   └── api/
│       └── events/
│           └── route.ts   # GitHub事件API端点
├── components/
│   ├── ui/                # shadcn/ui 组件
│   │   ├── button.tsx     # 按钮组件
│   │   └── card.tsx       # 卡片组件
│   ├── event-card.tsx     # 事件卡片组件
│   └── language-switcher.tsx  # 语言切换组件
├── lib/
│   ├── utils.ts           # 工具函数
│   ├── i18n.ts            # 国际化翻译文件
│   ├── language-context.tsx # 语言上下文提供者
│   ├── github-events.ts   # GitHub事件获取和解析
│   └── use-events.ts      # 事件数据获取Hook
├── public/                # 静态资源
│   ├── logo.png           # 主logo
│   ├── qrcode.jpg         # 微信群二维码
│   ├── accordingwork-logo.png  # 合作伙伴logo
│   └── tup-logo.png       # 清华大学出版社logo
└── scripts/               # 工具脚本
    ├── test-github-connection.js  # GitHub连接测试
    └── test-markdown-parser.js    # Markdown解析测试
```

## 功能模块

### 1. GitHub事件集成系统
- **自动发现**: 从GitHub仓库自动发现事件文件
- **智能解析**: 解析Markdown格式的事件信息，提取标题、日期、时间、地点、演讲者等
- **UTF-8编码支持**: 正确处理中文内容，避免乱码问题
- **智能排序**: 按日期从近到远排序，支持中文日期格式
- **缓存机制**: API缓存5分钟，提高性能
- **腾讯会议识别**: 自动提取腾讯会议链接和会议ID

### 2. 多语言支持
- **完整双语**: 中文和英文完整翻译覆盖
- **实时切换**: 无需刷新页面的语言切换
- **本地存储**: 用户语言偏好持久化
- **类型安全**: TypeScript完整类型定义

### 3. 事件展示系统
- **响应式布局**: 适配桌面端和移动端
- **事件卡片**: 清晰展示事件信息，包含视频和文档链接
- **分类过滤**: 支持按类型（全部/研讨会/讲座/课程）筛选
- **分页显示**: 默认显示前3个事件，支持展开查看全部

### 4. 其他功能
- **联系方式**: 邮箱、微信、社交媒体链接
- **合作伙伴**: 显示合作机构信息
- **响应式设计**: 适配各种设备尺寸

## GitHub集成详情

### 数据源
- **仓库**: `gixia-org/aisafetystudy-doc`
- **文件格式**: Markdown (.md)
- **命名规范**: `talk-*`, `course-*`, `seminar-*`

### 解析功能
- **标题提取**: 从第一个`#`标题提取
- **日期解析**: 支持`2025年9月11日`等中文格式
- **时间识别**: 识别时间段格式如`21:00~22:30`
- **地点提取**: 优先识别腾讯会议信息
- **演讲者**: 从`**主讲人**`字段提取
- **标签生成**: 基于内容智能生成相关标签

### API端点
- **GET `/api/events`**: 获取所有事件（支持缓存）
- **POST `/api/events`**: 清除缓存并重新获取

## 开发与部署

### 开发命令
```bash
npm run dev      # 开发服务器 (使用 Turbopack)
npm run build    # 生产构建
npm run start    # 生产服务器
npm run lint     # 代码检查
```

### 环境配置
- **GITHUB_TOKEN**: (可选) GitHub API访问令牌，提高API限制

## 版本历史

- **v0.3.0**: GitHub事件自动集成，中文编码修复，UI优化，完整双语支持
- **v0.2.0**: 添加双语言支持（中文/英文），语言切换功能，国际化架构
- **v0.1.0**: 初始版本，包含基础功能和页面结构

---

*项目持续维护中，更多功能正在开发中。*
