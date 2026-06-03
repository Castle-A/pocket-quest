import { motion } from 'framer-motion';
import { Trophy, Zap } from 'lucide-react';

export default function PointsSystem({ t }) {
  return (
    <section id="points-system" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0a0a1a] to-[#0a0a0f]" />

      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2B7FE8]/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            {t.pointsSystem.title}{' '}
            <span className="gradient-text">{t.pointsSystem.titleHighlight}</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t.pointsSystem.subtitle}
          </p>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="grid grid-cols-3 gap-4 px-6 py-4 border-b border-white/5 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            <span>Activity</span>
            <span className="text-center">Points</span>
            <span className="text-right">Ratio</span>
          </div>

          {/* Rows */}
          {t.pointsSystem.activities.map((activity, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="grid grid-cols-3 gap-4 px-6 py-4 border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors items-center"
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full" style={{
                  background: i === 0 ? '#2B7FE8' : i === 1 ? '#34C759' : i === 2 ? '#FF9500' : i === 3 ? '#2B7FE8' : '#34C759'
                }} />
                <span className="text-white text-sm font-medium">{activity.name}</span>
              </div>
              <div className="text-center">
                <span className="inline-flex items-center gap-1 text-sm font-bold" style={{
                  color: i === 0 ? '#2B7FE8' : i === 1 ? '#34C759' : i === 2 ? '#FF9500' : i === 3 ? '#2B7FE8' : '#34C759'
                }}>
                  <Zap size={14} />
                  {activity.qp}
                </span>
              </div>
              <div className="flex items-center justify-end gap-3">
                <div className="w-24 sm:w-32 h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: `linear-gradient(90deg, #2B7FE8, #34C759)` }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${activity.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
                  />
                </div>
                <span className="text-gray-500 text-xs w-8 text-right">{activity.percent}%</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center justify-center gap-2 mt-8"
        >
          <Trophy size={16} className="text-[#FF9500]" />
          <span className="text-gray-400 text-sm">{t.pointsSystem.footer}</span>
        </motion.div>
      </div>
    </section>
  );
}
