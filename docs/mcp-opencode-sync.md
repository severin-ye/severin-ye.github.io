# mcp-opencode-sync 安装流程

## 安装日期
2026-06-09

## 平台信息
- OS: Windows 11 (with WSL)
- Node.js: v22.x
- Git: 2.x

## 安装位置
```
C:\Users\6seve\Codelib-severin\2_业务项目\mcp-opencode-sync\
```

## 相关路径

| 路径 | 用途 |
|------|------|
| `2_业务项目/mcp-opencode-sync/src/index.ts` | MCP 服务器源码 |
| `2_业务项目/mcp-opencode-sync/scripts/export.sh` | Linux/Mac/WSL 导出脚本 |
| `2_业务项目/mcp-opencode-sync/scripts/export.ps1` | Windows 导出脚本 |
| `2_业务项目/mcp-opencode-sync/scripts/import.sh` | Linux/Mac/WSL 导入脚本 |
| `2_业务项目/mcp-opencode-sync/scripts/import.ps1` | Windows 导入脚本 |
| `workspace-sync-state.json` | 导出的状态文件 |

## 安装步骤

### 1. 安装依赖

```bash
cd C:\Users\6seve\Codelib-severin\2_业务项目\mcp-opencode-sync
npm install
```

### 2. 编译 TypeScript

```bash
npm run build
```

### 3. 配置 opencode

在 `~/.config/opencode/opencode.jsonc` 中添加:

```json
{
  "mcp": {
    "opencode-sync": {
      "type": "local",
      "command": ["node", "C:/Users/6seve/Codelib-severin/2_业务项目/mcp-opencode-sync/dist/index.js"],
      "enabled": true
    }
  }
}
```

## 使用方法

### 在旧系统导出

```powershell
# Windows
cd C:\Users\6seve\Codelib-severin
.\2_业务项目\mcp-opencode-sync\scripts\export.ps1 -CommitMessage "迁移到新设备"
```

```bash
# Linux/Mac/WSL
cd ~/Codelib-severin
./2_业务项目/mcp-opencode-sync/scripts/export.sh "迁移到新设备"
```

### 在新系统导入

```bash
# 1. 克隆仓库
git clone https://github.com/severin-ye/Codelib-severin.git
cd Codelib-severin

# 2. 配置 GitHub CLI
gh auth login

# 3. 导入状态
# Linux/Mac/WSL
./2_业务项目/mcp-opencode-sync/scripts/import.sh

# Windows
.\2_业务项目\mcp-opencode-sync\scripts\import.ps1

# 或者先预览
./2_业务项目/mcp-opencode-sync/scripts/import.sh --dry-run
```

## 导出的状态内容

- 子模块路径和 commit hash
- opencode 配置文件（不含 secrets）
- 环境变量名（不含实际值）
- 已安装的 skills 列表

## 注意事项

1. **Secrets 不会被导出**: 只导出环境变量名，需要手动填写实际值
2. **Windows 路径问题**: 脚本会自动尝试用 WSL 处理含 `:` 的路径
3. **GitHub CLI 必须已认证**: 导出和导入都需要 `gh auth login`
4. **子模块 commit**: 导入时会将子模块重置到导出时的 commit

## 常用命令

```powershell
# 导出当前状态
.\2_业务项目\mcp-opencode-sync\scripts\export.ps1

# 导入状态
.\2_业务项目\mcp-opencode-sync\scripts\import.ps1

# 预览导入（不实际修改）
.\2_业务项目\mcp-opencode-sync\scripts\import.ps1 -DryRun

# 在 opencode 中使用 MCP 工具
# 用户: 帮我同步配置到 GitHub
# Agent: [调用 opencode_push]
```

## 踩坑记录

1. **PowerShell 解析错误**: Node.js 代码中的正则表达式在 PowerShell 中会被解析错误
   - 解决方案: 使用单引号包裹 Node.js 代码，或使用 bash 脚本

2. **WSL 路径转换**: Windows 路径 `C:\Users` 需要转换为 `/mnt/c/Users`
   - 解决方案: 脚本自动处理路径转换

3. **子模块 detached HEAD**: 子模块处于 detached HEAD 状态
   - 解决方案: 脚本会自动 fetch 并 reset 到指定 commit
