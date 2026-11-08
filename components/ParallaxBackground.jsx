'use client';

import React, { useEffect, useRef } from 'react';

export default function ParallaxBackground({ theme = 'light' }) {
  const bgRef = useRef(null);

  useEffect(() => {
    const wrapper = bgRef.current;
    if (!wrapper) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const layers = wrapper.querySelectorAll('.ambient-orb');
    if (!layers.length) return;

    let mouseX = 0, mouseY = 0;
    let targetMouseX = 0, targetMouseY = 0;
    let animId;

    const render = () => {
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;

      layers.forEach((layer, i) => {
        const factor = (i + 1) * 16;
        const xOffset = mouseX * factor;
        const yOffset = mouseY * factor;
        layer.style.transform = `translate3d(${xOffset.toFixed(1)}px, ${yOffset.toFixed(1)}px, 0)`;
      });

      animId = requestAnimationFrame(render);
    };

    const handleMouseMove = (e) => {
      const halfW = window.innerWidth / 2;
      const halfH = window.innerHeight / 2;
      targetMouseX = (e.clientX - halfW) / halfW;
      targetMouseY = (e.clientY - halfH) / halfH;
    };

    const handleMouseLeave = () => {
      targetMouseX = 0;
      targetMouseY = 0;
    };

    if (window.matchMedia('(pointer: fine)').matches) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      window.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    }

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className={`ambient-bg-wrapper theme-${theme}`} ref={bgRef} aria-hidden="true">
      {/* Precision Micro Grid */}
      <div className="ambient-grid"></div>

      {/* Soft Ambient Light Cones */}
      <div className="ambient-orb orb-primary"></div>
      <div className="ambient-orb orb-secondary"></div>
      <div className="ambient-orb orb-accent"></div>
    </div>
  );
}
