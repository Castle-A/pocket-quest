import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const flagIcons = {
  en: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 640 480"
      className="rounded-sm"
      aria-hidden="true"
      role="presentation"
    >
      <path fill="#FFF" d="M0 0h640v480H0" />
      <path
        fill="#CE1124"
        d="M0 0h640v36.4H0M0 72.8h640v36.4H0M0 145.6h640v36.4H0M0 218.4h640v36.4H0M0 291.2h640v36.4H0M0 364h640v36.4H0M0 436.8h640V480H0"
      />
      <path fill="#00247D" d="M0 0h292.4v218.4H0" />
    </svg>
  ),
  fr: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 640 480"
      className="rounded-sm"
      aria-hidden="true"
      role="presentation"
    >
      <path fill="#FFF" d="M0 0h640v480H0" />
      <path fill="#002395" d="M0 0h213.3v480H0" />
      <path fill="#ED2939" d="M426.7 0H640v480H426.7" />
    </svg>
  ),
  de: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 640 480"
      className="rounded-sm"
      aria-hidden="true"
      role="presentation"
    >
      <path fill="#000" d="M0 0h640v160H0" />
      <path fill="#DD0000" d="M0 160h640v160H0" />
      <path fill="#FFCC00" d="M0 320h640v160H0" />
    </svg>
  ),
};

const langs = ['en', 'fr', 'de'];

export default function Navbar({ lang, setLang }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-white/80 backdrop-blur-xl shadow-sm shadow-gray-200/50'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2"
          >
            <span className="text-xl">🎮</span>
            <span className="font-bold text-lg text-gray-900">QuestPocket</span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button
              type="button"
              onClick={() =>
                document.getElementById('countdown')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              Features
            </button>
            <div className="relative group">
              <button
                type="button"
                className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors"
              >
                {flagIcons[lang]}
                <span className="text-xs uppercase font-medium">{lang}</span>
              </button>
              <div className="absolute top-full right-0 mt-2 py-1 bg-white border border-gray-100 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[120px]">
                {langs.map((l) => (
                  <button
                    type="button"
                    key={l}
                    onClick={() => setLang(l)}
                    className={`w-full flex items-center gap-2 px-4 py-2 text-sm transition-colors ${lang === l ? 'text-pastel-blue bg-blue-50' : 'text-gray-600 hover:bg-gray-50'}`}
                  >
                    {flagIcons[l]} <span className="text-xs uppercase">{l}</span>
                  </button>
                ))}
              </div>
            </div>
            <button
              type="button"
              data-cta
              onClick={() =>
                document.getElementById('countdown')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="px-5 py-2 bg-gray-900 text-white text-sm font-semibold rounded-xl hover:shadow-lg transition-all duration-200"
            >
              Get Started
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-gray-500"
            aria-label="Menu"
          >
            <svg
              aria-hidden="true"
              role="presentation"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {mobileOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-b border-gray-100 px-6 py-6 space-y-4 md:hidden"
          >
            <button
              type="button"
              onClick={() => {
                document.getElementById('countdown')?.scrollIntoView({ behavior: 'smooth' });
                setMobileOpen(false);
              }}
              className="block text-gray-600 hover:text-gray-900 text-base"
            >
              Features
            </button>
            <div className="flex gap-2 pt-2">
              {langs.map((l) => (
                <button
                  type="button"
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-4 py-2 rounded-lg text-sm uppercase font-medium flex items-center gap-2 ${lang === l ? 'bg-blue-50 text-pastel-blue' : 'bg-gray-50 text-gray-500'}`}
                >
                  {flagIcons[l]} {l}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
