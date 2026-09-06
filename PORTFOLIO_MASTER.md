# PORTFOLIO MASTER

> Strategy document built **only** from the five project profile markdown files in `COMPILE_MD_FILE`.  
> No source code was opened. Do not invent metrics, years of experience, or unverified outcomes.  
> All banking work is proprietary — public naming must stay sanitized.

**Profiles analyzed (5):**

| # | Profile file | Public name |
|---|--------------|-------------|
| 1 | `01.UTILITY_PROJECT_PROFILE.md` | Enterprise Utility Bill Payment Integration Platform |
| 2 | `02.BOND_PROJECT_PROFILE.md` | Enterprise Bond Investment & Transfer Platform |
| 3 | `03.FUND_XFER_PROJECT_PROFILE.md` | Enterprise Channel Fund Transfer Middleware |
| 4 | `04.BALANCE_ALERT_PROJECT_PROFILE.md` | Account Balance Monitoring & Alert Service |
| 5 | `05.LOG_PROJECT_PROFILE.md` | ASP.NET Core Conversation & API Logging Middleware |

---

## 1. Professional Positioning

**Primary identity (strongest fit):**  
**.NET Banking Integration Engineer — Payments, Core Banking Middleware & Dual-Control Workflows**

**Secondary identity (supported):**  
Full-stack contributor on selected enterprise UIs (React), with reusable observability libraries and operations automation.

**Why not “generic Full Stack Developer” as the lead label:**  
Four of five systems are backend/integration-first. Frontend is evidenced strongly in Bond only. The clearest differentiator is **controlled money movement between channels/UIs and core banking**, under dual control, auditability, and recovery.

**Strongest combination demonstrated:**

- Banking technology & payments  
- Enterprise .NET / ASP.NET Core API middleware  
- Core banking (CBS) HTTP integration  
- Maker/Checker workflow systems  
- Workflow orchestration (Netflix Conductor)  
- SQL Server + Dapper / stored procedures  
- Multi-provider API façades  
- Observability / request correlation middleware  
- React operations UI (Bond)  
- Lightweight Node.js ops automation (Balance Alert)

**Positioning statement:**  
I build enterprise .NET middleware that connects bank channels and branch operations to core banking and external payment providers—implementing dual-control workflows, reliable settlement paths, and audit-friendly transaction handling for regulated banking environments.

---

## 2. Professional Summary

Backend-focused software engineer specializing in banking payments and enterprise integration on the .NET platform. I design and implement ASP.NET Core middleware that sits between digital/branch channels and core banking systems, handling account verification, fund movement, multi-provider bill settlement, and dual-control (maker/checker) authorization. My work emphasizes recoverable workflows, explicit transaction status lifecycles, SQL-backed audit trails, and careful integration with heterogeneous external APIs. I also deliver React operations interfaces for complex branch workflows and reusable logging libraries that improve end-to-end API traceability. I am strongest where reliability, controlled money movement, and integration depth matter more than greenfield consumer product UI.

---

## 3. Core Technical Skills

### Backend
- C# / .NET 8  
- ASP.NET Core Web API  
- Dependency Injection, layered service design  
- SignalR (completion notifications)  
- Netflix Conductor (workflow orchestration)  
- Node.js / Express (operations automation)  
- Reusable ASP.NET Core middleware / class libraries  

### Frontend
- React (operations SPA)  
- Vite, React Router  
- Redux Toolkit  
- Formik / Yup  
- Tailwind CSS  
- Axios  

### Databases
- Microsoft SQL Server  
- Dapper  
- Stored procedures (complex domain/inventory/approval flows)  
- Inline SQL / multi-result queries  
- EF Core (schema/migrations presence; runtime often Dapper-first)  
- SQL Server linked-server / Oracle `OPENQUERY` (restriction checks)  

### Messaging & Distributed Systems
- Netflix Conductor (orchestrated long-running payment steps)  
- SignalR real-time status  
- Scheduled jobs (`node-cron`)  
- *Not evidenced as primary stack:* Kafka, RabbitMQ, Azure Service Bus  

