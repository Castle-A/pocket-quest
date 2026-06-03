export default function Footer({ t }) {
  return (
    <footer className="py-12 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2B7FE8] to-[#34C759] flex items-center justify-center text-white font-black text-xs">
              PQ
            </div>
            <span className="font-bold text-sm text-white/50">Pocket Quest</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            <button className="text-xs text-white/30 hover:text-white/60 transition-colors">{t.footer.privacy}</button>
            <button className="text-xs text-white/30 hover:text-white/60 transition-colors">{t.footer.terms}</button>
            <button className="text-xs text-white/30 hover:text-white/60 transition-colors">{t.footer.contact}</button>
          </div>

          {/* Copyright */}
          <p className="text-xs text-white/20">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
