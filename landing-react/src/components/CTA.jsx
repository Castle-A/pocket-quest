import { useState, useRef, useEffect } from 'react';

function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function CTA({ t }) {
  const { ref, inView } = useInView();
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email');
      return;
    }
    try {
      const list = JSON.parse(localStorage.getItem('pq-waitlist') || '[]');
      list.push(email);
      localStorage.setItem('pq-waitlist', JSON.stringify(list));
    } catch {}
    setSuccess(true);
    setEmail('');
  };

  return (
    <section id="cta" className="py-24 md:py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-white/[0.06] to-transparent"/>

      <div className="max-w-3xl mx-auto px-6 text-center" ref={ref}>
        <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6">
            <span className="text-white">{t.cta.title}</span><br />
            <span className="gradient-text">{t.cta.titleAccent}</span>
          </h2>
          <p className="text-lg text-white/40 mb-10">{t.cta.subtitle}</p>

          {success ? (
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#34C759]/10 border border-[#34C759]/20">
              <span className="text-2xl">🎉</span>
              <span className="text-lg font-semibold text-[#34C759]">{t.cta.success}</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <div className="flex-1 relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError(''); }}
                  placeholder={t.cta.placeholder}
                  className={`w-full px-5 py-4 rounded-2xl bg-white/[0.04] border text-white text-sm placeholder:text-white/25 outline-none transition-all duration-200 focus:bg-white/[0.06] ${
                    error ? 'border-red-500/40 focus:border-red-500/60' : 'border-white/[0.08] focus:border-[#2B7FE8]/40'
                  }`}
                  aria-label="Email"
                />
                {error && <p className="absolute -bottom-6 left-0 text-xs text-red-400">{error}</p>}
              </div>
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-[#2B7FE8] to-[#2B7FE8]/80 text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 transition-all duration-200 active:translate-y-0 text-sm whitespace-nowrap"
              >
                {t.cta.button}
              </button>
            </form>
          )}

          <p className="text-xs text-white/20 mt-6">{t.cta.privacy}</p>
        </div>
      </div>
    </section>
  );
}
