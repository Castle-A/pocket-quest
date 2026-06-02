# 🏗️ Pocket Quest — Recommandation d'Architecture

> **Date** : 2026-02-06  
> **Auteur** : Dev pour LeRoy  
> **Décision** : **Flutter + NestJS + PostgreSQL + Firebase**

---

## 1. Décision Principale : Flutter

### Comparaison Finale

| Critère | React Native | Flutter | Natif Swift/Kotlin |
|---|---|---|---|
| Cross-platform | ✅ | ✅ | ❌ 2 codebases |
| Pixel-Art Rendering | ⚠️ Bridge overhead | ✅ Skia engine | ✅ Native |
| Hot Reload | ✅ | ✅ (supérieur) | ❌ |
| HealthKit / Google Fit | ⚠️ | ✅ Plugins stables | ✅ Native |
| ScreenTime API iOS | ⚠️ Community | ✅ Dédié | ✅ Native |
| Community/Ecosystem | ✅ Grand | ✅ Très grand | N/A |
| Maintenance 2026+ | ⚠️ Meta reduce | ✅ Google invested | ✅ But 2x coût |
| Time to Market | 4-6 semaines | **3-5 semaines** | 10-14 semaines |

**Verdict Flutter** est le choix optimal.

---

## 2. Architecture High-Level

```
┌──────────────────────────────────────────────────────────────┐
│                        CLIENTS                               │
│                                                              │
│   ┌─────────────┐  ┌─────────────┐  ┌────────────────────┐ │
│   │ iOS App     │  │ Android App │  │ Wear OS / watchOS  │ │
│   │ Flutter     │  │ Flutter     │  │ Companion (Phase V2)│ │
│   └──────┬──────┘  └──────┬──────┘  └────────┬───────────┘ │
│          │                │                    │             │
└──────────┼────────────────┼────────────────────┼─────────────┘
           │                │                    │
           ▼                ▼                    ▼
┌──────────────────────────────────────────────────────────────┐
│                      API GATEWAY                              │
│                  NestJS + TypeScript                          │
│                  Rate Limiting / Auth                         │
│                                                              │
│  ┌──────────┐ ┌──────────────┐ ┌─────────────────────────┐ │
│  │REST API  │ │ WebSocket    │ │ FCM / APNs Push         │ │
│  │CRUD,     │ │ Real-time    │ │ Notification Service    │ │
│  │Auth      │ │ Streaks,     │ │                         │ │
│  │          │ │ Leaderboards │ │                         │ │
│  └──────────┘ └──────────────┘ └─────────────────────────┘ │
└──────────────────────────┬───────────────────────────────────┘
                           │
           ┌───────────────┼───────────────┐
           ▼               ▼               ▼
┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐
│ PostgreSQL   │  │ Redis        │  │ Firebase             │
│ Données      │  │ Sessions     │  │ Auth + FCM + Storage │
│ principales  │  │ Cache        │  │                      │
│              │  │ Leaderboards │  │                      │
└──────────────┘  └──────────────┘  └──────────────────────┘
                           │
                           ▼
              ┌──────────────────────────┐
              │  OpenAI API              │
              │  GPT-4o-mini             │
              │  (AI Coach feature)      │
              └──────────────────────────┘
```

---

## 3. Flutter Architecture (Clean Architecture)

### 3.1 State Management : Riverpod

Riverpod est recommandé car :
- Compile-safe (pas de runtime errors)
- Testing facile (override providers)
- AutoDispose pour la mémoire
- Bonne DX avec code generation

### 3.2 Folder Structure

