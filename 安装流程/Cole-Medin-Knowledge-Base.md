# Cole Medin Knowledge Base 安装记录

- 安装日期：2026-09-26。
- 平台：Windows 11、PowerShell。
- 来源：[coleam00/cole-medin-knowledge-base](https://github.com/coleam00/cole-medin-knowledge-base)，本机固定提交 `eba5e31bc628280c546d4828491051c308d550dc`。
- 安装位置：`C:\Users\6seve\.codex\knowledge-bases\cole-medin-knowledge-base`。
- 类型：独立的 Markdown / Open Knowledge Format 知识库，不是后台服务、Codex 插件或 MCP；用户实际指定的材料是其中一篇 [Loop Engineering 文章](https://github.com/coleam00/cole-medin-knowledge-base/blob/main/concepts/loop-engineering.md)。

## 相关路径与配置

- 阅读入口：安装目录下的 `SCHEMA.md` 和 `index.md`。
- 本次指定文章：`C:\Users\6seve\.codex\knowledge-bases\cole-medin-knowledge-base\concepts\loop-engineering.md`。
- 内容目录：`concepts/`、`entities/`、`sources/`，原始转录位于 `raw/`。
- 校验脚本：安装目录下的 `lint.py`，使用 Python 标准库，不需另装依赖。
- 仓库附带 `.claude/skills/` 中三套制作其他知识库的 Claude Code Skill，本次没有安装到 Codex。
- 本次没有设置环境变量、API Key、计划任务、服务、Hook 或插件自动加载项。
- GitHub 仓库没有声明可识别的许可证文件或 GitHub `licenseInfo`，因此暂只在本机作为外部参考资料使用，不复制到知行发布包或公开仓库。

## 常用命令

```powershell
git -C 'C:\Users\6seve\.codex\knowledge-bases\cole-medin-knowledge-base' status --short
git -C 'C:\Users\6seve\.codex\knowledge-bases\cole-medin-knowledge-base' rev-parse HEAD
rg -n '关键词' 'C:\Users\6seve\.codex\knowledge-bases\cole-medin-knowledge-base\concepts'
py -3 'C:\Users\6seve\.codex\knowledge-bases\cole-medin-knowledge-base\lint.py' --quiet
```

更新时先核对上游提交和本地修改，再从安装目录执行 `git pull --ff-only`；回退时保留旧提交号并检出对应提交，或移走整个独立目录。

## 安装验证与已知问题

- `gh repo clone` 成功，本机 HEAD 为上述提交，克隆后 `git status --short` 为空。
- `SCHEMA.md` 和 `index.md` 可读取，概念、实体、视频摘要及原始转录按相对链接组织。
- 上游 `py -3 lint.py --quiet` 当前返回 5 个 E1 错误：`CLAUDE.md`、`.claude/references/pipeline-guide.md` 和三份 `.claude/skills/*/SKILL.md` 缺少该仓库要求的 `type` frontmatter。
- 这些错误来自克隆原件，本次没有修改第三方仓库，也不把 lint 报错解释成知识内容已通过完整校验。

## 与知行扩展的边界

当前只安装了包含目标文章的参考库，尚未把这篇文章写入知行的 Skill、Hook、看板或发布包；接入计划以文章提出的多会话执行节点、退出条件、持久状态、成本和质量约束为范围，观点须能追溯到其来源视频与时间戳。

## 参考文章融入知行的设计（尚未实施）

- 参考对象是 [Loop Engineering 概念文章](https://github.com/coleam00/cole-medin-knowledge-base/blob/main/concepts/loop-engineering.md)，它提出多会话节点、明确退出条件、持久状态、成本控制与人工关口，并非可直接运行的 Skill。
  - 文章中的 Claude 命令、Archon 和 Postgres 是示例实现，不是知行看板的安装依赖，也不据此复制上游代码。
  - 本设计先针对看板创建的普通任务改善自动执行效果，不改变 Codex 对话卡片的执行权限。

### 两种任务来源与统一边界

- 看板创建的普通任务由用户在看板输入目标和详情，项目开启自动运行且任务通过筛选后，由看板规划、派发、验收和交付。
  - 看板拥有这类任务的执行状态、断点和完成证据，仍须遵守暂停、依赖、资源与发布保护。
- Codex 对话创建的任务由对话同步器映射为 `source=codex_conversation`、`executionPolicy=observe_only`、`completionPolicy=user_only` 的卡片，原对话仍是工作现场。
  - 普通看板调度器排除这类卡片，原对话被打断或缺少可审核交付时的有界续做由同步器在原线程处理，完成仍由用户确认。
- 两类任务可以统一目标描述、来源标识、证据、缺口和交付报告的展示口径，并复用现有任务存储而不另造任务库。
  - 两类任务不能直接统一启动、续做和完成权限，因为让普通调度器再次执行对话任务可能重复写入或与原对话抢占现场。
  - 如将来需要让看板接管某个 Codex 对话任务，应单独设计明确交接和互斥机制，不能借这篇文章静默转换现有卡片。
- 以上来源和权限以知行仓库 `board/conversation-sync.md`、`board/conversations.mjs` 与 `board/scheduler.mjs` 的现行实现为依据。

### 看板创建普通任务的现有流程与负责人

- 第 1 步：用户在看板填写并保存任务，`board/public/app.js` 发送请求，`board/server.mjs` 调用 `board/store.mjs` 保存卡片和状态。
  - 仅保存任务不会自动开工，项目自动运行开关、任务的执行意向和人工暂停共同决定它是否进入候选范围。
- 第 2 步：`board/scheduler.mjs` 检查项目开关、设备归属、并发和配额，以及任务依赖、暂停、待决问题与可执行状态。
  - Codex 对话镜像卡在这一步被排除，由 `board/conversations.mjs` 负责观察和既定条件下的原线程接续。
- 第 3 步：`board/scheduler.mjs` 根据候选输入指纹决定是否调用只读规划，`board/runtime.mjs` 为规划启动 Codex 会话并接收结构化方案。
  - 规划结果决定直接执行或创建子任务及关口，并给被选任务附执行范围和首次时间预算。
- 第 4 步：`board/workspace.mjs` 为写任务准备隔离 worktree，`board/scheduler.mjs` 保存断点并通过 `board/runtime.mjs` 启动执行线程。
  - 执行线程完成工作后提交 `done`、`blocked` 或 `failed` 结果及证据，暂停、技术阻塞和时间预算复核仍由调度器约束。
- 第 5 步：`board/workspace.mjs` 建立独立验收现场，`board/scheduler.mjs` 通过 `board/runtime.mjs` 启动独立验收线程并处理不通过时的修复路径。
  - 看板现已具备独立验收、时间复核、人工暂停和恢复路径，因此文章不会在这里凭空新增另一套循环。
- 第 6 步：写任务验收通过后由 `board/workspace.mjs` 整合、`board/delivery.mjs` 提交并远端发布，纯只读任务通过验收后由 `board/scheduler.mjs` 直接完成。
  - `board/store.mjs` 保留任务、运行记录和历史，界面再把状态与证据展示给用户。

### 文章对各模块的具体帮助与拟议变化

- 对规划阶段，文章提醒每次模型调用都应有明确输入和退出条件，拟由 `board/scheduler.mjs` 在现有输入指纹机制旁记录重规划触发事实和预期决策。
  - 当前已有指纹去重和缩小规划输入，先用现行版本的真实运行记录定位仍重复调用的情形，再决定是否增加代码层面的新信息判断。
  - 预期流程仍是“筛选→规划”，但相同候选与相同事实应复用已有等待结论，新任务、解除依赖或人工恢复应触发重评。
- 对执行与阻塞阶段，文章提醒一次循环不能只因还能继续就继续，拟由 `board/scheduler.mjs` 和现有运行断点记录本次尝试的目标、实际进展、下一可检验动作和停止理由。
  - 当前时间预算复核已要求比较前次承诺与新证据，先核对实际是否生效，再针对观察到的空转路径补强而不重复造门禁。
  - 预期流程仍是“执行→复核→必要时续做”，但无新证据且无可执行下一步时保留阻塞，人工暂停和待用户决定事项绝不自动恢复。
- 对验收与修复阶段，文章强调独立审查的质量关口，拟核对 `board/scheduler.mjs` 的修复派发是否引用具体失败证据且确实回到原任务的执行路径。
  - 预期流程仍是“独立验收→有证据的修复→重新验收”，并保留失败结果与历史而不把反复重试记作进展。
- 对状态与可观察性，文章强调会话分离后必须有持久交接，拟复用 `board/store.mjs` 的任务历史和调度器断点记录规划、执行、验收各段的输入摘要、结果、退出理由和可取得的耗时与用量。
  - `board/runtime.mjs` 只记录宿主实际返回的模型与 token 用量，无法取得时标明缺失而不从推荐模型推断实际模型。
  - 预期流程不增加用户操作步骤，只让每张卡能解释为什么启动、为什么继续、为什么停止及交付证据在哪里。
- 对模型选择，文章仅提供“各节点可分别选模型”的思路，必须先取得同一类任务的质量与成本基线，再评估知行现有运行时路由是否值得调整。
  - 不把个人 Codex 对话的 Router 自动套到看板的后台会话，也不以减少模型调用次数单独声称质量改善。

### 实施顺序与验收边界

- 第一阶段只做现行版本的任务回放和运行记录审计，区分已存在的指纹去重、时间复核与真实空转点。
  - 验收信号是能为每次疑似重复规划或阻塞复核指出状态变化、输入差异和后续动作，不能把旧版本统计直接当成现行缺陷。
- 第二阶段只针对已证实的空转路径改 `board/scheduler.mjs` 与现有运行记录，并覆盖新增任务、解除依赖、人工恢复、人工暂停和技术故障五类转移。
  - 验收信号是同状态等待不反复启动模型，有新事实时能够继续，原执行和验收路径仍有证据且没有重复派发。
- 第三阶段按规划、执行、验收分别记录可取得的模型、耗时与 token 用量，再用同仓库同类任务的配对样本比较成本、用户等待和独立验收质量。
  - 验收信号是质量不退步且成本或等待确有可测改善，再决定是否调整各节点模型或范围。
- 设计范围只涉及知行现有看板的自动执行链和运行收据，不新增第二套 Goal/Todo、独立数据库、常驻循环服务，也不改变 Codex 对话卡片的用户完成权。
