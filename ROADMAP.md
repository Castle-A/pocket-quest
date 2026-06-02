# 🗺️ Pocket Quest — Roadmap de Développement

> **Version** : 1.0  
> **Date** : 2026-02-06  
> **Horizon** : 12 mois jusqu'au lancement V1  

---

## Vue d'ensemble

```
Phase 0        MVP           V1             V2             V3
Validation     Core          Store-Ready    Engagement     Scale
   │             │              │              │              │
   2-3 sem      6-8 sem       8-10 sem       10-12 sem      6-8 sem
   ├────────────┼──────────────┼──────────────┼──────────────┤
   │            │              │              │              │
   ▼            ▼              ▼              ▼              ▼
 Interviews    App iOS+Android  Stores       Wear OS        B2B
 Figma Proto   Beta Test       Push Notif    Watch App      API publique
 Landing Page  Auth basique    HealthKit     Level System   Localisation
 Test utilisé  Points system   AI Coach v1   Social BT      Advanced Stats
               Focus basique   Community     Widgets        Referral
               Streak          Premium IAP   Challenges
                                              
Total estimé: ~9-12 mois pour V1 complète
```

---

## Phase 0 — Validation (Semaines 1-3)

**Objectif** : Valider le concept AVANT de coder.

| # | Tâche | Durée | Responsable | Livrable |
|---|---|---|---|---|
| 0.1 | Créer la landing page | 1-2j | LeRoy | Page Carrd/Carrd.co avec email capture |
| 0.2 | Réduser le guide d'interview | 1j | LeRoy | Questions + script |
| 0.3 | Interviewer 10-15 personnes | 5-8j | LeRoy | Notes + insights |
| 0.4 | Créer le prototype Figma | 3-5j | Designer | Maquette interactive onboarding + home + quest |
| 0.5 | Tester le prototype (5-8 users) | 3-5j | LeRoy + Designer | Rapport de test utilisateur |
| 0.6 | Itération sur le concept | 2-3j | LeRoy + Dev | PRD mis à jour |
| 0.7 | Valider/invalider le Go | 1j | LeRoy | Décision GO / PIVOT / STOP |

**Budget** : €0-2K (landing page + Figma)
**Critère de GO** : Au moins 60% des interviewés disent "je téléchargerais ça"

---

## MVP — Core App (Semaines 4-11)

**Objectif** : App fonctionnelle sur iOS + Android avec les features core.

### Sprint 1 (Sem 4-5) : Setup + Auth

| # | Tâche | Priority | Est. (j) |
|---|---|---|---|
| M1.1 | Initialiser le projet Flutter | P0 | 1j |
| M1.2 | Setup Firebase (Auth, FCM, Storage) | P0 | 1j |
| M1.3 | Créer le design system (couleurs, typo, thème dark) | P0 | 2j |
| M1.4 | Implémenter Firebase Auth (email + Apple ID + Google) | P0 | 2j |
| M1.5 | Onboarding 3 écrans | P0 | 2j |
| M1.6 | Écran login/registre | P0 | 1j |

**Sprint 1 Total** : ~9 jours

### Sprint 2 (Sem 6-7) : Système de Points

| # | Tâche | Priority | Est. (j) |
|---|---|---|---|
| M2.1 | Écran Home Dashboard (structure) | P0 | 2j |
| M2.2 | Modèles de données (Hive local storage) | P0 | 1j |
| M2.3 | Écran "Add Quest" avec grille d'activités | P0 | 2j |
| M2.4 | Logique de calcul QP | P0 | 1j |
| M2.5 | Affichage QP sur Dashboard | P0 | 1j |
| M2.6 | Écran "Add Quest" (sélection quantité) | P0 | 1j |
| M2.7 | Liste des activités du jour | P0 | 1j |

**Sprint 2 Total** : ~9 jours

### Sprint 3 (Sem 8-9) : Avatar + Streak

