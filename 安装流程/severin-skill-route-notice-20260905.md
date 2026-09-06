# 固定路由通知实施结果

2026-09-05，用户明确批准固定模板强制执行。

| 事项 | 现在是什么样 | 准备改成什么 | 依据和理由 |
|---|---|---|---|
| 展示规则 | Router 原件允许自然翻译 | 个人入口覆盖为固定中文字段、顺序和全角分隔符 | 用户确认三行模板 |
| 子代理说明 | 仅正文要求 | 检查紧邻的工作内容、启动理由行 | 防止遗漏 |
| Hook | 仅确认 Router 调用 | Stop 检查本轮助手消息中的通知格式 | 捕捉普通段落、缺字段及占位符 |
| 发布 | 未包含新检查模块 | 隔离包和已安装副本包含 route_notice.py | 避免只在源码有效 |

实现位置：scripts/route_notice.py、hooks/personal_workflow.py、skills/severin-agent-ops-skill/references/route-notice-contract.md。个人入口仅替换通知条款；内部 Router 原件与所有模型映射不变。

验证：83 项项目 Python 回归通过；隔离打包门禁通过；本轮真实日志 commentary 被正确识别。缺字段、改写段落、错误分隔符、引用/代码块、占位符以及子代理执行说明缺失均拒绝。用户消息和其他轮次不会充当本轮通知。已正确输出过的通知无需在最终回复重复；补正只补缺项。

边界：新增的是收尾格式检查，不宣称原生子代理派发前能被全部拦截，也不把通知文字当作模型执行证据。执行前输出仍由明确指令要求。保留原有补正次数上限。无 Router 建议或 Router 已禁用的轮次不增加通知要求。

安装文件位于 C:\Users\6seve\.codex\plugins\cache\personal-opencode-imports\severin-skill\0.3.5+codex.20260905113024；市场来源 C:\Users\6seve\plugins\severin-skill。Windows，无新增依赖、环境变量或 API Key；未修改 hooks.json、信任或全局配置。无需重启，同一路径的 Python Hook 下次运行即读取新版。

回退备份 C:\Users\6seve\.codex\backups\route-notice-format-20260905-232123，manifest.json 列出旧文件备份和新增文件。恢复旧文件，新增文件可保留但旧入口不引用。未提交或推送。

隔离包旧 Complex Bounded 断言同步为用户已批准的 Sol / medium，仅更新断言，不修改模型策略。
