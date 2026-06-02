# 📐 Pocket Quest v2 — Wireframes &Maquettes

> **Version** : 2.0  
> **Date** : 2026-06-08  
> **Auteur** : Dev (Developer Profile) pour LeRoy  
> **Style** : Samsung Health-inspired, clean & moderne  
> **Statut** : Complet  

---

## 📖 Table des Matières

1. [Architecture de Navigation](#1-architecture-de-navigation)
2. [Onboarding (Écrans 1-4)](#2-onboarding-écrans-1-4)
3. [Home Dashboard](#3-home-dashboard)
4. [Activity Log](#4-activity-log)
5. [Focus Mode](#5-focus-mode)
6. [Social / Community](#6-social--community)
7. [Profile & Settings](#7-profile--settings)
8. [Premium / Paywall](#8-premium--paywall)
9. [Écrans de transition](#9-écrans-de-transition)

---

## 0. Navigation Globale

### Bottom Tab Bar (tous les écrans principaux)

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│  🏠 Home   🎯 Quest   👥 Guild   🤖 Coach   ⚙️ Settings │
│  10px      10px       10px       10px       10px        │
│  24px      24px       24px       24px       24px        │
│  Ocean     Ocean      Ocean      Ocean      Ocean        │
│  (active)  Silver     Silver     Silver     Silver       │
│                                                          │
│  Height: 83px (incl. safe area 34px)                     │
│  Background: White                                       │
│  Border top: 1px solid #F2F2F7                          │
│  Active: Ocean Blue #2B7FE8                              │
│  Inactive: Silver #8E8E93                                │
└──────────────────────────────────────────────────────────┘
```

**Règles** :
- L'onglet central (Quest) est l'action principale — légèrement plus grand (28px)
- Badge de notification sur Guild (si messages non lus)
- Badge de streak sur Home (si streak actif)

---

## 1. Architecture de Navigation

```
                                    ┌─────────────┐
                                    │  Splash     │
                                    │  Screen     │
                                    └──────┬──────┘
                                           │
                                    ┌──────▼──────┐
                                    │  Onboarding │
                                    │  (4 pages)  │
                                    └──────┬──────┘
                                           │
                    ┌──────────────────────┼──────────────────────┐
                    │                      │                      │
             ┌──────▼──────┐       ┌──────▼──────┐       ┌──────▼──────┐
             │  Home       │       │  Quest      │       │  Guild      │
             │  Dashboard  │       │  (Focus)    │       │  (Social)   │
             └──────┬──────┘       └──────┬──────┘       └──────┬──────┘
                    │                      │                      │
             ┌──────▼──────┐       ┌──────▼──────┐       ┌──────▼──────┐
             │  Activity   │       │  Focus      │       │  Leaderboard│
             │  Log        │       │  Session    │       │             │
             └──────┬──────┘       └──────┬──────┘       └──────┬──────┘
                    │                      │                      │
             ┌──────▼──────┐       ┌──────▼──────┐       ┌──────▼──────┐
             │  Stats      │       │  Focus      │       │  Guild Chat │
             │  Detail     │       │  Complete   │       │             │
             └─────────────┘       └─────────────┘       └─────────────┘

             ┌─────────────┐       ┌─────────────┐
             │  Coach IA   │       │  Settings   │
             │  (Chat)     │       │             │
             └──────┬──────┘       └──────┬──────┘
                    │                      │
             ┌──────▼──────┐       ┌──────▼──────┐
             │  Coach      │       │  Premium    │
             │  Response   │       │  Paywall    │
             └─────────────┘       └─────────────┘
```

---

## 2. Onboarding (Écrans 1-4)

### 2.1 Écran 1 — Welcome

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│                                                          │
│                                                          │
│                    🐣                                    │
│              [Animation :                                │
│               œuf qui éclot]                            │
│                                                          │
│                                                          │
│              POCKET QUEST                                │
│              ─────────────────                           │
│              "Gagne ton temps                            │
│               de vie"                                    │
│                                                          │
│              Transforme ton                              │
│              quotidien en                                │
│              aventure ✨                                 │
│                                                          │
│                                                          │
│                                                          │
│                                                          │
│              ● ○ ○ ○  (page indicator)                  │
│                                                          │
│              ┌─────────────────────────┐                 │
│              │     Commencer →         │                 │
│              │     (Ocean Blue, 48px)  │                 │
│              └─────────────────────────┘                 │
│                                                          │
│              Passer l'onboarding                         │
│              (tertiary button)                           │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Éléments UI** :
| Élément | Type | Détails |
|---|---|---|
| Illustration | Animation Lottie | Œuf qui éclot → poussin, boucle 3s |
| Titre | Display 34px | "POCKET QUEST", Bold, Charcoal |
| Slogan | Body 17px | "Gagne ton temps de vie", Graphite |
| Sous-texte | Body Small 15px | Description, Silver |
| Indicateur | Page dots | 4 dots, Ocean Blue actif |
| CTA | Button primary | "Commencer →", 48px height |
| Skip | Button tertiary | "Passer l'onboarding" |

**Interactions** :
- Swipe gauche → écran suivant
- Tap "Commencer" → écran suivant
- Tap "Passer" → Home Dashboard
- Animation auto-play au chargement

**États** :
- Loading : Skeleton shimmer sur illustration
- Error : Message "Erreur de chargement" + retry

---

### 2.2 Écran 2 — Comment ça marche

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│                                                          │
│              [Illustration :                              │
│               Personnage avec                            │
│               téléphone, bulles                           │
│   d'activité autour]                                     │
│                                                          │
│              Comment ça marche ?                         │
│              ─────────────────                           │
│                                                          │
│              ┌─────────────────────────────────┐         │
│              │ 🎯  Focus        → +50 QP       │         │
│              │ 🚶  Marche       → +30 QP       │         │
│              │ 💪  Sport        → +40 QP       │         │
│              │ 🧘  Méditation   → +25 QP       │         │
│              └─────────────────────────────────┘         │
│                                                          │
│              Chaque activité te                          │
│              rapporte des QP                             │
│              (Points Quest) 🏆                           │
│                                                          │
│                                                          │
│              ● ● ○ ○                                     │
│                                                          │
│              ┌─────────────────────────┐                 │
│              │     Suivant →           │                 │
│              └─────────────────────────┘                 │
│                                                          │
│              ← Retour                                    │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Éléments UI** :
| Élément | Type | Détails |
|---|---|---|
| Illustration | Animation Lottie | Personnage + bulles d'activité |
| Titre | Title 1 28px | "Comment ça marche ?" |
| Liste activités | Carte | 4 lignes, icône + texte + QP |
| Description | Body 17px | Explication des QP |
| Navigation | Dots + boutons | Retour + Suivant |

**Interactions** :
- Swipe gauche/droite → navigation
- Tap activité → tooltip avec détail
- Animation des icônes en séquence (staggered, 200ms interval)

---

### 2.3 Écran 3 — Choix de l'avatar

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│              Choisis ton avatar                          │
│              ─────────────────                           │
│              Tu pourras le changer                       │
│              plus tard                                   │
│                                                          │
│         ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐             │
│         │ 🐣  │  │ 🐱  │  │ 🐶  │  │ 🦊  │             │
│         │     │  │     │  │     │  │     │             │
│         └─────┘  └─────┘  └─────┘  └─────┘             │
│         (selected)                                       │
│         border: 2px Ocean Blue                           │
│                                                          │
│         ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐             │
│         │ 🐼  │  │ 🐸  │  │ 🐰  │  │ 🦁  │             │
│         │     │  │     │  │     │  │     │             │
│         └─────┘  └─────┘  └─────┘  └─────┘             │
│                                                          │
│              ┌─────────────────────────────────┐         │
│              │  Pseudo                         │         │
│              │  "Entre ton nom..."             │         │
│              └─────────────────────────────────┘         │
│                                                          │
│              ● ● ● ○                                     │
│                                                          │
│              ┌─────────────────────────┐                 │
│              │     Suivant →           │                 │
│              └─────────────────────────┘                 │
│                                                          │
│              ← Retour                                    │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Éléments UI** :
| Élément | Type | Détails |
|---|---|---|
| Grille avatars | 4x2 grid | 8 avatars, 64x64px chacun |
| Avatar sélectionné | Border | 2px Ocean Blue + scale 1.1 |
| Input pseudo | Text field | 48px, placeholder, max 20 chars |
| Validation | Real-time | Vérifier unicité (debounce 500ms) |

**Interactions** :
- Tap avatar → sélection + animation (scale bounce)
- Saisie pseudo → validation en temps réel
- Pseudo invalide → bordure Coral Pink + message d'erreur
- Pseude valide → bordure Mint Green

**États** :
- Pseude vide : Bouton "Suivant" désactivé
- Pseude pris : "Ce pseudo est déjà pris"
- Pseude valide : Bouton activé

---

### 2.4 Écran 4 — Objectifs

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│              Tes premiers objectifs                      │
│              ─────────────────                           │
│              Choisis 3 objectifs                         │
│              pour commencer                              │
│                                                          │
│              ┌─────────────────────────────────┐         │
│              │ 🎯  Sessions de focus           │         │
│              │     "Je veux me concentrer      │         │
│              │      plus souvent"              │         │
│              │                    [Toggle ON]   │         │
│              └─────────────────────────────────┘         │
│                                                          │
│              ┌─────────────────────────────────┐         │
│              │ 🚶  Marche quotidienne          │         │
│              │     "Je veux marcher 10k pas    │         │
│              │      par jour"                  │         │
│              │                    [Toggle ON]   │         │
│              └─────────────────────────────────┘         │
│                                                          │
│              ┌─────────────────────────────────┐         │
│              │ 💪  Activité physique           │         │
│              │     "Je veux faire du sport     │         │
│              │      3x/semaine"                │         │
│              │                    [Toggle OFF]  │         │
│              └─────────────────────────────────┘         │
│                                                          │
│              ┌─────────────────────────────────┐         │
│              │ 🧘  Méditation                  │         │
│              │     "Je veux méditer            │         │
│              │      chaque matin"              │         │
│              │                    [Toggle ON]   │         │
│              └─────────────────────────────────┘         │
│                                                          │
│              ● ● ● ●                                     │
│                                                          │
│              ┌─────────────────────────┐                 │
│              │     C'est parti ! 🚀    │                 │
│              └─────────────────────────┘                 │
│                                                          │
│              ← Retour                                    │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Éléments UI** :
| Élément | Type | Détails |
|---|---|---|
| Objectifs | Toggle cards | 4 options, toggle switch |
| Icône | 24px | Par objectif |
| Titre | Headline 17px | Nom de l'objectif |
| Description | Caption 13px | Détail de l'objectif |
| Toggle | Switch iOS-style | Ocean Blue quand ON |

**Interactions** :
- Toggle ON/OFF → animation du switch
- Minimum 1 objectif requis pour continuer
- Tap "C'est parti !" → Home Dashboard + animation de célébration

---

## 3. Home Dashboard

### 3.1 Vue principale

```
┌──────────────────────────────────────────────────────────┐
│  ┌──────────────────────────────────────────────────┐    │
│  │  Bonjour, Alex ! 👋                    [🔔] [👤] │    │
│  │  Body 17px                              Bell Pic  │    │
│  └──────────────────────────────────────────────────┘    │
│                                                          │
│  ┌──────────────────────────────────────────────────┐    │
│  │  [Ocean Blue gradient bg]                        │    │
│  │                                                  │    │
│  │  🔥 15              Niveau 5                     │    │
│  │  jours              Initié                       │    │
│  │  Streak             ████████░░ 2 200/3 000 QP   │    │
│  │                                                  │    │
│  │  ┌────┐  ┌────┐  ┌────┐  ┌────┐                 │    │
│  │  │ 🐣 │  │ QP │  │ 🎯 │  │ 🏆 │                 │    │
│  │  │    │  │ 450│  │ 12 │  │  3 │                 │    │
│  │  │Avatar│ │/500│  │Quest│  │Badg│                 │    │
│  │  └────┘  └────┘  └────┘  └────┘                 │    │
│  │                                                  │    │
│  └──────────────────────────────────────────────────┘    │
│                                                          │
│  Quête du jour                              [Voir tout]  │
│  ┌──────────────────────────────────────────────────┐    │
│  │  🎯  3 sessions de focus                        │    │
│  │      ████████████░░░░░░  2/3 complétées         │    │
│  │      +100 QP à la complétion                    │    │
│  └──────────────────────────────────────────────────┘    │
│                                                          │
│  Activités récentes                         [Voir tout]  │
│  ┌──────────────────────────────────────────────────┐    │
│  │  🎯  Focus — 25 min              +50 QP    14h  │    │
│  │  🚶  Marche — 8 500 pas          +25 QP    12h  │    │
│  │  🧘  Méditation — 10 min         +25 QP    08h  │    │
│  └──────────────────────────────────────────────────┘    │
│                                                          │
│  ┌──────────────────────────────────────────────────┐    │
│  │  💡 Conseil du Coach                             │    │
│  │  "Tu es à 3 jours de ton record de streak !      │    │
│  │   Continue comme ça ! 💪"                        │    │
│  │                              [Parler au Coach →] │    │
│  └──────────────────────────────────────────────────┘    │
│                                                          │
│  🏠 Home   🎯 Quest   👥 Guild   🤖 Coach   ⚙️ Settings │
└──────────────────────────────────────────────────────────┘
```

**Éléments UI** :
| Élément | Type | Détails |
|---|---|---|
| Header | Greeting | "Bonjour, {prénom} ! 👋" |
| Carte profil | Gradient card | Streak, niveau, QP, avatar |
| Avatar | 48px circle | Image ou initiales |
| Streak | Badge flame | 🔥 + nombre de jours |
| Niveau | Badge gold | "Niveau X — Titre" |
| Barre QP | Progress bar | Circulaire, Mint Green |
| Quête du jour | Carte interactive | Progression + récompense |
| Activités | Liste | 3 dernières, icône + QP + heure |
| Coach tip | Carte info | Conseil personnalisé |

**Interactions** :
- Pull to refresh → recharger les données
- Tap avatar → écran Profile
- Tap quête → écran Quest detail
- Tap activité → écran Activity detail
- Tap "Parler au Coach" → écran Coach
- Tap notification → écran Notifications

**États** :
- **Empty state** (nouvel utilisateur) : "Commence ta première quête ! 🎯"
- **Loading** : Skeleton shimmer sur toutes les cartes
- **Error** : Message "Impossible de charger" + bouton retry
- **Streak en danger** : Bannière "🔥 Ton streak se termine dans 2h !"

---

### 3.2 Home — Empty State (nouvel utilisateur)

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│              Bienvenue, Alex ! 🎉                        │
│              ─────────────────                           │
│                                                          │
│              [Illustration :                              │
│               Personnage sur une                         │
│               route qui commence]                        │
│                                                          │
│              Ta aventure commence                        │
│              ici !                                       │
│                                                          │
│              Commence par une                            │
│              session de focus ou                         │
│              enregistre une                              │
│              activité.                                   │
│                                                          │
│              ┌─────────────────────────┐                 │
│              │  🎯  Commencer un focus │                 │
│              └─────────────────────────┘                 │
│                                                          │
│              ┌─────────────────────────┐                 │
│              │  📝  Enregistrer une    │                 │
│              │      activité           │                 │
│              └─────────────────────────┘                 │
│                                                          │
│              ┌─────────────────────────┐                 │
│              │  💬  Parler au Coach    │                 │
│              └─────────────────────────┘                 │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

---

## 4. Activity Log

### 4.1 Écran principal

```
┌──────────────────────────────────────────────────────────┐
│  ← Retour              Enregistrer                       │
│                        une activité                      │
│                                                          │
│  ┌──────────────────────────────────────────────────┐    │
│  │  🔍  Rechercher une activité...                  │    │
│  └──────────────────────────────────────────────────┘    │
│                                                          │
│  Catégories                                             │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐          │
│  │ 🎯   │ │ 🚶   │ │ 💪   │ │ 🧘   │ │ ✅   │          │
│  │Focus │ │Marche│ │Sport │ │Médit.│ │Habit.│          │
│  └──────┘ └──────┘ └──────┘ └──────┘ └──────┘          │
│  (horizontal scroll)                                    │
│                                                          │
│  Activités du jour                                      │
│  ┌──────────────────────────────────────────────────┐    │
│  │  🎯  Focus — 25 min              +50 QP    ✅    │    │
│  │      14h30                                       │    │
│  ├──────────────────────────────────────────────────┤    │
│  │  🚶  Marche — 8 500 pas          +25 QP    ✅    │    │
│  │      12h15                                       │    │
│  ├──────────────────────────────────────────────────┤    │
│  │  🧘  Méditation — 10 min         +25 QP    ✅    │    │
│  │      08h00                                       │    │
│  └──────────────────────────────────────────────────┘    │
│                                                          │
│  Résumé du jour                                         │
│  ┌──────────────────────────────────────────────────┐    │
│  │  Aujourd'hui — 18 juin                           │    │
│  │                                                  │    │
│  │  QP gagnés : 100 / 500                           │    │
│  │  ████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │    │
│  │                                                  │    │
│  │  🎯 1 session    🚶 1 marche    🧘 1 méditation  │    │
│  └──────────────────────────────────────────────────┘    │
│                                                          │
│  🏠 Home   🎯 Quest   👥 Guild   🤖 Coach   ⚙️ Settings │
└──────────────────────────────────────────────────────────┘
```

**Éléments UI** :
| Élément | Type | Détails |
|---|---|---|
| Search bar | Input | Recherche d'activité |
| Catégories | Horizontal scroll | 5 catégories, icônes |
| Liste activités | Liste | Activités du jour, triées par heure |
| Résumé | Carte | QP totaux + breakdown par type |

**Interactions** :
- Tap catégorie → filtrer la liste
- Tap activité → écran de détail
- Swipe activité → supprimer (avec confirmation)
- Pull to refresh → recharger

---

### 4.2 Enregistrer une activité (modal)

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│  ───────────────────── (handle)                          │
│                                                          │
│  Enregistrer une activité                                │
│  ─────────────────                                       │
│                                                          │
│  Type d'activité                                         │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐                   │
│  │ 🎯   │ │ 🚶   │ │ 💪   │ │ 🧘   │                   │
│  │Focus │ │Marche│ │Sport │ │Médit│                    │
│  │ ✓    │ │      │ │      │ │      │                   │
│  └──────┘ └──────┘ └──────┘ └──────┘                   │
│                                                          │
│  Durée / Quantité                                        │
│  ┌──────────────────────────────────────────────────┐    │
│  │  [−]  25  minutes  [+]                           │    │
│  │       (stepper, min 5, max 180)                  │    │
│  └──────────────────────────────────────────────────┘    │
│                                                          │
│  Heure                                                   │
│  ┌──────────────────────────────────────────────────┐    │
│  │  🕐  Maintenant (14h30)                          │    │
│  └──────────────────────────────────────────────────┘    │
│                                                          │
│  Note (optionnel)                                        │
│  ┌──────────────────────────────────────────────────┐    │
│  │  "Session de travail sur le projet X..."         │    │
│  └──────────────────────────────────────────────────┘    │
│                                                          │
│  QP estimés : +50 QP                                     │
│  (calculé automatiquement)                               │
│                                                          │
│  ┌──────────────────────────────────────────────────┐    │
│  │  ✅  Enregistrer                                  │    │
│  └──────────────────────────────────────────────────┘    │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Interactions** :
- Tap type → sélection + highlight
- Stepper durée → ajustement par 5 min
- Tap heure → time picker
- Tap "Enregistrer" → validation + animation QP + fermeture

**États** :
- Durée invalide (< 5 min) : Message d'erreur
- Succès : Animation "+50 QP" + confettis + haptic

---

## 5. Focus Mode

### 5.1 Écran de démarrage

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│                                                          │
│                                                          │
│              [Illustration :                              │
│               Personnage assis,                          │
│               concentré, bulle                           │
│   de pensée avec étoiles]                                │
│                                                          │
│              Mode Focus                                  │
│              ─────────────────                           │
│                                                          │
│              Choisis la durée                            │
│              de ta session :                             │
│                                                          │
│              ┌──────┐  ┌──────┐  ┌──────┐               │
│              │  15  │  │  25  │  │  50  │               │
│              │ min  │  │ min  │  │ min  │               │
│              │      │  │ ✓    │  │      │               │
│              └──────┘  └──────┘  └──────┘               │
│              (selected: Ocean Blue bg)                   │
│                                                          │
│              ┌──────┐  ┌──────┐                          │
│              │  90  │  │ 120  │                          │
│              │ min  │  │ min  │                          │
│              │      │  │      │                          │
│              └──────┘  └──────┘                          │
│                                                          │
│              Son d'ambiance :                            │
│              ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐    │
│              │ 🌧️   │ │ 🌊   │ │ 🔥   │ │ 🔇   │     │
│              │Pluie │ │Ocean │ │Feu   │ │Silence│    │
│              └──────┘  └──────┘  └──────┘  └──────┘    │
│                                                          │
│              ┌──────────────────────────────────┐        │
│              │  🎯  Commencer (25 min)           │        │
│              └──────────────────────────────────┘        │
│                                                          │
│  🏠 Home   🎯 Quest   👥 Guild   🤖 Coach   ⚙️ Settings │
└──────────────────────────────────────────────────────────┘
```

**Éléments UI** :
| Élément | Type | Détails |
|---|---|---|
| Durée | Chip selector | 5 options (15, 25, 50, 90, 120 min) |
| Ambiance | Chip selector | 4 options + silence |
| CTA | Button primary | "Commencer (X min)" |

**Interactions** :
- Tap durée → sélection + mise à jour du CTA
- Tap ambiance → sélection (audio preview 2s)
- Tap "Commencer" → écran de session

---

### 5.2 Session de focus en cours

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│                                                          │
│                                                          │
│                                                          │
│                    ┌──────────┐                          │
│                    │          │                          │
│                    │  24:32   │                          │
│                    │  restant │                          │
│                    │          │                          │
│                    └──────────┘                          │
│                                                          │
│              [Animation : arbre qui pousse               │
│               progressivement — style Forest]            │
│                                                          │
│              🌱 → 🌿 → 🌳                               │
│              (progression visuelle)                      │
│                                                          │
│              ████████████████░░░░░░░░░░░░░░░░░░░░░░░░  │
│              25:00 / 50:00                              │
│                                                          │
│              Ne quitte pas l'app !                       │
│              L'arbre mourra si tu pars 🥀                │
│                                                          │
│                                                          │
│              ┌──────────────────────────────────┐        │
│              │  ⏸️  Pause                        │        │
│              └──────────────────────────────────┘        │
│                                                          │
│              ┌──────────────────────────────────┐        │
│              │  ⏹️  Abandonner                   │        │
│              └──────────────────────────────────┘        │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Éléments UI** :
| Élément | Type | Détails |
|---|---|---|
| Timer | Countdown | 24:32 restant, Display 34px |
| Animation | Lottie | Arbre qui pousse (progression) |
| Barre | Progress bar | Temps écoulé / total |
| Warning | Caption | Message anti-quit |
| Pause | Button secondary | Met en pause le timer |
| Abandon | Button tertiary | Confirmation requise |

**Interactions** :
- Timer se décompte en temps réel
- Animation de l'arbre progresse avec le temps
- Tap pause → timer s'arrête, bouton "Reprendre"
- Tap abandon → alerte de confirmation
- Quitter l'app → alerte "Ton arbre va mourir !"

**États** :
- En cours : Timer actif, animation fluide
- En pause : Timer arrêté, bouton "Reprendre"
- Presque terminé (2 min) : Animation accélère, haptic
- Terminé → écran de complétion

---

### 5.3 Session terminée

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│                                                          │
│                    🎉                                    │
│              [Animation :                                 │
│               confettis + arbre                          │
│               qui brille]                                │
│                                                          │
│              Session terminée !                          │
│              ─────────────────                           │
│                                                          │
│              ┌──────────────────────────────────┐        │
│              │  🎯  50 minutes de focus         │        │
│              │  🌳  Arbre planté avec succès    │        │
│              │  ⭐  +120 QP gagnés              │        │
│              │  🔥  Streak : 16 jours           │        │
│              └──────────────────────────────────┘        │
│                                                          │
│              ┌──────────────────────────────────┐        │
│              │  📸  Partager ma réussite        │        │
│              └──────────────────────────────────┘        │
│                                                          │
│              ┌──────────────────────────────────┐        │
│              │  🏠  Retour à l'accueil          │        │
│              └──────────────────────────────────┘        │
│                                                          │
│              ┌──────────────────────────────────┐        │
│              │  🎯  Nouvelle session            │        │
│              └──────────────────────────────────┘        │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Interactions** :
- Animation de célébration auto-play (2s)
- "+120 QP" avec animation de comptage
- Tap "Partager" → share sheet (image + texte)
- Tap "Retour" → Home Dashboard
- Tap "Nouvelle session" → écran de démarrage

---

## 6. Social / Community

### 6.1 Guild — Écran principal

```
┌──────────────────────────────────────────────────────────┐
│  ← Retour              Guilde                            │
│                        ─────────────────                 │
│                                                          │
│  ┌──────────────────────────────────────────────────┐    │
│  │  🏆  Classement de la semaine                   │    │
│  │      ─────────────────────────                   │    │
│  │      1. 🥇 Marie    1 250 QP                    │    │
│  │      2. 🥈 Thomas   1 100 QP                    │    │
│  │      3. 🥉 Alex     980 QP  ← (toi)            │    │
│  │      4.      Sophie  850 QP                    │    │
│  │      5.      Lucas   720 QP                    │    │
│  │      [Voir le classement complet →]             │    │
│  └──────────────────────────────────────────────────┘    │
│                                                          │
│  ┌──────────────────────────────────────────────────┐    │
│  │  👥  Ma Guilde : "Les Focus Masters"            │    │
│  │      12 membres • Niveau 3                      │    │
│  │      ████████░░ 8 000/10 000 QP guild           │    │
│  │      [Voir la guilde →]                          │    │
│  └──────────────────────────────────────────────────┘    │
│                                                          │
│  Activité de la guilde                                  │
│  ┌──────────────────────────────────────────────────┐    │
│  │  🎯  Marie a complété 3 sessions de focus       │    │
│  │      +150 QP  •  il y a 10 min                  │    │
│  ├──────────────────────────────────────────────────┤    │
│  │  🏆  Thomas a atteint le niveau 6 !             │    │
│  │      "Déterminé"  •  il y a 1h                  │    │
│  ├──────────────────────────────────────────────────┤    │
│  │  🔥  Sophie a un streak de 20 jours !           │    │
│  │      🎉  •  il y a 2h                           │    │
│  └──────────────────────────────────────────────────┘    │
│                                                          │
│  ┌──────────────────────────────────────────────────┐    │
│  │  💬  Chat de la guilde                           │    │
│  │      "Marie : Session de 50 min terminée ! 🎯"  │    │
│  │      [Ouvrir le chat →]                          │    │
│  └──────────────────────────────────────────────────┘    │
│                                                          │
│  🏠 Home   🎯 Quest   👥 Guild   🤖 Coach   ⚙️ Settings │
└──────────────────────────────────────────────────────────┘
```

**Éléments UI** :
| Élément | Type | Détails |
|---|---|---|
| Classement | Carte | Top 5, médailles, QP |
| Guilde | Carte | Nom, membres, niveau, QP |
| Activité | Liste | Feed social de la guilde |
| Chat | Carte | Dernier message + lien |

**Interactions** :
- Tap classement → écran Leaderboard complet
- Tap guilde → écran Détail Guilde
- Tap activité → profil de l'utilisateur
- Tap chat → écran Chat

---

### 6.2 Leaderboard

```
┌──────────────────────────────────────────────────────────┐
│  ← Retour              Classement                        │
│                                                          │
│  ┌──────┐  ┌──────┐  ┌──────┐                          │
│  │Semaine│ │Mois  │  │Tous  │                          │
│  │  ✓   │  │     │  │      │                          │
│  └──────┘  └──────┘  └──────┘                          │
│                                                          │
│  ┌──────────────────────────────────────────────────┐    │
│  │  🥇  Marie        1 250 QP    Niv. 8  [👤]      │    │
│  │  ─────────────────────────────────────────────── │    │
│  │  🥈  Thomas       1 100 QP    Niv. 7  [👤]      │    │
│  │  ─────────────────────────────────────────────── │    │
│  │  🥉  Alex         980 QP      Niv. 5  (toi)     │    │
│  │  ─────────────────────────────────────────────── │    │
│  │  4   Sophie       850 QP      Niv. 5  [👤]      │    │
│  │  ─────────────────────────────────────────────── │    │
│  │  5   Lucas        720 QP      Niv. 4  [👤]      │    │
│  │  ─────────────────────────────────────────────── │    │
│  │  ...                                             │    │
│  │  ─────────────────────────────────────────────── │    │
│  │  42  Toi           980 QP      Niv. 5            │    │
│  │      ████████████████░░░░░░░░░░░░░░░░░░░░░░░░  │    │
│  │      +130 QP jusqu'au rang 2                     │    │
│  └──────────────────────────────────────────────────┘    │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

---

## 7. Profile & Settings

### 7.1 Écran Profil

```
┌──────────────────────────────────────────────────────────┐
│  ← Retour              Profil                            │
│                                                          │
│  ┌──────────────────────────────────────────────────┐    │
│  │                                                  │    │
│  │              ┌────┐                              │    │
│  │              │ 🐣 │                              │    │
│  │              │    │  Alex                        │    │
│  │              └────┘  Niveau 5 — Initié           │    │
│  │              88px     ████████░░ 2 200/3 000 QP │    │
│  │              Avatar                                │    │
│  │              [Modifier]                            │    │
│  │                                                  │    │
│  └──────────────────────────────────────────────────┘    │
│                                                          │
│  Statistiques                                           │
│  ┌──────────────────────────────────────────────────┐    │
│  │  🔥  Streak actuel      15 jours                 │    │
│  │  🏆  Meilleur streak    22 jours                 │    │
│  │  ⭐  QP totaux          12 500 QP                │    │
│  │  🎯  Sessions focus     45 sessions              │    │
│  │  🌳  Arbres plantés     38 arbres                │    │
│  │  🏅  Badges débloqués   12 / 30                  │    │
│  └──────────────────────────────────────────────────┘    │
│                                                          │
│  Badges récents                                         │
│  ┌──────────────────────────────────────────────────┐    │
│  │  🔥  ⭐  🏆  🎯  💪  🧘  🚶  ✅  💎  🌟         │    │
│  │  (horizontal scroll, badges débloqués)           │    │
│  │  [Voir tous les badges →]                        │    │
│  └──────────────────────────────────────────────────┘    │
│                                                          │
│  Historique                                             │
│  ┌──────────────────────────────────────────────────┐    │
│  │  📊  Voir mes statistiques détaillées →          │    │
│  │  📅  Voir mon calendrier d'activités →           │    │
│  │  📤  Exporter mes données →                      │    │
│  └──────────────────────────────────────────────────┘    │
│                                                          │
│  🏠 Home   🎯 Quest   👥 Guild   🤖 Coach   ⚙️ Settings │
└──────────────────────────────────────────────────────────┘
```

---

### 7.2 Écran Settings

```
┌──────────────────────────────────────────────────────────┐
│                        Paramètres                        │
│                                                          │
│  Compte                                                  │
│  ┌──────────────────────────────────────────────────┐    │
│  │  👤  Modifier le profil              →           │    │
│  │  🎨  Changer d'avatar                →           │    │
│  │  ✏️  Changer de pseudo               →           │    │
│  └──────────────────────────────────────────────────┘    │
│                                                          │
│  Préférences                                             │
│  ┌──────────────────────────────────────────────────┐    │
│  │  🔔  Notifications                   [Toggle]    │    │
│  │  🔊  Sons                            [Toggle]    │    │
│  │  📳  Vibrations                      [Toggle]    │    │
│  │  🌙  Mode sombre                     [Toggle]    │    │
│  │  🌍  Langue                          Français →  │    │
│  └──────────────────────────────────────────────────┘    │
│                                                          │
│  Objectifs                                               │
│  ┌──────────────────────────────────────────────────┐    │
│  │  🎯  Objectif de focus quotidien     3 sessions  │    │
│  │  🚶  Objectif de pas quotidien       10 000 pas  │    │
│  │  ⏰  Rappel quotidien                 20h00       │    │
│  └──────────────────────────────────────────────────┘    │
│                                                          │
│  Premium                                                 │
│  ┌──────────────────────────────────────────────────┐    │
│  │  💎  Passer à Premium                 →           │    │
│  │      Débloque toutes les fonctionnalités         │    │
│  └──────────────────────────────────────────────────┘    │
│                                                          │
│  À propos                                                │
│  ┌──────────────────────────────────────────────────┐    │
│  │  📄  Conditions d'utilisation        →           │    │
│  │  🔒  Politique de confidentialité    →           │    │
│  │  ⭐  Noter l'app                      →           │    │
│  │  📧  Contacter le support            →           │    │
│  │  ℹ️  Version                          2.0.0       │    │
│  └──────────────────────────────────────────────────┘    │
│                                                          │
│  ┌──────────────────────────────────────────────────┐    │
│  │  🚪  Se déconnecter                              │    │
│  └──────────────────────────────────────────────────┘    │
│                                                          │
│  🏠 Home   🎯 Quest   👥 Guild   🤖 Coach   ⚙️ Settings │
└──────────────────────────────────────────────────────────┘
```

---

## 8. Premium / Paywall

### 8.1 Écran Premium

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│                                                          │
│                    💎                                    │
│              [Animation :                                 │
│               diamant qui brille]                        │
│                                                          │
│              POCKET QUEST                                │
│              PREMIUM                                     │
│              ─────────────────                           │
│                                                          │
│              Débloque tout le                             │
│              potentiel de ton                            │
│              aventure !                                  │
│                                                          │
│                                                          │
│              ┌──────────────────────────────────┐        │
│              │  ✅  QP illimités (800/jour)     │        │
│              │  ✅  3 Streak Shields/semaine    │        │
│              │  ✅  Statistiques avancées       │        │
│              │  ✅  Thèmes exclusifs            │        │
│              │  ✅  Coach IA illimité           │        │
│              │  ✅  Export de données           │        │
│              │  ✅  Pas de publicité            │        │
│              │  ✅  Ambiances sonores premium   │        │
│              │  ✅  Support prioritaire         │        │
│              └──────────────────────────────────┘        │
│                                                          │
│              ┌──────────────────────────────────┐        │
│              │  💎  2,99 €/mois                 │        │
│              │      ou 19,99 €/an (-31%)        │        │
│              │      [Commencer l'essai gratuit] │        │
│              └──────────────────────────────────┘        │
│                                                          │
│              Essai gratuit de 7 jours                    │
│              Annule à tout moment                        │
│                                                          │
│              [Conditions] • [Confidentialité]            │
│                                                          │
│              ← Retour                                    │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Éléments UI** :
| Élément | Type | Détails |
|---|---|---|
| Icône | Animation Lottie | Diamant qui brille |
| Titre | Display 34px | "POCKET QUEST PREMIUM" |
| Features | Liste | 9 avantages, checkmarks |
| Pricing | CTA card | 2 options (mensuel/annuel) |
| Trial | Caption | "Essai gratuit de 7 jours" |

**Interactions** :
- Tap "Commencer l'essai" → flux d'achat (StoreKit / Play Billing)
- Tap "Retour" → écran précédent
- Scroll → liste des features complète

---

## 9. Écrans de transition

### 9.1 Splash Screen

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│                                                          │
│                                                          │
│                                                          │
│                                                          │
│                    🐣                                    │
│                                                          │
│              POCKET QUEST                                │
│              ─────────────────                           │
│                                                          │
│              [Loading spinner]                           │
│                                                          │
│                                                          │
│                                                          │
│                                                          │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Comportement** :
- Durée : 2 secondes maximum
- Si déjà connecté → Home Dashboard
- Si nouveau → Onboarding
- Si session expirée → Login

### 9.2 Écran de connexion

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│                    🐣                                    │
│              POCKET QUEST                                │
│                                                          │
│              ┌──────────────────────────────────┐        │
│              │  📧  Email                              │  │
│              └──────────────────────────────────┘        │
│              ┌──────────────────────────────────┐        │
│              │  🔒  Mot de passe                       │  │
│              └──────────────────────────────────┘        │
│                                                          │
│              ┌──────────────────────────────────┐        │
│              │  🔑  Se connecter                      │  │
│              └──────────────────────────────────┘        │
│                                                          │
│              ou                                          │
│                                                          │
│              ┌──────────────────────────────────┐        │
│              │  🍎  Continuer avec Apple             │  │
│              └──────────────────────────────────┘        │
│              ┌──────────────────────────────────┐        │
│              │  🔵  Continuer avec Google            │  │
│              └──────────────────────────────────┘        │
│                                                          │
│              Pas encore de compte ? S'inscrire           │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

### 9.3 Notifications

```
┌──────────────────────────────────────────────────────────┐
│  ← Retour              Notifications                     │
│                                                          │
│  Aujourd'hui                                            │
│  ┌──────────────────────────────────────────────────┐    │
│  │  🔥  Ton streak se termine dans 2h !             │    │
│       Agis maintenant pour le maintenir.              │    │
│      il y a 5 min                                      │    │
│  ├──────────────────────────────────────────────────┤    │
│  │  🏆  Marie t'a dépassé au classement !           │    │
│       Dépasse-la ! 💪                                  │    │
│      il y a 1h                                         │    │
│  ├──────────────────────────────────────────────────┤    │
│  │  🎯  Rappel : ta session de focus quotidienne    │    │
│       t'attend !                                       │    │
│      il y a 3h                                         │    │
│  └──────────────────────────────────────────────────┘    │
│                                                          │
│  Cette semaine                                          │
│  ┌──────────────────────────────────────────────────┐    │
│  │  ⭐  Tu as débloqué le badge "Semaine parfaite"! │    │
│      il y a 2 jours                                    │    │
│  └──────────────────────────────────────────────────┘    │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

---

## Résumé des écrans

| # | Écran | Priorité | Complexité |
|---|---|---|---|
| 1 | Splash Screen | Haute | Faible |
| 2 | Login / Signup | Haute | Moyenne |
| 3 | Onboarding (4 pages) | Haute | Moyenne |
| 4 | Home Dashboard | Haute | Élevée |
| 5 | Activity Log | Haute | Moyenne |
| 6 | Focus Mode (3 écrans) | Haute | Élevée |
| 7 | Guild / Social | Moyenne | Élevée |
| 8 | Leaderboard | Moyenne | Faible |
| 9 | Chat | Moyenne | Élevée |
| 10 | Profile | Haute | Moyenne |
| 11 | Settings | Haute | Faible |
| 12 | Premium Paywall | Moyenne | Faible |
| 13 | Notifications | Moyenne | Faible |
| 14 | Coach IA (Chat) | Basse | Élevée |

---

*Wireframes créés le 2026-06-08 — Dev pour LeRoy*
*Style : Samsung Health-inspired, clean & moderne*
