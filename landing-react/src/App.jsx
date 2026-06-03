import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import PointsSystem from './components/PointsSystem';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTAFinal from './components/CTAFinal';
import Footer from './components/Footer';
import { translations } from './translations';

export default function App() {
  const [lang, setLang] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('pq_lang') || 'en';
    }
    return 'en';
  });

  useEffect(() => {
    localStorage.setItem('pq_lang', lang);
  }, [lang]);

  const t = translations[lang] || translations.en;

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white font-sans">
      <Navbar t={t} lang={lang} setLang={setLang} />
      <main>
        <Hero t={t} />
        <Features t={t} />
        <HowItWorks t={t} />
        <PointsSystem t={t} />
        <Testimonials t={t} />
        <FAQ t={t} />
        <CTAFinal t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
}
