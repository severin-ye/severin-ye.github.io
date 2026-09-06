# 后台状态维护周期：设计与交付

日期：2026-09-07；Windows。用户授权：将后台状态维护改为单次任务超过30分钟或连续5轮，并更新设计文档。

## 设计事项

| 事项 | 现在是什么样 | 准备改成什么 | 依据和理由 |
|---|---|---|---|
| 状态维护 | 原方案每轮要求review | 单轮超过1800秒或累计5轮时要求维护 | 用户确认的频率 |
| 执行模式 | 原方案通过review绑定状态文件 | classify单独登记模式，无需状态文件 | 保留执行前约束并解除逐轮维护依赖 |
| 计数 | 无状态维护周期 | 每个逻辑轮次仅计一次，成功维护后重置 | 自动补正不能重复计数 |
| 文档与安装 | 描述逐轮维护 | 同步维护源、当前安装、插件来源与全局频率条款 | 保证文本与行为一致 |

此表记录实施前设计，以下为已经完成的行为。

## 已实现语义

- 单次任务按一个逻辑用户—Agent轮次计时，首次观察该轮时记录开始时间；严格超过1800秒才到期。跨轮空闲不计入下一轮。
- 在Stop事件检查维护是否到期，不新增定时器，不承诺第30分钟立即唤醒；无Hook事件时不会运行。
- 累计5个完成回复轮次，第五轮结束前要求维护。逻辑轮次去重，Hook自动补正沿用原轮次；中断不计入。旧会话从新机制观察点开始，不追算历史对话或空闲。
- review成功结果被实际PostToolUse观察后更新周期；只有输出receipt文字不能满足。review后的文件摘要仍需一致。
- classify仅登记read-only、plan、execute或trivial，不读写Agent Status文件、不满足review；原路由调用确认、只读/计划限制和子代理并发规则仍保留。
- 个人恢复记录仍逐轮输出；标题仍十轮复核。宿主Plan Mode依旧不要求写状态；门槛到期而宿主模式不明时不强迫写入。未恢复固定路由通知Hook。
- 只读短问答无需classify、状态文件或review；执行任务按需要classify，达到状态维护门槛再review。未删除既有状态与历史。

## 验证与边界

源码147项Python回归通过；现有隔离包检查通过；当前安装6项周期回归通过：第五轮、补正去重、1799/1800/1801秒、跨轮空闲、classify无状态文件、原路由门槛、中断及长任务维护后重置。

第一次全回归包含临时目录WinError 5与3项旧逐轮断言失败；更新到期测试前提后全回归通过。第一次安装态测试夹具仍发送源码helper路径，2项未登记review；将夹具路径指向真实安装后6项通过，未为此改动生产判断。

时间测试使用受控时钟与临时会话，不声称已真实等待30分钟。当前安装文件已更新；实际当前任务可调用classify。仍需后续真实对话自然经过第5轮观察；不伪造当前会话Hook事件或改计数。

## 文件与安装

源码：C:/Users/6seve/Codelib-severin/2_Business/Severin-skill

当前安装：C:/Users/6seve/.codex/plugins/cache/personal-opencode-imports/severin-skill/0.3.5+codex.20260905113024

插件来源：C:/Users/6seve/plugins/severin-skill

全局频率条款：C:/Users/6seve/.codex/AGENTS.md；维护源：policies/codex-global.md。

本次同步hooks/personal_workflow.py、policies/codex-global.md、skills/severin-task-continuity-skill/SKILL.md；全局仅替换状态维护频率句。未修改hooks.json或写信任摘要；未改Router原件、模型、全局模型设置、标题策略或个人恢复记录格式。未提交、推送、重启。环境变量及API Key未改动。

## 使用

同一已安装personal_workflow.py入口支持classify --data-root <插件数据路径> --session <当前任务> --turn <当前轮次> --mode execute，不需要--status-path。到期使用原review命令并附状态路径。通常依照本轮Hook给出的参数调用，不手填其他任务身份。

## 回退

备份目录：C:\Users\6seve\.codex\backups\status-cadence-20260907-000047

每行对应唯一目标与备份。恢复前比较当前文件与本次摘要，有后续修改先合并，不整体覆盖插件；恢复后校验原摘要。新测试tests/test_status_cadence.py与本文属于本次新增，可保留作追溯。

