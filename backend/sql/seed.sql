USE PortfolioDB;
GO

-- Edit these values freely, or leave them and manage everything from the Admin panel instead.

IF NOT EXISTS (SELECT 1 FROM dbo.Profile)
INSERT INTO dbo.Profile (FullName, Headline, Summary, Location, Email, GithubUrl, LinkedinUrl)
VALUES (
  N'Akib Hasan',
  N'.NET / C# Backend Engineer — Banking & Payments Systems',
  N'I build backend APIs and document-generation systems for card management platforms in production banking environments — from PDF-driven mailer forms to multi-signatory transaction authorization flows.',
  N'Dhaka, Bangladesh',
  N'you@example.com',
  N'https://github.com/your-handle',
  N'https://linkedin.com/in/your-handle'
);
GO

IF NOT EXISTS (SELECT 1 FROM dbo.Skills)
INSERT INTO dbo.Skills (Category, Name, Proficiency, SortOrder) VALUES
(N'Backend', N'C# / .NET', 5, 1),
(N'Backend', N'ASP.NET Core Web API', 5, 2),
(N'Database', N'SQL Server / T-SQL', 5, 3),
(N'Backend', N'iText7 (PDF generation)', 4, 4),
(N'Frontend', N'React', 4, 5),
(N'Frontend', N'Tailwind CSS', 4, 6),
(N'Tooling', N'Swagger / OpenAPI', 4, 7),
(N'Tooling', N'Postman', 4, 8);
GO

IF NOT EXISTS (SELECT 1 FROM dbo.Projects)
INSERT INTO dbo.Projects (Title, Slug, Summary, Description, TechStack, Featured, SortOrder) VALUES
(N'Multi-Signatory Transaction Authorization',
 N'multi-signatory-authorization',
 N'A rule-engine driven approval flow for corporate investment banking transactions.',
 N'React dashboard implementing a rule engine that requires minimum approvals from two signatory groups before a transaction clears, with a full audit trail and live progress tracking.',
 N'React, Rule Engine, Audit Logging',
 1, 1),
(N'Card Mailer & Forwarding Letter Generator',
 N'card-document-generator',
 N'Automated PDF generation for bank card mailer acknowledgement forms and forwarding letters.',
 N'A .NET/iText7 system that overlays live SQL Server data onto fixed PDF templates, handling multi-page overflow, dynamic address wrapping, and coordinate transforms between design and render coordinate systems.',
 N'.NET, iText7, SQL Server, PDF',
 1, 2),
(N'Card Management API Suite',
 N'card-management-api',
 N'Structured backend APIs for a bank card management platform.',
 N'A set of ASP.NET Core Web APIs covering card issuance, status workflows, and document generation, documented via Swagger/OpenAPI and exported as a Postman collection for the wider team.',
 N'ASP.NET Core, SQL Server, Swagger',
 0, 3);
GO
