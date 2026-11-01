# Codex CLI 安装与更新

## 2026-11-01 Windows 更新记录

在 Gmail/GitHub 选中事项 G08 中，将独立 npm 命令行从 `0.157.0` 更新为官方稳定版 `0.166.0`。这与 Codex Desktop 的自带客户端是两套安装；桌面会话当时报告 `0.166.0-alpha.5.1`，不能互相代替版本核验。

- 来源：npm 官方包 `@openai/codex`；更新前 `npm view @openai/codex version --json` 返回 `0.166.0`。
- 安装包目录：`C:/Users/6seve/AppData/Roaming/npm/node_modules/@openai/codex/`。
- PowerShell 命令入口：`C:/Users/6seve/AppData/Roaming/npm/codex.ps1`。
- CMD 命令入口：`C:/Users/6seve/AppData/Roaming/npm/codex.cmd`。
- 用户配置：`C:/Users/6seve/.codex/config.toml`；认证材料仍由 Codex 的既有登录流程管理，本文不记录密钥、token 或认证文件内容。
- 环境：Windows、用户级 npm 全局安装；没有新增环境变量或 API Key。现有 npm 全局 bin 目录应在 PATH 中。

更新命令：

```powershell
npm install -g @openai/codex@0.166.0
codex --version
codex --help
```

实测安装退出码为 0，`codex --version` 返回 `codex-cli 0.166.0`，帮助命令成功。未启动新的模型任务或更改桌面程序；本任务没有主动修改用户配置和认证材料，也未做配置文件逐字节前后对比。

需要回退独立命令行时：

```powershell
npm install -g @openai/codex@0.157.0
codex --version
```

注意：升级 CLI 不证明历史容量错误已解决，也不证明所有发行说明中的能力均经过本机验收。GitHub 旧版本提醒按已安装稳定版完成核对后结项；原有每日新版本提醒策略保留。
