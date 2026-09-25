# Installed Inventory

Plugins, MCP servers, and skills currently installed across all environments.

> **维护规则：** 每次安装、卸载或更新插件/MCP/技能时，必须同步更新本文件。

---

## Plugins

配置文件：`config/opencode.jsonc` → `plugin` 字段

| 插件 | npm 包名 | 说明 | 状态 |
|------|----------|------|------|
| Superpowers | `superpowers` | 技能驱动开发方法论（头脑风暴、TDD、代码审查） | active |
| PTY | `opencode-pty` | 交互式 PTY 管理（后台进程、输入输出） | active |
| Web Search | `opencode-websearch-cited` | LLM 联网搜索（带引用来源） | active |
| WakaTime | `opencode-wakatime` | WakaTime AI 编程时间追踪 | active |
| Supermemory | `opencode-supermemory@latest` | 持久化代理记忆 | active |
| Notification | `opencode-notification` | 桌面通知 | active |
| Codex Auth | `opencode-openai-codex-auth` | OpenAI Codex 认证 | active |
| Ralph Loop | `opencode-ralph-loop` | 自动续行任务直到完成 | active（本地） |

### Codex 个人插件

| 插件 | 版本与路径 | 状态 |
|------|------------|------|
| 知行 `severin-skill@personal-opencode-imports` | 6.0.0；`C:\Users\6seve\.codex\plugins\cache\personal-opencode-imports\severin-skill\6.0.0` | 已安装并启用；13 条 Hook 已获信任，旧看板与 Agent Status 写入封存；见[安装记录](安装流程/Severin-skill.md) |

---

## MCP Servers

配置文件：`~/.config/opencode/opencode.json` → `mcp` 字段

| 名称 | 类型 | 包/服务 | 用途 |
|------|------|---------|------|
| word | local (uvx) | `office-word-mcp-server` | Word 文档读写编辑 |
| notion | local (npx) | `@notionhq/notion-mcp-server` | Notion 页面/数据库操作 |
| zapier-gmail | remote | Zapier MCP | Gmail 收发邮件；需 `"oauth": false` |

**备注**: Zapier Gmail 配置详见 [`zapier-gmail-问题诊断与修复报告.md`](./安装流程/zapier-gmail-问题诊断与修复报告.md)。

---

## Local Tools

| 名称 | 路径 | 用途 | 状态 |
|------|------|------|------|
| codex-bridge | `C:\Users\6seve\.codex\tools\codex-bridge` | Codex Responses API 到 DeepSeek / MiMo Chat Completions 的本地桥接器 | active |
| LoopX | `C:\Users\6seve\AppData\Roaming\uv\tools\loopx\Scripts\loopx.exe` | 长任务 Goal/Todo/门禁/证据与 Codex 工作流 CLI | 1.2.0 已安装；五个项目的迁移 Goal 已连接且停止 |

**备注**: codex-bridge 配置详见 [`codex-bridge.md`](./安装流程/codex-bridge.md)。

---

## Skills

### 安装来源说明

| 来源 | 安装方式 | 路径 |
|------|----------|------|
| npx skills (global) | `npx skills add <repo> -g` | `~/.agents/skills/` → symlink 到 `~/.claude/skills/`, `~/.config/opencode/skills/` |
| GStack | gstack 内置 | `~/.agents/skills/gstack/` |
| 本地自定义 | 手动创建 | `skills/` (dotfiles 仓库内) |

### GStack 工具链

| 类别 | 技能 |
|------|------|
| **浏览器/QA** | browse, gstack, qa, qa-only, scrape, canary, open-gstack-browser, setup-browser-cookies, pair-agent |
| **设计** | design-consultation, design-html, design-review, design-shotgun, frontend-design |
| **规划/评审** | plan-ceo-review, plan-design-review, plan-devex-review, plan-eng-review, plan-tune, autoplan |
| **工程** | ship, land-and-deploy, review, investigate, health, freeze, guard, careful |
| **文档** | document-generate, document-release, make-pdf, whitepaper |
| **iOS** | ios-qa, ios-fix, ios-clean, ios-sync, ios-design-review |
| **上下文** | context-save, context-restore, learn, retro |
| **其他** | benchmark, benchmark-models, cso, devex-review, office-hours, setup-deploy, setup-gbrain, sync-gbrain, skillify, codex, claude, gstack-upgrade |

