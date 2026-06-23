# OpenCode 完整配置清单

> 整理日期：2026-06-10 | 平台：Windows 11 (x64)

---

## 一、插件 (Plugins)

共 **5** 个插件，配置于 `~/.config/opencode/opencode.jsonc`

| 插件 | 用途 |
|------|------|
| `opencode-pty` | 伪终端支持，提供交互式 CLI 体验 |
| `opencode-websearch-cited@1.2.0` | 带引用来源的网络搜索，支持 Gemini 风格搜索结果 |
| `opencode-ralph-loop` | Ralph Loop 插件，自动循环执行任务直至完成 |
| `opencode-mem` | 记忆存储插件，持久化保存项目知识和偏好 |
| `superpowers` (本地路径) | Superpowers 技能集合，提供 14 个开发工作流技能 |

---

## 二、MCP 服务器

共 **3** 个 MCP 服务器，配置于 `~/.config/opencode/opencode.jsonc`

### 1. Word (本地)
- **名称**: `word`
- **命令**: `uvx --from office-word-mcp-server word_mcp_server`
- **用途**: Word 文档 (.docx) 的创建、读取、编辑、格式化和转换
- **能力**: 段落/表格/图片/脚注/页眉/样式/PDF 转换等全套 Word 操作

### 2. Notion (本地)
- **名称**: `notion`
- **命令**: `npx -y @notionhq/notion-mcp-server`
- **用途**: Notion API 集成，操作页面、数据库、块、评论、搜索
- **认证**: NOTION_TOKEN 环境变量

### 3. Zapier Gmail (远程)
- **名称**: `zapier-gmail`
- **URL**: `https://mcp.zapier.com/api/v1/connect`
- **用途**: 通过 Zapier 连接 Gmail 等 9000+ 应用，执行邮件、日历、Slack 等操作
- **关键配置**: 必须设置 `"oauth": false`，否则 OpenCode 会误判为需要 OAuth 授权，导致工具无法调用
- **详细报告**: [`zapier-gmail-问题诊断与修复报告.md`](./zapier-gmail-问题诊断与修复报告.md)

---

## 三、Skills（技能）

按存储位置和功能域分类，共约 **120+** 个技能。

### A. OpenCode 原生技能 (13个)
**位置**: `~/.config/opencode/skills/`

| 技能 | 用途 |
|------|------|
| `algorithmic-art` | p5.js 生成艺术，粒子系统、流场等 |
| `cancel-ralph` | 取消正在运行的 Ralph Loop |
| `canvas-design` | 静态视觉设计，生成 .png/.pdf 海报 |
| `cn-last30days` | 中国社媒舆情研究（小红书/抖音/公众号） |
| `doc-coauthoring` | 结构化文档协作编写工作流 |
| `help` | Ralph Loop 帮助说明 |
| `mcp-builder` | MCP 服务器创建指南（Python/Node） |
| `planning-with-files` | Manus 风格文件化任务规划和进度跟踪 |
| `ralph-loop` | 启动 Ralph Loop 自动循环 |
| `skill-creator` | 创建、修改、评估技能 |
| `web-artifacts-builder` | 复杂 HTML artifacts（React/Tailwind/shadcn） |
| `webapp-testing` | Playwright 本地 Web 应用测试 |
| `xlsx` | Excel 电子表格处理（.xlsx/.csv/.tsv） |

### B. Superpowers 技能 (14个)
**位置**: `~/.config/opencode/node_modules/superpowers/skills/`

| 技能 | 用途 |
|------|------|
| `brainstorming` | 创意工作前探索意图、需求和设计 |
| `dispatching-parallel-agents` | 并行子代理分派 |
| `executing-plans` | 在新 session 中执行实施计划并审查 |
| `finishing-a-development-branch` | 开发完成后的合并/PR/清理决策 |
| `receiving-code-review` | 处理代码审查反馈 |
| `requesting-code-review` | 请求代码审查 |
| `subagent-driven-development` | 子代理驱动的实施 |
| `systematic-debugging` | 系统性调试（根因分析） |
| `test-driven-development` | TDD 工作流：先测试后实现 |
| `using-git-worktrees` | Git worktree 隔离工作区 |
| `using-superpowers` | Superpowers 技能加载器 |
| `verification-before-completion` | 完成前必须验证 |
| `writing-plans` | 实现前编写实施计划 |
| `writing-skills` | 创建和编辑技能 |

### C. 生命科学/生物信息学技能 (30个)
**位置**: `~/.agents/skills/` 和 `~/.claude/skills/`

