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

Pushing to `main` publishes the site to the `gh-pages` branch via GitHub Actions.

**One-time setup** (required):

1. Open https://github.com/AkibHasan2/Portfolio/settings/pages
2. Under **Build and deployment → Source**, choose **Deploy from a branch**
3. Branch: **gh-pages** / folder: **/ (root)** → Save

Site URL: https://AkibHasan2.github.io/Portfolio/

> Admin CMS and live DB features need a separate hosted API; Pages serves the static portfolio only.

## License

Private / personal use.
