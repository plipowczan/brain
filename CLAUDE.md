# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal knowledge management system (digital garden) built with:
- **Obsidian** for authoring markdown content
- **Quartz 4** (Node.js + TypeScript) as the static site generator
- **GitHub Pages** for hosting at https://brain.lipowczan.pl/

## Common Commands

```bash
# Serve locally with hot reload
npx quartz build --serve

# Build for production
npx quartz build

# Install dependencies
npm install
```

## Architecture

### Data Flow
```
/content/**/*.md (Obsidian vault)
    ↓
Quartz 4 build (Node.js + plugins)
    ↓
/public/ (static HTML)
    ↓
GitHub Pages (via .github/workflows/deploy.yaml)
```

### Key Directories
- `/content/` - Markdown knowledge base organized by topic (ABOUT, BUSINESS, CODE, etc.)
- `/content/.obsidian/` - Obsidian vault configuration
- `/quartz/` - Quartz 4 build system, plugins, and components (from upstream)
- `/quartz/static/` - Static assets (favicon, etc.)

### Content Conventions
- Uses Obsidian internal linking syntax: `[[note-name]]`
- Frontmatter metadata for title, tags, categories
- Ignored paths: `/content/templates/*`, `/content/private/*`

## CI/CD

Deployment triggers on push to `v4` branch:
1. Checkout with full history (for git info/last-modified dates)
2. `npm ci` to install dependencies
3. `npx quartz build` to generate static site
4. Deploy to GitHub Pages via GitHub Actions (pages artifact)

## Configuration Files

| File | Purpose |
|------|---------|
| `quartz.config.ts` | Site config: title, URL, analytics, theme colors, plugins |
| `quartz.layout.ts` | Page layout: component arrangement, footer links |
| `package.json` | Node.js dependencies |
| `tsconfig.json` | TypeScript configuration |
| `.prettierrc` | Formatting: 100 char width, trailing commas, 2-space tabs, no semicolons |
