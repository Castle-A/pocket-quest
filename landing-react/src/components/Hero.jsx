import { useEffect, useRef, useState } from 'react';

/* ---- Pixel Art Tamagotchi SVG ---- */
function PixelAvatar({ className = '', size = 48 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" className={className} style={{ imageRendering: 'pixelated' }}>
      {/* Simple pixel art creature */}
      <rect x="5" y="2" width="6" height="1" fill="#34C759"/>
      <rect x="4" y="3" width="8" height="1" fill="#34C759"/>
      <rect x="3" y="4" width="10" height="1" fill="#34C759"/>
      <rect x="3" y="5" width="3" height="1" fill="#34C759"/>
      <rect x="6" y="5" width="1" height="1" fill="#1a1a2e"/>
      <rect x="7" y="5" width="2" height="1" fill="#fff"/>
      <rect x="9" y="5" width="1" height="1" fill="#1a1a2e"/>
      <rect x="10" y="5" width="3" height="1" fill="#34C759"/>
      <rect x="3" y="6" width="4" height="1" fill="#34C759"/>
      <rect x="7" y="6" width="2" height="1" fill="#fff"/>
      <rect x="9" y="6" width="4" height="1" fill="#34C759"/>
      <rect x="4" y="7" width="3" height="1" fill="#34C759"/>
      <rect x="7" y="7" width="2" height="1" fill="#1a1a2e"/>
      <rect x="9" y="7" width="3" height="1" fill="#34C759"/>
      <rect x="4" y="8" width="8" height="1" fill="#34C759"/>
      <rect x="5" y="9" width="6" height="1" fill="#34C759"/>
      <rect x="4" y="10" width="3" height="1" fill="#34C759"/>
      <rect x="9" y="10" width="3" height="1" fill="#34C759"/>
      <rect x="3" y="11" width="4" height="1" fill="#34C759"/>
      <rect x="9" y="11" width="4" height="1" fill="#34C759"/>
      <rect x="2" y="12" width="5" height="1" fill="#34C759"/>
      <rect x="9" y="12" width="5" height="1" fill="#34C759"/>
      <rect x="2" y="13" width="12" height="1" fill="#2B7FE8"/>
      <rect x="3" y="14" width="10" height="1" fill="#2B7FE8"/>
    </svg>
  );
}

