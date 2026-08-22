# goutoujunshi 安装记录

- 安装日期：2026-07-22
- 平台：Windows，PowerShell，Codex Desktop / Codex CLI
- 用途：在“恋爱skill”项目内提供恋爱问题分析、情绪支持、沟通策略和话术润色。

## 安装位置

- 项目目录：`C:\Users\6seve\Codelib-severin\0_DocWork\10 个人空间\爱\恋爱skill`
- Skill 目录：`C:\Users\6seve\Codelib-severin\0_DocWork\10 个人空间\爱\恋爱skill\.agents\skills\goutoujunshi`
- Skill 入口：`C:\Users\6seve\Codelib-severin\0_DocWork\10 个人空间\爱\恋爱skill\.agents\skills\goutoujunshi\SKILL.md`
- 上游仓库：`https://github.com/powerycy/goutoujunshi.git`
- 本地 Git 排除文件：`C:\Users\6seve\Codelib-severin\.git\info\exclude`

## 安装方式

使用 Codex 内置 `skill-installer` 的 Git 模式，将完整仓库安装到当前项目的 `.agents/skills` 下，并保留内层 `.git` 目录。该目录已加入父仓库的本地 `info/exclude`，不会修改团队共享的 `.gitignore`。

## 环境变量和 API Key

- 无需额外环境变量。
- 无需 API Key。
- GitHub CLI 已登录，Git 传输协议为 HTTPS。

## 常用命令

```powershell
# 验证 Skill 入口
Test-Path ".agents\skills\goutoujunshi\SKILL.md"

# 查看当前安装版本
git -C ".agents\skills\goutoujunshi" rev-parse --short HEAD

# 更新 Skill
git -C ".agents\skills\goutoujunshi" pull --ff-only

# 从当前项目启动 Codex
codex
```

在 Codex 中可用 `/skills` 查看，或直接输入：

```text
使用 $goutoujunshi 帮我分析当前的感情问题。
```

## 注意事项和踩坑记录

- 这是项目级 Skill，不是用户级 Skill；不要移到 `C:\Users\6seve\.codex\skills`。
- 当前项目是大型父仓库 `C:\Users\6seve\Codelib-severin` 中的子目录，因此 `info/exclude` 必须使用从父仓库根目录开始的完整相对路径。
- 安装目录保留内层 `.git`，可独立更新；父仓库不会跟踪它。
- 如果 Codex 未立即显示新 Skill，关闭并从该项目目录重新启动 Codex。
- 安装时上游仓库根目录包含 `SKILL.md`、README、LICENSE 等文件；实际内容以当前上游版本为准。

## 验证结果

2026-07-22 已验证：

- `SKILL.md` 存在。
- Frontmatter 声明的 Skill 名称为 `goutoujunshi`。
- 安装目录包含内层 `.git`，上游仓库内容已完整保留。
- 父仓库的本地排除规则已生效。
