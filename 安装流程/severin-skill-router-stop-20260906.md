# severin-skill Router 结束检查改为诊断

2026-09-06，Windows。用户明确授权：Router 在执行前检查；结束时缺失仅记录异常，不要求事后补调。

修改 `Workflow.stop`：execute 轮次缺少 route 时写入该轮 `route_diagnostic`，不加入阻断错误，不伪造 route，不增加该原因的自动补正。`before_tool` 的执行前检查未改；状态、恢复记录、计划表、标题和子代理等现有结束检查保留。Hook 结构检查不代替产品验收。

维护源：`C:/Users/6seve/Codelib-severin/2_Business/Severin-skill`。
插件来源：`C:/Users/6seve/plugins/severin-skill`。
当前安装：`C:/Users/6seve/.codex/plugins/cache/personal-opencode-imports/severin-skill/0.3.5+codex.20260905113024`。
上述两处运行来源仅同步 `hooks/personal_workflow.py`；执行入口仍使用现有 `py -3`。未改变 hooks.json、信任配置、环境变量、API Key、版本、依赖或全局 AGENTS.md。后台诊断仍存储于现有 PLUGIN_DATA/personal-sessions 的对应轮次。

备份：`C:/Users/6seve/.codex/backups/router-stop-diagnostic-20260906-174728`，manifest.json 含目标路径、备份文件和前后 SHA-256。回退前比对当前摘要与 after；有后续修改时合并回退，避免整文件覆盖。没有重装、重启或更改信任配置。

验证命令：维护源运行 `py -3 -m unittest discover -s tests`，112 项通过。直接加载已安装 Hook 并使用隔离测试状态，两项检查通过：缺路由仍拦执行但不拦 Stop；缺路由不隐藏其他 Stop 错误。重复 Stop 不产生补正，未伪造路由记录。源码与安装摘要一致；git diff --check 无格式错误。证据：维护源 `artifacts/router-stop-diagnostic-runtime.json`。

同路径后续 Hook 调用读取新版。以上是安装模块实测，不冒称已观察缺路由的真实用户 Stop 事件。未重做其他任务，未提交或推送；保留既有工作区改动。
