# 个人网站 — 运行指南

## 快速开始

```bash
bash scripts/start.sh     # 一键启动开发服务器，访问 http://localhost:5173
bash scripts/build.sh     # 一键构建生产版本，输出到 dist/
```

## 所有命令

| 用途 | 命令 |
|------|------|
| 开发 | `bash scripts/start.sh` |
| 构建 | `bash scripts/build.sh` |
| 预览构建 | `npm run preview` |
| 导出 PDF | `bash 简历相关/export-pdf.mjs zh` 或 `en` |
| 运行测试 | `node src/data/projectLayout.test.js` |

## 部署

```bash
git push   # 推送后 GitHub Actions 自动部署到 GitHub Pages
```

线上地址：https://severin-ye.github.io

## 技术栈

- Vite 7 — 构建工具
- Vanilla JavaScript — 零框架
- CSS Variables — 主题系统
- GitHub Actions — 自动部署

## 目录结构

```
src/                 源码
  main.js            App 入口，所有 HTML 内容
  style.css          完整样式系统
  data/              i18n 翻译 + 项目数据 + 测试
scripts/             脚本工具（启动、构建、PDF 导出）
public/papers/       论文 PDF
output/              导出的 PDF 文件（gitignored）
personal/            个人档案（gitignored）
docs/                项目文档
```

## 功能特性

- 苹果玻璃质感设计
- 深色 / 浅色主题切换，跟随系统
- 中英文切换
- 平滑滚动动画
- 视差背景效果
- 一键导出 PDF 作品集

## 修改内容

- 页面内容在 `src/main.js`
- 中文翻译在 `src/data/i18n.js`
- 项目数据在 `src/data/projectLayout.js`
- 样式在 `src/style.css`

保存后浏览器自动刷新。

## 依赖

- Node.js 22+（推荐用 nvm 管理）
- 首次运行 `scripts/start.sh` 会自动安装依赖
