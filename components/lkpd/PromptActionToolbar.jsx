'use client';

import React, { useState } from 'react';
import {
  Copy,
  Check,
  Download,
  FileText,
  FileCode,
  RotateCcw,
  Sparkles,
  Maximize2,
  Minimize2,
  Edit3
} from 'lucide-react';
import { copyPromptToClipboard, downloadPromptFile } from '../../utils/lkpd/promptUtils';

export default function PromptActionToolbar({
  promptText,
  onReset,
  onRegenerate,
  isEditing,
  onToggleEdit,
  isFullscreen,
  onToggleFullscreen,
  showToast,
  subject = 'Informatika'
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!promptText) return;
    const ok = await copyPromptToClipboard(promptText);
    if (ok) {
      setCopied(true);
      showToast && showToast('Prompt Master LKPD berhasil disalin ke clipboard!', 'success');
      setTimeout(() => setCopied(false), 2500);
    } else {
      showToast && showToast('Gagal menyalin prompt. Silakan salin manual.', 'error');
    }
  };

  const handleDownloadTxt = () => {
    if (!promptText) return;
    const sanitized = (subject || 'LKPD').replace(/[^a-zA-Z0-9]/g, '_');
    downloadPromptFile(promptText, `Master_Prompt_LKPD_${sanitized}.txt`, 'text/plain;charset=utf-8');
    showToast && showToast('File prompt .txt berhasil diunduh.', 'success');
  };

  const handleDownloadMd = () => {
    if (!promptText) return;
    const sanitized = (subject || 'LKPD').replace(/[^a-zA-Z0-9]/g, '_');
    downloadPromptFile(promptText, `Master_Prompt_LKPD_${sanitized}.md`, 'text/markdown;charset=utf-8');
    showToast && showToast('File prompt .md berhasil diunduh.', 'success');
  };

  return (
    <div className="pat-container">
      {/* Tombol Utama: Copy */}
      <div className="pat-group">
        <button
          type="button"
          onClick={handleCopy}
          className={`pat-btn-copy ${copied ? 'copied' : ''}`}
        >
          {copied ? <Check size={15} /> : <Copy size={15} />}
          <span>{copied ? 'Tersalin ke Clipboard!' : 'Salin Master Prompt'}</span>
        </button>

        {/* Regenerate */}
        <button
          type="button"
          onClick={onRegenerate}
          title="Kompilasi ulang prompt"
          className="pat-btn-sec"
        >
          <Sparkles size={14} style={{ color: '#38BDF8' }} />
          <span>Refresh</span>
        </button>

        {/* Edit Manual Toggle */}
        <button
          type="button"
          onClick={onToggleEdit}
          title="Edit prompt langsung"
          className={`pat-btn-sec ${isEditing ? 'active' : ''}`}
        >
          <Edit3 size={14} />
          <span>{isEditing ? 'Selesai Edit' : 'Edit Manual'}</span>
        </button>
      </div>

      {/* Aksi Tambahan: Download & Window */}
      <div className="pat-group">
        {/* Unduh TXT */}
        <button
          type="button"
          onClick={handleDownloadTxt}
          title="Unduh format TXT murni"
          className="pat-btn-sec"
        >
          <FileText size={14} style={{ color: '#94A3B8' }} />
          <span>.TXT</span>
        </button>

        {/* Unduh MD */}
        <button
          type="button"
          onClick={handleDownloadMd}
          title="Unduh format Markdown"
          className="pat-btn-sec"
        >
          <FileCode size={14} style={{ color: '#94A3B8' }} />
          <span>.MD</span>
        </button>

        {/* Fullscreen Toggle */}
        <button
          type="button"
          onClick={onToggleFullscreen}
          title={isFullscreen ? 'Keluar Fullscreen' : 'Mode Layar Penuh'}
          className="pat-btn-sec"
        >
          {isFullscreen ? <Minimize2 size={15} style={{ color: '#38BDF8' }} /> : <Maximize2 size={15} />}
        </button>

        {/* Reset */}
        <button
          type="button"
          onClick={onReset}
          title="Reset formulir ke bawaan"
          className="pat-btn-danger"
        >
          <RotateCcw size={15} />
        </button>
      </div>
    </div>
  );
}