| 技能 | 用途 |
|------|------|
| `alphafold-database-fetch-and-analyze` | AlphaFold 预测结构分析（pLDDT/结构域） |
| `alphagenome-single-variant-analysis` | 遗传变异对基因表达/染色质的影响分析 |
| `chembl-database` | ChEMBL 生物活性分子/药物靶点数据库 |
| `clinical-trials-database` | ClinicalTrials.gov 临床试验查询 |
| `clinvar-database` | ClinVar 临床变异致病性分类 |
| `dbsnp-database` | dbSNP 短遗传变异查询（rsID/坐标映射） |
| `embl-ebi-ols` | 250+ 生物医学本体论术语查询 |
| `encode-ccres-database` | ENCODE 顺式调控元件 (cCREs) 查询 |
| `ensembl-database` | Ensembl 基因/转录本/蛋白 ID 映射与序列 |
| `foldseek-structural-search` | 3D 蛋白结构相似性搜索 |
| `gnomad-database` | gnomAD 人群遗传变异频率/约束指标 |
| `gtex-database` | GTEx 54 组织 RNA 表达与 eQTL 数据 |
| `human-protein-atlas-database` | 人类蛋白表达与空间定位 |
| `interpro-database` | 蛋白结构域/家族/位点（Pfam/CDD 等14库） |
| `jaspar-database` | 转录因子结合谱 (PWM/PFM) |
| `ncbi-sequence-fetch` | NCBI 蛋白/核苷酸序列检索 |
| `openfda-database` | FDA 药物/器械/食品不良事件 |
| `opentargets-database` | 靶点-疾病关联与药物靶点发现 |
| `pdb-database` | Protein Data Bank 3D 结构搜索与下载 |
| `protein-sequence-msa` | Clustal Omega 多序列比对 |
| `protein-sequence-similarity-search` | MMseqs2/BLAST 同源序列搜索 |
| `pubchem-database` | PubChem 化学分子/药物查询 |
| `pubmed-database` | PubMed 科学文献搜索 |
| `pymol` | PyMOL 蛋白结构可视化与分析 |
| `quickgo-database` | Gene Ontology (GO) 术语与基因映射 |
| `reactome-database` | Reactome 通路分析与基因富集 |
| `string-database` | STRING 蛋白-蛋白互作网络 |
| `ucsc-conservation-and-tfbs` | UCSC 进化保守性与 TFBS 数据 |
| `unibind-database` | 实验验证的 TF-DNA 结合位点 |
| `uniprot-database` | UniProt 蛋白注释/序列/分类学 |

### D. 文档与文件技能 (4个)
**位置**: `~/.agents/skills/`

| 技能 | 用途 |
|------|------|
| `docx` | Word 文档读写、格式化、模板 |
| `pdf` | PDF 提取/合并/分割/OCR/加密 |
| `pptx` | PowerPoint 演示文稿创建与编辑 |
| `frontend-design` | 生产级前端界面设计（React/Tailwind） |

### E. 学术文献搜索技能 (4个)
**位置**: `~/.agents/skills/`

| 技能 | 用途 |
|------|------|
| `literature-search-arxiv` | arXiv 预印本搜索与下载 |
| `literature-search-biorxiv` | bioRxiv/medRxiv 生命科学预印本 |
| `literature-search-europepmc` | Europe PMC 全文获取与引用 |
| `literature-search-openalex` | OpenAlex 学术数据库（论文/作者/机构） |

### F. 工具与辅助技能 (3个)
**位置**: `~/.agents/skills/`

| 技能 | 用途 |
|------|------|
| `uv` | Python 包管理器 uv 安装与检查 |
| `workflow-skill-creator` | 将完成的工作流蒸馏为可复用技能 |
| `scienceskillscommon` | 科学技能的共享 Python HTTP 客户端库（非独立使用） |

### G. UI/UX 技能 (2个)
**位置**: `~/.agents/skills/`

| 技能 | 用途 |
|------|------|
| `ui-ux-pro-max` | UI/UX 设计目录（仅目录入口） |
| `frontend-design` | 前端界面设计（同 D 类） |

### H. gstack 工具集技能 (~50个)
**位置**: `~/.claude/skills/gstack/`

#### 开发流程类
| 技能 | 用途 |
|------|------|
| `gstack` | gstack 总入口：QA/浏览/部署/设计 |
| `plan-ceo-review` | CEO 模式计划审查：重新思考问题和范围 |
| `plan-eng-review` | 工程计划审查：架构/数据流/边界情况 |
| `plan-design-review` | 设计计划审查：UI/UX 维度评审 |
| `plan-devex-review` | 开发者体验 (DX) 计划审查 |
| `plan-tune` | 问题敏感度调优与开发者画像 |
| `autoplan` | 自动审查管道：一键运行全部审查 |

#### 测试与质量类
| 技能 | 用途 |
|------|------|
| `qa` | Web 应用 QA 测试并修复 Bug |
| `qa-only` | Web 应用 QA 报告（不修复） |
| `browse` | 无头浏览器 QA 交互测试 |
| `health` | 代码质量仪表盘（lint/test/类型检查） |
| `benchmark` | Web 性能回归检测 |
| `benchmark-models` | 跨模型性能对比 |
| `canary` | 部署后金丝雀监控 |
| `devex-review` | 现场开发者体验审计 |

