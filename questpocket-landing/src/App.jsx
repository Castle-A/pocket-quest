import { useState, useEffect } from 'react';
import { translations } from './translations';
import CursorAura from './components/CursorAura';
import PixelCharacter from './components/PixelCharacter';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import AppPreview from './components/AppPreview';
import Footer from './components/Footer';

export default function App() {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem('qp-lang') || 'en'; } catch { return 'en'; }
  });

  useEffect(() => {
    try { localStorage.setItem('qp-lang', lang); } catch { /* noop */ }
    document.documentElement.lang = lang;
  }, [lang]);

  const t = translations[lang] || translations.en;

  return (
    <div className="relative min-h-screen">
      {/* Interactive cursor aura */}
      <CursorAura />

      {/* Pixel character companion */}
      <PixelCharacter />

      {/* Navigation */}
      <Navbar lang={lang} setLang={setLang} />

      {/* Main content */}
      <main className="relative z-10">
        <Hero t={t} />
        <HowItWorks t={t} />
        <AppPreview t={t} />
      </main>

      <Footer t={t} />
    </div>
  );
}