| # | Tâche | Priority | Est. (j) |
|---|---|---|---|
| M3.1 | Intégration du design pixel art (assets) | P0 | 3j |
| M3.2 | Widget Avatar (3 états: egg/baby/kid) | P0 | 2j |
| M3.3 | Logique de streak (hebdomadaire, reset lundi) | P0 | 2j |
| M3.4 | Widget streak counter | P0 | 1j |
| M3.5 | Widget streak calendar | P0 | 1j |
| M3.6 | Passage de niveau (level system basique, pas premium) | P2 | 1j |

**Sprint 3 Total** : ~10 jours

### Sprint 4 (Sem 10-11) : Focus Mode + Polish

| # | Tâche | Priority | Est. (j) |
|---|---|---|---|
| M4.1 | Focus Mode (timer basique, pas ScreenTime API) | P1 | 3j |
| M4.2 | Notifications locales (rappels configurables) | P1 | 2j |
| M4.3 | Écran Settings basique | P1 | 1j |
| M4.4 | Motivational quotes aléatoires | P2 | 0.5j |
| M4.5 | Tests (TestFlight + Internal Testing) | P0 | 2j |
| M4.6 | Bug fixes + polish | P0 | 2j |
| M4.7 | Préparation beta (50-100 testers) | P0 | 1j |

**Sprint 4 Total** : ~11.5 jours

### MVP Total

| Métrique | Valeur |
|---|---|
| **Durée totale** | 6-8 semaines |
| **Jours de dev** | ~39.5 jours |
| **Features** | Auth + Points + 5 activités + Streak + Avatar + Focus + Local notifications |
| **Plateformes** | iOS + Android |
| **Backend** | Pas de backend — 100% local (Hive + Firebase Auth) |
| **Coût** | ~€8K-15K (1 dev Flutter freelance) |

---

## V1 — Store Release (Semaines 12-21)

**Objectif** : App prête pour App Store + Google Play avec les features différenciantes.

### Sprint 5 (Sem 12-14) : Backend + Auth Cloud

| # | Tâche | Priority | Est. (j) |
|---|---|---|---|
| V1.5.1 | Setup NestJS + PostgreSQL | P0 | 2j |
| V1.5.2 | API Auth (Firebase → JWT) | P0 | 2j |
| V1.5.3 | API Utilisateurs (CRUD) | P0 | 1j |
| V1.5.4 | API Daily Logs + Activity Entries | P0 | 2j |
| V1.5.5 | Migration de Hive → API (sync cloud) | P0 | 2j |
| V1.5.6 | Gestion offline (queue + retry) | P1 | 2j |
| V1.5.7 | Tests API (unit + integration) | P0 | 2j |

**Sprint 5 Total** : ~13 jours

### Sprint 6 (Sem 15-16) : Health Integration + Push

| # | Tâche | Priority | Est. (j) |
|---|---|---|---|
| V1.6.1 | HealthKit integration (iOS) | P0 | 3j |
| V1.6.2 | Google Fit integration (Android) | P0 | 2j |
| V1.6.3 | Auto-tracking pas, sommeil, workouts | P0 | 2j |
| V1.6.4 | Écran permissions health data (opt-in granular) | P0 | 1j |
| V1.6.5 | Notifications push (FCM + APNs) | P0 | 2j |
| V1.6.6 | Smart reminders (cron-based backend) | P1 | 2j |

**Sprint 6 Total** : ~12 jours

### Sprint 7 (Sem 17-18) : Community + Premium

