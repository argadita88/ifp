'use client';

import React from 'react';
import { Eye, FileSearch, MessageSquare, FlaskConical, Play, Trees, Puzzle, Gamepad2, Wrench, Compass, Hammer, Presentation, HeartHandshake, Check } from 'lucide-react';

export default function ActivitySelector({ selectedActivities, config, onChange }) {
  const currentActivities = selectedActivities || config?.activities || [];

  const activities = [
    { id: 'Mengamati gambar', label: 'Mengamati Gambar / Infografis', icon: Eye },
    { id: 'Menganalisis kasus', label: 'Menganalisis Kasus / Dilema', icon: FileSearch },
    { id: 'Diskusi kelompok', label: 'Diskusi & Musyawarah Kelompok', icon: MessageSquare },
    { id: 'Eksperimen', label: 'Eksperimen / Uji Coba', icon: FlaskConical },
    { id: 'Simulasi', label: 'Simulasi / Bermain Peran', icon: Play },
    { id: 'Observasi lingkungan', label: 'Observasi Lingkungan Sekitar', icon: Trees },
    { id: 'Teka-teki edukatif', label: 'Teka-Teki & Silang Kata', icon: Puzzle },
    { id: 'Game pembelajaran', label: 'Game / Mini Kuis Edukatif', icon: Gamepad2 },
    { id: 'Praktik langsung', label: 'Praktik Langsung (Hands-on)', icon: Wrench },
    { id: 'Eksplorasi', label: 'Eksplorasi Mandiri', icon: Compass },
    { id: 'Membuat produk', label: 'Membuat Produk / Artefak', icon: Hammer },
    { id: 'Presentasi', label: 'Presentasi & Paparan Hasil', icon: Presentation },
    { id: 'Refleksi', label: 'Refleksi Pembelajaran', icon: HeartHandshake },
  ];

  const handleToggle = (id) => {
    const updated = currentActivities.includes(id)
      ? currentActivities.filter((a) => a !== id)
      : [...currentActivities, id];

    if (config && typeof onChange === 'function') {
      onChange({ activities: updated });
    } else if (typeof onChange === 'function') {
      onChange(updated);
    }
  };

  const selectAll = () => {
    const all = activities.map((a) => a.id);
    if (config && typeof onChange === 'function') {
      onChange({ activities: all });
    } else if (typeof onChange === 'function') {
      onChange(all);
    }
  };

  const clearAll = () => {
    if (config && typeof onChange === 'function') {
      onChange({ activities: [] });
    } else if (typeof onChange === 'function') {
      onChange([]);
    }
  };

  return (
    <div className="lkpd-section-card">
      <div className="lsc-header">
        <div className="lsc-icon-wrap bg-emerald">
          <Puzzle size={18} />
        </div>
        <div className="flex-1">
          <h3 className="lsc-title">D. Pilihan Aktivitas Siswa</h3>
          <p className="lsc-subtitle">Tentukan ragam kegiatan interaktif yang akan dikerjakan peserta didik (Multi-select).</p>
        </div>
        <div className="lsc-quick-actions">
          <button type="button" className="quick-text-btn" onClick={selectAll}>Pilih Semua</button>
          <span className="divider-dot">•</span>
          <button type="button" className="quick-text-btn" onClick={clearAll}>Kosongkan</button>
        </div>
      </div>

      <div className="badge-selection-grid">
        {activities.map((item) => {
          const Icon = item.icon;
          const isSelected = currentActivities.includes(item.id);
          return (
            <button
              key={item.id}
              type="button"
              className={`activity-badge-btn ${isSelected ? 'active' : ''}`}
              onClick={() => handleToggle(item.id)}
            >
              <Icon size={16} />
              <span>{item.label}</span>
              {isSelected && <Check size={14} className="badge-check" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}