/* ---- Phone Mockup with animated screen ---- */
function PhoneMockup() {
  return (
    <div className="phone-mockup animate-float">
      <div className="phone-screen flex flex-col">
        {/* Status bar */}
        <div className="flex items-center justify-between px-6 pt-10 pb-2">
          <span className="text-[10px] text-white/40 font-medium">9:41</span>
          <div className="flex gap-1">
            <div className="w-3.5 h-1.5 rounded-full bg-white/30"/>
            <div className="w-3.5 h-1.5 rounded-full bg-white/30"/>
            <div className="w-3.5 h-1.5 rounded-full bg-[#34C759]"/>
          </div>
        </div>

        {/* App header */}
        <div className="px-5 pt-2 pb-3">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-[10px] text-white/40">Good morning 👋</p>
              <p className="text-sm font-bold text-white">Alex's Quest</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2B7FE8] to-[#34C759] flex items-center justify-center">
              <span className="text-[10px] font-bold">A</span>
            </div>
          </div>

          {/* Streak card */}
          <div className="bg-gradient-to-r from-[#2B7FE8]/20 to-[#34C759]/20 rounded-2xl p-3 border border-white/[0.06]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[9px] text-white/50 mb-0.5">Current Streak</p>
                <p className="text-lg font-black text-white">12 Days</p>
              </div>
              <div className="flex gap-0.5">
                {[...Array(7)].map((_, i) => (
                  <div key={i} className={`w-2.5 h-2.5 rounded-sm ${i < 5 ? 'bg-[#34C759]' : 'bg-white/10'}`}/>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quest list */}
        <div className="flex-1 px-5 space-y-2 overflow-hidden">
          {[
            { title: 'Morning Walk', qp: '+10 QP', progress: 0.7, color: '#34C759' },
            { title: 'No Social Media', qp: '+25 QP', progress: 0.4, color: '#2B7FE8' },
            { title: 'Read 30 min', qp: '+20 QP', progress: 0.9, color: '#FF9500' },
          ].map((quest, i) => (
            <div key={i} className="bg-white/[0.03] rounded-xl p-2.5 border border-white/[0.04]">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-medium text-white/80">{quest.title}</span>
                <span className="text-[9px] font-bold" style={{ color: quest.color }}>{quest.qp}</span>
              </div>
              <div className="w-full h-1 rounded-full bg-white/[0.06]">
                <div className="h-full rounded-full transition-all duration-1000"
                  style={{ width: `${quest.progress * 100}%`, background: quest.color }}/>
              </div>
            </div>
          ))}

          {/* Avatar section */}
          <div className="flex items-center gap-3 bg-white/[0.03] rounded-xl p-3 border border-white/[0.04] mt-2">
            <PixelAvatar size={36} />
            <div>
              <p className="text-[10px] font-bold text-white/80">Pixel</p>
              <p className="text-[8px] text-white/40">Level 12 • Happy</p>
            </div>
            <div className="ml-auto flex gap-1">
              <div className="w-5 h-5 rounded-md bg-[#FF9500]/20 flex items-center justify-center">
                <span className="text-[8px]">🍖</span>
              </div>
              <div className="w-5 h-5 rounded-md bg-[#2B7FE8]/20 flex items-center justify-center">
                <span className="text-[8px]">💤</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom nav mockup */}
        <div className="px-5 py-3 border-t border-white/[0.04]">
          <div className="flex justify-around">
            {['🏠', '⚔️', '👥', '🤖', '⚙️'].map((icon, i) => (
              <div key={i} className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs ${i === 0 ? 'bg-[#2B7FE8]/20' : ''}`}>
                {icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---- Animated Counter ---- */
function AnimatedCounter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const num = parseInt(target.replace(/[^0-9]/g, ''));
          const duration = 2000;
          const start = performance.now();
          const step = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * num));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Hero({ t }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setVisible(true); }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2B7FE8]/[0.08] border border-[#2B7FE8]/20 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-[#34C759] animate-pulse"/>
            <span className="text-xs font-medium text-[#2B7FE8]">{t.hero.badge}</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] mb-6">
            <span className="text-white">{t.hero.title}</span>
            <br />
            <span className="gradient-text">{t.hero.titleAccent}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
            {t.hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-8 py-4 bg-gradient-to-r from-[#2B7FE8] to-[#2B7FE8]/80 text-white font-semibold rounded-2xl text-base hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-0.5 transition-all duration-300 active:translate-y-0 pulse-glow"
            >
              <span className="relative z-10">{t.hero.ctaPrimary}</span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#2B7FE8] to-[#34C759] opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
              <span className="relative z-10">{t.hero.ctaPrimary}</span>
            </button>
            <button className="px-8 py-4 bg-white/[0.04] border border-white/[0.08] text-white/80 font-semibold rounded-2xl text-base hover:bg-white/[0.08] hover:border-white/[0.12] transition-all duration-200 flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
              {t.hero.ctaSecondary}
            </button>
          </div>
        </div>

        {/* Hero Visual: Phone Mockup + Floating Elements */}
        <div className={`relative flex justify-center items-center transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {/* Phone */}
          <PhoneMockup />

          {/* Floating badges */}
          <div className="absolute top-16 left-[10%] md:left-[18%] animate-float-delayed">
            <div className="bg-[#12121a]/90 backdrop-blur-xl border border-white/[0.06] rounded-2xl px-4 py-3 shadow-2xl">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#34C759]/20 flex items-center justify-center">
                  <PixelAvatar size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Level Up!</p>
                  <p className="text-[10px] text-white/40">+50 QP earned</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-24 right-[8%] md:right-[15%] animate-float-slow">
            <div className="bg-[#12121a]/90 backdrop-blur-xl border border-white/[0.06] rounded-2xl px-4 py-3 shadow-2xl">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#FF9500]/20 flex items-center justify-center">
                  <span className="text-sm">🔥</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-white">7 Day Streak!</p>
                  <p className="text-[10px] text-white/40">Keep it going</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-40 right-[5%] md:right-[12%] animate-float hidden md:block">
            <div className="bg-[#12121a]/90 backdrop-blur-xl border border-white/[0.06] rounded-2xl px-4 py-3 shadow-2xl">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#2B7FE8]/20 flex items-center justify-center">
                  <span className="text-sm">⚔️</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Quest Complete</p>
                  <p className="text-[10px] text-white/40">Morning walk done</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className={`mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto transition-all duration-1000 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {[
            { value: t.hero.stat1Value, label: t.hero.stat1Label },
            { value: t.hero.stat2Value, label: t.hero.stat2Label },
            { value: t.hero.stat3Value, label: t.hero.stat3Label },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl md:text-3xl font-black text-white mb-1">
                <AnimatedCounter target={stat.value} suffix={stat.value.includes('K') ? 'K+' : stat.value.includes('★') ? '★' : '+'} />
              </div>
              <div className="text-xs md:text-sm text-white/40">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
