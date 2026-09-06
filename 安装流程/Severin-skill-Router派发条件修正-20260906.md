# 子代理派发条件修正：安装与验收记录

日期：2026-09-06；平台：Windows / PowerShell / Python 3。

## 已交付行为

适配入口区分用户禁止、派发信息不足、未超过五分钟、没有独立任务。只有个人条件满足才继续使用原 Router 的收益、容量与生命周期判断。decide 和 plan 均清除不允许的启动及复用安排，模型建议保留。

用户禁用参数必须提供当前任务真实用户消息的原话与物理行号。来源核验不判断原话语义、引用关系或后续撤销，仍由主对话负责；不会保存成永久禁用配置。整体估时与独立性由主对话判断，程序不验证估时准确性。

## 验证

- 源码 Python 回归：121项通过（包含24项路由集成测试）。
- 受保护 Router 原测试：7项通过。
- 现有隔离安装包检查：通过。
- 当前安装入口 DispatchGateTests：9项通过，覆盖用户证据、错误输入、299/300/301秒、缺字段、无独立任务、收益与容量、plan嵌套安排和复用。
- 源码23个Router原文件摘要不变；安装及市场来源中的非缓存Router原文件与源码一致。原文件中的历史字节码不进入发布包。
- 安装与市场来源的入口、Skill共4个目标文件摘要一致。
- 只读核验当前真实用户消息来源成功；引用“不增加审核 Agent”只用于来源测试，不解释为禁止所有子代理。
- 新消息之后，Hook已接受当前安装入口的成功调用；安装态实际返回“未超过五分钟”，disabled_by_user为false。
- 未启动真实子代理，不将入口或模拟测试称为真实模型执行验收。

## 安装位置与配置

源码：C:/Users/6seve/Codelib-severin/2_Business/Severin-skill

当前安装：C:/Users/6seve/.codex/plugins/cache/personal-opencode-imports/severin-skill/0.3.5+codex.20260905113024

插件来源：C:/Users/6seve/plugins/severin-skill

沿用安装目录版本 0.3.5+codex.20260905113024，属于该安装的局部更新。本次只同步适配入口和个人运维Skill；源码另更新集成测试和隔离包验证命令。未改Hook、全局模型配置、项目配置、历史状态；没有提交、推送或重启。

Python入口使用现有 CODEX_HOME / CODEX_THREAD_ID 与本机原始会话记录识别当前任务；未新增或修改环境变量，不需要API Key。

## 常用命令

以下为PowerShell命令，路径指向当前安装。decide只产生建议与派发协议，不自行启动代理。

```powershell
py -3 "C:/Users/6seve/.codex/plugins/cache/personal-opencode-imports/severin-skill/0.3.5+codex.20260905113024/skills/severin-agent-ops-skill/scripts/router_entry.py" decide --task-kind complex --estimated-seconds 120 --overall-estimated-seconds 240 --independent-task no
```

只有用户确实禁用时才附 --no-subagents --user-disable-quote 和 --user-disable-message-line；不得为了小任务而使用该参数。旧调用缺少整体估时或独立性字段时保留模型建议，但不生成可执行的派发安排。

## 逐文件回退

备份根目录：C:/Users/6seve/.codex/backups/router-dispatch-boundary-20260906-192632

下表每行给出唯一原件备份与目标。恢复前先比较目标当前摘要与“本次交付摘要”；若有后续修改，先合并比较，不整文件覆盖。恢复时将对应备份复制回该目标，再校验“原始摘要”。不要恢复整个插件目录或改写状态、配置。源码测试和验证脚本只恢复源码对应文件。

