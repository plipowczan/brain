---
title: "Apple-style Animations with AI"
date: 2026-01-26
enableToc: true
openToc: true
tags: ["knowledge", "howto", "ai", "animations", "web-design", "vibe-coding"]
type: knowledge-note
agent-created: true
summary: "Creating scroll animations à la Apple using Google Whisk → Flow → Framer Motion pipeline"
---

# Apple-style Animations with AI

## 🗒️ Task

Tworzenie scroll-animacji w stylu stron produktowych Apple — bez umiejętności motion design, After Effects czy zaawansowanego JavaScriptu. Cały pipeline oparty na AI tools.

Tradycyjne podejście wymaga: After Effects → Lottie export → JS integration → performance optimization → scroll sync. Każdy krok ma swoją krzywą uczenia się.

AI pipeline redukuje to do: research → generowanie klatek → AI transition → konwersja → integracja z kodem.

## 🛠️ Prerequisites

| Narzędzie | Rola |
|-----------|------|
| [Google Whisk](https://labs.google/fx/tools/whisk) | Generowanie obrazów AI z referencjami stylu |
| [Google Flow](https://labs.google/fx/tools/flow) | Płynne przejścia między klatkami (opcjonalnie) |
| [Online Convert](https://image.online-convert.com/convert/mp4-to-jpg) | Konwersja MP4 → sekwencja JPG |
| [[Cursor]] | AI IDE do budowania komponentów |
| [Netlify](https://netlify.com) | Hosting static sites |
| [Framer Motion](https://motion.dev) | Biblioteka animacji React |

## 📝 Pipeline

### Krok 1: Research

Przejrzyj strony produktowe topowych brandów. Zwróć uwagę na:
- Paleta kolorów i kontrast
- Struktura sekcji i pozycjonowanie tekstu
- Jak animacje reagują na scroll
- Timing i pacing przejść

Zapisuj screenshoty jako reference. **AI daje generyczne wyniki bez konkretnych inspiracji. Z referencjami — coś unikalnego.**

### Krok 2: Generowanie klatek (Google Whisk)

Prompt powinien zawierać:
- Konkretne kolory (hex codes, np. `#0a0e1a`, `#00ff9d`)
- Styl (futuristic, professional, glassmorphism)
- Negatywne instrukcje (no text, no letters)
- Kompozycja i nastrój

Przykładowy prompt:
```text
Abstract neural network visualization for AI consulting,
dark gradient #0a0e1a to #151b2b,
interconnected nodes in bright green #00ff9d,
synaptic connections in cyan #00b8ff,
floating hexagonal elements with glassmorphism,
futuristic professional aesthetic, no text
```

**Opcja A:** Dwie klatki (start + end) → Google Flow do przejścia. Większa kontrola, filmowy efekt.
**Opcja B:** Jeden obraz → Whisk generuje wideo bezpośrednio. Szybszy rezultat, mniej kontroli.

### Krok 3: Tworzenie przejścia (Google Flow) — opcjonalnie

Upload dwóch obrazów + opis przejścia → AI generuje płynne wideo. Nie trzeba animować każdego elementu.

### Krok 4: Konwersja wideo → sekwencja obrazów

**Kluczowy insight:** Scroll-animacje nie pracują z wideo — pracują z sekwencjami obrazów wyświetlanymi w reakcji na pozycję scrolla.

1. Upload wideo do Online Convert
2. Wybierz 24-60 fps
3. Pobierz archiwum z JPEG frames

**Balans:** 30-45 frames w formacie WebP = dobra płynność + rozsądny rozmiar strony.

### Krok 5: Integracja w Cursor

Dodaj frames do `public/frames/` i użyj promptu:

```text
Create a scroll-triggered animation component using Framer Motion.
Load image sequence from /frames/ folder (frame-001.webp to frame-060.webp).
Animation should play forward on scroll down, reverse on scroll up.
Use useScroll and useTransform hooks for smooth interpolation.
```

## ⚙️ .cursorrules Config

Jednorazowa konfiguracja, permanentne korzyści:

```text
1. Always use semantic HTML5 elements for accessibility and SEO
2. Maintain consistent spacing using 8px grid system
3. All animations should respect prefers-reduced-motion for accessibility
4. Use CSS variables for colors to enable easy theme switching
5. Use Framer Motion for scroll-triggered animations
6. Image sequence should be loaded progressively for performance
```

## 🧩 Technical Stack

- **Framer Motion** — useScroll + useTransform hooks do synchronizacji klatek ze scroll position
- **Progressive image loading** — lazy loading dla frames poza viewport
- **WebP format** — 70-80% mniejszy rozmiar niż JPEG
- **prefers-reduced-motion** — accessibility standard, nie opcja
- React + Tailwind CSS jako baza

## 🚀 Deployment

1. `npm run build` → folder `dist` z produkcyjnym buildem
2. Netlify: drag & drop folderu `dist` lub połączenie z GitHub repo
3. Custom domain przez Netlify DNS

### Cursor vs ręczne kodowanie

| Kryterium | Cursor + AI | Ręcznie |
|-----------|------------|---------|
| Poziom | Początkujący/Średni | Zaawansowany |
| Czas | 30-60 minut | Kilka godzin |
| Kontrola | Wysoka (kod jest Twój) | Pełna |
| Najlepsze dla | Landing pages, prototypy | Złożone aplikacje |

## 📒 Podsumowanie

- **Research przed promptowaniem** — bez referencji AI daje generyczne wyniki
- **Sekwencja obrazów > wideo** — tak działają scroll-animacje w praktyce
- **.cursorrules to game changer** — jednorazowe ustawienie, spójne wyniki
- **Accessibility matters** — `prefers-reduced-motion` to standard
- **[[Vibe Coding]]** to metodyczne przygotowanie + AI execution

## 🔗 Zasoby

- [Google Whisk](https://labs.google/fx/tools/whisk) — generowanie obrazów AI
- [Google Flow](https://labs.google/fx/tools/flow) — tworzenie przejść
- [Framer Motion](https://motion.dev) — biblioteka animacji React
- [Online Convert](https://image.online-convert.com/convert/mp4-to-jpg) — MP4 → JPG
- [[Cursor]] — AI-powered IDE
- [[Vibe Coding]] — podejście do tworzenia UI z AI

---
Template: [[templates/knowledge_note_how_to]]
