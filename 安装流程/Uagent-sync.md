# U同步 3.0.0 分发与隔离安装记录

2026-11-01，Windows 11 x64；验收运行时 Node 24.19.0、npm 11.17.0。本文记录已执行的正式分发与隔离消费者验收；真实用户 Profile 和原有全局 CLI 未因本轮验收替换。

## 正式来源与版本

- [源提交](https://github.com/severin-ye/uagent-sync/commit/3a81c8abdfdff24852098a354ed36c4b65669a1a)：master。
- [3.0.0 Release](https://github.com/severin-ye/uagent-sync/releases/tag/v3.0.0)：CLI、DSH 双包和 SHA256SUMS。
- npm：`uagent-sync@3.0.0`、`uagent-sync-dsh@3.0.0`；后者精确依赖前者同号版本。实际下载字节与 Release 固定产物一致。
- 实际旧 npm 基线为 2.1.0；3.0.0 包含 Node 支持范围变化，升级前按项目 README 核对运行时。

## 实际安装与配置位置

| 用途 | 本次绝对路径 |
|---|---|
| 隔离 CLI prefix（已卸载测试包） | `C:/Users/6seve/.codex/task-data/gmail-github-01a19524/round2/usync-registry-acceptance/cli-prefix` |
| 隔离 Profile、缓存及日志根目录 | `C:/Users/6seve/.codex/task-data/gmail-github-01a19524/round2/usync-registry-acceptance` |
| 复用的既有 DSH rc5 宿主 | `C:/Users/6seve/.codex/task-data/gmail-github-01a19524/round2/usync/dsh-host/node_modules/@deepseek-ai/dsh` |
| 本次显式 Node | `C:/Program Files/nodejs/node.exe` |
| 本次显式 npm | `C:/Program Files/nodejs/node_modules/npm/bin/npm-cli.js` |

本次为每个消费者设置独立 npm prefix、cache、userconfig/globalconfig 与 HOME/XDG 目录。没有新增 API Key，也没有更改真实设备注册、备份仓库或模型凭据。实际备份另依赖已授权的 GitHub 身份和工作区配置，不能从 help 通过推断备份已执行。

## 已执行验收

CLI 从 registry 安装 3.0.0，核对版本、总帮助、device/backup 帮助；回退实际 2.1.0 后启动帮助成功，再恢复 3.0.0，最后卸载并确认包和 shim 消失。

DSH `0.2.1-rc.5` 的新隔离 Profile 完成安装、配置合成、帮助启动、回退 2.1.0、恢复 3.0.0、卸载。安装及恢复后的实际 Cordis runtime 都注册 16 个工具、3 个 Skills；`sync_changelog` 成功读取合成工作区，dispose 后注册清空。未调用模型、读取私人工作区或执行备份/恢复。

另从固定 GitHub 提交 `3a81c8abdfdff24852098a354ed36c4b65669a1a` 的 `packages/dsh` 无脚本打包，在另一个全新隔离 Profile 完成安装、配置、启动帮助、实际运行注册、安全工具调用、dispose 和卸载。该来源与 Windows 发布包仅有 LF/CRLF 差异，分别执行了验收，没有用文本相同推断运行通过。

官方 peer 包自动解析遇到 `@deepseek-ai/dsh-type-meta` 的 npm 404；在私有 Profile 关闭自动安装 peer，并链接既有 rc5 宿主的官方 peer 后通过。上述两种来源验收均有此限定，不能证明全新官方宿主可独立安装；商城独立安全审阅、权限准入与完整兼容声明仍待核验。

## 常用核验与回退

以下命令中的目录应先确认为本次专用的隔离消费者，不要复用用户主目录。

```powershell
npm view uagent-sync@3.0.0 version dist.integrity --json
npm view uagent-sync-dsh@3.0.0 version dependencies.uagent-sync dist.integrity --json
npm install --global --prefix <隔离prefix> --workspaces=false uagent-sync@3.0.0
<隔离prefix>/uagent-sync.cmd --version
<隔离prefix>/uagent-sync.cmd --help
npm install --global --prefix <隔离prefix> --workspaces=false uagent-sync@2.1.0
npm uninstall --global --prefix <隔离prefix> --workspaces=false uagent-sync
```

DSH 使用宿主 `plugin remove` 卸载并核对依赖、bundle 和合成配置入口；不要直接清空真实 Profile。回退保留旧 npm 版本和原用户配置，不删除历史 Release。

## 本轮踩坑与保留条件

`pnpm --dir` 本身不能隔离祖先 workspace。一次准备操作误识别用户上层 workspace 并刷新其 `node_modules`；包清单、锁与工作区配置未变，无安装脚本执行。后续验收改为专用 workspace 边界、显式 `--ignore-workspace` 并先核对根目录。

原环境核查发现 hwpilot 的锁定 Git 包缺少源码；无操作前字节基线，不能断言由这次操作造成。已从相同锁定版本仅补缺失源码和路径配置，原文件哈希不变；现有 Bun 启动帮助成功。没有运行安装或构建脚本。

`C:/Users/6seve/.codex/task-data/gmail-github-01a19524/round2/usync-release/pnpm-store` 现被上层依赖引用，必须保留，不能当普通临时缓存删除。其迁移与回收须先核对当前引用并保留回退。私人验收日志、回执和备份保留在本机，不随本文上传。