#### 安全类
| 技能 | 用途 |
|------|------|
| `cso` | 首席安全官模式：安全审计/威胁建模/OWASP |
| `careful` | 危险命令警告（rm/DROP/force-push） |
| `freeze` | 限制文件编辑到指定目录 |
| `unfreeze` | 解除 freeze 限制 |
| `guard` | 完整安全模式（careful+freeze） |

#### 部署与交付类
| 技能 | 用途 |
|------|------|
| `ship` | 交付工作流：测试/版本号/CHANGELOG/PR |
| `land-and-deploy` | 合并 PR 并验证生产部署 |
| `landing-report` | PR 队列仪表盘 |
| `setup-deploy` | 配置部署目标（Fly/Render/Vercel等） |

#### 设计与文档类
| 技能 | 用途 |
|------|------|
| `design-consultation` | 设计系统创建：美学/字体/色彩/间距 |
| `design-review` | 现场视觉设计 QA |
| `design-shotgun` | 多方案设计变体生成与对比 |
| `design-html` | 生产级 HTML/CSS 实现 |
| `make-pdf` | Markdown 转出版物级 PDF |
| `document-generate` | 按 Diataxis 框架生成文档 |
| `document-release` | Post-ship 文档更新同步 |

#### 项目与协作类
| 技能 | 用途|
|------|------|
| `investigate` | 系统性调试：调查/分析/假设/修复 |
| `retro` | 每周工程回顾：提交历史/代码质量趋势 |
| `review` | 预合并 PR 代码审查 |
| `spec` | 将模糊意图转为精确可执行的 Spec |
| `office-hours` | YC 风格产品头脑风暴 |
| `learn` | 管理项目学习记录 |
| `context-save` | 保存工作上下文供后续恢复 |
| `context-restore` | 恢复之前保存的工作上下文 |

#### 工具与集成类
| 技能 | 用途 |
|------|------|
| `scrape` | 网页数据提取 |
| `skillify` | 将抓取流程固化为永久技能 |
| `claude` | Claude Code CLI 封装（审查/挑战/咨询） |
| `codex` | OpenAI Codex CLI 封装 |
| `setup-browser-cookies` | 从真实浏览器导入 Cookie |
| `setup-gbrain` | 安装配置 gbrain 持久记忆 |
| `sync-gbrain` | 同步 gbrain 与当前仓库 |
| `gstack-upgrade` | 升级 gstack 至最新版 |
| `pair-agent` | 远程 AI Agent 配对浏览器 |
| `open-gstack-browser` | 启动 GStack 浏览器 |

#### iOS 专用技能
| 技能 | 用途 |
|------|------|
| `ios-qa` | 真机 iOS QA（iPhone USB 连接） |
| `ios-fix` | 自动修复 iOS Bug 并验证 |
| `ios-design-review` | iOS 应用视觉设计审计 |
| `ios-clean` | 移除 iOS DebugBridge 调试代码 |
| `ios-sync` | 重新生成 iOS 调试桥接代码 |

#### 其他 gstack 技能
| 技能 | 用途 |
|------|------|
| `gstack` | gstack 主入口 |
| `gstack-openclaw-ceo-review` | OpenClaw CEO 审查 |
| `gstack-openclaw-investigate` | OpenClaw 调查/调试 |
| `gstack-openclaw-office-hours` | OpenClaw 头脑风暴 |
| `gstack-openclaw-retro` | OpenClaw 回顾 |

---

## 四、配置位置汇总

| 配置项 | 路径 |
|--------|------|
| OpenCode 主配置 | `~/.config/opencode/opencode.jsonc` |
| OpenCode 记忆 | `~/.config/opencode/opencode-mem.jsonc` |
| Dotfiles 仓库 | `Codelib-severin/opencode-dotfiles/.opencode/opencode.json` |
| OpenCode 技能 | `~/.config/opencode/skills/` |
| Agent 技能 | `~/.agents/skills/` |
| Claude 技能 (含 gstack) | `~/.claude/skills/` |
| Superpowers | `~/.config/opencode/node_modules/superpowers/` |
| MCP 服务 | `~/.config/opencode/opencode.jsonc` (mcp 字段) |

---

## 五、注意事项

1. **技能去重**: gstack 技能在 `.agents`, `.claude`, `.cursor`, `.hermes`, `.kiro`, `.openclaw`, `.opencode`, `.slate`, `.gbrain` 等多处有重复副本，实际运行时只有一个被加载
2. **Secrets**: Notion Token 等敏感信息存在于 `opencode.jsonc` 中，不应提交到公开仓库
3. **依赖**: `scienceskillscommon` 是其他科学技能的共享依赖，不能独立调用
4. **iOS 技能**: 需要物理 iPhone + USB 连接，当前 Windows 环境可能无法使用
5. **gstack 依赖**: 大量 gstack 技能需要 browse daemon 后台运行