### API & Integration
- REST HTTP integration with Core Banking (CBS)  
- Multi-biller / multi-product payment façades  
- SMS / email notification gateways  
- OAuth/token-style internal auth for enquiry APIs  
- Channel-facing partner APIs (verify / transfer / status)  
- `IHttpClientFactory` outbound HTTP patterns  

### Architecture & Design Patterns
- Layered monolithic REST APIs  
- Interface-based application services  
- Maker/Checker dual-control workflows  
- Config-driven product/channel/biller mapping  
- Middleware pipeline & DI extension libraries  
- Inventory/status state machines (bond register, payment statuses)  

### Security
- JWT Bearer authentication  
- BCrypt password/client-secret hashing  
- Role-gated UI access  
- Certificate token security (SHA-256 hashed short tokens, AES-GCM payloads)  
- Configurable service-time / operational windows  
- *Caveat for honesty:* some profiles note auth attributes partially commented / hardening opportunities  

### DevOps / Infrastructure
- Swagger / Swashbuckle  
- IIS/Kestrel-style ASP.NET hosting (publish profiles)  
- Environment-based configuration (`appsettings`, `dotenv`)  
- Serilog → SQL Server sink  
- *Limited evidence:* formal CI/CD ownership, container orchestration  

### Tools
- Postman/Swagger-oriented API exploration (Swagger present)  
- jsPDF / iText7 PDF generation  
- QR generation / verification utilities  
- Excel/report export libraries (xlsx, autotable)  

---

## 4. Strongest Projects

Ranked for portfolio feature prominence:

### 1. Enterprise Utility Bill Payment Integration Platform
- **One-line:** Orchestrates maker/checker utility bill payments across core banking and multiple billers via Conductor workflows.  
- **Why feature:** Highest integration + reliability depth (CBS + heterogeneous billers + Conductor retry/rerun + audit + SignalR). Strong “payments engineer” signal.  
- **Main technologies:** .NET 8, ASP.NET Core, SQL Server, Dapper, JWT, SignalR, Netflix Conductor.  
- **Strongest capability:** Multi-system payment orchestration with recoverable failure states.

### 2. Enterprise Bond Investment & Transfer Platform
- **One-line:** Full-stack bond purchase and ownership-transfer platform with CBS posting, inventory control, and QR-verifiable certificates.  
- **Why feature:** Broadest end-to-end product: dual control, inventory state machine, PDF/crypto verification, React ops UI. Best diversity for architecture storytelling.  
- **Main technologies:** .NET 8, Dapper, SQL Server SPs, React, Redux, Vite, iText7, AES-GCM/QR.  
- **Strongest capability:** Complex domain workflow + secure document issuance + full-stack delivery.

### 3. Enterprise Channel Fund Transfer Middleware
- **One-line:** Channel-facing middleware for verifying accounts and transferring funds into deposit, DPS, and loan products through CBS.  
- **Why feature:** Clean enterprise API façade pattern; product-rule branching; partner onboarding without exposing CBS.  
- **Main technologies:** .NET 8, ASP.NET Core, Dapper, SQL Server, JWT, Serilog, HttpClient, Oracle linked-server checks.  
- **Strongest capability:** Productized channel-to-CBS payment integration with auditability.

### 4. ASP.NET Core Conversation & API Logging Middleware
- **One-line:** Reusable middleware library for conversation IDs and durable inbound/outbound API logging to SQL Server.  
- **Why feature:** Shows platform thinking—reusable infrastructure used across banking APIs (also referenced by Bond/Utility profiles). Differentiates from “only feature APIs.”  
- **Main technologies:** .NET 8, ASP.NET Core Middleware, DI extensions, Dapper, SQL Server.  
- **Strongest capability:** Cross-cutting observability and library design.

### 5. Account Balance Monitoring & Alert Service *(supporting / ops project)*
- **One-line:** Scheduled Node.js monitor that alerts ops by email/SMS when settlement accounts fall below threshold.  
- **Why feature (as secondary):** Demonstrates operational reliability mindset and multi-API automation outside .NET. Good “Other Projects” or Experience supporting card—not a top hero case study alone.  
- **Main technologies:** Node.js, Express, axios, node-cron.  
- **Strongest capability:** Ops automation and notification reliability controls (retry + daily caps).

