> 2026-09-05 当前版本：0.3.2+codex.20260904152955。首次真实测试未通过：桌面仍注入0.2.0，且自动标题格式保留条件过松。格式校验已修复，55项Python及隔离包通过，Hook仍已信任；需重开桌面核对版本后复测。

> 2026-09-05 当前版本更新：0.3.1+codex.20260904152248，缓存对应同名版本目录。补齐首次规范命名，保留第十轮复核；54 项 Python 测试通过，安装后全部 Hook 仍 trusted/enabled，无需重新信任。备份：C:\Users\6seve\.codex\backups\severin-first-title-20260905-002228。以下保留之前完整路径、依赖和安装记录。

# Severin 个人 Hook 实施结果

## 2026-09-25 知行 6.0.0 与 LoopX 整合安装

平台：Windows 11；来源：`C:\Users\6seve\Codelib-severin\2_Business\Severin-skill` 的 6.0.0 发布包。安装源为 `C:\Users\6seve\plugins\severin-skill`，Codex 插件缓存为 `C:\Users\6seve\.codex\plugins\cache\personal-opencode-imports\severin-skill\6.0.0`；旧 5.1.1 来源和配置备份在 `C:\Users\6seve\AppData\Local\SeverinBoardMigration\cutover-20260925`。实际全局规则为 `C:\Users\6seve\.codex\AGENTS.md`，插件数据标记为 `C:\Users\6seve\.codex\plugins\data\severin-skill-personal-opencode-imports\task-authority.json`（`mode=loopx`）。

安装命令：`codex plugin add severin-skill@personal-opencode-imports --json`。核对命令：`codex plugin list --marketplace personal-opencode-imports --json`、`node scripts/verify-plugin-package.mjs --plugin-root <安装缓存>`、`py -3 scripts/inspect_host_hooks.py --cwd <项目根目录>`。安装器读回版本 6.0.0；解包校验通过，独立宿主读取 13 条 Hook 均启用且受信任，警告和错误均为 0。源码发布门禁通过 337 项 Python 测试（1 项跳过）及 14 项科研 MCP Node 测试。当前已运行的旧会话可能继续持有 5.1.1 规则文本，不能把独立宿主读取冒充旧会话热更新。

此次未新增 API Key、环境变量、科研 MCP 名称或 Hook 信任绕过。与 LoopX 重复的旧看板和 Agent Status 写入已封存；个人恢复记录、中文标题、Router、翻译、学习、论文、套磁、HTML 批注、科研实验治理和 MCP 继续保留。知行看板 10.0.0 原数据及安装仍在本机，服务和开机入口停用；详细私有封存与回退路径见[LoopX 安装记录](LoopX.md)。回退先停止 LoopX 相关目标写入并保留新决定，再用备份的旧来源经上述个人市场命令重装 5.1.1，逐条核对后恢复旧全局规则和看板启动入口；不要覆盖切换后的有效用户数据。

2026-09-04，Windows。本轮已完成规则修复、运行时实现、离线验收、安装和只读宿主发现；真实事件验收等待用户审核信任。不能标记整个计划 DONE。

## 之前、改后和理由

| 事项 | 之前是什么样 | 现在改成什么样 | 依据和理由 |
| --- | --- | --- | --- |
| 协作要求 | 恢复记录被误删，部分要求压缩 | 恢复五字段 Markdown、八字段状态、四象限、ponytail、计划分组、生命周期细则 | 对照原始 AGENTS 和后续明确纠正，见 requirements-reconciliation.md |
| 每轮执行 | 主要依赖 Agent 主动记得 | SessionStart/UserPromptSubmit 注入，PostToolUse 观察核验，Stop 检查并有限补正 | 降低遗漏；结构检查与语义判断仍分开 |
| 标题 | Agent 手工推进本地计数 | Hook 单独维护逻辑轮次，十轮触发主对话复核并核对真实结果 | 避免补正多计、两套计数及假改名 |
| 路由 | 外部 Skill 与本地规则并存 | 动态读取外部 Skill，受支持执行路径观察当前协议结果 | 模型目录不写死；协议适配变化仍需维护，不承诺绝对门禁 |
| 科研与中断 | 已有三个科研处理器，个人中断无入口 | 科研保持独立；10 种个人事件注册，Interrupt 因本机接口差异暂不注册 | 不破坏现有科研范围，不把不支持的事件混报为完成 |

