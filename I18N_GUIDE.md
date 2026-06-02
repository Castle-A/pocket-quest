# 🌍 Internationalisation — Règle des 3 Langues

> **RÈGLE OBLIGATOIRE** : Tout texte affiché à l'utilisateur dans l'app Pocket Quest
> doit être rédigé en **3 langues** : Français 🇫🇷, Anglais 🇬🇧, Allemand 🇩🇪.

## Format d'écriture

Chaque description, label, message, bouton, notification, etc. doit suivre ce format :

```
FR: <texte en français>
EN: <text text in English>
DE: <text auf Deutsch>
```

## Exemple

```json
{
  "welcome_message": {
    "fr": "Bienvenue dans Pocket Quest ! Gagne ton temps de scroll.",
    "en": "Welcome to Pocket Quest! Earn your scroll time.",
    "de": "Willkommen bei Pocket Quest! Verdiene deine Scroll-Zeit."
  },
  "daily_goal_met": {
    "fr": "Objectif quotidien atteint ! 🎉 +{points} QP débloqués",
    "en": "Daily goal reached! 🎉 +{points} QP unlocked",
    "de": "Tagesziel erreicht! 🎉 +{points} QP freigeschaltet"
  }
}
```

## Langue par défaut

1. **Français** (FR) — langue par défaut (LeRoy est francophone)
2. **Anglais** (EN) — langue internationale
3. **Allemand** (DE) — LeRoy vit en Allemagne

## Fichier de traductions

Toutes les traductions centralisées dans :
- `lib/i18n/fr.json`
- `lib/i18n/en.json`
- `lib/i18n/de.json`

Le système détecte la langue du téléphone automatiquement,
avec choix manuel dans les Langues.
