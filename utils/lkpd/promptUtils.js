/**
 * PROMPT UTILITIES & HELPER FUNCTIONS
 */

export function calculatePromptMetrics(promptText, config = {}) {
  const cfg = config || {};
  const text = typeof promptText === 'string' ? promptText : '';
  const chars = text.length;
  const words = text.trim() ? text.trim().split(/\s+/).filter(Boolean).length : 0;

  // Count active selections
  let activeFeaturesCount = 0;
  if (Array.isArray(cfg.worksheetTypes)) activeFeaturesCount += cfg.worksheetTypes.length;
  if (Array.isArray(cfg.activities)) activeFeaturesCount += cfg.activities.length;
  if (Array.isArray(cfg.features)) activeFeaturesCount += cfg.features.length;
  if (Array.isArray(cfg.illustrations)) activeFeaturesCount += cfg.illustrations.length;
  if (Array.isArray(cfg.assessmentTypes)) activeFeaturesCount += cfg.assessmentTypes.length;

  // Calculate completeness percentage (0 - 100%)
  let score = 0;
  if (cfg.subject && cfg.subject.trim()) score += 15;
  if (cfg.topic && cfg.topic.trim()) score += 15;
  if (cfg.tp && cfg.tp.trim()) score += 15;
  if (Array.isArray(cfg.worksheetTypes) && cfg.worksheetTypes.length > 0) score += 10;
  if (cfg.learningModel) score += 10;
  if (Array.isArray(cfg.activities) && cfg.activities.length > 0) score += 10;
  if (Array.isArray(cfg.features) && cfg.features.length > 0) score += 10;
  if (cfg.designStyle) score += 5;
  if (Array.isArray(cfg.assessmentTypes) && cfg.assessmentTypes.length > 0) score += 10;

  const completeness = Math.min(100, Math.max(0, score));

  return {
    chars,
    characters: chars,
    words,
    activeFeaturesCount,
    completeness
  };
}

export function downloadPromptFile(content, filename, extension = 'md') {
  if (typeof window === 'undefined') return;

  const mimeType = extension === 'md' ? 'text/markdown;charset=utf-8' : 'text/plain;charset=utf-8';
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${filename}.${extension}`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function copyPromptToClipboard(text, onSuccess, onError) {
  if (typeof navigator === 'undefined' || !navigator.clipboard) {
    if (onError) onError('Clipboard API tidak didukung pada browser ini.');
    return;
  }
  navigator.clipboard.writeText(text)
    .then(() => {
      if (onSuccess) onSuccess();
    })
    .catch((err) => {
      if (onError) onError(err);
    });
}
