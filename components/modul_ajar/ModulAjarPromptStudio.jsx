'use client';

import React, { useState } from 'react';
import {
  BookOpen,
  Sparkles,
  FileText,
  Award,
  Layers,
  CheckCircle,
  Copy,
  Check,
  RotateCcw,
  ShieldCheck,
  ExternalLink,
  Terminal,
  Sliders,
  GraduationCap
} from 'lucide-react';

export default function ModulAjarPromptStudio({ showToast }) {
  // Identitas Administrasi
  const [schoolName, setSchoolName] = useState('SMP Negeri 1 Blimbingsari Satu Atap');
  const [subject, setSubject] = useState('Informatika');
  const [gradePhase, setGradePhase] = useState('SMP — Kelas 8 (Fase D)');
  const [semester, setSemester] = useState('Semester Ganjil / 2026-2027');
  const [teacherName, setTeacherName] = useState('Margaret Sulung D.P, S.Pd / NIP. 19880308 202221 1 003');
  const [principalName, setPrincipalName] = useState('Yeti Chotimah, M.Pd. / NIP. 19760602 200801 2 024');
  const [approvalDate, setApprovalDate] = useState('Blimbingsari, 14 Juli 2026');

  // Konten Pembelajaran & Pedagogi
  const [topic, setTopic] = useState('Berpikir Komputasional & Enkripsi Data');
  const [subtopic, setSubtopic] = useState('Algoritma Kriptografi Caesar Cipher & Proteksi Keamanan Siber');
  const [timeAlloc, setTimeAlloc] = useState('2 x 40 Menit (1 Pertemuan)');
  const [model, setModel] = useState('Problem Based Learning (PBL)');
  const [cp, setCp] = useState('Peserta didik mampu memahami konsep konektivitas jaringan, enkripsi data sederhana, serta mendemonstrasikan praktik proteksi data pribadi dalam kehidupan digital.');
  const [tp, setTp] = useState('Melalui kegiatan diskusi kelompok dan simulasi dekripsi Caesar Cipher (Condition), peserta didik kelas 8 (Audience) mampu menganalisis pentingnya enkripsi data dan memecahkan pesan terenkripsi (Behavior) dengan tingkat akurasi minimal 80% (Degree).');
  const [deepLearning, setDeepLearning] = useState('Integrasi Mindful, Meaningful & Joyful Learning');
  const [differentiation, setDifferentiation] = useState('Lengkap: Konten, Proses, Produk & Kesiapan Belajar');
  const [notes, setNotes] = useState('Sediakan modul unplugged tanpa komputer jika jaringan terputus, gunakan layar sentuh IFP 4K.');
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  // Dynamic Master Prompt Compilation
  const compileMasterPrompt = () => {
    return `# MASTER PROMPT SYSTEM: SEMPENSARI EduPlanner AI — ARCHITECT MODUL AJAR KURIKULUM MERDEKA
# DOKUMEN OUTPUT WAJIB: SCRIPT PYTHON PYTHON-DOCX (.DOCX F4/FOLIO) & NASKAH LENGKAP MODUL AJAR

Bertindaklah sebagai **SEMPENSARI EduPlanner AI**, sebuah asisten kecerdasan buatan profesional yang mengintegrasikan peran sebagai Ahli Kurikulum Merdeka, Guru Penggerak, Ahli Pembelajaran Berdiferensiasi, Spesialis Deep Learning (Mindful, Meaningful, Joyful), Ahli Computational Thinking, serta Microsoft Word Document Developer (python-docx).

Buatkan **MODUL AJAR KURIKULUM MERDEKA LENGKAP & KOMPREHENSIF 16 BAGIAN** berdasarkan identitas dan spesifikasi berikut:

==================================================
1. IDENTITAS ADMINISTRASI & PENGESAHAN MODUL
==================================================
- Nama Satuan Pendidikan: ${schoolName}
- Mata Pelajaran: ${subject}
- Jenjang, Kelas & Fase: ${gradePhase}
- Semester / Tahun Ajaran: ${semester}
- Nama Guru Penyusun: ${teacherName}
- Nama Kepala Sekolah: ${principalName}
- Lokasi & Tanggal Pengesahan: ${approvalDate}

==================================================
2. SPESIFIKASI KONTEN PEMBELAJARAN
==================================================
- Topik Utama / Bab: ${topic}
- Submateri / Fokus Keterampilan: ${subtopic}
- Alokasi Waktu & Pertemuan: ${timeAlloc}
- Model Pembelajaran Utama: ${model}
- Pendekatan Pembelajaran: ${deepLearning}
- Pembelajaran Berdiferensiasi: ${differentiation}
- Catatan Fasilitas & Sarana: ${notes}

==================================================
3. CAPAIAN & TUJUAN PEMBELAJARAN (CP & TP ABCD)
==================================================
- Capaian Pembelajaran (CP):
  "${cp}"
- Tujuan Pembelajaran (TP ABCD & KKTP):
  "${tp}"

==================================================
4. KETENTUAN WAJIB STRUKTUR DOKUMEN MODUL AJAR (16 BAGIAN)
==================================================
Susun dokumen Modul Ajar secara utuh dan terstruktur mencakup:
BAGIAN I. HALAMAN SAMPUL (Warna Navy Blue, Putih & Gold)
BAGIAN II. LEMBAR PENGESAHAN (Tabel 2 Kolom Sejajar: Kepala Sekolah di Kiri, Guru di Kanan, Lokasi & Tanggal)
BAGIAN III. IDENTITAS MODUL (Tabel Rinci Administrasi)
BAGIAN IV. KOMPONEN AWAL PEMBELAJARAN (Kompetensi Awal, Profil Lulusan & Solusi Hambatan)
BAGIAN V. CP, TP & KKTP (Pemetaan CP → TP → Indikator → Aktivitas → Asesmen)
BAGIAN VI. PEMAHAMAN BERMAKNA & PERTANYAAN PEMANTIK
BAGIAN VII. PEMETAAN MATERI & RENCANA PERTEMUAN (Tabel Alur Pertemuan)
BAGIAN VIII. LANGKAH-LANGKAH PEMBELAJARAN PER PERTEMUAN (Tabel Pendahuluan, Inti & Penutup)
BAGIAN IX. STRATEGI PEMBELAJARAN BERDIFERENSIASI (Konten, Proses, Produk, Kesiapan, Minat, Profil)
BAGIAN X. ASESMEN PEMBELAJARAN & SOAL EVALUASI HOTS WAJIB TEPAT 10 SOAL
  - TEPAT 10 Soal Pilihan Ganda (A, B, C, D) dengan 1 Jawaban Benar + 3 Pilihan Pengecoh (Distractors) Berkualitas Logis.
  - DISTRIBUSI KUNCI JAWABAN WAJIB SEIMBANG & TERACAK (Distribusi mendekati 25% A, 25% B, 25% C, 25% D).
  - Dilengkapi Kisi-kisi Soal, Kunci Jawaban + Pembahasan Khusus Guru, serta Pedoman Penskoran.
BAGIAN XI. LKPD SIAP CETAK (Petunjuk, Langkah Kerja, Tabel Pengamatan & Pertanyaan Analisis)
BAGIAN XII. PROGRAM REMEDIAL & PENGAYAAN
BAGIAN XIII. REFLEKSI GURU & PESERTA DIDIK
BAGIAN XIV. MEDIA, SUMBER BELAJAR & GLOSARIUM
BAGIAN XV. KISI-KISI & RUBRIK PENILAIAN SKALA 1–4
BAGIAN XVI. LEMBAR PENGESAHAN PENUTUP ADMINISTRATIF

==================================================
5. SPESIFIKASI FORMAT KERTAS & PYTHON-DOCX GENERATOR
==================================================
1. Hasilkan naskah lengkap Modul Ajar sekaligus SCRIPT PYTHON \`python-docx\` untuk meng-generate file Word \`.docx\` secara otomatis!
2. Kertas WAJIB F4/Folio (Ukuran Lebar: 21.5 cm, Tinggi: 33 cm) dengan Margin 2 cm pada seluruh sisi.
3. Tipografi: Judul Sampul 20-24pt Bold, Judul Bab 14-16pt Bold, Isi Teks 11pt (Spasi 1.15 Justify), Isi Tabel 9-10pt.
4. Warna Desain: Navy Blue (#1E1B4B), Akses Biru Muda & Gold.

Silakan hasilkan naskah Modul Ajar Kurikulum Merdeka tentang "${topic}" beserta script Python \`python-docx\` secara utuh, lengkap, dan tanpa terpotong!`;
  };

  const masterPromptText = compileMasterPrompt();

  const handleCopyPrompt = () => {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(masterPromptText).then(() => {
      setCopiedPrompt(true);
      showToast && showToast(`📋 Master Prompt Modul Ajar "${topic}" berhasil disalin!`);
      setTimeout(() => setCopiedPrompt(false), 2500);
    });
  };

  const handleReset = () => {
    setSchoolName('SMP Negeri 1 Blimbingsari Satu Atap');
    setSubject('Informatika');
    setGradePhase('SMP — Kelas 8 (Fase D)');
    setSemester('Semester Ganjil / 2026-2027');
    setTeacherName('Margaret Sulung D.P, S.Pd / NIP. 19880308 202221 1 003');
    setPrincipalName('Yeti Chotimah, M.Pd. / NIP. 19760602 200801 2 024');
    setApprovalDate('Blimbingsari, 14 Juli 2026');
    setTopic('Berpikir Komputasional & Enkripsi Data');
    setSubtopic('Algoritma Kriptografi Caesar Cipher & Proteksi Keamanan Siber');
    setTimeAlloc('2 x 40 Menit (1 Pertemuan)');
    setModel('Problem Based Learning (PBL)');
    setCp('Peserta didik mampu memahami konsep konektivitas jaringan, enkripsi data sederhana, serta mendemonstrasikan praktik proteksi data pribadi dalam kehidupan digital.');
    setTp('Melalui kegiatan diskusi kelompok dan simulasi dekripsi Caesar Cipher (Condition), peserta didik kelas 8 (Audience) mampu menganalisis pentingnya enkripsi data dan memecahkan pesan terenkripsi (Behavior) dengan tingkat akurasi minimal 80% (Degree).');
    setDeepLearning('Integrasi Mindful, Meaningful & Joyful Learning');
    setDifferentiation('Lengkap: Konten, Proses, Produk & Kesiapan Belajar');
    setNotes('Sediakan modul unplugged tanpa komputer jika jaringan terputus, gunakan layar sentuh IFP 4K.');
    showToast && showToast('🔄 Form Modul Ajar direset ke bawaan.');
  };

  return (
    <section className="workspace-module active" id="sec-modul-ajar">
      <div className="module-card">
        {/* Header Row */}
        <div className="module-header-row">
          <div className="mhr-info">
            <div className="module-category-pill pill-ai">
              <span className="cat-dot dot-ai"></span>
              <span>MODUL 06 • SEMPENSARI EduPlanner AI ARCHITECT</span>
            </div>
            <h2 className="module-title">AI Modul Ajar Prompt Studio</h2>
            <p className="module-subtitle">
              Generator prompt penyusunan Modul Ajar Kurikulum Merdeka komprehensif (16 Bagian, Deep Learning, 10 Soal HOTS &amp; Script Python-Docx F4).
            </p>
          </div>

          <div className="mhr-actions">
            <button
              type="button"
              onClick={handleReset}
              className="btn-action-secondary"
              title="Reset ke konfigurasi awal"
            >
              <RotateCcw size={15} />
              <span>Reset Form</span>
            </button>
            <a
              href="/modul_ajar_prompt_generator.html"
              target="_blank"
              rel="noreferrer"
              className="btn-action-primary btn-ai-gradient"
            >
              <ExternalLink size={16} />
              <span>Buka SPA Generator (Tab Baru)</span>
            </a>
          </div>
        </div>

        {/* 2-Column AI Workspace Layout */}
        <div className="ai-workspace-layout">
          {/* Left Panel: Form & Parameter Configurator */}
          <div className="ai-left-panel">
            <div className="ai-panel-header">
              <span className="aip-label">1. IDENTITAS ADMINISTRASI &amp; PENGESAHAN</span>
            </div>

            <div className="lkpd-section-card" style={{ marginBottom: 0 }}>
              <div className="lsc-header">
                <div className="lsc-icon-wrap bg-blue">
                  <BookOpen size={18} />
                </div>
                <div>
                  <h3 className="lsc-title">Identitas Sekolah &amp; Penyusun</h3>
                  <p className="lsc-subtitle">Kelengkapan data administratif dan lembar pengesahan resmi.</p>
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: '12px' }}>
                <label className="form-label">Nama Sekolah / Instansi:</label>
                <input
                  type="text"
                  value={schoolName}
                  onChange={(e) => setSchoolName(e.target.value)}
                  className="form-input"
                  placeholder="Contoh: SMP Negeri 1 Jakarta"
                />
              </div>

              <div className="lsc-grid-form" style={{ marginBottom: '12px' }}>
                <div className="form-group">
                  <label className="form-label">Mata Pelajaran:</label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="form-input"
                    placeholder="Informatika, IPA, dll."
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Jenjang, Kelas &amp; Fase:</label>
                  <select
                    value={gradePhase}
                    onChange={(e) => setGradePhase(e.target.value)}
                    className="form-select"
                  >
                    <option value="SMP — Kelas 8 (Fase D)">SMP — Kelas 8 (Fase D)</option>
                    <option value="SMP — Kelas 7 (Fase D)">SMP — Kelas 7 (Fase D)</option>
                    <option value="SMP — Kelas 9 (Fase D)">SMP — Kelas 9 (Fase D)</option>
                    <option value="SD — Kelas 1–2 (Fase A)">SD — Kelas 1-2 (Fase A)</option>
                    <option value="SD — Kelas 3–4 (Fase B)">SD — Kelas 3-4 (Fase B)</option>
                    <option value="SD — Kelas 5–6 (Fase C)">SD — Kelas 5-6 (Fase C)</option>
                    <option value="SMA/K — Kelas 10 (Fase E)">SMA/K — Kelas 10 (Fase E)</option>
                    <option value="SMA/K — Kelas 11–12 (Fase F)">SMA/K — Kelas 11-12 (Fase F)</option>
                  </select>
                </div>
              </div>

              <div className="lsc-grid-form" style={{ marginBottom: '12px' }}>
                <div className="form-group">
                  <label className="form-label">Semester &amp; Tahun Ajaran:</label>
                  <input
                    type="text"
                    value={semester}
                    onChange={(e) => setSemester(e.target.value)}
                    className="form-input"
                    placeholder="Ganjil / 2026-2027"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Tanggal &amp; Lokasi Pengesahan:</label>
                  <input
                    type="text"
                    value={approvalDate}
                    onChange={(e) => setApprovalDate(e.target.value)}
                    className="form-input"
                    placeholder="Jakarta, 14 Juli 2026"
                  />
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: '12px' }}>
                <label className="form-label">Nama Guru Penyusun &amp; NIP:</label>
                <input
                  type="text"
                  value={teacherName}
                  onChange={(e) => setTeacherName(e.target.value)}
                  className="form-input"
                  placeholder="Drs. Budi Santoso, M.Pd. / NIP..."
                />
              </div>

              <div className="form-group" style={{ marginBottom: '12px' }}>
                <label className="form-label">Nama Kepala Sekolah &amp; NIP:</label>
                <input
                  type="text"
                  value={principalName}
                  onChange={(e) => setPrincipalName(e.target.value)}
                  className="form-input"
                  placeholder="Dr. Hj. Siti Rahmah, M.Pd. / NIP..."
                />
              </div>
            </div>

            {/* Content & Pedagogical Section */}
            <div className="lkpd-section-card" style={{ marginTop: '16px', marginBottom: 0 }}>
              <div className="lsc-header">
                <div className="lsc-icon-wrap bg-violet">
                  <GraduationCap size={18} />
                </div>
                <div>
                  <h3 className="lsc-title">2. Kategori Pembelajaran &amp; Pedagogi</h3>
                  <p className="lsc-subtitle">CP, TP ABCD, Model Pembelajaran, dan Deep Learning.</p>
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: '12px' }}>
                <label className="form-label">Topik Utama / Bab:</label>
                <input
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="form-input"
                  placeholder="Contoh: Berpikir Komputasional"
                />
              </div>

              <div className="form-group" style={{ marginBottom: '12px' }}>
                <label className="form-label">Submateri / Fokus Keterampilan:</label>
                <input
                  type="text"
                  value={subtopic}
                  onChange={(e) => setSubtopic(e.target.value)}
                  className="form-input"
                  placeholder="Submateri spesifik..."
                />
              </div>

              <div className="lsc-grid-form" style={{ marginBottom: '12px' }}>
                <div className="form-group">
                  <label className="form-label">Alokasi Waktu:</label>
                  <select
                    value={timeAlloc}
                    onChange={(e) => setTimeAlloc(e.target.value)}
                    className="form-select"
                  >
                    <option value="2 x 40 Menit (1 Pertemuan)">2 x 40 Menit (1 Pertemuan)</option>
                    <option value="4 x 40 Menit (2 Pertemuan)">4 x 40 Menit (2 Pertemuan)</option>
                    <option value="6 x 40 Menit (3 Pertemuan)">6 x 40 Menit (3 Pertemuan)</option>
                    <option value="8 x 40 Menit (4 Pertemuan)">8 x 40 Menit (4 Pertemuan)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Model Pembelajaran:</label>
                  <select
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    className="form-select"
                  >
                    <option value="Problem Based Learning (PBL)">Problem Based Learning (PBL)</option>
                    <option value="Project Based Learning (PjBL)">Project Based Learning (PjBL)</option>
                    <option value="Discovery Learning">Discovery Learning</option>
                    <option value="Inquiry Learning">Inquiry Learning</option>
                    <option value="Cooperative Learning">Cooperative Learning</option>
                    <option value="Contextual Teaching & Learning (CTL)">Contextual CTL</option>
                  </select>
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: '12px' }}>
                <label className="form-label">Capaian Pembelajaran (CP):</label>
                <textarea
                  value={cp}
                  onChange={(e) => setCp(e.target.value)}
                  className="form-textarea"
                  rows={2}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Tujuan Pembelajaran (TP ABCD &amp; KKTP):</label>
                <textarea
                  value={tp}
                  onChange={(e) => setTp(e.target.value)}
                  className="form-textarea"
                  rows={3}
                />
              </div>
            </div>
          </div>

          {/* Right Main Panel: Live Master Prompt Output */}
          <div className="ai-main-panel">
            <div className="ai-guardrail-card" style={{ marginBottom: '16px' }}>
              <div className="agc-header">
                <ShieldCheck size={16} className="text-blue" />
                <span className="agc-title">Spesifikasi SEMPENSARI EduPlanner AI</span>
              </div>
              <ul className="agc-list" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                <li>✅ 16 Bagian Modul Uraian Utuh</li>
                <li>✅ Pengesahan 2 Kolom Sejajar</li>
                <li>✅ Tepat 10 Soal HOTS (C4-C6)</li>
                <li>✅ Kunci Jawaban Teracak Seimbang</li>
                <li>✅ LKPD Cetak &amp; Rubrik 1-4</li>
                <li>✅ Script Python-Docx Kertas F4</li>
              </ul>
            </div>

            {/* Master Prompt Output Viewer */}
            <div className="ai-code-viewer-box">
              <div className="acv-toolbar">
                <div className="acv-left">
                  <Terminal size={16} style={{ color: '#38BDF8' }} />
                  <span className="acv-chip" style={{ background: 'rgba(56, 189, 248, 0.2)', color: '#38BDF8' }}>
                    MODUL: {topic.toUpperCase()}
                  </span>
                  <span className="acv-lang">MASTER PROMPT SEMPENSARI AI</span>
                </div>
                <div className="acv-right">
                  <button
                    type="button"
                    className="acv-copy-btn"
                    onClick={handleCopyPrompt}
                    style={{ background: 'linear-gradient(135deg, #6366F1 0%, #38BDF8 100%)' }}
                  >
                    {copiedPrompt ? (
                      <>
                        <Check size={15} />
                        <span>Tersalin ke Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={15} />
                        <span>Salin Master Prompt Modul Ajar</span>
                      </>
                    )}
                  </button>
                  <a
                    href="/modul_ajar_prompt_generator.html"
                    target="_blank"
                    rel="noreferrer"
                    className="aif-external-link"
                    style={{ marginLeft: '10px' }}
                  >
                    <span>Buka SPA Generator</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>

              <div className="acv-body">
                <pre className="acv-pre">
                  <code>{masterPromptText}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
