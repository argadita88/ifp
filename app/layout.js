import './globals.css';

export const metadata = {
  title: 'Gim Interaktif Informatika SMP — Media Pembelajaran Interaktif Layar Sentuh IFP',
  description: 'Platform Pembelajaran Terpadu Gim Interaktif Informatika SMP untuk Layar Sentuh IFP: Slide Presentasi Kurikulum Merdeka, Live Demo Game Edukasi Multi-Touch, dan AI Master Prompt Generator v3.5.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&family=Orbitron:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
