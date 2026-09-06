# 路由通知改为执行前提示（2026-09-06，Windows）

本记录取代 route-notice-format-result.md 中关于通知格式 Hook 校验的结论；旧记录保留追溯。

删除专用通知校验、加载与 scripts/route_notice.py。固定模板移到 Agent 运维 SKILL.md 开头，要求先输出，再执行或启动/复用子代理。保留其他 Hook；计划检查使用的日志读取函数原样迁入现有 Hook，仅调整说明文字与调用位置。内部 Router 文件未改。

安装位置：C:/Users/6seve/.codex/plugins/cache/personal-opencode-imports/severin-skill/0.3.5+codex.20260905113024
插件来源：C:/Users/6seve/plugins/severin-skill
源码：C:/Users/6seve/Codelib-severin/2_Business/Severin-skill
备份：C:/Users/6seve/.codex/backups/route-notice-prompt-only-20260906（0 源码、1 安装、2 插件来源；Hook 同步前快照另存 personal_workflow-pre-sync.py，保留并行任务的计划检查改动）
相关文件：hooks/personal_workflow.py、skills/severin-agent-ops-skill/SKILL.md、skills/severin-agent-ops-skill/references/route-notice-contract.md。
环境变量、API Key、全局配置无变更。

验证：py -3 -m unittest discover -s tests，105 项通过；node scripts/verify-plugin-package.mjs 隔离包检查通过；直接加载当前安装的 Hook，缺少路由通知但有恢复记录的 Stop 测试通过。安装文件摘要见 artifacts/route-notice-prompt-only-install.json。

同路径 Python Hook 后续调用读取新版，不需要重启来撤销校验；已加载的旧提示不会从当前上下文消失，以用户本次纠正为准。提示约束不等于程序保证每次执行前都正确输出。回退须先比较当前文件，恢复上述备份中的对应文件，避免覆盖后续改动；不修改信任设置。本次未提交、推送。
