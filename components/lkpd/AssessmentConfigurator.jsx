'use client';

import React from 'react';
import {
  FileCheck2,
  Sliders,
  CheckCircle2,
  BookCheck,
  Award,
  Sparkles,
  HelpCircle,
  BarChart3,
  Check
} from 'lucide-react';

const QUESTION_TYPES = [
  'Pilihan Ganda',
  'Isian Singkat',
  'Uraian Analitis',
  'Menjodohkan (Matching)',
  'Pernyataan Benar/Salah',
  'Studi Kasus HOTS',
  'Rubrik Unjuk Kerja Praktik',
  'Teka-Teki Silang Edukatif'
];

const DIFFICULTY_LEVELS = [
  {
    id: 'Mudah (LOTS: C1-C2)',
    title: 'Dasar / LOTS',
    bloom: 'C1 Mengingat – C2 Memahami',
    desc: 'Fokus pada pengenalan istilah, definisi, dan konsep dasar.'
  },
  {
    id: 'Sedang (MOTS: C2-C3)',
    title: 'Menengah / MOTS',
    bloom: 'C2 Memahami – C3 Mengaplikasikan',
    desc: 'Latihan penerapan prosedur dan pemecahan masalah standar.'
  },
  {
    id: 'Tantangan Tinggi (HOTS: C4-C6)',
    title: 'Tinggi / HOTS',
    bloom: 'C4 Menganalisis – C5 Mengevaluasi – C6 Mencipta',
    desc: 'Analisis mendalam, pemecahan masalah kompleks, dan sintesis solusi.'
  },
  {
    id: 'Bertingkat Adaptif (LOTS ke HOTS)',
    title: 'Bertingkat Adaptif',
    bloom: 'Gradasi Bertahap C1 hingga C6',
    desc: 'Struktur tangga pemahaman dari dasar hingga tantangan kreasi mandiri.'
  }
];

