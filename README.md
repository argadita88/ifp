# Gim Interaktif Informatika SMP — Media Pembelajaran Interaktif Layar Sentuh IFP

Platform Pembelajaran Terpadu berbasis **Next.js & React** yang dirancang khusus untuk layar sentuh besar **Interactive Flat Panel (IFP) 4K** di kelas SMP (Kurikulum Merdeka).

---

## 🌟 Fitur Utama Platform

1. **Slide Presentasi Pedagogis (12 Slide)**
   - Display visual 4K ultra-crisp berbasis SVG.
   - Kontrol navigasi slide, tombol perbesar fullscreen, dan karosel 12 thumbnail.
   - Dukungan gesture swipe layar sentuh.

2. **Demonstrasi Live Game Multi-Touch IFP**
   - **Game 1: Zombie Defense Quiz IFP** (Cooperative Tower Defense 2–4 Tim).
   - **Game 2: Cosmic Defender** (Space Shooter Fleet Defense 2–4 Tim).
   - Single-file HTML mandiri tanpa dependency & 100% offline ready.

3. **AI Master Prompt Generator v3 & Bank Prompt**
   - Interactive Generator v3 untuk merakit prompt kustom secara cepat.
   - Bank 3 Tingkat Prompt (Advance Master Prompt, Spesifikasi Sedang, Ringkas).
   - 1-Click Copy ke clipboard.

4. **UI/UX Elegan & Parallax System**
   - Tema cerah biru muda mewah (`Plus Jakarta Sans`, `Outfit`, `JetBrains Mono`).
   - Parallax background interaktif dengan orb ambient & floating tech badges.
   - Mobile Bottom Navigation Bar (Native Android Touch Feel).

---

## 🚀 Cara Menjalankan (Development & Production)

### 1. Jalankan Mode Development (Next.js)
```bash
npm install
npm run dev
```
Buka `http://localhost:3000` pada browser Anda.

### 2. Build Production
```bash
npm run build
npm start
```
---

## 📁 Struktur Proyek

```text
media/
├── app/
│   ├── globals.css         # Styling CSS & Parallax Layer System
│   ├── layout.js          # Root Layout & Metadata
│   └── page.js            # Home Page Container (React App)
├── components/
│   ├── Header.jsx         # Sticky Top Navigation Header
│   ├── Hero.jsx           # Hero Banner & 3 Pillars Highlights
│   ├── TabNavigation.jsx  # Main 3 Portal Nav Tabs
│   ├── PptViewer.jsx      # 12 Slide Presentation Stage & Carousel
│   ├── GameDemo.jsx       # Live Game IFP Stage & Selector
│   ├── PromptGenerator.jsx# Master Prompt Engine & Code Boxes
│   ├── ParallaxBackground.jsx # Dynamic Ambient Parallax System
│   ├── MobileBottomNav.jsx# Android Bottom Nav Bar
│   ├── Toast.jsx          # Notification Toast Alert
│   └── Footer.jsx         # Professional Site Footer
├── data/
│   └── portalData.js      # Slide Data (12 Slides), Games, & Prompts
├── public/
│   ├── slides/            # 12 Crisp SVG Slide Graphics
│   ├── game_single_file.html
│   ├── space_shooter_single_file.html
│   └── master_prompt_generator.html
├── package.json
└── next.config.js
```
