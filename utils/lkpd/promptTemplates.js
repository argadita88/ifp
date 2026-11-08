/**
 * MODULAR PROMPT TEMPLATES & SECTIONS
 * Menghasilkan struktur prompt universal, adaptif, dan siap guna untuk LLM.
 */

export const PROMPT_SYSTEM_ROLE = `Bertindaklah sebagai Senior Instructional Designer, Guru Penggerak Ahli Kurikulum Merdeka, dan Spesialis Desain Lembar Kerja Peserta Didik (LKPD) Tingkat Nasional.

Tugas Anda adalah merancang dan menghasilkan naskah lengkap LEMBAR KERJA PESERTA DIDIK (LKPD) yang kreatif, bermakna, berorientasi pada peserta didik, serta siap digunakan secara langsung di kelas nyata.`;

export function buildIdentitySection(config) {
  return `### I. IDENTITAS PEMBELAJARAN & LKPD
- **Nama Sekolah / Instansi:** ${config.schoolName || 'SMP Negeri 1 Jakarta'}
- **Mata Pelajaran:** ${config.subject || 'Sesuai Materi'}
- **Jenjang & Fase:** ${config.gradeLevel || 'SMP'} (${config.phase || 'Fase D'}) — ${config.grade || 'Kelas 8'}
- **Semester / Tahun Ajaran:** ${config.semester || 'Ganjil'} / ${config.academicYear || '2026/2027'}
- **Topik Utama:** ${config.topic || 'Topik Pembelajaran'}
- **Submateri / Fokus:** ${config.subtopic || 'Fokus Pembelajaran Terpilih'}
- **Capaian Pembelajaran (CP):**
  "${config.cp || 'Menguasai kompetensi dasar dan esensial sesuai kurikulum.'}"
- **Tujuan Pembelajaran (TP):**
  "${config.tp || 'Peserta didik mampu memahami dan menerapkan konsep secara mandiri dan kolaboratif.'}"
- **Alokasi Waktu:** ${config.timeAllocation || '2 x 40 Menit'}
- **Sasaran / Karakteristik Siswa:** ${config.studentCount || '32 Siswa'}. ${config.studentCharacteristics || 'Peserta didik aktif dengan preferensi belajar visual-kinestetik.'}`;
}

export function buildSourceMaterialSection(config) {
  if (config.uploadedFile) {
    return `### II. SUMBER MATERI & DOKUMEN ACUAN
- **Sumber Data Terlampir:** Berkas dokumen "${config.uploadedFile.name}" (${(config.uploadedFile.size / 1024).toFixed(1)} KB, tipe ${config.uploadedFile.type || 'dokumen'}).
- **Instruksi Pengolahan Berkas:**
  1. Analisis secara cermat isi materi pokok, studi kasus, fakta, rumus, dan konsep kunci yang termuat di dalam dokumen tersebut sebagai rujukan utama LKPD.
  2. Ekstrak data dan kutipan faktual dari dokumen ke dalam stimulus narasi atau tabel aktivitas siswa.
  3. Jangan membuat materi baru yang bertentangan dengan terminologi atau acuan dokumen sumber terlampir.`;
  }

  return `### II. SUMBER MATERI & KONSEP KUNCI
- **Materi Pembelajaran:** Jabarkan konsep esensial topik "${config.topic || 'Materi'}" secara mendalam, akurat secara keilmuan, dan bebas miskonsepsi.
- **Kontekstualisasi:** Hubungkan materi pokok dengan fenomena kehidupan sehari-hari peserta didik di Indonesia agar pembelajaran terasa nyata dan relevan.`;
}

export function buildWorksheetTypesSection(config) {
  if (!config.worksheetTypes || config.worksheetTypes.length === 0) return '';

  const typesList = config.worksheetTypes.map((t) => `- **${t}**`).join('\n');
  return `### III. KARAKTERISTIK & JENIS LKPD
LKPD ini dirancang dengan perpaduan format:
${typesList}
- **Prinsip Konstruksi:** Struktur lembar kerja harus menyeimbangkan antara porsi eksplorasi mandiri, diskusi kelompok, pemecahan masalah konkret, serta refleksi capaian belajar.`;
}

export function buildLearningModelSection(config) {
  if (!config.learningModel || config.learningModel === 'Tidak ditentukan / AI memilih otomatis') {
    return `### IV. MODEL PEMBELAJARAN
Gunakan model pembelajaran aktif yang paling selaras dengan karakteristik materi (misalnya *Problem Based Learning* atau *Inquiry Learning*), dan tuliskan setiap tahapan sintaksnya secara eksplisit di dalam alur pengerjaan LKPD.`;
  }

  return `### IV. MODEL PEMBELAJARAN & SINTAKS PELAKSANAAN
- **Model Pembelajaran:** **${config.learningModel}**
- **Implementasi Sintaks pada LKPD:**
  Setiap bagian LKPD wajib merefleksikan fase sintaks model ${config.learningModel} secara bertahap, mulai dari orientasi masalah/pertanyaan mendasar, penyelidikan mandiri/kelompok, pengolahan data, hingga pembuktian dan penarikan kesimpulan.`;
}

export function buildActivitiesSection(config) {
  if (!config.activities || config.activities.length === 0) return '';

  const actList = config.activities.map((a, i) => `${i + 1}. **${a}**: Rancang instruksi yang jelas, terstruktur, dan memandu siswa melakukan ${a.toLowerCase()} secara bertahap.`).join('\n');
  return `### V. SKENARIO AKTIVITAS PESERTA DIDIK
Sajikan rangkaian instruksi aktivitas yang melibatkan:
${actList}
Setiap aktivitas wajib dilengkapi dengan tempat respons siswa (tabel pengamatan, kolom analisis, kotak sketsa/diagram, atau ruang jawaban terbuka).`;
}

