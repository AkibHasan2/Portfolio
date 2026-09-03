-- Run this against your SQL Server instance (SSMS / sqlcmd / Azure Data Studio).
-- Creates the PortfolioDB database and all content tables.

IF DB_ID('PortfolioDB') IS NULL
BEGIN
    CREATE DATABASE PortfolioDB;
END
GO

USE PortfolioDB;
GO

IF OBJECT_ID('dbo.Profile', 'U') IS NULL
CREATE TABLE dbo.Profile (
    Id            INT IDENTITY(1,1) PRIMARY KEY,
    FullName      NVARCHAR(120)  NOT NULL,
    Headline      NVARCHAR(200)  NOT NULL,      -- e.g. "Backend Engineer — Banking & Payments Systems"
    Summary       NVARCHAR(MAX)  NULL,
    Location      NVARCHAR(120)  NULL,
    Email         NVARCHAR(120)  NULL,
    GithubUrl     NVARCHAR(300)  NULL,
    LinkedinUrl   NVARCHAR(300)  NULL,
    ResumeUrl     NVARCHAR(300)  NULL,
    UpdatedAt     DATETIME2      NOT NULL DEFAULT SYSUTCDATETIME()
);
GO

IF OBJECT_ID('dbo.Skills', 'U') IS NULL
CREATE TABLE dbo.Skills (
    Id            INT IDENTITY(1,1) PRIMARY KEY,
    Category      NVARCHAR(80)   NOT NULL,      -- e.g. "Backend", "Database", "Frontend"
    Name          NVARCHAR(80)   NOT NULL,      -- e.g. "C# / .NET", "SQL Server", "React"
    Proficiency   TINYINT        NOT NULL DEFAULT 3,  -- 1-5
    SortOrder     INT            NOT NULL DEFAULT 0
);
GO

IF OBJECT_ID('dbo.Projects', 'U') IS NULL
CREATE TABLE dbo.Projects (
    Id            INT IDENTITY(1,1) PRIMARY KEY,
    Title         NVARCHAR(150)  NOT NULL,
    Slug          NVARCHAR(160)  NOT NULL UNIQUE,
    Summary       NVARCHAR(400)  NOT NULL,       -- short line for the card
    Description   NVARCHAR(MAX)  NULL,           -- longer detail, shown on expand
    TechStack     NVARCHAR(400)  NULL,           -- comma separated: "C#, .NET, SQL Server, iText7"
    RepoUrl       NVARCHAR(300)  NULL,
    LiveUrl       NVARCHAR(300)  NULL,
    ImageUrl      NVARCHAR(300)  NULL,
    Featured      BIT            NOT NULL DEFAULT 0,
    SortOrder     INT            NOT NULL DEFAULT 0,
    CreatedAt     DATETIME2      NOT NULL DEFAULT SYSUTCDATETIME()
);
GO

IF OBJECT_ID('dbo.Experience', 'U') IS NULL
CREATE TABLE dbo.Experience (
    Id            INT IDENTITY(1,1) PRIMARY KEY,
    Company       NVARCHAR(150)  NOT NULL,
    Role          NVARCHAR(150)  NOT NULL,
    Location      NVARCHAR(120)  NULL,
    StartDate     DATE           NOT NULL,
    EndDate       DATE           NULL,           -- NULL = current role
    Summary       NVARCHAR(MAX)  NULL,
    SortOrder     INT            NOT NULL DEFAULT 0
);
GO

IF OBJECT_ID('dbo.Messages', 'U') IS NULL
CREATE TABLE dbo.Messages (
    Id            INT IDENTITY(1,1) PRIMARY KEY,
    Name          NVARCHAR(120)  NOT NULL,
    Email         NVARCHAR(120)  NOT NULL,
    Message       NVARCHAR(MAX)  NOT NULL,
    IsRead        BIT            NOT NULL DEFAULT 0,
    CreatedAt     DATETIME2      NOT NULL DEFAULT SYSUTCDATETIME()
);
GO