### Google DeepMind Science Skills

来源：`google-deepmind/science-skills`，通过 `npx skills add google-deepmind/science-skills/ -y -g` 安装

| 类别 | 技能 |
|------|------|
| **基因组学** | alphagenome-single-variant-analysis, clinvar-database, dbsnp-database, gnomad-database, gtex-database, encode-ccres-database, ensembl-database, jaspar-database, ucsc-conservation-and-tfbs |
| **蛋白质/结构** | alphafold-database-fetch-and-analyze, pdb-database, uniprot-database, interpro-database, string-database, human-protein-atlas-database, foldseek-structural-search, pymol, protein-sequence-msa, protein-sequence-similarity-search |
| **化学/药物** | chembl-database, pubchem-database, openfda-database, opentargets-database |
| **文献搜索** | literature-search-arxiv, literature-search-biorxiv, literature-search-europepmc, literature-search-openalex |
| **临床/生物** | clinical-trials-database, reactome-database, quickgo-database, embl-ebi-ols, unibind-database |
| **工具** | ncbi-sequence-fetch, uv, scienceskillscommon, workflow-skill-creator |

### 独立技能

| 技能 | 来源 | 说明 |
|------|------|------|
| business-document-generator | 手动安装 | 商业文档/提案 PDF 生成 |
| hwpilot | 手动安装 | 韩文 HWP/HWPX 文档读写 |
| hindsight-docs | 手动安装 | Hindsight 架构文档 |
| ui-ux-pro-max | `nexu-io/open-design` | UI/UX 设计模式库 |
| whitepaper | 手动安装 | 专业 PDF 白皮书 |

### LoopX 的 Codex 工作流技能

2026-09-25 从 LoopX 1.2.0 正式 Python 包安装到 `C:\Users\6seve\.codex\skills\`；本次会话的技能目录不会热更新，重开 Codex 后还需验证发现。

| 技能 | 用途 |
|------|------|
| loopx | 显式查看或建立 LoopX Goal |
| loopx-project | 项目连接、Goal/Todo 接续与诊断 |
| loopx-pr-program | 多 PR/MR 交付计划和变更监测 |
| loopx-pr-review | 按确切修订及证据审查 PR |
| loopx-doc-registry | 已连接项目的资料登记与来源权威 |
| loopx-benchmark | LoopX 管理的基准实验流程 |
| loopx-self-repair | LoopX 状态或代理行为偏离的排查 |

安装、路径、诊断和回退见[LoopX 安装记录](安装流程/LoopX.md)。五个已迁移项目的长期任务状态现在由 LoopX 持有，专业科研原件和个人恢复记录仍由知行负责。

### Ralph Loop 控制

| 技能 | 说明 |
|------|------|
| ralph-loop | 启动 Ralph Loop |
| cancel-ralph | 取消运行中的 Ralph Loop |
| help | 显示 Ralph Loop 帮助 |

### 本地自定义技能（dotfiles/skills/）

| 技能 | 说明 |
|------|------|
| ralph-loop-trigger | Ralph Loop 触发器 |
| find-skills | 发现和安装代理技能 |
| docx | Word 文档处理 |
| pdf | PDF 读写合并拆分 |
| pptx | PowerPoint 演示文稿 |
| skill-creator | 创建新技能 |
| web-artifacts-builder | HTML 组件构建 |
| webapp-testing | Playwright 测试 |

---

## 统计

| 类别 | 数量 |
|------|------|
| 插件 | 9 |
| MCP 服务器 | 3 |
| 本地工具 | 2 |
| 技能（GStack） | ~50 |
| 技能（Science Skills） | 37 |
| 技能（独立） | 6 |
| 技能（LoopX） | 7 |
| 技能（Ralph Loop） | 3 |
| 技能（本地自定义） | 8 |
| **合计** | **~125** |
