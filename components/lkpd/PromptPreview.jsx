'use client';

import React, { useState, useMemo } from 'react';
import {
  Sparkles,
  Gauge,
  Type,
  FileCheck,
  Maximize2,
  Minimize2,
  Copy,
  Check,
  Terminal,
  ExternalLink
} from 'lucide-react';
import PromptActionToolbar from './PromptActionToolbar';
import { calculatePromptMetrics } from '../../utils/lkpd/promptUtils';

export default function PromptPreview({
  promptText,
  config,
  onReset,
  onRegenerate,
  onPromptChange,
  showToast
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const metrics = useMemo(() => {
    return calculatePromptMetrics(promptText, config);
  }, [promptText, config]);

  // Highlight markdown sections cleanly
  const renderHighlightedContent = (text) => {
    if (!text) {
      return (
        <div className="py-20 text-center text-slate-500">
          <Terminal className="w-8 h-8 mx-auto mb-2 opacity-40" />
          <p className="text-sm font-medium">Prompt belum dikompilasi.</p>
          <p className="text-xs">Isi formulir identitas dan konfigurasi untuk menghasilkan prompt.</p>
        </div>
      );
    }

    const lines = text.split('\n');
    return lines.map((line, idx) => {
      // Header Level 2/3
      if (line.startsWith('## ') || line.startsWith('### ')) {
        return (
          <div
            key={idx}
            className="text-cyan-400 font-bold text-xs sm:text-sm mt-4 mb-1.5 pt-2 border-t border-cyan-500/20 first:mt-0 first:pt-0 first:border-0"
          >
            {line}
          </div>
        );
      }
      // Header Level 1
      if (line.startsWith('# ')) {
        return (
          <div key={idx} className="text-white font-extrabold text-sm sm:text-base mb-2 text-cyan-300">
            {line}
          </div>
        );
      }
      // Bullet list items
      if (line.startsWith('- ') || line.startsWith('* ')) {
        const parts = line.substring(2).split('**');
        return (
          <div key={idx} className="flex items-start gap-1.5 my-1 text-slate-300 text-xs leading-relaxed pl-2">
            <span className="text-cyan-400/80 font-bold">•</span>
            <div>
              {parts.map((p, pIdx) =>
                pIdx % 2 === 1 ? (
                  <strong key={pIdx} className="text-white font-semibold">
                    {p}
                  </strong>
                ) : (
                  <span key={pIdx}>{p}</span>
                )
              )}
            </div>
          </div>
        );
      }
      // Numbered items
      if (/^\d+\.\s/.test(line)) {
        return (
          <div key={idx} className="my-1 text-slate-300 text-xs leading-relaxed pl-3 font-mono">
            {line}
          </div>
        );
      }
      // Empty line
      if (!line.trim()) {
        return <div key={idx} className="h-2" />;
      }
      // Normal line
      return (
        <div key={idx} className="text-slate-300 text-xs leading-relaxed">
          {line}
        </div>
      );
    });
  };

  return (
    <div className={`lkpd-preview-dock ${isFullscreen ? 'fullscreen' : ''}`}>
      {/* Top Header / Metrics Bar */}
      <div className="pp-header">
        <div className="pp-brand">
          <div className="pp-icon-box">
            <Sparkles size={18} />
          </div>
          <div>
            <div className="pp-title">
              <span>Live Master Prompt LKPD</span>
              <span className="pp-version-badge">v2.0 Real-time</span>
            </div>
            <p className="pp-sub">
              Siap di-paste ke Gemini 2.5, ChatGPT Plus (GPT-4o), atau Claude 3.5 Sonnet.
            </p>
          </div>
        </div>

        {/* Live Metrics Pill Counters */}
        <div className="pp-metrics">
          <div className="pp-metric-pill">
            <Type size={14} style={{ color: '#38BDF8' }} />
            <span>{(metrics?.characters ?? metrics?.chars ?? 0).toLocaleString()} chars</span>
          </div>
          <div className="pp-metric-pill">
            <FileCheck size={14} style={{ color: '#60A5FA' }} />
            <span>{(metrics?.words ?? 0).toLocaleString()} kata</span>
          </div>
          <div className="pp-metric-pill pill-comp">
            <Gauge size={14} />
            <span>{metrics?.completeness ?? 0}% Lengkap</span>
          </div>
        </div>
      </div>

      {/* Completeness Bar */}
      <div className="pp-progress-track">
        <div
          className="pp-progress-fill"
          style={{ width: `${Math.min(metrics?.completeness ?? 0, 100)}%` }}
        />
      </div>

      {/* Main Preview / Editor Area */}
      <div className="pp-viewport custom-scrollbar">
        {isEditing ? (
          <textarea
            value={promptText}
            onChange={(e) => onPromptChange && onPromptChange(e.target.value)}
            className="pp-editor-textarea custom-scrollbar"
            placeholder="Tulis atau edit master prompt secara manual..."
          />
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {renderHighlightedContent(promptText)}
          </div>
        )}
      </div>

      {/* Bottom Action Toolbar */}
      <div className="pp-toolbar-bottom">
        <PromptActionToolbar
          promptText={promptText}
          onReset={onReset}
          onRegenerate={onRegenerate}
          isEditing={isEditing}
          onToggleEdit={() => setIsEditing(!isEditing)}
          isFullscreen={isFullscreen}
          onToggleFullscreen={() => setIsFullscreen(!isFullscreen)}
          showToast={showToast}
          subject={config?.subject}
        />
      </div>
    </div>
  );
}