**Portfolio main grid recommendation:** Feature **1–4** prominently; include **5** under Other Projects / Operations.

---

## 5. Project Categories

### Banking Payments & Settlement
- Utility Bill Payment Integration Platform  
- Channel Fund Transfer Middleware  

### Capital Markets / Branch Investment Operations
- Bond Investment & Transfer Platform  

### Enterprise Integration Middleware
- Utility, Fund Transfer, Bond (CBS-facing)  

### Dual-Control / Workflow Systems
- Utility (Conductor + maker/checker)  
- Bond (maker/checker purchase & transfer)  

### Observability & Audit Infrastructure
- Conversation & API Logging Middleware  

### Operations Monitoring & Alerting
- Account Balance Monitoring & Alert Service  

### Full-Stack Enterprise Applications
- Bond Investment & Transfer Platform  

---

## 6. Engineering Capabilities

### Enterprise API Development
Evidence: Multiple ASP.NET Core 8 Web APIs with controllers, interface-based services, DI, Swagger, JWT, and channel/branch-facing REST contracts (Utility, Fund Transfer, Bond).

### System Integration (Core Banking & External Providers)
Evidence: Repeated CBS HTTP integrations (debit/cheque/SDMC/loan repay/enquiry), multi-biller utility APIs, SMS/email gateways, auth services, document/paperless linking (Bond), Oracle restriction views via linked server (Fund Transfer).

### Payment Processing
Evidence: Utility settlement (CBS then biller), Fund Transfer (deposit/DPS/loan credits), Bond purchase/transfer payment posting, status lifecycles (`PENDING`, `CBSERROR`, `FAILED`, `COMPLETED`, SUCCESS/FAIL), duplicate client txn guards.

### Workflow & Authorization (Maker/Checker)
Evidence: Utility approve → Conductor workflow; Bond create pending → checker authorize; dual-control fields and role-gated React screens.

### Distributed / Orchestrated Processing
Evidence: Netflix Conductor task orchestration with retry/rerun (Utility); SignalR completion events; scheduled automation (Balance Alert). Not a Kafka-centric portfolio—position as **workflow-orchestrated payments**, not event-bus architecture.

### Database Engineering
Evidence: SQL Server domain models, Dapper, stored procedures for inventory/approval (Bond), status-driven transaction tables, Serilog SQL sinks, conversation log tables, config mapping tables (channels/products/billers).

### Reliability & Operational Control
Evidence: CBS retry for known error codes, Conductor recovery, service-time windows, audit trails, conversation logging, low-balance retry confirmation and daily alert caps.

### Full-Stack Enterprise UI (selected)
Evidence: Bond React SPA—multi-step maker flows, role routing, validation, reporting exports.

### Reusable Platform Libraries
Evidence: Conversation logging middleware consumed as a class library pattern; Bond/Utility profiles reference conversation logging components.

---

## 7. Professional Story

These projects describe one coherent engineer: someone who builds the **controlled middle layer of banking**, where channels and branch staff cannot talk to core banking or billers unchecked.

The recurring themes are:

1. **Money must move safely** — verify, authorize, post, confirm, record.  
2. **Dual control and status truth** — maker/checker, pending/processing/failed/completed.  
3. **Heterogeneous integrations behind one façade** — one API, many CBS/biller/product shapes.  
4. **Recoverability and audit** — retries, reruns, SQL logs, conversation IDs.  
5. **Operational seriousness** — service windows, inventory locking, certificate invalidation, settlement balance alerts.

The Bond platform extends that same discipline into a full operations product (UI + certificates). The logging library is the shared nervous system for tracing those integrations. Balance Alert shows awareness of treasury/ops continuity around the payment estate.

**Story in one line:**  
I engineer bank-grade payment and investment middleware—integrating core banking, enforcing dual control, and making failures visible and recoverable.

---

## 8. Portfolio Website Structure

Professional engineer site (not beginner template):

### Home
Above the fold: name, positioning headline, one-sentence domain focus (banking payments / .NET middleware), CTAs to Featured Work and Contact, secondary links to LinkedIn/GitHub (sanitized public artifacts only).

