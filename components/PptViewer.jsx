'use client';

import React, { useState, useRef, useEffect } from 'react';
import { PPTX_SLIDES } from '../data/portalData';
import {
  Download,
  Maximize2,
  Minimize2,
  ChevronLeft,
  ChevronRight,
  Presentation,
  CheckCircle2,
  Lightbulb,
  Keyboard,
  Sparkles,
  ExternalLink,
  Terminal,
  Copy,
  Check,
  Palette,
  Sliders
} from 'lucide-react';

const PPT_THEMES = [
  {
    id: 'corporate-minimalist',
    title: 'Modern Corporate Minimalist',
    category: 'EKSKLUSIF & PROFESSIONAL',
    badge: 'SANGAT POPULER',
    image: '/slides/slide-01.svg',
    desc: 'Desain bersih dengan rasio 16:9, kontras tinggi, tipografi presisi, dan alur sajian eksekutif.',
    palette: ['#0F172A', '#2563EB', '#FFFFFF'],
    features: [
      'Clean 16:9 Grid Layout dengan Ruang Lega',
      'High-Contrast Typography (Sans-Serif Presisi)',
      'Diagram Arsitektur & Peta Konsep Elegan'
    ],
    promptFlavor: 'Minimalist corporate layout with spacious grid, bold headings, 6x6 bullet rule, and VBA macro generator.'
  },
  {
    id: 'creative-educational',
    title: 'Creative Educational (Kurikulum Merdeka)',
    category: 'INTERAKTIF & CERIA',
    badge: 'REKOMENDASI GURU',
    image: '/slides/slide-03.svg',
    desc: 'Palet warna energetik, kartu aktivitas siswa interaktif, serta elemen visual ramah peserta didik.',
    palette: ['#06B6D4', '#10B981', '#F59E0B'],
    features: [
      'Kompatibel Kurikulum Merdeka & Profil Pelajar Pancasila',
      'Kartu Aktivitas Siswa & Diskusi Kelompok',
      'Ikon Edukatif Vektor Berenergi Positif'
    ],
    promptFlavor: 'Vibrant educational theme with gamified badges, active learning prompt cards, and Gamma.app markdown format.'
  },
  {
    id: 'futuristic-cyber',
    title: 'Futuristic Cyber & Tech (Informatika)',
    category: 'HIGH-TECH & CYBERNETICS',
    badge: 'STEALTH NAVY',
    image: '/slides/slide-05.svg',
    desc: 'Tema dark mode futuristik dengan aksen neon cyan, HUD telemetri, dan diagram sistem cybernetic.',
    palette: ['#080D1A', '#38BDF8', '#A855F7'],
    features: [
      'Tampilan Dark Mode Navy + Neon Glow',
      'Aksen Terminal Code Snippet & HUD Telemetri',
      'Ikonografi Cybernetic & Arsitektur Data'
    ],
    promptFlavor: 'Futuristic cybertech aesthetic, dark mode navy, neon glowing highlights, and AI visual image prompts.'
  },
  {
    id: 'soft-pastel-organic',
    title: 'Soft Pastel Organic (Humanis)',
    category: 'ESTETIS & WARM',
    badge: 'HUMANIS',
    image: '/slides/slide-04.svg',
    desc: 'Nuansa warna pastel menenangkan, bentuk geometris organis yang lembut, dan narasi terstruktur.',
    palette: ['#A7F3D0', '#BAE6FD', '#DDD6FE'],
    features: [
      'Bentuk Geometris Halus & Organik',
      'Palet Warna Muted Pastel Menenangkan',
      'Alur Narasi Visual Storytelling Bermakna'
    ],
    promptFlavor: 'Soft pastel tones, organic card shapes, friendly typography, and gentle storytelling flow.'
  },
  {
    id: 'infographic-analytics',
    title: 'Infographic & Visual Analytics',
    category: 'DATA & DASHBOARD',
    badge: 'DATA DRIVEN',
    image: '/slides/slide-07.svg',
    desc: 'Fokus pada penyajian data, grafik statistik, perbandingan tabel side-by-side, dan KPI visual.',
    palette: ['#1E293B', '#10B981', '#F97316'],
    features: [
      'Bagan Data & Visual KPI Callout Boxes',
      'Tabel Perbandingan Side-by-Side Rapi',
      'Metrik Kuat dengan Ikon Statistik'
    ],
    promptFlavor: 'Data-driven infographic layout, clear metric cards, comparison matrices, and clean charts.'
  },
  {
    id: 'editorial-workbook',
    title: 'Editorial Workbook & Magazine Style',
    category: 'MAJALAH & PUBLIKASI',
    badge: 'PREMIUM EDITORIAL',
    image: '/slides/slide-06.svg',
    desc: 'Gaya majalah publikasi profesional dengan kutipan bold, tata letak editorial, dan tipografi berkelas.',
    palette: ['#18181B', '#E11D48', '#FAFAFA'],
    features: [
      'Tipografi Headings Berkelas Editorial',
      'Kutipan Kunci Bold & Quote Callout Box',
      'Layout Jurnal Ilmiah / Majalah Premium'
    ],
    promptFlavor: 'Magazine editorial workbook style, elegant serif headers, bold quote callouts, and structured article blocks.'
  }
];

