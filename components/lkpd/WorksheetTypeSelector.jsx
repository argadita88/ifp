'use client';

import React from 'react';
import { User, Users, FolderKanban, FlaskConical, AlertTriangle, Monitor, Microscope, FileSearch, Check } from 'lucide-react';

export default function WorksheetTypeSelector({ selectedTypes, config, onChange }) {
  const currentTypes = selectedTypes || config?.worksheetTypes || [];

  const options = [
    {
      id: 'LKPD Individu',
      title: 'LKPD Individu',
      desc: 'Penugasan mandiri untuk mengukur pemahaman personal siswa.',
      icon: User,
    },
    {
      id: 'LKPD Kelompok',
      title: 'LKPD Kelompok',
      desc: 'Mendorong kolaborasi, berbagi peran, dan musyawarah tim.',
      icon: Users,
    },
    {
      id: 'LKPD Berbasis Proyek',
      title: 'LKPD Berbasis Proyek',
      desc: 'Panduan bertahap untuk menghasilkan produk atau karya nyata.',
      icon: FolderKanban,
    },
    {
      id: 'LKPD Eksperimen',
      title: 'LKPD Eksperimen',
      desc: 'Penyelidikan ilmiah berbasis hipotesis, variabel, dan data.',
      icon: FlaskConical,
    },
    {
      id: 'LKPD Problem Solving',
      title: 'LKPD Problem Solving',
      desc: 'Menyelesaikan tantangan atau masalah nyata secara sistematis.',
      icon: AlertTriangle,
    },
    {
      id: 'LKPD Digital',
      title: 'LKPD Digital',
      desc: 'Format interaktif yang optimal untuk gawai dan Layar Sentuh IFP.',
      icon: Monitor,
    },
    {
      id: 'LKPD Praktikum',
      title: 'LKPD Praktikum',
      desc: 'Panduan kerja laboratorium dan pengamatan prosedur teknis.',
      icon: Microscope,
    },
    {
      id: 'LKPD Studi Kasus',
      title: 'LKPD Studi Kasus',
      desc: 'Eksplorasi narasi dilema kontekstual dan pengambilan keputusan.',
      icon: FileSearch,
    },
  ];

  const handleToggle = (id) => {
    const updated = currentTypes.includes(id)
      ? currentTypes.filter((t) => t !== id)
      : [...currentTypes, id];

    if (config && typeof onChange === 'function') {
      onChange({ worksheetTypes: updated });
    } else if (typeof onChange === 'function') {
      onChange(updated);
    }
  };

  return (
    <div className="lkpd-section-card">
      <div className="lsc-header">
        <div className="lsc-icon-wrap bg-cyan">
          <FolderKanban size={18} />
        </div>
        <div>
          <h3 className="lsc-title">B. Jenis &amp; Karakteristik LKPD</h3>
          <p className="lsc-subtitle">Pilih satu atau beberapa jenis lembar kerja yang ingin dipadukan (Multi-select).</p>
        </div>
      </div>

      <div className="lsc-cards-grid">
        {options.map((item) => {
          const Icon = item.icon;
          const isSelected = currentTypes.includes(item.id);
          return (
            <button
              key={item.id}
              type="button"
              className={`selectable-card lsc-choice-card ${isSelected ? 'selected' : ''}`}
              onClick={() => handleToggle(item.id)}
            >
              <div className="sc-top choice-card-header">
                <div className={`sc-icon choice-card-icon ${isSelected ? 'icon-active' : ''}`}>
                  <Icon size={20} />
                </div>
                <div className={`sc-check choice-card-check ${isSelected ? 'check-active' : ''}`}>
                  {isSelected && <Check size={13} strokeWidth={3} />}
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
