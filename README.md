# Portfolio

Personal portfolio site — React + Vite frontend, optional Express + SQL Server backend.

**Live site:** https://AkibHasan2.github.io/Portfolio/

## Stack

- **Frontend:** React 18, Vite, Tailwind CSS, Framer Motion
- **Backend (optional):** Node/Express + Microsoft SQL Server
- **Hosting:** GitHub Pages (static mode)

## Quick start (frontend)

```bash
cd frontend
cp .env.example .env
npm install
npm run dev
```

Open http://localhost:5173

### Data source (`frontend/.env`)

| Setting | Effect |
|---------|--------|
| `VITE_USE_DB=false` | Use static content in `frontend/src/data/static.js` |
| `VITE_USE_DB=true` | Load content from the API / SQL Server |

GitHub Pages always builds with `VITE_USE_DB=false`.

## Backend (optional)

```bash
cd backend
cp .env.example .env
# Edit DB_* and ADMIN_* values
npm install
npm run dev
```

API: http://localhost:4000

Default admin login (local `.env`): `you@example.com` / `admin123`

## Deploy (GitHub Pages)

Pushing to `main` rebuilds and publishes to the `gh-pages` branch via GitHub Actions.

**Live site:** https://AkibHasan2.github.io/Portfolio/

**One-time setup** (if the site 404s):

1. Open https://github.com/AkibHasan2/Portfolio/settings/pages  
2. **Source:** Deploy from a branch  
3. **Branch:** `gh-pages` / **Folder:** `/ (root)` → Save  

After each push, wait for the green check on **Actions → Deploy GitHub Pages**, then open the live URL with a hard refresh (`Ctrl+Shift+R`) so your browser does not keep an old cached build.

> Admin CMS and live DB features need a separate hosted API; Pages serves the static portfolio only.

## License

Private / personal use.
