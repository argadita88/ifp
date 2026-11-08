'use client';

import React from 'react';
import { Presentation, Gamepad2, Sparkles, GraduationCap, Film, BookOpen } from 'lucide-react';

export default function TabNavigation({ activeSection, onSwitchSection }) {
  const tabs = [
    {
      id: 'ppt',
      title: 'Materi Presentasi',
      sub: '12 Slide Pedagogis & Kerangka MDA',
      badge: '12 SLIDE',
      icon: Presentation,
    },
    {
      id: 'game',
      title: 'Live Game Arena',
      sub: 'Aerostrike Dogfight & Outpost Zero',
      badge: '2 GAMES',
      icon: Gamepad2,
    },
    {
      id: 'prompt',
      title: 'AI Game Prompt',
      sub: 'Studio Generator Anti-Broken Code',
      badge: 'AI v3.5',
      icon: Sparkles,
    },
    {
      id: 'lkpd',
      title: 'AI LKPD Studio',
      sub: 'Transform Bahan Ajar Jadi LKPD',
      badge: 'BARU • AI',
      icon: GraduationCap,
    },
    {
      id: 'storyboard',
      title: 'AI Storyboard',
      sub: 'Visual Scene & Panel Flow Architect',
      badge: 'BARU • AI',
      icon: Film,
    },
    {
      id: 'modul',
      title: 'AI Modul Ajar',
      sub: 'Kurikulum Merdeka & Python-Docx F4',
      badge: 'SEMPENSARI',
      icon: BookOpen,
    },
  ];

  return (
    <div className="segmented-nav-wrapper">
      <div className="segmented-nav-container">
        <nav className="segmented-nav-bar" aria-label="Navigasi Modul Pembelajaran">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeSection === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                className={`segmented-tab-btn ${isActive ? 'active' : ''}`}
                onClick={() => onSwitchSection(tab.id)}
                aria-selected={isActive}
                role="tab"
              >
                <div className="tab-btn-icon-wrapper">
                  <Icon size={18} strokeWidth={isActive ? 2.3 : 1.8} />
                </div>
                <div className="tab-btn-info">
                  <span className="tab-btn-title">{tab.title}</span>
                  <span className="tab-btn-desc">{tab.sub}</span>
                </div>
                <span className={`tab-badge-pill ${isActive ? 'badge-active' : ''}`}>
                  {tab.badge}
                </span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
