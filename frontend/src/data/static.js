/**
 * Static portfolio content used when VITE_USE_DB is not true.
 * Edit this file to update the public site without a database.
 */

export const staticProfile = {
  fullName: "Akib Hasan",
  FullName: "Akib Hasan",
  headline: ".NET / C# Backend Engineer specializing in banking & payments systems",
  Headline: ".NET / C# Backend Engineer specializing in banking & payments systems",
  summary:
    "I build production backend APIs and document-generation systems for card management platforms — from PDF mailer workflows to multi-signatory transaction authorization. Focused on reliability, clear contracts, and audit-ready design.",
  Summary:
    "I build production backend APIs and document-generation systems for card management platforms — from PDF mailer workflows to multi-signatory transaction authorization. Focused on reliability, clear contracts, and audit-ready design.",
  location: "Dhaka, Bangladesh",
  Location: "Dhaka, Bangladesh",
  email: "you@example.com",
  Email: "you@example.com",
  githubUrl: "https://github.com/AkibHasan2",
  GithubUrl: "https://github.com/AkibHasan2",
  linkedinUrl: "https://linkedin.com/in/your-handle",
  LinkedinUrl: "https://linkedin.com/in/your-handle",
};

export const staticSkills = [
  { Category: "Backend", Name: "C# / .NET", Proficiency: 5 },
  { Category: "Backend", Name: "ASP.NET Core Web API", Proficiency: 5 },
  { Category: "Database", Name: "SQL Server / T-SQL", Proficiency: 5 },
  { Category: "Backend", Name: "iText7 (PDF generation)", Proficiency: 4 },
  { Category: "Frontend", Name: "React", Proficiency: 4 },
  { Category: "Frontend", Name: "Tailwind CSS", Proficiency: 4 },
  { Category: "Tooling", Name: "Swagger / OpenAPI", Proficiency: 4 },
  { Category: "Tooling", Name: "Postman", Proficiency: 4 },
];

export const staticProjects = [
  {
    Title: "Multi-Signatory Transaction Authorization",
    Summary: "Rule-engine approval flow for corporate investment banking transactions with full audit trail.",
    TechStack: "React, Rule Engine, Audit Logging",
    Featured: true,
    RepoUrl: "",
    LiveUrl: "",
  },
  {
    Title: "Card Mailer & Forwarding Letter Generator",
    Summary: "Automated PDF generation overlaying live SQL Server data onto bank card templates.",
    TechStack: ".NET, iText7, SQL Server, PDF",
    Featured: true,
    RepoUrl: "",
    LiveUrl: "",
  },
  {
    Title: "Card Management API Suite",
    Summary: "ASP.NET Core APIs for card issuance and status workflows, documented with Swagger/OpenAPI.",
    TechStack: "ASP.NET Core, SQL Server, Swagger",
    Featured: false,
    RepoUrl: "",
    LiveUrl: "",
  },
];

export const staticExperience = [
  {
    Company: "Jamuna Bank PLC",
    Role: ".NET / C# Developer",
    StartDate: "2023-01-01",
    EndDate: null,
    Summary:
      "Building backend APIs and document generation for a bank card management platform used in production banking operations.",
  },
];
