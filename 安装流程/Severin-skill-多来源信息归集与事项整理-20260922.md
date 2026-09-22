# 知行 4.1.0：多来源信息归集与事项整理

安装日期：2026-09-22。平台：Windows。正式名称经用户确认；本模块位于既有“知识梳理”内，不增加顶层 Skill。

## 维护与安装位置

- 可编辑维护源：`C:\Users\6seve\Codelib-severin\2_Business\Severin-skill`。
- 正式设计：维护源的 `docs/multisource-matters-design.md`。
- 工作流：`skills/severin-knowledge-skill/workflows/multisource-matters.md`。
- CLI：`skills/severin-knowledge-skill/scripts/multisource_matters.py`。
- 市场安装源：`C:\Users\6seve\plugins\severin-skill`。
- 安装缓存：`C:\Users\6seve\.codex\plugins\cache\personal-opencode-imports\severin-skill\4.1.0`。缓存不作为编辑源。
- 市场配置：`C:\Users\6seve\.agents\plugins\marketplace.json`；Codex 配置：`C:\Users\6seve\.codex\config.toml`，此次配置保持不变。
- Python：使用现有 `py -3`；Codex：使用已有 `codex` CLI。模块不新增 API Key、环境变量、常驻服务或定时任务。邮件读取沿用用户已授权连接器；飞书、微信只预留来源契约。

## 常用方式

对知行说“按照多来源信息归集与事项整理，把这些材料按事项整理，先完整封存原件”。AI 应先读目标项目规则，完成来源封存后再整理。

在维护源或安装根目录下运行：

```powershell
py -3 skills/severin-knowledge-skill/scripts/multisource_matters.py inventory <来源目录>
py -3 skills/severin-knowledge-skill/scripts/multisource_matters.py snapshot <来源目录> <尚不存在的快照目录>
py -3 skills/severin-knowledge-skill/scripts/multisource_matters.py verify <来源目录> <快照目录>
py -3 skills/severin-knowledge-skill/scripts/multisource_matters.py extract-html <HTML文件> --output <新JSON文件>
codex plugin list --marketplace personal-opencode-imports --json
```

整理内容按事项放置结论、原文、译文、批注、状态和历史；不按平台分三套资料库。快照工具核验文件完整性，不自动证明语义无损、翻译完整或浏览器未导出状态已保存。

## 验证与边界

- 发布前 Node 测试、隔离包、MCP 工具与面板资源门禁通过。
- 正式发布 Python 回归：294 项，1 项环境相关跳过；新增模块11项定向测试全部通过。
- 发布包包含正式设计、工作流与CLI；361个安装缓存文件与ZIP逐字节一致。
- `codex plugin add severin-skill@personal-opencode-imports --json` 安装成功，版本4.1.0；安装清单显示 enabled=true。
- 新启动的只读 app-server 发现4.1.0路径，13个知行Hook均enabled=true、trustStatus=trusted。没有手动改写信任状态。
- 安装版CLI已在真实用户指定目录完成20个文件及空目录的快照与校验；私人文件不进入插件仓库或本文。
- 本轮既有对话上下文不会因此热替换；安装发现与CLI验收不冒充新对话的全部生命周期验收。
- 依赖审计报告现有间接依赖qs有1项moderate级条目；本次标准库模块未增改该依赖，未顺带扩大修复范围。

## 回退与注意事项

部署前将旧安装源完整保留于 `C:\Users\6seve\.codex\backups\severin-multisource-20260922\plugin-source-4.0.0`，旧4.0.0缓存也保留。该备份目录另有修改前配置、市场副本及本机验收记录。

需要回退时先检查后续新改动，将当前安装源另行保留，再恢复上述旧安装源并运行正常的 `codex plugin add`；不要整份覆盖后来修改的账号配置，不删除私人资料或历史缓存。

首次原生app-server检查因15秒等待超时失败；延长单次等待到60秒后成功。浏览器未导出的页面状态须从原页面合法导出，不能通过快照工具绕过浏览器安全策略。

代码提交：[d8ca51d](https://github.com/severin-ye/Severin-skill/commit/d8ca51d9c0da8086defbb08538e64f8f0fa8c347)。本文件记录插件安装，不包含私人邮件整理内容。
