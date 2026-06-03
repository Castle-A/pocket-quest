import { motion } from 'framer-motion';

function PixelAvatar({ size = 24, color = '#A8E6CF' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      style={{ imageRendering: 'pixelated' }}
      aria-hidden="true"
      role="presentation"
    >
      <rect x="20" y="8" width="24" height="4" fill={color} />
      <rect x="16" y="12" width="32" height="4" fill={color} />
      <rect x="12" y="16" width="40" height="4" fill={color} />
      <rect x="12" y="20" width="12" height="4" fill={color} />
      <rect x="24" y="20" width="4" height="4" fill="#333" />
      <rect x="28" y="20" width="8" height="4" fill="#fff" />
      <rect x="36" y="20" width="4" height="4" fill="#333" />
      <rect x="40" y="20" width="12" height="4" fill={color} />
      <rect x="12" y="24" width="16" height="4" fill={color} />
      <rect x="28" y="24" width="8" height="4" fill="#fff" />
      <rect x="36" y="24" width="16" height="4" fill={color} />
      <rect x="16" y="28" width="12" height="4" fill={color} />
      <rect x="28" y="28" width="8" height="4" fill="#333" />
      <rect x="36" y="28" width="12" height="4" fill={color} />
      <rect x="16" y="32" width="32" height="4" fill={color} />
      <rect x="20" y="36" width="24" height="4" fill={color} />
      <rect x="16" y="40" width="12" height="4" fill={color} />
      <rect x="36" y="40" width="12" height="4" fill={color} />
      <rect x="12" y="44" width="16" height="4" fill={color} />
      <rect x="36" y="44" width="16" height="4" fill={color} />
      <rect x="12" y="48" width="40" height="4" fill="#A0C4FF" />
      <rect x="16" y="52" width="32" height="4" fill="#A0C4FF" />
    </svg>
  );
}

const screens = {
  home: ({ _t }) => (
    <div className="absolute inset-0 bg-gradient-to-b from-[#f8f9fa] to-[#fff] p-4 pt-10">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-[9px] text-gray-400 font-medium">Good morning</p>
          <p className="text-xs font-bold text-gray-900">Alex&apos;s Quest</p>
        </div>
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#A0C4FF] to-[#A8E6CF] flex items-center justify-center text-[8px] font-bold text-white">
          A
        </div>
      </div>
      <div className="bg-gradient-to-r from-blue-200/20 to-green-200/20 rounded-2xl p-3 border border-blue-200/10 mb-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[8px] text-gray-500 mb-0.5">Streak</p>
            <p className="text-base font-black text-gray-900">12 Days</p>
          </div>
          <div className="flex gap-0.5">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, idx) => (
              <div
                key={day}
                className={`w-2 h-2 rounded-sm ${idx < 5 ? 'bg-[#A8E6CF]' : 'bg-gray-200'}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="space-y-2">
        {[
          { title: 'Morning Walk', qp: '+10 QP', pct: 70, color: '#A8E6CF' },
          { title: 'No Social Media', qp: '+25 QP', pct: 40, color: '#A0C4FF' },
          { title: 'Read 30 min', qp: '+20 QP', pct: 90, color: '#FFF3B0' },
        ].map((q) => (
          <div key={q.title} className="bg-gray-50 rounded-xl p-2 border border-gray-100">
            <div className="flex justify-between mb-1">
              <span className="text-[8px] font-medium text-gray-700">{q.title}</span>
              <span className="text-[7px] font-bold" style={{ color: q.color }}>
                {q.qp}
              </span>
            </div>
            <div className="w-full h-1 rounded-full bg-gray-100">
              <div
                className="h-full rounded-full"
                style={{ width: `${q.pct}%`, background: q.color }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 bg-gray-50 rounded-xl p-2 border border-gray-100 mt-2">
        <PixelAvatar size={28} color="#A8E6CF" />
        <div className="flex-1">
          <p className="text-[8px] font-bold text-gray-700">Pixel</p>
          <p className="text-[7px] text-gray-400">Lv.12 • Happy</p>
        </div>
      </div>
    </div>
  ),
  quests: ({ _t }) => (
    <div className="absolute inset-0 bg-gradient-to-b from-[#f8f9fa] to-[#fff] p-4 pt-10">
      <p className="text-xs font-bold text-gray-900 mb-3">Today&apos;s Quests</p>
      <div className="space-y-2">
        {[
          { icon: '🚶', title: '30min Walk', qp: '10 QP', color: '#A8E6CF' },
          { icon: '📱', title: 'No Instagram', qp: '25 QP', color: '#A0C4FF' },
          { icon: '📖', title: 'Read a book', qp: '20 QP', color: '#FFF3B0' },
          { icon: '🧘', title: 'Meditate', qp: '15 QP', color: '#A8E6CF' },
        ].map((q) => (
          <div
            key={q.title}
            className="flex items-center gap-3 bg-gray-50 rounded-xl p-2.5 border border-gray-100"
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
              style={{ background: `${q.color}30` }}
            >
              {q.icon}
            </div>
            <div className="flex-1">
              <p className="text-[9px] font-semibold text-gray-800">{q.title}</p>
              <p className="text-[7px] text-gray-400">Tap to start</p>
            </div>
            <span className="text-[8px] font-bold" style={{ color: q.color }}>
              {q.qp}
            </span>
          </div>
        ))}
      </div>
    </div>
  ),
};

export default function PhoneMockup({ variant = 'ios', screen = 'home', t }) {
  const Screen = screens[screen] || screens.home;

  return (
    <motion.div className="relative" style={{ width: 260, height: 540 }}>
      {/* Phone frame */}
      <div className="absolute inset-0 rounded-[40px] bg-gray-900 shadow-2xl shadow-gray-900/20">
        {/* Notch (iOS) */}
        {variant === 'ios' && (
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-gray-900 rounded-b-2xl z-20" />
        )}
        {/* Screen */}
        <div className="absolute inset-2 rounded-[34px] overflow-hidden bg-white">
          <Screen t={t} />
        </div>
        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 rounded-full bg-gray-300" />
      </div>
    </motion.div>
  );
}
