# LoopX 安装记录

## 2026-09-25 旧看板停止理由校正

旧知行看板服务和计划任务已停用，本机旧端口无监听。切换时写入 LoopX 的四个 Goal 停止理由仍称“原服务仍为任务写入者”；这个历史理由在封存后过期，曾使 Codex 错误解释为旧看板仍在影响当前任务。已在四个项目注册表和 LoopX 全局投影中改为当前事实：旧看板已停用，Goal 保留的是迁移时设置的 LoopX 停止门禁。设置门禁的原因是 LoopX 1.2.0 的阻塞 Todo 本身不能保证 Goal 不获得自动轮次；恢复前仍须逐项核对原任务的人工暂停、依赖和审核。

本次只更新 Cembra、uagent-sync、TabPred、Severin-skill 的停止理由，四个 Goal 仍为 `stopped`，`quota should-run` 读回均为 `false`；Todo 内容与状态未修改。CuraView 已有切换后的较新决定，当前为 `active`，其激活理由未覆盖。更正前的五份注册表原件备份在 `C:\Users\6seve\.codex\loopx\backups\20260925-stale-stop-reasons`。下文“五个 Goal 全部停止”是切换当时的验收快照，不代表本段更正后的当前状态。

## 2026-09-25 Codex 对话连接补验与本机配置

此前的“已连接”只验证了项目、Goal/Todo 状态和看板页面，**没有验证看板向 Codex 发送消息并收到回复**。用户实际发送消息时页面报“Codex 上游拒绝了本轮请求参数”；因此此前把完整聊天连接说成已验收是错误的。

根因已从 Codex 上游错误查明：Goal 对话未显式指定模型，继承了用户全局 `C:\Users\6seve\.codex\config.toml` 的 `gpt-6-sol`；当前 ChatGPT 账号的 Codex 连接不支持该模型。Manager 对话使用显式模型，不能用它或 CLI 登录成功推断 Goal 对话可用。用户原话并非被拒绝的原因；LoopX 的通用报错隐藏了上游的具体模型错误。

本机用独立包装入口 `C:\Users\6seve\.codex\loopx\bin\codex-compatible.cmd` 启动 Codex，为 **LoopX 启动的会话**指定经验证可用的 `gpt-6-astra`，不修改用户全局 Codex 模型。当前 Dashboard 用 `--codex-bin` 指向该入口，监听 `127.0.0.1:8765`。包装入口实际内容为 `call "C:\Users\6seve\AppData\Roaming\npm\codex.cmd" -c model=gpt-6-astra %*`；没有新增 API Key 或环境变量。

```powershell
& 'C:\Users\6seve\AppData\Roaming\uv\tools\loopx\Scripts\loopx.exe' dashboard --global-registry --host 127.0.0.1 --port 8765 --no-open --codex-bin 'C:\Users\6seve\.codex\loopx\bin\codex-compatible.cmd'
```

重启 Dashboard 时仍须使用这个参数；单独执行旧的 `loopx dashboard` 命令可能重现原问题。本机未设置开机自启。回退只需停止这个 Dashboard 进程并用普通 `codex` 入口重启；用户全局配置和旧聊天记录均未改。若以后账号支持原模型，先在新会话中做真实往返验证，再移除覆盖。更新 LoopX 或 Codex 后也应重做此验证。

实际验收：通过本机 `/api/chat/sessions` 为五个已停止 Goal 分别建立新会话，`resume_latest` 逐一返回新会话；旧失败会话及消息仍保留。TabPred 和 CuraView 分别通过 `/turns` 发出测试消息并在会话快照中读回 Codex 回复，状态均为 `ready`、`last_error_code=null`。另外在新开的 CuraView 浏览器页面读到“已连接”、旧错误历史与新的成功回复。其余三个 Goal 已确认新会话建立和接续，未逐个发送测试消息。**聊天接通不表示五个已停止 Goal 已获准执行任务**，其暂停门禁保持不变。

## 2026-09-25 与知行切换后的追加记录

下文“未连接任何项目”描述的是最初安装时的状态；本次已将 Cembra、CuraView、Severin-skill、TabPred、uagent-sync 五个项目连接到 LoopX 1.2.0。来自知行看板的 33 张未完成工作卡转换为 33 个阻塞 Todo，五个 Goal 全部设为 `stopped`，配额读回 `paused / should_run=false`。41 张对话镜像仅保留来源，62 张完成或删除卡只读封存；总计 136 张，无分类异常。

