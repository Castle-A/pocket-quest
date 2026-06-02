# 🌿 Branches Git — Pocket Quest

> Règles de gestion des branches pour le projet Pocket Quest

## Branches

| Branche | Rôle | Protection |
|---------|------|------------|
| `main` | Production / Stable | ✅ Protégée — merge uniquement depuis `dev` |
| `dev` | Développement actif | — C'est ici qu'on travaille |
| `master` | Sync locale | — Copie locale de `dev` |

## Workflow

### Développement
```bash
git checkout dev
# ... travail ...
git add .
git commit -m "feat: description"
git push origin dev
```

### Validation (merge vers main)
```bash
git checkout main
git merge dev
git push origin main
```

## Règles
- **Jamais de push direct sur `main`** — toujours passer par `dev`
- **Commits conventionnels** : `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `test:`, `chore:`
- **Messages en français** pour les features, anglais pour le code technique
