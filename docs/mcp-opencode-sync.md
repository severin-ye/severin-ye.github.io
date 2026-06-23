# opencode-sync MCP Server 安装流程

## 安装日期
2026-06-09 (v2 重构: 2026-06-12)

## 平台信息
- OS: Windows 11
- Node.js: v22.x

## 安装位置
```
C:\Users\6seve\Codelib-severin\2_Business\mcp-opencode-sync\
```

## 相关路径

| 路径 | 用途 |
|------|------|
| `2_Business/mcp-opencode-sync/src/index.ts` | MCP 服务器源码 (McpServer + registerTool) |
| `2_Business/mcp-opencode-sync/src/sync.ts` | 共享状态管理逻辑 |
| `2_Business/mcp-opencode-sync/src/cli.ts` | CLI 接口 |
| `2_Business/mcp-opencode-sync/dist/index.js` | 编译后的 MCP 入口 |
| `workspace-sync-state.json` | 导出的状态文件 |

## MCP 工具 (8个)

| 工具 | 功能 | 读写 |
|------|------|------|
| `opencode_sync_export` | 导出工作区状态到 JSON | 只读 |
| `opencode_sync_import` | 从 JSON 恢复工作区状态 | 写入 |
| `opencode_sync_diff` | 对比当前与已保存状态 | 只读 |
| `opencode_sync_push` | 导出并推送到 GitHub | 写入 |
| `opencode_sync_pull` | 从 GitHub 拉取并应用 | 写入 |
| `opencode_sync_status` | 子模块状态概览 | 只读 |
| `opencode_sync_verify` | 环境完整性验证 | 只读 |
| `opencode_sync_setup` | 一键初始化新设备 | 写入 |

## 安装步骤

```bash
cd C:\Users\6seve\Codelib-severin\2_Business\mcp-opencode-sync
npm install
npm run build
```

## opencode 配置

在 `~/.config/opencode/opencode.jsonc` 中:

```json
{
  "mcp": {
    "opencode-sync": {
      "type": "local",
      "command": ["node", "C:/Users/6seve/Codelib-severin/2_Business/mcp-opencode-sync/dist/index.js"],
      "enabled": true
    }
  }
}
```

## 使用方法

### 在 opencode 中

```
导出: opencode_sync_push "描述信息"
导入: opencode_sync_pull
验证: opencode_sync_verify
配置: opencode_sync_setup
状态: opencode_sync_status
```

### CLI 接口

```powershell
node dist/cli.js export [output-file]
node dist/cli.js import [state-file]
node dist/cli.js diff [state-file]
node dist/cli.js push
node dist/cli.js pull
```

## 注意事项

1. Secrets 不会被导出，只导出环境变量名
2. 导入前必须先运行 `gh auth login`
3. 导入时 config 会合并而非覆盖
