# codex-bridge 安装记录

- 安装日期：2026-06-24
- 平台：Windows，Codex Desktop / Codex CLI 0.142.0
- 用途：让 Codex 通过本机 Responses API 桥接器使用 DeepSeek V4。

## 安装位置

- 桥接器目录：`C:\Users\6seve\.codex\tools\codex-bridge`
- 启动脚本：`C:\Users\6seve\.codex\tools\codex-bridge\start-codex-bridge.ps1`
- 启动批处理：`C:\Users\6seve\.codex\tools\codex-bridge\start-codex-bridge.cmd`
- 用户登录启动项：`C:\Users\6seve\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\Codex Bridge.lnk`
- Codex 主配置：`C:\Users\6seve\.codex\config.toml`
- Codex DeepSeek profile：`C:\Users\6seve\.codex\deepseek.config.toml`
- 配置备份：`C:\Users\6seve\.codex\config.toml.bak-20260624-191944`

## 相关路径

- 上游来源：`https://github.com/wujfeng712-ui/codex-bridge`
- 本地监听地址：`http://127.0.0.1:4000`
- 健康检查：`http://127.0.0.1:4000/health`
- DeepSeek 上游：`https://api.deepseek.com/v1`

## 环境变量和密钥

- `DEEPSEEK_API_KEY`：Windows 用户环境变量，来源于当前 OpenCode auth。
- `KIMI_CODE_API_KEY`、`DASHSCOPE_API_KEY`、`DASHSCOPE_CODING_API_KEY`、`TOKEN_PLAN_API_KEY`：已从 dotfiles 历史状态同步到 Windows 用户环境变量。
- `C:\Users\6seve\.codex\tools\codex-bridge\.env`：包含 DeepSeek / MiMo 上游配置和密钥。
- 桥接器入站认证当前关闭，仅监听本机 `127.0.0.1`，避免 Codex 0.142.0 自定义 provider 认证头未透传导致 401。

## Codex 配置

`C:\Users\6seve\.codex\config.toml` 新增：

```toml
[model_providers.codex_bridge]
name = "codex-bridge"
base_url = "http://127.0.0.1:4000/v1"
wire_api = "responses"
```

`C:\Users\6seve\.codex\deepseek.config.toml`：

```toml
model = "deepseek-v4-pro"
model_provider = "codex_bridge"
model_reasoning_summary = "none"
model_supports_reasoning_summaries = false
```

## 常用命令

```powershell
# 启动桥接器
powershell -NoProfile -ExecutionPolicy Bypass -File C:\Users\6seve\.codex\tools\codex-bridge\start-codex-bridge.ps1

# 或使用启动批处理
C:\Users\6seve\.codex\tools\codex-bridge\start-codex-bridge.cmd

# 健康检查
Invoke-WebRequest http://127.0.0.1:4000/health -UseBasicParsing

# 使用 DeepSeek profile 运行 Codex
C:\Users\6seve\AppData\Local\OpenAI\Codex\bin\38dff8711e296435\codex.exe exec --profile deepseek "Reply with exactly: OK"
```

## 注意事项和踩坑

- Codex 自定义 provider 现在走 Responses API；DeepSeek 官方接口是 Chat Completions，直连 `https://api.deepseek.com/v1/responses` 会 404。
- `DEEPSEEK_API_KEY` 历史记录中的旧值曾返回 401；已改为从当前 OpenCode auth 同步。
- Codex 0.142.0 对自定义 provider 的 `env_key` / `env_http_headers` / command-backed auth 在本地代理场景下没有成功传入代理认证头，因此桥接器入站认证关闭。
- `GET /v1/models` 可能在 Codex 启动时出现 404 警告，但实际 `POST /v1/responses` 已验证可用。
- 桥接器需要运行中，Codex 才能使用 `deepseek` profile。
- 注册 Windows 计划任务时遇到“拒绝访问”，已改用当前用户 Startup 快捷方式实现登录自启动。

## 验证结果

2026-06-24 已验证：

- `config.toml` 和 `deepseek.config.toml` TOML 语法通过。
- `http://127.0.0.1:4000/health` 返回 200。
- `codex exec --profile deepseek "Reply with exactly: OK"` 成功返回 `OK`。