### About
Emphasize banking domain, integration craftsmanship, dual-control/reliability mindset. Avoid “I love coding” filler. State contribution honesty: implementation-heavy backend/integration; architecture ownership not claimed unless later confirmed.

### Expertise
Cluster cards: Core Banking Integration · Payment Middleware · Maker/Checker Workflows · SQL Server Domain Engineering · Observability Middleware · React Ops UIs.

### Featured Projects
Utility · Bond · Fund Transfer · Logging Middleware (plus Balance Alert under Other).

### Engineering
Yes—include **sanitized** architecture diagrams for Utility, Bond, Fund Transfer, Logging. Focus on components and data flow, not real hostnames.

### Experience
Present as capability-led experience / selected engagements (or employer block once role/dates provided). Prefer “Selected work in banking payments middleware” over fake timeline.

### Contact
Professional email, LinkedIn, location (if public), optional “Open to backend/.NET banking roles.” No admin CMS credentials on public site.

---

## 9. Homepage Hero

### Headline
**Banking Payment Middleware Engineer**

### Subheadline
I build .NET integration platforms that connect bank channels and branch operations to core banking and payment providers—with dual-control workflows, auditable transaction lifecycles, and recoverable settlement paths.

### CTA buttons
1. **View featured work**  
2. **Engineering approach** (capabilities / architecture)  
3. **Contact**  

Avoid: “Welcome to my portfolio.”

---

## 10. Featured Project Cards

### Card 1
**Project title:** Enterprise Utility Bill Payment Integration Platform  
**Short description:** Middleware that fetches multi-provider utility bills, enforces maker/checker approval, and orchestrates CBS debit plus biller confirmation through Conductor workflows.  
**Category:** Banking Payments · Workflow  
**Technologies:** .NET 8 · ASP.NET Core · SQL Server · Dapper · Conductor · SignalR · JWT  
**3 key highlights:**  
- Config-driven multi-biller façade  
- Conductor approve → CBS → biller with retry/rerun  
- Explicit failure statuses + audit trail  
**CTA:** Read case study  

### Card 2
**Project title:** Enterprise Bond Investment & Transfer Platform  
**Short description:** Full-stack bond purchase and transfer operations with dual control, CBS payment posting, bond inventory management, and QR-verifiable PDF certificates.  
**Category:** Capital Markets Ops · Full-Stack  
**Technologies:** .NET 8 · SQL Server SPs · React · Redux · iText7 · AES-GCM  
**3 key highlights:**  
- Maker/Checker for purchase and transfer  
- Inventory reserve/approve lifecycle  
- Secure short-token certificate verification  
**CTA:** Read case study  

### Card 3
**Project title:** Enterprise Channel Fund Transfer Middleware  
**Short description:** Channel API for account verification and fund credit into deposit, DPS, and loan products via core banking, with mapping rules and SQL audit logging.  
**Category:** Payments · Channel Integration  
**Technologies:** .NET 8 · Dapper · SQL Server · JWT · Serilog · HttpClient  
**3 key highlights:**  
- Multi-product verify/transfer flows  
- Channel–product–debit configuration model  
- Client txn uniqueness + status enquiry  
**CTA:** Read case study  

### Card 4
**Project title:** ASP.NET Core Conversation & API Logging Middleware  
**Short description:** Reusable library that stamps conversation IDs and persists inbound/outbound API payloads to SQL Server for end-to-end traceability.  
**Category:** Observability · Platform Library  
**Technologies:** .NET 8 · ASP.NET Core Middleware · Dapper · SQL Server  
**3 key highlights:**  
- Correlation across request chains  
- Request/response + external call logging  
- Plug-in DI/pipeline registration  
**CTA:** View engineering notes  

### Card 5 (Other Projects)
**Project title:** Account Balance Monitoring & Alert Service  
**Short description:** Scheduled Node.js monitor that alerts operations by email/SMS when critical account balances stay below threshold.  
**Category:** Ops Monitoring  
**Technologies:** Node.js · Express · Cron · Axios  
**3 key highlights:**  
- Cron + manual trigger  
- Retry before alert  
- Daily per-account notification caps  
**CTA:** View summary  

---

## 11. Case Study Strategy

