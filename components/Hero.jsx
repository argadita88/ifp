'use client';

import React from 'react';
import { ArrowRight, Play, Presentation, Rocket, Sparkles, Shield, Cpu, Users } from 'lucide-react';

export default function Hero({ onSwitchSection }) {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Left Column: Editorial Headline & Actions */}
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="eyebrow-dot"></span>
            <span>Platform Gim Interaktif Edukatif • Kurikulum Merdeka Fase D</span>
          </div>

          <h1 className="hero-title">
            Belajar Informatika.<br />
            <span className="hero-title-accent">Explore. Play. Create.</span>
          </h1>

          <p className="hero-description">
            Ekosistem pembelajaran interaktif yang menggabungkan presentasi pedagogis, game edukatif, dan kecerdasan buatan untuk menciptakan pengalaman belajar Informatika yang lebih menyenangkan.
          </p>

          <div className="hero-cta-group">
            <button
              type="button"
              className="btn-hero-primary"
              onClick={() => onSwitchSection('ppt')}
            >
              <span>Mulai Pembelajaran</span>
              <ArrowRight size={18} />
            </button>

            <button
              type="button"
              className="btn-hero-secondary"
              onClick={() => onSwitchSection('game')}
            >
              <Play size={16} fill="currentColor" />
              <span>Jelajahi Live Game</span>
            </button>

            <button
              type="button"
              className="btn-hero-secondary"
              onClick={() => onSwitchSection('lkpd')}
            >
              <Sparkles size={16} className="text-cyan-400" />
              <span>AI LKPD Studio</span>
            </button>
          </div>

          {/* Key Metrics / Platform Pillars in Clean Editorial Typography */}
          <div className="hero-metrics-bar">
            <div className="metric-item">
              <span className="metric-number">12</span>
              <div className="metric-label">
                <strong>Interactive Slides</strong>
                <span>Pedagogis MDA &amp; Teori SDT</span>
              </div>
            </div>

            <div className="metric-divider"></div>

            <div className="metric-item">
              <span className="metric-number">2</span>
              <div className="metric-label">
                <strong>Educational Games</strong>
                <span>Multi-Touch Simultan 2–4 Tim</span>
              </div>
            </div>

            <div className="metric-divider"></div>

            <div className="metric-item">
              <span className="metric-number">LKPD</span>
              <div className="metric-label">
                <strong>AI Studio v2.0</strong>
                <span>Universal SD–SMA Semua Mapel</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Visual Composition (Futuristic Tech Workspace) */}
        <div className="hero-visual-col">
          <div className="hero-showcase-frame">
            {/* Ambient Background Glow inside frame */}
            <div className="frame-ambient-glow"></div>

            {/* Top Interactive Glass Window Chrome */}
            <div className="frame-window-bar">
              <div className="window-dots">
                <span className="wdot dot-red"></span>
                <span className="wdot dot-yellow"></span>
                <span className="wdot dot-green"></span>
              </div>
              <div className="window-address">
                <span className="window-url">ifp.gim-interaktif.smp/arena-4k</span>
              </div>
              <span className="window-tag">60 FPS • LOW LATENCY</span>
            </div>

            {/* Showcase Visual Content: Interactive Game & Presentation Preview */}
            <div className="frame-body">
              <div className="showcase-radar-grid">
                <div className="radar-circle rc-1"></div>
                <div className="radar-circle rc-2"></div>
                <div className="radar-sweep"></div>

                {/* Team Tactical Nodes */}
                <div className="tactical-node node-t1">
                  <span className="t-dot t-dot-blue"></span>
                  <span className="t-label">Tim 1: Phoenix (980 XP)</span>
                </div>
                <div className="tactical-node node-t2">
                  <span className="t-dot t-dot-cyan"></span>
                  <span className="t-label">Tim 2: Striker (1,140 XP)</span>
                </div>
                <div className="tactical-node node-t3">
                  <span className="t-dot t-dot-emerald"></span>
                  <span className="t-label">Tim 3: Titan (890 XP)</span>
                </div>
                <div className="tactical-node node-t4">
                  <span className="t-dot t-dot-amber"></span>
                  <span className="t-label">Tim 4: Falcon (1,050 XP)</span>
                </div>

                {/* Center Core HUD */}
                <div className="radar-core-hub">
                  <div className="core-icon-ring">
                    <Rocket size={24} className="core-rocket" />
                  </div>
                  <span className="core-title">AEROSTRIKE &amp; DEFENSE</span>
                  <span className="core-sub">Multi-Touch IFP 4K Ready</span>
                </div>
              </div>

              {/* Overlaid Floating Feature Cards with Linear / Apple Glass Feel */}
              <div className="showcase-floating-card card-slide-preview" onClick={() => onSwitchSection('ppt')}>
                <div className="sfc-icon bg-blue">
                  <Presentation size={18} />
                </div>
                <div className="sfc-text">
                  <span className="sfc-title">Slide 01: Pengantar Gim Interaktif</span>
                  <span className="sfc-sub">Berpikir Komputasional Fase D</span>
                </div>
                <ArrowRight size={14} className="sfc-arrow" />
              </div>

              <div className="showcase-floating-card card-ai-preview" onClick={() => onSwitchSection('prompt')}>
                <div className="sfc-icon bg-violet">
                  <Sparkles size={18} />
                </div>
                <div className="sfc-text">
                  <span className="sfc-title">AI Engine: Zero-Defect Code</span>
                  <span className="sfc-sub">100% Standalone Single-File</span>
                </div>
                <ArrowRight size={14} className="sfc-arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
