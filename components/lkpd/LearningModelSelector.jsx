'use client';

import React from 'react';
import { Lightbulb, Compass, Search, Users, Earth, BookOpen, Layers, Sparkles, Brain, Code2, Check } from 'lucide-react';

export default function LearningModelSelector({ selectedModel, config, onChange }) {
  const currentModel = selectedModel || config?.learningModel || '';

  const models = [
    {
      id: 'Problem Based Learning',
      title: 'Problem Based Learning (PBL)',
      desc: 'Orientasi masalah nyata, penyelidikan kelompok, dan penyajian solusi.',
      icon: Lightbulb,
    },
    {
      id: 'Project Based Learning',
      title: 'Project Based Learning (PjBL)',
      desc: 'Pertanyaan esensial, perancangan jadwal proyek, dan pembuatan artefak.',
      icon: Compass,
    },
    {
      id: 'Discovery Learning',
      title: 'Discovery Learning',
      desc: 'Stimulasi, identifikasi masalah, pengumpulan & pengolahan data, pembuktian.',
      icon: Search,
    },
    {
      id: 'Inquiry Learning',
      title: 'Inquiry Learning',
      desc: 'Observasi, perumusan hipotesis, eksperimen, dan penarikan kesimpulan.',
      icon: Brain,
    },
    {
      id: 'Cooperative Learning',
      title: 'Cooperative Learning',
      desc: 'Struktur kerja sama tim positif, interaksi tatap muka, dan akuntabilitas individu.',
      icon: Users,
    },
    {
      id: 'Contextual Teaching and Learning',
      title: 'Contextual Teaching & Learning (CTL)',
      desc: 'Menghubungkan konten akademik dengan konteks sosial dan lingkungan siswa.',
      icon: Earth,
    },
    {
      id: 'Direct Instruction',
      title: 'Direct Instruction',
      desc: 'Penyampaian materi terstruktur, pemodelan guru, latihan terbimbing & mandiri.',
      icon: BookOpen,
    },
    {
      id: 'Deep Learning',
      title: 'Deep Learning',
      desc: 'Penalaran bermakna, koneksi lintas disiplin, dan refleksi metakognitif tingkat tinggi.',
      icon: Layers,
    },
    {
      id: 'Experiential Learning',
      title: 'Experiential Learning',
      desc: 'Belajar berbasis pengalaman konkret, observasi reflektif, dan eksperimentasi aktif.',
      icon: Sparkles,
    },
    {
      id: 'Unplugged Learning',
      title: 'Unplugged Learning',
      desc: 'Konsep komputasi/logika tanpa komputer menggunakan permainan fisik atau kartu.',
      icon: Code2,
    },
    {
      id: 'Tidak ditentukan / AI memilih otomatis',
      title: 'AI Memilih Otomatis',
      desc: 'AI akan menganalisis materi dan memilih model pedagogis yang paling tepat.',
      icon: Sparkles,
    },
  ];

  const handleSelect = (id) => {
    if (config && typeof onChange === 'function') {
      onChange({ learningModel: id });
    } else if (typeof onChange === 'function') {
      onChange(id);
    }
  };

  const isModelSelected = (itemId) => {
    if (!currentModel) return false;
    if (currentModel === itemId) return true;
    if (itemId === 'Tidak ditentukan / AI memilih otomatis' && (currentModel.includes('AI') || currentModel.includes('otomatis'))) return true;
    if (currentModel.toLowerCase().includes(itemId.toLowerCase()) || itemId.toLowerCase().includes(currentModel.toLowerCase())) return true;
    return false;
  };

  return (
    <div className="lkpd-section-card">
      <div className="lsc-header">
        <div className="lsc-icon-wrap bg-violet">
          <Brain size={18} />
        </div>
        <div>
          <h3 className="lsc-title">C. Model Pembelajaran &amp; Alur Sintaks</h3>
          <p className="lsc-subtitle">Sintaks model pembelajaran yang dipilih akan dijabarkan menjadi tahapan LKPD.</p>
        </div>
      </div>

      <div className="lsc-cards-grid">
        {models.map((item) => {
          const Icon = item.icon;
          const isSelected = isModelSelected(item.id);
          return (
            <button
              key={item.id}
              type="button"
              className={`selectable-card lsc-choice-card ${isSelected ? 'selected' : ''}`}
              onClick={() => handleSelect(item.id)}
            >
              <div className="sc-top choice-card-header">
                <div className={`sc-icon choice-card-icon ${isSelected ? 'icon-active' : ''}`}>
                  <Icon size={20} />
                </div>
                <div className={`sc-check choice-card-check ${isSelected ? 'check-active' : ''}`}>
                  {isSelected && <Check size={14} strokeWidth={3} />}
                </div>
              </div>
              <span className="sc-title choice-card-title">{item.title}</span>
              <p className="sc-desc choice-card-desc">{item.desc}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
