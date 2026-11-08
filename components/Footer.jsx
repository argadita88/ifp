'use client';

import React from 'react';
import { Gamepad2, Presentation, Rocket, Sparkles, GraduationCap, Film, BookOpen, Download, ExternalLink } from 'lucide-react';

export default function Footer({ onSwitchSection }) {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-top-grid">
          {/* Brand & Purpose Column */}
          <div className="footer-brand-col">
            <div className="footer-brand-header">
              <div className="footer-brand-logo">
                <Gamepad2 size={20} />
              </div>
              <span className="footer-brand-name">Gim Interaktif Informatika SMP</span>
            </div>
            <p className="footer-brand-desc">
              Ekosistem media pembelajaran komprehensif berbasis layar sentuh interaktif untuk Kurikulum Merdeka Fase D: Presentasi pedagogis, game simulasi multi-touch &amp; 3D multiplayer, AI LKPD Studio, AI Storyboard, dan SEMPENSARI AI Modul Ajar Architect (python-docx F4).
            </p>
            <div className="footer-tech-specs">
              <span className="tech-badge">Interactive Flat Panel 4K</span>
              <span className="tech-badge">Multi-Touch &amp; 3D Game</span>
              <span className="tech-badge">AI Modul Ajar Architect</span>
              <span className="tech-badge">100% Standalone</span>
            </div>
          </div>

          {/* Module Links */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">MODUL PLATFORM</h4>
            <ul className="footer-links-list">
              <li>
                <button
                  type="button"
                  onClick={() => onSwitchSection('ppt')}
                  className="footer-link-btn"
                >
                  <Presentation size={14} />
                  <span>1. Slide Materi Presentasi &amp; AI PPT</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSwitchSection('game')}
                  className="footer-link-btn"
                >
                  <Rocket size={14} />
                  <span>2. Educational Gaming Arena (3D)</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSwitchSection('prompt')}
                  className="footer-link-btn"
                >
                  <Sparkles size={14} />
                  <span>3. AI Game Prompt Studio</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSwitchSection('lkpd')}
                  className="footer-link-btn"
                >
                  <GraduationCap size={14} />
                  <span>4. AI LKPD Prompt Studio</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSwitchSection('storyboard')}
                  className="footer-link-btn"
                >
                  <Film size={14} />
                  <span>5. AI Storyboard Studio</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSwitchSection('modul')}
                  className="footer-link-btn"
                >
                  <BookOpen size={14} />
                  <span>6. AI Modul Ajar Architect (Baru)</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Download & Resources */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">UNDUHAN &amp; ARSIP</h4>
            <ul className="footer-links-list">
              <li>
                <a href="/gamifikasi_informatika_smp.pptx" download className="footer-link-anchor">
                  <Download size={14} />
                  <span>File Presentasi PPTX Asli</span>
                </a>
              </li>
              <li>
                <a href="/modul_ajar_prompt_generator.html" target="_blank" rel="noreferrer" className="footer-link-anchor">
                  <ExternalLink size={14} />
                  <span>AI Modul Ajar Architect SPA</span>
                </a>
              </li>
              <li>
                <a href="/game_treasure_hunt_3d.html" target="_blank" rel="noreferrer" className="footer-link-anchor">
                  <ExternalLink size={14} />
                  <span>3D Roblox Treasure Hunt Game</span>
                </a>
              </li>
              <li>
                <a href="/storyboard_prompt_generator.html" target="_blank" rel="noreferrer" className="footer-link-anchor">
                  <ExternalLink size={14} />
                  <span>AI Storyboard Generator SPA</span>
                </a>
              </li>
              <li>
                <a href="/game_prompt_architect.html" target="_blank" rel="noreferrer" className="footer-link-anchor">
                  <ExternalLink size={14} />
                  <span>Game Architect SPA v4.0</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-row">
          <p className="footer-copy">
            © 2026 <strong>Interaktif Game Panel &amp; SEMPENSARI AI</strong> — Gim Interaktif &amp; Perangkat Ajar Kurikulum Merdeka. Didesain untuk Pembelajaran Aktif, Kolaboratif &amp; Menyenangkan.
          </p>
          <p className="footer-curriculum">
            Kurikulum Merdeka • Deep Learning • Berpikir Komputasional Fase D • IFP 4K
          </p>
        </div>
      </div>
    </footer>
  );
}
