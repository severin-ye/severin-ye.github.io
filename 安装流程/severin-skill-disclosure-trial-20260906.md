# Severin五份规则披露周期试装

2026-09-06，Windows，Codex Desktop/0.153.4。用户要求先试装再验证；已试装，尚未完成真实压缩恢复验收。

- 源码：C:/Users/6seve/Codelib-severin/2_Business/Severin-skill/hooks/personal_workflow.py。
- 安装：C:/Users/6seve/.codex/plugins/cache/personal-opencode-imports/severin-skill/0.3.5+codex.20260905113024/hooks/personal_workflow.py。
- 市场来源：C:/Users/6seve/plugins/severin-skill/hooks/personal_workflow.py。
- 状态：C:/Users/6seve/.codex/plugins/data/severin-skill-personal-opencode-imports。
- 回退：C:/Users/6seve/.codex/backups/severin-disclosure-trial-20260906-214248，含installed/marketplace原脚本、状态快照。恢复脚本前核对后续改动；不要用旧状态覆盖新任务进度。
- 原生可执行文件：C:/Users/6seve/AppData/Local/OpenAI/Codex/bin/8e5b6932251c2c1c/codex.exe。

无需手动启用开关；下一真实入口首次披露，后续未变普通轮次不再重复全文。hooks/list显示13处理器enabled/trusted。未改AGENTS、信任配置、规则正文，无新增API Key、环境变量或依赖，沿用宿主PLUGIN_DATA和现有Python。

常用验证：在源码目录运行`py -3 -B -m unittest discover -s tests -p 'test_*.py' -q`。最新141项回归通过；测试不等于真实压缩验收。五份正文前后哈希未变。

完整证据：[试装与验收记录](C:/Users/6seve/Codelib-severin/2_Business/Severin-skill/docs/rule-disclosure-result-2026-09-06.md)。
