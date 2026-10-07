

## 2026-09-05 Superpowers Windows 兼容修复

已修改实际市场来源 C:/Users/6seve/.codex/plugins/superpowers/hooks/hooks-codex.json，新增 commandWindows：cmd.exe /d /c call "${PLUGIN_ROOT}/hooks/run-hook.cmd" session-start-codex。原非Windows命令与原脚本保持不变。新版本6.0.3+codex.20260904160759已安装；安装缓存三种Windows Shell均退出0并输出正确SessionStart上下文。测试命令：python scripts/check_superpowers_windows.py <安装根目录>。

通用plugin-creator验证器拒绝原有hooks字段；原生0.153.1支持此字段，已用原生安装、hooks/list及实际启动验证，未宣称通用校验通过。

来源备份见artifacts/host-audit/superpowers-backup-path.txt；回退可恢复备份来源后重新plugin add，不覆盖全局配置或信任哈希。修复为本地补丁，上游更新后需复查是否包含兼容修复。

审核步骤：新原生CLI启动提示Hooks need review时选择Trust all and continue；若已在CLI会话内，用/hooks进入事件列表，在事件列表按t信任全部。不要在PowerShell的PS提示符或桌面聊天输入/hooks。审核后推荐在现有任务结束后正常退出并重新打开Codex桌面一次，以新任务核验实际加载；不保证已运行任务热加载。未自动重启、未代写信任。

无新环境变量或API Key；依赖系统cmd与现有Git Bash。安装缓存：C:\Users\6seve\.codex\plugins\cache\personal-opencode-imports\superpowers\6.0.3+codex.20260904160759