### Priority case studies (detailed pages)

#### A. Utility Bill Payment Integration Platform
Recommended sections: Problem · Context · Solution · Architecture · Payment Data Flow · Conductor Orchestration · Integrations (CBS/Billers) · Failure & Recovery · Dual Control · Challenges · Contribution · Outcome (qualitative only)

#### B. Bond Investment & Transfer Platform
Recommended sections: Problem · Context · Solution · Architecture · Purchase Flow · Transfer Flow · Inventory State Machine · Certificate Security · Integrations · Challenges · Contribution · Outcome (qualitative)

#### C. Channel Fund Transfer Middleware
Recommended sections: Problem · Context · Solution · Architecture · Verify vs Transfer · Product Rules (Deposit/DPS/Loan) · Config Model · Audit/Logging · Challenges · Contribution · Outcome (qualitative)

#### D. Conversation Logging Middleware *(shorter case study / engineering deep-dive)*
Recommended sections: Problem · Solution · Middleware Pipeline · Data Model · Inbound vs Outbound Logging · Design Trade-offs · Contribution

**Balance Alert:** summary page only (not a long case study), unless expanded with production/ops context later.

Do **not** invent KPIs, uptime, or volume numbers.

---

## 12. Architecture Visualization

### Diagram 1 — Utility Payment Orchestration
- **Purpose:** Show dual-control payment across CBS and billers.  
- **Main components:** Channel/UI · Utility Middleware API · Conductor · Core Banking · Biller APIs · SQL Server · SignalR hub  
- **Data flow:** Fetch bill → Maker submit → Checker approve → Conductor tasks (CBS pay → biller confirm) → status/audit → optional SignalR complete  

### Diagram 2 — Bond Purchase & Transfer Lifecycle
- **Purpose:** Show inventory + payment + certificate issuance.  
- **Main components:** React Ops UI · Bond API · SQL Server / SPs · CBS · SMS · Certificate verify endpoint  
- **Data flow:** Maker reserve → Checker → CBS payment → Approve SP → PDF/token → (transfer path: lock → reallocate → invalidate old cert → new cert)  

### Diagram 3 — Channel Fund Transfer Façade
- **Purpose:** Show partner channel isolated from CBS.  
- **Main components:** Channel client · Fund Transfer API · SQL config/transactions · CBS enquiry/transfer APIs · Restriction views  
- **Data flow:** Verify → rules + enquiry → Transfer → CBS SDMC/loan repay → persist txn/status  

### Diagram 4 — Conversation Logging Pipeline
- **Purpose:** Show reusable observability plug-in.  
- **Main components:** Host API · ConversationId middleware · ApiLogging middleware · ExternalApiLogger · SQL log tables  
- **Data flow:** Inbound capture → app → response capture; outbound calls logged under same conversation ID  

**Sanitize:** no IPs, prod URLs, bank legal names, account samples, partner brand route names, credentials.

---

## 13. CV Content

### Professional Summary
.NET engineer focused on banking payments and core-banking integration middleware. Builds ASP.NET Core APIs that verify accounts, execute controlled fund movement, and coordinate dual-control workflows with durable audit trails. Experienced with SQL Server/Dapper domain persistence, multi-provider HTTP integrations, workflow orchestration, and selected React operations UIs for branch workflows.

### Core Skills
.NET 8 · ASP.NET Core · C# · REST APIs · SQL Server · Dapper · Stored Procedures · JWT · CBS/HTTP Integration · Maker/Checker Workflows · Netflix Conductor · SignalR · Serilog · React · Redux · Node.js (ops automation) · API Observability Middleware

