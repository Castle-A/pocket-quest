import { useState, useEffect } from 'react';

export default function Navbar({ t, lang, setLang }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3 bg-[#08080c]/80 backdrop-blur-xl border-b border-white/[0.04] shadow-[0_1px_30px_rgba(0,0,0,0.4)]'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#2B7FE8] to-[#34C759] flex items-center justify-center text-white font-black text-sm tracking-tight shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow">
            PQ
          </div>
          <span className="font-bold text-lg tracking-tight text-white/90">Pocket Quest</span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo('features')}
            className="text-sm text-white/60 hover:text-white transition-colors duration-200">
            {t.nav.features}
          </button>
          <button onClick={() => scrollTo('how-it-works')}
            className="text-sm text-white/60 hover:text-white transition-colors duration-200">
            {t.nav.howItWorks}
          </button>
          <button onClick={() => scrollTo('faq')}
            className="text-sm text-white/60 hover:text-white transition-colors duration-200">
            {t.nav.faq}
          </button>

          {/* Language Selector */}
          <div className="relative group">
            <button className="flex items-center gap-1.5 text-sm text-white/50 hover:text-white/80 transition-colors px-3 py-1.5 rounded-lg hover:bg-white/[0.04]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M2 12h20"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              <span className="uppercase font-medium">{lang}</span>
            </button>
            <div className="absolute top-full right-0 mt-2 py-1.5 bg-[#12121a] border border-white/[0.06] rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[100px]">
              {['en', 'fr', 'de'].map(l => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`w-full text-left px-4 py-2 text-sm uppercase transition-colors ${
                    lang === l ? 'text-[#2B7FE8] bg-[#2B7FE8]/[0.06]' : 'text-white/60 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {l === 'en' ? 'English' : l === 'fr' ? 'Français' : 'Deutsch'}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => scrollTo('cta')}
            className="px-5 py-2.5 bg-gradient-to-r from-[#2B7FE8] to-[#2B7FE8]/80 text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 transition-all duration-200 active:translate-y-0"
          >
            {t.nav.getStarted}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-white/60 hover:text-white"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {mobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0c0c14]/95 backdrop-blur-xl border-b border-white/[0.04] px-6 py-6 space-y-4">
          <button onClick={() => scrollTo('features')} className="block text-white/70 hover:text-white text-base">{t.nav.features}</button>
          <button onClick={() => scrollTo('how-it-works')} className="block text-white/70 hover:text-white text-base">{t.nav.howItWorks}</button>
          <button onClick={() => scrollTo('faq')} className="block text-white/70 hover:text-white text-base">{t.nav.faq}</button>
          <div className="flex gap-2 pt-2">
            {['en', 'fr', 'de'].map(l => (
              <button key={l} onClick={() => setLang(l)}
                className={`px-4 py-2 rounded-lg text-sm uppercase font-medium transition-colors ${
                  lang === l ? 'bg-[#2B7FE8]/20 text-[#2B7FE8]' : 'bg-white/[0.04] text-white/50 hover:text-white'
                }`}
              >{l}</button>
            ))}
          </div>
          <button onClick={() => scrollTo('cta')}
            className="w-full py-3 bg-gradient-to-r from-[#2B7FE8] to-[#2B7FE8]/80 text-white font-semibold rounded-xl"
          >{t.nav.getStarted}</button>
        </div>
      )}
    </nav>
  );
}
