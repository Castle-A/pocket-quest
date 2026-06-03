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

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-white/[0.04] last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold text-white/90 group-hover:text-white transition-colors pr-4">{item.q}</span>
        <svg
          width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
          className={`shrink-0 text-white/30 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
        >
          <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-60 pb-5' : 'max-h-0'}`}>
        <p className="text-sm text-white/40 leading-relaxed">{item.a}</p>
      </div>
    </div>
  );
}

export default function FAQ({ t }) {
  const { ref, inView } = useInView();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 md:py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-white/[0.06] to-transparent"/>

      <div className="max-w-3xl mx-auto px-6" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-sm font-semibold text-[#34C759] uppercase tracking-widest mb-4">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6">{t.faq.title}</h2>
          <p className="text-lg text-white/40">{t.faq.subtitle}</p>
        </div>

        <div className={`rounded-2xl bg-white/[0.02] border border-white/[0.04] p-6 md:px-8 transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {t.faq.items.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
