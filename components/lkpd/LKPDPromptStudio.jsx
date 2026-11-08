'use client';

import React, { useState, useEffect, useCallback } from 'react';
import {
  Sparkles,
  BookOpen,
  GraduationCap,
  Layers,
  Palette,
  FileCheck2,
  ListOrdered,
  RotateCcw,
  ShieldCheck,
  Bookmark,
  CheckCircle
} from 'lucide-react';
import { LKPD_PRESETS } from '../../data/lkpd/presetTemplates';
import { generateMasterPrompt } from '../../utils/lkpd/promptGenerator';
import LearningIdentityForm from './LearningIdentityForm';
import WorksheetTypeSelector from './WorksheetTypeSelector';
import LearningModelSelector from './LearningModelSelector';
import ActivitySelector from './ActivitySelector';
import LearningFeatureSelector from './LearningFeatureSelector';
import VisualDesignStudio from './VisualDesignStudio';
import AssessmentConfigurator from './AssessmentConfigurator';
import OutputConfigurator from './OutputConfigurator';
import PromptPreview from './PromptPreview';

const NAV_STEPS = [
  {
    id: 'identity',
    icon: GraduationCap,
    title: '1. Identitas & Materi',
    desc: 'Judul, Kelas, Fase & Topik Pembelajaran',
    badge: 'LANGKAH 1',
    accent: 'blue',
  },
  {
    id: 'pedagogy',
    icon: BookOpen,
    title: '2. Jenis & Model',
    desc: 'Jenis LKPD & Model Pembelajaran AI',
    badge: 'LANGKAH 2',
    accent: 'emerald',
  },
  {
    id: 'activities',
    icon: Layers,
    title: '3. Aktivitas & Fitur',
    desc: 'Alur Aktivitas Utama & Fitur Khusus',
    badge: 'LANGKAH 3',
    accent: 'amber',
  },
  {
    id: 'visual',
    icon: Palette,
    title: '4. Desain Visual',
    desc: 'Tema Warna, Layout & Format Cetak',
    badge: 'LANGKAH 4',
    accent: 'purple',
  },
  {
    id: 'assessment',
    icon: FileCheck2,
    title: '5. Evaluasi & Output',
    desc: 'Format Soal, Rubrik & Luaran AI',
    badge: 'LANGKAH 5',
    accent: 'red',
  },
  {
    id: 'all',
    icon: ListOrdered,
    title: 'Semua Formulir',
    desc: 'Tampilkan Seluruh Form Sekaligus',
    badge: 'LENGKAP',
    accent: 'cyan',
  },
  {
    id: 'preview',
    icon: Sparkles,
    title: 'Live Master Prompt',
    desc: 'Lihat & Salin Master Prompt Hasil',
    badge: 'PROMPT',
    accent: 'emerald',
  },
];

