# Severin-research 安装记录

- 安装日期：2026-08-26（2026-08-27 修复 MCP 入口）
- 平台：Windows 11 / PowerShell / Codex Desktop / Codex CLI 0.149.0
- Plugin ID：`severin-research`
- Skill ID：`research-skill`
- 安装版本：`0.1.0+codex.20260827044008`
- Marketplace：`personal-opencode-imports`

## 安装位置

- 开发源码：`C:\Users\6seve\Codelib-severin\2_Business\Severin research skill`
- 个人插件源：`C:\Users\6seve\plugins\severin-research`
- Codex 缓存：`C:\Users\6seve\.codex\plugins\cache\personal-opencode-imports\severin-research\0.1.0+codex.20260827044008`
- 个人 Marketplace：`C:\Users\6seve\.agents\plugins\marketplace.json`
- 已停用兼容入口备份：`C:\Users\6seve\.agents\skills-disabled\research-skill-junction-20260827`
- 备份类型：目录 `Junction`，仍指向开发源码中的 `skills\research-skill`
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
- Python 治理验证器依赖已在 `requirements.txt` 中声明，当前为 `jsonschema>=4.23,<5`。
- MCP 服务器通过本地 stdio 启动，不监听网络端口。

## 安装与更新命令

```powershell
# 构建与测试
Set-Location "C:\Users\6seve\Codelib-severin\2_Business\Severin research skill"
npm install
py -3 -m pip install -r requirements.txt
npm test

# 对指定插件目录执行安装态发布门禁
node scripts\verify-plugin-package.mjs --plugin-root "<插件目录或 Codex 缓存目录>"

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

`收录实验` 完成校验后，最终对话回复必须为本次实际处理的每个问题分别输出“核验问题—假设—结果”。
未登记假设和证据不足都有固定回退文本；结果摘要不能创建 Evidence，也不能冒充 Conclusion。

## 注意事项和踩坑

- Plugin 安装完成后，当前旧任务不会自动重新发现新 Skill/MCP；请新建任务，必要时重启 Codex。
- `.mcp.json` 必须设置 `cwd: "."`，并以 `./dist/mcp/server.mjs` 这种插件根目录相对路径启动。`${__dirname}` 不会被 Codex 的插件 MCP 配置展开，会出现 Skill 已加载但 MCP 工具缺失。
- `npm test` 包含安装态发布门禁：生成不含 `node_modules` 的隔离包，按 `.mcp.json` 启动服务器，并强制枚举 3 个工具和面板资源。入口路径或打包依赖错误会在安装前失败。
- MCP 服务器必须构建为独立的 `server.mjs`。仅复制 TypeScript 编译产物会依赖开发目录的 `node_modules`，安装后可能失效。
- 旧版 `$research-skill` 兼容 Junction 已移出 `.agents\skills` 发现目录，避免和插件内 Skill 重复加载。Junction 仅作为可恢复备份保留，正式入口只有 `Severin-research` 插件。
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
- 新增安装态发布门禁，并对 `0.1.0+codex.20260826170828` 的 Codex 缓存副本执行同一门禁，结果通过。
- GitHub Actions 已在干净 Linux 环境中完成 Node 构建、隔离安装态握手和 Python 治理校验。
- `0.1.0+codex.20260827044008` 新增收录完成响应契约；源码测试 5/5、缓存契约检查和安装态门禁均通过。

## 回滚

在 Codex 中卸载 `severin-research`，然后移除个人插件源和 Marketplace 条目。开发源码不应删除。若要临时恢复旧入口，可把 `skills-disabled\research-skill-junction-20260827` 移回 `.agents\skills\research-skill`；不要删除其目标目录。