## 实际安装

- 插件：severin-skill@personal-opencode-imports。
- 版本：0.3.0+codex.20260904145108。
- 维护源：C:\Users\6seve\Codelib-severin\2_Business\Severin-skill。
- 安装来源：C:\Users\6seve\plugins\severin-skill。
- 缓存：C:\Users\6seve\.codex\plugins\cache\personal-opencode-imports\severin-skill\0.3.0+codex.20260904145108。
- 全局规则：C:\Users\6seve\.codex\AGENTS.md，正文已与修复维护源核对一致。
- 备份：C:\Users\6seve\.codex\backups\severin-hooks-20260904-233515，含原规则、配置、市场、来源目录及摘要。
- 旧 severin-research 保持停用，未卸载。没有新 API Key、系统环境变量、后台服务、定时任务、重启、Git 提交或推送。

## 验证结果

| 层次 | 实际证据 | 状态 |
| --- | --- | --- |
| 原始资料 | 133 个科研原文件摘要不变；13 Skills、54 正文入口 | PASS |
| Python | unittest discover，50 项；包括同 ID Stop 续接、兼容关联、重复去重、状态越界、标题工具响应与并发锁 | PASS |
| Node/MCP | npm test，9 项，构建、MCP 三工具与面板、隔离包 | PASS |
| 官方格式 | 13 Skill quick_validate 与 validate_plugin | PASS |
| 安装一致性 | 175 个运行文件在发布包、来源和缓存完全一致；全局正文一致；config 语义与市场内容未变 | PASS |
| 宿主发现 | 原生 Codex Desktop/0.153.1 app-server hooks/list；13 条 Severin 定义，无 warnings/errors | PASS，仅发现 |
| 信任 | 10 条新个人处理器加 3 条原科研处理器均 untrusted；Ponytail 独立 3 条也 untrusted | 待用户审核 |
| 自动运行 | 尚未通过受信任 Hook 观察一次真实用户轮次、自动补正、十轮标题和代理派发 | 未验证 |
| 正式科研名单 | 尚未配置正式 research_roots，未批量改项目入口 | 待项目名单 |
| Interrupt | 官方文档存在，本地 schema 无此项；未注册 | 未接入 |

宿主审计通过新建只读 app-server 进程加载配置，没有创建用户线程或发消息；不能代替当前运行对话的热更新与真实事件证据。

证据：artifacts/host-audit/after-install.json、deployment-verification.json。接口说明：host-hook-contract.md。代码边界与操作：hook-runtime-guide.md。官方教程全文与来源摘要：references/codex-hooks/。

## 下一步：先审核四个个人入口

在 Codex 的 /hooks 中查看 severin-skill，先审核命令指向 personal_workflow.py 的 SessionStart、UserPromptSubmit、PostToolUse、Stop。三个原科研处理器指向 research_guard.py，不要混淆。先验收普通问答与一次缺失恢复记录，再接入执行前与子代理门禁。Ponytail 属于独立插件，需单独审核其来源。

审核是宿主信任边界，app-server 没有信任 RPC。本轮没有写 trusted_hash，也没用绕过参数。若当前桌面没有 /hooks 入口，需要确认该版本的审核界面；不能声称已经从本对话替用户信任。

## 回退

先在 /hooks 停用出问题的个人处理器。完整回退需先核对部署后改动，再从备份 plugin-source 恢复旧来源，通过官方更新流程重装；AGENTS 只恢复本轮差异。不要整体覆盖 config.toml 或 marketplace.json，不删除原始资料和任务状态。旧缓存 0.2.0 与本次备份保留。

