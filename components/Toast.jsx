'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Toast({ message, visible }) {
  return (
    <div className={`toast-pill ${visible ? 'show' : ''}`} role="alert" aria-live="assertive">
      <div className="toast-icon-wrap">
        <Sparkles size={15} />
      </div>
      <span className="toast-text">{message}</span>
    </div>
  );
}
