import { useRef, useEffect, useState } from 'react';

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

export default function HowItWorks({ t }) {
  const { ref, inView } = useInView();

  const steps = [
    { num: '01', title: t.howItWorks.step1Title, desc: t.howItWorks.step1Desc },
    { num: '02', title: t.howItWorks.step2Title, desc: t.howItWorks.step2Desc },
    { num: '03', title: t.howItWorks.step3Title, desc: t.howItWorks.step3Desc },
  ];

  return (
    <section id="how-it-works" className="py-24 md:py-32 relative">
      {/* Subtle divider line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-white/[0.06] to-transparent"/>

      <div className="max-w-5xl mx-auto px-6" ref={ref}>
        <div className={`text-center mb-20 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-sm font-semibold text-[#34C759] uppercase tracking-widest mb-4">How It Works</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6">{t.howItWorks.title}</h2>
          <p className="text-lg text-white/40">{t.howItWorks.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-px bg-gradient-to-r from-[#2B7FE8]/20 via-[#34C759]/20 to-[#FF9500]/20"/>

          {steps.map((step, i) => (
            <div
              key={i}
              className={`relative text-center transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: inView ? `${i * 200}ms` : '0ms' }}
            >
              {/* Step number circle */}
              <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/[0.08] mb-6 mx-auto">
                <span className="text-2xl font-black gradient-text">{step.num}</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed max-w-xs mx-auto">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