两个必要子代理均由真实 list_agents 确认为 completed；主对话已核对其交付并修正四象限第二项和周期标题授权两处冲突。并行结果不替代主对话验收。


---
以下为 0.2.0 历史安装记录：

# Severin-skill 安装记录

安装日期：2026-09-04；平台：Windows；用户已批准安装、旧插件停用及全局规则切换。

## 安装位置

- 维护源码：C:\Users\6seve\Codelib-severin\2_Business\Severin-skill
- 安装来源：C:\Users\6seve\plugins\severin-skill
- Codex 缓存：C:\Users\6seve\.codex\plugins\cache\personal-opencode-imports\severin-skill\0.2.0
- 个人市场：C:\Users\6seve\.agents\plugins\marketplace.json
- 插件配置：C:\Users\6seve\.codex\config.toml
- 全局规则：C:\Users\6seve\.codex\AGENTS.md
- 部署前备份：C:\Users\6seve\.codex\backups\severin-skill-20260904-deploy

## 实际结果

severin-skill@personal-opencode-imports 0.2.0 已安装并启用；severin-research@personal-opencode-imports 保持安装但 enabled=false。全局规则已替换，正文与审阅候选一致，文件开头改为已部署说明。

对比备份确认：TOML 只有上述两个插件开关发生变化；个人市场只新增一个插件条目，其他条目和顺序保持不变。缓存内 13 个 Skill、54 个正文入口检查通过；以缓存作为输入的隔离 MCP 握手、3 个工具和面板资源验证通过。

## 运行依赖与命令

- Node：C:\Program Files\nodejs\node.exe；MCP 从插件根执行 node ./dist/mcp/server.mjs。
- Python 启动器：C:\Users\6seve\AppData\Local\Programs\Python\Launcher\py.exe；Windows 科研 Hook 使用 py -3。
- 不新增 API Key 或系统环境变量。Hook 的 PLUGIN_ROOT 由宿主提供，不手动配置。
- 查看状态：codex plugin list --marketplace personal-opencode-imports --json。
- 更新时使用 plugin-creator 的 cachebuster 与 codex plugin add 流程；不要只改缓存。

## 待宿主验收与注意事项

新任务用于加载新 Skill 和全局规则；现有任务不会因此可靠热替换已载入的上下文。科研 Hook 仍需宿主展示并由用户审核信任，当前配置没有新插件的 trusted_hash，未擅自写入。独立标题 Hook 未启用；标题复核由 Agent 调用已安装工具。科研项目入口未批量写入，项目范围仍待指定。

CLI 没有独立停用命令，因此仅定点修改旧插件 enabled=false 并验证 TOML 其他值不变。不得把停用说成卸载。

## 回退

保留旧插件来源和缓存。需要回退时停用新插件、重新启用旧插件，并先检查全局规则部署后是否有用户修改，再恢复备份中的 AGENTS.md。不要整体覆盖旧 config.toml 或 marketplace.json，否则会丢失之后的独立变更。本次不删除源文件、不提交或推送。


## 2026-09-05 Windows Hook 启动失败：已复现并修复命令

之前是什么样：13 个入口均用 `py -3 "%PLUGIN_ROOT%\hooks\...py"`。这属于 CMD 环境变量语法；已信任和 hooks/list 可见不能证明启动成功。之前 55 项 Python 测试没有覆盖真实 Shell 启动。

准备改成什么样（已完成）：13 个 Windows 入口统一用 `py -3 -X utf8 -c`，由 Python `os.environ['PLUGIN_ROOT']` 取路径、`runpy.run_path` 启动原脚本。保留原 Hook 逻辑，不新增代理服务、不写信任配置。

依据和理由：固定版本 rust-v0.153.1 的 core/src/session/mod.rs build_hooks_config 从任务 environment.shell 生成 Hook shell；hooks/src/engine/command_runner.rs 使用该 shell，仅缺省时才用 CMD。失败样例日志确认任务 Shell 是 PowerShell。原命令在 Windows PowerShell 与 PowerShell 7 均退出 1，错误为找不到包含字面量 %PLUGIN_ROOT% 的脚本；CMD 原命令成功。这解释了脚本尚未启动、没有个人会话文件的现象。未取得原失败事件的 Hook stderr，不能声称原宿主日志逐事件回放已完成。

