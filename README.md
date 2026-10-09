# dsh-zmd-theme

把 **zmd-style**（《明日方舟：终末地》/ Endfield Charge Plus 的工业 HUD 视觉语言）直接套到 **DSH 本体**的 Web GUI 上。

不改安装目录里的任何文件 —— 它是一个 DSH **客户端插件**，挂在 profile 的 cordis 组合里，浏览器半边做两件事：把 `--dsw-*` 设计 token 整体重绘成 ZMD 色板，再把 token 表达不了的结构规则（直角、1px 细线、主按钮 10px 切角）补上。

- 画布：军绿 `#191a19`（浅色档是 ZMD 的 `.light` 米白段 `#e9eae4`）
- 强调色：**全站只有一个** 荧光黄绿 `#d6e452`
- 圆角：全 0；层次只来自 1px 细线，不用投影、不用毛玻璃
- 与外观设置共存：浅色 / 深色 / 跟随系统照常可用，两套色板都按 ZMD 调过

> 目标版本：DeepSeek Harness `0.2.0-rc.x`（桌面版 / `dsh web` 同一套 Web GUI）

---

## 快速开始（Windows）

```powershell
# 1. 克隆到任意位置
git clone git@github.com:DengQingNian/dsh-zmd-theme.git "$env:USERPROFILE\dsh-zmd-theme"

# 2. 链进 profile 的 node_modules（目录联接，改源码即时生效）
$profile = "$env:USERPROFILE\.dsh\profiles\desktop"
New-Item -ItemType Junction -Path "$profile\node_modules\dsh-zmd-theme" -Target "$env:USERPROFILE\dsh-zmd-theme"

# 3. 在 $profile\cordis.patch.yml 末尾追加挂载行
@'

- insert:
    - id: zmd-theme
      name: 'dsh-zmd-theme'
'@ | Add-Content "$profile\cordis.patch.yml"
```

然后刷新页面即可。DSH 默认启用 `@deepseek-ai/dsh-hmr`，profile 配置会即时重组；皮肤由 client-hmr 推送，**不用重启应用**。

## 目录

