'use client';

import React, { useState } from 'react';
import { PROMPT_LEVELS } from '../data/portalData';
import { Sparkles, Copy, Check, ExternalLink, Terminal, Flame, Zap, Sprout, Settings, ShieldCheck, Cpu } from 'lucide-react';

export default function PromptGenerator({ showToast }) {
  const [activeSubtab, setActiveSubtab] = useState('generator');
  const [copiedKey, setCopiedKey] = useState(null);

  const copySnippet = (text, levelKey, levelTitle) => {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(text).then(() => {
      setCopiedKey(levelKey);
      showToast(`📋 ${levelTitle} berhasil disalin ke clipboard!`);
      setTimeout(() => setCopiedKey(null), 2500);
    }).catch(() => {
      showToast('⚠️ Gagal menyalin ke clipboard.');
    });
  };

  const levels = [
    {
      id: 'generator',
      icon: Settings,
      title: 'Interactive Studio v3.5',
      desc: 'Form Generator Mandiri Dinamis',
      badge: 'BUILDER',
      accent: 'blue',
      iframeUrl: '/master_prompt_generator.html',
    },
    {
      id: 'spa_game',
      icon: Cpu,
      title: 'Prompt Generator SPA Game',
      desc: 'Khusus Single Web Page Application Game v4.0',
      badge: 'SPA GAME',
      accent: 'purple',
      iframeUrl: '/game_prompt_architect.html',
    },
    {
      id: 'advance',
      icon: Flame,
      title: 'Tingkat 3: Advance (Master)',
      desc: 'Instruksi Lengkap Zero-Defect & Combat',
      badge: 'MASTER',
      accent: 'red',
      content: PROMPT_LEVELS.advance,
    },
    {
      id: 'sedang',
      icon: Zap,
      title: 'Tingkat 2: Sedang (Moduler)',
      desc: 'Struktur Moduler 2–4 Tim Simultan',
      badge: 'MODULER',
      accent: 'amber',
      content: PROMPT_LEVELS.sedang,
    },
    {
      id: 'mudah',
      icon: Sprout,
      title: 'Tingkat 1: Mudah (Ringkas)',
      desc: 'Cepat & Praktis untuk Guru Pemula',
      badge: 'QUICK',
      accent: 'emerald',
      content: PROMPT_LEVELS.mudah,
    },
  ];

  const currentLevel = levels.find((l) => l.id === activeSubtab) || levels[0];

  return (
    <section className="workspace-module active" id="sec-prompt">
      <div className="module-card">
        {/* Module Header Bar */}
        <div className="module-header-row">
          <div className="mhr-info">
            <div className="module-category-pill pill-ai">
              <span className="cat-dot dot-ai"></span>
              <span>MODUL 03 • AI ANTI-BROKEN CODE ENGINE</span>
            </div>
            <h2 className="module-title">AI Game Prompt Studio</h2>
            <p className="module-subtitle">
              Transform your learning ideas into interactive educational games. Koleksi rekayasa prompt presisi tinggi &amp; Single Web Page Application untuk ChatGPT, Claude, dan Gemini guna merakit game HTML5 standalone tanpa kegagalan sintaksis.
            </p>
          </div>

          <div className="mhr-actions">
            <a
              href="/game_prompt_architect.html"
              target="_blank"
              rel="noreferrer"
              className="btn-action-primary btn-ai-gradient"
              title="Buka Generator Prompt Khusus SPA Game di Tab Baru"
            >
              <ExternalLink size={16} />
              <span>Buka SPA Game Generator v4.0</span>
            </a>
          </div>
        </div>

        {/* 2-Column AI Workspace Layout */}
        <div className="ai-workspace-layout">
          {/* Left Panel: Navigation & Level Selector */}
          <div className="ai-left-panel">
            <div className="ai-panel-header">
              <span className="aip-label">LEVEL PROMPT &amp; GENERATOR</span>
            </div>

            <div className="ai-level-list">
              {levels.map((lvl) => {
                const Icon = lvl.icon;
                const isActive = activeSubtab === lvl.id;
                return (
                  <button
                    key={lvl.id}
                    type="button"
                    className={`ai-level-card ${isActive ? 'active' : ''} accent-${lvl.accent}`}
                    onClick={() => setActiveSubtab(lvl.id)}
                  >
                    <div className="alc-icon-wrap">
                      <Icon size={18} />
                    </div>
                    <div className="alc-info">
                      <span className="alc-title">{lvl.title}</span>
                      <span className="alc-desc">{lvl.desc}</span>
                    </div>
                    <span className={`alc-badge badge-${lvl.accent}`}>{lvl.badge}</span>
                  </button>
                );
              })}
            </div>

            {/* Guardrails Specification Box */}
            <div className="ai-guardrail-card">
              <div className="agc-header">
                <ShieldCheck size={16} className="text-blue" />
                <span className="agc-title">Standar Anti-Broken Code</span>
              </div>
              <ul className="agc-list">
                <li>100% Single-File HTML + CSS + JS</li>
                <li>Zero Dependensi Eksternal (No CDN)</li>
                <li>Procedural Web Audio API Sound</li>
                <li>Ergonomic Touch Targets (64px+)</li>
              </ul>
            </div>
          </div>

          {/* Right Main Panel: Active Content / Code Viewer / Builder */}
          <div className="ai-main-panel">
            {currentLevel.iframeUrl ? (
              /* Subpanel 1: Interactive Single Web Page Application Frame */
              <div className="ai-interactive-frame-box">
                <div className="aif-toolbar">
                  <div className="aif-left">
                    <Terminal size={16} />
                    <span className="aif-title">{currentLevel.title.toUpperCase()} — SINGLE WEB PAGE APP</span>
                  </div>
                  <div className="aif-right">
                    <a
                      href={currentLevel.iframeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="aif-external-link"
                    >
                      <span>Buka Halaman Mandiri</span>
                      <ExternalLink size={13} />
                    </a>
                  </div>
                </div>

                <div className="aif-viewport">
                  <iframe
                    src={currentLevel.iframeUrl}
                    loading="lazy"
                    title={currentLevel.title}
                    className="generator-iframe"
                  />
                </div>
              </div>
            ) : (
              /* Subpanel 2: Prompt Code Viewer */
              <div className="ai-code-viewer-box">
                <div className="acv-toolbar">
                  <div className="acv-left">
                    <span className="acv-chip">{currentLevel.title}</span>
                    <span className="acv-lang">PLAINTEXT / SYSTEM PROMPT</span>
                  </div>
                  <div className="acv-right">
                    <button
                      type="button"
                      className="acv-copy-btn"
                      onClick={() => copySnippet(currentLevel.content, currentLevel.id, currentLevel.title)}
                    >
                      {copiedKey === currentLevel.id ? (
                        <>
                          <Check size={15} />
                          <span>Tersalin ke Clipboard!</span>
                        </>
                      ) : (
                        <>
                          <Copy size={15} />
                          <span>Salin Seluruh Prompt</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div className="acv-body">
                  <pre className="acv-pre">
                    <code>{currentLevel.content}</code>
                  </pre>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
