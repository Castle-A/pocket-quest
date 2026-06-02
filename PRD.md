# 📱 POCKET QUEST — Product Requirements Document (PRD)

> **Version** : 2.0  
> **Auteur** : Dev (Developer Profile) pour LeRoy  
> **Date** : 2026-06-08  
> **Statut** : v2 — Design System + Points System intégrés  

---

## 📖 Table des Matières

1. [Vision & Objectif](#1-vision--objectif)
2. [Personas & Cibles](#2-personas--cibles)
3. [Features Détaillées](#3-features-détaillées)
4. [Architecture Technique Recommandée](#4-technique-recommandée)
5. [Data Model](#5-data-model)
6. [Wireframes & UX Flow](#6-wireframes--ux-flow)
7. [Roadmap MVP → V1 → V2 → V3](#7-roadmap-mvp--v1--v2--v3)
8. [Estimation de Développement](#8-estimation-de-développement)
9. [Modèle Économique](#9-modèle-économique)
10. [Risques & Mitigations](#10-risques--mitigations)
11. [Annexes](#11-annexes)

---

## 1. Vision & Objectif

### 1.1 Le Problème
Les réseaux sociaux sont conçus pour **maximiser le temps d'attention**. Les utilisateurs passent en moyenne 2h30/jour sur les social media (2024), souvent sans en avoir conscience. Les solutions existantes (Digital Wellbeing, Screen Time) sont des **bloqueurs passifs** — elles ne motivent pas positivement.

### 1.2 La Solution
**Pocket Quest** transforme la réduction du temps d'écran en **jeu récompensant**. L'utilisateur gagne des minutes de "temps social" en accomplissant des activités saines. C'est un **système de récompenses positif** (pas une punition).

### 1.3 Le Tagline
> *"Gagne ton temps de scroll."*

### 1.4 Les Valeurs
- **Positif** : On récompense le bon comportement, on ne punit pas le mauvais
- **Moderne** : Design Samsung Health — clean, cartes arrondies, couleurs douces (pas de pixel art)
- **Scientifique** : Basé sur les études de bien-être digital et les meilleures pratiques de gamification
- **Communautaire** : Encouragement social, pas d'isolement
- **Bienveillant** : Inspiré de Headspace — pas de punition toxique, streak shields, objectifs flexibles

### 1.5 Vision Long Terme (2 ans)
Possibilité de scinder en 2 apps :
- **Pocket Quest Play** : Gaming + Social (gamification, streaks, communauté)
- **Pocket Quest Health** : Health + AI (coach thérapeutique, données médicales anonymisées, partenariat Better Health)

---

## 2. Personas & Cibles

### 2.1 Persona Principal — **Lena, 22 ans**
- Étudiante en médecine
- 3h/jour sur Instagram/TikTok
- Se sent coupable mais n'arrive pas à décrocher
- Veut une solution "mignonne" et motivante (pas un bloqueur militaire)
- iPhone + Apple Watch
- Willing to pay €5-8/mois si ça marche vraiment

### 2.2 Persona Secondaire — **Marc, 30 ans**
- Développeur logiciel, télétravail
- 2h/jour de scroll "rien que pendant les pauses"
- Fitbit + Android
- Veut des stats et du data-driven
- Prêt à payer pour la version premium avec IA

### 2.3 Persona Tertiaire — **Sophie, 16 ans**
- Lycéenne
- 5h/jour sur Snapchat/TikTok
- Parents veulent limiter mais elle résiste aux bloqueurs
- iPhone, pas de smartwatch
- Doit être gratuit (free tier généreux)

### 2.4 Marché Cible (TAM/SAM|SOM)
| Nibble | Description | Taille Estimée |
|---|---|---|
| TAM | Smartphone users 13-35 ans dans les pays occidentaux | ~200M |
| SAM | Users avec problème de temps d'écran conscient | ~40M |
| SAM | Users iOS disposés à payer | ~8M |
| SOM (Y1) | Acquisition réaliste année 1 | 50K-200K |

---

## 3. Features Détaillées

### 3.1 🎮 Système de Points v2 (Core Feature — référence POINTS_SYSTEM_RESEARCH.md)

> **Voir le document complet** : `/opt/data/projects/pocket-quest/POINTS_SYSTEM_RESEARCH.md`

| Aspect | Détail |
|---|---|
| **Principe** | Chaque activité saine rapporte des "Quest Points" (QP) — système gamifié inspiré Duolingo + Samsung Health |
| **Ratios principaux** | Focus 25min = 50 QP • Marche 10k pas = 30 QP • Sport 30min = 40 QP • Méditation 10min = 25 QP |
| **Plafond journalier** | 500 QP (gratuit) / 800 QP (premium) — mécanique anti-abus |
| **Multiplicateurs** | Streak (x1.0 → x2.0) • Weekend (x1.25) • Early Bird (x1.3) • Comeback (x1.5) • Social (x1.2) |
| **Stack multiplicateur** | Additif, plafond x3.0 |
| **Streak Shield** | Filet de sécurité : 1/semaine (gratuit), 3/semaine (premium) |
| **Diminishing Returns** | Après 200 QP/jour : efficacité réduite à 75%, puis 50% après 400 QP |
| **Niveaux** | 100 niveaux avec progression logarithmique (100 × N^1.5 QP requis) |
| **Récompenses** | Cosmétiques (thèmes, icônes, animations, avatars) + fonctionnelles (shields, stats) |

**Philosophie v2** : Bienveillant mais engageant — inspiré Headspace (pas de punishment) + Duolingo (streaks addictifs) + Forest (récompenses tangibles) + Samsung Health (objectifs flexibles)

### 3.2 ⌚ Smart Watch Integration
- **Apple Watch** : Accès aux données HealthKit (pas d'app watchOS dédicacée en v1 — on lit juste les données)
- **Wear OS** : Google Fit API
- **Aucune obligation** : L'app fonctionne sans montre = input manuel

### 3.3 🏥 Health App Integration
- **Apple HealthKit** : Passe automatiquement : steps, sleep, workouts, mindful minutes
- **Google Fit** : Idem via Google Fit REST API
- **Permissions** : L'utilisateur choisit quelles données partager (opt-in granulaire)

### 3.4 🎯 Konzentrationsmodus (Focus Mode)
- **Principe** : Quand activé, les apps sociales sont temporairement bloquées
- **iOS** : Intégration ScreenTime API (iOS 16+ uniquement — limitation Apple)
- **Android** : UsageStats API + Device Admin (plus flexible)
- **Personnalisation** : Durée (15min à 4h), whitelist d'apps, "panic button" après 10 min de rafraîchissement de la jauge
- **Gamification** : Chaque session focus complète rapporte des QP bonus

### 3.5 🔥 Wochen-Streak (Streak Hebdomadaire)
- **Règle** : Compléter minimum 5 objectifs/jour = streak continues
- **Reset** : Lundi matin (chaque semaine est un "chapitre")
- **Récompense weekend** : Si streak maintenue 5/7j → bonus QP x2 le samedi + dimanche
- **Perte** : Briser le streak = streak reprend à 0 (mais pas de punition — messages d'encouragement)

### 3.6 🌙 Limite Max (Sleep Cap)
- 8h de sommeil = plafond maximum de QP "sommeil" (480 QP)
- Dormir plus de 8h ne rapporte pas plus (message éducatif : "le sur-somme n'est pas mieux !")
- 8h est un objectif sain recommandé par l'OMS
- Sleep tracking via HealthKit / Google Fit (automatique) ou input manuel

### 3.7 🎨 Design System v2 — Style Samsung Health

> **Voir le document complet** : `/opt/data/projects/pocket-quest/DESIGN_SYSTEM.md`

- **Style** : Flat design + subtle shadows, inspiré Samsung Health + Linear
- **Pas de pixel art** : Design mature et moderne (public cible 18-45 ans)
- **Palette** : Ocean Blue (#2B7FE8), Mint Green (#34C759), Warm Orange (#FF9500)
- **Cartes arrondies** : Border radius 16px, ombres subtiles
- **Typographie** : SF Pro (iOS) / Roboto (Android), échelle 11px-34px
- **Icônes** : Outline style, 24x24px, cohérentes
- **Animations** : Fluides 200-300ms, micro-interactions satisfaisantes, feedback haptique
- **Avatar** : Personnage mignon (pas pixel art) qui évolue avec le niveau
- **Humeur de l'avatar** : Reflète la streak (heureux si en cours, encouragé si brisée — jamais triste/culpabilisant)
- **Dark mode** : Support complet avec palette dédiée
- **Accessibilité** : WCAG AA, support daltonien, VoiceOver/TalkBack, réduction de mouvement

### 3.8 📱 Widgets
- **iOS 17+** : Widgets interactifs (Home + Lock Screen)
- **Android 14+** : Material You widgets
- **Widgets disponibles** :
  - Progression du jour (QP gagnés / objectif)
  - Rappel eau (avec bouton "j'ai bu" sur le widget)
  - Streak counter
  - Dernière activité enregistrée

### 3.9 💎 Vollversion (Premium)

- **Prix** : €2.99/mois ou €19.99/an (-31%) — prix ajusté pour maximiser la conversion
- **Essai gratuit** : 7 jours
- **Inclus** :
  - QP illimités (800/jour au lieu de 500)
  - 3 Streak Shields/semaine (au lieu de 1)
  - Level system complet (100 niveaux)
  - AI Coach illimité
  - Thèmes exclusifs (6+ thèmes)
  - Statistiques avancées (tendances, heatmaps, comparaisons)
  - Export de données
  - Ambiances sonores premium
  - Support prioritaire
  - Pas de publicité
- **Free tier** : Système de points basique (500 QP/jour) + streak + 1 thème + 1 widget + 1 Streak Shield/semaine (pas d'IA, pas de level system complet)

### 3.10 🤖 AI Version (AI Coach)
- **Technologie** : GPT-4o mini ou Claude Haiku (coût faible, réponse rapide)
- **Fonctionnalités** :
  - Coaching personnalisé basé sur les données utilisateur
  - Suggestions d'activités adaptées (ex: "Tu n'as pas marché depuis 2j — voici une idée de balade")
  - Analyse de patterns (ex: "Tu scrolls plus le mercredi après-midi — que dirais-tu d'un focus mode programmé ?")
  - Motivation contextuelle (messages générés, pas juste random quotes)
  - Résumé hebdomadaire en langage naturel
- **Context explicite** : L'IA ne donne pas de conseils médicaux — disclaimers intégrés
- **Privacy** : Données jamais envoyées en clair — on-device processing quand possible, sinon API chiffrée avec données minimisées

### 3.11 👥 Community
- **Onglet "Guild"** : Voir les streaks des amis (si ils acceptent)
- **Leaderboard hebdomadaire** : Top streaks entre amis (pas global — éviter la toxicité)
- **Partage de créature** : On peut "rendre visite" à l'avatar d'un ami
- **Défis groupés** : "30 amis marchent 10K pas ensemble pendant 7j"
- **Pas de publicité dans le feed communautaire**
- **Privacy first** : On ne voit jamais le temps d'écran réel des amis, juste les QP

### 3.12 📈 Level System v2 — 100 Niveaux (Premium)

> Formule : `QP requis pour niveau N = 100 × N^1.5`

| Niveau | QP cumulés | Titre | Récompense |
|---|---|---|---|
| 1 | 0 | Novice | Avatar de base |
| 2 | 100 | Apprenti | Thème couleur #1 |
| 3 | 300 | Explorateur | Badge "Premier pas" |
| 5 | 1 000 | Initié | Thème couleur #2 |
| 10 | 5 500 | Expert | Titre "Expert" + Icône premium |
| 15 | 12 000 | Maître | Avatar exclusif |
| 20 | 25 000 | Grand Maître | Thème exclusif |
| 30 | 50 000 | Légende | Badge "Légende" + effet visuel unique |
| 50 | 150 000 | Mythique | Tout débloqué + accès beta |
| 100 | 500 000 | Transcendant | Hall of Fame |

**Récompenses par type** :
- Cosmétiques : thèmes, icônes, animations, avatars
- Fonctionnels : streak shields, stats détaillées, export données
- Sociaux : titres, badges, accès guildes premium, ligues

### 3.13 ⏰ Erinnerungen (Rappels)
- **Configurables** : Heure, fréquence, type
- **Types** : "Boire de l'eau", "Pause focus", "Heure du coucher", "Activité du jour", "Enregistre ton sommeil"
- **Smart reminders** : L'AI Coach peut suggérer des rappels basés sur les patterns
- **Tone** : Mignon et encourageant, jamais culpabilisant ("Petit rafraîchissement ? Ton avatar a soif ! 🥤")

### 3.14 💬 Motivational Quotes
- **Affiché** : Sur l'écran d'accueil, à l'ouverture de l'app
- **Sources** : Mix de quotes classiques + AI-generated personnalisées
- **Exemples** : "Le temps que tu ne passes pas sur TikTok, tu le passes à devenir une légende." — Pocket Quest AI

### 3.15 🔒 Lockscreen Social (Quality Time Focus)
- **Principe** : Deux amis à proximité (Bluetooth LE) qui activent ensemble le focus mode
- **Effet** : Leurs écrans de verrouillage afficents leurs deux avatars ensemble
- **Récompense** : Si les deux restent en focus pendant la durée → bonus QP x2 pour les deux
- **Cas d'utilisation** : Étudiants qui révisent ensemble, couples, amis au restaurant

### 3.16 🎲 Abwesenheitsoption
- **Principe** : Ton ami n'a pas ouvert l'app depuis 2j+ → bouton "Lui envoyer un petit ping ?"
- **Ton** : "Tu joues aujourd'hui ? Ton avatar s'ennuie! 🥺" — mignon, pas aggressif
- **Limite** : Max 1 ping par ami par jour (pas de spam)

### 3.17 🎨 Add-ons Aesthetics
- **Gratuits** : Dark mode, Light mode
- **Premium (inclus dans l'abonnement)** : Beige/cream, Bunt (couleurs vives/saturation), Pastel, Retro (Game Boy green), Midnight blue, Sakura pink
- **Mécanique** : Changer de thème change l'ambiance visuelle complète (background, avatar, sons), les boutons, les graphiques

---

## 4. Architecture Technique Recommandée

### 4.1 Décision : **Flutter** (confirmé)

**Pourquoi Flutter plutôt que les alternatives :**

| Critère | React Native | Flutter | Natif (Swift/Kotlin) |
|---|---|---|---|
| Cross-platform | ✅ iOS + Android | ✅ iOS + Android | ❌ 2 codebases |
| Pixel Art UI | ⚠️ Moyenne (bridging overhead) | ✅ Excellente (Skia, widgets customisés) | ✅ Excellente |
| Performance animações | ⚠️ Bridge overhead | ✅ 60fps natif (Skia) | ✅ 60fps |
| Plugin écosystème | ✅ Grand | ✅ Très grand | N/A |
| Dev Speed | ✅ Rapide | ✅ Rapide (hot reload) | ❌ 2x plus lent |
| HealthKit/Google Fit | ⚠️ Plugins variés | ✅ Plugins stables | ✅ Natif |
| ScreenTime API iOS | ⚠️ Plugin community | ✅ Plugin dédié | ✅ Natif |
| Wear OS | ⚠️ Compliqué | ⚠️ Compliqué | ✅ Natif |
| Maintenance long terme | ⚠️ Meta abandon partiel riské 2025 | ✅ Google investi lourd | ✅ Mais 2x travail |

**Verdict Flutter** : Meilleur ratio perf / dev speed / qualité visuelle. Le design pixel art sera plus facile à implémenter avec le rendering engine de Flutter (Skia).

### 4.2 Architecture Globale

```
┌─────────────────────────────────────────────────┐
│                    FRONTEND                       │
│              Flutter (Dart) iOS + Android         │
│                                                   │
│  ┌──────────┐ ┌──────────┐ ┌──────────────────┐ │
│  │ UI Layer │ │ State    │ │ Platform Channel │ │
│  │ (Widgets)│ │ (BLoC/   │ │ (HealthKit,      │ │
│  │          │ │  Riverpod│ │  ScreenTime,     │ │
│  │          │ │  )       │ │  Bluetooth LE)   │ │
│  └──────────┘ └──────────┘ └──────────────────┘ │
└───────────────────────────┬─────────────────────┘
                            │ REST API + WebSocket
                            │
┌───────────────────────────┴─────────────────────┐
│                    BACKEND                         │
│            Node.js (Express/NestJS) + TypeScript  │
│                                                   │
│  ┌──────────┐ ┌───────────┐ ┌─────────────────┐ │
│  │ Auth     │ │ Business  │ │ Notification    │ │
│  │ Module   │ │ Logic     │ │ Service         │ │
│  │          │ │           │ │                 │ │
│  └──────────┘ └───────────┘ └─────────────────┘ │
└───────────────────────────┬─────────────────────┘
                            │
┌───────────────────────────┴─────────────────────┐
│                   DATA LAYER                      │
│                                                   │
│  ┌──────────┐ ┌───────────┐ ┌─────────────────┐ │
│  │PostgreSQL│ │ Redis     │ │ Firebase        │ │
│  │(users,   │ │ (sessions,│ │ Cloud Messaging │ │
│  │ points,  │ │  cache,   │ │                 │ │
│  │ streaks) │ │  leaderbrd│ │                 │ │
│  └──────────┘ └───────────┘ └─────────────────┘ │
└───────────────────────────────────────────────────┘
```

### 4.3 Stack Technique Détaillé

| Composant | Technologie | Justification |
|---|---|---|
| **Mobile** | Flutter 3.x + Dart 3 | Cross-platform, hot reload, Skia pour pixel art |
| **State Management** | Riverpod | Scalable, compile-safe, meilleur que BLoC pour ce taille de projet |
| **Backend** | NestJS + TypeScript | Architecture modulaire, testing facile, écosystème riche |
| **Database** | PostgreSQL 16 | ACID, JSONB pour données flexibles, scalpabilité |
| **Cache** | Redis 7 | Sessions, leaderboards, rate limiting |
| **Auth** | Firebase Auth + Apple ID + Google Sign-in | Pas de friction, OAuth natif |
| **Push Notifications** | Firebase Cloud Messaging + APNs | Standard industry |
| **File Storage** | Firebase Storage / AWS S3 | Avatars, images communautaires |
| **AI Coach** | OpenAI GPT-4o-mini API (via backend) | Coût faible, qualité haute, context window 128K |
| **Realtime** | WebSocket (Socket.io) | Streaks en temps réel, notifications communautaires |
| **Analytics** | PostHog (self-hosted) ou Mixpanel | Privacy-first, event-based |
| **CI/CD** | GitHub Actions → App Store + Play Store | Fastlane pour déploiement auto |
| **Monitoring** | Sentry (errors) + Grafana (infra) | Industry standard |
| **Hosting** | Google Cloud Run ou AWS ECS Fargate | Serverless containers, scale to zero = coût faible début |

### 4.4 Architecture Folder Structure (Flutter)

```
lib/
├── main.dart
├── app/
│   ├── app.dart
│   ├── routes/
│   └── themes/
├── core/
│   ├── constants/
│   ├── errors/
│   ├── network/
│   ├── utils/
│   └── services/
│       ├── health_service.dart
│       ├── notification_service.dart
│       └── bluetooth_service.dart
├── features/
│   ├── auth/
│   │   ├── data/
│   │   ├── domain/
│   │   └── presentation/
│   ├── quest/
│   │   ├── data/
│   │   ├── domain/
│   │   └── presentation/
│   ├── avatar/
│   ├── streak/
│   ├── focus_mode/
│   ├── community/
│   ├── ai_coach/
│   └── settings/
├── shared/
│   ├── widgets/
│   ├── models/
│   └── extensions/
└── l10n/
```

---

## 5. Data Model

### 5.1 ER Diagram (Simplifié)

```
┌──────────────────┐       ┌──────────────────┐
│      User        │       │   Avatar         │
├──────────────────┤       ├──────────────────┤
│ id (PK, UUID)    │──1:1──│ id (PK, UUID)    │
│ email            │       │ user_id (FK)     │
│ username         │       │ level            │
│ password_hash    │       │ experience       │
│ created_at       │       │ creature_type    │
│ updated_at       │       │ mood             │
│ is_premium       │       │ customizations   │
│ premium_expiry   │       └──────────────────┘
│ refresh_token    │
│ theme            │       ┌──────────────────┐
│ language         │       │   ActivityType   │
└──────────────────┘       ├──────────────────┤
         │ 1:N             │ id (PK)          │
         ├─────────────────│ name             │
         │                 │ qp_per_unit      │
         │                 │ unit             │
         │                 │ max_daily        │
         │                 │ icon             │
         │                 └──────────────────┘
         │
         │ 1:N
         ▼
┌──────────────────┐       ┌──────────────────┐
│    DailyLog      │       │   ActivityEntry  │
├──────────────────┤       ├──────────────────┤
│ id (PK, UUID)    │──1:1──│ id (PK, UUID)    │
│ user_id (FK)     │       │ daily_log_id(FK) │
│ date             │       │ activity_type_id │
│ total_qp         │       │ quantity         │
│ qp_used          │       │ qp_earned        │
│ qp_remaining     │       │ source           │
│ streak_day       │       (auto/manual)       │
│ streak_active    │       │ created_at       │
│ goal_met         │       └──────────────────┘
│ created_at       │
│ updated_at       │       ┌──────────────────┐
└──────────────────┘       │   FocusSession   │
                           ├──────────────────┤
┌──────────────────┐       │ id (PK, UUID)    │
│   Streak         │       │ user_id (FK)     │
├──────────────────┤       │ started_at       │
│ id (PK, UUID)    │       │ ended_at         │
│ user_id (FK)     │       │ duration_min     │
│ week_number      │       │ completed        │
│ year             │       │ qp_earned        │
│ days_completed[] │       │ qp_used          │
│ current_streak   │       └──────────────────┘
│ best_streak      │
│ is_active        │       ┌──────────────────┐
└──────────────────┘       │ SocialConnection │
                           ├──────────────────┤
┌──────────────────┐       │ id (PK, UUID)    │
│   Reminder       │       │ user_id (FK)     │
├──────────────────┤       │ friend_id (FK)   │
│ id (PK, UUID)    │       │ status           │
│ user_id (FK)     │       (pending/accepted)  │
│ type             │       │ created_at       │
│ time             │       └──────────────────┘
│ days[]           │
│ is_active        │       ┌──────────────────┐
│ message          │       │  AIChat          │
└──────────────────┘       ├──────────────────┤
                           │ id (PK, UUID)    │
                           │ user_id (FK)     │
                           │ messages[] (JSON)│
                           │ created_at       │
                           └──────────────────┘
```

### 5.2 Tables SQL (PostgreSQL)

```sql
-- Core tables
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    locale VARCHAR(10) DEFAULT 'de-DE',
    theme VARCHAR(30) DEFAULT 'dark',
    is_premium BOOLEAN DEFAULT FALSE,
    premium_expiry TIMESTAMPTZ,
    push_token VARCHAR(255),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE avatars (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    level INTEGER DEFAULT 1,
    experience BIGINT DEFAULT 0,
    creature_type VARCHAR(30) DEFAULT 'egg',
    mood VARCHAR(20) DEFAULT 'happy',
    customizations JSONB DEFAULT '{}',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE activity_types (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    qp_per_unit INTEGER NOT NULL,
    unit VARCHAR(20) NOT NOT NULL, -- 'minute', 'hour', 'session', 'liter'
    max_daily INTEGER, -- NULL = no limit
    icon VARCHAR(50)
);

-- Seed data for activity types
INSERT INTO activity_types (name, qp_per_unit, unit, max_daily, icon) VALUES
    ('sleep', 1, 'minute', 480, 'moon.stars'),       -- 8h max
    ('sport', 2, 'minute', 300, 'figure.run'),          -- 5h max
    ('reading', 1.5, 'minute', 180, 'book.fill'),       -- 3h max
    ('walking', 2, 'minute', 240, 'shoe.fill'),         -- 4h max
    ('meditation', 3, 'minute', 120, 'leaf.fill'),      -- 2h max
    ('chores', 1, 'minute', 300, 'house.fill'),         -- 5h max
    ('social', 1.5, 'minute', 180, 'person.2.fill'),    -- 3h max
    ('focus_mode', 2, 'minute', 480, 'target'),         -- 8h max
    ('water', 5, 'liter', 15, 'drop.fill');             -- 15 * 200ml max

CREATE TABLE daily_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    date DATE NOT NULL,
    total_qp INTEGER DEFAULT 0,
    qp_used INTEGER DEFAULT 0,
    qp_remaining INTEGER DEFAULT 0,
    goal_met BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id, date)
);

CREATE TABLE activity_entries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    daily_log_id UUID NOT NULL REFERENCES daily_logs(id) ON DELETE CASCADE,
    activity_type_id INTEGER NOT NULL REFERENCES activity_types(id),
    quantity DECIMAL NOT NULL,
    qp_earned INTEGER NOT NULL,
    source VARCHAR(20) DEFAULT 'manual', -- 'auto', 'manual', 'estimate'
    notes TEXT,
    recorded_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE streaks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    week_number INTEGER NOT NULL,
    year INTEGER NOT NULL,
    days_completed SMALLINT[] DEFAULT '{}',
    current_streak INTEGER DEFAULT 0,
    best_streak INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id, year, week_number)
);

CREATE TABLE focus_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    started_at TIMESTAMPTZ NOT NULL,
    planned_duration_min INTEGER NOT NULL,
    actual_duration_min INTEGER,
    completed BOOLEAN DEFAULT false,
    qp_earned INTEGER DEFAULT 0,
    qp_used INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE social_connections (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    friend_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    status VARCHAR(20) DEFAULT 'pending', -- 'pending', 'accepted', 'blocked'
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id, friend_id)
);

CREATE TABLE reminders (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    type VARCHAR(30) NOT NULL,
    time TIME NOT NULL,
    days SMALLINT[] DEFAULT '{0,1,2,3,4,5,6}', -- 0=Sun, 6=Sat
    is_active BOOLEAN DEFAULT true,
    custom_message TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE ai_chats (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    messages JSONB DEFAULT '[]',
    context_summary TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX idx_daily_logs_user_date ON daily_logs(user_id, date DESC);
CREATE INDEX idx_activity_entries_log ON activity_entries(daily_log_id);
CREATE INDEX idx_streaks_user ON streaks(user_id, year, week_number DESC);
CREATE INDEX idx_focus_sessions_user ON focus_sessions(user_id, started_at DESC);
CREATE INDEX idx_social_connections_user ON social_connections(user_id);
CREATE INDEX idx_reminders_user ON reminders(user_id) WHERE is_active = true;
```

---

## 6. Wireframes & UX Flow

> **Voir les wireframes complets v2** : `/opt/data/projects/pocket-quest/WIREFRAMES.md`

### 6.1 Écrans Principaux v2

Les wireframes v2 comprennent 14 écrans détaillés :
1. **Splash Screen** — Chargement avec logo animé
2. **Login / Signup** — Email, Apple ID, Google Sign-in
3. **Onboarding (4 pages)** — Welcome, Comment ça marche, Choix avatar, Objectifs
4. **Home Dashboard** — QP, streak, niveau, quête du jour, activités récentes, conseil coach
5. **Activity Log** — Enregistrer une activité avec catégories, durées, QP estimés
6. **Focus Mode (3 écrans)** — Démarrage, session en cours (style Forest), terminé (célébration)
7. **Guild / Community** — Classement, guilde, activité, chat
8. **Leaderboard** — Classement semaine/mois/tous, top 50
9. **Chat** — Chat de guilde temps réel
10. **Profile** — Avatar, stats, badges, historique
11. **Settings** — Compte, préférences, objectifs, notifications
12. **Premium Paywall** — Features, pricing, essai gratuit
13. **Notifications** — Streak alerts, rappels, activité sociale
14. **AI Coach** — Chat avec conseils personnalisés

### 6.2 User Flow Principal v2

```
                    ┌──────────┐
                    │ App Open │
                    └────┬─────┘
                         │
                    ┌────▼─────┐
                    │  Splash  │ (2s max)
                    │  Screen  │
                    └────┬─────┘
                         │
                    ┌────▼─────┐
              ┌───→│  Login   │ (si pas connecté)
              │    └────┬─────┘
              │         │
              │    ┌────▼─────┐
              │    │Onboarding│ (1st time only)
              │    │(4 pages) │
              │    └────┬─────┘
              │         │
              │    ┌────▼─────┐        ┌──────────────┐
              │    │   HOME   │───────→│ ACTIVITY LOG │
              │    │Dashboard │←───────│  (Ajouter)   │
              │    └────┬─────┘        └──────────────┘
              │         │
              │    ┌────▼─────┐        ┌──────────────┐
              │    │  FOCUS   │───────→│   FOCUS      │
              │    │  MODE    │        │   SESSION    │
              │    └────┬─────┘        └──────┬───────┘
              │         │                     │
              │    ┌────▼─────┐        ┌──────▼───────┐
              │    │  GUILD   │───────→│   FOCUS      │
              │    │(Social)  │        │   COMPLETE   │
              │    └────┬─────┘        └──────────────┘
              │         │
              │    ┌────▼─────┐        ┌──────────────┐
              │    │ AI COACH │───────→│  PROFILE     │
              │    │  (Chat)  │        │              │
              │    └────┬─────┘        └──────────────┘
              │         │
              │    ┌────▼─────┐
              └────│ SETTINGS │
                   └──────────┘
```

---

## 7. Roadmap MVP → V1 → V2 → V3

### 7.1 Phase 0 — Validation (2-3 semaines)
**Avant de coder quoi que ce ce — valider avec de vrais users**

| # | Action | Détail |
|---|---|---|
| 0.1 | Interviews utilisateurs | 10-15 interviews avec personas ciblés |
| 0.2 | Landing page | Page simple expliquant le concept + email capture |
| 0.3 | Prototype Figma | Maquette interactive des écrans principaux (onboarding + home + quest + focus) |
| 0.4 | Test utilisateur sur prototype | 5-8 tests sur Figma prototype |
| 0.5 | Itération | Adapter le concept basé sur les retours |

**Budget estimé** : €0 (sauf si designer externe pour Figma : €500-1500)

---

### 7.2 MVP (6-8 semaines, 1-2 développeurs)
**L'objectif du MVP : Preuve de concept utilisable avec les features core**

| Feature | Priority | Notes |
|---|---|---|
| **Inscription/Connexion** | P0 | Email + Apple ID (iOS), Google Sign-in (Android) |
| **Système de points basique** | P0 | 5 activity types (sleep, sport, reading, water, focus) |
| **Home Dashboard** | P0 | Aujourd'hui QP, avatar, streak, ajouter activité |
| **Input manuel d'activités** | P0 | Pas de HealthKit/Fit — 100% manuel en MVP |
| **Streak hebdomadaire** | P0 | Simple compteur jours, reset lundi |
| **Design Tamagotchi basique** | P0 | 3 avatar stages, pixel art minimal |
| **Focus Mode (basique)** | P1 | Timer simple, pas d'intégration ScreenTime |
| **Persistance locale** | P0 | SQLite — pas de backend cloud en MVP |
| **Onboarding (3 écrans)** | P0 | Simple et engageant |
| **Notifications locales** | P1 | Rappels basiques (eau, focus, sommeil) |

**Features explicitement EXCLUES du MVP :**
- Pas d'IA Coach
- Pas de communauté / Guild
- Pas de HealthKit / Google Fit integration
- Pas de smartwatch
- Pas de widgets
- Pas de premium / paiement
- Pas de themes multiples
- Pas de Bluetooth social

**Livrable MVP** : App iOS + Android fonctionnelle, testée en beta (TestFlight + Internal Testing Play Store), 50-100 beta testers

---

### 7.3 V1 — "First Real Release" (8-10 semaines après MVP)
**Store-ready, avec les features qui différencient Pocket Quest de la concurrence**

| Feature | Priority | Notes |
|---|---|---|
| Auth complète + Backend cloud | P0 | NestJS + PostgreSQL + Firebase Auth |
| Sync cloud des données | P0 | Multi-device, backup |
| HealthKit / Google Fit integration | P0 | Auto-tracking sommeil, pas, workouts |
| Notifications push via FCM/APNs | P0 | Smart reminders, streak alerts |
| Focus Mode avancé | P1 | Intégration ScreenTime API iOS |
| AI Coach v1 | P1 | GPT-4o-mini, conseils hebdomadaires |
| Guild / Community v1 | P1 | Ajout d'amis, streak mutuel, pas de chat |
| Premium + In-App Purchases | P1 | Subscription model iOS + Android |
| 3 thèmes (dark, beige, bunt) | P2 | |
| iOS Widget (2 tailles) | P2 | |
| iOS + Android Stores deployment | P0 | |
| Analytics (PostHog) | P1 | Funnel onboarding, retention, D1/D7/D30 |

**Livrable V1** : App sur App Store + Google Play, 1-5K downloads objectif mois 1

---

### 7.4 V2 — "Engagement & Retention" (10-12 semaines après V1)
**Focus sur l'engagement long terme et la différenciation forte**

| Feature | Priority | Notes |
|---|---|---|
| Wear OS companion App | P1 | Watch face avec avatar + QP |
| Apple Watch complication | P1 | Widget montre avec QP du jour |
| Level System (1-50) | P1 | Déblocage de contenus, badges |
| AI Coach v2 (conversations) | P1 | Chat temps réel, analyse de patterns |
| Bluetooth Social Focus | P2 | Lockscreen mutuel avec amis |
| Group Challenges | P2 | Objectifs communautaires |
| Advanced Stats / Heatmaps | P2 | Tendues, comparaisons semaine/mois |
| Add-on Aesthetics (6+ thèmes) | P2 | |
| Android Widgets | P2 | Material You |
| Motivational Quotes engine | P3 | Quotes customisées par IA |
| Referral System | P2 | "Invite un ami → 200 QP pour les deux" |

**Livrable V2** : Rétention D30 > 25%, 10-50K users

---

### 7.5 V3 — "Scale & Monetization" (6-8 semaines après V1)
**Scale et expansion du modèle économique**

| Feature | Priority | Notes |
|---|---|---|
| White-label version | P3 | B2B (entreprises, écoles) |
| API publique | P3 | Pour intégrations tierces |
| Apple Health sharing v2 | P2 | Données plus granulaires |
| Android Wellbeing API | P2 | Intégration profonde Android |
| Localization (EN, FR, ES, IT) | P2 | |
| Community chat (texte) | P3 | Feed social en-app |
| Gamification avancée (quêtes) | P2 | Quêtes thématiques (7j sport, méditation, etc.) |

**Livrable V3** : 50K+ users, revenus premium > €5K MRR

---

## 8. Estimation de Développement

### 8.1 Par Phase

| Phase | Durée | Devs | Coût Estimé* |
|---|---|---|---|
| **Phase 0** (Validation) | 2-3 sem | 0 dev + LeRoy | €0-2K (Figma) |
| **MVP** | 6-8 sem | 1 Flutter dev | €8K-15K |
| **V1** | 8-10 sem | 1 Flutter + 1 Backend | €18K-28K |
| **V2** | 10-12 sem | 1 Flutter + 1 Backend + 0.5 Designer | €25K-38K |
| **V3** | 6-8 sem | 1.5 Flutter + 1 Backend | €15K-22K |
| **TOTAL** (lancement) | **~9-12 mois** | | **€66K-105K** |

*Coût basé sur TJM freelance Europe : €500-800/jour*

### 8.2 Équipe Recommandée

| Rôle | Phase | Charge |
|---|---|---|
| **Flutter Developer** | MVP → V3 | Full-time (senior, 3+ ans Flutter experience) |
| **Backend Developer** | V1 → V3 | Full-time (NestJS, PostgreSQL, DevOps) |
| **UI/UX Designer** | Phase 0 → V1 | Part-time / freelances |
| **Product Owner** | All | LeRoy (décisions produit, validation) |
| **QA / Beta Testers** | MVP → V3 | 50-200 beta testers |

### 8.3 Coûts Mensuels Infrastructure (Estimation)

| Service | MVP | V1 | V2 | V3 |
|---|---|---|---|---|
| Firebase (Auth + FCM + DB) | €0 (free) | €25-50 | €50-100 | €100-300 |
| Backend hosting (Cloud Run) | €0 | €20-50 | €50-150 | €150-400 |
| OpenAI API (AI Coach) | €0 | €10-30 | €50-150 | €150-500 |
| Sentry (errors) | €0 | €0-25 | €25-50 | €50-100 |
| PostHog | €0 | €0-50 | €0-50 | €50-100 |
| **TOTAL mensuel** | **€0** | **€55-205** | **€175-500** | **€500-1,400** |
| Apple Developer (annuel) | — | €99 | €99 | €99 |
| Google Play (one-time) | — | €25 | €25 | €25 |

---

## 9. Modèle Économique

### 9.1 Freemium Model

```
┌───────────────────────────────────────┐
│            FREE TIER                  │
│  ✅ Système de points basique         │
│  ✅ 5 types d'activités               │
│  ✅ Streak hebdomadaire               │
│  ✅ 1 avatar (base)                   │
│  ✅ Focus Mode basique                │
│  ✅ 1 thème (dark)                    │
│  ❌ Pas d'IA Coach                    │
│  ❌ Pas de communauté                 │
│  ❌ Pas de stats avancées             │
│  ❌ Pas de level system               │
├───────────────────────────────────────┤
│          PREMIUM (€2.99/mois)         │
│  ✅ Tout FREE +                       │
│  ✅ AI Coach complet                  │
│  ✅ Community/Guild                   │
│  ✅ Level System                      │
│  ✅ Stats avancées + Heatmaps         │
│  ✅ Thèmes illimités                  │
│  ✅ Widgets premium                   │
│  ✅ Apple Watch / Wear OS             │
│  ✅ Pas de pubs                       │
│  ✅ Early access nouvelles features   │
└───────────────────────────────────────┘
```

### 9.2 Projections Revenus (Conservateur)

| Métrique | Mois 3 | Mois 6 | Mois 12 | Mois 18 |
|---|---|---|---|---|
| Total Users | 500 | 2,500 | 10,000 | 30,000 |
| Conversion Premium | 3% | 5% | 8% | 10% |
| Premium Users | 25 | 250 | 2 000 | 5 000 |
| MRR | €75 | €750 | €6 000 | €15,000 |
| ARR | — | — | €57,600 | €216,000 |
| Infrastructure/mois | €100 | €200 | €500 | €800 |
| **Net/mois** | **-€10** | **€550** | **€4,300** | **€17,200** |

### 9.3 Break-even
Le projet devient rentable en **mois 4-5** (après lancement V1), en supposant 5% de conversion premium et €2.99/mois.

---

## 10. Risques & Mitigations

| Risque | Probabilité | Impact | Mitigation |
|---|---|---|---|
| **Apple refuse l'app** (ScreenTime API restrictif) | Moyenne | Élevé | Construire sans ScreenTime d'abord (timer interne), soumettre avec features Apple Watch qui ajoutent de la valeur |
| **Faible rétention** (users installent et abandonnent D7) | Élevé | Élevé | Focus sur onboarding irréprochable, notifications smart, nouvelles features chaque semaine |
| **Concurrence** (app similaires existent) | Moyenne | Moyen | Différenciation : Tamagotchi design + AI Coach + Community = combo unique |
| **Coût IA trop élevé** | Faible | Moyen | Utiliser GPT-4o-mini (très bon marché), rate limiting intelligent, on-device pour features basiques |
| **HealthKit données imprécises** | Moyenne | Moyen | Cross-validation avec input manuel, laisser l'utilisateur corriger, focus sur tendances pas données absolues |
| **Flutter limite technique future** | Faible | Moyen | Flutter est investi massivement par Google ; si limite atteinte, platform channels pour code natif |
| **RGPD / Privacy** | Faible | Élevé | Privacy by design, données minimisées, stockage EU (serveurs allemands), DPO, privacy policy glass-claire |

---

## 11. Annexes

### 11.1 Apps concurrentes (Analyse)

| App | Forces | Faiblesses | Différence Pocket Quest |
|---|---|---|---|
| **Forest** | Simple, focus tree planting | Pas de social media link, pas de gamification récompense concrète | Lieu les QP au temps social réel |
| **Opal** | Screen Time API native, bloqueur puissant | Design austère, pas ludique, abonnement cher | Design Tamagotchi + récompense positive |
| **One Sec** | Intervention au moment d'ouvrir l'app | Pas de gamification, réactif pas proactif | Proactif + récompense |
| **Flora** | Social, planting trees | Trees meurent si pas.focus (punition) | Pas de punition, récompense |
| **Habitica** | RPG gamification des habitudes | Pas de lien avec social media, UX datée | Lien direct temps d'écran + design moderne à pixel |

**Notre avantage compétitif v2** : Personne ne combine design Samsung Health-like (mature, clean) + système de points gamifié (Duolingo-inspired) + streaks bienveillants (Headspace) + récompenses Forest + AI Coach + social. Le design v2 est un game-changer — passer du pixel art à un design moderne élargit le public cible de 16-25 à 18-45 ans.

### 11.2 Key Metrics à Tracker

| Catégorie | Métrique | Target MVP | Target V1 |
|---|---|---|---|
| Acquisition | Downloads | 500 | 5,000 |
| Activation | Onboarding complet | 60% | 70% |
| Retention | D1 | 40% | 50% |
| Retention | D7 | 15% | 25% |
| Retention | D30 | 5% | 15% | 20% |
| Engagement | Activities logged/jour | 2 | 3 | 5 |
| Engagement | Focus sessions/semaine | 2 | 4 | 7 |
| Monétisation | Conversion premium | — | 5% | 8% |
| Monétisation | MRR | — | €2,000 | €6,000 |
| Viralité | Invite rate | — | 0.3 amis/user | 0.5 |
| Gamification | Streak moyen | — | 7 jours | 14 jours |
| Gamification | Niveau moyen (J30) | — | 5 | 10 |

### 11.3 Glossaire

| Terme | Définition |
|---|---|
| **QP** | Quest Points, l'unité de monnaie de l'app |
| **Streak** | Série de jours consécutifs où l'objectif est atteint |
| **Focus Mode** | Période de concentration où les distractions sont bloquées |
| **Guild** | Espace communautaire de l'app |
| **Daily Log** | Journal quotidien des activités et QP |
| **Avatar** | Créature pixel art qui représente le joueur |
| **Creatures Types** | egg, baby, kid, adult, legendary |

### 11.4 Références

- **Digital 2024 Global Overview Report** — Average social media usage 2h31/day
- **Apple ScreenTime API Documentation** — iOS 16+ FamilyControls framework
- **Flutter Documentation** — flutter.dev
- **NestJS Documentation** — docs.nestjs.com
- **Better Health (VK)** — Partenariat B2B potentiel pour données thérapeutiques
- **"Hooked" by Nir Eyal** — Modèle de gamification et habitudes
- **"Atomic Habits" by James Clear** — Principes de streak et formation d'habitudes

---

*— Fin du PRD v2 —*
*Prochaines étapes : Valider avec LeRoy → Phase 0 (Interviews + Prototype Figma v2) → Itérer → Commencer le MVP*
*Documents associés : POINTS_SYSTEM_RESEARCH.md, DESIGN_SYSTEM.md, WIREFRAMES.md*
