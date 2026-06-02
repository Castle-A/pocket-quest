# 🎨 Pocket Quest v2 — Design System

> **Version** : 2.0  
> **Date** : 2026-06-08  
> **Auteur** : Dev (Developer Profile) pour LeRoy  
> **Référence visuelle** : Samsung Health, Linear, Strava  
> **Statut** : Complet  

---

## 📖 Table des Matières

1. [Philosophie Design](#1-philosophie-design)
2. [Palette de Couleurs](#2-palette-de-couleurs)
3. [Typographie](#3-typographie)
4. [Composants UI](#4-composants-ui)
5. [Icônes](#5-icônes)
6. [Animations & Micro-interactions](#6-animations--micro-interactions)
7. [Guidelines d'Interface](#7-guidelines-dinterface)
8. [Responsive & Accessibilité](#8-responsive--accessibilité)
9. [Références Visuelles](#9-références-visuelles)

---

## 1. Philosophie Design

### 1.1 Principes directeurs

```
┌─────────────────────────────────────────────────────────┐
│              POCKET QUEST — DESIGN PRINCIPLES           │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  1. MATURE BUT FRIENDLY                                 │
│     Mignon mais PAS enfantin. Pas de pixel art.         │
│     L'app s'adresse à des adultes (18-45 ans).          │
│     Le ton est encourageant, jamais condescendant.      │
│                                                         │
│  2. CLEAN & BREATHABLE                                  │
│     Espace négatif généreux. Pas de surcharge.          │
│     Chaque écran a UN objectif clair.                   │
│     Inspiré de Samsung Health + Linear.                 │
│                                                         │
│  3. SATISFYING FEEDBACK                                 │
│     Chaque action a un feedback visuel/sonore.          │
│     Les micro-interactions sont fluides et gratifiantes.│
│     Le "ding!" de Duolingo comme référence.             │
│                                                         │
│  4. PROGRESSIVE DISCLOSURE                              │
│     Montrer l'essentiel, cacher le complexe.            │
│     Les fonctionnalités avancées sont accessibles       │
│     mais pas imposées.                                  │
│                                                         │
│  5. INCLUSIVE & ACCESSIBLE                              │
│     Contraste WCAG AA minimum.                          │
│     Tailles de touche ≥ 44pt.                           │
│     Support daltonien.                                  │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### 1.2 Style visuel

| Attribut | Choix | Justification |
|---|---|---|
| **Style général** | Flat design + subtle shadows | Moderne, clean, pas daté |
| **Coins arrondis** | 12-20px (cartes), 24px (boutons) | Doux, friendly, Samsung Health-like |
| **Ombres** | Subtle, 2 niveaux (card, floating) | Profondeur sans lourdeur |
| **Bordures** | Minimalistes, 1px, couleur claire | Délicates, pas aggressives |
| **Gradients** | Subtils, 2 couleurs max | Accent visuel, pas criard |
| **Illustrations** | Style outline + flat color | Cohérent avec les icônes |
| **Photos** | Minimalistes, avec filtre couleur | Unification visuelle |

### 1.3 Ce qu'on N'EST PAS

- ❌ Pixel art (trop enfantin, pas mature)
- ❌ Neumorphism (daté, pas accessible)
- ❌ Skeumorphism (trop lourd)
- ❌ Material Design pur (trop Google)
- ❌ Glassmorphism partout (trop iOS 7)

### 1.4 Ce qu'ON EST

- ✅ Style Samsung Health (clean, cartes arrondies, couleurs douces)
- ✅ Touches de Linear (typographie nette, animations fluides)
- ✅ Touches de Strava (données visuelles, progression claire)
- ✅ Identité propre (avatar, quêtes, RPG léger)

---

## 2. Palette de Couleurs

### 2.1 Couleurs primaires

| Nom | Hex | Usage | Exemple |
|---|---|---|---|
| **Ocean Blue** | `#2B7FE8` | Couleur principale, CTA, liens | Boutons primaires, liens |
| **Ocean Blue Light** | `#5A9CF0` | Hover, états actifs | Boutons hover |
| **Ocean Blue Dark** | `#1A5BBF` | Pressed, états enfoncés | Boutons pressed |

### 2.2 Couleurs secondaires

| Nom | Hex | Usage | Exemple |
|---|---|---|---|
| **Mint Green** | `#34C759` | Succès, progression, santé | Barres de progression, checkmarks |
| **Mint Green Light** | `#6DD98A` | Backgrounds légers | Badges succès |
| **Warm Orange** | `#FF9500` | Attention, streaks, feu | Streak counter, badges |
| **Warm Orange Light** | `#FFB340` | Backgrounds légers | Alertes douces |
| **Coral Pink** | `#FF3B5C` | Erreur, HP, urgent | Erreurs, notifications |
| **Coral Pink Light** | `#FF6B84` | Backgrounds légers | Alertes erreur |

### 2.3 Couleurs neutres

| Nom | Hex | Usage |
|---|---|---|
| **Charcoal** | `#1C1C1E` | Texte principal |
| **Graphite** | `#3A3A3C` | Texte secondaire |
| **Silver** | `#8E8E93` | Texte tertiaire, placeholders |
| **Light Gray** | `#F2F2F7` | Backgrounds, séparateurs |
| **White** | `#FFFFFF` | Cards, surfaces |
| **Off-White** | `#FAFAFC` | Background principal |

### 2.4 Couleurs de niveaux

| Niveau | Couleur | Hex |
|---|---|---|
| Novice (1-5) | Gris | `#8E8E93` |
| Apprenti (2-4) | Bleu clair | `#5A9CF0` |
| Explorateur (3) | Vert menthe | `#34C759` |
| Aventurier (4) | Orange | `#FF9500` |
| Initié (5) | Violet | `#AF52DE` |
| Expert (10) | Or | `#FFD60A` |
| Maître (15) | Rouge | `#FF3B5C` |
| Légende (30) | Arc-en-ciel | Gradient |
| Mythique (50) | Noir doré | `#1C1C1E` + `#FFD60A` |

### 2.5 Couleurs d'activité

| Activité | Couleur | Hex | Icône |
|---|---|---|---|
| Focus | Ocean Blue | `#2B7FE8` | 🎯 |
| Marche | Mint Green | `#34C759` | 🚶 |
| Sport | Warm Orange | `#FF9500` | 💪 |
| Méditation | Lavande | `#AF52DE` | 🧘 |
| Social | Sky Blue | `#5AC8FA` | 👥 |
| Habitudes | Teal | `#5AC8FA` | ✅ |

### 2.6 Palette dark mode

| Nom | Hex | Usage |
|---|---|---|
| **Dark BG** | `#000000` | Background principal |
| **Dark Surface** | `#1C1C1E` | Cards, surfaces |
| **Dark Elevated** | `#2C2C2E` | Modals, popups |
| **Dark Text** | `#FFFFFF` | Texte principal |
| **Dark Text Secondary** | `#8E8E93` | Texte secondaire |

---

## 3. Typographie

### 3.1 Font families

| Plateforme | Font principale | Font fallback |
|---|---|---|
| **iOS** | SF Pro Display / Text | System UI |
| **Android** | Roboto | System UI |
| **Web** | Inter | -apple-system, Roboto, sans-serif |

### 3.2 Échelle typographique

| Style | Size | Weight | Line Height | Usage |
|---|---|---|---|---|
| **Display** | 34px | Bold (700) | 40px | Titres de section, chiffres clés |
| **Title 1** | 28px | Semibold (600) | 34px | Titres d'écran |
| **Title 2** | 22px | Semibold (600) | 28px | Sous-titres |
| **Title 3** | 20px | Medium (500) | 26px | Titres de carte |
| **Headline** | 17px | Semibold (600) | 22px | Labels importants |
| **Body** | 17px | Regular (400) | 22px | Texte courant |
| **Body Small** | 15px | Regular (400) | 20px | Texte secondaire |
| **Caption** | 13px | Regular (400) | 18px | Captions, timestamps |
| **Caption Small** | 11px | Medium (500) | 16px | Labels, badges |
| **Button** | 17px | Semibold (600) | 22px | Boutons |
| **Button Small** | 15px | Medium (500) | 20px | Petits boutons |
| **Overline** | 11px | Semibold (600) | 16px | Catégories, uppercase |

### 3.3 Règles typographiques

- **Jamais de texte en dessous de 11px** (lisibilité mobile)
- **Line height = font-size × 1.3 à 1.5** (lisibilité)
- **Graisse minimum pour le texte : Regular (400)** (lisibilité)
- **Titres en Semibold (600) maximum** (pas de Bold sur les titres)
- **Chiffres en tabular figures** (alignement des nombres)
- **Pas de texte italique** (lisibilité mobile)

---

## 4. Composants UI

### 4.1 Boutons

#### Bouton primaire
```
┌─────────────────────────────────┐
│  [Ocean Blue bg]                │
│  Texte: 17px, Semibold, White   │
│  Height: 48px                   │
│  Border radius: 12px            │
│  Padding: 0 24px                │
│  Shadow: 0 2px 8px rgba(43,127,232,0.3) │
└─────────────────────────────────┘
```

**États** :
- Default : Ocean Blue `#2B7FE8`
- Hover/Pressed : Ocean Blue Dark `#1A5BBF`
- Disabled : Ocean Blue Light `#5A9CF0` à 50% opacity
- Loading : Spinner blanc

#### Bouton secondaire
```
┌─────────────────────────────────┐
│  [White bg, Ocean Blue border]  │
│  Texte: 17px, Semibold, Ocean   │
│  Height: 48px                   │
│  Border radius: 12px            │
│  Border: 1.5px solid Ocean Blue │
└─────────────────────────────────┘
```

#### Bouton tertiaire (texte seul)
```
┌─────────────────────────────────┐
│  [Pas de background]            │
│  Texte: 17px, Semibold, Ocean   │
│  Height: 44px                   │
│  Padding: 0 16px                │
└─────────────────────────────────┘
```

#### Bouton icône
```
┌──────────┐
│  [44x44] │
│  Icône   │
│  24x24   │
│  r=12px  │
└──────────┘
```

#### Bouton flottant (FAB)
```
┌──────────┐
│  [56x56] │
│  Icône + │
│  r=28px  │
│  Shadow  │
└──────────┘
```

### 4.2 Cartes

#### Carte standard
```
┌─────────────────────────────────────────┐
│  [White bg]                             │
│  Border radius: 16px                    │
│  Shadow: 0 2px 12px rgba(0,0,0,0.08)   │
│  Padding: 16px                          │
│                                         │
│  [Contenu]                              │
│                                         │
└─────────────────────────────────────────┘
```

#### Carte interactive (cliquable)
```
┌─────────────────────────────────────────┐
│  [White bg]                             │
│  Border radius: 16px                    │
│  Shadow: 0 2px 12px rgba(0,0,0,0.08)   │
│  Padding: 16px                          │
│  Pressed: scale(0.98) + shadow reduce   │
│  Hover: shadow increase                 │
└─────────────────────────────────────────┘
```

#### Carte de statistique
```
┌─────────────────────────────────────────┐
│  [White bg]                             │
│  Border radius: 16px                    │
│  Padding: 20px                          │
│                                         │
│  ┌─────┐                                │
│  │ Icône│  Chiffre (34px, Bold)         │
│  │ 24px │  Label (13px, Regular)        │
│  └─────┘                                │
│                                         │
└─────────────────────────────────────────┘
```

### 4.3 Barre de progression

#### Barre de progression linéaire
```
┌─────────────────────────────────────────┐
│  ████████████░░░░░░░░░░░░░░░░░░░░░░░░  │
│  [Mint Green]         [Light Gray bg]   │
│  Height: 8px                            │
│  Border radius: 4px                     │
└─────────────────────────────────────────┘
```

#### Barre de progression circulaire
```
      ╭─────────╮
     ╱  ┌───┐    ╲
    │   │75%│     │
    │   └───┘     │
     ╲           ╱
      ╰─────────╯
  Stroke: 6px
  Color: Mint Green
  Background: Light Gray
  Size: 80px
```

### 4.4 Badges

#### Badge de niveau
```
┌──────────┐
│  Niv. 10 │
│  r=8px   │
│  bg=Gold │
│  11px    │
└──────────┘
```

#### Badge d'activité
```
┌──────────────┐
│ 🎯 Focus     │
│ r=12px       │
│ bg=Ocean/10% │
│ 13px, Medium │
└──────────────┘
```

#### Badge de streak
```
┌──────────────┐
│ 🔥 15 jours  │
│ r=12px       │
│ bg=Orange/10%│
│ 13px, Medium │
└──────────────┘
```

### 4.5 Inputs

#### Champ de texte
```
┌─────────────────────────────────────────┐
│  Label (13px, Medium, Graphite)         │
│  ┌───────────────────────────────────┐  │
│  │  Placeholder (15px, Silver)       │  │
│  └───────────────────────────────────┘  │
│  Height: 48px                           │
│  Border radius: 12px                    │
│  Border: 1px solid #E5E5EA             │
│  Focus: border = Ocean Blue             │
│  Error: border = Coral Pink             │
└─────────────────────────────────────────┘
```

### 4.6 Navigation

#### Bottom tab bar
```
┌──────────────────────────────────────────────┐
│  🏠      🎯       👥       🤖       ⚙️     │
│  Home   Quest    Guild    Coach   Settings   │
│                                              │
│  Height: 83px (avec safe area)               │
│  Background: White                           │
│  Border top: 1px solid Light Gray            │
│  Active: Ocean Blue                          │
│  Inactive: Silver                            │
│  Icon size: 24px                             │
│  Label: 10px, Medium                         │
└──────────────────────────────────────────────┘
```

### 4.7 Avatars

| Taille | Usage |
|---|---|
| 24px | Commentaires, listes |
| 32px | Navigation, headers |
| 48px | Profils, cartes |
| 64px | Profil détaillé |
| 88px | Onboarding, écran de victoire |

**Style** : Cercle avec bordure subtile (1px, Light Gray). Image de fond avec initiales si pas de photo.

### 4.8 Modales

#### Bottom sheet
```
┌─────────────────────────────────────────┐
│  [Handle: 36x4px, Silver, r=2px]       │
│                                         │
│  Titre (22px, Semibold)                 │
│                                         │
│  Contenu...                             │
│                                         │
│  [Bouton primaire]                      │
│  [Bouton secondaire]                    │
│                                         │
│  Border radius top: 20px                │
│  Background: White                      │
│  Max height: 80%                        │
└─────────────────────────────────────────┘
```

#### Alert dialog
```
┌─────────────────────────────────────────┐
│                                         │
│  Icône (48px)                           │
│                                         │
│  Titre (20px, Semibold)                 │
│  Message (15px, Regular)                │
│                                         │
│  [Action principale]                    │
│  [Action secondaire]                    │
│                                         │
│  Border radius: 16px                    │
│  Padding: 24px                          │
│  Max width: 300px                       │
└─────────────────────────────────────────┘
```

---

## 5. Icônes

### 5.1 Style d'icônes

| Attribut | Choix |
|---|---|
| **Style** | Outline (contour) |
| **Épaisseur** | 1.5px |
| **Taille** | 24x24px (standard), 20x20px (petit), 32x32px (grand) |
| **Coins** | Arrondis (cap: round, join: round) |
| **Couleur** | Hérite du texte (currentColor) |
| **Grid** | 24x24px avec padding 2px |

### 5.2 Set d'icônes principal

| Icône | Nom | Usage |
|---|---|---|
| 🏠 | home | Accueil |
| 🎯 | target | Quêtes, focus |
| 👥 | users | Guilde, social |
| 🤖 | bot | Coach IA |
| ⚙️ | settings | Paramètres |
| 🔥 | flame | Streak |
| ⭐ | star | Favoris, premium |
| 🏆 | trophy | Récompenses, ligues |
| 📊 | chart | Statistiques |
| 🎁 | gift | Récompenses |
| 💎 | diamond | Premium |
| 🧘 | meditation | Méditation |
| 💪 | muscle | Sport |
| 🚶 | walk | Marche |
| ✅ | check | Complété |
| 🔔 | bell | Notifications |
| 👤 | user | Profil |
| 📷 | camera | Photo |
| 🔍 | search | Recherche |
| ➕ | plus | Ajouter |
| ✏️ | edit | Modifier |
| 🗑️ | trash | Supprimer |
| ↗️ | share | Partager |
| ❤️ | heart | Santé, favoris |

### 5.3 Icônes d'animation

Certaines icônes ont des versions animées :
- 🔥 Flame : animation de flamme (boucle, 1s)
- ⭐ Star : animation d'éclat (trigger, 0.5s)
- 🏆 Trophy : animation de célébration (trigger, 1s)
- 💎 Diamond : animation de brillance (boucle, 2s)

---

## 6. Animations & Micro-interactions

### 6.1 Principes d'animation

| Principe | Valeur |
|---|---|
| **Durée standard** | 200-300ms |
| **Durée rapide** | 100-150ms |
| **Durée lente** | 400-500ms |
| **Easing standard** | `cubic-bezier(0.25, 0.1, 0.25, 1.0)` (ease-out) |
| **Easing entrée** | `cubic-bezier(0.0, 0.0, 0.2, 1.0)` (ease-out) |
| **Easing sortie** | `cubic-bezier(0.4, 0.0, 1.0, 1.0)` (ease-in) |
| **Easing rebond** | `cubic-bezier(0.34, 1.56, 0.64, 1.0)` (spring) |

### 6.2 Micro-interactions

#### Bouton pressé
```
Scale: 1.0 → 0.97 → 1.0
Duration: 100ms → 100ms
Easing: ease-out → spring
```

#### Carte tap
```
Scale: 1.0 → 0.98 → 1.0
Shadow: subtle → reduced → subtle
Duration: 150ms
```

#### Pull to refresh
```
Threshold: 80px
Animation: spinner rotation (1s loop)
Haptic: light impact
```

#### Chargement de page
```
Type: Skeleton shimmer
Duration: 1.5s loop
Easing: ease-in-out
```

#### Transition entre écrans
```
Type: Slide from right (push) / Slide from bottom (modal)
Duration: 300ms
Easing: ease-out
```

#### Animation de célébration (gain de QP)
```
1. "+50 QP" text fade up + scale (300ms)
2. Confettis burst (500ms)
3. Icône pulse (200ms)
4. Haptic: medium impact
5. Sound: "ding!" (optionnel)
```

#### Animation de streak
```
1. Flame icon scale up (200ms, spring)
2. Number counter animation (500ms)
3. Glow effect (300ms)
4. Haptic: heavy impact
```

#### Animation de niveau up
```
1. Flash screen (200ms)
2. Level badge scale + rotate (500ms, spring)
3. Confettis burst (800ms)
4. Text "Niveau X!" fade in (300ms)
5. Haptic: succession (3 impacts)
```

### 6.3 Skeleton loading

```
┌─────────────────────────────────────────┐
│  ┌──────┐  ████████████████████        │
│  │ ░░░░ │  ████████████████████        │
│  │ ░░░░ │  ████████████░░░░░░░░        │
│  └──────┘                               │
│  ████████████████████████████           │
│  ████████████████████████████           │
│  ████████████░░░░░░░░░░░░░░░░           │
└─────────────────────────────────────────┘

Couleur: #F2F2F7 → #E5E5EA → #F2F2F7
Animation: shimmer gauche → droite
Duration: 1.5s loop
```

### 6.4 Haptic feedback

| Action | Type | Intensité |
|---|---|---|
| Tap bouton | Light impact | 0.3 |
| Succès (QP gagné) | Medium impact | 0.5 |
| Niveau up | Heavy impact | 0.8 |
| Erreur | Notification (error) | — |
| Streak atteint | Success notification | — |
| Pull to refresh | Light impact | 0.3 |

---

## 7. Guidelines d'Interface

### 7.1 Espacement

**Grille de base : 8px**

| Token | Valeur | Usage |
|---|---|---|
| **xs** | 4px | Espacement minimal |
| **sm** | 8px | Entre éléments proches |
| **md** | 16px | Padding standard |
| **lg** | 24px | Entre sections |
| **xl** | 32px | Espacement majeur |
| **2xl** | 48px | Séparation de blocs |
| **3xl** | 64px | Marges d'écran |

### 7.2 Safe areas

| Zone | Valeur |
|---|---|
| **Top safe area** | 44px (notch) / 20px (no notch) |
| **Bottom safe area** | 34px (home indicator) / 0px |
| **Side margins** | 16px |
| **Content max width** | 428px (iPhone 14 Pro Max) |

### 7.3 Hiérarchie visuelle

```
Niveau 1 : Titre d'écran (28px, Semibold)
  └─ Niveau 2 : Titre de section (22px, Semibold)
       └─ Niveau 3 : Titre de carte (20px, Medium)
            └─ Niveau 4 : Texte courant (17px, Regular)
                 └─ Niveau 5 : Texte secondaire (15px, Regular)
                      └─ Niveau 6 : Caption (13px, Regular)
```

### 7.4 Règles de composition

- **Un seul CTA principal par écran**
- **Maximum 3 couleurs par écran** (hors images)
- **Ratio texte/fond : 70/30 minimum**
- **Alignement cohérent** (gauche pour le texte, centre pour les chiffres)
- **Groupement logique** (loi de proximité de la Gestalt)

### 7.5 États des composants

Chaque composant interactif doit avoir ces états :
1. **Default** — État normal
2. **Hover** — Survol (web)
3. **Pressed** — Appuyé
4. **Focused** — Focus clavier
5. **Disabled** — Désactivé
6. **Loading** — Chargement
7. **Error** — Erreur
8. **Success** — Succès

---

## 8. Responsive & Accessibilité

### 8.1 Breakpoints

| Breakpoint | Largeur | Appareils |
|---|---|---|
| **Mobile S** | 320px | iPhone SE |
| **Mobile M** | 375px | iPhone 14 |
| **Mobile L** | 414px | iPhone 14 Plus |
| **Tablet** | 768px | iPad |
| **Desktop** | 1024px | iPad Pro / Web |

### 8.2 Accessibilité

| Critère | Standard | Implémentation |
|---|---|---|
| **Contraste texte** | WCAG AA (4.5:1) | Charcoal sur White = 16:1 ✅ |
| **Contraste large texte** | WCAG AA (3:1) | Graphite sur White = 7:1 ✅ |
| **Taille de touche** | ≥ 44x44pt | Boutons = 48px ✅ |
| **Support VoiceOver** | Tous les éléments | Labels descriptifs |
| **Support TalkBack** | Tous les éléments | Content descriptions |
| **Daltonisme** | Ne pas utiliser couleur seule | Icônes + texte |
| **Réduction de mouvement** | `prefers-reduced-motion` | Désactiver animations |
| **Taille de texte dynamique** | Support iOS Dynamic Type | Scales avec les préférences |

### 8.3 Support daltonien

| Type | Prévalence | Adaptation |
|---|---|---|
| **Deuteranope** | 6% hommes | Éviter rouge/vert ensemble |
| **Protanope** | 2% hommes | Utiliser bleu/orange |
| **Tritanope** | 0.01% | Éviter bleu/jaune |

**Solution** : Toujours accompagner la couleur d'une icône ou d'un texte.

---

## 9. Références Visuelles

### 9.1 Samsung Health — Ce qu'on copie

- **Cartes arrondies** avec ombres subtiles
- **Couleurs douces** (bleu, vert, orange)
- **Barres de progression** circulaires
- **Feedback visuel** immédiat (cœurs qui se remplissent)
- **Objectifs flexibles** (pas de chiffre imposé)
- **Navigation bottom** claire et simple

### 9.2 Linear — Ce qu'on copie

- **Typographie nette** et lisible
- **Animations fluides** et rapides
- **Espacement généreux**
- **Hiérarchie visuelle** claire
- **Micro-interactions** satisfaisantes

### 9.3 Strava — Ce qu'on copie

- **Données visuelles** (graphiques, stats)
- **Progression claire** (avant/après)
- **Couleur orange** comme accent
- **Feed social** engageant

### 9.4 Duolingo — Ce qu'on copie

- **Feedback sonore** satisfaisant
- **Animation de célébration**
- **Streak counter** visible
- **Barre de progression** motivante

### 9.5 Ce qu'on évite

- **Habitica** : Trop complexe, pixel art
- **Headspace** : Trop minimaliste, pas assez engageant
- **Fitbit** : Trop centré hardware
- **Forest** : Trop simple, pas de progression long terme

---

*Design System créé le 2026-06-08 — Dev pour LeRoy*
*Inspiré de Samsung Health, Linear, Strava, Duolingo*