export default function LKPDPromptStudio({ showToast }) {
  // Preset default: Informatika Kurikulum Merdeka
  const [activePresetId, setActivePresetId] = useState(LKPD_PRESETS[0].id);
  const [config, setConfig] = useState(LKPD_PRESETS[0].config);
  const [activeTab, setActiveTab] = useState('identity');

  // Master Prompt Text State
  const [promptText, setPromptText] = useState('');

  // Re-compile prompt when config changes
  useEffect(() => {
    const compiled = generateMasterPrompt(config);
    setPromptText(compiled);
  }, [config]);

  // Handler for partial config updates
  const handleConfigChange = useCallback((partial) => {
    setConfig((prev) => ({
      ...prev,
      ...partial
    }));
  }, []);

  // Handler for selecting a preset
  const handleSelectPreset = (preset) => {
    setActivePresetId(preset.id);
    setConfig({ ...preset.config });
    if (showToast) {
      showToast(`Preset "${preset.title}" berhasil dimuat.`, 'success');
    }
  };

  // Handler to reset form to initial default
  const handleReset = () => {
    const defaultPreset = LKPD_PRESETS[0];
    setActivePresetId(defaultPreset.id);
    setConfig({ ...defaultPreset.config });
    if (showToast) {
      showToast('Formulir berhasil direset ke konfigurasi bawaan.', 'info');
    }
  };

  // Handler to regenerate prompt manually
  const handleRegenerate = () => {
    const compiled = generateMasterPrompt(config);
    setPromptText(compiled);
    if (showToast) {
      showToast('Master Prompt berhasil dikompilasi ulang.', 'success');
    }
  };

  return (
    <section className="workspace-module active" id="sec-lkpd">
      <div className="module-card">
        {/* Module Header Bar */}
        <div className="module-header-row">
          <div className="mhr-info">
            <div className="module-category-pill pill-ai">
              <span className="cat-dot dot-ai"></span>
              <span>MODUL 04 • AI LKPD PROMPT ENGINE</span>
            </div>
            <h2 className="module-title">AI LKPD Prompt Studio</h2>
            <p className="module-subtitle">
              Transform your teaching materials into creative learning worksheets. Arsitektur generator prompt cerdas untuk merancang Lembar Kerja Peserta Didik (LKPD) komprehensif, adaptif, pedagogis, dan anti-broken layout untuk diolah di Gemini, ChatGPT, maupun Claude.
            </p>
          </div>

          <div className="mhr-actions">
            <button
              type="button"
              onClick={handleReset}
              className="btn-action-secondary"
              title="Reset semua formulir ke bawaan"
            >
              <RotateCcw size={15} />
              <span>Reset Form</span>
            </button>
            <button
              type="button"
              onClick={handleRegenerate}
              className="btn-action-primary btn-ai-gradient"
            >
              <Sparkles size={16} />
              <span>Kompilasi Ulang</span>
            </button>
          </div>
        </div>

        {/* 2-Column AI Workspace Layout */}
        <div className="ai-workspace-layout">
          {/* Left Panel: Navigation & Level/Step Selector */}
          <div className="ai-left-panel">
            <div className="ai-panel-header">
              <span className="aip-label">TAHAP KONFIGURASI LKPD</span>
            </div>

            <div className="ai-level-list">
              {NAV_STEPS.map((step) => {
                const Icon = step.icon;
                const isActive = activeTab === step.id;
                return (
                  <button
                    key={step.id}
                    type="button"
                    className={`ai-level-card ${isActive ? 'active' : ''} accent-${step.accent}`}
                    onClick={() => setActiveTab(step.id)}
                  >
                    <div className="alc-icon-wrap">
                      <Icon size={18} />
                    </div>
                    <div className="alc-info">
                      <span className="alc-title">{step.title}</span>
                      <span className="alc-desc">{step.desc}</span>
                    </div>
                    <span className={`alc-badge badge-${step.accent}`}>{step.badge}</span>
                  </button>
                );
              })}
            </div>

            {/* Guardrails Specification Box */}
            <div className="ai-guardrail-card">
              <div className="agc-header">
                <ShieldCheck size={16} className="text-blue" />
                <span className="agc-title">Standar Pedagogis LKPD</span>
              </div>
              <ul className="agc-list">
                <li>100% Format Kurikulum Merdeka</li>
                <li>Integrasi Model Pembelajaran (PBL/PjBL)</li>
                <li>Rubrik Evaluasi &amp; Kunci Jawaban</li>
                <li>Ergonomic Layout &amp; Anti-Broken</li>
              </ul>
            </div>
          </div>

          {/* Right Main Panel: Workspaces, Preset Selector & Form/Preview */}
          <div className="ai-main-panel">
            {/* Quick Subject Preset Selection Strip */}
            <div className="lkpd-preset-strip" style={{ marginBottom: '20px' }}>
              <div className="lkpd-preset-label-row">
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Bookmark size={15} color="#38BDF8" />
                  <span>Pilih Cepat Preset / Mata Pelajaran:</span>
                </span>
                <span style={{ opacity: 0.75 }}>
                  Klik preset untuk memuat konfigurasi lengkap
                </span>
              </div>

              <div className="lkpd-preset-scroll custom-scrollbar">
                {LKPD_PRESETS.map((p) => {
                  const isSelected = activePresetId === p.id;
                  const Icon = p.icon;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => handleSelectPreset(p)}
                      className={`lkpd-preset-btn ${isSelected ? 'active' : ''}`}
                    >
                      <Icon size={14} />
                      <span>{p.title}</span>
                      {isSelected && <CheckCircle size={14} />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Workspace Content: Split Form + Preview, or Dedicated Preview */}
            {activeTab === 'preview' ? (
              <div className="ai-code-viewer-box">
                <PromptPreview
                  promptText={promptText}
                  config={config}
                  onReset={handleReset}
                  onRegenerate={handleRegenerate}
                  onPromptChange={(text) => setPromptText(text)}
                  showToast={showToast}
                />
              </div>
            ) : (
              <div className="lkpd-studio-grid">
                {/* Form Column */}
                <div className="lkpd-form-column">
                  {(activeTab === 'identity' || activeTab === 'all') && (
                    <LearningIdentityForm config={config} onChange={handleConfigChange} showToast={showToast} />
                  )}

                  {(activeTab === 'pedagogy' || activeTab === 'all') && (
                    <>
                      <WorksheetTypeSelector
                        config={config}
                        selectedTypes={config.worksheetTypes || []}
                        onChange={handleConfigChange}
                      />
                      <LearningModelSelector
                        config={config}
                        selectedModel={config.learningModel || ''}
                        onChange={handleConfigChange}
                      />
                    </>
                  )}

                  {(activeTab === 'activities' || activeTab === 'all') && (
                    <>
                      <ActivitySelector
                        config={config}
                        selectedActivities={config.activities || []}
                        onChange={handleConfigChange}
                      />
                      <LearningFeatureSelector
                        config={config}
                        selectedFeatures={config.features || []}
                        onChange={handleConfigChange}
                      />
                    </>
                  )}

                  {(activeTab === 'visual' || activeTab === 'all') && (
                    <VisualDesignStudio
                      config={config}
                      selectedStyle={config.designStyle}
                      selectedPalette={config.colorPalette}
                      selectedIllustrations={config.illustrations || []}
                      onChange={handleConfigChange}
                    />
                  )}

                  {(activeTab === 'assessment' || activeTab === 'all') && (
                    <>
                      <AssessmentConfigurator config={config} onChange={handleConfigChange} />
                      <OutputConfigurator config={config} onChange={handleConfigChange} />
                    </>
                  )}
                </div>

                {/* Live Master Prompt Preview Column */}
                <div className="lkpd-preview-column">
                  <PromptPreview
                    promptText={promptText}
                    config={config}
                    onReset={handleReset}
                    onRegenerate={handleRegenerate}
                    onPromptChange={(text) => setPromptText(text)}
                    showToast={showToast}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
