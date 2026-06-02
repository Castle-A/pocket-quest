# 📊 Pocket Quest — Data Model

> **Version** : 1.0  
> **Date** : 2026-02-06  
> **Database** : PostgreSQL 16  
> **ORM** : Prisma (backend) / Drift (Flutter, MVP)

---

## 1. ER Diagram (Textuel)

```
┌──────────┐     ┌──────────┐     ┌──────────────────┐
│  users   │1:1 │ avatars  │     │ activity_types   │
├──────────┤────├──────────┤     ├──────────────────┤
│id (PK)   │───→│id (PK)   │     │id (PK)           │
│email     │    │user_id(FK)│     │name              │
│username  │    │level     │     │qp_per_unit       │
│pwd_hash  │    │exp       │     │unit              │
│locale    │    │creature  │     │max_daily         │
│theme     │    │mood      │     │icon              │
│premium   │    │custom    │     └────────┬─────────┘
│created_at│    └──────────┘              │
└──┬───────┘                              │ 1:N
   │ 1:N                                  │
   │    ┌──────────────────┐              │
   ├───→│  daily_logs      │              │
   │    ├──────────────────┤     ┌────────┴─────────┐
   │    │id (PK)           │1:N  │activity_entries  │
   │    │user_id (FK)      │────├──────────────────┤
   │    │date              │    │id (PK)           │
   │    │total_qp          │    │daily_log_id (FK) │
   │    │qp_used           │    │activity_type_id  │
   │    │qp_remaining      │    │quantity          │
   │    │goal_met          │    │qp_earned         │
   │    └──────────────────┘    │source            │
   │                            │recorded_at       │
   │    ┌──────────────────┐    └──────────────────┘
   ├───→│  streaks         │
   │    ├──────────────────┤     ┌──────────────────┐
   │    │id (PK)           │     │focus_sessions    │
   │    │user_id (FK)      │     ├──────────────────┤
   │    │week_number       │     │id (PK)           │
   │    │year              1:N  │user_id (FK)      │
   │    │days_completed[]  │────│started_at        │
   │    │current_streak    │     │planned_duration  │
   │    │best_streak       │     │actual_duration   │
   │    │is_active         │     │completed         │
   │    └──────────────────┘     │qp_earned         │
   │                             └──────────────────┘
   │    ┌──────────────────┐
   ├───→│social_connections│     ┌──────────────────┐
   │    ├──────────────────┤     │  reminders       │
   │    │id (PK)           1:N  ├──────────────────┤
   │    │user_id (FK)      │────│id (PK)           │
   │    │friend_id (FK)    │     │user_id (FK)      │
   │    │status            │     │type              │
   │    └──────────────────┘     │time              │
   │                             │days[]            │
   │    ┌──────────────────┐     │is_active         │
   └───→│  ai_chats        │     │custom_message    │
        ├──────────────────┤     └──────────────────┘
        │id (PK)           │
        │user_id (FK)      │
        │messages (JSONB)  │
        │context_summary   │
        │updated_at        │
        └──────────────────┘
```

---

## 2. Tables Détaillées

### 2.1 users

| Column | Type | Constraints | Description |
|---|---|---|---|
| id | UUID | PK, DEFAULT gen_random_uuid() | Identifiant unique |
| email | VARCHAR(255) | UNIQUE, NOT NULL | Email utilisateur |
| username | VARCHAR(50) | UNIQUE, NOT NULL | Nom d'utilisateur affiché |
| password_hash | VARCHAR(255) | NOT NULL | Hash bcrypt |
| locale | VARCHAR(10) | DEFAULT 'de-DE' | Langue préférée |
| theme | VARCHAR(30) | DEFAULT 'dark' | Thème actif |
| is_premium | BOOLEAN | DEFAULT FALSE | Statut premium |
| premium_expiry | TIMESTAMPTZ | NULLABLE | Date d'expiration premium |
| push_token | VARCHAR(255) | NULLABLE | Token pour push notifications |
| created_at | TIMESTAMPTZ | DEFAULT NOW() | Date de création |
| updated_at | TIMESTAMPTZ | DEFAULT NOW() | Dernière modification |

### 2.2 avatars

| Column | Type | Constraints | Description |
|---|---|---|---|
| id | UUID | PK | Identifiant unique |
| user_id | UUID | FK → users.id, ON DELETE CASCADE | Propriétaire |
| level | INTEGER | DEFAULT 1 | Level de l'avatar (1-50) |
| experience | BIGINT | DEFAULT 0 | XP cumulé |
| creature_type | VARCHAR(30) | DEFAULT 'egg' | Type: egg/baby/kid/adult/legendary |
| mood | VARCHAR(20) | DEFAULT 'happy' | humeur: happy/sad/neutral/excited |
| customizations | JSONB | DEFAULT '{}' | Accessoires, couleurs, etc. |
| created_at | TIMESTAMPTZ | DEFAULT NOW() | |

