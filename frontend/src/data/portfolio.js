/**
 * Public portfolio content derived from PORTFOLIO_MASTER.md.
 * Sanitized names only — no internal codes, credentials, or bank secrets.
 */

export const staticProfile = {
  fullName: "Akib Hasan",
  FullName: "Akib Hasan",
  /** Lead with transferable craft; banking is the proof domain (PORTFOLIO_MASTER §1). */
  roleLabel: ".NET Backend & Integration Engineer",
  headline: ".NET Backend & Integration Engineer",
  Headline: ".NET Backend & Integration Engineer",
  roleDetail: "Payments middleware · Core banking APIs · Dual-control workflows",
  subheadline:
    "I design ASP.NET Core middleware that connects channels and operations systems to external APIs and core platforms—with dual-control authorization, auditable transaction lifecycles, and recoverable settlement paths. My deepest production work is in banking payments; the same craft applies to enterprise integration and fintech backends.",
  summary:
    "Backend-focused software engineer on the .NET platform, specializing in enterprise API middleware, system integration, and controlled money-movement workflows. In banking environments I connect digital/branch channels to core banking and payment providers—handling account verification, fund movement, multi-provider bill settlement, and maker/checker authorization. I emphasize recoverable workflows, explicit status lifecycles, SQL-backed audit trails, and careful integration with heterogeneous external APIs. I also deliver React operations interfaces when branch workflows demand it, and reusable logging libraries for end-to-end API traceability.",
  Summary:
    "Backend-focused software engineer on the .NET platform, specializing in enterprise API middleware, system integration, and controlled money-movement workflows. In banking environments I connect digital/branch channels to core banking and payment providers—handling account verification, fund movement, multi-provider bill settlement, and maker/checker authorization. I emphasize recoverable workflows, explicit status lifecycles, SQL-backed audit trails, and careful integration with heterogeneous external APIs. I also deliver React operations interfaces when branch workflows demand it, and reusable logging libraries for end-to-end API traceability.",
  location: "Dhaka, Bangladesh",
  Location: "Dhaka, Bangladesh",
  email: "akib.hasan.learn@gmail.com.bd",
  Email: "akib.hasan.learn@gmail.com.bd",
  githubUrl: "https://github.com/AkibHasan2",
  GithubUrl: "https://github.com/AkibHasan2",
  linkedinUrl: "https://www.linkedin.com/in/akib-hasan-iz",
  LinkedinUrl: "https://www.linkedin.com/in/akib-hasan-iz",
  positioning:
    "Strongest where reliability, controlled integrations, and auditability matter—proven in regulated banking payments, transferable to enterprise .NET backends, fintech, and partner API platforms.",
  openTo: [
    "Backend / .NET Engineer",
    "API & Integration Engineer",
    "Payments / Fintech Engineer",
    "Banking technology roles",
  ],
};

/** PORTFOLIO_MASTER §17 — capability progression (not fabricated job chronology). */
export const capabilityTimeline = [
  {
    title: "Backend API foundations",
    detail: "ASP.NET Core services, SQL Server / Dapper, layered contracts.",
  },
  {
    title: "Enterprise payment integration",
    detail: "CBS façades, channel fund transfer, multi-biller utility settlement.",
  },
  {
    title: "Workflow & dual control",
    detail: "Maker/Checker, Conductor orchestration, inventory state machines.",
  },
  {
    title: "Full-stack ops delivery",
    detail: "React bond operations UI, certificates, role-gated branch flows.",
  },
  {
    title: "Platform & observability",
    detail: "Reusable conversation-logging middleware across host APIs.",
  },
  {
    title: "Operations automation",
    detail: "Node.js balance monitoring and alert reliability controls.",
  },
];

