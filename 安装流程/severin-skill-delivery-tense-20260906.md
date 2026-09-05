# Severin-skill 交付时态修复安装记录

安装日期：2026-09-06，Windows。用户授权修改、安装并推送。

已完成：计划表仅用于未执行计划；交付总结使用“事项｜修改前是什么样｜已经改成什么｜验证结果”。完成计划移出计划池。本轮前文已展示计划表时，Hook 不再要求最终交付重复计划表。

维护源：C:/Users/6seve/Codelib-severin/2_Business/Severin-skill
市场来源：C:/Users/6seve/plugins/severin-skill
安装位置：C:/Users/6seve/.codex/plugins/cache/personal-opencode-imports/severin-skill/0.3.5+codex.20260905113024
全局规则：C:/Users/6seve/.codex/AGENTS.md
Hook：安装位置下 hooks/personal_workflow.py；个人恢复规则：skills/severin-task-continuity-skill/SKILL.md。

修改相应规则及 Hook，保留现有版本标识、Hook 配置与信任。无需新增依赖、环境变量或 API Key。现有 Python Hook 下次运行读取新版，已加载的对话文字不会被追溯改写。

验证：工作区 Python 回归 109 项通过；独立待提交版本交付回归 26 项通过；安装副本 26 项回归通过；隔离包、MCP 工具和面板门禁通过。用户消息及旧轮次不能替代本轮助手计划表。语义正确性仍由 Agent 判断，Hook 只检查可观察结构。

常用检查：`py -3 -m unittest discover -s tests -p test_delivery_plan.py`；`node scripts/verify-plugin-package.mjs`。

回退：C:\Users\6seve\.codex\backups\delivery-tense-20260906-000538，按 manifest.json 的 path/backup 对应关系恢复原文件。并行任务随后修改共用文件时，须对比后仅回退本次段落，避免覆盖后续工作。

踩坑：工作区存在其他任务未提交修改，使用 Git 基线叠加本次暂存内容独立验证；不混入其他任务的模型映射及通知策略改动。
