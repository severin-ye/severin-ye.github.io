# 知行视频总结（VidSift）与本机程序

- 首次安装：2026-11-09；最近更新：2026-11-11（KST）；Windows，Edge日常环境，同一普通用户安装，不写HKLM。
- 独立扩展：5.6.0；本机程序复用5.5.0；独立扩展ID：`kggdkncbamdlhhihfkeldbbkppkgihad`，与原版独立。
- 扩展当前加载目录：`C:\Users\6seve\Codelib-severin\2_Business\VidSift\dist\VidSift-5.0.0-standalone`，目录名为历史名称，85文件已更新5.6.0；日常浏览器重载待用户操作及日志核验，先前已确认运行5.5.0。

## 实际安装位置

- 运行资源：`C:\Users\6seve\AppData\Local\VidSift\runtime`。
- 当前激活配置：`C:\Users\6seve\AppData\Local\VidSift\runtime\current.json`。
- 当前Native版本目录：`C:\Users\6seve\AppData\Local\VidSift\releases\5.5.0\native\8383df34d7f3442288e4b52bebf97f98`。
- Native清单：上述版本目录中的 `com.vidsift.media.json`；启动器 `native-launcher.exe`；实现 `host.py`。
- Python：`C:\Users\6seve\AppData\Local\VidSift\runtime\envs\py312-7b06f15a787dbfc5-8383df34d7f3442288e4b52bebf97f98\Scripts\python.exe`。
- FFmpeg：`C:\Users\6seve\AppData\Local\VidSift\runtime\bin\ffmpeg.exe`；来源、哈希及许可保存在同目录安装回执中。
- 最近一次Native回退：`C:\Users\6seve\AppData\Local\VidSift\backups\native-20261111-015057-f6cb7cb92f0e4edd93455979216ab03e\rollback.json`，可回5.4.0；扩展更新前5.4.1目录保留在`C:\Users\6seve\Codelib-severin\2_Business\VidSift\dist\VidSift-before-5.5.0-20261111-015703-3c45a59be64647afa43b80bbfd1609cc`。
- Chrome注册：`HKCU\Software\Google\Chrome\NativeMessagingHosts\com.vidsift.media`。
- Edge注册：`HKCU\Software\Microsoft\Edge\NativeMessagingHosts\com.vidsift.media`。

## 安装与检测

- 在普通Windows PowerShell中进入已解压的VidSift包目录，运行：

```powershell
.\installer\Install-NativeHost.ps1 -ProjectRoot (Get-Location).Path
```

