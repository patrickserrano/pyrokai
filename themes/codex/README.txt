Pyrokai — Codex

1. CLI syntax theme (TextMate grammar): copy Pyrokai.tmTheme / 'Pyrokai Light.tmTheme'
   (see ../codex/) into ~/.codex/themes/, then in ~/.codex/config.toml:

   [tui]
   theme = "pyrokai"          # or "pyrokai-light"

2. Codex App/desktop: Settings -> Appearance -> Import, paste one of these strings:

Dark:
codex-theme-v1:{"codeThemeId":"one","theme":{"accent":"#ea7332","contrast":50,"fonts":{"code":null,"ui":null},"ink":"#faf6f5","opaqueWindows":true,"semanticColors":{"diffAdded":"#75ad2f","diffRemoved":"#ec6785","skill":"#9b84f7"},"surface":"#151312"},"variant":"dark"}

Light:
codex-theme-v1:{"codeThemeId":"one-light","theme":{"accent":"#b65318","contrast":50,"fonts":{"code":null,"ui":null},"ink":"#242120","opaqueWindows":true,"semanticColors":{"diffAdded":"#568413","diffRemoved":"#b84963","skill":"#7662c2"},"surface":"#faf6f5"},"variant":"light"}