### 2.3 activity_types

| Column | Type | Constraints | Description |
|---|---|---|---|
| id | SERIAL | PK | Identifiant |
| name | VARCHAR(50) | NOT NULL | Nom de l'activité |
| qp_per_unit | DECIMAL(10,2) | NOT NULL | QP par unité |
| unit | VARCHAR(20) | NOT NULL | Unité: minute/hour/session/liter |
| max_daily | INTEGER | NULLABLE | Plafond journalier (NULL = pas de limite) |
| icon | VARCHAR(50) | | Nom de l'icône Flutter |

**Données seed :**

| name | qp_per_unit | unit | max_daily | icon |
|---|---|---|---|---|
| sleep | 1.0 | minute | 480 | moon.stars.fill |
| sport | 2.0 | minute | 300 | figure.run |
| reading | 1.5 | minute | 180 | book.fill |
| walking | 2.0 | minute | 240 | shoe.fill |
| meditation | 3.0 | minute | 120 | leaf.fill |
| chores | 1.0 | minute | 300 | house.fill |
| social | 1.5 | minute | 180 | person.2.fill |
| focus_mode | 2.0 | minute | 480 | target |
| water | 5.0 | liter | 15 | drop.fill |

### 2.4 daily_logs

| Column | Type | Constraints | Description |
|---|---|---|---|
| id | UUID | PK | Identifiant |
| user_id | UUID | FK → users.id, ON DELETE CASCADE | Propriétaire |
| date | DATE | NOT NULL | Date du journal |
| total_qp | INTEGER | DEFAULT 0 | Total QP gagnés |
| qp_used | INTEGER | DEFAULT 0 | QP dépensés (temps social) |
| qp_remaining | INTEGER | DEFAULT 0 | QP restants |
| goal_met | BOOLEAN | DEFAULT FALSE | Objectif du jour atteint |
| created_at | TIMESTAMPTZ | DEFAULT NOW() | |
| updated_at | TIMESTAMPTZ | DEFAULT NOW() | |

**Unique Constraint :** (user_id, date)

### 2.5 activity_entries

| Column | Type | Constraints | Description |
|---|---|---|---|
| id | UUID | PK | Identifiant |
| daily_log_id | UUID | FK → daily_logs.id | Journal parent |
| activity_type_id | INTEGER | FK → activity_types.id | Type d'activité |
| quantity | DECIMAL | NOT NULL | Quantité (ex: 1.5 hours) |
| qp_earned | INTEGER | NOT NULL | QP gagnés (calculé) |
| source | VARCHAR(20) | DEFAULT 'manual' | auto/manual/estimate |
| notes | TEXT | NULLABLE | Notes libres |
| recorded_at | TIMESTAMPTZ | DEFAULT NOW() | |

### 2.6 streaks

| Column | Type | Constraints | Description |
|---|---|---|---|
| id | UUID | PK | Identifiant |
| user_id | UUID | FK → users.id | Propriétaire |
| week_number | INTEGER | NOT NULL | Numéro de semaine ISO |
| year | INTEGER | NOT NULL | Année |
| days_completed | SMALLINT[] | DEFAULT '{}' | Jours complétés (0-6, 0=Dim) |
| current_streak | INTEGER | DEFAULT 0 | Streak actuelle (jours consécutifs) |
| best_streak | INTEGER | DEFAULT 0 | Meilleur streak historique |
| is_active | BOOLEAN | DEFAULT true | Streak active cette semaine |
| created_at | TIMESTAMPTZ | DEFAULT NOW() | |

**Unique Constraint :** (user_id, year, week_number)

### 2.7 focus_sessions

| Column | Type | Constraints | Description |
|---|---|---|---|
| id | UUID | PK | Identifiant |
| user_id | UUID | FK → users.id | Propriétaire |
| started_at | TIMESTAMPTZ | NOT NULL | Début de session |
| planned_duration_min | INTEGER | NOT NULL | Durée prévue |
| actual_duration_min | INTEGER | NULLABLE | Durée réelle |
| completed | BOOLEAN | DEFAULT false | Session terminée avec succès |
| qp_earned | INTEGER | DEFAULT 0 | QP gagnés |
| qp_used | INTEGER | DEFAULT 0 | QP dépensés pendant la session |
| created_at | TIMESTAMPTZ | DEFAULT NOW() | |

### 2.8 social_connections

| Column | Type | Constraints | Description |
|---|---|---|---|
| id | UUID | PK | Identifiant |
| user_id | UUID | FK → users.id | Utilisateur |
| friend_id | UUID | FK → users.id | Ami |
| status | VARCHAR(20) | DEFAULT 'pending' | pending/accepted/blocked |
| created_at | TIMESTAMPTZ | DEFAULT NOW() | |

