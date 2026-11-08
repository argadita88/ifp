'use client';

import React, { useState, useEffect } from 'react';
import {
  Clapperboard,
  Sparkles,
  Film,
  Camera,
  Layers,
  Palette,
  Copy,
  Check,
  RotateCcw,
  ShieldCheck,
  ExternalLink,
  Terminal,
  Sliders,
  FileText
} from 'lucide-react';

const STORYBOARD_STYLES = [
  {
    id: 'comic-book',
    title: 'Comic Book Panel',
    desc: 'Komik edukasi, balon percakapan, garis ink tegas, warna cerah.',
    badge: 'POPULER',
    accent: 'purple',
    promptStyle: 'Comic book panel, vibrant education comic, clean ink lines, speech bubbles, high contrast.'
  },
  {
    id: 'cinematic-film',
    title: 'Cinematic Film Board',
    desc: 'Fotografi sinematik, lighting dramatis, kedalaman bidang, kualitas film.',
    badge: 'CINEMATIC',
    accent: 'blue',
    promptStyle: 'Cinematic film board, dramatic lighting, depth of field, 35mm photograph quality, movie scene composition.'
  },
  {
    id: '3d-cartoon',
    title: '3D Pixar/Disney Style',
    desc: 'Render 3D menggemaskan, karakter ramah, warna lembut berenergi.',
    badge: '3D ANIMASI',
    accent: 'amber',
    promptStyle: '3D Pixar style cartoon render, adorable friendly character, soft ambient lighting, vibrant cheerful colors.'
  },
  {
    id: 'manga-anime',
    title: 'Manga / Anime Sketch',
    desc: 'Sketsa anime Jepang, shading ink, ekspresi emosional dinamis.',
    badge: 'ANIME',
    accent: 'rose',
    promptStyle: 'Japanese manga anime sketch, detailed ink shading, dynamic emotional expressions, manga panel layout.'
  },
  {
    id: 'line-art',
    title: 'Line Art Minimalist',
    desc: 'Sketsa garis vektor bersih, latar belakang simpel, fokus gestur.',
    badge: 'MINIMALIS',
    accent: 'emerald',
    promptStyle: 'Clean minimalist vector line art, simple background, precise character gesture, elegant storytelling.'
  },
  {
    id: 'isometric-3d',
    title: 'Isometric Digital Board',
    desc: 'Sudut pandang 3D isometrik 45 derajat, layout grid rapi, detail lingkungan.',
    badge: 'ISOMETRIK',
    accent: 'cyan',
    promptStyle: 'Isometric 3D perspective 45 degrees, clean grid environment layout, detailed digital illustration.'
  }
];