/** PORTFOLIO_MASTER §13 — public-safe CV bullets (no invented metrics). */
export const resumeBullets = [
  "Developed ASP.NET Core 8 utility-payment middleware integrating core banking and multiple biller APIs under a maker/checker model.",
  "Implemented Netflix Conductor workflows for approve → CBS debit → biller confirmation with failure tracking and task retry/rerun.",
  "Built .NET 8 bond middleware APIs for investment create/approve/reject using Dapper and SQL Server stored procedures.",
  "Integrated CBS payment posting for account debit and cheque settlement during checker authorization of bond operations.",
  "Implemented bond transfer workflows including holdings search, partial transfer, inventory reallocation, and certificate invalidation.",
  "Developed React operations SPA for maker/checker bond flows with role-based access, validation, and reporting exports.",
  "Generated verifiable bond PDF certificates using short-token QR links protected with AES-GCM and hashed token storage.",
  "Developed channel fund-transfer middleware enabling digital channels to verify and credit deposit, DPS, and loan accounts via CBS APIs.",
  "Implemented product-specific validation, client transaction uniqueness checks, and SQL-backed request/response audit logging.",
  "Built a reusable ASP.NET Core conversation-logging middleware for correlation IDs and durable inbound/outbound API logging to SQL Server.",
];

export const staticSkills = [
  { Category: "Backend", Name: "C# / .NET 8", Proficiency: 5 },
  { Category: "Backend", Name: "ASP.NET Core Web API", Proficiency: 5 },
  { Category: "Backend", Name: "Netflix Conductor", Proficiency: 4 },
  { Category: "Backend", Name: "SignalR", Proficiency: 4 },
  { Category: "Database", Name: "SQL Server / T-SQL", Proficiency: 5 },
  { Category: "Database", Name: "Dapper", Proficiency: 5 },
  { Category: "Database", Name: "Stored Procedures", Proficiency: 5 },
  { Category: "Integration", Name: "Core Banking (CBS) APIs", Proficiency: 5 },
  { Category: "Integration", Name: "Multi-provider payment façades", Proficiency: 5 },
  { Category: "Integration", Name: "JWT / API auth patterns", Proficiency: 4 },
  { Category: "Frontend", Name: "React", Proficiency: 4 },
  { Category: "Frontend", Name: "Redux Toolkit", Proficiency: 4 },
  { Category: "Frontend", Name: "Tailwind CSS", Proficiency: 4 },
  { Category: "Tooling", Name: "Swagger / OpenAPI", Proficiency: 4 },
  { Category: "Tooling", Name: "Serilog", Proficiency: 4 },
  { Category: "Ops", Name: "Node.js / Express", Proficiency: 3 },
];

export const expertiseAreas = [
  {
    title: "Enterprise API Integration",
    description: "HTTP façades over enquiry, debit, cheque, and product-specific core/platform APIs.",
  },
  {
    title: "Payment Middleware",
    description: "Channel and branch APIs that verify, authorize, post, confirm, and record money movement.",
  },
  {
    title: "Maker / Checker Workflows",
    description: "Dual-control submit/approve paths with explicit pending, processing, failed, and completed states.",
  },
  {
    title: "SQL Server Domain Engineering",
    description: "Dapper-first access, stored procedures for inventory/approval, and status-driven transaction tables.",
  },
  {
    title: "Observability Middleware",
    description: "Reusable conversation IDs and durable request/response/external-call logging to SQL Server.",
  },
  {
    title: "React Operations UIs",
    description: "Role-gated maker/checker screens for complex branch investment and transfer workflows.",
  },
];

export const capabilities = [
  {
    title: "Enterprise API Development",
    evidence:
      "Multiple ASP.NET Core 8 Web APIs with interface-based services, DI, Swagger, JWT, and channel/branch-facing REST contracts.",
  },
  {
    title: "System Integration",
    evidence:
      "Repeated CBS HTTP integrations, multi-biller utility APIs, SMS/email gateways, auth services, and restriction checks via linked data sources.",
  },
  {
    title: "Payment Processing",
    evidence:
      "Utility settlement (CBS then biller), channel fund credits (deposit/DPS/loan), bond payment posting, and recoverable status lifecycles.",
  },
  {
    title: "Workflow & Authorization",
    evidence:
      "Maker/checker dual control; Conductor orchestration for long-running approve → pay → confirm steps.",
  },
  {
    title: "Database Engineering",
    evidence:
      "SQL Server domain models, Dapper, approval/inventory stored procedures, audit tables, and config mapping for channels/products/billers.",
  },
  {
    title: "Reliability & Audit",
    evidence:
      "CBS retry for known error codes, workflow retry/rerun, service-time windows, conversation logging, and operational alert caps.",
  },
];

