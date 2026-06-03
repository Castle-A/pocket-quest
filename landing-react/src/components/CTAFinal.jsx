import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

export default function CTAFinal({ t }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, success, error

  const validateEmail = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setStatus('error');
      return;
    }
    // Save to localStorage
    const emails = JSON.parse(localStorage.getItem('pq_signups') || '[]');
    emails.push({ email, date: new Date().toISOString() });
    localStorage.setItem('pq_signups', JSON.stringify(emails));
    setStatus('success');
    setEmail('');
  };

  return (
    <section id="cta" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0a0a2e] to-[#0a0a0f]" />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#2B7FE8]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            {t.cta.title}{' '}
            <span className="gradient-text">{t.cta.titleHighlight}</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            {t.cta.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass rounded-2xl p-8 inline-flex flex-col items-center gap-3"
            >
              <CheckCircle size={48} className="text-[#34C759]" />
              <p className="text-white font-semibold text-lg">{t.cta.success}</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="flex-1 relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setStatus('idle'); }}
                  placeholder={t.cta.placeholder}
                  className="w-full px-5 py-3.5 rounded-xl glass text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#2B7FE8]/50 transition-all"
                  aria-label="Email address"
                  required
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#2B7FE8] to-[#34C759] text-white px-6 py-3.5 rounded-xl text-sm font-semibold hover:opacity-90 transition-all hover:scale-105 shrink-0"
              >
                {t.cta.button}
                <Send size={16} />
              </button>
            </form>
          )}

          {status === 'error' && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-400 text-sm mt-3"
            >
              {t.cta.invalid}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