### Top 10 CV Bullet Points
1. Developed ASP.NET Core 8 utility-payment middleware integrating core banking and multiple biller APIs under a maker/checker model.  
2. Implemented Netflix Conductor workflows for approve → CBS debit → biller confirmation with failure tracking and task retry/rerun.  
3. Built .NET 8 bond middleware APIs for investment create/approve/reject using Dapper and SQL Server stored procedures.  
4. Integrated CBS payment posting for account debit and cheque settlement during checker authorization of bond operations.  
5. Implemented bond transfer workflows including holdings search, partial transfer, inventory reallocation, and certificate invalidation.  
6. Developed React operations SPA for maker/checker bond flows with role-based access, validation, and reporting exports.  
7. Generated verifiable bond PDF certificates using short-token QR links protected with AES-GCM and hashed token storage.  
8. Developed channel fund-transfer middleware enabling digital channels to verify and credit deposit, DPS, and loan accounts via CBS APIs.  
9. Implemented product-specific validation, client transaction uniqueness checks, and SQL-backed request/response audit logging.  
10. Built a reusable ASP.NET Core conversation-logging middleware for correlation IDs and durable inbound/outbound API logging to SQL Server.

---

## 14. LinkedIn Content

### LinkedIn Headline
.NET Banking Integration Engineer | Payments Middleware · Core Banking APIs · Maker/Checker Workflows

### About Section
I specialize in enterprise .NET middleware for banking payments and investment operations. My work connects branch and digital channels to core banking and external providers through controlled APIs—emphasizing dual-control authorization, explicit transaction statuses, recoverable workflows, and auditability.

Recent work includes utility bill payment orchestration with workflow engines, bond purchase/transfer platforms with inventory and certificate issuance, channel fund-transfer APIs for deposit/DPS/loan credits, and reusable conversation-logging middleware for API traceability. I also build React interfaces for complex maker/checker operations when the workflow demands it.

I care about integration correctness, failure visibility, and operational safety in regulated environments. Open to backend/.NET roles centered on banking technology, payments, and enterprise integration.

### Featured Project Descriptions
- **Utility Bill Payment Integration Platform** — ASP.NET Core middleware connecting channels to CBS and multi-biller APIs with maker/checker approval and Conductor-orchestrated settlement.  
- **Bond Investment & Transfer Platform** — .NET + React platform for dual-controlled bond purchase/transfer, CBS posting, inventory control, and QR-verifiable certificates.  
- **Channel Fund Transfer Middleware** — API façade for partner channels to verify accounts and credit deposit/DPS/loan products through core banking.  
- **Conversation Logging Middleware** — Reusable ASP.NET Core library for conversation IDs and SQL-persisted API request/response/external-call logs.

---

## 15. GitHub Strategy

### Public repositories
- **Sanitized demonstration repos only** (if approved): Conversation Logging middleware *concept* demo; generic “payment middleware sample” with fake CBS stubs.  
- Portfolio website source (this site) — OK if no secrets.

### Keep private
- Utility payment middleware  
- Bond platform (API + UI)  
- Fund transfer middleware  
- Balance alert service (contains operational account/alert patterns)  
- Real conversation logging library if it embeds employer specifics  

### Sanitized demonstration alternatives
- Stub CBS/biller adapters + in-memory workflow  
- Fake maker/checker sample  
- Logging middleware with local SQL + no real payloads  

### README structure (for any public demo)
Problem · Scope boundaries · Architecture diagram · Features · Tech stack · Local run · Security notes · “Not production bank code”

### Architecture diagrams / screenshots
- Use sanitized diagrams from §12  
- UI screenshots only if scrubbed of customer data, account numbers, bank branding if restricted  

**Never publish proprietary banking source, configs, or credentials.**

---

## 16. Portfolio Design Direction

- **Tone:** Professional, restrained, enterprise-trustworthy (LinkedIn/GitHub engineer, not startup toy).  
- **Theme:** Prefer polished dark + clean light toggle; cool neutrals + one trust blue accent.  
- **Typography:** Strong display + readable body (already aligned with Plus Jakarta Sans / Source Sans 3 / IBM Plex Mono).  
- **Layout:** Generous whitespace, clear section hierarchy, few cards—only for projects/capabilities.  
- **Navigation:** About · Expertise · Work · Engineering · Contact.  
- **Project cards:** Title, category, 3 highlights, stack chips, case-study link.  
- **Architecture:** Static diagrams (Mermaid export/SVG), not animated spaghetti.  
- **Motion:** Subtle scroll reveal only; no cursor gimmicks.  
- **Message:** “Experienced enterprise banking software engineer.”

---

## 17. Technology Timeline

Supported progression (logical, not dated—dates unavailable):

