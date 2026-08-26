# Severin research skill

- 安装日期：2026-08-25
- 平台：Windows 11 / PowerShell
- 作者：Severin
- Skill ID：`research-skill`
- 显示名称：`Severin research skill`

## 路径

- 开发项目：`C:\Users\6seve\Codelib-severin\2_Business\Severin research skill`
- Skill 唯一源码：`C:\Users\6seve\Codelib-severin\2_Business\Severin research skill\research-skill`
- Codex 用户入口：`C:\Users\6seve\.agents\skills\research-skill`
- 入口类型：目录 `SymbolicLink`
- 旧位置：`C:\Users\6seve\.codex\skills\research-skill`，已迁移，不再保留副本。

Codex 入口使用绝对目标路径指向唯一源码，因此以后只修改开发项目中的文件，不需要手工同步。

## 环境变量与密钥

- 不需要环境变量。
- 不需要 API Key。
- Windows 未开启 Developer Mode；本次使用一次管理员 PowerShell 创建目录符号链接。

## 创建命令

```powershell
$Target = "C:\Users\6seve\Codelib-severin\2_Business\Severin research skill\research-skill"
$Link = "C:\Users\6seve\.agents\skills\research-skill"

New-Item -ItemType SymbolicLink -Path $Link -Target $Target
```

## 验证命令

```powershell
Get-Item -LiteralPath "C:\Users\6seve\.agents\skills\research-skill" |
    Format-List FullName, LinkType, Target

Get-Content -LiteralPath "C:\Users\6seve\.agents\skills\research-skill\SKILL.md" -TotalCount 20

python "C:\Users\6seve\.codex\skills\.system\skill-creator\scripts\quick_validate.py" `
    "C:\Users\6seve\.agents\skills\research-skill"
```

验收结果：`LinkType=SymbolicLink`，目标路径正确，链接侧与源码侧的 `SKILL.md` SHA-256 一致，官方 Skill 校验通过。

## 使用

```text
$research-skill
```

该 Skill 允许隐式调用；科研任务匹配其 `description` 时，Codex 也可以自动加载。

## 注意事项

- 必须链接整个 `research-skill` 目录，不要只链接 `SKILL.md`。
- 目录名与 `SKILL.md` 中的 `name: research-skill` 必须保持一致。
- 修改 symlink 目标后若当前会话没有刷新，重新启动 Codex 再检查技能列表。
- 删除安装入口时只删除 `C:\Users\6seve\.agents\skills\research-skill` 这一 symlink，不要删除真实源码目录。
- 源码项目当前位于 Codelib 工作区内，提交时只暂存本项目和本安装记录，避免带入其他项目的未提交变化。
