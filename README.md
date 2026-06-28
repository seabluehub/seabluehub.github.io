# ideafirm.github.io

“留给时间一点空间”个人主站源码工程。

本站已从直接维护静态 HTML 产物，改造为 Astro 源码生成架构。仓库提交源码，GitHub Actions 构建 `dist/`，再部署到 GitHub Pages。`dist/` 不入库。

## 技术栈

- Astro 静态站点生成
- Markdown 内容源 + TypeScript 站点配置
- 复用既有 CSS/JavaScript/图片资源
- GitHub Actions + GitHub Pages 自动部署
- LeanCloud + Valine 评论/访问统计
- MathJax 公式渲染

## 目录结构

```text
.
├── src/
│   ├── components/      # Header、Footer、弹层、底栏等公共组件
│   ├── content/         # Markdown 文章内容
│   ├── data/            # 站点配置、导航、栏目数据和内容工具函数
│   ├── layouts/         # 页面基础布局
│   └── pages/           # Astro 页面路由
├── public/              # 原样发布的静态资源
├── docs/                # 项目架构和方案文档
├── .github/workflows/   # GitHub Pages 自动部署
├── astro.config.mjs
├── package.json
└── package-lock.json
```

历史根目录 HTML、`2019/`、`archives/`、`about/` 等目录仍保留在工作树中，用于迁移对照。新的发布产物由 `src/pages/` 生成。

## 本地开发

安装依赖：

```powershell
npm ci
```

启动开发服务器：

```powershell
npm run dev
```

构建静态产物：

```powershell
npm run build
```

本地预览构建结果：

```powershell
npm run preview
```

## 发布方式

GitHub Pages 推荐配置：

```text
Settings -> Pages -> Build and deployment -> Source -> GitHub Actions
```

提交到 `main` 或 `master` 后，`.github/workflows/deploy.yml` 会执行：

1. 安装 npm 依赖
2. 执行 `npm run build`
3. 上传 `dist/` 为 Pages artifact
4. 部署到 `https://ideafirm.github.io/`

## 内容维护

当前文章内容集中在：

```text
src/content/posts/
```

新增文章时创建 Markdown 文件，并填写 frontmatter：

- `title`
- `pathSlug`
- `date`
- `category`
- `tags`
- `summary`
- `public`
- `draft`

构建时会自动生成：

- 首页最近更新
- 栏目页
- `/archives/`
- `/archives/:year/`
- `/archives/:year/:month/`
- `/:year/:month/:day/:slug/`
- `sitemap-index.xml`

## 架构文档

完整分析见：

[docs/architecture-and-solution.md](docs/architecture-and-solution.md)