1. **Backend API foundations** — ASP.NET Core services, SQL Server/Dapper  
2. **Enterprise payment integration** — CBS façades, channel fund transfer, multi-biller utility payments  
3. **Workflow & dual control** — Maker/Checker, Conductor orchestration, inventory state machines  
4. **Full-stack ops delivery** — React bond operations UI + certificates  
5. **Platform & observability** — reusable conversation logging middleware  
6. **Operations automation** — Node.js balance monitoring/alerting  

Present as capability progression, not fabricated employment chronology.

---

## 18. Missing Information

Checklist to strengthen the portfolio later (do not guess now):

- [ ] Official job title(s) and employer presentation name (public-safe)  
- [ ] Employment dates / project durations  
- [ ] Team size and your exact ownership boundaries  
- [ ] Confirmation of architecture vs implementation ownership  
- [ ] Environments (dev/test/prod) and deployment model (IIS, containers, etc.)  
- [ ] Production scale (qualitative OK: “multi-branch,” “partner channels”) — still no fake metrics  
- [ ] Measurable outcomes *only if real* (error reduction, ops time saved)  
- [ ] Which projects are production vs pilot  
- [ ] Public LinkedIn URL and professional email  
- [ ] Permission matrix: what diagrams/screenshots legal/compliance allow  
- [ ] Preferred target roles (payments, middleware, backend .NET, etc.)  

---

## 19. Confidentiality Review

### Safe to Publish
- Public project names in this document  
- Generalized banking payment/middleware narratives  
- Technology stacks listed without secrets  
- Maker/Checker, Conductor, CBS-integration concepts  
- Sanitized architecture diagrams  
- CV/LinkedIn wording from §§13–14  
- Portfolio website itself (static content)

### Needs Sanitization
- Internal project/repo codenames (JBL_*, FundXferJBL, route prefixes, partner brand hints)  
- Exact SP names, table catalogs, workflow names, environment names  
- Employer/bank legal name (unless approved)  
- Screenshots with UI chrome showing internal systems  
- Any mention of specific MFS/wallet partners inferred from routes  

### Do Not Publish
- Source code of bank systems  
- Connection strings, JWT signing keys, API keys, passwords, tokens  
- Account numbers, NID/PII, customer transaction payloads  
- Internal IPs, production URLs, real endpoint paths  
- Encryption keys for certificates  
- Raw logs containing headers/bodies with secrets  
- Unredacted `appsettings` / `.env`  

---

## 20. Final Portfolio Blueprint

```text
Home
├── Hero
│     Positioning headline, banking-middleware subheadline, CTAs
├── Professional Summary
│     3–5 sentence summary from §2
├── Core Expertise
│     Integration · Payments · Dual-control workflows · SQL · Observability · React ops
├── Featured Projects
│     Utility · Bond · Fund Transfer · Logging (+ Balance Alert in Other)
├── Engineering Capabilities
│     Short evidence-backed capability blocks from §6
├── Experience
│     Employer/role blocks once dates/titles provided; until then “Selected banking systems work”
├── Architecture / Technical Approach
│     3–4 sanitized diagrams + narrative on reliability & dual control
├── Other Projects
│     Balance Alert + any future smaller tools
└── Contact
      Email · LinkedIn · Location · availability note
```

**Per-section content intent**

| Section | Content |
|---------|---------|
| Hero | Identity + domain + CTAs |
| Summary | Credibility paragraph for recruiters |
| Expertise | Scannable proof themes |
| Featured Projects | Cards from §10 linking to case studies |
| Capabilities | Evidence, not buzzwords |
| Experience | Formal roles when available |
| Architecture | Diagrams that show systems thinking |
| Other Projects | Breadth without diluting top four |
| Contact | Low-friction professional outreach |

---

## Source note

- **Project profiles found in portfolio repo:** `0` files named exactly `PROJECT_PROFILE.md`  
- **Profiles used:** `5` attached/compile files (`01`–`05` `*_PROJECT_PROFILE.md`)  
- **Code/files not read:** `.cs`, `.js`, `.ts`, `.tsx`, `.sql`, `.json`, `node_modules`, `bin`, `obj`, and other source trees (per instruction)
