# VidSift 浏览器扩展与本机程序

- 安装日期：2026-11-09；Windows 11，Edge 157.0.4341.42，同一普通用户安装，不写HKLM。
- 本机程序：5.0.6；独立扩展ID：`kggdkncbamdlhhihfkeldbbkppkgihad`，与原版独立。
- 扩展当前加载目录：`C:\Users\6seve\Codelib-severin\2_Business\VidSift\dist\VidSift-5.0.0-standalone`，目录名为历史名称，磁盘内容已更新5.0.6扩展，日常浏览器运行时需手动重新加载；后续版本按manifest核对。

## 实际安装位置

- 运行资源：`C:\Users\6seve\AppData\Local\VidSift\runtime`。
- 当前激活配置：`C:\Users\6seve\AppData\Local\VidSift\runtime\current.json`。
- 当前Native版本目录：`C:\Users\6seve\AppData\Local\VidSift\releases\5.0.6\native\81bf6c65ae75455a8a3951c2ee951fc5`。
- Native清单：上述版本目录中的 `com.vidsift.media.json`；启动器 `native-launcher.exe`；实现 `host.py`。
- Python：`C:\Users\6seve\AppData\Local\VidSift\runtime\envs\py312-8fcf034b7a7f5b01-81bf6c65ae75455a8a3951c2ee951fc5\Scripts\python.exe`。
- FFmpeg：`C:\Users\6seve\AppData\Local\VidSift\runtime\bin\ffmpeg.exe`；来源、哈希及许可保存在同目录安装回执中。
- 本次回退：`C:\Users\6seve\AppData\Local\VidSift\backups\native-20261109-024356-7c4e05807a824b2da1e928455a9ec299\rollback.json`。
- Chrome注册：`HKCU\Software\Google\Chrome\NativeMessagingHosts\com.vidsift.media`。
- Edge注册：`HKCU\Software\Microsoft\Edge\NativeMessagingHosts\com.vidsift.media`。

## 安装与检测

- 在普通Windows PowerShell中进入已解压的VidSift包目录，运行：

```powershell
.\installer\Install-NativeHost.ps1 -ProjectRoot (Get-Location).Path
```

- 安装器需要uv和系统自带.NET Framework C#编译器，安装yt-dlp、youtube-transcript-api、Pillow，复用或获取FFmpeg，不新增转写模型。
- 安装后在VidSift设置页检测本机程序；主机按需启动，任务后退出，没有常驻HTTP或开机启动项。
- 可用 `VIDSIFT_FFMPEG` 指向已有FFmpeg；本机程序不需要API Key，自建转写服务的地址和令牌只在扩展设置中填写。
- 回退命令中的Receipt使用上面的实际回退JSON路径：

```powershell
.\installer\Rollback-NativeHost.ps1 -Receipt '实际的rollback.json绝对路径'
```

## 已验证与边界

- 正常用户进程中的CIM文件核验和当前用户HKU注册表读回均通过，Chrome/Edge指向同一Native清单。
- 从正常Windows环境启动的隔离Edge成功连接本机程序5.0.6，并检出FFmpeg、yt-dlp与字幕组件；这不代替日常浏览器中每个平台的完整视频上传验收。
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
