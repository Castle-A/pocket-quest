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

export default function PointsSystem({ t }) {
  const { ref, inView } = useInView();

  return (
    <section className="py-24 md:py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-white/[0.06] to-transparent"/>

      <div className="max-w-5xl mx-auto px-6" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-sm font-semibold text-[#FF9500] uppercase tracking-widest mb-4">Points System</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6">{t.points.title}</h2>
          <p className="text-lg text-white/40">{t.points.subtitle}</p>
        </div>

        {/* Activity cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.points.activities.map((activity, i) => (
            <div
              key={i}
              className={`group relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.04] hover:border-white/[0.08] transition-all duration-500 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: inView ? `${i * 80}ms` : '0ms' }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-white">{activity.name}</h3>
                <span className="text-sm font-black" style={{ color: activity.color }}>{activity.qp}</span>
              </div>

              {/* Progress bar */}
              <div className="w-full h-1.5 rounded-full bg-white/[0.06] mb-3">
                <div
                  className="h-full rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: inView ? `${(parseInt(activity.qp) / 35) * 100}%` : '0%',
                    background: activity.color,
                    transitionDelay: inView ? `${i * 100 + 300}ms` : '0ms',
                  }}
                />
              </div>

              <p className="text-xs text-white/30">{activity.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