**Unique Constraint :** (user_id, friend_id)

### 2.9 reminders

| Column | Type | Constraints | Description |
|---|---|---|---|
| id | UUID | PK | Identifiant |
| user_id | UUID | FK → users.id, ON DELETE CASCADE | Propriétaire |
| type | VARCHAR(30) | NOT NULL | Type de rappel |
| time | TIME | NOT NULL | Heure du rappel |
| days | SMALLINT[] | DEFAULT '{0,1,2,3,4,5,6}' | Jours de la semaine |
| is_active | BOOLEAN | DEFAULT true | Rappel activé |
| custom_message | TEXT | NULLABLE | Message personnalisé |
| created_at | TIMESTAMPTZ | DEFAULT NOW() | |

### 2.10 ai_chats

| Column | Type | Constraints | Description |
|---|---|---|---|
| id | UUID | PK | Identifiant |
| user_id | UUID | FK → users.id, ON DELETE CASCADE | Propriétaire |
| messages | JSONB | DEFAULT '[]' | Historique des messages [{role, content, timestamp}] |
| context_summary | TEXT | NULLABLE | Résumé du contexte pour l'IA |
| created_at | TIMESTAMPTZ | DEFAULT NOW() | |
| updated_at | TIMESTAMPTZ | DEFAULT NOW() | |

---

## 3. Indexes

```sql
-- Performance indexes
CREATE INDEX idx_daily_logs_user_date ON daily_logs(user_id, date DESC);
CREATE INDEX idx_activity_entries_log ON activity_entries(daily_log_id);
CREATE INDEX idx_streaks_user_week ON streaks(user_id, year DESC, week_number DESC);
CREATE INDEX idx_focus_sessions_user_date ON focus_sessions(user_id, started_at DESC);
CREATE INDEX idx_social_connections_user ON social_connections(user_id);
CREATE INDEX idx_social_connections_friend ON social_connections(friend_id);
CREATE INDEX idx_reminders_user_active ON reminders(user_id) WHERE is_active = true;
CREATE INDEX idx_avatars_user ON avatars(user_id);

-- Partial indexes for common queries
CREATE INDEX idx_daily_logs_today ON daily_logs(user_id, date) WHERE date >= CURRENT_DATE - INTERVAL '7 days';
CREATE INDEX idx_focus_sessions_active ON focus_sessions(user_id) WHERE completed = false;
CREATE INDEX idx_streaks_active ON streaks(user_id, year, week_number) WHERE is_active = true;
```

---

## 4. Prisma Schema (Backend ORM)