export default function AssessmentConfigurator({ config, onChange }) {
  const selectedTypes = config.assessmentTypes || [];

  const toggleType = (type) => {
    if (selectedTypes.includes(type)) {
      if (selectedTypes.length === 1) return; // minimal 1
      onChange({ assessmentTypes: selectedTypes.filter((t) => t !== type) });
    } else {
      onChange({ assessmentTypes: [...selectedTypes, type] });
    }
  };

  return (
    <div className="lkpd-section-card">
      {/* Header */}
      <div className="lsc-header">
        <div className="lsc-icon-wrap bg-emerald">
          <FileCheck2 size={20} />
        </div>
        <div>
          <h3 className="lsc-title">H. Asesmen, Evaluasi &amp; Rubrik Penilaian</h3>
          <p className="lsc-subtitle">Konfigurasi instrumen evaluasi formatif/sumatif, tingkat kesulitan, serta pedoman penskoran otomatis.</p>
        </div>
      </div>

      {/* Bentuk Soal Multi-Select */}
      <div style={{ marginBottom: '20px' }}>
        <label className="vds-label">
          Bentuk &amp; Tipe Soal (Pilih satu atau lebih):
        </label>
        <div className="as-types-grid">
          {QUESTION_TYPES.map((type) => {
            const isSelected = selectedTypes.includes(type);
            return (
              <button
                key={type}
                type="button"
                onClick={() => toggleType(type)}
                className={`as-type-btn ${isSelected ? 'active' : ''}`}
              >
                <span>{type}</span>
                {isSelected && <Check size={14} style={{ color: '#10B981', flexShrink: 0 }} />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Control Row: Slider Target Jumlah Soal & Difficulty */}
      <div className="as-control-row">
        {/* Slider Jumlah Soal */}
        <div className="as-slider-card">
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Sliders size={14} style={{ color: '#10B981' }} /> Target Jumlah Soal
              </span>
              <span style={{ fontSize: '0.85rem', fontWeight: 800, fontFamily: 'var(--font-mono)', background: 'rgba(16, 185, 129, 0.15)', color: '#10B981', padding: '2px 8px', borderRadius: '4px' }}>
                {config.questionCount || 8} Soal
              </span>
            </div>
            <p style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', margin: '0 0 14px 0', lineHeight: 1.4 }}>
              Disarankan 5–10 soal untuk pembelajaran 2–3 JP agar siswa fokus dan reflektif.
            </p>
          </div>
          <div>
            <input
              type="range"
              min="3"
              max="20"
              step="1"
              value={config.questionCount || 8}
              onChange={(e) => onChange({ questionCount: parseInt(e.target.value, 10) })}
              style={{ width: '100%', accentColor: '#10B981', cursor: 'pointer' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.68rem', color: 'var(--text-tertiary)', marginTop: '4px' }}>
              <span>3 Soal (Kilat)</span>
              <span>10 Soal (Ideal)</span>
              <span>20 Soal (Lengkap)</span>
            </div>
          </div>
        </div>

        {/* Tingkat Kesulitan */}
        <div>
          <label className="vds-label">
            Tingkat Kesulitan &amp; Taksonomi Bloom:
          </label>
          <div className="as-diff-grid">
            {DIFFICULTY_LEVELS.map((diff) => {
              const isSelected = config.difficulty === diff.id;
              return (
                <button
                  key={diff.id}
                  type="button"
                  onClick={() => onChange({ difficulty: diff.id })}
                  className={`as-diff-btn ${isSelected ? 'active' : ''}`}
                >
                  <div className="as-diff-title">
                    <span>{diff.title}</span>
                    {isSelected && <Check size={14} style={{ color: '#10B981' }} />}
                  </div>
                  <div className="as-diff-bloom">{diff.bloom}</div>
                  <p className="as-diff-desc">{diff.desc}</p>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Checkbox Kelengkapan Lampiran Asesmen */}
      <div style={{ paddingTop: '16px', borderTop: '1px solid var(--border-subtle)' }}>
        <label className="vds-label">
          Kelengkapan Lampiran Asesmen (Checklist):
        </label>
        <div className="as-checklist-grid">
          {/* Kunci Jawaban */}
          <label className={`as-check-item ${config.includeAnswerKey ? 'active' : ''}`}>
            <input
              type="checkbox"
              checked={!!config.includeAnswerKey}
              onChange={(e) => onChange({ includeAnswerKey: e.target.checked })}
              style={{ marginTop: '3px', accentColor: '#10B981', cursor: 'pointer' }}
            />
            <div>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <BookCheck size={14} style={{ color: '#10B981' }} /> Kunci Jawaban
              </span>
              <p style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', margin: '2px 0 0 0', lineHeight: 1.35 }}>
                Jawaban pasti untuk pilihan ganda &amp; isian.
              </p>
            </div>
          </label>

          {/* Pembahasan */}
          <label className={`as-check-item ${config.includeDiscussion ? 'active' : ''}`}>
            <input
              type="checkbox"
              checked={!!config.includeDiscussion}
              onChange={(e) => onChange({ includeDiscussion: e.target.checked })}
              style={{ marginTop: '3px', accentColor: '#10B981', cursor: 'pointer' }}
            />
            <div>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Sparkles size={14} style={{ color: '#10B981' }} /> Pembahasan
              </span>
              <p style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', margin: '2px 0 0 0', lineHeight: 1.35 }}>
                Ulasan konsep dan alasan pedagogis jawaban.
              </p>
            </div>
          </label>

          {/* Rubrik Penilaian */}
          <label className={`as-check-item ${config.includeRubric ? 'active' : ''}`}>
            <input
              type="checkbox"
              checked={!!config.includeRubric}
              onChange={(e) => onChange({ includeRubric: e.target.checked })}
              style={{ marginTop: '3px', accentColor: '#10B981', cursor: 'pointer' }}
            />
            <div>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Award size={14} style={{ color: '#10B981' }} /> Rubrik Deskriptif
              </span>
              <p style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', margin: '2px 0 0 0', lineHeight: 1.35 }}>
                Kriteria penskoran 4 tingkat (Sangat Baik s.d. Perlu Bimbingan).
              </p>
            </div>
          </label>

          {/* Pedoman Penskoran */}
          <label className={`as-check-item ${config.includeScoringGuide ? 'active' : ''}`}>
            <input
              type="checkbox"
              checked={!!config.includeScoringGuide}
              onChange={(e) => onChange({ includeScoringGuide: e.target.checked })}
              style={{ marginTop: '3px', accentColor: '#10B981', cursor: 'pointer' }}
            />
            <div>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <BarChart3 size={14} style={{ color: '#10B981' }} /> Bobot &amp; Skor Akhir
              </span>
              <p style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', margin: '2px 0 0 0', lineHeight: 1.35 }}>
                Rumus konversi nilai akhir skala 0–100.
              </p>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}
