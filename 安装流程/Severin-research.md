# Severin-research 安装记录

- 安装日期：2026-08-26（2026-08-27 修复 MCP 入口）
- 平台：Windows 11 / PowerShell / Codex Desktop / Codex CLI 0.149.0
- Plugin ID：`severin-research`
- Skill ID：`research-skill`
- 安装版本：`0.1.0+codex.20260826165109`
- Marketplace：`personal-opencode-imports`

## 安装位置

- 开发源码：`C:\Users\6seve\Codelib-severin\2_Business\Severin research skill`
- 个人插件源：`C:\Users\6seve\plugins\severin-research`
- Codex 缓存：`C:\Users\6seve\.codex\plugins\cache\personal-opencode-imports\severin-research\0.1.0+codex.20260826165109`
- 个人 Marketplace：`C:\Users\6seve\.agents\plugins\marketplace.json`
- 兼容入口：`C:\Users\6seve\.agents\skills\research-skill`
- 兼容入口类型：目录 `Junction`
- 兼容入口目标：`C:\Users\6seve\Codelib-severin\2_Business\Severin research skill\skills\research-skill`
- 旧失效符号链接备份：`C:\Users\6seve\.agents\skills\research-skill.legacy-broken-20260826`
- 上一版安装记录：`Severin-research-legacy-20260825.md`

## 组件路径

- Plugin 清单：`.codex-plugin\plugin.json`
- MCP 配置：`.mcp.json`
- 独立 MCP 服务器：`dist\mcp\server.mjs`
- Ponytail MCP App：`dist\app\index.html`
- Skill：`skills\research-skill\SKILL.md`
- 命令注册表：`skills\research-skill\commands\registry.json`
- 编排层：`skills\research-skill\orchestrators\`
- 基础工作流：`skills\research-skill\workflows\`
- Schema：`skills\research-skill\schemas\`
- 验证器：`skills\research-skill\validators\`

## 环境变量和 API Key

- 不需要环境变量。
- 不需要 API Key。
- MCP 服务器通过本地 stdio 启动，不监听网络端口。

## 安装与更新命令

```powershell
# 构建与测试
Set-Location "C:\Users\6seve\Codelib-severin\2_Business\Severin research skill"
npm install
npm test

# 安装或刷新插件
codex plugin add severin-research@personal-opencode-imports

# 查看状态
codex plugin list
```

开发版更新时，先使用官方 helper 更新 cachebuster，再把构建产物同步到个人插件源并重新执行 `codex plugin add`。

## 使用方法

新建 Codex 任务后可以直接输入：

- `科研状态`
- `建立实验`
- `准备实验`
- `执行实验`
- `收录实验`
- `处理问题`
- `审计实验`
- `开启下一实验`

也可以显式调用 `$research-skill`。Ponytail 面板只显示当前科研项目/实验，不提供跨项目首页；面板按钮把命令交回 Agent，不能绕过 Skill 直接修改 Claim 或 Conclusion。

## 注意事项和踩坑

- Plugin 安装完成后，当前旧任务不会自动重新发现新 Skill/MCP；请新建任务，必要时重启 Codex。
- `.mcp.json` 必须设置 `cwd: "."`，并以 `./dist/mcp/server.mjs` 这种插件根目录相对路径启动。`${__dirname}` 不会被 Codex 的插件 MCP 配置展开，会出现 Skill 已加载但 MCP 工具缺失。
- MCP 服务器必须构建为独立的 `server.mjs`。仅复制 TypeScript 编译产物会依赖开发目录的 `node_modules`，安装后可能失效。
- 旧版 `$research-skill` 符号链接因源码迁入 `skills\research-skill` 而失效。当前权限不能新建 SymbolicLink，因此改用无需管理员权限的 Junction；旧链接只作为备份保留。
- Evidence 的本地来源必须保存项目相对路径和 SHA-256；摘要不能替代原始文件路径。
- Result、Evidence、Claim 和 Conclusion 必须分层，审计通过不能冒充科学结论成立。
- Marketplace 只保存安装入口；开发源码仍以 Codelib 项目为准。

## 验证结果

2026-08-26 已验证：

- `codex plugin list` 显示 `severin-research@personal-opencode-imports` 为 `installed, enabled`。
- Plugin 源与 Codex 缓存副本均通过官方 `validate_plugin.py`。
- `$research-skill` Junction 通过官方 `quick_validate.py`。
- 缓存中的 MCP 服务器真实握手成功。
- MCP 工具共 3 个：状态读取、打开面板、完整实验校验。
- MCP App 资源为 `ui://severin-research/current-experiment.html`。
- TypeScript/MCP 测试 4/4 通过，Python 治理验证器测试 3/3 通过。
- `npm audit` 为 0 个已知漏洞。

2026-08-27 修复后再次验证：

- 源码测试 4/4 通过，插件源码和新缓存均通过官方 `validate_plugin.py`。
- 新缓存中的独立服务器完成真实 MCP 握手，并枚举出 3 个预期工具。

## 回滚

在 Codex 中卸载 `severin-research`，然后移除个人插件源和 Marketplace 条目。开发源码不应删除。若不再需要兼容入口，只移除 `C:\Users\6seve\.agents\skills\research-skill` Junction，不要删除其目标目录。
