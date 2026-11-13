# 知行14.5.3：项目开发资源归属规则安装记录

## 同日后续：看板实际入口已修，正式安装受阻

- 源码候选为插件14.5.4、看板19.1.2，[实现提交be6f005](https://github.com/severin-ye/Severin-skill/commit/be6f005)已整合主线a62a8ab并远端核验。新建执行与验收副本进入所属项目 `.dev/worktrees`；当前运行经独立验收、合入和远端回读后，由既有安全回收器收尾，暂停/在用/未知/独有数据保留并说明原因。
- Windows原安装器在项目专用 `.dev/test-data/board-project-workspaces-1113/native-install-19.1.2` 演练19.1.2，端口47892、无开机启动；未修改正式端口、注册表或快捷方式。用既有 `SEVERIN_BOARD_RELEASE_ONLY=1` 禁用测试服务的自动发现/调度后稳定响应，程序摘要与源码相同，受控模块链和受认证正常退出通过。仅是隔离演练，临时安装不作为本机正式环境登记。
- 正式组合安装命令为源码 `py -3 scripts/release.py native-install --revision <当前main提交> --receipt <项目内新回执目录>`，原生状态用 `native-status`。本次a62a8ab调用被旧正式47831服务仍监听的保护检查拒绝，未备份/激活、未执行后续插件更新。正式插件仍是下面的14.5.3，不能把候选号写成已安装。
- 正式数据继续位于 `C:\Users\6seve\AppData\Local\Packages\OpenAI.Codex_2p2nqsd0c76g0\LocalCache\Local\SeverinBoard`。旧服务PID35860接口超时，活动未能确认，未强停或改权限。待用户决定怎样处理旧服务，再从安装阶段继续；旧程序、正式数据和回退保留。
- 本轮无新增API Key、市场、全局配置或系统环境变量。release-only只用于本次测试进程；令牌没有进入文档。私有证据在源码项目 `.dev/receipts/board-project-workspaces-1113`。详细实现、保护与真实缺口见[工程记录](https://github.com/severin-ye/Severin-skill/blob/main/docs/board-project-workspaces-2026-11-13.md)和[验收记录](https://github.com/severin-ye/Severin-skill/blob/main/board/acceptance.md)。

## 当前结果

- 2026-11-13，在Windows本机安装知行14.5.3，来源为[主线提交d481cf8](https://github.com/severin-ye/Severin-skill/commit/d481cf81d472fbef99d71344a1c338b63978e1b2)。
- 官方插件安装接口单次响应成功，源目录与缓存字节核验通过；独立新会话发现21个知行Skill，其中新版编程开发正文SHA与合入源码一致。
- 真实安装及探测进程均自然退出；探测未运行模型轮次，临时禁用其Hook/MCP，不声称日常Hook行为或所有项目创建器已验收。
- 在用、暂停项目和正式数据没有移动，未重装未变化的看板；历史Board短路径创建器仍待适配，规则不冒称全机已迁移。

## 安装与配置位置

- 维护源码：C:\Users\6seve\Codelib-severin\2_Business\Severin-skill。
- 安装源：C:\Users\6seve\plugins\severin-skill。
- 本次缓存：C:\Users\6seve\.codex\plugins\cache\personal-opencode-imports\severin-skill\14.5.3。
- 现有市场配置：C:\Users\6seve\.agents\plugins\marketplace.json；Codex配置：C:\Users\6seve\.codex\config.toml，本轮没有修改市场或该配置。
- 实际全局规则：C:\Users\6seve\.codex\AGENTS.md，仅同步一段资源归属/收尾引用，其他字节保留；原文件私有备份在项目.dev/backups/resource-layout-1113。
- 原生入口：源码目录的scripts/native_plugin_install.mjs；打包入口：npm run release，状态读回：node scripts/native_plugin_install.mjs status --receipt <本次安装JSON的绝对路径>。
- 本次包、回执及验证资料在源码项目.dev/builds/resource-layout-1113和.dev/receipts/resource-layout-1113，未上传运行回执或个人配置。
- 安装器按现有接口在安装源旁保留旧版源备份，受该产品入口限制尚非项目内位置；本次未擅自搬动，具体绝对位置见私有安装回执sourceBackup。
- 本轮不新增环境变量、API Key或凭据，现有密钥配置保持原状；打包子进程临时使用项目内TMPDIR/TEMP/TMP，并设置该临时根为GIT_CEILING_DIRECTORIES，退出后不写系统设置。

## 验证与维护边界

- 规则依赖选择没有未知项，既有安装决策真实评测A/B/C/D四例及评测器14项测试通过，修改文档检查通过。
- 版本同步首次缺模块摘要，补齐有依据的模块记录后通过；版本历史旧条目的语义保留，新增14.5.3及派生行号偏移。
- 首次项目内临时夹具误识别外层Git根，正确隔离Git发现边界后，原包和解压后的安装态检查通过；没有放宽文档根保护。
- 新会话探测旧辅助模块引用已退役文件而失败，改用现有CodexRuntime作有限原生只读发现后通过，没有恢复旧发布控制器。
- 正式规则由编程开发Skill“工作副本与开发残留”“本任务测试资源的生命周期”维护；共享工具/模型按内容及必要兼容版本复用，任务内自主合入、适用验收、保护核验后清理，不能处理逐项说明原因。
- 规则文本不提供宿主强制删除能力，不能以任务完成为由清除正式数据、独有成果、在用/暂停工作或必要回退。