export default function StoryboardPromptStudio({ showToast }) {
  // Form States
  const [schoolName, setSchoolName] = useState('SMP Negeri 1 Blimbingsari Satu Atap');
  const [topic, setTopic] = useState('Petualangan Berpikir Komputasional & Enkripsi Data');
  const [subject, setSubject] = useState('Informatika');
  const [audience, setAudience] = useState('Siswa SMP (Fase D)');
  const [panelCount, setPanelCount] = useState('6 Panel (Standard Board)');
  const [aspectRatio, setAspectRatio] = useState('16:9 Widescreen (Film / Video)');
  const [cameraAngle, setCameraAngle] = useState('Dinamis (Variasi Wide, Medium & Close-Up)');
  const [selectedStyleId, setSelectedStyleId] = useState(STORYBOARD_STYLES[0].id);
  const [outline, setOutline] = useState(`Panel 1: Tokoh Andi bingung menerima pesan rahasia terenkripsi di kelas.
Panel 2: Guru menjelaskan konsep Caesar Cipher dengan pergeseran abjad.
Panel 3: Andi dan Siti berdiskusi memecahkan kode pergeseran 3 langkah.
Panel 4: Kode berhasil terpecahkan dan pintu rahasia laboratorium terbuka.
Panel 5: Tim merayakan keberhasilan dengan gembira.
Panel 6: Refleksi pentingnya proteksi data pribadi dalam kehidupan digital.`);
  const [notes, setNotes] = useState('Tokoh Andi mengenakan seragam SMP dan kacamata, Siti memegang tablet gawai.');
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  const selectedStyle = STORYBOARD_STYLES.find((s) => s.id === selectedStyleId) || STORYBOARD_STYLES[0];

  // Dynamic Master Prompt Compilation
  const compileMasterPrompt = () => {
    return `# MASTER PROMPT AI STORYBOARD & VISUAL SCENE ARCHITECT
# NAMA SEKOLAH / INSTANSI: ${schoolName.toUpperCase()}
# TOPIK CERITA: ${topic.toUpperCase()} (${subject.toUpperCase()})
# STYLE VISUAL: ${selectedStyle.title.toUpperCase()}

Bertindaklah sebagai **World-Class Director, Storyboard Artist, Visual Concept Designer, dan Instructional Storyteller**. Buatlah storyboard visual yang mendalam, terstruktur, dan sinematik berdasarkan spesifikasi berikut:

## 1. BRIEF STORYBOARD & METADATA
- Nama Sekolah / Instansi: ${schoolName}
- Judul / Topik Cerita: ${topic}
- Mata Pelajaran / Bidang: ${subject}
- Target Audiens / Jenjang: ${audience}
- Format Jumlah Panel: ${panelCount}
- Rasio Frame Canvas: ${aspectRatio}
- Sudut Kamera Utama: ${cameraAngle}
- Gaya Desain Visual: ${selectedStyle.title} (${selectedStyle.desc})
- Spesifikasi Karakter & Catatan Tambahan: ${notes}

## 2. PANDUAN VISUAL & ART DIRECTION (${selectedStyle.title.toUpperCase()})
Terapkan gaya visual ${selectedStyle.title} (${selectedStyle.promptStyle}) secara konsisten di seluruh panel:
1. Pastikan setiap panel memiliki komposisi visual yang jelas (Foreground, Midground, Background).
2. Tentukan pencahayaan (lighting), kontras warna, dan ekspresi karakter pada setiap adegan.
3. Sediakan deskripsi arahan gambar AI Image Generator (Midjourney / DALL-E 3 / Stable Diffusion) dengan parameter aspect ratio ${aspectRatio.includes('16:9') ? '--ar 16:9' : '--ar 4:3'}.

## 3. ALUR ADEGAN & OUTLINE PANEL
${outline}

## 4. FORMAT RINCIAN SETIAP PANEL STORYBOARD
Untuk setiap panel dari ${panelCount}, hasilkan secara terstruktur:
- **PANEL NUMBER & TITLE:** Nama adegan/panel.
- **VISUAL DESCRIPTION:** Deskripsi detail karakter, aksi, lingkungan latar, dan ekspresi.
- **CAMERA SHOT & ANGLE:** Sudut pandang kamera (e.g. Wide Shot, Close-Up, Medium Shot, Dutch Angle).
- **TEXT / DIALOGUE / CAPTION:** Narasi atau dialog percakapan karakter.
- **AI IMAGE GENERATOR PROMPT:** Prompt bahasa Inggris siap pakai untuk Midjourney / DALL-E 3 (termasuk style, lighting, dan aspect ratio).

Silakan susun ${panelCount} storyboard tentang "${topic}" secara lengkap, terstruktur, dan siap diolah menjadi gambar/video!`;
  };

  const masterPromptText = compileMasterPrompt();

  const handleCopyPrompt = () => {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(masterPromptText).then(() => {
      setCopiedPrompt(true);
      showToast && showToast(`📋 Master Prompt Storyboard "${topic}" berhasil disalin!`);
      setTimeout(() => setCopiedPrompt(false), 2500);
    });
  };

  const handleReset = () => {
    setTopic('Petualangan Berpikir Komputasional & Enkripsi Data');
    setSubject('Informatika');
    setAudience('Siswa SMP (Fase D)');
    setPanelCount('6 Panel (Standard Board)');
    setAspectRatio('16:9 Widescreen (Film / Video)');
    setCameraAngle('Dinamis (Variasi Wide, Medium & Close-Up)');
    setSelectedStyleId(STORYBOARD_STYLES[0].id);
    setOutline(`Panel 1: Tokoh Andi bingung menerima pesan rahasia terenkripsi di kelas.
Panel 2: Guru menjelaskan konsep Caesar Cipher dengan pergeseran abjad.
Panel 3: Andi dan Siti berdiskusi memecahkan kode pergeseran 3 langkah.
Panel 4: Kode berhasil terpecahkan dan pintu rahasia laboratorium terbuka.
Panel 5: Tim merayakan keberhasilan dengan gembira.
Panel 6: Refleksi pentingnya proteksi data pribadi dalam kehidupan digital.`);
    setNotes('Tokoh Andi mengenakan seragam SMP dan kacamata, Siti memegang tablet gawai.');
    showToast && showToast('🔄 Konfigurasi Storyboard direset ke bawaan.');
  };

  return (
    <section className="workspace-module active" id="sec-storyboard">
      <div className="module-card">
        {/* Header Row */}
        <div className="module-header-row">
          <div className="mhr-info">
            <div className="module-category-pill pill-ai">
              <span className="cat-dot dot-ai"></span>
              <span>MODUL 05 • AI STORYBOARD SCENE ARCHITECT</span>
            </div>
            <h2 className="module-title">AI Storyboard Prompt Studio</h2>
            <p className="module-subtitle">
              Rancang alur adegan visual, narasi cerita, dan prompt AI Image Generator (Midjourney / DALL-E 3 / Gamma) secara terstruktur untuk pembelajaran interaktif.
            </p>
          </div>

          <div className="mhr-actions">
            <button
              type="button"
              onClick={handleReset}
              className="btn-action-secondary"
              title="Reset ke konfigurasi awal"
            >
              <RotateCcw size={15} />
              <span>Reset Form</span>
            </button>
            <a
              href="/storyboard_prompt_generator.html"
              target="_blank"
              rel="noreferrer"
              className="btn-action-primary btn-ai-gradient"
            >
              <ExternalLink size={16} />
              <span>Buka StoryBoard Prompt Generator (Tab Baru)</span>
            </a>
          </div>
        </div>

        {/* 2-Column AI Workspace Layout */}
        <div className="ai-workspace-layout">
          {/* Left Panel: Form & Parameter Configurator */}
          <div className="ai-left-panel">
            <div className="ai-panel-header">
              <span className="aip-label">PARAMETER &amp; DESAIN STORYBOARD</span>
            </div>

            <div className="lkpd-section-card" style={{ marginBottom: 0 }}>
              <div className="lsc-header">
                <div className="lsc-icon-wrap bg-violet">
                  <Film size={18} />
                </div>
                <div>
                  <h3 className="lsc-title">1. Identitas Cerita &amp; Kamera</h3>
                  <p className="lsc-subtitle">Konfigurasi materi, alur cerita, dan spesifikasi frame adegan.</p>
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: '12px' }}>
                <label className="form-label">Nama Sekolah / Instansi:</label>
                <input
                  type="text"
                  value={schoolName}
                  onChange={(e) => setSchoolName(e.target.value)}
                  className="form-input"
                  placeholder="Contoh: SMP Negeri 1 Jakarta / SD Merdeka..."
                />
              </div>

              <div className="form-group" style={{ marginBottom: '12px' }}>
                <label className="form-label">Judul / Topik Cerita:</label>
                <input
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="form-input"
                  placeholder="Contoh: Petualangan Fotosintesis Tumbuhan"
                />
              </div>

              <div className="lsc-grid-form" style={{ marginBottom: '12px' }}>
                <div className="form-group">
                  <label className="form-label">Mata Pelajaran:</label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="form-input"
                    placeholder="Informatika, IPA, Sejarah, dll."
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Target Audiens:</label>
                  <select
                    value={audience}
                    onChange={(e) => setAudience(e.target.value)}
                    className="form-select"
                  >
                    <option value="Siswa SMP (Fase D)">Siswa SMP (Fase D)</option>
                    <option value="Siswa SD (Fase A-C)">Siswa SD (Fase A-C)</option>
                    <option value="Siswa SMA/K (Fase E-F)">Siswa SMA/K (Fase E-F)</option>
                    <option value="Umum / Anak-Anak">Umum / Anak-Anak</option>
                  </select>
                </div>
              </div>

              <div className="lsc-grid-form" style={{ marginBottom: '12px' }}>
                <div className="form-group">
                  <label className="form-label">Jumlah Panel Adegan:</label>
                  <select
                    value={panelCount}
                    onChange={(e) => setPanelCount(e.target.value)}
                    className="form-select"
                  >
                    <option value="4 Panel (Short Strip)">4 Panel (Singkat)</option>
                    <option value="6 Panel (Standard Board)">6 Panel (Standar)</option>
                    <option value="8 Panel (Detailed Scene)">8 Panel (Detail)</option>
                    <option value="12 Panel (Full Storyboard)">12 Panel (Lengkap)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Rasio Frame Canvas:</label>
                  <select
                    value={aspectRatio}
                    onChange={(e) => setAspectRatio(e.target.value)}
                    className="form-select"
                  >
                    <option value="16:9 Widescreen (Film / Video)">16:9 Widescreen</option>
                    <option value="4:3 Classic Format">4:3 Klasik</option>
                    <option value="1:1 Square Format">1:1 Square</option>
                    <option value="9:16 Vertical Story">9:16 Vertikal</option>
                  </select>
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: '12px' }}>
                <label className="form-label">Sudut Kamera Utama:</label>
                <select
                  value={cameraAngle}
                  onChange={(e) => setCameraAngle(e.target.value)}
                  className="form-select"
                >
                  <option value="Dinamis (Variasi Wide, Medium & Close-Up)">Dinamis (Variasi Angles)</option>
                  <option value="Cinematic Wide Shot (Latar Suasana)">Cinematic Wide Shot</option>
                  <option value="Close-Up Ekspresi Karakter">Close-Up Ekspresi</option>
                  <option value="Bird's Eye View (Tampak Atas)">Bird's Eye View (Tampak Atas)</option>
                </select>
              </div>

              <div className="form-group" style={{ marginBottom: '12px' }}>
                <label className="form-label">Outline Adegan Per Panel:</label>
                <textarea
                  value={outline}
                  onChange={(e) => setOutline(e.target.value)}
                  className="form-textarea"
                  rows={4}
                  placeholder="Tuliskan alur cerita per panel..."
                />
              </div>

              <div className="form-group">
                <label className="form-label">Spesifikasi Karakter &amp; Konteks Tambahan:</label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="form-textarea"
                  rows={2}
                  placeholder="Contoh: Tokoh Andi memakai seragam SMP..."
                />
              </div>
            </div>

            {/* Standar Storyboard Box */}
            <div className="ai-guardrail-card">
              <div className="agc-header">
                <ShieldCheck size={16} className="text-blue" />
                <span className="agc-title">Standar Storyboard Edukasi</span>
              </div>
              <ul className="agc-list">
                <li>100% Komposisi Visual Berimbang</li>
                <li>Lengkap Teks Dialog &amp; Narasi</li>
                <li>AI Image Generator Prompt Siap Pakai</li>
                <li>Art Direction Konsisten Per Panel</li>
              </ul>
            </div>
          </div>

          {/* Right Main Panel: Visual Style Selector & Live Master Prompt */}
          <div className="ai-main-panel">
            {/* Visual Style Selection Grid */}
            <div style={{ marginBottom: '20px' }}>
              <div className="lsc-header" style={{ marginBottom: '12px' }}>
                <div className="lsc-icon-wrap bg-pink">
                  <Palette size={18} />
                </div>
                <div>
                  <h3 className="lsc-title">2. Pilih Gaya Visual Storyboard</h3>
                  <p className="lsc-subtitle">Pilih estetika gambar yang cocok untuk materi cerita pembelajaran Anda.</p>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '10px' }}>
                {STORYBOARD_STYLES.map((style) => {
                  const isSelected = selectedStyleId === style.id;
                  return (
                    <button
                      key={style.id}
                      type="button"
                      className={`vds-style-card ${isSelected ? 'active' : ''}`}
                      onClick={() => {
                        setSelectedStyleId(style.id);
                        showToast && showToast(`🎨 Gaya visual "${style.title}" dipilih.`);
                      }}
                      style={{ padding: '12px' }}
                    >
                      <div className="vds-card-head">
                        <span className="vds-card-title">{style.title}</span>
                        {isSelected && <Check size={14} style={{ color: '#A855F7' }} />}
                      </div>
                      <p className="vds-card-desc">{style.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Master Prompt Output Viewer */}
            <div className="ai-code-viewer-box">
              <div className="acv-toolbar">
                <div className="acv-left">
                  <Terminal size={16} style={{ color: '#A855F7' }} />
                  <span className="acv-chip" style={{ background: 'rgba(168, 85, 247, 0.2)', color: '#C084FC' }}>
                    STYLE: {selectedStyle.title.toUpperCase()}
                  </span>
                  <span className="acv-lang">MASTER PROMPT STORYBOARD AI v1.0</span>
                </div>
                <div className="acv-right">
                  <button
                    type="button"
                    className="acv-copy-btn"
                    onClick={handleCopyPrompt}
                    style={{ background: 'linear-gradient(135deg, #A855F7 0%, #EC4899 100%)' }}
                  >
                    {copiedPrompt ? (
                      <>
                        <Check size={15} />
                        <span>Tersalin ke Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={15} />
                        <span>Salin Master Prompt Storyboard</span>
                      </>
                    )}
                  </button>
                  <a
                    href="/storyboard_prompt_generator.html"
                    target="_blank"
                    rel="noreferrer"
                    className="aif-external-link"
                    style={{ marginLeft: '10px' }}
                  >
                    <span>Buka StoryBoard Prompt Generator</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>

              <div className="acv-body">
                <pre className="acv-pre">
                  <code>{masterPromptText}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
