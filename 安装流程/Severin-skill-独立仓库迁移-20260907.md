# Severin-skill 独立仓库迁移

- 安装日期：2026-09-07
- 平台：Windows
- 源码位置：`C:\Users\6seve\Codelib-severin\2_Business\Severin-skill`
- GitHub 仓库：`https://github.com/severin-ye/Severin-skill`
- 当前安装：`C:\Users\6seve\.codex\plugins\cache\personal-opencode-imports\severin-skill\0.3.5+codex.20260905113024`
- 插件来源副本：`C:\Users\6seve\plugins\severin-skill`
- 全局规则：`C:\Users\6seve\.codex\AGENTS.md`
- 父仓库：`C:\Users\6seve\Codelib-severin`

## 仓库关系

Severin-skill 在现有源码目录中作为独立 Git 仓库维护。父仓库通过 `2_Business/Severin-skill` 子模块指针锁定版本，不再直接跟踪其中的文件。

## 常用命令

```powershell
git -C C:\Users\6seve\Codelib-severin\2_Business\Severin-skill status
git -C C:\Users\6seve\Codelib-severin\2_Business\Severin-skill pull
git -C C:\Users\6seve\Codelib-severin submodule update --init -- 2_Business/Severin-skill
```

## 配置与密钥

本次迁移不新增环境变量、API Key 或全局模型配置。GitHub 访问继续使用本机 `gh` 与 Git 已有认证。

## 注意事项

- 先在独立仓库提交并推送，再在父仓库提交新的子模块指针。
- `.agent-status/` 是本地任务运行状态，已忽略，不进入远端。
- 固定路由通知模板在独立仓库的 `policies/codex-global.md` 维护，并部署到全局 `AGENTS.md`；Agent 运维 Skill 不再保存第二份模板。
- 迁移前备份位于 `C:\Users\6seve\.codex\backups\severin-skill-subrepo-20260907-002824`。
