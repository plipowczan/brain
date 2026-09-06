---
title: "anydoc"
date: 2026-09-06
enableToc: true
openToc: true
tags: ["tool", "ai", "document-parsing", "markdown", "rust", "python", "nodejs", "agent-skills", "open-source"]
type: tool
source: "_raw/processed/2026-09-06_firecrawlanydoc Convert Word, PowerPoint, Excel, OpenDocument, RTF, EPUB, CSV, and PDF to clean Markdown.md"
agent-created: true
agent-reviewed: 2026-09-06
summary: "firecrawl/anydoc — Rust library converting Word, PowerPoint, Excel, OpenDocument, RTF, EPUB, CSV and PDF to clean GFM Markdown in under 5ms median; Node/Python/WASM bindings and an agent skill. Beats libreoffice, markitdown, pandoc and docling on all 14 formats."
---
# anydoc

🗒️ **[firecrawl/anydoc](https://github.com/firecrawl/anydoc)** — a fast Rust library that turns office documents (Word, PowerPoint, Excel, OpenDocument, RTF, EPUB, CSV, PDF) into clean **GitHub-Flavored Markdown**, with bindings for Node.js, Python and the browser (WebAssembly). Built by [[Firecrawl]] to make any document LLM-ready in single-digit milliseconds, with one consistent output no matter which format goes in. It powers Firecrawl Parse.

🧪 **[Try it in your browser](https://firecrawl.github.io/anydoc/)** — the demo runs as WASM, so files are converted locally and never leave your machine.

## Links
### Description
🧩 What it does:

- **One output for every format** — each format parses into a shared document model and renders through a single Markdown serializer, so escaping, tables, heading anchors and footnotes behave identically whether the input is a `.doc` from 2003 or a `.pptx` from yesterday.
- **Full document structure** — headings with anchors, bold/italic/strikethrough, inline and block code, links and internal cross-references, nested/task lists with the source's own numbering, tables with merged cells, block quotes, footnotes, endnotes, speaker notes.
- **Equations as LaTeX** — Word/PowerPoint OMML, OpenDocument/EPUB MathML and RTF equations all become GitHub-flavored math (`$…$`, `$$`).
- **Embedded assets** — images render as alt text in the Markdown, raw bytes stay on the document model tagged with media type.
- **Content-based format detection** — read from the bytes themselves (PDF header, RTF open group, OLE stream names, ZIP package mimetype), so mislabeled files still convert.
- **Fast** — pure Rust, no ML models, no external services; median conversion under 5ms.
- **Bindings that stay out of the way** — Node conversion runs on the libuv thread pool and never blocks the event loop; Python releases the GIL. TS types and Python stubs ship with the packages.
- **Agent-ready** — ships as an [[Agent Skills|agent skill]] so any agent can read documents it runs into.

### Download or use
As an agent skill (via [[Vercel Skills|npx skills]]):
```bash
npx skills add firecrawl/anydoc
```
CLI:
```bash
npx @firecrawl/anydoc report.docx               # Markdown to stdout
npx @firecrawl/anydoc slides.pptx -o slides.md  # or to a file
npx @firecrawl/anydoc - --format csv < data.csv # read stdin
npx @firecrawl/anydoc scan.pdf --ocr hosted     # scanned pages via Firecrawl Parse
```
Libraries:
```bash
npm install @firecrawl/anydoc          # Node
pip install firecrawl-anydoc           # Python
cargo add anydoc                       # Rust
npm install @firecrawl/anydoc-wasm     # browser
```
```python
import anydoc
markdown = anydoc.to_markdown("report.docx")
markdown = anydoc.to_markdown("scan.pdf", ocr="hosted")
document = anydoc.to_document(data)    # keeps embedded assets
```

## Reasoning for
The obvious use is **inbox ingestion for this vault**: a `.docx`, `.pptx` or `.xlsx` dropped into `_raw/inbox/` becomes a clean Markdown source in milliseconds, offline, with no Python document stack to maintain. As an agent skill it also removes the "the agent can't read this file" failure mode entirely.

It's the fast, local, deterministic end of the spectrum — the complement, not the replacement, of the VLM parsers I already track:

- **anydoc** — office formats, structure-preserving, <5ms, no model, no network (Rust crate never makes network calls at all).
- **[[Marker]] / [[MinerU]]** — VLM/OCR document intelligence for scans, complex PDFs and layout reconstruction.
- **[[Firecrawl]] / [[Crawl4AI]]** — the web, not local documents.

☘️ Where it stops: anydoc reads text-based PDFs locally but does **no OCR** — an image-only PDF fails with `NeedsOcr`. You can opt in with `--ocr hosted` and that document (the whole file, since Parse has no page selection) goes to Firecrawl Parse; nothing else leaves the machine. That's the privacy boundary to know about.

## Benchmark
Measured against six other converters on 100 real-world documents across fourteen formats, judged blind by an LLM against LibreOffice-rendered ground truth, every pair judged twice with outputs swapped to cancel position bias (482 verdicts).

| tool | formats | median ms | score |
| --- | --- | --- | --- |
| **anydoc** | **14/14** | **4.4** | **81** |
| mammoth | 1/14 | 52.5 | 70 |
| markitdown | 6/14 | 134.8 | 65 |
| unstructured | 8/14 | 572.9 | 63 |
| docling | 4/14 | 513.6 | 57 |
| pandoc | 5/14 | 102.1 | 56 |
| libreoffice | 12/14 | 1129.5 | 40 |

Scores average different format sets per tool (mammoth's is docx alone), so the per-format table in the README is the fair comparison — there anydoc still scores highest on every judged format, and converts an order of magnitude faster than the next-fastest tool.

## Supported formats
| Format | Extensions |
| --- | --- |
| Word | `.doc`, `.docx`, `.docm` |
| PowerPoint | `.ppt`, `.pps`, `.pot`, `.pptx`, `.pptm`, `.ppsx`, `.ppsm` |
| Excel | `.xls`, `.xlsx`, `.xlsm`, `.xlsb` |
| OpenDocument | `.odt`, `.ods`, `.odp` |
| Rich Text Format | `.rtf` |
| EPUB | `.epub` |
| CSV | `.csv` |
| PDF | `.pdf` (text-based locally; scanned needs hosted OCR) |

## Alternatives considered
- **markitdown** — Microsoft's converter; 6/14 formats, 30× slower, lower fidelity in this benchmark.
- **pandoc** — the universal document Swiss army knife, but only 5/14 of these formats and weaker structure preservation.
- **[[Marker]] · [[MinerU]] · [[Unlimited-OCR]]** — the right tool when the input is scanned or layout-heavy; anydoc explicitly doesn't do OCR locally.
- **LibreOffice headless** — covers 12/14 formats but is 250× slower and scored lowest on cleanliness.

## Resources
- 🔗 Repo: [github.com/firecrawl/anydoc](https://github.com/firecrawl/anydoc) · [browser demo](https://firecrawl.github.io/anydoc/)
- 🔗 API refs: [Node](https://github.com/firecrawl/anydoc/blob/main/node/README.md) · [Python](https://github.com/firecrawl/anydoc/blob/main/python/README.md) · [WASM](https://github.com/firecrawl/anydoc/blob/main/wasm/README.md)
- 🔗 [The agent SKILL.md](https://github.com/firecrawl/anydoc/blob/main/skills/convert-documents-to-markdown/SKILL.md) · [benchmark harness](https://github.com/firecrawl/anydoc/blob/main/bench/README.md) · [Firecrawl Parse](https://firecrawl.dev/parse)
- 📖 Related: [[Firecrawl]] · [[Marker]] · [[MinerU]] · [[Unlimited-OCR]] · [[Agent Skills]] · [[Vercel Skills]]

---
Template: [[templates/tool]]
