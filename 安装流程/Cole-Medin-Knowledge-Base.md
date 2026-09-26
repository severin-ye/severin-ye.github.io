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

## 参考文章融入知行的计划（未实施）

- 目标：改善知行看板创建任务后的执行效果，保持知行看板为任务状态的唯一当前入口。
  - 现状：看板已有规划、隔离实施、独立验收、持久运行记录和人工暂停，具体问题及证据见知行仓库的 `board/task-efficiency-investigation-2026-09-23.md`。
  - 取舍：文章描述的 Claude 命令、Postgres 和 Archon 属于外部实现举例，不作为本次要安装的组件。
- 第一阶段：把每次自动规划和阻塞复核的触发原因、新信息及预期动作写入现有运行记录，在没有新信息时避免重复开启模型会话。
  - 验收：同一状态副本中等待结论可以复用，新增任务、解除依赖和人工恢复仍会触发正确重评。
- 第二阶段：给执行节点明确完成、失败、暂停和最大重试条件，并核对失败修复是否真的被原执行线程尝试。
  - 验收：反复复核不会只生成同一句建议，人工暂停不会被自动恢复，失败候选和证据仍可追溯。
- 第三阶段：按规划、实施、验收分别记录模型、输入量、时长和可取得的 token 用量，再评估是否调整节点模型。
  - 验收：用同仓库基线和同任务的配对样本比较用户等待、成本与独立盲审质量，不以减少调用次数单独宣称质量提高。
- 实施边界：优先修改现有看板调度、运行收据与验收策略，不新增第二套 Goal/Todo、独立数据库或常驻循环服务。
