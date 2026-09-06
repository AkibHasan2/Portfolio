# Career Launch Playbook

Ordered path: **Website → LinkedIn → GitHub**.  
Content is aligned with `PORTFOLIO_MASTER.md`. Do not invent metrics or publish bank source code.

**Live site (after deploy):** https://AkibHasan2.github.io/Portfolio/

---

## Phase A — Website (done in this build)

1. Confirm local preview (`cd frontend && npm run dev`) shows new positioning and projects.
2. Push `main` so GitHub Actions publishes `gh-pages`.
3. Hard-refresh https://AkibHasan2.github.io/Portfolio/ (`Ctrl+Shift+R`).
4. Spot-check case studies:
   - `/work/utility-payments`
   - `/work/bond-platform`
   - `/work/fund-transfer`
   - `/work/conversation-logging`
5. When you have a real email and LinkedIn URL, update `frontend/src/data/portfolio.js` (`email`, `linkedinUrl`) and redeploy.

---

## Phase B — LinkedIn (same week)

### 1. Headline (copy)

```text
.NET Banking Integration Engineer | Payments Middleware · Core Banking APIs · Maker/Checker Workflows
```

### 2. About (paste, then edit lightly in your voice)

```text
I specialize in enterprise .NET middleware for banking payments and investment operations. My work connects branch and digital channels to core banking and external providers through controlled APIs—emphasizing dual-control authorization, explicit transaction statuses, recoverable workflows, and auditability.

Recent work includes utility bill payment orchestration with workflow engines, bond purchase/transfer platforms with inventory and certificate issuance, channel fund-transfer APIs for deposit/DPS/loan credits, and reusable conversation-logging middleware for API traceability. I also build React interfaces for complex maker/checker operations when the workflow demands it.

I care about integration correctness, failure visibility, and operational safety in regulated environments. Open to backend/.NET roles centered on banking technology, payments, and enterprise integration.

Portfolio: https://AkibHasan2.github.io/Portfolio/
```

### 3. Featured

- Add link: **Portfolio** → https://AkibHasan2.github.io/Portfolio/
- Add 3–4 featured items pointing at case studies (or short posts summarizing Utility, Bond, Fund Transfer, Logging).

### 4. Experience bullets (use as-is; no fake numbers)

- Developed ASP.NET Core 8 utility-payment middleware integrating core banking and multiple biller APIs under a maker/checker model.
- Implemented Netflix Conductor workflows for approve → CBS debit → biller confirmation with failure tracking and task retry/rerun.
- Built .NET 8 bond middleware APIs for investment create/approve/reject using Dapper and SQL Server stored procedures.
- Integrated CBS payment posting for account debit and cheque settlement during checker authorization of bond operations.
- Implemented bond transfer workflows including holdings search, partial transfer, inventory reallocation, and certificate invalidation.
- Developed React operations SPA for maker/checker bond flows with role-based access, validation, and reporting exports.
- Developed channel fund-transfer middleware enabling digital channels to verify and credit deposit, DPS, and loan accounts via CBS APIs.
- Built a reusable ASP.NET Core conversation-logging middleware for correlation IDs and durable inbound/outbound API logging to SQL Server.

### 5. Skills to list

.NET 8 · ASP.NET Core · C# · SQL Server · Dapper · Stored Procedures · JWT · Core Banking Integration · Netflix Conductor · SignalR · React · Redux · Serilog · REST APIs · Maker/Checker Workflows

### 6. Profile hygiene

- Professional photo; simple banner.
- Location: Dhaka, Bangladesh (if you want it public).
- Website field = GitHub Pages URL.
- Turn on “Open to work” for Backend / Software Engineer if seeking roles.

---

## Phase C — GitHub (after LinkedIn)

### Keep private

- Utility payment middleware  
- Bond platform (API + UI)  
- Fund transfer middleware  
- Balance alert service  
- Real conversation-logging library if employer-specific  

### Keep / make public

- This **Portfolio** repo only (already public).

### Profile README (suggested)

```markdown
### Hi, I'm Akib Hasan
.NET banking integration engineer — payments middleware, core banking APIs, dual-control workflows.

**Portfolio:** https://AkibHasan2.github.io/Portfolio/

Focus: ASP.NET Core · SQL Server · CBS integration · Maker/Checker · Conductor
```

### Pins

1. `AkibHasan2/Portfolio`  
2. (Later) sanitized demo repos only — never real bank code.

### Optional later demos (sanitized)

- Fake CBS stubs + maker/checker sample  
- Conversation logging sample with local SQL  

Do **not** publish proprietary banking source, configs, credentials, account data, or production URLs.

---

## Phase D — Ongoing checklist

From `PORTFOLIO_MASTER.md` §18 — fill when ready, then update site + LinkedIn together:

- [ ] Official job title(s) for public use  
- [ ] Employment dates / project durations  
- [ ] Team size / ownership boundaries  
- [ ] Real professional email  
- [ ] Real LinkedIn URL  
- [ ] Compliance OK for any screenshots/diagrams  
- [ ] Preferred target roles  

---

## Suggested calendar

| Day | Action |
|-----|--------|
| Day 1 | Deploy site; fix email/LinkedIn in `portfolio.js` when known |
| Day 2 | Update LinkedIn headline + About + website link |
| Day 3 | Add Featured links + experience bullets |
| Day 4 | GitHub profile README + pin Portfolio |
| Day 5 | Share portfolio link with network / recruiters |
