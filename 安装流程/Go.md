# Go 便携版安装记录

- 安装日期：2026-08-12
- 平台：Windows 11 x64
- 版本：Go 1.26.5
- 安装方式：从 Go 官方下载 ZIP，校验官方 SHA-256 后解压；未修改系统 PATH。

## 安装位置

- 根目录：`C:\Users\6seve\.codex\tools\go1.26.5\go`
- Go 命令：`C:\Users\6seve\.codex\tools\go1.26.5\go\bin\go.exe`
- Gofmt：`C:\Users\6seve\.codex\tools\go1.26.5\go\bin\gofmt.exe`

## 环境和配置

- 本次未配置 API Key。
- 系统 PATH 保持不变，脚本中使用可执行文件绝对路径。
- 国内依赖下载可临时设置：`$env:GOPROXY='https://goproxy.cn,direct'`。
- Go 默认模块与构建缓存仍使用当前 Windows 用户的标准目录。

## 常用命令

```powershell
& 'C:\Users\6seve\.codex\tools\go1.26.5\go\bin\go.exe' version
& 'C:\Users\6seve\.codex\tools\go1.26.5\go\bin\go.exe' test ./...
& 'C:\Users\6seve\.codex\tools\go1.26.5\go\bin\go.exe' build .
& 'C:\Users\6seve\.codex\tools\go1.26.5\go\bin\gofmt.exe' -w main.go
```

## 注意事项

- `winget install GoLang.Go` 在本机长时间无响应，因此没有使用系统级安装。
- 旧项目若依赖 `mattn/go-sqlite3` 还需要 CGO 和 C 编译器；ClashTrafficMonitor 已改用纯 Go 的 `modernc.org/sqlite`。
- 更新版本时应新建独立版本目录，验证后再修改调用路径，不要覆盖当前可用版本。