```
lib/
├── main.dart                          # Entry point, Firebase init
├── app/
│   ├── app.dart                       # MaterialApp, themes, routes
│   ├── routes/
│   │   ├── app_router.dart            # GoRouter config
│   │   └── route_names.dart
│   └── themes/
│       ├── app_theme.dart             # ThemeData definitions
│       ├── dark_theme.dart
│       ├── beige_theme.dart
│       └── bunt_theme.dart
├── core/
│   ├── constants/
│   │   ├── api_constants.dart
│   │   ├── app_constants.dart
│   │   └── storage_keys.dart
│   ├── errors/
│   │   ├── exceptions.dart
│   │   └── failures.dart
│   ├── network/
│   │   ├── api_client.dart            # Dio instance
│   │   ├── api_interceptor.dart       # Auth token injection
│   │   └── connectivity_service.dart
│   ├── utils/
│   │   ├── date_utils.dart
│   │   ├── qp_calculator.dart
│   │   └── validators.dart
│   └── services/
│       ├── health_service.dart        # HealthKit / Google Fit
│       ├── notification_service.dart  # FCM + Local
│       ├── bluetooth_service.dart     # BLE for Lockscreen Social
│       ├── screen_time_service.dart   # ScreenTime API
│       └── storage_service.dart       # Hive / SharedPreferences
├── features/
│   ├── auth/
│   │   ├── data/
│   │   │   ├── models/user_model.dart
│   │   │   ├── datasources/auth_remote_datasource.dart
│   │   │   └── repositories/auth_repository_impl.dart
│   │   ├── domain/
│   │   │   ├── entities/user.dart
│   │   │   ├── repositories/auth_repository.dart
│   │   │   └── usecases/sign_in.dart
│   │   └── presentation/
│   │       ├── providers/auth_provider.dart
│   │       ├── screens/onboarding_screen.dart
│   │       └── screens/login_screen.dart
│   ├── home/
│   │   ├── data/
│   │   ├── domain/
│   │   └── presentation/
│   │       ├── providers/home_provider.dart
│   │       └── screens/home_screen.dart
│   ├── quest/
│   │   ├── data/
│   │   ├── domain/
│   │   └── presentation/
│   │       ├── providers/quest_provider.dart
│   │       └── screens/
│   │           ├── add_quest_screen.dart
│   │           └── quest_detail_screen.dart
│   ├── avatar/
│   │   ├── data/
│   │   ├── domain/
│   │   └── presentation/
│   │       ├── widgets/avatar_widget.dart
│   │       └── widgets/level_progress_bar.dart
│   ├── streak/
│   │   └── presentation/
│   │       ├── widgets/streak_counter.dart
│   │       └── widgets/streak_calendar.dart
│   ├── focus_mode/
│   │   ├── data/
│   │   ├── domain/
│   │   └── presentation/
│   │       ├── providers/focus_provider.dart
│   │       └── screens/focus_screen.dart
│   ├── community/
│   │   ├── data/
│   │   ├── domain/
│   │   └── presentation/
│   │       ├── providers/guild_provider.dart
│   │       └── screens/guild_screen.dart
│   ├── ai_coach/
│   │   ├── data/
│   │   ├── domain/
│   │   └── presentation/
│   │       ├── providers/coach_provider.dart
│   │       └── screens/coach_chat_screen.dart
│   └── settings/
│       └── presentation/
│           └── screens/settings_screen.dart
├── shared/
│   ├── widgets/
│   │   ├── qp_display.dart
│   │   ├── activity_card.dart
│   │   ├── streak_badge.dart
│   │   ├── confirmation_dialog.dart
│   │   └── level_badge.dart
│   ├── models/
│   │   └── activity_model.dart
│   └── extensions/
│       ├── date_extension.dart
│       └── qp_extension.dart
└── l10n/
    ├── app_de.arb
    ├── app_en.arb
    └── app_fr.arb
```

---

## 4. Backend Architecture (NestJS)

### 4.1 Module Structure