| 目标 | 备份 | 原摘要 | 本次摘要 |
|---|---|---|---|
| C:/Users/6seve/Codelib-severin/2_Business/Severin-skill/hooks/personal_workflow.py | C:/Users/6seve/.codex/backups/status-cadence-20260907-000047/0/hooks/personal_workflow.py | 5ec12926a6087901b31674c9aec085b9727fe2ed50292babedc81adfeb450db8 | a590b9e0cd4a3eb5a6c7bd9a6b27944e84d942a24de950175ceda323eaded4e7 |
| C:/Users/6seve/Codelib-severin/2_Business/Severin-skill/policies/codex-global.md | C:/Users/6seve/.codex/backups/status-cadence-20260907-000047/0/policies/codex-global.md | 16411a8a0ccaf370fbcafcbaf7d25d90794e089a840ab660dfc5808e3dfbe546 | ad53b4967e415de9855873380f26c2dd9d0fa222547658429291a2e5286b8a8a |
| C:/Users/6seve/Codelib-severin/2_Business/Severin-skill/skills/severin-task-continuity-skill/SKILL.md | C:/Users/6seve/.codex/backups/status-cadence-20260907-000047/0/skills/severin-task-continuity-skill/SKILL.md | a0429e7ed29f8646787c6450887e5ad9d928448574143bcf74a3c5ab3b46c374 | 72c13ace4a79005e71a054fe7580fa91ef196cdf71d0a32bbe531bf831ea6c60 |
| C:/Users/6seve/.codex/plugins/cache/personal-opencode-imports/severin-skill/0.3.5+codex.20260905113024/hooks/personal_workflow.py | C:/Users/6seve/.codex/backups/status-cadence-20260907-000047/1/hooks/personal_workflow.py | 5ec12926a6087901b31674c9aec085b9727fe2ed50292babedc81adfeb450db8 | a590b9e0cd4a3eb5a6c7bd9a6b27944e84d942a24de950175ceda323eaded4e7 |
| C:/Users/6seve/.codex/plugins/cache/personal-opencode-imports/severin-skill/0.3.5+codex.20260905113024/policies/codex-global.md | C:/Users/6seve/.codex/backups/status-cadence-20260907-000047/1/policies/codex-global.md | 16411a8a0ccaf370fbcafcbaf7d25d90794e089a840ab660dfc5808e3dfbe546 | ad53b4967e415de9855873380f26c2dd9d0fa222547658429291a2e5286b8a8a |
| C:/Users/6seve/.codex/plugins/cache/personal-opencode-imports/severin-skill/0.3.5+codex.20260905113024/skills/severin-task-continuity-skill/SKILL.md | C:/Users/6seve/.codex/backups/status-cadence-20260907-000047/1/skills/severin-task-continuity-skill/SKILL.md | a0429e7ed29f8646787c6450887e5ad9d928448574143bcf74a3c5ab3b46c374 | 72c13ace4a79005e71a054fe7580fa91ef196cdf71d0a32bbe531bf831ea6c60 |
| C:/Users/6seve/plugins/severin-skill/hooks/personal_workflow.py | C:/Users/6seve/.codex/backups/status-cadence-20260907-000047/2/hooks/personal_workflow.py | 5ec12926a6087901b31674c9aec085b9727fe2ed50292babedc81adfeb450db8 | a590b9e0cd4a3eb5a6c7bd9a6b27944e84d942a24de950175ceda323eaded4e7 |
| C:/Users/6seve/plugins/severin-skill/policies/codex-global.md | C:/Users/6seve/.codex/backups/status-cadence-20260907-000047/2/policies/codex-global.md | 16411a8a0ccaf370fbcafcbaf7d25d90794e089a840ab660dfc5808e3dfbe546 | ad53b4967e415de9855873380f26c2dd9d0fa222547658429291a2e5286b8a8a |
| C:/Users/6seve/plugins/severin-skill/skills/severin-task-continuity-skill/SKILL.md | C:/Users/6seve/.codex/backups/status-cadence-20260907-000047/2/skills/severin-task-continuity-skill/SKILL.md | a0429e7ed29f8646787c6450887e5ad9d928448574143bcf74a3c5ab3b46c374 | 72c13ace4a79005e71a054fe7580fa91ef196cdf71d0a32bbe531bf831ea6c60 |
| C:/Users/6seve/.codex/AGENTS.md | C:/Users/6seve/.codex/backups/status-cadence-20260907-000047/global-AGENTS.md | 0c9243139443cd407c96a336bab510385112ccacd73897d6dfffaa0542f3d38d | 24c5e3312e86397aaaae7dfe6d54e20e41a42e8d3d585f4d596c72fcad878166 |
| C:/Users/6seve/Codelib-severin/2_Business/Severin-skill/tests/test_stop_evidence.py | C:/Users/6seve/.codex/backups/status-cadence-20260907-000047/0/tests/test_stop_evidence.py | 02c66b5995a4b9b3dace7b4d9c57a64ea1298f2a38ae2714660226c93859ff81 | c33af158260ce96b20e1bce03d99c8f2ee9ed951cfd6dd33b3138e59ea6bee8d |