- 安装器需要uv和系统自带.NET Framework C#编译器，安装yt-dlp、youtube-transcript-api、Pillow，复用或获取FFmpeg，不新增转写模型。
- 安装后在VidSift设置页检测本机程序；主机按需启动，任务后退出，没有常驻HTTP或开机启动项。
- 可用 `VIDSIFT_FFMPEG` 指向已有FFmpeg；媒体提取不需要API Key，抖音缺省Groq转写需要Groq API Key；自建服务地址和令牌沿原设置入口。
- 需要Groq音频转写但缺少Key时自动弹出密码输入窗口，底部小按钮打开[官方申请页](https://console.groq.com/keys)，保存并验证后继续原任务；有字幕或已有Key时不弹窗，设置页也可打开填写入口。
- 新输入由Native固定Groq模型列表接口验证后，以当前Windows用户DPAPI加密保存到`C:\Users\6seve\AppData\Local\VidSift\runtime\credentials\groq.dpapi`；不写浏览器storage、同步、日志、网址、命令行或安装包。
- 已有环境变量及`C:\Users\6seve\.env`的`GROQ_API_KEY`优先，不迁移或覆盖现有密钥；旧Native不认识新密文，回退时文件保留，原`.env`可继续使用，不自动写出明文。
- 回退命令中的Receipt使用上面的实际回退JSON路径：

```powershell
.\installer\Rollback-NativeHost.ps1 -Receipt '实际的rollback.json绝对路径'
```

## 已验证与边界

- 5.6.0：260项Node检查、隔离真实MV3/Edge改名及错误捕获回归、确定性打包通过；GPT接口为合成依赖，覆盖抖音/旧B站/YouTube平台前缀、原题清理、书库原题保持、临时跳过和仅一次发送，未重新调用真实Groq或重跑日常视频。
- 新普通会话采用“【平台】＋清理后的原视频标题”，不做语义重写，不批量改历史会话；日常加载目录已核对85文件与候选逐字节相同，5.5.0回退目录为`C:\Users\6seve\Codelib-severin\2_Business\VidSift\dist\VidSift-before-5.6.0-20261111-022708-58a1bd93ef6d49aa9dce8a77fc3c47a9`。

- 5.5.0：253项Node、103项Native、隔离真实扩展窗口/申请按钮/错误更正/保存继续/取消/来源切换/字幕绕过通过；DPAPI使用合成密钥验证真实Windows加解密，窗口验收的Groq与GPT为合成依赖，不冒充真实新密钥云端调用。
- 正常Windows隔离Edge已连接已安装Native5.5.0并确认旧密钥存在性，日常Edge新弹窗日志确认扩展5.5.0；原密钥、提示词和截图设置保护核验，未重跑视频。
- 原5.4.1日常42分钟抖音视频已完成Groq转写→GPT非空总结→书库保存，默认turbo；本次5.5只增加缺失Key的配置与恢复，下面旧版本记录保留为历史。
- 正常用户进程中的CIM文件核验和当前用户HKU注册表读回均通过，Chrome/Edge指向同一Native清单。
- 从正常Windows环境启动的隔离Edge成功连接本机程序5.1.0，并检出FFmpeg、yt-dlp与字幕组件；这不代替日常浏览器中每个平台的完整视频上传验收。
- 用户反馈B站在Edge“好像没有问题了”，保留为初步现场证据；日常浏览器抖音实际上传发送仍待确认。
- 正常Windows隔离Edge对抖音7695816752525053222实测：图片关仅下载同作品播放器独立音轨，未下载画面；音频821.27秒，对照页面821.247秒。
- 独立音轨与该作品原视频提取音轨的10、410、806秒样本波形相关系数分别0.99306、0.99200、0.98789；静音校验，未向AI网站上传，不代表整站或其他作品均通过。
- 原视频直连兜底也已对同作品验证完整音轨；通用下载器作为最后一次回退。

## 本次踩坑

- Codex的MSIX文件和注册表视图与日常浏览器不同，壳内 `%LOCALAPPDATA%\VidSift` 曾实际落在 `C:\Users\6seve\AppData\Local\Packages\OpenAI.Codex_2p2nqsd0c76g0\LocalCache\Local\VidSift`。
- 壳内Test-Path和HKCU读回成功、从同一环境启动的隔离Edge连接成功，仍可能对应日常Edge完全看不到的主机。
- 本次通过同用户的正常Windows安装环境部署到真正LocalAppData，外部读回及浏览器握手后才记录成功；没有关闭MSIX隔离、降低浏览器安全设置或覆盖商店扩展。
- 安装器现在把外部可见性验证放进注册/指针切换事务，失败会回退，不再仅凭自身视图报告安装成功。

- Windows PowerShell 5 的Get-Content原始文本仍附带文件系统属性，放入升级回执会递归展开并卡住；现改用File.ReadAllText保存旧激活配置，升级与回退专项通过。

- 抖音播放器urlList可为`[{src}]`对象，不能只按字符串解析；同作品简化页面数据也不能遮住含独立音轨的播放器数据，`music.play_url`不作为完整口播来源。

## 5.0.7扩展更新（2026-11-09）

- 仅更新独立扩展，继续使用已安装Native5.0.6；正常Windows隔离Edge已验证扩展5.0.7与Native5.0.6连接成功，没有重复安装依赖。
- 用户确认5.0.6在日常Edge音轨上传成功，AI Studio未自动发送且没有错误文字；5.0.7排除Run settings误匹配，使用原生输入setter，标题修改移至提交确认后。
- 全部附件确认后只点击一次，以新增页面对话轮次或停止生成控件确认接受；未知结果不重复发送，这不证明模型已成功生成完整逐字稿。
- AI Studio默认改为要求完整带时间戳SRT逐字稿；GPT默认原样采用用户在Edge VidSift中保存的2264字《视频深度理解与结构化总结提示词》，不读取或改写原版设置。
- 在真实Edge扩展设置的受控副本验证已有自定义值、恢复默认及其他配置哈希不变；源快照与旧提示词只保存在本任务私有证据目录，不进入安装包或Git。
- 73项Node、42项正确依赖环境的Native及受控Edge发送测试通过；日常AI Studio实际自动发送和完整转写结果仍待用户激活新版后确认。
- 包：VidSift-5.0.7-standalone.zip，SHA256 D812E696DE022D8F3639A5EE5F88F4E3B14388E6965C65A224DE46942F7A19A6；回退使用保留的5.0.6扩展ZIP，本机程序不变。

## 5.0.8后台转写交接（2026-11-09）

- 用户明确将原版称为“B站总结扩展”、本扩展称为“通用总结扩展”；本扩展名称已更新，独立ID、加载路径和用户设置不变，原版未修改。
- 用户现场反证5.0.7仍停在确认附件；实际卡片已由audio.m4a改名Generated Audio并显示token与播放控件，原文件名/HTML audio检测无法确认，导致无效等待。
- 5.0.8绑定本次新增卡片识别就绪，兼容Run回车图标；全部附件确认后只点一次，加载/失败/取消均拦截，不重复上传不确定的附件。
- 用户批准后台AI Studio完整逐字稿自动交GPT；AI Studio后台打开，等待本次模型正文、完成尾标和SRT时间覆盖校验，再使用用户既有整理提示词上传GPT；不能据格式检查保证逐字语义完全无遗漏。
- 取消、切换视频、生成失败、截断或时长缺失均不交接；长静音可能被保守拦截，需检查保留的AI Studio材料。
- 视频页进度浮窗已移除，进度与取消保留在扩展弹窗；任务期间20秒扩展API心跳，结束即清除，避免关闭弹窗后长转写丢失交接。
- 103项Node和42项Native通过；受控Edge B站/抖音样例转写→SRT→GPT发送通过，真实登录AI Studio仍待用户激活5.0.8后验收。
- 真实Edge设置受控副本升级、默认提示词与其他设置哈希保留通过；日常配置未写入。
- 本机Native5.0.6继续复用，不重新安装依赖；5.0.8包SHA256为7FBE02C9B425DACA3E5774C8A94F034C758F544F749693127F643F05DCCC84B2，回退使用保留的VidSift-5.0.7-standalone.zip。

## 5.0.9连接与现场排障（2026-11-09）

- 用户现场确认5.0.8仍前台显示AI Studio且没有提示词/音频，截图在目标页面打开扩展只得到“不支持当前页”；不能将此前隔离测试当作现场已恢复。
- 普通Windows只读核对Edge Default加载目录与当前目录一致，近期有重载记录，原版停用；不归咎用户未重载或点错扩展。
- 修复目标页面进度归属：在AI Studio或GPT打开扩展，可查看原视频任务的进度并取消；终态按钮明确显示“视频任务已结束”。
- AI Studio连接改看脚本握手，跳过无关资源阻塞的整页load；建页时立即登记任务，明确检查接收应答，失败不重复上传。源视频关闭也会立即取消目标任务并清理心跳。
- 最近交接诊断仅保存在本地扩展存储vidsiftLastTargetDiagnostic，含版本、阶段、时间、任务/源/目标标签ID和活动状态，不含提示词、音频或凭据。
- 107项Node、42项Native、真实tabs.create且未调用目标goto的隔离Edge流程通过；无关图片保持页面未complete时仍开始上传，并能在AI Studio页面打开扩展查看最终结果。
- 本机Native5.0.6继续复用；用户既有GPT默认提示词与真实设置受控副本保留核验通过。前台激活的真实原因仍未确定，等待新版本现场阶段记录，不宣称实站修好。
- 包VidSift-5.0.9-standalone.zip，SHA256为41E13ADE59D5E92202F8A05B0E90B25B0C4A344377F84C2A94E8D41276B84AD8；磁盘文件已更新但仍需手动重载，5.0.8 ZIP保留回退。

## 5.1.0抖音传输与音频体积（2026-11-09）

- 用户确认B站正常、抖音5.0.9仍无提示词/音频；只读日常Edge最近诊断为script-connected且observedActive=false，尚未task-accepted。
- 抖音现代路径将相同base64音频同时放进attachments与audioData；隔离Edge实API复现27 MiB二进制变72 MiB重复消息，超过64 MiB限制，单份可发送。
- 5.1.0移除重复字段并分块传输，绑定任务与接收端，全部组装后只提交一次；隔离Edge对27/60 MiB附件哈希一致，单次上传及Run通过，最大消息262342字节。
- 默认本机AAC64 kbps单声道、来源目标64 kbps，可在设置页独立保存/恢复；优先完整原声，不以背景乐代替口播，编码后验证时长。
- 同一821秒样本13,545,027字节压至6,799,130字节，时长差小于0.01秒；这是上传体积，平台无更小音轨时下载量不一定下降，转写准确率尚未比较。
- GPT后台打开只控制最终GPT焦点，AI Studio中间转写始终后台；B站原浏览器最小带宽路径保留。
- 126项Node、47项正确环境Native、受控Edge抖音与B站后台接力通过；真实设置受控副本自定义提示词与其他配置保留通过。
- Native5.1.0已在正常Windows安装并通过Edge握手；扩展磁盘文件逐字节核对已更新，用户仍需重新加载激活，实站AI Studio/GPT尚未验收，不称正式完成。
- 包VidSift-5.1.0-standalone.zip，SHA256为03EF1C82AB7C5B26D01133202D5BE83F433E79691D2B718F86F6407E398E72AD；保留5.0.9 ZIP回退，原版与日常设置未修改。

## 5.1.1误取消排查（2026-11-09）

- 用户截图确认5.1.0已有音频与提示词，但显示“任务已取消”；用户明确未手动取消、关闭标签页或切换作品，不归因于用户操作。
- 新只读诊断确认实际Edge版本5.1.0、task-accepted、observedActive=false；此前未移交内容的问题已跨过，完整发送仍失败。
- 单元复现旧来源变化消息会取消当前仍匹配的抖音作品，5.1.1改读当前标签页网址复核，真实来源切换和发送前身份检查保留；这不证明已查明本次现场全部根因。
- 新取消提示区分扩展取消、来源关闭、作品改变及传输应答异常，本地诊断保留取消原因和作品标识，不保存完整网址或内容。
- 127项Node、47项Native及受控Edge后台转写接力通过；当前加载目录文件已更新5.1.1，日常Edge仍待重载和实站结果，Native5.1.0继续兼容、无需重装。
- ZIP SHA256为9C2A759AB113ABA511FD1C992E0FF7B4B55B7E0574E8564CADE4533E40B5E308；保留5.1.0 ZIP回退，源码未视为正式验收完成。
## 5.2.3–5.2.4排障更新（2026-11-10）

- 5.2.3修复Native子进程继承浏览器消息输入管道的Windows阻塞；日常Edge YouTube已取得442条中文字幕，约28.49秒完成GPT任务，用户确认可用。
- 5.2.3抖音实际音频与提示词已上传，但日志持续记录附件0个；真实AI Studio已改为ms-prompt-media组件，5.2.4按其处理回执确认附件并保留单次发送保护。
- 抖音现在汇总同作品完整音轨并比较平台文件大小，保留有限镜像备用；字幕解析支持已有JSON和SRT/VTT/内联数据，有有效字幕才直接交GPT，未取得字幕保持未知。
- 当前32分37秒抖音样本仅见47,341,751字节独立音轨及三个镜像，尚未证明存在更小完整来源；下载后压缩只减少上传，不冒称降低下载流量。
- 任务日志存扩展本地vidsiftTaskDiagnostics，分别记录阶段、下载/上传字节和有限结构摘要，不自动上传，不保存提示词、音频、字幕或凭据；无需用户抄错误文字。
- 5.2.4安装在正常同用户Windows环境完成，FFmpeg/下载缓存复用，无ASR模型或新增权限；扩展加载目录和ID不变，5.2.3 ZIP及Native回退保留。
- 154项扩展测试、55项Native测试、受控Edge附件/接力回归通过；正常Windows已安装5.2.4取得同一YouTube442条字幕，未下载音频。
- 磁盘更新不等于日常浏览器激活；5.2.4完整抖音AI Studio自动运行和GPT整理仍待真实流程核验，未称正式完成。

## 5.2.5扩展更新（2026-11-10）

- 5.2.4真实日志附件已confirmed，但被批注工具hidden且零宽高的role=dialog编辑器误拦截；5.2.5仅拦截可见对话框，保留真实对话框和取消保护。
- 生成结束后Run可能因输入框清空变灰，不再以Run可点作为读取字幕的必要条件；兼容当前progress_activity Stop生成控件。
- 明确结束却返回空白时只追问一次，复用已上传音频；取消、未知发送回执、残稿和第二次空白不再盲目提交。
- 真实已上传33分04秒音频的一次手动追问产生239段字幕；仅对完整时间行补齐省略的小时，编号、顺序、首尾容差校验通过，不代表语义逐字无遗漏，也不等于扩展完整自动流程通过。
- 本次仅更新扩展加载目录至5.2.5，ID/设置/用户提示词不变；Native5.2.4继续兼容，正常Windows比较确认host除诊断版本号外相同，没有重装本机依赖。
- 5.2.5 ZIP SHA256为FB222AAC23D1ECA15D803D95D73E82C279784FBBB24CECC297D0759AEB003657，回退包VidSift-5.2.4-standalone.zip保留。
- 173项扩展测试及8项受控Edge附件/恢复场景通过；真实5.2.5抖音到GPT接力仍等待新任务日志核验，不冒称正式完成。

## 5.2.6书库链接捕获修复（2026-11-10）

- GPT总结已生成但书库缺卡的实际断点是发送端等待对话链接；Edge书库3.4.3与当前Native均支持视频记录，不需重装书库或本机程序。
- 修复多段输入框丢失段落分隔导致精确请求匹配失败，增加捕获就绪握手；未确认链接的已发送任务在关闭页面后仍保留，失败不重新总结。
- 只对用户明确指定的一条既有总结补存信息卡片，走正式业务接口并在操作前后完整校验备份与已有数据；用户已确认卡片显示。
- 175项扩展检查、真实Edge多段DOM回归、隔离双扩展交接/卡片/批注筛选回归通过；双扩展测试副本移除了Native权限，正式书库不写测试数据。
- 当前加载目录已更新5.2.6，ID/用户提示词和设置保留，现装Native5.2.4复用；需重新加载扩展启用后续自动入库修复，未冒称实际重载或真实新总结已验收。
- 包SHA256：F6B3CF806977CCB956247A30AB60CBFF5758810FF187732E94F9944A7247057D，5.2.5扩展包仍可回退。

## 2026-11-10：名称统一为知行视频总结（5.2.7）

- 用户确认正式中文名“知行视频总结”，与产品矩阵统一；扩展管理页、弹窗、设置页及重载提示使用该名称。
- 已更新上述当前加载目录，逐文件与5.2.7包核验；Edge重新加载后生效，尚未观察到此次浏览器重载。
- 扩展ID、公钥、权限、设置和提示词不变；沿用Native5.2.4，不重装运行环境。回退包为上述dist目录内的`VidSift-5.2.6-standalone.zip`。
- 名称增量已合入VidSift main；5.2.7测试包基于现用5.2.6，不把此前未验收的抖音真实全流程冒称为通过。