| # | Tâche | Priority | Est. (j) |
|---|---|---|---|
| V1.7.1 | API Social (ajout amis, statut) | P1 | 2j |
| V1.7.2 | Écran Guild (liste d'amis, streaks mutuels) | P1 | 2j |
| V1.7.3 | Logique Premium + RTR/PR (iOS/Android) | P1 | 3j |
| V1.7.4 | Feature gating (free vs premium) | P1 | 1j |
| V1.7.5 | Réabonnement + expiration + rappel | P1 | 1j |
| V1.7.6 | Écran "Upgrade to Premium" | P1 | 1j |

**Sprint 7 Total** : ~10 jours

### Sprint 8 (Sem 19-20) : AI Coach + ScreenTime

| # | Tâche | Priority | Est. (j) |
|---|---|---|---|
| V1.8.1 | Intégration OpenAI API | P1 | 2j |
| V1.8.2 | Prompt engineering (context builder) | P1 | 2j |
| V1.8.3 | Écran Chat IA (interface) | P1 | 2j |
| V1.8.4 | Context builder (résumé hebdomadaire auto) | P1 | 1j |
| V1.8.5 | ScreenTime API iOS (FamilyControls) | P1 | 3j |
| V1.8.6 | Focus Mode amélioré (blocage apps) | P1 | 2j |
| V1.8.7 | Android UsageStats integration | P2 | 2j |

**Sprint 8 Total** : ~14 jours

### Sprint 9 (Sem 21) : Store Launch

| # | Tâche | Priority | Est. (j) |
|---|---|---|---|
| V1.9.1 | App screenshots + descriptions (multilingue) | P0 | 1j |
| V1.9.2 | App Store review préparation (privacy labels, etc.) | P0 | 1j |
| V1.9.3 | Soumission App Store | P0 | 1j |
| V1.9.4 | Soumission Google Play | P0 | 1j |
| V1.9.5 | Analytics setup (PostHog) | P1 | 1j |
| V1.9.6 | Monitoring setup (Sentry) | P1 | 0.5j |
| V1.9.7 | Bug fixes pre-launch | P0 | 2j |
| V1.9.8 | Documentation utilisateur (FAQ) | P1 | 1j |

**Sprint 9 Total** : ~8.5 jours

### V1 Total

| Métrique | Valeur |
|---|---|
| **Durée totale** | 8-10 semaines |
| **Jours de dev** | ~57.5 jours |
| **Équipe** | 1 Flutter + 1 Backend |
| **Coût** | ~€18K-28K |
| **Cumul depuis MVP** | ~€26K-43K |

---

## V2 — Engagement (Semaines 22-33)

**Objectif** : Retention longue, gamification poussée, différenciation forte.

| Sprint | Semaines | Features | Jours |
|---|---|---|---|
| 10 | 22-24 | Apple Watch app + complications | 12j |
| 11 | 25-26 | Wear OS companion app | 10j |
| 12 | 27-29 | Level System (1-50) + badges | 12j |
| 13 | 30-31 | AI Coach v2 (chat temps réel) | 10j |
| 14 | 32-33 | Bluetooth Social Focus + Lockscreen | 12j |
| 15 | 34-35 | Group Challenges + Referral | 10j |
| 16 | 36-37 | Widgets iOS/Android + Advanced Stats | 10j |

**V2 Total** : ~76 jours | ~€25K-38K

---

## V3 — Scale (Semaines 38-45)

**Objectif** : Scale, B2B, monétisation avancée.

| Sprint | Semaines | Features | Jours |
|---|---|---|---|
| 17 | 38-39 | Apple Health v2 (data plus granulaire) | 8j |
| 18 | 40-41 | Android Wellbeing API | 8j |
| 19 | 42-43 | Localization (EN, FR, ES, IT) | 10j |
| 20 | 44-45 | Community Chat + Gamification avancée (quêtes thématiques) | 10j |

**V3 Total** : ~36 jours | ~€15K-22K

---

## Résumé Global

| Phase | Semaines | Jours Dev | Coût Est. | Livrable |
|---|---|---|---|---|
| Phase 0 (Validation) | 1-3 | 0 (LeRoy) | €0-2K | Go/No-Go |
| MVP | 4-11 | ~40j | €8K-15K | Beta iOS+Android |
| V1 (Store) | 12-21 | ~58j | €18K-28K | App Store + Play Store |
| V2 (Engagement) | 22-37 | ~76j | €25K-38K | Rétention D30 > 25% |
| V3 (Scale) | 38-45 | ~36j | €15K-22K | 50K+ users |
| **TOTAL** | **~45 sem** | **~210j** | **€66K-105K** | **V1 complète** |

---

## KPIs par Phase

| Phase | D1 | D7 | D30 | Conv. Premium | MRR |
|---|---|---|---|---|---|
| MVP | 40% | — | — | — | — |
| V1 | 45% | 15% | 8% | 3% | €500 |
| V2 | 50% | 25% | 15% | 7% | €3K |
| V3 | 55% | 30% | 20% | 10% | €10K |

---

*— Fin de la Roadmap —*
