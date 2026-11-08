'use client';

import React from 'react';
import { Sparkles, Check } from 'lucide-react';

export default function LearningFeatureSelector({ selectedFeatures, config, onChange }) {
  const currentFeatures = selectedFeatures || config?.features || [];

  const features = [
    {
      id: 'Diferensiasi pembelajaran',
      title: 'Diferensiasi Pembelajaran',
      desc: 'Penyediaan tingkat bantuan (scaffolding) dan konten bertingkat sesuai kesiapan siswa.',
      tag: 'Inklusif',
    },
    {
      id: 'HOTS',
      title: 'HOTS (Higher Order Thinking Skills)',
      desc: 'Menstimulasi level kognitif C4 (Menganalisis), C5 (Mengevaluasi), dan C6 (Mencipta).',
      tag: 'Kognitif',
    },
    {
      id: 'Literasi',
      title: 'Penguatan Literasi Teks',
      desc: 'Menemukan informasi tersirat, kosa kata tematik, dan ringkasan bacaan bermakna.',
      tag: 'Literasi',
    },
    {
      id: 'Numerasi',
      title: 'Penguatan Numerasi & Data',
      desc: 'Pengolahan tabel data, interpretasi grafik, dan estimasi kuantitatif kontekstual.',
      tag: 'Numerasi',
    },
    {
      id: 'Profil Pelajar Pancasila',
      title: 'Profil Pelajar Pancasila',
      desc: 'Penanaman dimensi Beriman, Gotong Royong, Mandiri, Bernalar Kritis, dan Kreatif.',
      tag: 'Karakter',
    },
    {
      id: 'Pembelajaran kontekstual',
      title: 'Pembelajaran Kontekstual',
      desc: 'Kaitkan materi secara langsung dengan kearifan lokal atau lingkungan keseharian.',
      tag: 'Kontekstual',
    },
    {
      id: 'Kolaborasi',
      title: 'Keterampilan Kolaborasi',
      desc: 'Panduan kerja sama tim terstruktur dengan akuntabilitas peran masing-masing anggota.',
      tag: 'Sosial',
    },
    {
      id: 'Kreativitas',
      title: 'Kreativitas & Desain Orisinil',
      desc: 'Memberikan ruang kebebasan berekspresi dalam menyajikan visual atau produk akhir.',
      tag: 'Kreatif',
    },
    {
      id: 'Problem solving',
      title: 'Problem Solving Terstruktur',
      desc: 'Alur identifikasi masalah, perumusan opsi strategi, dan pengujian solusi terbaik.',
      tag: 'Metode',
    },
    {
      id: 'Self assessment',
      title: 'Self Assessment (Penilaian Diri)',
      desc: 'Lembar ceklis mandiri bagi siswa untuk mengukur pemahaman dan ketuntasan tugas.',
      tag: 'Asesmen',
    },
    {
      id: 'Peer assessment',
      title: 'Peer Assessment (Penilaian Teman)',
      desc: 'Rubrik penilaian antarteman yang saling membangun dan objektif.',
      tag: 'Asesmen',
    },
    {
      id: 'Remedial',
      title: 'Aktivitas Remedial Terpadu',
      desc: 'Panduan bantuan terarah untuk peserta didik yang memerlukan bimbingan tambahan.',
      tag: 'Remedial',
    },
    {
      id: 'Pengayaan',
      title: 'Tantangan Pengayaan',
      desc: 'Soal eksplorasi lanjutan bagi peserta didik yang telah mencapai ketuntasan lebih cepat.',
      tag: 'Pengayaan',
    },
    {
      id: 'Refleksi 3-2-1',
      title: 'Refleksi Model 3-2-1',
      desc: '3 hal baru yang dipahami, 2 hal menarik yang ingin didalami, 1 pertanyaan tersisa.',
      tag: 'Refleksi',
    },
  ];

  const handleToggle = (id) => {
    const updated = currentFeatures.includes(id)
      ? currentFeatures.filter((f) => f !== id)
      : [...currentFeatures, id];

    if (config && typeof onChange === 'function') {
      onChange({ features: updated });
    } else if (typeof onChange === 'function') {
      onChange(updated);
    }
  };

  return (
    <div className="lkpd-section-card">
      <div className="lsc-header">
        <div className="lsc-icon-wrap bg-amber">
          <Sparkles size={18} />
        </div>
        <div>
          <h3 className="lsc-title">E. Fitur Pembelajaran Tambahan</h3>
          <p className="lsc-subtitle">Sematkan nilai-nilai pedagogis khusus ke dalam Master Prompt LKPD Anda.</p>
        </div>
      </div>

      <div className="features-checkbox-grid">
        {features.map((item) => {
          const isSelected = currentFeatures.includes(item.id);
          return (
            <div
              key={item.id}
              className={`feature-item-card ${isSelected ? 'selected' : ''}`}
              onClick={() => handleToggle(item.id)}
            >
              <div className="fic-checkbox">
                {isSelected ? (
                  <div className="custom-check-box checked">
                    <Check size={12} strokeWidth={3} />
                  </div>
                ) : (
                  <div className="custom-check-box" />
                )}
              </div>
              <div className="fic-info">
                <div className="fic-title-row">
                  <span className="fic-title">{item.title}</span>
                  <span className="fic-tag">{item.tag}</span>
                </div>
                <p className="fic-desc">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