正式封存路径：`C:\Users\6seve\AppData\Local\SeverinBoardMigration\snapshots\board-20260925T063151Z-f04c4131`。它含 13,007 个文件、12,119 个事件，源文件复制前后无变化，`manifest.json` 标记 `consistent=true`。`inventory.json` 和 `shadow-map.json` 记录逐卡去向；`task-sources/` 提供本地可读来源，Todo 备注包含原 ID、批次和 SHA256。原看板 10.0.0 安装及数据保留，服务、计划任务和开机快捷方式已停用；回退材料在 `C:\Users\6seve\AppData\Local\SeverinBoardMigration\cutover-20260925`。目前仅这台电脑使用旧看板，远端旧同步保留历史，不用于覆盖本机。

知行插件已通过个人市场升级到 6.0.0，安装缓存为 `C:\Users\6seve\.codex\plugins\cache\personal-opencode-imports\severin-skill\6.0.0`；本机 `C:\Users\6seve\.codex\AGENTS.md` 已部署 LoopX 任务权威规则，`C:\Users\6seve\.codex\plugins\data\severin-skill-personal-opencode-imports\task-authority.json` 写入 `mode=loopx`。新宿主只读检查 13 条 Hook 全部启用且受信任。无新增 API Key 或环境变量；LoopX 自身路径不变。完整职责、测试与限制见[知行整合交付记录](https://github.com/severin-ye/Severin-skill/blob/main/docs/loopx-zhixing-integration-result-2026-09-25.md)。

常用核对命令：`loopx status --format json`、`loopx doctor --deep --format json`、`loopx quota should-run --goal-id <目标> --runtime-profile generic_cli --registry <项目>/.loopx/registry.json`、`loopx todo list --goal-id <目标> --project <项目> --registry <项目>/.loopx/registry.json`。本机当前终端仍可能通过 `C:\Users\6seve\.local\bin` 的 uv shim 找到 CLI，深度诊断会把命令路径认作不同分发；先将 `C:\Users\6seve\AppData\Roaming\uv\tools\loopx\Scripts` 放在当前 PowerShell `PATH` 最前，再运行诊断。最初只确认 Dashboard `http://127.0.0.1:8765/` 返回 HTTP 200；下面记录了任务页面的补验和修正。

回退须先停止相关 LoopX Goal 写入、保存切换后的新决定，再用保留的旧插件来源经 `codex plugin add severin-skill@personal-opencode-imports` 重装 5.1.1；核对后恢复旧全局规则和开机入口，启动保留的看板 10.0.0，读回旧数据。不要把封存快照直接覆盖切换后的有效工作。当前 Codex 轮次的旧看板复核只进入待应用事件，已保存在封存中；不把旧卡描述冒称为最新进展。

## 2026-09-25 已停止 Goal 的任务页面本机修正

用户在 LoopX“TabPred 待办接续”中看到空看板；CLI 实际能读到 5 个迁移 Todo。LoopX 1.2.0 的 Goal 专属状态接口默认只向页面提供可执行队列，已停止 Goal 被排除。已在**本机安装包**的 `C:\Users\6seve\AppData\Roaming\uv\tools\loopx\Lib\site-packages\loopx\chat_status_api.py` 中修正：只在指定已停止 Goal 且没有显式激活状态参数时，读取其持久 Todo。全局可执行队列与暂停门禁保持原样；上游源码和包版本未改。

- 原文件备份：`C:\Users\6seve\AppData\Local\SeverinBoardMigration\cutover-20260925\loopx-chat-status-api-1.2.0-original.py`；SHA256 `E91E0E57FC340F91C0E60C0D31076417984D0A57D042191331E74A029AEC2063`。
- 本机补丁：同目录 `loopx-chat-status-api-1.2.0-local.patch`。修正后安装文件 SHA256 `851CA9053CA8C59857430B7DAB08497D743A747F6DE111C7FC16A7EC2893F686`。
- 验收：重启本地 Dashboard 后，五个 Goal 专属接口显示 3、1、6、5、18 个 Todo，合计 33；浏览器打开 TabPred 真实页面显示 5 张“受阻”来源卡。未指定 Goal 的可执行队列为 0；五个 Goal 的 `quota should-run` 均为 `paused / should_run=false`；`doctor --deep` 为 `ok=true`、必需项失败 0。
- 回退本机修正：先停止 `loopx dashboard --global-registry --host 127.0.0.1 --port 8765 --no-open` 对应进程，核对备份文件 SHA256 后，把上述原文件备份复制回安装位置，再用同一命令重启 Dashboard 并读回页面。此回退只影响停止 Goal 的页面可见性，不会删除迁移的 Todo。
- `uv tool upgrade loopx` 或重新安装可能覆盖本机修正。升级后须检查官方版本是否已解决此问题，并重新验证五个 Goal 的页面读回及暂停门禁；不能只凭 HTTP 200 宣称验收通过。

安装日期：2026-09-25；平台：Windows 11、PowerShell 7.6.5。来源：[LoopX 官方仓库](https://github.com/loopx-project/loopx)的 [v1.2.0 发布版](https://github.com/loopx-project/loopx/releases/tag/v1.2.0)。本次安装的是正式 PyPI 包与 Codex 工作流技能，未安装独立桌面预览版，未连接任何现有项目。

## 安装位置和相关路径

| 对象 | 实际位置或状态 |
|---|---|
| Python 隔离环境 | `C:\Users\6seve\AppData\Roaming\uv\tools\loopx` |
| 实际 CLI | `C:\Users\6seve\AppData\Roaming\uv\tools\loopx\Scripts\loopx.exe` |
| uv 暴露的入口 | `C:\Users\6seve\.local\bin\loopx.exe`；能运行，但本版深度诊断无法把它与包记录的入口认作同一路径 |
| Codex 技能 | `C:\Users\6seve\.codex\skills\loopx` 及 `loopx-project`、`loopx-pr-program`、`loopx-pr-review`、`loopx-doc-registry`、`loopx-benchmark`、`loopx-self-repair` |
| 技能安装回读 | `C:\Users\6seve\.codex\skills\.loopx-skill-install.json` |
| 用户级状态根 | `C:\Users\6seve\.codex\loopx`；未创建项目级 `.loopx` 或 Goal |
| 安装来源核查副本 | `C:\Users\6seve\AppData\Local\Temp\loopx-review-20260925`，仅用于阅读 v1.2.0 源码，不是运行安装 |

用户 PATH 新增并置于 `C:\Users\6seve\.local\bin` 之前：`C:\Users\6seve\AppData\Roaming\uv\tools\loopx\Scripts`。它使新进程直接调用包内真实入口。当前 Codex 进程继承旧 PATH 时，可在该 PowerShell 进程临时前置此目录；重开 Codex 后再读回 `Get-Command loopx`。

本次没有新增 API Key、凭据或 LoopX 专用环境变量。`CODEX_HOME` 未设置时，技能写入默认 `~/.codex/skills`。Node.js v24.16.0 已存在，未改动 Node 安装。没有创建定时任务、连接项目、迁移知行数据或修改知行插件。

## 安装与验证

```powershell
uv tool install --python 3.13 'loopx==1.2.0'
loopx workflow-skills --install
loopx --version
loopx doctor --deep --format json
loopx capability list --format json
```

实际结果：CLI 返回 `loopx 1.2.0`；7 个技能在 `.loopx-skill-install.json` 的文件摘要、版本和来源核查均通过。用包内真实 CLI 入口运行 `doctor --deep`，结果 `ok=true`、`typescript_control_plane.status=ready`、`skill_delivery.status=ready`，必需检查失败数为 0。首次通过 uv shim 运行诊断时，仅 `command_package_same_distribution` 失败；临时把包内 `Scripts` 目录放在 PATH 首位后通过。新 Codex 会话的技能发现尚需重启宿主后验证。

本次另以 `loopx dashboard --global-registry --host 127.0.0.1 --port 8765 --no-open` 启动临时本地面板；`http://127.0.0.1:8765/` 返回 HTTP 200。该进程仅供当前登录会话预览，不设开机自启；页面目前没有接入的项目目标。

已安装包的 `capability list` 返回 22 个能力条目：17 个 `active-preview`、4 个 `experimental`、1 个 `compatibility-facade`。目录可用不等于各能力已接入项目或实际跑通业务流程。当前未调用 `loopx connect`、`start-goal` 或自动心跳，因此没有把知行看板、科研项目或已有任务迁入 LoopX。

## 常用命令

```powershell
loopx --version
loopx doctor --deep
loopx capability list --format json
loopx capability show issue-fix --format json
loopx workflow-skills --dry-run --format json
loopx dashboard
```

连接某个**已选定**项目时，先核对现有状态与职责，再从项目根目录运行 `loopx connect`；若尚未初始化，按返回提示决定是否使用 `start-goal --guided`。不要把工作区根目录当成单一项目，也不要把安装技能视为自动接管已有任务。官方操作边界见[安装指南](https://github.com/loopx-project/loopx/blob/v1.2.0/docs/guides/installing-loopx.md)和[项目入门](https://github.com/loopx-project/loopx/blob/v1.2.0/docs/guides/getting-started.md)。

## 与知行的边界和回退

LoopX 提供 Goal、Todo、人工门禁、证据、配额、跨会话续行、多人认领与交接、Workspace、PR/Issue/文档/研究能力；其中任务状态、调度、看板和部分代理协作与知行存在重叠。知行仍有个人表达与协作规则、中文任务习惯、科研冻结/审计/MCP、HTML 高亮批注、学习/翻译/论文/套磁等专门能力。**本次未删减知行**：两个系统尚未确定同一项目的状态权威，也没有数据迁移和旧任务验收。精简应先选一个项目做受控迁移，验证旧任务、人工暂停、审核与交付记录后，再逐项停用知行的重复写入和调度入口。

本次对照核对了当前宿主的知行插件清单（5.1.1）及知行仓库的功能边界目录；知行看板的正式运行版本和旧任务数据没有在本次安装中做迁移验收。下表是精简候选，不是可立即删除的文件清单。

| 重叠职责 | 知行现行入口 | 精简建议与条件 |
|---|---|---|
| 长期任务状态、待办和恢复 | `skills/severin-task-continuity-skill/`、`hooks/personal_workflow.py` 的 Agent Status 部分 | 某项目确定由 LoopX Goal/Todo 负责并通过旧任务迁移验收后，停用该项目的重复状态写入；个人认知恢复记录需另行决定是否保留 |
| 通用看板、人工门禁、自动续做与配额 | `board/` 中的任务调度和对应状态接口 | LoopX Workspace/Quota 接管某项目且暂停、审核、额度、交付记录逐项验收后，才能停用该项目的看板调度；不要直接删除整个看板或历史数据 |
| 代理认领、交接与进度监督 | `skills/severin-agent-ops-skill/` 的生命周期流程、看板代理协调 | 可将任务认领、交接与接受回执交给 LoopX；知行按用户习惯判定 Luna/Sol/Astra 的 Router 暂保留，LoopX 的执行 binding 不等于同一套模型选择策略 |
| 工程交付/PR/文档材料索引 | 知行交付规则、`skills/severin-project-docs-skill/` 与看板交付记录 | LoopX 可承担通用 Issue/PR/质量门禁和资料登记；知行仍负责仓库文档内容维护与本项目特别验收，待逐流程核对后只删除重复登记步骤 |
| 研究任务图、探索和基准记录 | `skills/severin-research-skill/` 与科研面板 | LoopX 可管理上层 Goal、假设探索和 benchmark 任务；知行的实验冻结、运行/收录、原始证据、Claim/Conclusion 分层及 MCP 校验继续保留 |

LoopX 安装本身不会读取或迁移知行看板数据。若两者同时向同一项目写任务、暂停或验收状态，会形成两个互不一致的权威；迁移时应先确定一个项目、一个状态所有者，再停止对应旧写入，保留只读历史和回退副本。

如只回退本次安装，先关闭本次 `loopx dashboard` 本地进程，再运行 `loopx workflow-skills --uninstall`，确认它仅移除未改动的 LoopX 管理技能；随后运行 `uv tool uninstall loopx`，并从用户 PATH 删除本次新增的 `C:\Users\6seve\AppData\Roaming\uv\tools\loopx\Scripts` 项。不要删除知行文件、现有项目状态或其他 `~/.codex` 内容。若以后已连接项目，卸载 CLI 不会自动删除其 `.loopx/` 和证据，应单独核对。

## 注意事项

- 本版 `loopx doctor --deep` 对 uv 在 `~/.local/bin` 生成的 shim 报命令路径不一致；使用包内真实入口可通过。重新打开 Codex 后需再验证新 PATH 和技能发现。
- `loopx dashboard` 是浏览器/PWA 入口；Windows 独立桌面预览安装器需要另行安装和手动更新，本次没有安装。
- 能力目录中有预览与实验性条目；看目录或安装技能不代表外部提供者、授权、真实任务验收或自动化已启用。
