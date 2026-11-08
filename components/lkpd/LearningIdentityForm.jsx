'use client';

import React, { useRef } from 'react';
import { BookOpen, Upload, FileText, X, AlertCircle, Clock, Users, Target } from 'lucide-react';

export default function LearningIdentityForm({ config, onChange, showToast }) {
  const fileInputRef = useRef(null);

  const handleInputChange = (field, value) => {
    onChange({ [field]: value });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    // Validation: Max 10MB
    const maxSize = 10 * 1024 * 1024;
    if (file.size > maxSize) {
      if (showToast) showToast('⚠️ Ukuran berkas maksimal 10MB.');
      return;
    }

    // Supported extensions: pdf, doc, docx, ppt, pptx, txt
    const allowedExts = ['pdf', 'doc', 'docx', 'ppt', 'pptx', 'txt'];
    const fileExt = file.name.split('.').pop().toLowerCase();
    if (!allowedExts.includes(fileExt)) {
      if (showToast) showToast('⚠️ Format berkas harus PDF, DOCX, atau PPTX.');
      return;
    }

    onChange({
      uploadedFile: {
        name: file.name,
        size: file.size,
        type: fileExt.toUpperCase(),
        lastModified: file.lastModified
      }
    });

    if (showToast) showToast(`📎 Berkas "${file.name}" berhasil dilampirkan ke prompt!`);
  };

  const removeUploadedFile = () => {
    onChange({ uploadedFile: null });
    if (fileInputRef.current) fileInputRef.current.value = '';
    if (showToast) showToast('🗑️ Lampiran berkas dihapus.');
  };

  return (
    <div className="lkpd-section-card">
      <div className="lsc-header">
        <div className="lsc-icon-wrap bg-blue">
          <BookOpen size={18} />
        </div>
        <div>
          <h3 className="lsc-title">A. Informasi Pembelajaran &amp; Sasaran</h3>
          <p className="lsc-subtitle">Identitas mata pelajaran, kurikulum, alokasi waktu, serta bahan ajar acuan.</p>
        </div>
      </div>

      <div className="lsc-grid-form">
        {/* Row 0: Nama Sekolah / Instansi */}
        <div className="form-group col-span-2">
          <label className="form-label">
            Nama Sekolah / Instansi <span className="text-required">*</span>
          </label>
          <input
            type="text"
            className="form-input"
            value={config.schoolName || ''}
            onChange={(e) => handleInputChange('schoolName', e.target.value)}
            placeholder="Contoh: SMP Negeri 1 Jakarta / SD Merdeka..."
          />
        </div>

        {/* Row 1: Mapel, Jenjang, Fase, Kelas */}
        <div className="form-group col-span-2">
          <label className="form-label">
            Nama Mata Pelajaran <span className="text-required">*</span>
          </label>
          <input
            type="text"
            className="form-input"
            value={config.subject || ''}
            onChange={(e) => handleInputChange('subject', e.target.value)}
            placeholder="Contoh: Informatika, IPA, Matematika..."
          />
        </div>

        <div className="form-group">
          <label className="form-label">Jenjang Pendidikan</label>
          <select
            className="form-select"
            value={config.gradeLevel || 'SMP'}
            onChange={(e) => handleInputChange('gradeLevel', e.target.value)}
          >
            <option value="SD">SD / MI</option>
            <option value="SMP">SMP / MTs</option>
            <option value="SMA">SMA / MA</option>
            <option value="SMK">SMK</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Fase Kurikulum</label>
          <select
            className="form-select"
            value={config.phase || 'Fase D'}
            onChange={(e) => handleInputChange('phase', e.target.value)}
          >
            <option value="Fase A">Fase A (Kelas 1-2)</option>
            <option value="Fase B">Fase B (Kelas 3-4)</option>
            <option value="Fase C">Fase C (Kelas 5-6)</option>
            <option value="Fase D">Fase D (Kelas 7-9)</option>
            <option value="Fase E">Fase E (Kelas 10)</option>
            <option value="Fase F">Fase F (Kelas 11-12)</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Kelas</label>
          <input
            type="text"
            className="form-input"
            value={config.grade || ''}
            onChange={(e) => handleInputChange('grade', e.target.value)}
            placeholder="Contoh: Kelas 7, Kelas 8..."
          />
        </div>

        <div className="form-group">
          <label className="form-label">Semester</label>
          <select
            className="form-select"
            value={config.semester || 'Ganjil'}
            onChange={(e) => handleInputChange('semester', e.target.value)}
          >
            <option value="Ganjil">Semester Ganjil</option>
            <option value="Genap">Semester Genap</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Tahun Ajaran</label>
          <input
            type="text"
            className="form-input"
            value={config.academicYear || ''}
            onChange={(e) => handleInputChange('academicYear', e.target.value)}
            placeholder="2026/2027"
          />
        </div>

        {/* Row 2: Topik & Subtopik */}
        <div className="form-group col-span-2">
          <label className="form-label">
            Topik / Materi Pokok <span className="text-required">*</span>
          </label>
          <input
            type="text"
            className="form-input"
            value={config.topic || ''}
            onChange={(e) => handleInputChange('topic', e.target.value)}
            placeholder="Contoh: Berpikir Komputasional, Ekosistem, SPLDV..."
          />
        </div>

        <div className="form-group col-span-2">
          <label className="form-label">Submateri / Fokus Keterampilan</label>
          <input
            type="text"
            className="form-input"
            value={config.subtopic || ''}
            onChange={(e) => handleInputChange('subtopic', e.target.value)}
            placeholder="Contoh: Algoritma Pencarian &amp; Pengurutan..."
          />
        </div>

        {/* Row 3: CP & TP */}
        <div className="form-group col-span-2">
          <label className="form-label">Capaian Pembelajaran (CP)</label>
          <textarea
            className="form-textarea"
            rows={2}
            value={config.cp || ''}
            onChange={(e) => handleInputChange('cp', e.target.value)}
            placeholder="Kutipan capaian pembelajaran yang ingin dicapai..."
          />
        </div>

        <div className="form-group col-span-2">
          <label className="form-label">
            Tujuan Pembelajaran (TP) <span className="text-required">*</span>
          </label>
          <textarea
            className="form-textarea"
            rows={2}
            value={config.tp || ''}
            onChange={(e) => handleInputChange('tp', e.target.value)}
            placeholder="Tujuan pembelajaran spesifik dan terukur (ABCD: Audience, Behavior, Condition, Degree)..."
          />
        </div>

        {/* Row 4: Alokasi, Siswa, Karakteristik */}
        <div className="form-group">
          <label className="form-label flex items-center gap-1">
            <Clock size={13} /> Alokasi Waktu
          </label>
          <input
            type="text"
            className="form-input"
            value={config.timeAllocation || ''}
            onChange={(e) => handleInputChange('timeAllocation', e.target.value)}
            placeholder="Contoh: 2 x 40 Menit"
          />
        </div>

        <div className="form-group">
          <label className="form-label flex items-center gap-1">
            <Users size={13} /> Jumlah Siswa
          </label>
          <input
            type="text"
            className="form-input"
            value={config.studentCount || ''}
            onChange={(e) => handleInputChange('studentCount', e.target.value)}
            placeholder="Contoh: 32 Siswa"
          />
        </div>

        <div className="form-group col-span-2">
          <label className="form-label flex items-center gap-1">
            <Target size={13} /> Karakteristik Peserta Didik
          </label>
          <input
            type="text"
            className="form-input"
            value={config.studentCharacteristics || ''}
            onChange={(e) => handleInputChange('studentCharacteristics', e.target.value)}
            placeholder="Contoh: Senang eksplorasi visual, menyukai studi kasus dunia nyata..."
          />
        </div>
      </div>

      {/* Upload Dokumen Bahan Ajar Acuan */}
      <div className="lkpd-upload-zone">
        <input
          ref={fileInputRef}
          type="file"
          id="lkpd-file-upload"
          className="hidden-file-input"
          accept=".pdf,.docx,.doc,.pptx,.ppt,.txt"
          onChange={handleFileUpload}
        />

        {config.uploadedFile ? (
          <div className="upload-active-card">
            <div className="uac-left">
              <div className="uac-icon">
                <FileText size={22} />
              </div>
              <div className="uac-meta">
                <span className="uac-name">{config.uploadedFile.name}</span>
                <span className="uac-size">
                  {(config.uploadedFile.size / 1024).toFixed(1)} KB • Tipe {config.uploadedFile.type}
                </span>
              </div>
            </div>
            <button
              type="button"
              className="uac-remove-btn"
              onClick={removeUploadedFile}
              title="Hapus berkas lampiran"
            >
              <X size={16} />
              <span>Hapus Lampiran</span>
            </button>
          </div>
        ) : (
          <label htmlFor="lkpd-file-upload" className="upload-drop-label">
            <div className="udl-icon">
              <Upload size={24} />
            </div>
            <div className="udl-text">
              <span className="udl-title">Unggah Bahan Ajar Acuan (Opsional: PDF, DOCX, PPTX)</span>
              <span className="udl-desc">
                AI akan diperintahkan menganalisis materi pada berkas ini sebagai sumber primer penyusunan LKPD.
              </span>
            </div>
            <span className="udl-btn">Pilih Berkas</span>
          </label>
        )}

        <div className="upload-disclaimer">
          <AlertCircle size={13} className="text-secondary" />
          <span>
            Aplikasi memproses metadata berkas ke dalam Master Prompt AI agar AI menganalisis isi dokumen saat diunggah guru ke model LLM.
          </span>
        </div>
      </div>
    </div>
  );
}