- [环境要求](#环境要求)
- [安装](#安装)
- [卸载](#卸载)
- [自定义](#自定义)
- [配色对照表](#配色对照表)
- [它是怎么工作的](#它是怎么工作的)
- [它改了什么](#它改了什么)
- [已知边界与排错](#已知边界与排错)
- [目录结构](#目录结构)
- [License](#license)

## 环境要求

- DeepSeek Harness 桌面版，或 `dsh web` 起的同一套 Web GUI（`0.2.0-rc.x` 实测）
- 知道自己的 profile 名：桌面版默认 `desktop`
- profile 目录 `$DSH_HOME/profiles/<profile>`，Windows 下 `$DSH_HOME` 默认 `%USERPROFILE%\.dsh`
- 不需要 Node/pnpm。插件不装依赖，全部代码就是仓库里这几个文件

## 安装

### 1. 克隆

```bash
git clone git@github.com:DengQingNian/dsh-zmd-theme.git
```

### 2. 让 profile 能解析到这个包

DSH 从 profile 的 `node_modules` 里按包名解析插件。用链接（不要复制）—— 这样改源码即时生效。

**Windows（目录联接，不需要管理员权限）**

```powershell
$profile = "$env:USERPROFILE\.dsh\profiles\desktop"
New-Item -ItemType Junction -Path "$profile\node_modules\dsh-zmd-theme" -Target "<克隆出来的目录>"
```

**macOS / Linux**

```bash
ln -s "<克隆出来的目录>" ~/.dsh/profiles/desktop/node_modules/dsh-zmd-theme
```

### 3. 挂载

在 `$DSH_HOME/profiles/<profile>/cordis.patch.yml` 末尾追加：

```yaml
- insert:
    - id: zmd-theme
      name: 'dsh-zmd-theme'
```

> 建议先备份这个文件，卸载就是删掉这段。

### 4. 刷新页面

- 配置改动：`dsh-hmr` 默认开启，会即时重组；没生效就重启一次 DSH。
- 皮肤本身：由 client-hmr 推送到已打开的页面，改 `lib/client.js` 也是保存即生效。

> 为什么不用 `dsh plugin add`？那条路走 npm 安装并自动写 `dsh.profile.bundles`，本包没有发布到 npm，所以用上面的手动挂载。

## 卸载

1. 删掉 `cordis.patch.yml` 里那段 `- insert:`；
2. 删掉 `node_modules/dsh-zmd-theme` 这个链接（Windows 用 `Remove-Item`，注意别把源码目录删了 —— `Remove-Item` 对 junction 默认只删链接本身，但仍建议先 `Get-Item` 确认 `LinkType`）；
3. 刷新页面，注入的 `<style>` 会随插件 fiber 一起销毁。

## 自定义

**换颜色**：编辑 [`lib/client.js`](lib/client.js) 顶部的 `DARK` / `LIGHT` 两个 token 表（`--dsw-*` → 色值），保存即生效。想只调某一块，找对应注释小节。

**关掉某一层效果**：`STRUCT` 常量里按小节分了 1–6 段（基础面 / 控件 / 排版 / 焦点滚动条 / 动效 / 界面配方），注释掉整段即可。

**强制某个明暗档**：那是 DSH 自己的偏好，在 Settings → 通用 → 外观里切换，或改 profile 里 `ui-theme` 的 `preference`（`light` / `dark` / `system`）。

## 配色对照表

| 角色 | 深色（ZMD 画布） | 浅色（ZMD `.light` 段） |
|---|---|---|
| 画布 `--dsw-alias-bg-base` | `#191a19` | `#e9eae4` |
| 抬升面 layer-1 / 2 / 3 | `#20251b` / `#24271f` / `#262d1e` | `#e3e5da` / `#dce0d2` / `#d3d8c6` |
| 正文 / 次级 / 三级 | `#eeefea` / `#a7aba3` / `#a3a896` | `#242620` / `#55584a` / `#717765` |
| 细线 l1 / l2 | `#ffffff15` / `#ffffff25` | `#c7cfba` / `#bec6b3` |
| 强调色 | `#d6e452`（hover `#e3f376`） | 填充 `#242620`，链接 `#768514` |
| 状态色 成功/危险/警告/信息 | `#4fa271` / `#c25f4c` / `#b8863a` / `#c6ca4c` | `#296849` / `#b84b36` / `#8c6120` / `#768514` |
| 焦点环 | `#89b7ff` 3px | `#768514` 3px |
| 圆角 | 0 | 0 |
| 投影 | `0 0 0 1px` 细线环 | 同左 |
| 字体 | 正文 `Arial / Microsoft YaHei / PingFang SC`，代码 `Consolas` | 同左 |

## 它是怎么工作的

**token 层。** DSH 的 GUI 全量消费 `--dsw-static-*`（色阶）与 `--dsw-alias-*`（语义）。插件把这两族整体重绘，并通过官方 API 注册成一层 alias 覆盖：

```js
ctx.theme.overrideTokens("dsh-zmd-theme", { "--dsw-alias-bg-base": { light: "#e9eae4", dark: "#191a19" }, /* … */ });
```

所以 `ui-theme` 的明暗切换、外观设置项、以及宿主侧写入的 token 都快照式地跟着走，不是把某一种配色的样式硬盖上去。

**结构层。** 以 `!important` 注入一张独立 `<style data-plugin-css="dsh-zmd-theme/zmd.css">`，做 token 表达不了的事：主按钮右下 10px 切角（`clip-path`）、等宽系统标签、工业细滚动条、把所有 0.5px 边线归一成 1px。

**选择器策略。** DSH 生产构建里存在两套 CSS Modules 类名形态 —— 壳是 `_primary_1rv3m_36`，插件是 `rtYPxa_chip` —— 所以统一用 `[class*="_primary"]` 这类"包含"选择器命中，一次覆盖两种。设置页那种有稳定语义钩子的地方优先用钩子（如 `[data-slot="settings.general.item"]`）。

## 它改了什么

- **基础面**：画布 / 面板 / 浮层 / 菜单底色，1px 细线替代投影，去掉毛玻璃；菜单、弹窗、拖拽面板的圆角归 0
- **控件**：主按钮 10px 切角 + hover 上浮 1px，次级按钮 1px 描边，所有输入框直角；开关改成 38×22 直角轨道 + 18px 方形滑块
- **排版**：正文换系统黑体，代码/IO 标签/分区名换等宽；markdown 的 `pre`、`code`、`table`、`blockquote` 按 ZMD 走 1px 细线与 3px 强调条
- **会话轨道**：行加 1px 下细线，选中态 = `#ffffff0a` 淡底 + **3px 左强调轨**（不再只是一块 hover 底色）
- **工具卡片**：命令输出面板压到更深的 `#151713`（浅段里塞深色终端块），分隔条 0.5px → 1px
- **设置面板**：行改 16px 竖向节奏 + 1px 细分隔线，左导航选中态带 3px 强调轨
- **可访问性**：焦点环 3px，`prefers-reduced-motion` 下动画与过渡全部关闭

## 已知边界与排错

| 现象 | 原因 / 处理 |
|---|---|
| 刷新后界面没变化 | 确认 `cordis.patch.yml` 里那条 `insert` 生效、`node_modules/dsh-zmd-theme` 能解析；在 设置 → 插件 里看有没有 `zmd-theme`；必要时重启 DSH |
| 只有部分界面变了 | 多半是 DSH 升级换了 CSS Modules 类名，对照 `[class*="_xxx"]` 调一版 |
| 某处浮层文字看不清 | 该浮层是上游写死的深色底（例如会话 hover 卡 `#2C2C2E`、标题写死 `#fff`），文字必须用浅墨而不是随明暗变化的主题墨色 |
| 卸载后还有残留样式 | 刷新页面；样式表随插件 fiber 销毁 |
| 首帧闪一下原配色 | 插件材质化之前，引导页/首屏是 DSH 自带配色 —— 宿主侧的 pre-plugin palette 属 `dsh-client-ui-theme` 的 Host 半边，第三方插件改不了 |

另外两条：

- 只做了 **app 密度**：营销页那套 HUD 循环动画、巨型标题没有搬进聊天界面（聊天界面是仪表面板，不是海报）。
- 第三方面板自己的品牌色不归本主题管（例如 `dsh-usage-stats` 热力图的蓝色）。

## 目录结构

```
dsh-zmd-theme/
├── package.json        # dsh.bundle.patch + dsh.client（platform/inject）
├── cordis.patch.yml    # bundle patch：insert 一条 zmd-theme 挂载行
├── lib/
│   ├── index.js        # Host 半边：空实现（皮肤完全是浏览器侧的事）
│   └── client.js       # 浏览器半边：token 表 + 结构层样式，材质化时注入
└── README.md
```

## License

MIT

-----

视觉语言来自 [zmd-bar.x-neko.com](https://zmd-bar.x-neko.com/)（终末地风格产品站）与 [ecp-bugs.x-neko.com](https://ecp-bugs.x-neko.com/)（同族工单台）的实证提取；本仓库只做 DSH 侧的适配，不包含原站资源。