export function buildPedagogicalFeaturesSection(config) {
  if (!config.features || config.features.length === 0) return '';

  const featList = config.features.map((f) => `- **${f}**`).join('\n');
  return `### VI. INTEGRASI FITUR PEDAGOGIS KHUSUS
Pastikan LKPD memuat elemen-elemen berikut secara terintegrasi:
${featList}
*(Khusus untuk Refleksi 3-2-1: sediakan 3 hal yang baru dipelajari, 2 hal menarik yang ingin didalami, dan 1 pertanyaan yang masih membingungkan).*`;
}

export function buildVisualDesignSection(config) {
  return `### VII. PANDUAN DESAIN VISUAL & TATA LETAK LKPD
- **Gaya Desain Visual:** **${config.designStyle || 'Modern Minimalist'}**
- **Palet Warna Utama:** **${config.colorPalette || 'Blue & White'}**
- **Tata Letak & Ruang Sentuh:**
  - Sediakan tata letak yang bersih, hierarki visual yang jelas, dan whitespace yang cukup agar tidak terkesan padat.
  - Gunakan penomoran bertingkat yang rapi, kotak informasi (*callout box*) beraksen warna tema untuk fakta kunci, serta garis pembatas bagian yang halus.
  - Gunakan tipografi yang mudah dibaca siswa dengan variasi bobot (Heading tegas, body nyaman dibaca).`;
}

export function buildIllustrationsSection(config) {
  if (!config.illustrations || config.illustrations.length === 0) return '';

  const illusList = config.illustrations.map((il) => `- ${il}`).join('\n');
  return `### VIII. SPESIFIKASI GAMBAR & ILUSTRASI EDUKATIF
LKPD wajib menyertakan visual yang bermakna dan akurat konsep:
${illusList}
- **Instruksi Detail Visual:** Untuk setiap elemen visual, berikan deskripsi gambar yang presisi atau teks prompt pembuatan gambar (*AI image generation prompt*) yang relevan, agar guru dapat menghasilkan atau menyematkan ilustrasi pendukung berkualitas tinggi tanpa miskonsepsi.`;
}

export function buildAssessmentSection(config) {
  const assessTypes = config.assessmentTypes && config.assessmentTypes.length > 0
    ? config.assessmentTypes.join(', ')
    : 'Pilihan ganda, Isian singkat, dan Uraian';

  return `### IX. ASESMEN & EVALUASI PEMBELAJARAN
- **Bentuk Asesmen:** ${assessTypes}
- **Target Jumlah Soal:** ${config.questionCount || 8} Soal
- **Tingkat Kesulitan:** ${config.difficulty || 'Sedang'} (Seimbang antara C2-Pemahaman, C3-Aplikasi, dan C4/C5-HOTS)
${config.includeAnswerKey ? '- **Kunci Jawaban:** Wajib sertakan kunci jawaban lengkap untuk seluruh bentuk soal.' : ''}
${config.includeDiscussion ? '- **Pembahasan Pedagogis:** Wajib sertakan ulasan/pembahasan konsep yang ringkas dan mencerahkan.' : ''}
${config.includeRubric ? '- **Rubrik Penilaian:** Sediakan kriteria penilaian deskriptif (Skor 4 = Sangat Baik, 3 = Baik, 2 = Cukup, 1 = Perlu Bimbingan).' : ''}
${config.includeScoringGuide ? '- **Pedoman Penskoran:** Cantumkan bobot nilai per soal dan rumus kalkulasi nilai akhir (0–100).' : ''}`;
}

export function buildOutputFormatSection(config) {
  return `### X. FORMAT OUTPUT & SPESIFIKASI DOKUMEN
- **Format Luaran Dokumen:** **${config.outputFormat || 'PDF siap cetak'}** (${config.pageSize || 'A4 Portrait'})
- **Struktur Dokumen LKPD Final:**
  1. **Kop & Header:** Nama Sekolah / Lembaga, Mata Pelajaran, Kelas/Fase, Alokasi Waktu, Nama Anggota Kelompok / Nama Siswa, dan Tanggal.
  2. **Petunjuk Belajar:** 3–4 langkah ringkas keselamatan belajar dan penggunaan LKPD.
  3. **Stimulus Pembelajaran:** Narasi kasus kontekstual / teks bacaan / data tabel / sketsa visual.
  4. **Lembar Kerja Aktivitas:** Langkah kerja terperinci dengan kotak isian jawaban terstruktur.
  5. **Evaluasi & Asesmen:** Kuis/soal uji pemahaman dengan opsi atau ruang kerja.
  6. **Lembar Refleksi & Catatan Guru:** Ruang refleksi siswa dan umpan balik formatif guru.`;
}

export function buildQualityRulesSection() {
  return `### XI. ATURAN KUALITAS HASIL
1. Berikan naskah LKPD LENGKAP tanpa ada teks placeholder seperti *"[masukkan soal di sini]"* atau *"[lanjutkan sendiri]"*.
2. Gunakan Bahasa Indonesia yang komunikatif, ramah peserta didik, dan sesuai Ejaan Yang Disempurnakan (EYD).
3. Pastikan instruksi mudah dipahami secara mandiri oleh siswa tanpa perlu penjelasan berulang dari guru.`;
}