export default function PptViewer({ showToast }) {
  const [activeTab, setActiveTab] = useState('viewer'); // 'viewer' | 'generator'
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Parameter Form States
  const [schoolName, setSchoolName] = useState('SMP Negeri 1 Jakarta');
  const [pptSubject, setPptSubject] = useState('Gim Interaktif Informatika SMP - Kerangka MDA');
  const [pptAudience, setPptAudience] = useState('Siswa SMP (Fase D) - Kurikulum Merdeka');
  const [slideCount, setSlideCount] = useState('12 Slide Terstruktur');
  const [outputFormat, setOutputFormat] = useState('VBA Macro Script (Otomatis Buat Slide di MS PowerPoint)');
  const [outline, setOutline] = useState(`1. Pengenalan Elemen Gamedev (Mechanics, Dynamics, Aesthetics).
2. Teori Motivasi SDT (Autonomy, Competence, Relatedness).
3. Implementasi Interaksi Sentuh pada Layar IFP 4K.`);

  // Selected PPT Theme State
  const [selectedThemeId, setSelectedThemeId] = useState(PPT_THEMES[0].id);
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  const selectedTheme = PPT_THEMES.find((t) => t.id === selectedThemeId) || PPT_THEMES[0];
  const slide = PPTX_SLIDES[currentIdx] || PPTX_SLIDES[0];
  const totalSlides = PPTX_SLIDES.length;
  const stageRef = useRef(null);

  const handleNav = (dir) => {
    setCurrentIdx((prev) => {
      const next = prev + dir;
      if (next < 0) return 0;
      if (next >= totalSlides) return totalSlides - 1;
      return next;
    });
  };

  const toggleFullscreen = () => {
    const elem = stageRef.current;
    if (!elem) return;

    if (!documentfullscreenElement) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
      }
      setIsFullscreen(true);
      showToast('🖥️ Mode Presentasi Layar Penuh Diaktifkan!');
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Keyboard Navigation Arrow Left / Right
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeTab !== 'viewer') return;
      if (e.key === 'ArrowLeft') handleNav(-1);
      if (e.key === 'ArrowRight') handleNav(1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [totalSlides, activeTab]);

  // Compile Master Prompt PPT dynamically incorporating both Parameters & Theme
  const generatePptPromptText = (theme) => {
    return `# MASTER PROMPT GAMMA.APP & POWERPOINT — PRESENTATION DESIGNER
# NAMA SEKOLAH / INSTANSI: ${schoolName.toUpperCase()}
# MATERI: ${pptSubject.toUpperCase()}
# ART DIRECTION: ${theme.title.toUpperCase()} (${theme.category})

Bertindaklah sebagai **instructional designer, subject-matter educator, visual storyteller, dan presentation art director kelas dunia**. Buat presentasi pembelajaran yang benar-benar disesuaikan dengan materi "${pptSubject}" di ${schoolName}, bukan sekadar mengganti judul pada template generik.

## 1. BRIEF PRESENTASI
- Nama Sekolah / Instansi: ${schoolName}
- Topik/judul materi: ${pptSubject}
- Target audiens: ${pptAudience}
- Jumlah slide: ${slideCount}
- Format luaran diharapkan: ${outputFormat}
- Gaya desain terpilih: ${theme.title} — ${theme.desc}
- Palet warna utama: ${theme.palette.join(' · ')}

## 2. FITUR WAJIB ART DIRECTION INI
${theme.features.map((f, i) => `${i + 1}. ${f}`).join('\n')}

## 3. ATURAN UTAMA: DESAIN HARUS MENGIKUTI MATERI "${pptSubject.toUpperCase()}"
Lakukan interpretasi topik terlebih dahulu sebelum mendesain. Tentukan:
1. Konsep inti dan istilah kunci dari "${pptSubject}";
2. Alur belajar dari pengetahuan awal menuju pemahaman dan penerapan;
3. Jenis visual paling tepat untuk setiap konsep (foto, ilustrasi, diagram proses, timeline, peta konsep, tabel perbandingan, grafik, atau infografis);
4. Metafora visual yang relevan dan tidak menyesatkan;
5. Contoh kontekstual yang dekat dengan kehidupan ${pptAudience.toLowerCase()}.

## 4. OUTLINE & CAPAIAN PEMBELAJARAN (CP)
${outline}

## 5. SPESIFIKASI OUTPUT GAMMA.APP / POWERPOINT
Buat langsung sebagai presentasi widescreen 16:9 yang siap di-import ke Gamma.app atau Microsoft PowerPoint.
${outputFormat.includes('VBA') ? '- Sediakan kode VBA Macro yang siap di-copy-paste ke Microsoft PowerPoint untuk membuat slide dan mengatur tata letak teks secara otomatis!' : ''}
${outputFormat.includes('Gamma') ? '- Format teks dalam pola Markdown Marp / Gamma.app agar dapat di-import langsung menjadi slide cantik!' : ''}

**Hasil akhir yang diinginkan:** presentasi ${slideCount} tentang "${pptSubject}", menarik secara visual sesuai tema "${theme.title}", mudah dipahami ${pptAudience.toLowerCase()}, dan siap digunakan untuk mengajar atau presentasi.`;
  };

  const compiledPrompt = generatePptPromptText(selectedTheme);

  const copyPptPrompt = () => {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(compiledPrompt).then(() => {
      setCopiedPrompt(true);
      showToast(`📋 Master Prompt "${pptSubject}" (${selectedTheme.title}) berhasil disalin!`);
      setTimeout(() => setCopiedPrompt(false), 2500);
    });
  };

  return (
    <section className="workspace-module active" id="sec-ppt">
      <div className="module-card">
        {/* Module Header Bar */}
        <div className="module-header-row">
          <div className="mhr-info">
            <div className="module-category-pill">
              <span className="cat-dot"></span>
              <span>MODUL 01 • KURIKULUM MERDEKA FASE D</span>
            </div>
            <h2 className="module-title">
              {activeTab === 'viewer' ? 'Slide Materi: Gim Interaktif Informatika SMP' : 'AI PowerPoint Prompt Generator Studio v2.0'}
            </h2>
            <p className="module-subtitle">
              {activeTab === 'viewer'
                ? '12 Slide terstruktur berbasis kerangka MDA, teori motivasi belajar SDT, serta implementasi interaksi sentuh pada IFP 4K.'
                : 'Isikan parameter materi Anda dan pilih desain visual PowerPoint yang paling elegan untuk menghasilkan Master Prompt AI presisi tinggi.'}
            </p>
          </div>

          <div className="mhr-actions">
            {/* View Mode Toggle Buttons */}
            <button
              type="button"
              className={`btn-action-outline ${activeTab === 'viewer' ? 'active' : ''}`}
              onClick={() => setActiveTab('viewer')}
            >
              <Presentation size={16} />
              <span>Slide Material Viewer</span>
            </button>

            <button
              type="button"
              className={`btn-action-primary btn-ai-gradient ${activeTab === 'generator' ? 'active' : ''}`}
              onClick={() => setActiveTab('generator')}
            >
              <Palette size={16} />
              <span>AI PPT Prompt Studio</span>
            </button>

            <a
              href="/ppt_prompt_generator.html"
              target="_blank"
              rel="noreferrer"
              className="btn-action-outline"
              title="Buka Generator PPT Mandiri di Tab Baru"
            >
              <ExternalLink size={16} />
              <span>PPT Prompt Generator</span>
            </a>
          </div>
        </div>

        {/* MODE 1: Slide Material Presentation Viewer */}
        {activeTab === 'viewer' && (
          <>
            {/* 16:9 Presentation Stage Box */}
            <div className="presentation-workspace-box" ref={stageRef}>
              {/* Top Cinema Stage Meta Bar */}
              <div className="stage-top-meta">
                <div className="stm-left">
                  <span className="stm-badge">{slide.category}</span>
                  <span className="stm-subtitle">{slide.subtitle}</span>
                </div>
                <div className="stm-right">
                  <span className="stm-counter">
                    SLIDE {currentIdx + 1 < 10 ? `0${currentIdx + 1}` : currentIdx + 1} / {totalSlides < 10 ? `0${totalSlides}` : totalSlides}
                  </span>
                </div>
              </div>

              {/* Slide Visual Screen Viewport */}
              <div className="stage-viewport">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="stage-slide-image"
                  onClick={toggleFullscreen}
                  title="Klik gambar untuk beralih layar penuh"
                />
              </div>

              {/* Minimalist Presentation Control Dock */}
              <div className="stage-control-dock">
                <div className="dock-left-actions">
                  <button
                    type="button"
                    className="dock-nav-btn"
                    disabled={currentIdx === 0}
                    onClick={() => handleNav(-1)}
                    title="Slide Sebelumnya (Arrow Left)"
                  >
                    <ChevronLeft size={18} />
                    <span>Sebelumnya</span>
                  </button>

                  <button
                    type="button"
                    className="dock-nav-btn"
                    disabled={currentIdx === totalSlides - 1}
                    onClick={() => handleNav(1)}
                    title="Slide Selanjutnya (Arrow Right)"
                  >
                    <span>Selanjutnya</span>
                    <ChevronRight size={18} />
                  </button>

                  <div className="dock-keyboard-hint">
                    <Keyboard size={14} />
                    <span>Navigasi Tombol [◀] [▶]</span>
                  </div>
                </div>

                <div className="dock-center-progress">
                  <div className="dock-progress-track">
                    <div
                      className="dock-progress-fill"
                      style={{ width: `${((currentIdx + 1) / totalSlides) * 100}%` }}
                    ></div>
                  </div>
                  <span className="dock-progress-text">
                    {Math.round(((currentIdx + 1) / totalSlides) * 100)}%
                  </span>
                </div>

                <div className="dock-right-actions">
                  <button
                    type="button"
                    className="dock-fullscreen-btn"
                    onClick={toggleFullscreen}
                    title="Layar Penuh IFP"
                  >
                    {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
                    <span>{isFullscreen ? 'Keluar Fullscreen' : 'Layar Penuh IFP'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Pedagogical Synopsis Panel */}
            {slide.desc && (
              <div className="pedagogical-synopsis-panel">
                <div className="synopsis-header">
                  <div className="synopsis-icon-badge">
                    <Lightbulb size={18} />
                  </div>
                  <div>
                    <h3 className="synopsis-title">Fokus Pedagogi Slide Ini</h3>
                    <p className="synopsis-category">{slide.title}</p>
                  </div>
                </div>
                <p className="synopsis-body">{slide.desc}</p>
                {slide.bullets && slide.bullets.length > 0 && (
                  <div className="synopsis-bullets-grid">
                    {slide.bullets.map((b, bIdx) => (
                      <div key={bIdx} className="synopsis-bullet-card">
                        <CheckCircle2 size={16} className="bullet-check" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Filmstrip Thumbnail Gallery */}
            <div className="filmstrip-container">
              <div className="filmstrip-header">
                <span className="filmstrip-title">NAVIGASI 12 SLIDE LENGKAP:</span>
                <span className="filmstrip-hint">Pilih thumbnail untuk melompat langsung</span>
              </div>
              <div className="filmstrip-scroll">
                {PPTX_SLIDES.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`filmstrip-card ${idx === currentIdx ? 'active' : ''}`}
                    onClick={() => setCurrentIdx(idx)}
                  >
                    <div className="filmstrip-img-wrapper">
                      <img src={item.image} alt={item.title} className="filmstrip-thumb" loading="lazy" />
                      <span className="filmstrip-slide-idx">{idx + 1}</span>
                    </div>
                    <div className="filmstrip-meta">
                      <span className="filmstrip-num">SLIDE {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</span>
                      <span className="filmstrip-name">{item.title.replace(/^SLIDE \d+:\s*/, '')}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </>
        )}

        {/* MODE 2: AI PowerPoint Presentation Studio (Integrated Form + Visual Themes + Live Master Prompt) */}
        {activeTab === 'generator' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* 1. Integrated Parameter & Topic Input Card */}
            <div className="lkpd-section-card" style={{ marginBottom: 0 }}>
              <div className="lsc-header">
                <div className="lsc-icon-wrap bg-amber">
                  <Sliders size={18} />
                </div>
                <div>
                  <h3 className="lsc-title">1. Parameter &amp; Materi Presentasi PowerPoint</h3>
                  <p className="lsc-subtitle">Isikan materi, topik, dan sasaran peserta didik agar AI dapat meracik isi slide yang presisi.</p>
                </div>
              </div>

              <div className="lsc-grid-form">
                <div className="form-group col-span-2">
                  <label className="form-label">
                    <span>Nama Sekolah / Instansi</span>
                    <span className="text-required">*</span>
                  </label>
                  <input
                    type="text"
                    value={schoolName}
                    onChange={(e) => setSchoolName(e.target.value)}
                    className="form-input"
                    placeholder="Contoh: SMP Negeri 1 Jakarta / SD Merdeka..."
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <span>Judul / Topik Presentasi Materi</span>
                    <span className="text-required">*</span>
                  </label>
                  <input
                    type="text"
                    value={pptSubject}
                    onChange={(e) => setPptSubject(e.target.value)}
                    className="form-input"
                    placeholder="Contoh: Ekosistem & Rantai Makanan"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Target Audiens / Jenjang:</label>
                  <select
                    value={pptAudience}
                    onChange={(e) => setPptAudience(e.target.value)}
                    className="form-select"
                  >
                    <option value="Siswa SMP (Fase D) - Kurikulum Merdeka">Siswa SMP (Fase D)</option>
                    <option value="Siswa SD (Fase A-C)">Siswa SD (Fase A-C)</option>
                    <option value="Siswa SMA/K (Fase E-F)">Siswa SMA/K (Fase E-F)</option>
                    <option value="Guru / Pendidik / Umum">Guru / Pendidik / Umum</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Target Jumlah Slide:</label>
                  <select
                    value={slideCount}
                    onChange={(e) => setSlideCount(e.target.value)}
                    className="form-select"
                  >
                    <option value="12 Slide Terstruktur">12 Slide (Standar 2-3 JP)</option>
                    <option value="5 Slide Ringkas">5 Slide (Ringkas / Pitch)</option>
                    <option value="10 Slide Komprehensif">10 Slide (Standar)</option>
                    <option value="15 Slide Lengkap">15 Slide (Lengkap)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Format Output AI:</label>
                  <select
                    value={outputFormat}
                    onChange={(e) => setOutputFormat(e.target.value)}
                    className="form-select"
                  >
                    <option value="VBA Macro Script (Otomatis Buat Slide di MS PowerPoint)">VBA Script MS PowerPoint</option>
                    <option value="Gamma.app / Marp Markdown Slide">Gamma.app / Marp Markdown</option>
                    <option value="Deskripsi Slide + Visual Prompt Midjourney">Deskripsi Slide &amp; Visual Prompt</option>
                  </select>
                </div>

                <div className="form-group col-span-2">
                  <label className="form-label">Poin Utama / Outline Materi:</label>
                  <textarea
                    value={outline}
                    onChange={(e) => setOutline(e.target.value)}
                    className="form-textarea"
                    rows={3}
                    placeholder="Tuliskan poin utama presentasi..."
                  />
                </div>
              </div>
            </div>

            {/* 2. Visual Theme Gallery inside Container */}
            <div>
              <div className="lsc-header" style={{ marginBottom: '16px' }}>
                <div className="lsc-icon-wrap bg-cyan">
                  <Palette size={18} />
                </div>
                <div>
                  <h3 className="lsc-title">2. Pilihan Tampilan &amp; Desain Visual PowerPoint</h3>
                  <p className="lsc-subtitle">Pilih gaya estetika slide dengan preview gambar yang paling sesuai dengan kebutuhan kelas Anda.</p>
                </div>
              </div>

              <div className="ppt-themes-grid">
                {PPT_THEMES.map((theme) => {
                  const isSelected = selectedThemeId === theme.id;
                  return (
                    <div
                      key={theme.id}
                      className={`ppt-theme-card ${isSelected ? 'active' : ''}`}
                      onClick={() => {
                        setSelectedThemeId(theme.id);
                        showToast && showToast(`🎨 Tema "${theme.title}" dipilih.`);
                      }}
                    >
                      {/* Visual Slide Preview Image */}
                      <div className="ptc-image-wrap">
                        <img
                          src={theme.image}
                          alt={theme.title}
                          className="ptc-preview-img"
                        />
                        <span className="ptc-badge">{theme.badge}</span>
                        {isSelected && (
                          <div className="ptc-active-check">
                            <Check size={16} strokeWidth={3} />
                          </div>
                        )}
                      </div>

                      {/* Card Content Details */}
                      <div className="ptc-content">
                        <div className="ptc-title-row">
                          <h3 className="ptc-title">{theme.title}</h3>
                        </div>
                        <p className="ptc-desc">{theme.desc}</p>

                        {/* Color Palette Swatches */}
                        <div className="ptc-palette-row">
                          <span className="ptc-palette-label">PALET WARNA:</span>
                          <div className="ptc-palette-dots">
                            {theme.palette.map((c, i) => (
                              <span key={i} className="pdot" style={{ backgroundColor: c }} />
                            ))}
                          </div>
                        </div>

                        {/* Feature Bullet Points */}
                        <ul className="ptc-features-list">
                          {theme.features.map((feat, fIdx) => (
                            <li key={fIdx}>{feat}</li>
                          ))}
                        </ul>

                        {/* Selection Action Button */}
                        <button
                          type="button"
                          className={`ptc-btn-select ${isSelected ? 'active' : ''}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedThemeId(theme.id);
                            showToast && showToast(`🎨 Tema "${theme.title}" dipilih.`);
                          }}
                        >
                          {isSelected ? (
                            <>
                              <Check size={15} />
                              <span>Tema Terpilih</span>
                            </>
                          ) : (
                            <>
                              <Palette size={15} />
                              <span>Pilih Tema Ini</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 3. Compiled Live Master Prompt Output inside Container */}
            <div className="ai-code-viewer-box">
              <div className="acv-toolbar">
                <div className="acv-left">
                  <Terminal size={16} style={{ color: '#F59E0B' }} />
                  <span className="acv-chip" style={{ background: 'rgba(245, 158, 11, 0.2)', color: '#F59E0B' }}>
                    MATERI: {pptSubject.toUpperCase()}
                  </span>
                  <span className="acv-lang">MASTER PROMPT POWERPOINT AI v2.0</span>
                </div>
                <div className="acv-right">
                  <button
                    type="button"
                    className="acv-copy-btn"
                    onClick={copyPptPrompt}
                    style={{ background: 'linear-gradient(135deg, #D97706 0%, #EA580C 100%)' }}
                  >
                    {copiedPrompt ? (
                      <>
                        <Check size={15} />
                        <span>Tersalin ke Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={15} />
                        <span>Salin Master Prompt PPT</span>
                      </>
                    )}
                  </button>
                  <a
                    href="/ppt_prompt_generator.html"
                    target="_blank"
                    rel="noreferrer"
                    className="aif-external-link"
                    style={{ marginLeft: '10px' }}
                  >
                    <span>Buka PPT PROMPT GENERATOR</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>

              <div className="acv-body">
                <pre className="acv-pre">
                  <code>{compiledPrompt}</code>
                </pre>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
