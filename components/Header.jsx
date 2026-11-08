'use client';

import React, { useState } from 'react';
import { Gamepad2, Presentation, Rocket, Sparkles, GraduationCap, Film, Sun, Moon, Menu, X } from 'lucide-react';

export default function Header({ activeSection, onSwitchSection, theme, onToggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (section) => {
    onSwitchSection(section);
    setMobileMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        {/* Brand Group */}
        <a
          href="#"
          className="brand-group"
          onClick={(e) => { e.preventDefault(); handleNavClick('ppt'); }}
          aria-label="Kembali ke Beranda Gim Interaktif Informatika SMP"
        >
          <div className="brand-logo-icon">
            <Gamepad2 className="brand-lucide-icon" size={22} strokeWidth={2.2} />
          </div>
          <div className="brand-text">
            <div className="brand-title-wrap">
              <span className="brand-title">Gim Interaktif Informatika SMP</span>
              <span className="brand-ver-badge">v3.5 IFP PRO</span>
            </div>
            <p className="brand-subtitle">
              <span className="status-live-dot"></span>
              <span>Interactive Flat Panel 4K • Kurikulum Merdeka</span>
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="header-actions" aria-label="Navigasi Header Desktop">
          <button
            type="button"
            className={`header-nav-btn ${activeSection === 'ppt' ? 'active' : ''}`}
            onClick={() => handleNavClick('ppt')}
          >
            <Presentation size={16} strokeWidth={2} />
            <span>Slide Materi</span>
            <span className="header-nav-count">12</span>
          </button>

          <button
            type="button"
            className={`header-nav-btn ${activeSection === 'game' ? 'active' : ''}`}
            onClick={() => handleNavClick('game')}
          >
            <Rocket size={16} strokeWidth={2} />
            <span>Live Game</span>
            <span className="header-live-indicator">LIVE</span>
          </button>

          <button
            type="button"
            className={`header-nav-btn header-ai-btn ${activeSection === 'prompt' ? 'active' : ''}`}
            onClick={() => handleNavClick('prompt')}
          >
            <Sparkles size={16} strokeWidth={2} />
            <span>AI Game Studio</span>
          </button>

          <button
            type="button"
            className={`header-nav-btn header-lkpd-btn ${activeSection === 'lkpd' ? 'active' : ''}`}
            onClick={() => handleNavClick('lkpd')}
          >
            <GraduationCap size={16} strokeWidth={2} />
            <span>AI LKPD Studio</span>
          </button>

          <button
            type="button"
            className={`header-nav-btn header-lkpd-btn ${activeSection === 'storyboard' ? 'active' : ''}`}
            onClick={() => handleNavClick('storyboard')}
          >
            <Film size={16} strokeWidth={2} />
            <span>AI Storyboard</span>
            <span className="header-new-badge">BARU</span>
          </button>

          {/* Theme Switcher Toggle */}
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Ganti ke Mode Terang' : 'Ganti ke Mode Gelap'}
            title={theme === 'dark' ? 'Mode Terang' : 'Mode Gelap'}
          >
            {theme === 'dark' ? <Sun size={18} strokeWidth={2} /> : <Moon size={18} strokeWidth={2} />}
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-dropdown-sheet">
          <div className="mobile-dropdown-inner">
            <button
              type="button"
              className={`mobile-nav-link ${activeSection === 'ppt' ? 'active' : ''}`}
              onClick={() => handleNavClick('ppt')}
            >
              <div className="mnl-left">
                <Presentation size={18} />
                <span>1. Slide Presentasi Materi</span>
              </div>
              <span className="mnl-badge">12 Slide</span>
            </button>

            <button
              type="button"
              className={`mobile-nav-link ${activeSection === 'game' ? 'active' : ''}`}
              onClick={() => handleNavClick('game')}
            >
              <div className="mnl-left">
                <Rocket size={18} />
                <span>2. Showcase Live Game Arena</span>
              </div>
              <span className="mnl-badge mnl-live">2 Game</span>
            </button>

            <button
              type="button"
              className={`mobile-nav-link ${activeSection === 'prompt' ? 'active' : ''}`}
              onClick={() => handleNavClick('prompt')}
            >
              <div className="mnl-left">
                <Sparkles size={18} />
                <span>3. AI Game Prompt Studio</span>
              </div>
              <span className="mnl-badge mnl-ai">AI v3.5</span>
            </button>

            <button
              type="button"
              className={`mobile-nav-link ${activeSection === 'lkpd' ? 'active' : ''}`}
              onClick={() => handleNavClick('lkpd')}
            >
              <div className="mnl-left">
                <GraduationCap size={18} />
                <span>4. AI LKPD Prompt Studio</span>
              </div>
              <span className="mnl-badge mnl-new">AI LKPD</span>
            </button>

            <button
              type="button"
              className={`mobile-nav-link ${activeSection === 'storyboard' ? 'active' : ''}`}
              onClick={() => handleNavClick('storyboard')}
            >
              <div className="mnl-left">
                <Film size={18} />
                <span>5. AI Storyboard Studio</span>
              </div>
              <span className="mnl-badge mnl-new">BARU</span>
            </button>

            <div className="mobile-dropdown-footer">
              <button
                type="button"
                className="mobile-theme-btn"
                onClick={onToggleTheme}
              >
                {theme === 'dark' ? (
                  <>
                    <Sun size={18} />
                    <span>Aktifkan Mode Terang</span>
                  </>
                ) : (
                  <>
                    <Moon size={18} />
                    <span>Aktifkan Mode Gelap</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
