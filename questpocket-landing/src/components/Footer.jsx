export default function Footer({ t }) {
  return (
    <footer className="py-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="text-lg">🎮</span>
          <span className="font-bold text-sm text-gray-400">QuestPocket</span>
        </div>
        <div className="flex items-center gap-8">
          <button type="button" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">
            {t.footer?.privacy || 'Privacy'}
          </button>
          <button type="button" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">
            {t.footer?.terms || 'Terms'}
          </button>
        </div>
        <p className="text-xs text-gray-300">{t.footer?.copyright || '© 2026 QuestPocket'}</p>
      </div>
    </footer>
  );
}
