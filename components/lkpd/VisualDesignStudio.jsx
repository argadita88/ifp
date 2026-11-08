'use client';

import React from 'react';
import { Palette, Image as ImageIcon, Check } from 'lucide-react';

export default function VisualDesignStudio({
  selectedStyle,
  onStyleChange,
  selectedPalette,
  onPaletteChange,
  selectedIllustrations,
  onIllustrationsChange,
  config,
  onChange
}) {
  const currentStyle = selectedStyle || config?.designStyle || 'Modern Minimalist';
  const currentPalette = selectedPalette || config?.colorPalette || 'Blue & White';
  const currentIllustrations = selectedIllustrations || config?.illustrations || [];

  const styles = [
    { id: 'Modern Minimalist', label: 'Modern Minimalist', desc: 'Layout bersih, ruang lega, tipografi presisi, elegan.' },
    { id: 'Colorful Education', label: 'Colorful Education', desc: 'Ceria, dinamis, palet ramah anak, berenergi positif.' },
    { id: 'Cartoon Illustration', label: 'Cartoon Illustration', desc: 'Karakter kartun edukasi, ramah dan menghibur.' },
    { id: '3D Educational', label: '3D Educational', desc: 'Ikonografi 3D lembut, kedalaman visual modern.' },
    { id: 'Comic Book', label: 'Comic Book', desc: 'Format panel komik, balon percakapan, naratif seru.' },
    { id: 'Futuristic Technology', label: 'Futuristic Technology', desc: 'Aksen sci-fi, HUD telemetri, cybernetic clean.' },
    { id: 'Nature & Organic', label: 'Nature & Organic', desc: 'Nuansa alam, dedaunan, palet bumi yang menenangkan.' },
    { id: 'Editorial Workbook', label: 'Editorial Workbook', desc: 'Tata letak majalah terstruktur, tipografi majalah premium.' },
    { id: 'Infographic Style', label: 'Infographic Style', desc: 'Fokus pada diagram data, flowchart, dan poin visual.' },
    { id: 'Gamification Style', label: 'Gamification Style', desc: 'Elemen game, badge pencapaian, bar quest, reward.' },
    { id: 'Hand Drawn Illustration', label: 'Hand Drawn Illustration', desc: 'Sentuhan sketsa tangan artistik dan hangat.' },
    { id: 'Professional Academic', label: 'Professional Academic', desc: 'Format jurnal resmi, tabel baku, cocok untuk karya ilmiah.' },
  ];

  const palettes = [
    { id: 'Blue & White', label: 'Blue & White', colors: ['#2563EB', '#60A5FA', '#FFFFFF'] },
    { id: 'Emerald & Gold', label: 'Emerald & Gold', colors: ['#059669', '#34D399', '#F59E0B'] },
    { id: 'Purple & Pink', label: 'Purple & Pink', colors: ['#7C3AED', '#C084FC', '#EC4899'] },
    { id: 'Orange & Yellow', label: 'Orange & Yellow', colors: ['#EA580C', '#FB923C', '#FBBF24'] },
    { id: 'Pastel', label: 'Soft Pastel', colors: ['#A7F3D0', '#BAE6FD', '#DDD6FE'] },
    { id: 'Dark Mode', label: 'Dark Navy Mode', colors: ['#080D18', '#1E293B', '#38BDF8'] },
    { id: 'AI Auto Select', label: 'AI Auto Harmony', colors: ['#2563EB', '#06B6D4', '#8B5CF6'] },
  ];

  const illustrations = [
    { id: 'Ilustrasi karakter', label: 'Ilustrasi Karakter Siswa/Maskot' },
    { id: 'Gambar objek nyata', label: 'Foto / Gambar Objek Nyata' },
    { id: 'Ilustrasi situasi', label: 'Ilustrasi Situasi Kontekstual' },
    { id: 'Infografis', label: 'Infografis Data Terpadu' },
    { id: 'Diagram', label: 'Diagram / Bagan Alur (Flowchart)' },
    { id: 'Mind map', label: 'Peta Pikiran (Mind Map)' },
    { id: 'Komik edukasi', label: 'Panel Komik Edukasi Singkat' },
    { id: 'Visualisasi proses', label: 'Visualisasi Proses Langkah demi Langkah' },
    { id: 'Before & After', label: 'Perbandingan Before & After' },
    { id: 'Kartu aktivitas', label: 'Bingkai Kartu Aktivitas Sentuh' },
    { id: 'Background tematik', label: 'Background / Watermark Tematik Halus' },
  ];

  const handleStyleChange = (style) => {
    if (typeof onStyleChange === 'function') onStyleChange(style);
    if (config && typeof onChange === 'function') onChange({ designStyle: style });
  };

  const handlePaletteChange = (palette) => {
    if (typeof onPaletteChange === 'function') onPaletteChange(palette);
    if (config && typeof onChange === 'function') onChange({ colorPalette: palette });
  };

  const handleIllustrationToggle = (id) => {
    const updated = currentIllustrations.includes(id)
      ? currentIllustrations.filter((item) => item !== id)
      : [...currentIllustrations, id];

    if (typeof onIllustrationsChange === 'function') onIllustrationsChange(updated);
    if (config && typeof onChange === 'function') onChange({ illustrations: updated });
  };

  return (
    <div className="lkpd-section-card">
      <div className="lsc-header">
        <div className="lsc-icon-wrap bg-amber">
          <Palette size={18} />
        </div>
        <div>
          <h3 className="lsc-title">F &amp; G. Visual Design Studio &amp; Panduan Gambar</h3>
          <p className="lsc-subtitle">Kustomisasi estetika visual, skema warna, dan spesifikasi ilustrasi edukatif.</p>
        </div>
      </div>

      {/* 1. Design Style Cards */}
      <div className="vds-block">
        <label className="vds-label">1. Gaya Desain Visual LKPD:</label>
        <div className="vds-styles-grid">
          {styles.map((st) => {
            const isSelected = currentStyle === st.id;
            return (
              <button
                key={st.id}
                type="button"
                className={`vds-style-card ${isSelected ? 'active' : ''}`}
                onClick={() => handleStyleChange(st.id)}
              >
                <div className="vds-card-head">
                  <span className="vds-card-title">{st.label}</span>
                  {isSelected && <Check size={14} className="text-primary" />}
                </div>
                <p className="vds-card-desc">{st.desc}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Color Palette Selector */}
      <div className="vds-block">
        <label className="vds-label">2. Palet Warna Utama:</label>
        <div className="vds-palettes-grid">
          {palettes.map((pal) => {
            const isSelected = currentPalette === pal.id;
            return (
              <button
                key={pal.id}
                type="button"
                className={`vds-palette-pill ${isSelected ? 'active' : ''}`}
                onClick={() => handlePaletteChange(pal.id)}
              >
                <div className="palette-dots">
                  {pal.colors.map((c, i) => (
                    <span key={i} className="pdot" style={{ backgroundColor: c }} />
                  ))}
                </div>
                <span className="palette-name">{pal.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Illustration & Visual Options */}
      <div className="vds-block">
        <label className="vds-label flex items-center gap-1">
          <ImageIcon size={15} /> 3. Pilihan Gambar &amp; Ilustrasi yang Diminta ke AI:
        </label>
        <div className="illustrations-grid">
          {illustrations.map((item) => {
            const isSelected = currentIllustrations.includes(item.id);
            return (
              <button
                key={item.id}
                type="button"
                className={`illus-chip-btn ${isSelected ? 'active' : ''}`}
                onClick={() => handleIllustrationToggle(item.id)}
              >
                <div className={`custom-check-box ${isSelected ? 'checked' : ''}`}>
                  {isSelected && <Check size={11} strokeWidth={3} />}
                </div>
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
        <p className="vds-hint">
          💡 Master Prompt akan menginstruksikan AI untuk menyertakan deskripsi visual spesifik dan teks prompt AI Image Generator untuk setiap gambar terpilih.
        </p>
      </div>
    </div>
  );
}