/** Featured + other projects for homepage cards */
export const staticProjects = [
  {
    Id: "utility-payments",
    Title: "Enterprise Utility Bill Payment Integration Platform",
    Summary:
      "Middleware that fetches multi-provider utility bills, enforces maker/checker approval, and orchestrates CBS debit plus biller confirmation through Conductor workflows.",
    TechStack: ".NET 8, ASP.NET Core, SQL Server, Dapper, Conductor, SignalR, JWT",
    Category: "Banking Payments · Workflow",
    Featured: true,
    Badge: "Featured",
    Slug: "utility-payments",
    Highlights: [
      "Config-driven multi-biller façade",
      "Conductor approve → CBS → biller with retry/rerun",
      "Explicit failure statuses + audit trail",
    ],
    RepoUrl: "",
    LiveUrl: "",
  },
  {
    Id: "bond-platform",
    Title: "Enterprise Bond Investment & Transfer Platform",
    Summary:
      "Full-stack bond purchase and transfer operations with dual control, CBS payment posting, bond inventory management, and QR-verifiable PDF certificates.",
    TechStack: ".NET 8, SQL Server SPs, React, Redux, iText7, AES-GCM",
    Category: "Capital Markets Ops · Full-Stack",
    Featured: true,
    Badge: "Featured",
    Slug: "bond-platform",
    Highlights: [
      "Maker/Checker for purchase and transfer",
      "Inventory reserve/approve lifecycle",
      "Secure short-token certificate verification",
    ],
    RepoUrl: "",
    LiveUrl: "",
  },
  {
    Id: "fund-transfer",
    Title: "Enterprise Channel Fund Transfer Middleware",
    Summary:
      "Channel API for account verification and fund credit into deposit, DPS, and loan products via core banking, with mapping rules and SQL audit logging.",
    TechStack: ".NET 8, Dapper, SQL Server, JWT, Serilog, HttpClient",
    Category: "Payments · Channel Integration",
    Featured: true,
    Badge: "Featured",
    Slug: "fund-transfer",
    Highlights: [
      "Multi-product verify/transfer flows",
      "Channel–product–debit configuration model",
      "Client txn uniqueness + status enquiry",
    ],
    RepoUrl: "",
    LiveUrl: "",
  },
  {
    Id: "conversation-logging",
    Title: "ASP.NET Core Conversation & API Logging Middleware",
    Summary:
      "Reusable library that stamps conversation IDs and persists inbound/outbound API payloads to SQL Server for end-to-end traceability.",
    TechStack: ".NET 8, ASP.NET Core Middleware, Dapper, SQL Server",
    Category: "Observability · Platform Library",
    Featured: true,
    Badge: "Library",
    Slug: "conversation-logging",
    Highlights: [
      "Correlation across request chains",
      "Request/response + external call logging",
      "Plug-in DI/pipeline registration",
    ],
    RepoUrl: "",
    LiveUrl: "",
  },
];

export const otherProjects = [
  {
    Id: "balance-alert",
    Title: "Account Balance Monitoring & Alert Service",
    Summary:
      "Scheduled Node.js monitor that alerts operations by email/SMS when critical account balances stay below threshold.",
    TechStack: "Node.js, Express, Cron, Axios",
    Category: "Ops Monitoring",
    Featured: false,
    Badge: "Ops",
    Highlights: ["Cron + manual trigger", "Retry before alert", "Daily per-account notification caps"],
  },
];

export const staticExperience = [
  {
    Company: "Jamuna Bank PLC",
    Role: ".NET / C# Developer",
    StartDate: "2019-11-26",
    EndDate: null,
    Summary:
      "Building payment and investment middleware on .NET—core banking integration, maker/checker workflows, multi-provider settlement APIs, SQL-backed audit trails, and selected React operations UIs for branch workflows.",
  },
];

