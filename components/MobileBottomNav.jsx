'use client';

import React from 'react';
import { Presentation, Gamepad2, Sparkles, GraduationCap, Film } from 'lucide-react';

export default function MobileBottomNav({ activeSection, onSwitchSection }) {
  return (
    <nav className="mobile-bottom-nav" aria-label="Navigasi Cepat Mobile">
      <button
        type="button"
        className={`bnav-item ${activeSection === 'ppt' ? 'active' : ''}`}
        onClick={() => onSwitchSection('ppt')}
        aria-label="Slide Presentasi"
      >
        <div className="bnav-icon-pill">
          <Presentation size={18} strokeWidth={activeSection === 'ppt' ? 2.4 : 1.8} />
        </div>
        <span className="bnav-text">Slide PPT</span>
      </button>

      <button
        type="button"
        className={`bnav-item ${activeSection === 'game' ? 'active' : ''}`}
        onClick={() => onSwitchSection('game')}
        aria-label="Live Game Arena"
      >
        <div className="bnav-icon-pill">
          <Gamepad2 size={18} strokeWidth={activeSection === 'game' ? 2.4 : 1.8} />
        </div>
        <span className="bnav-text">Live Game</span>
      </button>

      <button
        type="button"
        className={`bnav-item ${activeSection === 'prompt' ? 'active' : ''}`}
        onClick={() => onSwitchSection('prompt')}
        aria-label="AI Prompt Studio"
      >
        <div className="bnav-icon-pill">
          <Sparkles size={18} strokeWidth={activeSection === 'prompt' ? 2.4 : 1.8} />
        </div>
        <span className="bnav-text">AI Game</span>
      </button>

      <button
        type="button"
        className={`bnav-item ${activeSection === 'lkpd' ? 'active' : ''}`}
        onClick={() => onSwitchSection('lkpd')}
        aria-label="AI LKPD Studio"
      >
        <div className="bnav-icon-pill">
          <GraduationCap size={18} strokeWidth={activeSection === 'lkpd' ? 2.4 : 1.8} />
        </div>
        <span className="bnav-text">AI LKPD</span>
      </button>

      <button
        type="button"
        className={`bnav-item ${activeSection === 'storyboard' ? 'active' : ''}`}
        onClick={() => onSwitchSection('storyboard')}
        aria-label="AI Storyboard"
      >
        <div className="bnav-icon-pill">
          <Film size={18} strokeWidth={activeSection === 'storyboard' ? 2.4 : 1.8} />
        </div>
        <span className="bnav-text">Storyboard</span>
      </button>
    </nav>
  );
}
