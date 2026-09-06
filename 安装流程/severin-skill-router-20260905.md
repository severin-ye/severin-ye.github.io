# Router 安装切换记录

2026-09-05，Windows。用户明确授权安装、切换和推送。

- 当前安装版本：`0.3.5+codex.20260905113024`，Codex CLI 安装成功。
- 维护源：`C:\Users\6seve\Codelib-severin\2_Business\Severin-skill`。
- 市场来源：`C:\Users\6seve\plugins\severin-skill`。
- 安装缓存：`C:\Users\6seve\.codex\plugins\cache\personal-opencode-imports\severin-skill\0.3.5+codex.20260905113024`。
- 内部入口：`C:\Users\6seve\.codex\plugins\cache\personal-opencode-imports\severin-skill\0.3.5+codex.20260905113024\skills\severin-agent-ops-skill\scripts\router_entry.py`。
- 宿主规则：`C:\Users\6seve\.codex\AGENTS.md`，只替换已批准的外部/内部说明及总任务上限 3→4。
- 个人市场：`C:\Users\6seve\.agents\plugins\marketplace.json`。
- 回退备份：`C:\Users\6seve\.codex\backups\severin-router-switch-20260905-203023`，包括安装来源、原宿主规则、原配置、市场、原版本清单和独立 Router。
- 旧活动目录已移至：`C:\Users\6seve\.codex\backups\severin-router-switch-20260905-203023\external-router-retired`，没有删除原件。

## 验证

193 个发布文件与安装缓存一致。新启动的原生 app-server hooks/list 发现新版路径，13 个 Severin Hook 均 enabled=true、trustStatus=trusted，未手工写入信任哈希。宿主 config.toml 解析后与部署前完全一致。

移出外部 Router 后，安装版内部入口成功返回 Astra/medium。安装版 Hook 使用临时状态执行入口模拟，确认内部原文与适配命令。原 23 文件在维护源和退役备份摘要不变。

这证明安装、路径切换、宿主发现和本地入口检查成功；不代表本对话已载入的旧上下文被热替换，也不是新用户任务全部生命周期的真实验收。请用新任务确认新入口；如果桌面仍显示旧版本，再重开应用。未自动重启或创建新任务。

## 日常使用

直接说“查看当前模型分类表”。查看安装：`codex plugin list --marketplace personal-opencode-imports --json`。命令入口保留 `decide`、`plan`、`project-status`、`project-disable`、`project-enable` 等原子命令。

无需新增 API Key、系统环境变量、后台服务或定时任务。运行依赖使用现有 Python、Node、Codex；PLUGIN_ROOT/PLUGIN_DATA 由宿主提供。

## 回退

先检查本次之后是否有用户新改动。恢复备份的 plugin-source 到原市场来源，再使用 codex plugin add 安装原版本；仅恢复本次宿主规则差异。需恢复独立 Router 时，将 external-router-retired 移回原活动目录。不要整体覆盖 config.toml 或市场配置，不删除维护源与历史原件。

## 推送范围

仅本个人插件维护目录及其必要原始快照，不包含其他项目改动、宿主配置或本机部署备份。Git 提交与远端验证结果见任务最终回复。

## 推送前回归补充

完整 Python 71 项在本任务独立临时目录全部通过。首次使用系统 ESTsoft 临时目录时，跨进程锁测试出现一次 WinError 5；未修改锁代码，在独立临时目录复验通过。新增 .gitattributes 仅固定 Router 原件不作 Git 换行转换，23 个已暂存 Git 对象与原摘要一致。