export const architectureDiagrams = [
  {
    id: "utility",
    title: "Utility Payment Orchestration",
    purpose: "Dual-control payment across core banking and billers.",
    mermaid: `flowchart LR
  UI[Channel_UI] --> API[Utility_Middleware]
  API --> WF[Conductor]
  WF --> API
  API --> CBS[Core_Banking]
  API --> Biller[Biller_APIs]
  API --> DB[(SQL_Server)]
  API --> Hub[SignalR]`,
  },
  {
    id: "bond",
    title: "Bond Purchase & Transfer Lifecycle",
    purpose: "Inventory, payment posting, and certificate issuance.",
    mermaid: `flowchart LR
  SPA[React_Ops_UI] --> API[Bond_API]
  API --> DB[(SQL_Server)]
  API --> CBS[Core_Banking]
  API --> SMS[SMS_Gateway]
  API --> Cert[Certificate_Verify]`,
  },
  {
    id: "fund",
    title: "Channel Fund Transfer Façade",
    purpose: "Partner channels isolated from core banking.",
    mermaid: `flowchart LR
  Ch[Channel_Client] --> API[Fund_Transfer_API]
  API --> DB[(SQL_Config_Txns)]
  API --> CBS[CBS_Enquiry_Transfer]
  API --> Restrict[Restriction_Checks]`,
  },
  {
    id: "logging",
    title: "Conversation Logging Pipeline",
    purpose: "Reusable observability plug-in for host APIs.",
    mermaid: `flowchart LR
  Client --> Host[Host_API]
  Host --> M1[ConversationId_Middleware]
  M1 --> M2[ApiLogging_Middleware]
  M2 --> App[Controllers_Services]
  App --> Ext[ExternalApiLogger]
  M2 --> Logs[(SQL_Log_Tables)]
  Ext --> Logs`,
  },
];