```prisma
// prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id             String    @id @default(uuid()) @db.Uuid
  email          String    @unique @db.VarChar(255)
  username       String    @unique @db.VarChar(50)
  passwordHash   String    @map("password_hash") @db.VarChar(255)
  locale         String    @default("de-DE") @db.VarChar(10)
  theme          String    @default("dark") @db.VarChar(30)
  isPremium      Boolean   @default(false) @map("is_premium")
  premiumExpiry  DateTime? @map("premium_expiry") @db.Timestamptz()
  pushToken      String?   @map("push_token") @db.VarChar(255)
  createdAt      DateTime  @default(now()) @map("created_at") @db.Timestamptz()
  updatedAt      DateTime  @updatedAt @map("updated_at") @db.Timestamptz()

  avatar         Avatar?
  dailyLogs      DailyLog[]
  streaks        Streak[]
  focusSessions  FocusSession[]
  reminders      Reminder[]
  aiChat         AIChat?
  sentFriends    SocialConnection[] @relation("sentFriends")
  receivedFriends SocialConnection[] @relation("receivedFriends")

  @@map("users")
}

model Avatar {
  id            String   @id @default(uuid()) @db.Uuid
  userId        String   @unique @map("user_id") @db.Uuid
  level         Int      @default(1)
  experience    BigInt   @default(0)
  creatureType  String   @default("egg") @map("creature_type") @db.VarChar(30)
  mood          String   @default("happy") @db.VarChar(20)
  customizations Json   @default("{}")
  createdAt     DateTime @default(now()) @map("created_at") @db.Timestamptz()

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@map("avatars")
}

model ActivityType {
  id         Int     @id @default(autoincrement())
  name       String  @db.VarChar(50)
  qpPerUnit  Float   @map("qp_per_unit")
  unit       String  @db.VarChar(20)
  maxDaily   Int?    @map("max_daily")
  icon       String? @db.VarChar(50)

  entries ActivityEntry[]

  @@map("activity_types")
}

model DailyLog {
  id           String          @id @default(uuid()) @db.Uuid
  userId       String          @map("user_id") @db.Uuid
  date         DateTime        @db.Date
  totalQp      Int             @default(0) @map("total_qp")
  qpUsed       Int             @default(0) @map("qp_used")
  qpRemaining  Int             @default(0) @map("qp_remaining")
  goalMet      Boolean         @default(false) @map("goal_met")
  createdAt    DateTime        @default(now()) @map("created_at") @db.Timestamptz()
  updatedAt    DateTime        @updatedAt @map("updated_at") @db.Timestamptz()

  user     User              @relation(fields: [userId], references: [id], onDelete: Cascade)
  entries  ActivityEntry[]

  @@unique([userId, date])
  @@map("daily_logs")
}

model ActivityEntry {
  id              String     @id @default(uuid()) @db.Uuid
  dailyLogId      String     @map("daily_log_id") @db.Uuid
  activityTypeId  Int        @map("activity_type_id")
  quantity        Float
  qpEarned        Int        @map("qp_earned")
  source          String     @default("manual") @db.VarChar(20)
  notes           String?    @db.Text
  recordedAt     DateTime   @default(now()) @map("recorded_at") @db.Timestamptz()

  dailyLog     DailyLog     @relation(fields: [dailyLogId], references: [id], onDelete: Cascade)
  activityType ActivityType @relation(fields: [activityTypeId], references: [id])

  @@map("activity_entries")
}

model Streak {
  id             String   @id @default(uuid()) @db.Uuid
  userId         String   @map("user_id") @db.Uuid
  weekNumber     Int      @map("week_number")
  year           Int
  daysCompleted  Int[]    @default([]) @map("days_completed")
  currentStreak  Int      @default(0) @map("current_streak")
  bestStreak     Int      @default(0) @map("best_streak")
  isActive       Boolean  @default(true) @map("is_active")
  createdAt      DateTime @default(now()) @map("created_at") @db.Timestamptz()

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([userId, year, weekNumber])
  @@map("streaks")
}

model FocusSession {
  id                String    @id @default(uuid()) @db.Uuid
  userId            String    @map("user_id") @db.Uuid
  startedAt         DateTime  @map("started_at") @db.Timestamptz()
  plannedDurationMin Int      @map("planned_duration_min")
  actualDurationMin Int?      @map("actual_duration_min")
  completed         Boolean   @default(false)
  qpEarned          Int       @default(0) @map("qp_earned")
  qpUsed            Int       @default(0) @map("qp_used")
  createdAt         DateTime  @default(now()) @map("created_at") @db.Timestamptz()

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@map("focus_sessions")
}

model SocialConnection {
  id        String   @id @default(uuid()) @db.Uuid
  userId    String   @map("user_id") @db.Uuid
  friendId  String   @map("friend_id") @db.Uuid
  status    String   @default("pending") @db.VarChar(20)
  createdAt DateTime @default(now()) @map("created_at") @db.Timestamptz()

  user   User @relation("sentFriends", fields: [userId], references: [id], onDelete: Cascade)
  friend User @relation("receivedFriends", fields: [friendId], references: [id], onDelete: Cascade)

  @@unique([userId, friendId])
  @@map("social_connections")
}

model Reminder {
  id            String   @id @default(uuid()) @db.Uuid
  userId        String   @map("user_id") @db.Uuid
  type          String   @db.VarChar(30)
  time          DateTime @db.Time
  days          Int[]    @default([0, 1, 2, 3, 4, 5, 6])
  isActive      Boolean  @default(true) @map("is_active")
  customMessage String?  @map("custom_message") @db.Text
  createdAt     DateTime @default(now()) @map("created_at") @db.Timestamptz()

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@map("reminders")
}

model AIChat {
  id             String   @id @default(uuid()) @db.Uuid
  userId         String   @unique @map("user_id") @db.Uuid
  messages       Json     @default("[]")
  contextSummary String?  @map("context_summary") @db.Text
  createdAt      DateTime @default(now()) @map("created_at") @db.Timestamptz()
  updatedAt      DateTime @updatedAt @map("updated_at") @db.Timestamptz()

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@map("ai_chats")
}
```

---

## 5. Calcul des QP — Logique

```
Pour chaque activité:
  QP_base = qp_per_unit × quantity
  Si max_daily existe: QP_actual = min(QP_base, max_daily - QP_already_earned_today)
  
Plafond journalier total: 960 QP (16h de temps social)
Si total_qp_today + QP_actual > 960:
  QP_actual = 960 - total_qp_today

Bonus Streak:
  Streak ≥ 7j: QP_actual × 1.5 (pas ×2 — trop généreux)
  Streak ≥ 30j: QP_actual × 2
  Bonus du weekend (si streak 5/7): QP_actual × 2

Limite sommeil: max 480 QP (8h)
```

---

*— Fin du Data Model —*
