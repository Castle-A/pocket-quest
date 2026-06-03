export type Lang = 'en' | 'fr' | 'de'

export const translations: Record<Lang, Record<string, string>> = {
  en: {
    // Navbar
    'nav.features': 'Features',
    'nav.about': 'About',
    'nav.faq': 'FAQ',
    'nav.getStarted': 'Get Started',

    // Hero
    'hero.badge': 'Now in Beta',
    'hero.title.1': 'Gamify your',
    'hero.title.focus': 'focus',
    'hero.title.2': 'time',
    'hero.subtitle': 'Build real-world rewards by using your phone less. Turn screen time into self-improvement.',
    'hero.cta': 'Join the Waitlist',
    'hero.countdown.label': 'Launch Day',
    'hero.countdown.days': 'd',
    'hero.countdown.hours': 'h',
    'hero.countdown.minutes': 'm',
    'hero.countdown.seconds': 's',
    'hero.countdown.early': 'Early users get exclusive rewards',

    // Features
    'features.label': 'Features',
    'features.title': 'Everything you need to stay focused',
    'features.1.title': 'Lightning Fast',
    'features.1.desc': 'Track your focus in real-time with zero lag. No loading screens, no friction.',
    'features.2.title': 'Privacy First',
    'features.2.desc': 'Your data stays on your device. Always. We never sell or share your information.',
    'features.3.title': 'Gamified Experience',
    'features.3.desc': 'Level up your habits with quests, streaks, and real rewards. Make productivity fun.',
    'features.4.title': 'Deep Analytics',
    'features.4.desc': 'Understand your patterns with rich insights. See exactly where your time goes.',
    'features.5.title': 'Community',
    'features.5.desc': 'Compete with friends and climb the leaderboard. Accountability that actually works.',

    // App Preview
    'preview.label': 'App Preview',
    'preview.title': 'See it in action',
    'preview.subtitle': 'A glimpse into your future focus companion.',
    'preview.home': 'Home',
    'preview.quests': 'Quests',
    'preview.goodMorning': 'Good morning',
    'preview.streak': 'Streak',
    'preview.days': 'Days',
    'preview.pixelCompanion': 'Pixel Companion',
    'preview.todaysQuests': "Today's Quests",
    'preview.tapToStart': 'Tap to start',

    // Social Proof
    'social.label': 'Powered by',

    // CTA
    'cta.label': 'Join the Waitlist',
    'cta.title': 'Ready to level up your focus?',
    'cta.subtitle': 'Be the first to get exclusive early access and bonus rewards.',
    'cta.placeholder': 'your@email.com',
    'cta.button': 'Reserve my spot',
    'cta.success.1': "You're on the list!",
    'cta.success.2': "We'll notify you when QuestPocket launches.",

    // Footer
    'footer.tagline': 'Gamify your focus time. Build better habits.',
    'footer.product': 'Product',
    'footer.company': 'Company',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
    'footer.cookies': 'Cookies',
    'footer.licenses': 'Licenses',
    'footer.twitter': 'Twitter',
    'footer.github': 'GitHub',
    'footer.discord': 'Discord',
    'footer.copyright': '© 2026 QuestPocket. All rights reserved.',
  },

  fr: {
    // Navbar
    'nav.features': 'Fonctionnalités',
    'nav.about': 'À propos',
    'nav.faq': 'FAQ',
    'nav.getStarted': 'Commencer',

    // Hero
    'hero.badge': 'En Beta',
    'hero.title.1': 'Gamifiez votre',
    'hero.title.focus': 'concentration',
    'hero.title.2': '',
    'hero.subtitle': 'Gagnez des récompenses réelles en utilisant moins votre phone. Transformez le temps d\'écran en développement personnel.',
    'hero.cta': 'Rejoindre la liste',
    'hero.countdown.label': 'Jour de lancement',
    'hero.countdown.days': 'j',
    'hero.countdown.hours': 'h',
    'hero.countdown.minutes': 'm',
    'hero.countdown.seconds': 's',
    'hero.countdown.early': 'Les premiers utilisateurs obtiennent des récompenses exclusives',

    // Features
    'features.label': 'Fonctionnalités',
    'features.title': 'Tout ce qu\'il faut pour rester concentré',
    'features.1.title': 'Ultra Rapide',
    'features.1.desc': 'Suivez votre concentration en temps réel sans latence. Pas d\'écran de chargement, pas de friction.',
    'features.2.title': 'Confidentialité',
    'features.2.desc': 'Vos données restent sur votre appareil. Toujours. Nous ne vendons ni ne partageons vos informations.',
    'features.3.title': 'Expérience Gamifiée',
    'features.3.desc': 'Améliorez vos habitudes avec des quêtes, des séries et de vraies récompenses.',
    'features.4.title': 'Analyses Avancées',
    'features.4.desc': 'Comprenez vos habitudes avec des insights détaillés. Voyez exactement où passe votre temps.',
    'features.5.title': 'Communauté',
    'features.5.desc': 'Affrontez vos amis et grimpez au classement. Une responsabilisation qui fonctionne.',

    // App Preview
    'preview.label': 'Aperçu',
    'preview.title': 'Voyez en action',
    'preview.subtitle': 'Un aperçu de votre futur compagnon de concentration.',
    'preview.home': 'Accueil',
    'preview.quests': 'Quêtes',
    'preview.goodMorning': 'Bonjour',
    'preview.streak': 'Série',
    'preview.days': 'Jours',
    'preview.pixelCompanion': 'Compagnon Pixel',
    'preview.todaysQuests': 'Quêtes du jour',
    'preview.tapToStart': 'Appuyez pour démarrer',

    // Social Proof
    'social.label': 'Propulsé par',

    // CTA
    'cta.label': 'Rejoindre la liste',
    'cta.title': 'Prêt à améliorer votre concentration ?',
    'cta.subtitle': 'Soyez le premier à obtenir un accès anticipé et des récompenses bonus.',
    'cta.placeholder': 'votre@email.com',
    'cta.button': 'Réserver ma place',
    'cta.success.1': 'Vous êtes sur la liste !',
    'cta.success.2': 'Nous vous préviendrons au lancement de QuestPocket.',

    // Footer
    'footer.tagline': 'Gamifiez votre concentration. Construisez de meilleures habitudes.',
    'footer.product': 'Produit',
    'footer.company': 'Entreprise',
    'footer.legal': 'Légal',
    'footer.privacy': 'Confidentialité',
    'footer.terms': 'Conditions',
    'footer.cookies': 'Cookies',
    'footer.licenses': 'Licences',
    'footer.twitter': 'Twitter',
    'footer.github': 'GitHub',
    'footer.discord': 'Discord',
    'footer.copyright': '© 2026 QuestPocket. Tous droits réservés.',
  },

  de: {
    // Navbar
    'nav.features': 'Funktionen',
    'nav.about': 'Über uns',
    'nav.faq': 'FAQ',
    'nav.getStarted': 'Loslegen',

    // Hero
    'hero.badge': 'In Beta',
    'hero.title.1': 'Mache deine',
    'hero.title.focus': 'Konzentration',
    'hero.title.2': 'spielend',
    'hero.subtitle': 'Verdiene echte Belohnungen, indem du dein Handy weniger nutzt. Verwandle Bildschirmzeit in Selbstverbesserung.',
    'hero.cta': 'Warteliste beitreten',
    'hero.countdown.label': 'Launch-Tag',
    'hero.countdown.days': 'T',
    'hero.countdown.hours': 'Std',
    'hero.countdown.minutes': 'Min',
    'hero.countdown.seconds': 'Sek',
    'hero.countdown.early': 'Frühe Nutzer erhalten exklusive Belohnungen',

    // Features
    'features.label': 'Funktionen',
    'features.title': 'Alles was du brauchst, um fokussiert zu bleiben',
    'features.1.title': 'Blitzschnell',
    'features.1.desc': 'Verfolge deine Konzentration in Echtzeit ohne Latenz. Kein Ladebildschirm, keine Reibung.',
    'features.2.title': 'Datenschutz',
    'features.2.desc': 'Deine Daten bleiben auf deinem Gerät. Immer. Wir verkaufen oder teilen deine Daten nie.',
    'features.3.title': 'Gamifiziert',
    'features.3.desc': 'Verbessere deine Gewohnheiten mit Quests, Serien und echten Belohnungen.',
    'features.4.title': 'Tiefgehende Analysen',
    'features.4.desc': 'Verstehe deine Muster mit detaillierten Insights. Sieh genau, wohin deine Zeit fließt.',
    'features.5.title': 'Community',
    'features.5.desc': 'Tritt gegen Freunde an und steige in der Rangliste auf. Verantwortung, die funktioniert.',

    // App Preview
    'preview.label': 'App-Vorschau',
    'preview.title': 'In Aktion sehen',
    'preview.subtitle': 'Ein Blick in deinen zukünftigen Fokus-Begleiter.',
    'preview.home': 'Start',
    'preview.quests': 'Quests',
    'preview.goodMorning': 'Guten Morgen',
    'preview.streak': 'Serie',
    'preview.days': 'Tage',
    'preview.pixelCompanion': 'Pixel-Begleiter',
    'preview.todaysQuests': "Heutige Quests",
    'preview.tapToStart': 'Tippen zum Starten',

    // Social Proof
    'social.label': 'Betrieben mit',

    // CTA
    'cta.label': 'Warteliste',
    'cta.title': 'Bereit, deinen Fokus zu verbessern?',
    'cta.subtitle': 'Sei der Erste mit exklusivem Frühzugang und Bonus-Belohnungen.',
    'cta.placeholder': 'deine@email.com',
    'cta.button': 'Platz reservieren',
    'cta.success.1': 'Du bist auf der Liste!',
    'cta.success.2': 'Wir benachrichtigen dich beim Launch von QuestPocket.',

    // Footer
    'footer.tagline': 'Mache deine Konzentration spielend. Baue bessere Gewohnheiten auf.',
    'footer.product': 'Produkt',
    'footer.company': 'Unternehmen',
    'footer.legal': 'Rechtliches',
    'footer.privacy': 'Datenschutz',
    'footer.terms': 'AGB',
    'footer.cookies': 'Cookies',
    'footer.licenses': 'Lizenzen',
    'footer.twitter': 'Twitter',
    'footer.github': 'GitHub',
    'footer.discord': 'Discord',
    'footer.copyright': '© 2026 QuestPocket. Alle Rechte vorbehalten.',
  },
}

export const langFlags: Record<Lang, string> = {
  en: '🇬🇧',
  fr: '🇫🇷',
  de: '🇩🇪',
}

export const langNames: Record<Lang, string> = {
  en: 'EN',
  fr: 'FR',
  de: 'DE',
}
