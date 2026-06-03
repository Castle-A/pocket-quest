import { Github, Twitter, Instagram } from 'lucide-react';

export default function Footer({ t }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 border-t border-white/5">
      <div className="absolute inset-0 bg-[#050510]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2B7FE8] to-[#34C759] flex items-center justify-center">
                <span className="text-white font-bold text-xs">PQ</span>
              </div>
              <span className="text-white font-bold text-lg">Pocket Quest</span>
            </div>
            <p className="text-gray-500 text-sm mb-4">{t.footer.tagline}</p>
            <div className="flex gap-3">
              {[
                { Icon: Twitter, label: 'Twitter' },
                { Icon: Github, label: 'GitHub' },
                { Icon: Instagram, label: 'Instagram' },
              ].map(({ Icon, label }, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">{t.footer.product}</h3>
            <ul className="space-y-2">
              {t.footer.productLinks.map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">{t.footer.company}</h3>
            <ul className="space-y-2">
              {t.footer.companyLinks.map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">{t.footer.legal}</h3>
            <ul className="space-y-2">
              {t.footer.legalLinks.map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-gray-600 text-sm">{t.footer.copyright.replace('2026', currentYear)}</p>
        </div>
      </div>
    </footer>
  );
}