export const caseStudies = {
  "utility-payments": {
    slug: "utility-payments",
    title: "Enterprise Utility Bill Payment Integration Platform",
    category: "Banking Payments · Workflow",
    tech: [".NET 8", "ASP.NET Core", "SQL Server", "Dapper", "Netflix Conductor", "SignalR", "JWT"],
    decisions: [
      {
        title: "Orchestrate long-running settlement outside the request",
        detail:
          "Approve → CBS debit → biller confirm can fail mid-path. Conductor owns retries/reruns so the API stays a controlled façade with durable status, not a fragile synchronous chain.",
      },
      {
        title: "Explicit failure statuses over silent retries",
        detail:
          "CBSERROR / FAILED states plus audit trails make double-debit risk visible to operations instead of hiding it in undifferentiated exceptions.",
      },
      {
        title: "Config-driven multi-biller façade",
        detail:
          "Heterogeneous provider auth and payloads stay behind one middleware contract so branch/channel UIs do not learn each biller’s quirks.",
      },
    ],
    problem:
      "Banks collect utility bills for many providers. Each provider has different APIs and auth; payments must debit the customer via core banking, then confirm with the biller—under dual control, branch rules, and service-time windows. Failures must be recoverable without double-charging customers.",
    context:
      "A single controlled middleware path is needed between branch/channel UIs and external systems so operations can fetch, submit, approve, track, and recover payments consistently.",
    solution:
      "An ASP.NET Core REST middleware standardizes bill fetch, maker submit, and checker approve. On approval, Netflix Conductor orchestrates CBS debit (cash / account / cheque) then biller confirmation. Statuses and errors are persisted; completed payments can notify clients via SignalR; failed steps support controlled retry/rerun.",
    architecture:
      "Layered REST API monolith: Controllers → services → SQL Server (Dapper) and external HTTP clients. Long-running payment steps are delegated to Conductor, which callbacks into workflow endpoints on the API. Cross-cutting payment-window middleware gates submit/approve outside configured hours.",
    flow: [
      "Fetch biller bill details",
      "Maker submits pending transaction",
      "Checker approves → Conductor workflow starts",
      "Task: CBS payment (cash / debit / cheque)",
      "Task: update CBS info",
      "Task: biller make-payment",
      "COMPLETED (+ optional SignalR) or CBSERROR / FAILED with retry paths",
    ],
    challenges: [
      "Heterogeneous biller APIs and auth models behind one façade",
      "Multi-mode CBS payments and distinguishing retryable vs terminal errors",
      "Keeping DB status aligned with external workflow outcomes",
      "Operational pressure to avoid double debit / double settle",
    ],
    contribution:
      "Backend/API and integration work across payment flows, CBS/biller calls, Conductor start/retry/rerun, audit logging, and service-time controls (implementation-level contribution inferred from delivered systems).",
    outcome:
      "A production-oriented middleware capable of end-to-end utility settlement with explicit failure states and recovery endpoints. No quantified KPIs claimed.",
  },
  "bond-platform": {
    slug: "bond-platform",
    title: "Enterprise Bond Investment & Transfer Platform",
    category: "Capital Markets Ops · Full-Stack",
    tech: [".NET 8", "Dapper", "SQL Server", "React", "Redux", "Vite", "iText7", "AES-GCM"],
    decisions: [
      {
        title: "Inventory reserve before checker approval",
        detail:
          "Pending purchases lock bond units so two makers cannot oversell the same inventory; reject paths release reservations cleanly.",
      },
      {
        title: "Dual-control for both purchase and transfer",
        detail:
          "Ownership change and payment posting are high-risk; maker/checker keeps branch capture separated from irreversible CBS and certificate issuance.",
      },
      {
        title: "Short-lived verification tokens on certificates",
        detail:
          "QR-backed public verify without embedding long-lived secrets; old certificates invalidate when holdings transfer or split.",
      },
    ],
    problem:
      "Banks need a controlled channel for customers to buy bonds and later transfer ownership. Manual processing risks payment errors, weak dual control, inconsistent bond inventory, and hard-to-verify paper certificates.",
    context:
      "Branch staff need guided capture, account/cheque checks against core banking, approval workflows, inventory integrity, auditable reporting, and trustworthy certificates.",
    solution:
      "Makers capture investor, nominee, payment, and bond details; checkers approve or reject. On approval, middleware posts to CBS, reserves/allocates bonds, generates PDF certificates with QR verification tokens, and can notify by SMS. A parallel transfer flow moves holdings (including partial transfer), invalidates old certificates, and issues new ones.",
    architecture:
      "Layered ASP.NET Core REST API + React SPA. SP-centric SQL Server domain model; HTTP integrations to CBS, SMS, enterprise auth, and document services. Certificate verification is a public read path backed by hashed tokens and encrypted payloads.",
    flow: [
      "Maker creates pending investment and reserves bonds",
      "Checker reviews → CBS debit/cheque payment",
      "On success: approve SP → PDF + token → optional SMS",
      "Transfer: search seller → calculate → create → checker → CBS → reallocate → invalidate old certs → issue new refs",
    ],
    challenges: [
      "Dual CBS payment modes with distinct error codes",
      "Shared bond inventory state machine across purchase and transfer",
      "Partial transfer remainder investments and certificate supersession",
      "Secure public certificate verification without long-lived secrets in the open",
    ],
    contribution:
      "Implementation across API services, SQL transfer/inventory paths, certificate/PDF utilities, and React maker/checker/transfer screens.",
    outcome:
      "End-to-end digitized bond purchase and transfer authorization with inventory integrity and verifiable certificates (qualitative; no published performance metrics).",
  },
  "fund-transfer": {
    slug: "fund-transfer",
    title: "Enterprise Channel Fund Transfer Middleware",
    category: "Payments · Channel Integration",
    tech: [".NET 8", "ASP.NET Core", "Dapper", "SQL Server", "JWT", "Serilog", "HttpClient"],
    decisions: [
      {
        title: "Channels never call CBS directly",
        detail:
          "A dedicated façade owns verify/transfer/status so partner onboarding stays configuration-driven and core banking stays isolated.",
      },
      {
        title: "ClientTxnID uniqueness as the idempotency key",
        detail:
          "Duplicate channel posts are rejected before a second CBS credit, with status enquiry for safe partner retries.",
      },
      {
        title: "Product-specific verify rules",
        detail:
          "Deposit, DPS, and loan credits share one API shape but branch into distinct CBS operations and restriction checks.",
      },
    ],
    problem:
      "External digital channels need a controlled way to credit bank accounts (deposits, DPS installments, loan repayments) without direct access to core banking.",
    context:
      "The bank must validate account eligibility, enforce product/channel rules, prevent duplicate client transactions, record outcomes, and return clear success/failure to the channel.",
    solution:
      "A dedicated REST API sits between the channel and CBS. It validates product/channel configuration and debit-account mapping, verifies the credit account via CBS enquiry (plus restriction checks where required), executes transfer through the correct CBS operation, persists results and logs, and exposes status enquiry by client transaction ID.",
    architecture:
      "Layered monolithic REST API with interface-based services, Dapper SQL access, and synchronous HTTP integration to CBS. Configuration, clients, transactions, and structured logs live in SQL Server.",
    flow: [
      "Channel verify → load product rules → CBS prefetch → product-specific checks",
      "Optional restriction check for DPS/loan",
      "Transfer → resolve debit account → reject duplicate ClientTxnID → re-validate",
      "DEPOSIT/DPS → CBS transfer path; LOAN → loan repayment path",
      "Persist Transactions + audit logs → return bank/client txn status",
    ],
    challenges: [
      "Multiple CBS response shapes across enquiry and transfer APIs",
      "Product-specific business rules (deposit vs DPS installment vs loan dues)",
      "Flexible channel–product–debit configuration",
      "Keeping partner onboarding safe without exposing CBS directly",
    ],
    contribution:
      "Backend implementation of verify/transfer/status services, CBS adapters, JWT client auth patterns, and SQL-backed audit logging.",
    outcome:
      "A working channel-to-CBS payment path with verification, transfer, status, logging, and admin APIs for channels/products—without claimed production metrics.",
  },
  "conversation-logging": {
    slug: "conversation-logging",
    title: "ASP.NET Core Conversation & API Logging Middleware",
    category: "Observability · Platform Library",
    tech: [".NET 8", "ASP.NET Core Middleware", "Dapper", "SQL Server"],
    decisions: [
      {
        title: "Reusable library over per-host copy-paste",
        detail:
          "ConversationId + inbound/outbound SQL logging registers via DI/pipeline extensions so every host API gets the same correlation model.",
      },
      {
        title: "Correlate outbound calls under the inbound id",
        detail:
          "ExternalApiLogger writes CBS/provider hops into the same conversation so support can reconstruct full chains from SQL.",
      },
      {
        title: "Size limits and non-fatal external log failures",
        detail:
          "Large bodies truncate; failed log writes must not take down the business request path.",
      },
    ],
    problem:
      "APIs that span multiple services and external providers are hard to debug without a shared conversation ID and durable request/response logs.",
    context:
      "Support and engineering need to reconstruct full call chains across inbound traffic and outbound integrations without each host reinventing logging.",
    solution:
      "A reusable class library registers via DI and pipeline extensions. Incoming requests get a ConversationId; middleware captures request/response bodies (with size limits) to SQL. Outbound integrations can log via ExternalApiLogger under the same conversation.",
    architecture:
      "ASP.NET Core middleware + DI extensions + store abstraction + SQL Server/Dapper implementation. Hosts enable logging with minimal wiring.",
    flow: [
      "Ensure ConversationId / ServiceName",
      "Buffer & persist request → invoke next",
      "Capture & persist response linked by request id",
      "Optional outbound ExternalApiLogger writes under same conversation",
      "Failed external logging writes error rows without rethrow storms",
    ],
    challenges: [
      "Capturing bodies without breaking the ASP.NET Core stream pipeline",
      "Correlating inbound and outbound calls",
      "Truncating large payloads to protect storage",
      "Scoped DI for middleware without captive dependencies",
    ],
    contribution:
      "Implemented middleware, SQL store, external logger, and host registration extensions as a reusable library pattern.",
    outcome:
      "Host APIs can enable conversation-scoped logging with minimal wiring and query SQL log tables by conversation ID.",
  },
};