```
src/
├── main.ts
├── app.module.ts
├── config/
│   ├── database.config.ts
│   ├── redis.config.ts
│   └── firebase.config.ts
├── modules/
│   ├── auth/
│   │   ├── auth.module.ts
│   │   ├── auth.controller.ts
│   │   ├── auth.service.ts
│   │   ├── strategies/
│   │   │   ├── jwt.strategy.ts
│   │   │   └── firebase.strategy.ts
│   │   └── guards/
│   │       └── jwt-auth.guard.ts
│   ├── users/
│   │   ├── users.module.ts
│   │   ├── users.controller.ts
│   │   ├── users.service.ts
│   │   └── dto/
│   │       └── update-user.dto.ts
│   ├── daily-logs/
│   │   ├── daily-logs.module.ts
│   │   ├── daily-logs.controller.ts
│   │   ├── daily-logs.service.ts
│   │   └── dto/
│   │       ├── create-log.dto.ts
│   │       └── add-activity.dto.ts
│   ├── activities/
│   │   ├── activities.module.ts
│   │   └── activities.service.ts
│   ├── streaks/
│   │   ├── streaks.module.ts
│   │   ├── streaks.controller.ts
│   │   ├── streaks.service.ts
│   │   └── streaks.cron.ts          # Weekly reset
│   ├── focus-sessions/
│   │   ├── focus-sessions.module.ts
│   │   └── focus-sessions.service.ts
│   ├── social/
│   │   ├── social.module.ts
│   │   ├── social.controller.ts
│   │   └── social.service.ts
│   ├── reminders/
│   │   ├── reminders.module.ts
│   │   ├── reminders.cron.ts        # Schedule push notifications
│   │   └── reminders.service.ts
│   ├── ai-coach/
│   │   ├── ai-coach.module.ts
│   │   ├── ai-coach.controller.ts
│   │   ├── ai-coach.service.ts      # OpenAI integration
│   │   └── ai-coach.prompts.ts
│   └── notifications/
│       ├── notifications.module.ts
│       └── notifications.service.ts  # FCM + APNs
├── common/
│   ├── decorators/
│   ├── filters/
│   │   └── http-exception.filter.ts
│   ├── interceptors/
│   └── pipes/
└── database/
    ├── migrations/
    └── seeds/
        └── activity-types.seed.ts
```

---

## 5. Infrastructure & DevOps

### 5.1 Recommandation Hébergement

| Composant | Solution | Coût/mois (début) |
|---|---|---|
| Backend | Google Cloud Run (serverless containers) | €0-20 |
| Database | Supabase PostgreSQL (free tier) puis AWS RDS | €0-30 |
| Cache | Upstash Redis (serverless) | €0-10 |
| Auth | Firebase Auth (free tier) | €0 |
| Storage | Firebase Storage (free tier) | €0 |
| Push | Firebase Cloud Messaging (free) | €0 |
| AI | OpenAI API (pay-as-you-go) | €10-50 |
| Errors | Sentry (free tier) | €0 |
| Analytics | PostHog Cloud (free tier) — EU hosting | €0 |

**Total infrastructure Y1** : ~€20-100/mois (hors salaires)

### 5.2 CI/CD Pipeline

```yaml
# .github/workflows/ci.yml (structure)
name: Pocket Quest CI/CD

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: subosito/flutter-action@v2
      - run: flutter test
      - run: flutter analyze

  build-ios:
    needs: test
    runs-on: macos-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v4
      - uses: subosito/flutter-action@v2
      - run: flutter build ios --release --no-codesign
      - uses: apple-actions/build-ipa@v1  # via Fastlane
      - uses: apple-actions/upload-testflight@v1

  build-android:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v4
      - uses: subosito/flutter-action@v2
      - run: flutter build appbundle --release
      - uses: r0adkll/upload-google-play@v1

  deploy-backend:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v4
      - run: docker build -t pocket-quest-api .
      - run: gcloud run deploy pocket-quest-api
```

---

## 6. Security Considerations

| Domaine | Mesure |
|---|---|
| Auth | Firebase Auth + JWT, refresh token rotation |
| API | Rate limiting (100 req/min/user), CORS, Helmet |
| Data | Encryption at rest (PostgreSQL TDE), TLS in transit |
| Health Data | Minimal collection, on-device processing when possible, GDPR-compliant storage in EU |
| AI | No PII sent to OpenAI, pseudonymized user data only |
| Secrets | GitHub Secrets + Cloud Run environment variables |
| Compliance | GDPR (EU users), CCPA (California if needed), App Store privacy labels |

---

## 6. Tech Stack Summary

| Layer | Technology |
|---|---|
| Mobile | Flutter 3.x, Dart 3 |
| State | Riverpod + Code Generation |
| Routing | GoRouter |
| Local DB | Hive (MVP) → SQLite (V1+) |
| Backend | NestJS + TypeScript |
| Database | PostgreSQL 16 |
| Cache | Redis 7 |
| Auth | Firebase Auth |
| Push | FCM + APNs |
| AI | OpenAI GPT-4o-mini |
| Realtime | WebSocket (Socket.io) |
| Hosting | Google Cloud Run |
| CI/CD | GitHub Actions + Fastlane |
| Monitoring | Sentry + Grafana |
| Analytics | PostHog |
| Design | Figma |
| Project Management | GitHub Projects |

---

*— Fin du document d'architecture —*
