/**
 * dsh-zmd-theme — browser half.
 *
 * Loaded by the DSH client module system (`window.__ModuleLoader__.load`, the
 * factory-form CJS protocol every client plugin uses). Two layers:
 *
 *  1. a token layer — the ZMD palette folded over `--dsw-static-*` and
 *     `--dsw-alias-*`, re-applied through `ctx.theme.overrideTokens` so theme
 *     switches and the Appearance row keep working;
 *  2. a structural layer — square corners, hairline dividers, the 10px corner
 *     cut on primary actions, mono system labels.
 *
 * The stylesheet is injected at materialization time (not only from apply) so
 * the skin cannot be lost to plugin ordering or a failed service injection.
 */

window.__ModuleLoader__.load({
  id: "dsh-zmd-theme",
  factory: (require) => {
    var module = { exports: {} };
    var exports = module.exports;
    Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

    /** Dark palette — the ZMD canvas (`#191a19`). */
    var DARK = {
       "--dsw-static-neutral-00": "#eeefea",
       "--dsw-static-neutral-50": "#1d2119",
       "--dsw-static-neutral-100": "#20251b",
       "--dsw-static-neutral-150": "#20251b",
       "--dsw-static-neutral-200": "#24271f",
       "--dsw-static-neutral-250": "#262d1e",
       "--dsw-static-neutral-300": "#2a2e24",
       "--dsw-static-neutral-400": "#a3a896",
       "--dsw-static-neutral-500": "#a7aba3",
       "--dsw-static-neutral-550": "#8f9382",
       "--dsw-static-neutral-600": "#7f8470",
       "--dsw-static-neutral-700": "#5f6353",
       "--dsw-static-neutral-800": "#2a2e24",
       "--dsw-static-neutral-850": "#24271f",
       "--dsw-static-neutral-900": "#151713",
       "--dsw-static-neutral-1000": "#0f110d",
       "--dsw-static-neutral-bluish-00": "#eeefea",
       "--dsw-static-neutral-bluish-50": "#1d2119",
       "--dsw-static-neutral-bluish-60": "#1d2119",
       "--dsw-static-neutral-bluish-75": "#20251b",
       "--dsw-static-neutral-bluish-100": "#20251b",
       "--dsw-static-neutral-bluish-150": "#24271f",
       "--dsw-static-neutral-bluish-200": "#262d1e",
       "--dsw-static-neutral-bluish-300": "#33372b",
       "--dsw-static-neutral-bluish-400": "#a3a896",
       "--dsw-static-neutral-bluish-500": "#a7aba3",
       "--dsw-static-neutral-bluish-600": "#8f9382",
       "--dsw-static-neutral-bluish-700": "#5f6353",
       "--dsw-static-neutral-bluish-750": "#3a3f31",
       "--dsw-static-neutral-bluish-800": "#2a2e24",
       "--dsw-static-neutral-bluish-850": "#24271f",
       "--dsw-static-neutral-bluish-875": "#1f2318",
       "--dsw-static-neutral-bluish-900": "#151713",
       "--dsw-static-neutral-bluish-950": "#191a19",
       "--dsw-static-neutral-bluish-1000": "#0b0d09",
       "--dsw-static-deepseek-50": "#262b1c",
       "--dsw-static-deepseek-100": "#2f331f",
       "--dsw-static-deepseek-200": "#3a4026",
       "--dsw-static-deepseek-400": "#d6e452",
       "--dsw-static-deepseek-450": "#d6e452",
       "--dsw-static-deepseek-500": "#c6ca4c",
       "--dsw-static-deepseek-700": "#8a9433",
       "--dsw-static-deepseek-800": "#4a5222",
       "--dsw-static-deepseek-900": "#2b311a",
       "--dsw-static-blue-400": "#c6ca4c",
       "--dsw-static-blue-500": "#d6e452",
       "--dsw-static-blue-600": "#9aa63c",
       "--dsw-static-green-400": "#4fa271",
       "--dsw-static-green-500": "#4fa271",
       "--dsw-static-amber-400": "#b8863a",
       "--dsw-static-amber-500": "#b8863a",
       "--dsw-static-amber-600": "#8c6120",
       "--dsw-static-red-400": "#c25f4c",
       "--dsw-static-red-500": "#c25f4c",
       "--dsw-static-red-600": "#b84b36",
       "--dsw-alias-bg-base": "#191a19",
       "--dsw-alias-bg-layer-1": "#20251b",
       "--dsw-alias-bg-layer-2": "#24271f",
       "--dsw-alias-bg-layer-3": "#262d1e",
       "--dsw-alias-bg-layer-4": "#2a2e24",
       "--dsw-alias-bg-overlay": "#20251b",
       "--dsw-alias-bg-module-platform": "#1d2119",
       "--dsw-alias-bg-multi-select": "#1d2119",
       "--dsw-alias-bg-skeleton": "#ffffff0f",
       "--dsw-alias-bg-mask-1": "#080b08cc",
       "--dsw-alias-bg-mask-2": "#080b0880",
       "--dsw-alias-bg-mask-3": "#080b08e6",
       "--dsw-alias-bg-document-preview": "#1d2119",
       "--dsw-alias-border-l1": "#ffffff15",
       "--dsw-alias-border-l2": "#ffffff25",
       "--dsw-alias-border-l2-darkmode-thin": "#ffffff15",
       "--dsw-alias-border-l3": "#ffffff25",
       "--dsw-alias-border-l4": "#ffffff2e",
       "--dsw-alias-label-primary": "#eeefea",
       "--dsw-alias-label-secondary": "#a7aba3",
       "--dsw-alias-label-tertiary": "#a3a896",
       "--dsw-alias-label-caption": "#7f8470",
       "--dsw-alias-label-dimmed": "#6b7060",
       "--dsw-alias-label-primary-foreground": "#1b1e15",
       "--dsw-alias-label-shimmer": "#4a5222",
       "--dsw-alias-brand-primary": "#d6e452",
       "--dsw-alias-brand-primary-new-colorprimary-new-color": "#d6e452",
       "--dsw-alias-brand-text": "#d6e452",
       "--dsw-alias-brand-primary-invert": "#1b1e15",
       "--dsw-alias-button-primary-fill": "#d6e452",
       "--dsw-alias-button-primary-hover": "#e3f376",
       "--dsw-alias-button-contrast-fill": "#2f3327",
       "--dsw-alias-button-elevated-fill": "#24271f",
       "--dsw-alias-button-floating-fill": "#20251b",
       "--dsw-alias-button-floating-hover": "#262d1e",
       "--dsw-alias-button-ghost-active-fill": "#2b3122",
       "--dsw-alias-button-ghost-active-border": "#84951c",
       "--dsw-alias-button-tool-bar-fill": "#20251b",
       "--dsw-alias-button-tool-bar-hover": "#262d1e",
       "--dsw-alias-interactive-bg-hover": "#ffffff12",
       "--dsw-alias-interactive-bg-active": "#ffffff1f",
       "--dsw-alias-interactive-bg-hover-danger": "#b84b3626",
       "--dsw-alias-link": "#d6e452",
       "--dsw-alias-markdown-code-block": "#1d2119",
       "--dsw-alias-markdown-code-block-banner": "#24271f",
       "--dsw-alias-markdown-inline-code": "#262d1e",
       "--dsw-alias-markdown-tag": "#262d1e",
       "--dsw-alias-menu-icon": "#a3a896",
       "--dsw-alias-menu-group-header-fill": "#20251bf7",
       "--dsw-menu-surface-fill": "#20251bf2",
       "--dsw-menu-backdrop-filter": "none",
       "--dsw-specific-menu": "#20251bfa",
       "--dsw-specific-input-major": "#20251b",
       "--dsw-specific-sidebar-fill": "#1d2119",
       "--dsw-specific-sidebar-nav-item-active": "#2b3122",
       "--dsw-specific-sidebar-nav-item-active-accent": "#d6e452",
       "--dsw-specific-sidebar-nav-item-hover": "#ffffff0f",
       "--dsw-specific-selector": "#24271f",
       "--dsw-specific-tip": "#1d2119",
       "--dsw-specific-bubble": "#20251b",
       "--dsw-specific-bubble-highlight": "#262d1e",
       "--dsw-alias-scrollbar-bg-l2": "#ffffff26",
       "--dsw-alias-scrollbar-hover-l2": "#d6e452",
       "--dsw-alias-state-idle-primary": "#7f8470",
       "--dsw-alias-state-success-primary": "#4fa271",
       "--dsw-alias-state-success-secondary": "#2f6b48",
       "--dsw-alias-state-success-tertiary": "#1e3b2b",
       "--dsw-alias-state-error-primary": "#c25f4c",
       "--dsw-alias-state-error-secondary": "#8f3f30",
       "--dsw-alias-state-error-tertiary": "#3d211b",
       "--dsw-alias-state-warn-primary": "#b8863a",
       "--dsw-alias-state-warn-secondary": "#8c6120",
       "--dsw-alias-state-warn-tertiary": "#3a2d15",
       "--dsw-alias-state-warn-label": "#d0a24e",
       "--dsw-alias-state-business-primary": "#c6ca4c",
       "--dsw-alias-state-business-secondary": "#8a9433",
       "--dsw-alias-state-business-tertiary": "#2f331f",
       "--dsw-alias-tooltip-bg": "#262d1e",
       "--dsw-alias-tooltip-key-bg": "#ffffff1a",
       "--dsw-alias-toast-bg": "#262d1e",
       "--dsw-alias-toast-label": "#eeefea",
       "--dsw-alias-code-diff-added": "#2968494d",
       "--dsw-alias-code-diff-deleted": "#b84b364d",
       "--dsw-alias-switch-thumb": "#7f8470",
       "--dsw-alias-turn-trigger-bg": "#20251b",
       "--dsw-alias-turn-trigger-bg-hover": "#262d1e",
       "--dsw-hovercard-bg": "#20251b",
       "--dsw-elevation-panel": "0 0 0 1px #ffffff25",
       "--dsw-elevation-prominent": "0 0 0 1px #ffffff25",
       "--dsw-elevation-soft": "0 0 0 1px #ffffff15",
       "--dsw-elevation-stroke-color": "#ffffff25",
       "--dsw-shadow-lv3": "0 0 0 1px #ffffff25",
       "--dsw-mask-blur": "none",
       "--dsw-radius-xs": "0",
       "--dsw-radius-sm": "0",
       "--dsw-radius-md": "0",
       "--dsw-radius-lg": "0",
       "--dsw-radius-panel": "0",
       "--dsw-focus-ring-color": "#89b7ff",
       "--dsw-focus-ring-width": "3px",
       "--dsw-font-family": "Arial,\"Microsoft YaHei\",\"PingFang SC\",\"Hiragino Sans GB\",sans-serif",
       "--ds-font-family-code": "Consolas,\"Cascadia Mono\",ui-monospace,SFMono-Regular,Menlo,monospace",
       "--dsw-font-markdown-code-font-family": "Consolas,\"Cascadia Mono\",ui-monospace,SFMono-Regular,Menlo,monospace"
    };

    /** Light palette — the ZMD `.light` band (`#e9eae4`). */
    var LIGHT = {
       "--dsw-static-neutral-00": "#f6f7f1",
       "--dsw-static-neutral-50": "#eef0e8",
       "--dsw-static-neutral-100": "#e9eae4",
       "--dsw-static-neutral-150": "#e3e5da",
       "--dsw-static-neutral-200": "#dce0d2",
       "--dsw-static-neutral-250": "#d3d8c6",
       "--dsw-static-neutral-300": "#c3cbb6",
       "--dsw-static-neutral-400": "#8a9080",
       "--dsw-static-neutral-500": "#717765",
       "--dsw-static-neutral-550": "#656a5a",
       "--dsw-static-neutral-600": "#55584a",
       "--dsw-static-neutral-700": "#3c3f34",
       "--dsw-static-neutral-800": "#2f3229",
       "--dsw-static-neutral-850": "#242620",
       "--dsw-static-neutral-900": "#1b1e15",
       "--dsw-static-neutral-1000": "#12140f",
       "--dsw-static-neutral-bluish-00": "#e9eae4",
       "--dsw-static-neutral-bluish-50": "#eef0e8",
       "--dsw-static-neutral-bluish-60": "#eef0e8",
       "--dsw-static-neutral-bluish-75": "#e3e5da",
       "--dsw-static-neutral-bluish-100": "#dce0d2",
       "--dsw-static-neutral-bluish-150": "#d8dccd",
       "--dsw-static-neutral-bluish-200": "#d3d8c6",
       "--dsw-static-neutral-bluish-300": "#c3cbb6",
       "--dsw-static-neutral-bluish-400": "#8a9080",
       "--dsw-static-neutral-bluish-500": "#717765",
       "--dsw-static-neutral-bluish-600": "#656a5a",
       "--dsw-static-neutral-bluish-700": "#55584a",
       "--dsw-static-neutral-bluish-750": "#3c3f34",
       "--dsw-static-neutral-bluish-800": "#2f3229",
       "--dsw-static-neutral-bluish-850": "#242620",
       "--dsw-static-neutral-bluish-875": "#1f221c",
       "--dsw-static-neutral-bluish-900": "#1b1e15",
       "--dsw-static-neutral-bluish-950": "#141711",
       "--dsw-static-neutral-bluish-1000": "#0f110d",
       "--dsw-static-deepseek-50": "#eef0d8",
       "--dsw-static-deepseek-100": "#e2e6bd",
       "--dsw-static-deepseek-200": "#cdd4a0",
       "--dsw-static-deepseek-400": "#d6e452",
       "--dsw-static-deepseek-450": "#c6ca4c",
       "--dsw-static-deepseek-500": "#a9b32f",
       "--dsw-static-deepseek-700": "#768514",
       "--dsw-static-deepseek-800": "#4a5222",
       "--dsw-static-deepseek-900": "#2b311a",
       "--dsw-static-blue-400": "#8a9433",
       "--dsw-static-blue-500": "#768514",
       "--dsw-static-blue-600": "#5d6910",
       "--dsw-static-green-400": "#3f8b5f",
       "--dsw-static-green-500": "#296849",
       "--dsw-static-amber-400": "#a1762c",
       "--dsw-static-amber-500": "#8c6120",
       "--dsw-static-amber-600": "#6f4c17",
       "--dsw-static-red-400": "#c25f4c",
       "--dsw-static-red-500": "#b84b36",
       "--dsw-static-red-600": "#993b28",
       "--dsw-alias-bg-base": "#e9eae4",
       "--dsw-alias-bg-layer-1": "#e3e5da",
       "--dsw-alias-bg-layer-2": "#dce0d2",
       "--dsw-alias-bg-layer-3": "#d3d8c6",
       "--dsw-alias-bg-layer-4": "#cdd3bd",
       "--dsw-alias-bg-overlay": "#e3e5da",
       "--dsw-alias-bg-module-platform": "#dfe2d5",
       "--dsw-alias-bg-multi-select": "#dfe2d5",
       "--dsw-alias-bg-skeleton": "#0000000a",
       "--dsw-alias-bg-mask-1": "#12140f66",
       "--dsw-alias-bg-mask-2": "#12140f33",
       "--dsw-alias-bg-mask-3": "#12140f99",
       "--dsw-alias-bg-document-preview": "#eef0e8",
       "--dsw-alias-border-l1": "#c7cfba",
       "--dsw-alias-border-l2": "#bec6b3",
       "--dsw-alias-border-l2-darkmode-thin": "#c7cfba",
       "--dsw-alias-border-l3": "#b0b9a1",
       "--dsw-alias-border-l4": "#a4ae94",
       "--dsw-alias-label-primary": "#242620",
       "--dsw-alias-label-secondary": "#55584a",
       "--dsw-alias-label-tertiary": "#717765",
       "--dsw-alias-label-caption": "#8a9080",
       "--dsw-alias-label-dimmed": "#9aa08d",
       "--dsw-alias-label-primary-foreground": "#f6f7f1",
       "--dsw-alias-label-shimmer": "#c3cbb6",
       "--dsw-alias-brand-primary": "#242620",
       "--dsw-alias-brand-primary-new-colorprimary-new-color": "#768514",
       "--dsw-alias-brand-text": "#768514",
       "--dsw-alias-brand-primary-invert": "#f6f7f1",
       "--dsw-alias-button-primary-fill": "#242620",
       "--dsw-alias-button-primary-hover": "#3c3f34",
       "--dsw-alias-button-contrast-fill": "#242620",
       "--dsw-alias-button-elevated-fill": "#f6f7f1",
       "--dsw-alias-button-floating-fill": "#f6f7f1",
       "--dsw-alias-button-floating-hover": "#e9eae4",
       "--dsw-alias-button-ghost-active-fill": "#dce0d2",
       "--dsw-alias-button-ghost-active-border": "#84951c",
       "--dsw-alias-button-tool-bar-fill": "#e3e5da",
       "--dsw-alias-button-tool-bar-hover": "#dce0d2",
       "--dsw-alias-interactive-bg-hover": "#0000000f",
       "--dsw-alias-interactive-bg-active": "#0000001a",
       "--dsw-alias-interactive-bg-hover-danger": "#b84b361f",
       "--dsw-alias-link": "#768514",
       "--dsw-alias-markdown-code-block": "#f2f3ec",
       "--dsw-alias-markdown-code-block-banner": "#e3e5da",
       "--dsw-alias-markdown-inline-code": "#e3e5da",
       "--dsw-alias-markdown-tag": "#dce0d2",
       "--dsw-alias-menu-icon": "#717765",
       "--dsw-alias-menu-group-header-fill": "#e3e5daf2",
       "--dsw-menu-surface-fill": "#f2f3ecf2",
       "--dsw-menu-backdrop-filter": "none",
       "--dsw-specific-menu": "#f6f7f1fa",
       "--dsw-specific-input-major": "#f6f7f1",
       "--dsw-specific-sidebar-fill": "#e3e5da",
       "--dsw-specific-sidebar-nav-item-active": "#dce0d2",
       "--dsw-specific-sidebar-nav-item-active-accent": "#768514",
       "--dsw-specific-sidebar-nav-item-hover": "#0000000f",
       "--dsw-specific-selector": "#e3e5da",
       "--dsw-specific-tip": "#f2f3ec",
       "--dsw-specific-bubble": "#dce0d2",
       "--dsw-specific-bubble-highlight": "#d3d8c6",
       "--dsw-alias-scrollbar-bg-l2": "#00000029",
       "--dsw-alias-scrollbar-hover-l2": "#768514",
       "--dsw-alias-state-idle-primary": "#8a9080",
       "--dsw-alias-state-success-primary": "#296849",
       "--dsw-alias-state-success-secondary": "#3f8b5f",
       "--dsw-alias-state-success-tertiary": "#d7e8dd",
       "--dsw-alias-state-error-primary": "#b84b36",
       "--dsw-alias-state-error-secondary": "#c25f4c",
       "--dsw-alias-state-error-tertiary": "#f0dad5",
       "--dsw-alias-state-warn-primary": "#8c6120",
       "--dsw-alias-state-warn-secondary": "#a1762c",
       "--dsw-alias-state-warn-tertiary": "#efe4cd",
       "--dsw-alias-state-warn-label": "#8c6120",
       "--dsw-alias-state-business-primary": "#768514",
       "--dsw-alias-state-business-secondary": "#a9b32f",
       "--dsw-alias-state-business-tertiary": "#e2e6bd",
       "--dsw-alias-tooltip-bg": "#242620",
       "--dsw-alias-tooltip-key-bg": "#ffffff1f",
       "--dsw-alias-toast-bg": "#242620",
       "--dsw-alias-toast-label": "#f6f7f1",
       "--dsw-alias-code-diff-added": "#29684926",
       "--dsw-alias-code-diff-deleted": "#b84b3626",
       "--dsw-alias-switch-thumb": "#f6f7f1",
       "--dsw-alias-turn-trigger-bg": "#e3e5da",
       "--dsw-alias-turn-trigger-bg-hover": "#dce0d2",
       "--dsw-hovercard-bg": "#f2f3ec",
       "--dsw-elevation-panel": "0 0 0 1px #bec6b3",
       "--dsw-elevation-prominent": "0 0 0 1px #bec6b3",
       "--dsw-elevation-soft": "0 0 0 1px #c7cfba",
       "--dsw-elevation-stroke-color": "#bec6b3",
       "--dsw-shadow-lv3": "0 0 0 1px #bec6b3",
       "--dsw-mask-blur": "none",
       "--dsw-radius-xs": "0",
       "--dsw-radius-sm": "0",
       "--dsw-radius-md": "0",
       "--dsw-radius-lg": "0",
       "--dsw-radius-panel": "0",
       "--dsw-focus-ring-color": "#768514",
       "--dsw-focus-ring-width": "3px",
       "--dsw-font-family": "Arial,\"Microsoft YaHei\",\"PingFang SC\",\"Hiragino Sans GB\",sans-serif",
       "--ds-font-family-code": "Consolas,\"Cascadia Mono\",ui-monospace,SFMono-Regular,Menlo,monospace",
       "--dsw-font-markdown-code-font-family": "Consolas,\"Cascadia Mono\",ui-monospace,SFMono-Regular,Menlo,monospace"
    };

    /** Structural overrides (see the module docblock). */
    var STRUCT = `
/* ============================================================
   2. Surfaces — 1px hairlines, no blur, no drop shadows
   ============================================================ */
html, body { background: var(--dsw-alias-bg-base) !important; }
body { font-family: var(--dsw-font-family) !important; }
::selection { background: #d6e452 !important; color: #1b1e15 !important; }

[class*="_material"], [class*="_mask"], [class*="_dockScrim"], [class*="_backing"] {
  backdrop-filter: none !important; -webkit-backdrop-filter: none !important;
}
[class*="_dialog"], [class*="_float"] { border: 1px solid var(--zmd-line) !important; }
[class*="_sidebarCol"] { border-right: 1px solid var(--zmd-line-inner) !important; }
[class*="_rightbarCol"] { border-left: 1px solid var(--zmd-line-inner) !important; }

/* ============================================================
   3. Controls — square corners + the ZMD 10px corner cut
   ============================================================ */
input, textarea, select, button { border-radius: 0 !important; font-family: inherit; }
[class*="_pill"], [class*="_tag"], [class*="_chip"], [class*="_badge"] { border-radius: 0 !important; }
[class*="_outline"] { border: 1px solid var(--zmd-line) !important; }
[class*="_primary"] {
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%);
  transition: transform .25s var(--zmd-ease), background-color .25s var(--zmd-ease);
}
[class*="_primary"]:hover:not(:disabled) { transform: translateY(-1px); }
[class*="_primary"]:active:not(:disabled) { transform: none; }

/* Selected / active states carry the accent rail, never a full fill. */
[role="option"][aria-selected="true"], [role="menuitemcheckbox"][aria-checked="true"] {
  box-shadow: inset 3px 0 0 var(--zmd-accent) !important;
}
[class*="_tabActive"], [class*="_tab"][aria-selected="true"] {
  box-shadow: inset 0 -2px 0 var(--zmd-accent) !important;
}

/* ============================================================
   4. Typography — mono for system labels, sans for prose
   ============================================================ */
code, kbd, samp, pre, [class*="_banner"], [class*="_infostring"], [class*="_crumb"],
[class*="_fieldKey"], [class*="_sectionName"] { font-family: var(--zmd-mono) !important; }
[class*="_banner"], [class*="_sectionName"], [class*="_titleRule"] {
  letter-spacing: .08em !important; text-transform: uppercase; font-size: 11px !important;
}
[data-diff], [data-read], [data-search], [data-terminal] { border: 1px solid var(--zmd-line-inner) !important; }
pre { border: 1px solid var(--zmd-line-inner); }
:not(pre) > code { border: 1px solid var(--zmd-line-inner); border-radius: 0 !important; }
blockquote { border-left: 3px solid var(--zmd-accent) !important; background: #ffffff08; padding-left: 14px; }
table { border-collapse: collapse; }
th, td { border: 1px solid var(--zmd-line-inner) !important; }
hr { border: 0 !important; border-top: 1px solid var(--zmd-line) !important; }
h1, h2, h3, h4 { letter-spacing: -.01em; }

/* ============================================================
   5. Focus, scrollbars, motion
   ============================================================ */
/* Focus rings stay owned by the token layer (--dsw-focus-ring-*); no global override. */
* { scrollbar-width: thin; scrollbar-color: var(--dsw-alias-scrollbar-bg-l2) transparent; }
::-webkit-scrollbar { width: 10px; height: 10px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: var(--dsw-alias-scrollbar-bg-l2); border: 0; border-radius: 0; }
::-webkit-scrollbar-thumb:hover { background: var(--zmd-accent); }
::-webkit-scrollbar-corner { background: transparent; }
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: .01ms !important; animation-iteration-count: 1 !important;
    transition-duration: .01ms !important; scroll-behavior: auto !important;
  }
}

/* ============================================================
   6. Surface recipes (app density)
   ------------------------------------------------------------
   6.1 session rail        → app-list-toolbar
   6.2 tool cards          → §15.3 section heading / terminal blocks
   6.3 settings            → app-settings-form
   6.4 hairline normalization (every 0.5px rule becomes 1px)
   ============================================================ */

/* ---- 6.1 session rail -------------------------------------------------- */
[class*="_sessionRow"], [class*="_projectRow"], [class*="_searchResultRow"] {
  border-radius: 0 !important;
  border-bottom: 1px solid var(--zmd-line-inner) !important;
}
[class*="_sessionRow"][class*="_selected"], [class*="_searchResultRow"][class*="_selected"] {
  background: #ffffff0a !important;
  box-shadow: inset 3px 0 0 var(--zmd-accent) !important;
}
/* DSH's session hover card paints itself #2C2C2E in every scheme and its title
   is hardcoded #fff upstream: keep light ink here instead of theme ink. */
[class*="_hoverTitle"], [class*="_copied"] { color: #eeefea !important; }
[class*="_searchResultSnippet"], [class*="_searchResultWorkspace"], [class*="_linkedSessionLabel"] {
  font-family: var(--zmd-mono) !important; font-size: 11px !important; letter-spacing: .04em;
}

/* ---- 6.2 tool cards ---------------------------------------------------- */
/* One hairline, one flat surface, no depth; text-only sub-elements excluded. */
[class*="_ioCard"] {
  border: 1px solid var(--zmd-line-inner) !important;
  border-radius: 0 !important;
  box-shadow: none !important;
}
/* Command output sits on the deeper canvas, like a terminal inside a light band. */
[class*="_ioCard"], [class*="_terminalBody"] {
  background: #151713 !important;
  border: 1px solid var(--zmd-line-inner) !important;
}
[class*="_ioDivider"], [class*="_sep"] { background: var(--zmd-line-inner) !important; }
[class*="_ioDivider"] { height: 1px !important; }

[class*="_ioLabel"] {
  color: var(--dsw-alias-label-tertiary) !important;
  font-family: var(--zmd-mono) !important; font-size: 11px !important; letter-spacing: .06em;
}

/* ---- 6.3 settings (app-settings-form) ---------------------------------- */
[data-slot="settings.general.item"] > * {
  border-bottom: 1px solid var(--zmd-line-inner) !important;
  padding: 16px 0 !important;
  gap: 24px !important;
  align-items: center !important;
}
[data-slot="settings.general.item"] > *:last-child { border-bottom: none !important; }
[data-slot="settings.general.item"] [class*="_description"] { color: var(--dsw-alias-label-secondary) !important; }

[class*="_navCell"] { border-radius: 0 !important; }
[class*="_navCell"][class*="_active"] {
  background: #ffffff0a !important;
  box-shadow: inset 3px 0 0 var(--zmd-accent) !important;
}

/* Switch: square 38x22 track with an 18px square knob. */
[class*="_switch"]:not([class*="_switcher"]):not([class*="_switchTitle"]) {
  border-radius: 0 !important; width: 38px !important; height: 22px !important;
}
[class*="_switch"]:not([class*="_switcher"]):not([class*="_switchTitle"]) [class*="_thumb"] {
  border-radius: 0 !important; width: 18px !important; height: 18px !important;
}
[class*="_switch"][aria-checked="true"] [class*="_thumb"] { transform: translate(16px) !important; }

/* ---- 6.4 hairline normalization ---------------------------------------- */
[class*="_ioCard"], [class*="_outline"], [class*="_navCell"], [class*="_input"] { border-width: 1px !important; }
[class*="_panel"]:after { border-width: 1px !important; }
`;

    var PLUGIN_ID = "dsh-zmd-theme";

    /** Serialize one token map into an `!important` block for a selector. */
    function block(selector, vars) {
      var body = "";
      for (var name in vars) if (Object.prototype.hasOwnProperty.call(vars, name)) {
        body += name + ":" + vars[name] + " !important;";
      }
      return selector + "{" + body + "}";
    }

    /** The complete skin: ZMD constants, both palettes, structural rules. */
    function stylesheet() {
      return [
        ":root{--zmd-accent:#d6e452;--zmd-accent-hover:#e3f376;--zmd-accent-steady:#c6ca4c;",
        "--zmd-line:#ffffff25;--zmd-line-inner:#ffffff15;--zmd-focus:#89b7ff;",
        '--zmd-mono:Consolas,"Cascadia Mono",ui-monospace,SFMono-Regular,Menlo,monospace;',
        '--zmd-sans:Arial,"Microsoft YaHei","PingFang SC","Hiragino Sans GB",sans-serif;',
        "--zmd-ease:cubic-bezier(.22,1,.36,1);}",
        "body:not([data-ds-dark-theme]){--zmd-line:#bec6b3;--zmd-line-inner:#c7cfba;--zmd-focus:#768514;}",
        block("body:not([data-ds-dark-theme])", LIGHT),
        block("body[data-ds-dark-theme]", DARK),
        STRUCT
      ].join("");
    }

    /** Idempotent stylesheet injection, keyed like every other plugin sheet. */
    function installStyles() {
      if (typeof document === "undefined") return null;
      var tagId = PLUGIN_ID + "/zmd.css";
      var existing = document.querySelector('style[data-plugin-css=' + JSON.stringify(tagId) + "]");
      /* Refresh in place: a re-materialized plugin must not keep the previous sheet. */
      if (existing !== null) { existing.textContent = stylesheet(); return existing; }
      var tag = document.createElement("style");
      tag.dataset.plugin = PLUGIN_ID;
      tag.dataset.pluginCss = tagId;
      tag.textContent = stylesheet();
      (document.head || document.documentElement).appendChild(tag);
      return tag;
    }

    /** Colour-scheme pairs for `ctx.theme.overrideTokens`. */
    function pairs() {
      var out = {};
      for (var name in DARK) if (Object.prototype.hasOwnProperty.call(DARK, name) && LIGHT[name] !== undefined) {
        out[name] = { light: LIGHT[name], dark: DARK[name] };
      }
      return out;
    }

    /* Materialization-time injection: the skin is live even before apply(). */
    installStyles();

    /** Cordis services this plugin needs before apply() runs. */
    exports.inject = ["theme"];

    /**
     * Client plugin body.
     * @param ctx - client cordis context.
     */
    function apply(ctx) {
      ctx.effect(function () {
        installStyles();
        return function () {};
      }, "zmd-theme: stylesheet");
      ctx.effect(function () {
        var dispose = ctx.theme.overrideTokens(PLUGIN_ID, pairs());
        return function () { try { dispose(); } catch (error) {} };
      }, "zmd-theme: alias token layer");
    }

    exports.apply = apply;
    return module.exports;
  }
});
