import { getPool, sql } from "../config/db.js";

export async function getProfile(req, res) {
  try {
    const pool = await getPool();
    const result = await pool.request().query("SELECT TOP 1 * FROM dbo.Profile ORDER BY Id");
    res.json(result.recordset[0] || null);
  } catch (err) {
    res.status(500).json({ error: "Failed to load profile", detail: err.message });
  }
}

export async function upsertProfile(req, res) {
  const { fullName, headline, summary, location, email, githubUrl, linkedinUrl, resumeUrl } = req.body;
  try {
    const pool = await getPool();
    const existing = await pool.request().query("SELECT TOP 1 Id FROM dbo.Profile");

    const request = pool
      .request()
      .input("fullName", sql.NVarChar(120), fullName)
      .input("headline", sql.NVarChar(200), headline)
      .input("summary", sql.NVarChar(sql.MAX), summary)
      .input("location", sql.NVarChar(120), location)
      .input("email", sql.NVarChar(120), email)
      .input("githubUrl", sql.NVarChar(300), githubUrl)
      .input("linkedinUrl", sql.NVarChar(300), linkedinUrl)
      .input("resumeUrl", sql.NVarChar(300), resumeUrl);

    if (existing.recordset.length) {
      await request.input("id", sql.Int, existing.recordset[0].Id).query(`
        UPDATE dbo.Profile SET
          FullName = @fullName, Headline = @headline, Summary = @summary,
          Location = @location, Email = @email, GithubUrl = @githubUrl,
          LinkedinUrl = @linkedinUrl, ResumeUrl = @resumeUrl, UpdatedAt = SYSUTCDATETIME()
        WHERE Id = @id
      `);
    } else {
      await request.query(`
        INSERT INTO dbo.Profile (FullName, Headline, Summary, Location, Email, GithubUrl, LinkedinUrl, ResumeUrl)
        VALUES (@fullName, @headline, @summary, @location, @email, @githubUrl, @linkedinUrl, @resumeUrl)
      `);
    }
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to save profile", detail: err.message });
  }
}
