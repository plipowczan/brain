# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal knowledge management system (digital garden) built with:
- **Obsidian** for authoring markdown content
- **Hugo** (v0.96.0 extended) as the static site generator
- **Quartz 3.3** theme for digital garden functionality
- **GitHub Pages** for hosting at https://brain.lipowczan.pl/

## Common Commands

```bash
# Serve locally (builds link index + starts Hugo server)
make serve

# Update Quartz theme to latest (interactive patch)
make update

# Force update Quartz (non-interactive)
make update-force

# Show all available targets
make help
```

The build process runs `hugo-obsidian` first to generate link indices (`contentIndex.json`, `linkIndex.json`), then starts the Hugo server.

## Architecture

### Data Flow
```
/content/**/*.md (Obsidian vault)
    ↓
hugo-obsidian (generates link indices in /assets/indices/)
    ↓
Hugo + Quartz templates (/layouts/)
    ↓
/public/ (static HTML)
    ↓
GitHub Pages (via .github/workflows/deploy.yaml)
```

### Key Directories
- `/content/` - Markdown knowledge base organized by topic (ABOUT, BUSINESS, CODE, etc.)
- `/content/.obsidian/` - Obsidian vault configuration
- `/layouts/` - Hugo templates (custom and Quartz overrides)
- `/data/config.yaml` - Quartz site configuration (name, links, features)
- `/data/graphConfig.yaml` - Knowledge graph visualization settings
- `/assets/` - JS, CSS, and generated link indices

### Content Conventions
- Uses Obsidian internal linking syntax: `[[note-name]]`
- Frontmatter metadata for title, tags, categories
- Ignored paths: `/content/templates/*`, `/content/private/*`

## CI/CD

Deployment triggers on push to `hugo` branch:
1. Checkout with full history (for git info/last-modified dates)
2. Run `hugo-obsidian` to build link indices
3. Run `hugo --minify`
4. Deploy to GitHub Pages (`master` branch) with CNAME

## Configuration Files

| File | Purpose |
|------|---------|
| `config.toml` | Hugo base config (URL, markdown rendering, analytics) |
| `data/config.yaml` | Quartz theme settings (author, social links, features) |
| `data/graphConfig.yaml` | Local/global graph visualization parameters |
| `.prettierrc` | Formatting: 100 char width, trailing commas, 2-space tabs, no semicolons |