验证：新增 tests/test_hook_launch_windows.py，旧命令产生 4 个子场景失败；修复后 56 项 Python 测试通过。实际安装缓存的两种命令分别经过 Windows PowerShell、PowerShell 7、CMD 执行，JSON 输出和个人 SessionStart 状态文件验证通过。发布包、安装来源、缓存 175 文件逐个一致；隔离 MCP 三工具和面板验证通过。

已安装：0.3.3+codex.20260904155103。原生 hooks/list 返回 13 个 Severin Hook 均 enabled=true、trustStatus=modified；Ponytail 和 Superpowers 信任未变化。因此现在必须通过宿主重新信任修改后的命令，之后才能验证真实任务事件。没有修改 trusted_hash，也没有重启桌面。

未完成：真实桌面 SessionStart/UserPromptSubmit/PostToolUse/Stop 事件验收、首次命名在主体工作前的顺序、十轮计数与补正不重计。当前实现入口提示首次命名、Stop 才补查，不是工具前强制命名；不能宣布所有原始验收已通过。下一步先验收脚本进入真实宿主，再按实际事件负载检查工具识别和时序，不继续盲目堆提示词。

证据：artifacts/host-audit/windows-shell-reproduction.json、windows-shell-verification.json、windows-shell-install.json。源码参考保存在 docs/references/codex-hooks/core-mod.rs 和 command_runner.rs；来源 https://github.com/openai/codex/tree/rust-v0.153.1/codex-rs 。

回退：C:\Users\6seve\.codex\backups\severin-hook-shell-20260905-005044 中保留旧安装源与 Hook 定义；恢复对应插件来源后重新通过 plugin add 安装，不能整体覆盖全局 config.toml。


## 2026-09-05 实施计划四列表格修复

用户明确要求固定“事项｜现在是什么样｜准备改成什么｜依据和理由”表格。已核对 TEN 计划第七节存在分组段落，但没有这张表；交付回复只有链接和摘要。旧规则只要求分组，旧 plan_errors 只搜索三个标签，属于要求表达和格式检查不匹配。

已将全局对应段、维护源协作契约和 Hook 入口改为四列表格；交付独立计划文档时聊天正文也必须展示事项总表。检查正确表头、分隔行和四格非空数据行；拒绝代码围栏中的表、空表和旧三段式。格式检查不证明语义覆盖。

0.3.4+codex.20260904155818 已安装，56 项测试通过，隔离包验证通过，175 个发布/来源/缓存文件一致。当前信任状态：{'modified': 13}。本轮没有改变 Hook 命令定义或写入信任配置。

剩余边界：plan_required 仍由 Agent review --plan 或 --mode plan 登记；没有实现任意自然语言计划的可靠自动识别。实际 Hook 运行仍依赖审核，不能宣布全流程强制生效。未改写另一个任务的 TEN 计划，避免覆盖该任务后续用户更改。


## 2026-09-05 问题和计划池

按用户最新批注，将恢复记录第4项改为“问题和计划池”，内含缩进子栏目“还没想清楚的问题”和“Severin计划要做的事情”；保留5个顶层字段、两个子栏目和直接Markdown呈现。用户计划原话：“处理 Superpowers 的兼容问题，并继续 Severin 的真实运行验收。”登记为计划，不自动执行。

同步全局对应段、维护源、连续性Skill与Hook格式检查；实际前置动作为信任审核时，第3项必须先写审核，不跳成查看验收。四列表格要求不变。

版本 0.3.5+codex.20260904160350 已安装，56项Python测试、插件与隔离包验证通过，175个文件发布/来源/缓存一致。Hook命令未变化；当前Severin信任状态：{'modified': 13}。无可调用的宿主信任审核工具，未改写trusted_hash代替用户审核。
