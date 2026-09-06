# 已完成子代理重复补正修复

2026-09-05。用户授权定位并修复，未提交、推送或改变模型选择。

| 事项 | 现在是什么样 | 准备改成什么 | 依据和理由 |
|---|---|---|---|
| 原生代理观察 | list_agents 返回 completed，PostToolUse 未更新个人状态 | Stop 读取本任务、本轮真实调用及返回记录 | 原生 agents 调用的观察缺口 |
| 结果验证 | 待核对记录持续触发补正 | 完整有效查询才清除终态；运行和未知状态不放行 | 保留生命周期检查要求 |
| 安装 | 旧观察代码 | 备份后同步已安装文件 | 不依赖下次重新安装 |

## 原因与证据

目标任务 01a06fc2-86ec-7be1-b028-74c163d1e4e7 的真实调用 call_ppJhhcyVap9BeiFWqZL74p6W 返回 /root/package_audit completed；Hook 状态仍为 stop-observed，没有 agents_checked。本任务也通过真实 agents.list_agents 复现了未记录，而普通 exec 的 PostToolUse 回执正常。

修复前依赖 PostToolUse 观察原生 agents 工具；当前宿主没有将这些调用交给该观察分支，Stop 因此不断要求已经执行过的核对。恢复记录缺失会独立增加补正，未修改该规则。

现在从 Hook 提供的 transcript_path 获取原始 function_call/function_call_output，验证 session_meta、当前逻辑轮次、namespace、call_id、未过滤列表、明确状态及后续派发/生命周期事件。忽略助手文字、用户文字、压缩历史；不能解析时保持阻止。只读最后 16 MiB；旧查询不在范围内时要求新查询。日志格式不是稳定 API，未来格式变更会安全退回待核对，不会默认完成。

## 验证

- 同一真实调用记录回放：旧代码 block；新代码清除终态并正常返回。artifacts/agent-hook-replay-result.json。
- 78 项项目 Python 测试通过，含 7 项新增边界测试；Router 7 项回归通过。
- 当前安装副本读取真实调用记录成功，源码、市场来源、安装副本摘要一致。
- 此处真实日志回放与实际 Stop 事件区分：未主动向其他任务发送消息或修改它的状态；该任务下次有效本轮 list_agents 后的 Stop 会使用新代码。未声称已重新执行它的完整用户轮次。

## 安装与回退

安装文件：C:\Users\6seve\.codex\plugins\cache\personal-opencode-imports\severin-skill\0.3.5+codex.20260905113024\hooks\personal_workflow.py。

备份：C:\Users\6seve\.codex\backups\agent-hook-observation-20260905-220416。恢复其中 installed/personal_workflow.py 和 marketplace/personal_workflow.py 到对应路径即可回退本次安装文件；无须覆盖 config.toml。hooks.json 和信任配置未改，无新增环境变量、API Key 或依赖。

附带补齐用户前轮 Sol / medium 修改的旧回归断言：原 router-copy-manifest.json 不动，sources/router-sol-medium-authorized-delta.json 单独记录五个获准差异及前后摘要。