| 恢复目标 | 原件备份 | 原始摘要 | 本次交付摘要 |
|---|---|---|---|
| C:/Users/6seve/Codelib-severin/2_Business/Severin-skill/skills/severin-agent-ops-skill/scripts/router_entry.py | C:/Users/6seve/.codex/backups/router-dispatch-boundary-20260906-192632/0/skills/severin-agent-ops-skill/scripts/router_entry.py | 17018d1352e967f045bc83d83c18210931e701de5fd8b2f55a4a3a464e67c1b8 | bd1624ca677e14ba2cfa199ab28cc4d02dcd4c933de7c576d4e7cc15164dc5b5 |
| C:/Users/6seve/Codelib-severin/2_Business/Severin-skill/skills/severin-agent-ops-skill/SKILL.md | C:/Users/6seve/.codex/backups/router-dispatch-boundary-20260906-192632/0/skills/severin-agent-ops-skill/SKILL.md | 306fc24f28a5c0b4054c1b846024bcb3c45f53dbf7dcf3b1de1cd703b21d36dc | 3d882271bfcf1cc94bb5b4d4f74479e9050e96f84edfb7e4640a913b5af706a8 |
| C:/Users/6seve/Codelib-severin/2_Business/Severin-skill/tests/test_router_integration.py | C:/Users/6seve/.codex/backups/router-dispatch-boundary-20260906-192632/0/tests/test_router_integration.py | 2b8ef0db6e4eeee44600ad7dc1e4ad27c016ae3536e57f67557f1448d9cd466c | c89535f5e19d1f3c7109d4bca0cbbb724de38cf496bb857818c6a80383476866 |
| C:/Users/6seve/Codelib-severin/2_Business/Severin-skill/scripts/verify-plugin-package.mjs | C:/Users/6seve/.codex/backups/router-dispatch-boundary-20260906-192632/0/scripts/verify-plugin-package.mjs | 6254da3774d261a9ad077594aaec6021756ba6335c7cacde3b94d9f68cb2b839 | 1be2efb6a54b656cc5c0a86aa42e7cf13296409c0e1c5ae02569120bfc49e997 |
| C:/Users/6seve/.codex/plugins/cache/personal-opencode-imports/severin-skill/0.3.5+codex.20260905113024/skills/severin-agent-ops-skill/scripts/router_entry.py | C:/Users/6seve/.codex/backups/router-dispatch-boundary-20260906-192632/1/skills/severin-agent-ops-skill/scripts/router_entry.py | 17018d1352e967f045bc83d83c18210931e701de5fd8b2f55a4a3a464e67c1b8 | bd1624ca677e14ba2cfa199ab28cc4d02dcd4c933de7c576d4e7cc15164dc5b5 |
| C:/Users/6seve/.codex/plugins/cache/personal-opencode-imports/severin-skill/0.3.5+codex.20260905113024/skills/severin-agent-ops-skill/SKILL.md | C:/Users/6seve/.codex/backups/router-dispatch-boundary-20260906-192632/1/skills/severin-agent-ops-skill/SKILL.md | 306fc24f28a5c0b4054c1b846024bcb3c45f53dbf7dcf3b1de1cd703b21d36dc | 3d882271bfcf1cc94bb5b4d4f74479e9050e96f84edfb7e4640a913b5af706a8 |
| C:/Users/6seve/plugins/severin-skill/skills/severin-agent-ops-skill/scripts/router_entry.py | C:/Users/6seve/.codex/backups/router-dispatch-boundary-20260906-192632/2/skills/severin-agent-ops-skill/scripts/router_entry.py | 17018d1352e967f045bc83d83c18210931e701de5fd8b2f55a4a3a464e67c1b8 | bd1624ca677e14ba2cfa199ab28cc4d02dcd4c933de7c576d4e7cc15164dc5b5 |
| C:/Users/6seve/plugins/severin-skill/skills/severin-agent-ops-skill/SKILL.md | C:/Users/6seve/.codex/backups/router-dispatch-boundary-20260906-192632/2/skills/severin-agent-ops-skill/SKILL.md | 306fc24f28a5c0b4054c1b846024bcb3c45f53dbf7dcf3b1de1cd703b21d36dc | 3d882271bfcf1cc94bb5b4d4f74479e9050e96f84edfb7e4640a913b5af706a8 |

## 已观察到的安装注意事项

在同一轮更新入口后，旧Hook上下文仍保存更新前摘要，拒绝登记新版调用，进而拦住安装态测试。发送下一条真实用户消息后正常刷新，测试通过；无需重启，也未伪造Hook事件或修改摘要确认。

证据：artifacts/router-dispatch-install.json、artifacts/router-dispatch-installed-verification.json；原始备份摘要：备份目录manifest.json；批准计划：docs/superpowers/plans/2026-09-06-router-dispatch-boundary.md。
