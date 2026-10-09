# dsh-zmd-theme

把 [zmd-style](https://zmd-bar.x-neko.com/)（终末地 / Endfield Charge Plus 工业 HUD 视觉语言）直接套到 **DSH 本体**的 Web GUI 上。

不改安装目录里的任何文件：这是一个 DSH **客户端插件**（Host 半边为空实现），挂在 profile 的 cordis 组合里，浏览器半边做两件事：

1. **Token 层** —— 把 `--dsw-static-*` / `--dsw-alias-*` 整套色板换成 ZMD 色板，并通过官方 API `ctx.theme.overrideTokens("dsh-zmd-theme", …)` 注册成一层 alias token 覆盖，所以外观设置（浅色 / 深色 / 跟随系统）依旧可用，切换时 ZMD 深浅两套配色都会跟着走。
2. **结构层** —— 直角、1px 细线、主按钮右下 10px 切角、等宽"系统标签"、无投影无毛玻璃、荧光黄绿单强调色 `#d6e452`、细窄工业滚动条。

## 安装（已在本机完成）

```powershell
# 1. 把包放进 profile 的 node_modules（目录联接，改源码即生效）
New-Item -ItemType Junction \
  -Path "$env:USERPROFILE\.dsh\profiles\desktop\node_modules\dsh-zmd-theme" \
  -Target "<本目录>"

# 2. 在 profile 的 cordis.patch.yml 末尾追加挂载行
- insert:
    - id: zmd-theme
      name: 'dsh-zmd-theme'
```

DSH 的 `@deepseek-ai/dsh-hmr` 默认开启，profile 配置改完会即时重组；刷新一次页面（或由 client-hmr 推送）即可看到。

## 卸载

删掉 `cordis.patch.yml` 里那条 `insert` 行即可（备份在 `cordis.patch.yml.zmd-backup`）。

## 调色板对照

| 角色 | 深色（ZMD 画布） | 浅色（ZMD `.light` 段） |
|---|---|---|
| 画布 `--dsw-alias-bg-base` | `#191a19` | `#e9eae4` |
| 抬升面 layer-1/2/3 | `#20251b` / `#24271f` / `#262d1e` | `#e3e5da` / `#dce0d2` / `#d3d8c6` |
| 正文 / 次级 / 三级 | `#eeefea` / `#a7aba3` / `#a3a896` | `#242620` / `#55584a` / `#717765` |
| 边线 l1 / l2 | `#ffffff15` / `#ffffff25` | `#c7cfba` / `#bec6b3` |
| 强调色 | `#d6e452`（hover `#e3f376`） | 填充 `#242620` / 链接 `#768514` |
| 焦点环 | `#89b7ff` | `#768514` |
| 圆角 | 0 | 0 |
| 投影 | `0 0 0 1px` 细线环 | 同左 |
| 字体 | `Arial / Microsoft YaHei / PingFang SC`，代码 `Consolas` | 同左 |

## 第二层：具体界面的 archetype 细调

第一版只有 token + 全局结构；这一版按 `layouts.md` 的三个 app archetype 把具体界面接上：

| 界面 | archetype | 做法 |
|---|---|---|
| 左侧会话 / 项目列表 | `app-list-toolbar` | 行改直角 + 1px 下细线；选中态 = `#ffffff0a` 淡底 + **3px 左强调轨**（不再只是一块 hover 底色）；`_hoverTitle` 里硬编码的 `#fff` 拉回 `--dsw-alias-label-primary`；搜索片段 / 工作区名改 11px 等宽 |
| 会话顶栏 | `app-shell-workspace` | 顶栏底边 3px 强调线（ZMD app shell 的签名） |
| 工具卡片（读文件 / Bash / diff / 搜索） | components §15.3、§7 | 统一 1px 细线 + 直角 + 扁平无投影；命令输出压到更深的 `#151713`；分隔条 0.5px → 1px；工具标题带 **3px 强调条**；IO 标签 / caption / badge 走 11px 等宽大写 |
| 设置面板 | `app-settings-form` | `[data-slot="settings.general.item"]` 行：16px 竖向节奏 + 1px 细分隔线，双列 `minmax(0,1fr) / 360px`（只对有两个子元素的行启用网格，外观 / 字号这类单块行保持原布局）；左导航选中态 3px 强调轨；开关 38×22 直角轨道 + 18px 方形滑块 |
| 全局 | — | 所有 0.5px 边框归一成 1px（ZMD：分隔、边框、网格一律 1px） |

## 已知边界

- 首帧（插件材质化之前）仍是 DSH 自带引导页配色，之后才切到 ZMD；宿主侧的 `pre-plugin palette` 属于 `dsh-client-ui-theme` 的 Host 半边，第三方插件改不了。
- 组件选择器用 DSH 生产构建的 CSS Modules 类名形态（`[class*="_primary"]` 同时匹配 `_primary_1rv3m_36` 与 `rtYPxa_chip` 两种命名）。DSH 升级若改了类名，需要跟着调一版。
- HUD 循环动画、`.light` 明暗分段这类营销页语言没有搬进聊天界面 —— 聊天界面是仪表面板，不是海报。
