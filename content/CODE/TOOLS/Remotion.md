---
title: "Remotion"
date: 2026-01-31
enableToc: true
openToc: true
tags: ["tool", "ai", "video", "react"]
type: tool
agent-created: true
summary: "React-based video production — code-driven explainers, dynamic data, AI-assisted via Claude Code"
---

# Remotion

Biblioteka do tworzenia wideo w React — zamiast przeciągania elementów na timeline, opisujesz je kodem. Deklaratywne podejście: definiujesz **co** chcesz zobaczyć, Remotion oblicza interpolację, timing i przejścia.

```text
Tradycyjne: Pomysł → Storyboard → Nagranie → Edycja → Eksport (dni/tygodnie)
Remotion + AI: Pomysł → Prompt → Kod → Renderowanie (minuty)
```

## 🔗 Links

### Description
- [Remotion Official Docs](https://remotion.dev/docs) — oficjalna dokumentacja
- [Remotion Skills Repository](https://github.com/remotion-dev/skills) — skills dla [[Claude Code]]

### Download or use
```bash
npx create-video@latest     # nowy projekt
npx skills add remotion-dev/skills  # skill dla Claude Code
```

Open-source, darmowy do użytku osobistego i komercyjnego (firmy <$1M przychodu). Płatna licencja dla większych organizacji.

## 🗒️ Reasoning for

### Dlaczego kod zamiast edytora wideo

- **Programowalność** — zmiana koloru brandowego = 1 zmienna. 50 wersji z różnymi danymi = loop w JS
- **Dynamiczne dane** — import z API, render w runtime
- **Powtarzalność** — ten sam template, różne dane
- **AI-friendly** — opisujesz efekt, [[Claude Code]] generuje kod React
- **Eliminuje tygodnie nauki** After Effects / motion design

### Ograniczenia

- Nie zastępuje complex motion graphics / 3D / particle systems
- Nie jest edytorem real footage (nie przytnie nagrania z kamery)
- Nie generuje głosu — potrzebny zewnętrzny TTS (ElevenLabs, Murf)
- Animacje, nie filmy — bez kamer, aktorów

**Obejście:** Łącz z zewnętrznymi narzędziami (ElevenLabs + Remotion), używaj jako warstwa animacji na istniejącym wideo.

## 🧩 Workflow

### Prompt → React → Studio → MP4

1. Otwórz projekt Remotion w [[Claude Code]]
2. Opisz wideo naturalnym językiem (sceny, timing, styl)
3. Claude generuje komponenty React z animacjami
4. Podgląd w Remotion Studio (`npm run dev`)
5. Render do MP4 (`npm run build`)

**Ważne:** Explicite wywołaj skill `/remotion-best-practices` — bez tego Claude skanuje całe repo zamiast od razu budować.

## 📝 Prompt Structure

Dobry prompt do wideo zawiera 4 elementy:

1. **Sceny z timingiem** — co w której sekundzie
2. **Styl wizualny** — kolory hex, nastrój, estetyka
3. **Brand assets** — konkretne wartości, nie "zielony"
4. **Format i przeznaczenie** — 16:9 YouTube, 9:16 Stories, 1:1 LinkedIn

Przykład struktury:
```markdown
Stwórz 45-sekundowe video explainer.

Sceny:
1. (0-10s) Logo animacja z gradientem #00ff9d → #00cc7d
2. (10-25s) 3 główne usługi jako animowane karty
3. (25-40s) Statystyka/testimonial
4. (40-45s) CTA

Styl: Profesjonalny, dark mode (#0a0e1a)
Format: 16:9 (1920x1080)
```

**Uniwersalny szablon:**
```markdown
For the current project create a 45-second explainer video based on the content.
The video should:
- Extract and use the brand colors from the site
- Highlight the main services/products
- Include key selling points
- Use professional, elegant animations
- End with a clear call-to-action
Aspect ratio: 16:9
Style: PROFESSIONAL
```

## 🛠️ Tools

| Komenda | Co robi |
|---------|---------|
| `npm run dev` | Remotion Studio — podgląd z hot reload |
| `npm run build` | Render do MP4 (out/video.mp4) |
| `npm run build:gif` | Render do animowanego GIF |
| `npx remotion render src/index.ts MyVideo out/video.mp4` | CLI render |
| Remotion Lambda | Render w chmurze (szybciej, płatne) |

**Render time:** 2-5 minut dla prostych animacji (1080p, nowoczesny laptop 8GB+ RAM). 4K = dłużej.

## 📊 Use Cases

### Dla przedsiębiorców i konsultantów
- **Explainer videos** — 30-60s na landing page, zastępuje paragraf tekstu
- **Product demos** — animowane mockupy zamiast screen recording
- **Case study visualizations** — animowane statystyki > bullet points w PowerPoint

### Dla twórców treści
- **Animated title sequences** — intro do YouTube
- **Lower thirds** — napisy z imieniem/tytułem, reużywalne z różnymi danymi
- **Social media content** — Stories/Reels w 9:16

### Dla SaaS
- **Feature announcements** — 15s teaser na LinkedIn
- **Onboarding videos** — łatwiejsze w aktualizacji niż nagrania z lektorem
- **Animated release notes** — changelog jako 30s wideo

## 💰 Cost

- Remotion: **open-source, darmowy** (<$1M przychodu)
- Render time: **2-5 minut** dla 45-sekundowego explainera
- Vs. studio produkcyjne: tysiące złotych i tygodnie pracy
- Claude Code: subskrypcja Claude Pro ($20/mo) lub API

## Alternatives considered

| Narzędzie | Vs. Remotion |
|-----------|-------------|
| **Canva / CapCut** | Edytory wizualne z szablonami — szybkie dla jednorazowej edycji, brak programowalności i automatyzacji |
| **After Effects** | Pełna kontrola motion graphics, ale stroma krzywa uczenia i brak AI-assisted workflow |
| **Lottie** | Lekkie animacje web, ale wymaga After Effects do tworzenia |

Remotion wygrywa gdy: wiele wariantów, dane z API, spójny system produkcji wideo.

## 📖 Resources

- [Remotion Docs](https://remotion.dev/docs) — oficjalna dokumentacja
- [Remotion Skills](https://github.com/remotion-dev/skills) — skills dla Claude Code
- [[Claude Code]] — AI coding assistant do generowania komponentów

---
Template: [[templates/tool]]
