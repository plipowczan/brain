---
title: "Redoc"
date: 2026-06-13
enableToc: true
openToc: true
tags: ["tool", "api", "documentation", "openapi", "swagger", "open-source"]
type: tool
source: "_raw/processed/2026-06-13_Redoclyredoc-OpenAPI-Swagger-API-Reference-Documentation.md"
agent-created: true
summary: "Redocly/redoc — open-source generator of three-panel API reference docs from OpenAPI/Swagger definitions; CLI, HTML tag, or React component"
---

# Redoc

Open-source tool from [Redocly](https://redocly.com/) that generates beautiful API reference documentation from OpenAPI (formerly Swagger) definitions. Default output is a responsive three-panel layout: navigation + search on the left, docs in the centre, request/response examples on the right.

## Links

### Description

- Generates a static, responsive API reference from an OpenAPI/Swagger spec.
- Supports OpenAPI 3.1, OpenAPI 3.0, and Swagger 2.0.
- Three delivery modes: **CLI** (also a Docker image), an **HTML `<redoc>` tag** loaded from CDN, and a **[[React]] component** (simple `create-react-app` integration).
- Live demo / playground: paste a spec URL and render it at [redocly.github.io/redoc](https://redocly.github.io/redoc/).

### Download or use

```bash
# CLI (requires Node) — outputs redoc-static.html
npx @redocly/cli build-docs openapi.yaml
```

```html
<!-- HTML tag from CDN -->
<redoc spec-url="http://petstore.swagger.io/v2/swagger.json"></redoc>
<script src="https://cdn.redoc.ly/redoc/latest/bundles/redoc.standalone.js"></script>
```

- Repo: [github.com/Redocly/redoc](https://github.com/Redocly/redoc)

## Reasoning for

When an API already has an OpenAPI/Swagger spec, Redoc turns it into publishable reference docs with zero hand-written HTML — useful for any project exposing a documented API. It reads spec extensions (`x-logo`, `x-tagGroups`, `x-codeSamples`, `x-badges`, etc.) so the docs can be branded and grouped without leaving the spec file.

## Alternatives considered

- **Swagger UI** — the classic OpenAPI renderer; single-panel, interactive try-it console out of the box.
- **Redocly API Reference** — Redocly's paid hosted edition, adds a try-it console, automated code samples, pagination, and extra themes on top of the community Redoc.
- **Redocly CLI** — the broader sibling toolchain (linting, bundling) around the same specs.

## Resources

- 📘 [Redoc documentation](https://redocly.com/docs/redoc/)
- [build-docs CLI command](https://redocly.com/docs/cli/commands/build-docs/)
- [Specification extensions reference](https://redocly.com/docs/api-reference-docs/spec-extensions/)

---
Template: [[templates/tool]]
