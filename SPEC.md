# AI Safety Study Group - 项目规格说明

## 项目概述

**项目名称**: AI Safety Study Group (AI安全学习小组)  
**版本**: 0.1.0  
**项目类型**: Next.js 15 单页面应用  
**语言**: TypeScript + React 19  
**目标**: 为AI安全学习小组提供官方网站，展示活动、博客和联系信息

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
│   ├── favicon.ico
│   ├── globals.css        # 全局样式配置
│   ├── layout.tsx         # 根布局组件
│   └── page.tsx           # 主页面组件
├── components/
│   └── ui/                # shadcn/ui 组件
│       ├── button.tsx     # 按钮组件
│       └── card.tsx       # 卡片组件
├── lib/
│   └── utils.ts           # 工具函数
├── public/                # 静态资源
│   ├── logo.png           # 主logo
│   ├── qrcode.jpg         # 微信群二维码
│   ├── accordingwork-logo.png  # 合作伙伴logo
│   ├── tup-logo.png       # 清华大学出版社logo
│   └── favicon.svg        # 网站图标
├── components.json        # shadcn/ui 配置
├── next.config.ts         # Next.js 配置
├── package.json           # 项目依赖
└── tsconfig.json          # TypeScript 配置
```

## 功能模块

### 1. 主页面 (app/page.tsx)
- **Hero Section**: 展示小组介绍和加入按钮
- **活动 Section**: 展示三种活动类型（研讨会、讲座、共学课程）
- **博客 Section**: 展示最新博客文章链接
- **关于我们 Section**: 展示联系方式和社交媒体链接
- **合作伙伴 Section**: 展示合作伙伴logo
- **页脚**: 版权信息

### 2. 导航系统
- **固定顶部导航栏**: 包含logo和导航链接
- **平滑滚动**: 点击导航链接实现页面内平滑滚动
- **响应式设计**: 适配移动端和桌面端

### 3. 交互功能
- **微信二维码**: 鼠标悬停显示微信群二维码
- **卡片悬停效果**: 活动卡片的缩放和阴影效果
- **外部链接**: 多个社交媒体和资源链接

## UI 组件系统

### 基于 shadcn/ui
- **设计风格**: New York 风格
- **主题系统**: 支持明暗主题切换
- **颜色系统**: 使用 OKLCH 颜色空间
- **组件**: Button, Card 等基础组件

### 自定义样式
- **响应式布局**: 使用 Tailwind CSS 断点系统
- **动画效果**: 使用 Framer Motion 和 CSS 过渡
- **字体系统**: Geist Sans 和 Geist Mono

## 内容管理

### 静态内容
- **活动信息**: 硬编码在组件中，包含三种活动类型
- **博客文章**: 硬编码链接到知乎文章
- **联系方式**: 邮箱、微信、知乎、圈子、Bilibili、LinkedIn、GitHub
- **合作伙伴**: According.Work 和清华大学出版社

### 外部资源
- **GitHub**: 文档仓库链接
- **知乎**: 个人主页和圈子链接
- **Bilibili**: 视频内容链接
- **LinkedIn**: 公司页面链接

## 配置信息

### Next.js 配置 (next.config.ts)
- 基础配置，无特殊设置

### TypeScript 配置 (tsconfig.json)
- **目标版本**: ES2017
- **路径别名**: `@/*` 指向根目录
- **严格模式**: 启用所有严格检查
- **JSX**: preserve 模式

### shadcn/ui 配置 (components.json)
- **样式**: new-york
- **RSC**: 启用 React Server Components
- **Tailwind**: 使用 CSS 变量和中性色系
- **图标库**: Lucide

## 开发与构建

### 开发命令
```bash
npm run dev      # 开发服务器 (使用 Turbopack)
npm run build    # 生产构建
npm run start    # 生产服务器
npm run lint     # 代码检查
```

### 环境要求
- Node.js (支持 Next.js 15)
- npm 或 yarn

## 部署说明

### 静态资源
- 所有图片资源位于 `public/` 目录
- 支持 SVG 图标和 PNG/JPG 图片
- favicon 使用 SVG 格式

### 构建输出
- 使用 Next.js 默认构建配置
- 支持静态导出（如需要）

## 扩展性设计

### 组件扩展
- 基于 shadcn/ui 的组件系统，易于添加新组件
- 统一的样式系统，便于维护和扩展
- 模块化的组件结构

### 内容扩展
- 活动信息可通过组件状态或配置文件管理
- 博客文章可通过 API 或静态文件管理
- 联系方式可通过配置文件集中管理

### 功能扩展
- 可添加用户认证系统
- 可集成 CMS 系统进行内容管理
- 可添加多语言支持
- 可添加搜索功能

## 维护指南

### 更新内容
1. **活动信息**: 修改 `app/page.tsx` 中的活动卡片
2. **博客文章**: 更新博客 section 中的链接和日期
3. **联系方式**: 修改关于我们 section 中的链接
4. **合作伙伴**: 更新合作伙伴 section 中的 logo 和链接

### 样式更新
1. **主题颜色**: 修改 `app/globals.css` 中的 CSS 变量
2. **组件样式**: 通过 Tailwind 类名或 CSS 变量调整
3. **响应式设计**: 调整 Tailwind 断点类名

### 添加新功能
1. **新组件**: 在 `components/` 目录下创建
2. **新页面**: 在 `app/` 目录下创建新路由
3. **新样式**: 在 `globals.css` 中添加或使用 Tailwind

## 注意事项

1. **性能优化**: 图片资源已优化，建议定期检查加载性能
2. **SEO**: 已在 layout.tsx 中配置基础 meta 信息
3. **可访问性**: 使用了语义化 HTML 和适当的 ARIA 属性
4. **浏览器兼容**: 支持现代浏览器，IE 不支持
5. **移动端适配**: 已实现响应式设计，支持移动端访问

## 版本历史

- **v0.1.0**: 初始版本，包含基础功能和页面结构

---

*此文档应随着项目更新而同步维护，确保后续开发者能够快速理解项目结构和功能。*
