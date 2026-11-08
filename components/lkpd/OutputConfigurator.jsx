'use client';

import React from 'react';
import {
  FileSpreadsheet,
  FileType,
  FileCode,
  FileText,
  Layout,
  CheckCircle2,
  Printer,
  Sparkles,
  Check
} from 'lucide-react';

const OUTPUT_FORMATS = [
  {
    id: 'PDF siap cetak',
    title: 'PDF Siap Cetak & Distribusi',
    desc: 'Format dokumen final berstandar percetakan dengan pembagian halaman presisi.',
    icon: FileText,
    badge: 'Paling Populer'
  },
  {
    id: 'Microsoft Word / Google Docs (DOCX editable)',
    title: 'Word / Google Docs (Editable)',
    desc: 'Memudahkan guru mengedit kembali teks, soal, dan tabel sebelum dicetak.',
    icon: FileType,
    badge: 'Fleksibel'
  },
  {
    id: 'HTML Interaktif Web / Layar Sentuh IFP',
    title: 'HTML Interaktif (IFP / Web)',
    desc: 'Bisa langsung dibuka di browser layar sentuh interaktif dengan kolom interaktif.',
    icon: FileCode,
    badge: 'Digital IFP'
  },
  {
    id: 'Format Markdown Bersih & Terstruktur',
    title: 'Markdown Terstruktur',
    desc: 'Format teks murni siap diimpor ke Notion, Obsidian, GitHub, atau LMS Moodle.',
    icon: FileSpreadsheet,
    badge: 'Universal'
  }
];

const PAGE_SIZES = [
  {
    id: 'A4 Portrait (Standar Nasional)',
    name: 'A4 Portrait',
    desc: '210 x 297 mm — Standar baku lembar kerja nasional.',
    aspect: '28px 20px'
  },
  {
    id: 'A4 Landscape (Untuk Mind Map/Tabel Lebar)',
    name: 'A4 Landscape',
    desc: '297 x 210 mm — Sangat cocok untuk bagan alur, tabel besar, & diagram.',
    aspect: '20px 28px'
  },
  {
    id: 'F4 / Folio Portrait',
    name: 'F4 / Folio',
    desc: '215 x 330 mm — Lembar kerja sekolah dengan kapasitas materi lebih panjang.',
    aspect: '32px 20px'
  },
  {
    id: 'Layar Sentuh IFP / Tablet 16:9',
    name: 'IFP / Tablet 16:9',
    desc: 'Landscape digital untuk ditayangkan langsung di Smart Board / IFP kelas.',
    aspect: '18px 30px'
  }
];

export default function OutputConfigurator({ config, onChange }) {
  return (
    <div className="lkpd-section-card">
      {/* Header */}
      <div className="lsc-header">
        <div className="lsc-icon-wrap bg-blue">
          <Printer size={20} />
        </div>
        <div>
          <h3 className="lsc-title">I. Format Luaran &amp; Spesifikasi Dokumen</h3>
          <p className="lsc-subtitle">Pilih target format cetak atau digital beserta orientasi halaman yang dikehendaki.</p>
        </div>
      </div>

      {/* Target Format Luaran */}
      <div style={{ marginBottom: '20px' }}>
        <label className="vds-label">
          Pilih Format Luaran Dokumen:
        </label>
        <div className="out-format-grid">
          {OUTPUT_FORMATS.map((fmt) => {
            const isSelected = config.outputFormat === fmt.id || (!config.outputFormat && fmt.id === 'PDF siap cetak');
            const Icon = fmt.icon;
            return (
              <button
                key={fmt.id}
                type="button"
                onClick={() => onChange({ outputFormat: fmt.id })}
                className={`out-fmt-card ${isSelected ? 'active' : ''}`}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '6px', background: isSelected ? '#4F46E5' : 'var(--bg-surface)', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: isSelected ? '#FFFFFF' : 'var(--text-secondary)' }}>
                      <Icon size={16} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--text-primary)' }}>{fmt.title}</div>
                      <span style={{ fontSize: '0.66rem', fontFamily: 'var(--font-mono)', padding: '1px 6px', borderRadius: '999px', background: 'rgba(79, 70, 229, 0.12)', color: '#4F46E5', fontWeight: 700 }}>
                        {fmt.badge}
                      </span>
                    </div>
                  </div>
                  {isSelected && <Check size={16} style={{ color: '#4F46E5' }} />}
                </div>
                <p style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', lineHeight: 1.4, margin: '4px 0 0 0' }}>
                  {fmt.desc}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Ukuran & Orientasi Kertas */}
      <div style={{ marginBottom: '20px' }}>
        <label className="vds-label">
          Ukuran &amp; Orientasi Lembar Kerja:
        </label>
        <div className="out-page-sizes-grid">
          {PAGE_SIZES.map((size) => {
            const isSelected = config.pageSize === size.id || (!config.pageSize && size.name === 'A4 Portrait');
            const [h, w] = size.aspect.split(' ');
            return (
              <button
                key={size.id}
                type="button"
                onClick={() => onChange({ pageSize: size.id })}
                className={`out-page-card ${isSelected ? 'active' : ''}`}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <div style={{ width: w, height: h, border: isSelected ? '2px solid #4F46E5' : '1.5px solid var(--border-strong)', borderRadius: '3px', background: isSelected ? 'rgba(79, 70, 229, 0.15)' : 'var(--bg-surface)' }} />
                  {isSelected && <Check size={14} style={{ color: '#4F46E5' }} />}
                </div>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '2px' }}>
                  {size.name}
                </div>
                <p style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.3 }}>
                  {size.desc}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Preview Anatomi Struktur LKPD */}
      <div style={{ padding: '16px', background: 'var(--bg-app)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '10px' }}>
          <Layout size={15} style={{ color: '#4F46E5' }} />
          Anatomi Struktur Dokumen yang Dihasilkan:
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '8px', textAlign: 'center', fontSize: '0.72rem' }}>
          <div style={{ padding: '8px', background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: '4px' }}>
            <span style={{ color: '#4F46E5', fontWeight: 700, display: 'block' }}>1. Header Kop</span>
            Identitas &amp; Waktu
          </div>
          <div style={{ padding: '8px', background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: '4px' }}>
            <span style={{ color: '#4F46E5', fontWeight: 700, display: 'block' }}>2. Petunjuk</span>
            Instruksi Aman
          </div>
          <div style={{ padding: '8px', background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: '4px' }}>
            <span style={{ color: '#4F46E5', fontWeight: 700, display: 'block' }}>3. Stimulus</span>
            Kasus / Data
          </div>
          <div style={{ padding: '8px', background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: '4px' }}>
            <span style={{ color: '#4F46E5', fontWeight: 700, display: 'block' }}>4. Lembar Kerja</span>
            Langkah Aktivitas
          </div>
          <div style={{ padding: '8px', background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: '4px' }}>
            <span style={{ color: '#10B981', fontWeight: 700, display: 'block' }}>5. Asesmen</span>
            Soal &amp; Rubrik
          </div>
          <div style={{ padding: '8px', background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: '4px' }}>
            <span style={{ color: '#EC4899', fontWeight: 700, display: 'block' }}>6. Refleksi</span>
            Formatif &amp; Umpan Balik
          </div>
        </div>
      </div>
    </div>
  );
}
