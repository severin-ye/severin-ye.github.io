# GPT-dotfiles

- 安装日期：2026-07-17
- 平台：Windows 11 / PowerShell
- 项目位置：`C:\Users\6seve\Codelib-severin\GPT-dotfiles`
- MCP 源码：`C:\Users\6seve\Codelib-severin\GPT-dotfiles\sync-mcp`
- MCP 入口：`C:\Users\6seve\Codelib-severin\GPT-dotfiles\sync-mcp\dist\index.js`
- Codex 配置：`C:\Users\6seve\.codex\config.toml`
- Codex 配置备份：`C:\Users\6seve\.codex\backups\`

## 环境与密钥

- Node.js 18 以上
- Git 与 GitHub CLI
- 可选环境变量：`GPT_DOTFILES_ROOT`、`CODEX_HOME`
- 模型供应商所需的密钥仅记录变量名；模板位于 `.env.template`，实际值不得提交。

## 常用命令

在 `sync-mcp` 目录执行：

```powershell
npm ci
npm run build
node dist/cli.js verify
node dist/cli.js export
node dist/cli.js diff
node dist/cli.js setup
node dist/cli.js setup --confirm
```

## Codex MCP 配置

```toml
[mcp_servers.gpt-dotfiles-sync]
command = "node"
startup_timeout_sec = 30
args = ['C:\Users\6seve\Codelib-severin\GPT-dotfiles\sync-mcp\dist\index.js']
```

## 注意事项

- 此工具只管理 Codex；原 `mcp-opencode-sync` 项目与 OpenCode 配置未修改。
- 共享的 `~/.agents/skills` 采用 ensure-only 策略，只补装、不删除。
- 恢复默认试运行，只有显式 `--confirm` 才写入 Codex 配置。
- 不同步登录态、会话、日志、数据库、缓存、项目信任、hook 状态或密钥值。
- Codex 内旧的 `opencode-sync` MCP 已由 `gpt-dotfiles-sync` 替换。
