'use client';

import React, { useState, useRef, useEffect } from 'react';
import { GAME_DEMOS } from '../data/portalData';
import { Rocket, Shield, Download, ExternalLink, RotateCcw, Maximize2, Minimize2, Play, Users, BookOpen, Layers, Zap, Compass, Key } from 'lucide-react';

export default function GameDemo({ showToast }) {
  const [activeGameKey, setActiveGameKey] = useState('space');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const iframeRef = useRef(null);
  const containerRef = useRef(null);

  const currentGame = GAME_DEMOS[activeGameKey] || GAME_DEMOS.space;

  const reloadGame = () => {
    if (iframeRef.current) {
      iframeRef.current.src = currentGame.file;
      showToast(`🔄 Game ${currentGame.title} dimulai ulang!`);
    }
  };

  const handleSwitchGame = (key) => {
    setActiveGameKey(key);
    showToast(`🎮 Beralih ke ${GAME_DEMOS[key].title}`);
  };

  const toggleFullscreen = () => {
    const elem = containerRef.current;
    if (!elem) return;
    if (!document.fullscreenElement) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
      }
      setIsFullscreen(true);
      showToast('🖥️ Console Game Mode Layar Penuh IFP!');
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  return (
    <section className="workspace-module active" id="sec-game">
      <div className="module-card">
        {/* Module Header Bar */}
        <div className="module-header-row">
          <div className="mhr-info">
            <div className="module-category-pill pill-game">
              <span className="cat-dot dot-live"></span>
              <span>MODUL 02 • MULTI-TOUCH SIMULTAN &amp; 3D MULTIPLAYER ARENA</span>
            </div>
            <h2 className="module-title">Educational Gaming Arena</h2>
            <p className="module-subtitle">
              Learn through challenges. Play through imagination. Game edukatif berbasis HTML5 Canvas, Three.js 3D &amp; Web Audio API untuk layar sentuh besar IFP 4K.
            </p>
          </div>

          <div className="mhr-actions">
            <a
              href={currentGame.file}
              download
              className="btn-action-outline"
            >
              <Download size={16} />
              <span>Unduh File (.html)</span>
            </a>
            <a
              href={currentGame.file}
              target="_blank"
              rel="noreferrer"
              className="btn-action-primary"
            >
              <ExternalLink size={16} />
              <span>Buka Tab Baru</span>
            </a>
          </div>
        </div>

        {/* 3 Large Showcase Cards for Games */}
        <div className="game-showcase-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {/* Card 1: Aerostrike Space Combat */}
          <div
            className={`game-hero-card card-aerostrike ${activeGameKey === 'space' ? 'active' : ''}`}
            onClick={() => handleSwitchGame('space')}
          >
            <div className="ghc-banner banner-space">
              <div className="banner-badge-group">
                <span className="ghc-tag">VECTOR DOGFIGHT</span>
                <span className="ghc-team-tag">2–4 TIM SIMULTAN</span>
              </div>
              <div className="banner-icon-aura">
                <Rocket size={38} className="aura-icon" />
              </div>
              <div className="banner-glow-effect"></div>
            </div>

            <div className="ghc-body">
              <div className="ghc-title-row">
                <h3 className="ghc-title">Aerostrike: Galactic Dogfight</h3>
                <span className={`ghc-status-chip ${activeGameKey === 'space' ? 'chip-active' : ''}`}>
                  {activeGameKey === 'space' ? '🟢 AKTIF' : '▶ MAINKAN'}
                </span>
              </div>

              <p className="ghc-desc">
                Arcade Space Combat &amp; Dogfight Quiz Multi-Touch Simultan 2–4 Tim. Setiap jawaban kuis benar mengisi energi Hyper-Overdrive bersama.
              </p>

              <div className="ghc-specs-row">
                <span className="ghc-spec-pill">
                  <BookOpen size={13} /> Informatika SMP (Fase D)
                </span>
                <span className="ghc-spec-pill">
                  <Zap size={13} /> 60 FPS Native Canvas
                </span>
                <span className="ghc-spec-pill">
                  <Users size={13} /> 4 Skuadron
                </span>
              </div>

              <button
                type="button"
                className={`ghc-play-btn ${activeGameKey === 'space' ? 'btn-active' : ''}`}
                onClick={(e) => { e.stopPropagation(); handleSwitchGame('space'); }}
              >
                <Play size={16} fill="currentColor" />
                <span>{activeGameKey === 'space' ? 'Sedang Dimainkan' : 'Pilih & Mainkan Game'}</span>
              </button>
            </div>
          </div>

          {/* Card 2: Zombie Outpost Zero */}
          <div
            className={`game-hero-card card-zombie ${activeGameKey === 'zombie' ? 'active' : ''}`}
            onClick={() => handleSwitchGame('zombie')}
          >
            <div className="ghc-banner banner-zombie">
              <div className="banner-badge-group">
                <span className="ghc-tag">BUNKER DEFENSE</span>
                <span className="ghc-team-tag">TACTICAL CO-OP</span>
              </div>
              <div className="banner-icon-aura">
                <Shield size={38} className="aura-icon" />
              </div>
              <div className="banner-glow-effect"></div>
            </div>

            <div className="ghc-body">
              <div className="ghc-title-row">
                <h3 className="ghc-title">Outpost Zero: Zombie Siege</h3>
                <span className={`ghc-status-chip ${activeGameKey === 'zombie' ? 'chip-active' : ''}`}>
                  {activeGameKey === 'zombie' ? '🟢 AKTIF' : '▶ MAINKAN'}
                </span>
              </div>

              <p className="ghc-desc">
                Benteng pertahanan militer artileri melawan gelombang mutan. Pertahankan bunker dengan menjawab pertanyaan algoritma dan berpikir komputasional.
              </p>

              <div className="ghc-specs-row">
                <span className="ghc-spec-pill">
                  <BookOpen size={13} /> Kurikulum Merdeka
                </span>
                <span className="ghc-spec-pill">
                  <Zap size={13} /> Pagar Listrik &amp; Salvo
                </span>
                <span className="ghc-spec-pill">
                  <Users size={13} /> Co-op Health Bar
                </span>
              </div>

              <button
                type="button"
                className={`ghc-play-btn ${activeGameKey === 'zombie' ? 'btn-active' : ''}`}
                onClick={(e) => { e.stopPropagation(); handleSwitchGame('zombie'); }}
              >
                <Play size={16} fill="currentColor" />
                <span>{activeGameKey === 'zombie' ? 'Sedang Dimainkan' : 'Pilih & Mainkan Game'}</span>
              </button>
            </div>
          </div>

          {/* Card 3: 3D Harta Karun Berpikir Komputasional */}
          <div
            className={`game-hero-card card-aerostrike ${activeGameKey === 'treasure' ? 'active' : ''}`}
            onClick={() => handleSwitchGame('treasure')}
            style={{ borderColor: activeGameKey === 'treasure' ? '#F59E0B' : undefined }}
          >
            <div className="ghc-banner" style={{ background: 'linear-gradient(135deg, #78350F 0%, #D97706 100%)' }}>
              <div className="banner-badge-group">
                <span className="ghc-tag" style={{ background: '#FEF3C7', color: '#92400E' }}>3D LABIRIN TEMPLE</span>
                <span className="ghc-team-tag" style={{ background: '#FFFBEB', color: '#B45309' }}>2–4 MULTIPLAYER</span>
              </div>
              <div className="banner-icon-aura">
                <Compass size={38} className="aura-icon" style={{ color: '#FCD34D' }} />
              </div>
              <div className="banner-glow-effect"></div>
            </div>

            <div className="ghc-body">
              <div className="ghc-title-row">
                <h3 className="ghc-title">Harta Karun Komputasi 3D</h3>
                <span className={`ghc-status-chip ${activeGameKey === 'treasure' ? 'chip-active' : ''}`} style={activeGameKey === 'treasure' ? { background: '#F59E0B', color: '#000' } : {}}>
                  {activeGameKey === 'treasure' ? '🟢 AKTIF' : '▶ MAINKAN'}
                </span>
              </div>

              <p className="ghc-desc">
                Petualangan Labirin 3D Low-Poly Real-Time Multiplayer. Telusuri kuil kuno, buka pintu 5 Pilar Komputasi, dan raih Peti Harta Karun Master Algorithm.
              </p>

              <div className="ghc-specs-row">
                <span className="ghc-spec-pill">
                  <BookOpen size={13} /> 5 Pilar Komputasional
                </span>
                <span className="ghc-spec-pill">
                  <Zap size={13} /> Three.js 3D Low-Poly
                </span>
                <span className="ghc-spec-pill">
                  <Key size={13} /> Token Ruangan
                </span>
              </div>

              <button
                type="button"
                className={`ghc-play-btn ${activeGameKey === 'treasure' ? 'btn-active' : ''}`}
                onClick={(e) => { e.stopPropagation(); handleSwitchGame('treasure'); }}
                style={activeGameKey === 'treasure' ? { background: 'linear-gradient(135deg, #D97706 0%, #F59E0B 100%)' } : {}}
              >
                <Play size={16} fill="currentColor" />
                <span>{activeGameKey === 'treasure' ? 'Sedang Dimainkan' : 'Pilih & Mainkan Game 3D'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Embedded Console Stage Viewport */}
        <div className="gaming-console-container" ref={containerRef}>
          {/* Top Console Chrome */}
          <div className="console-chrome-bar">
            <div className="chrome-left">
              <div className="window-dots">
                <span className="wdot dot-red"></span>
                <span className="wdot dot-yellow"></span>
                <span className="wdot dot-green"></span>
              </div>
              <span className="chrome-game-title">
                {currentGame.title} — CONSOLE IFP 4K STANDALONE
              </span>
            </div>

            <div className="chrome-right">
              <span className="chrome-fps-chip">
                <span className="fps-indicator"></span> 60 FPS • THREE.JS 3D / CANVAS
              </span>
              <button
                type="button"
                className="chrome-btn"
                onClick={reloadGame}
                title="Mulai Ulang Game"
              >
                <RotateCcw size={14} />
                <span>Mulai Ulang</span>
              </button>
              <button
                type="button"
                className="chrome-btn chrome-btn-primary"
                onClick={toggleFullscreen}
                title="Layar Penuh IFP"
              >
                {isFullscreen ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
                <span>{isFullscreen ? 'Keluar Fullscreen' : 'Fullscreen IFP'}</span>
              </button>
            </div>
          </div>

          {/* Console Iframe Viewport */}
          <div className="console-viewport">
            <iframe
              ref={iframeRef}
              src={currentGame.file}
              loading="lazy"
              title={currentGame.title}
              className="console-iframe"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
