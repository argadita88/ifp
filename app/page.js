'use client';

import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import TabNavigation from '../components/TabNavigation';
import PptViewer from '../components/PptViewer';
import GameDemo from '../components/GameDemo';
import PromptGenerator from '../components/PromptGenerator';
import ParallaxBackground from '../components/ParallaxBackground';
import MobileBottomNav from '../components/MobileBottomNav';
import Toast from '../components/Toast';
import Footer from '../components/Footer';
import LKPDPromptStudio from '../components/lkpd/LKPDPromptStudio';
import StoryboardPromptStudio from '../components/storyboard/StoryboardPromptStudio';

export default function Home() {
  const [activeSection, setActiveSection] = useState('ppt');
  const [theme, setTheme] = useState('light');
  const [toastMessage, setToastMessage] = useState('✅ Berhasil disalin!');
  const [toastVisible, setToastVisible] = useState(false);

  // Initialize theme from system or localStorage
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('theme-mode');
      if (savedTheme === 'dark' || savedTheme === 'light') {
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
      } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
      }
    } catch (e) {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    try {
      localStorage.setItem('theme-mode', nextTheme);
    } catch (e) {}
    showToast(nextTheme === 'dark' ? '🌙 Mode Gelap Aktif' : '☀️ Mode Terang Aktif');
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 2800);
  };

  const handleSwitchSection = (sectionId) => {
    setActiveSection(sectionId);

    // Haptic feedback if supported (Native touch response on IFP or mobile)
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      try { navigator.vibrate(14); } catch (e) {}
    }

    // Scroll smoothly to content top
    const elem = document.getElementById('main-content-start');
    if (elem) {
      const headerOffset = 84;
      const elemPos = elem.getBoundingClientRect().top;
      const offsetPos = elemPos + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPos,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={`app-root ${theme}`}>
      {/* Ambient Lighting & Subtle Grid Background */}
      <ParallaxBackground theme={theme} />

      {/* Sticky Header with SaaS aesthetic & Theme Switcher */}
      <Header
        activeSection={activeSection}
        onSwitchSection={handleSwitchSection}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Modern Editorial 2-Column Hero */}
      <Hero onSwitchSection={handleSwitchSection} />

      {/* Linear-style Segmented Navigation */}
      <TabNavigation activeSection={activeSection} onSwitchSection={handleSwitchSection} />

      {/* Main Workspace Content Area */}
      <main className="content-area" id="main-content-start">
        {activeSection === 'ppt' && <PptViewer showToast={showToast} />}
        {activeSection === 'game' && <GameDemo showToast={showToast} />}
        {activeSection === 'prompt' && <PromptGenerator showToast={showToast} />}
        {activeSection === 'lkpd' && <LKPDPromptStudio showToast={showToast} />}
        {activeSection === 'storyboard' && <StoryboardPromptStudio showToast={showToast} />}
      </main>

      {/* Multi-Column SaaS Footer */}
      <Footer onSwitchSection={handleSwitchSection} />

      {/* Mobile Floating Bottom Navigation */}
      <MobileBottomNav activeSection={activeSection} onSwitchSection={handleSwitchSection} />

      {/* Interactive Toast Notification Pill */}
      <Toast message={toastMessage} visible={toastVisible} />
    </div>
  );
}
