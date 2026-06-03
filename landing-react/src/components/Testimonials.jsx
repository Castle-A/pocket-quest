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

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#FF9500" stroke="none">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  );
}

function AvatarSVG({ initials, color }) {
  return (
    <div className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{ background: color }}>
      {initials}
    </div>
  );
}

export default function Testimonials({ t }) {
  const { ref, inView } = useInView();
  const colors = ['#2B7FE8', '#34C759', '#FF9500'];

  return (
    <section className="py-24 md:py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-white/[0.06] to-transparent"/>

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-sm font-semibold text-[#2B7FE8] uppercase tracking-widest mb-4">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6">{t.testimonials.title}</h2>
          <p className="text-lg text-white/40">{t.testimonials.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {t.testimonials.items.map((item, i) => (
            <div
              key={i}
              className={`p-7 rounded-2xl bg-white/[0.02] border border-white/[0.04] hover:border-white/[0.08] transition-all duration-500 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: inView ? `${i * 150}ms` : '0ms' }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, j) => <StarIcon key={j} />)}
              </div>

              {/* Quote */}
              <p className="text-sm text-white/60 leading-relaxed mb-6">"{item.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <AvatarSVG initials={item.avatar} color={colors[i]} />
                <div>
                  <p className="text-sm font-bold text-white">{item.name}</p>
                  <p className="text-xs text-white/30">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
