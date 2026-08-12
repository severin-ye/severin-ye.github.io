# Inno Setup 安装记录

- 安装日期：2026-08-12
- 平台：Windows 11 x64
- 版本：Inno Setup 6.7.3
- 安装方式：Windows Package Manager（winget）

## 安装位置

- 根目录：`C:\Users\6seve\AppData\Local\Programs\Inno Setup 6`
- 命令行编译器：`C:\Users\6seve\AppData\Local\Programs\Inno Setup 6\ISCC.exe`
- 帮助文档：`C:\Users\6seve\AppData\Local\Programs\Inno Setup 6\ISetup.chm`

## 安装命令

```powershell
winget install --id JRSoftware.InnoSetup --exact --source winget --silent --accept-package-agreements --accept-source-agreements --disable-interactivity
```

## 常用命令

```powershell
& "$env:LOCALAPPDATA\Programs\Inno Setup 6\ISCC.exe" installer\ClashTrafficMonitor.iss
winget upgrade --id JRSoftware.InnoSetup --exact
winget uninstall --id JRSoftware.InnoSetup --exact
```

## 相关项目路径

- 安装器脚本：`C:\Users\6seve\Codelib-severin\2_Business\ClashTrafficMonitor\installer\ClashTrafficMonitor.iss`
- 自动构建脚本：`C:\Users\6seve\Codelib-severin\2_Business\ClashTrafficMonitor\scripts\build-installer.ps1`
- 输出目录：`C:\Users\6seve\Codelib-severin\2_Business\ClashTrafficMonitor\dist`

## 环境和注意事项

- 不需要 API Key 或额外环境变量。
- 当前安装为仅当前用户安装，所以程序位于 `%LOCALAPPDATA%\Programs`，不在 `Program Files`。
- Inno Setup 负责生成安装器，但不会自动给成品添加作者代码签名；没有受信任证书时，朋友电脑首次运行可能显示 SmartScreen 提示。
- Clash 软件流量账本采用按用户安装，不请求管理员权限；卸载应用时保留 `%LOCALAPPDATA%\ClashTrafficMonitor\data` 下的历史数据库。
