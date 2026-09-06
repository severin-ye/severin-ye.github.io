# severin-skill 交付规则与表格提示更新

日期：2026-09-06。平台：Windows。用户已授权实施与部署；本次为同路径提示和政策更新，没有重装或改变 Hook 信任设置。

维护源：`C:/Users/6seve/Codelib-severin/2_Business/Severin-skill`。
插件来源：`C:/Users/6seve/plugins/severin-skill`。
安装位置：`C:/Users/6seve/.codex/plugins/cache/personal-opencode-imports/severin-skill/0.3.5+codex.20260905113024`。
全局入口：`C:/Users/6seve/.codex/AGENTS.md`。
可执行入口：安装目录中的 `hooks/personal_workflow.py`，使用现有 `py -3`。

同步文件：插件来源和安装位置的 `policies/codex-global.md`、`policies/collaboration-contract.md`、`policies/delivery-contract.md`、`hooks/personal_workflow.py`，以及全局入口。环境变量、API Key、配置文件、依赖和用户数据没有变更。

验证命令：维护源中执行 `py -3 -m unittest discover -s tests`，110 项通过；已安装 Hook 子进程验证通过，九个部署文件摘要核对通过。半角 `|` 才是 Markdown 表格分隔符，全角 `｜` 保留给对话标题与路由通知。

备份：`C:/Users/6seve/.codex/backups/delivery-table-20260906-173734`。回退按其中 manifest.json 比较当前摘要后恢复对应旧文件，避免覆盖后续改动；不更改信任配置。新的 Hook 调用读取更新后的文件；当前上下文中已加载的旧文本不会自动删除。

完整变更、来源对应和验证边界见 [部署记录](../../2_Business/Severin-skill/docs/delivery-table-result.md)。未提交、推送或公开发布。
