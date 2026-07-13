# Pyrokai theme files

Generated from the Pyrokai Figma design system (119 primitives, 16 semantic tokens × Dark/Light).
Source palette: `bg`, `bg/elevated`, `surface`, `border`, `border/strong`, `text`, `text/muted`,
`text/subtle`, `accent`, `accent/hover`, `link`, `success`, `warning`, `danger`, `info`, `highlight`,
plus 8 accent hues (red, orange, yellow, green, cyan, blue, purple, magenta) × 13 steps each.

Syntax highlighting everywhere follows one consistent mapping (Monokai's role assignments,
recolored onto Pyrokai's 8 hues): **string** → yellow · **number/constant** → purple ·
**keyword/storage** → magenta · **function** → green · **class/type** → cyan ·
**parameter** → orange · **operator/invalid** → red · **comment** → text/subtle.

## Install

**VS Code** — `themes/vscode/`. Copy the folder to `~/.vscode/extensions/pyrokai/` (with its
`package.json`), reload, then select "Pyrokai Dark" / "Pyrokai Light" from the theme picker.

**Xcode** — `themes/xcode/*.xccolortheme`. Copy into
`~/Library/Developer/Xcode/UserData/FontAndColorThemes/`, then pick it in
Xcode → Settings → Themes.

**Ghostty** — `themes/ghostty/pyrokai` (+ `pyrokai-light`). Copy into
`~/.config/ghostty/themes/`, then set `theme = pyrokai` in `~/.config/ghostty/config`.

**cmux** — cmux is Ghostty-based and reads themes from the same place. Copy
`themes/cmux/pyrokai` into `~/.config/ghostty/themes/` (identical file to Ghostty's).

**Claude Code** — `themes/claude-code/pyrokai-dark.json` / `pyrokai-light.json`. Copy into
`~/.claude/themes/`, then select `custom:pyrokai-dark` (or `-light`) via `/config`. Requires
Claude Code v2.1.118+.

**Codex** — see `themes/codex/README.txt`. CLI: copy `Pyrokai.tmTheme` into `~/.codex/themes/`
and set `[tui] theme = "pyrokai"` in `~/.codex/config.toml`. App: paste the `codex-theme-v1:...`
string via Settings → Appearance → Import.

**Rider** — `themes/rider/*.icls`. Copy into
`~/Library/Application Support/JetBrains/Rider<version>/colors/`, then select under
Settings → Editor → Color Scheme.

**Visual Studio** — `themes/visual-studio/*.vssettings`. Tools → Import and Export Settings →
Import Selected Environment Settings, choose the file (only imports Fonts & Colors).

**TextMate** — `themes/textmate/*.tmTheme`. Double-click to install, or copy into
`~/Library/Application Support/TextMate/Themes/`, then pick under Preferences → Fonts & Colors.

**iTerm2** — `themes/iterm2/*.itermcolors`. Double-click to install, or Preferences → Profiles →
Colors → Color Presets → Import, then select it.

**Terminal.app** — `themes/terminal-app/*.terminal`. Double-click to install, then set as default
under Terminal → Settings → Profiles.

**Windows Terminal** — `themes/windows-terminal/pyrokai-schemes.json`. Paste both scheme objects
into the `"schemes"` array in `settings.json`, then set `"colorScheme": "Pyrokai Dark"` on a profile.

**Slack** — `themes/slack/pyrokai-slack-theme.txt`. Preferences → Themes → Custom → paste the
Dark or Light hex string.

**Obsidian** — `themes/obsidian/Pyrokai/`. Copy the folder into
`<vault>/.obsidian/themes/Pyrokai/`, then enable "Pyrokai" under Settings → Appearance → Themes.
