import { getPool, sql } from "../config/db.js";

export async function listProjects(req, res) {
  try {
    const pool = await getPool();
    const result = await pool
      .request()
      .query("SELECT * FROM dbo.Projects ORDER BY Featured DESC, SortOrder ASC, CreatedAt DESC");
    res.json(result.recordset);
  } catch (err) {
    res.status(500).json({ error: "Failed to load projects", detail: err.message });
  }
}

export async function createProject(req, res) {
  const { title, slug, summary, description, techStack, repoUrl, liveUrl, imageUrl, featured, sortOrder } = req.body;
  try {
    const pool = await getPool();
    const result = await pool
      .request()
      .input("title", sql.NVarChar(150), title)
      .input("slug", sql.NVarChar(160), slug)
      .input("summary", sql.NVarChar(400), summary)
      .input("description", sql.NVarChar(sql.MAX), description || null)
      .input("techStack", sql.NVarChar(400), techStack || null)
      .input("repoUrl", sql.NVarChar(300), repoUrl || null)
      .input("liveUrl", sql.NVarChar(300), liveUrl || null)
      .input("imageUrl", sql.NVarChar(300), imageUrl || null)
      .input("featured", sql.Bit, !!featured)
      .input("sortOrder", sql.Int, sortOrder || 0).query(`
        INSERT INTO dbo.Projects (Title, Slug, Summary, Description, TechStack, RepoUrl, LiveUrl, ImageUrl, Featured, SortOrder)
        OUTPUT INSERTED.*
        VALUES (@title, @slug, @summary, @description, @techStack, @repoUrl, @liveUrl, @imageUrl, @featured, @sortOrder)
      `);
    res.status(201).json(result.recordset[0]);
  } catch (err) {
    res.status(500).json({ error: "Failed to create project", detail: err.message });
  }
}

export async function updateProject(req, res) {
  const { id } = req.params;
  const { title, slug, summary, description, techStack, repoUrl, liveUrl, imageUrl, featured, sortOrder } = req.body;
  try {
    const pool = await getPool();
    const result = await pool
      .request()
      .input("id", sql.Int, id)
      .input("title", sql.NVarChar(150), title)
      .input("slug", sql.NVarChar(160), slug)
      .input("summary", sql.NVarChar(400), summary)
      .input("description", sql.NVarChar(sql.MAX), description || null)
      .input("techStack", sql.NVarChar(400), techStack || null)
      .input("repoUrl", sql.NVarChar(300), repoUrl || null)
      .input("liveUrl", sql.NVarChar(300), liveUrl || null)
      .input("imageUrl", sql.NVarChar(300), imageUrl || null)
      .input("featured", sql.Bit, !!featured)
      .input("sortOrder", sql.Int, sortOrder || 0).query(`
        UPDATE dbo.Projects SET
          Title=@title, Slug=@slug, Summary=@summary, Description=@description,
          TechStack=@techStack, RepoUrl=@repoUrl, LiveUrl=@liveUrl, ImageUrl=@imageUrl,
          Featured=@featured, SortOrder=@sortOrder
        OUTPUT INSERTED.*
        WHERE Id=@id
      `);
    if (!result.recordset.length) return res.status(404).json({ error: "Project not found" });
    res.json(result.recordset[0]);
  } catch (err) {
    res.status(500).json({ error: "Failed to update project", detail: err.message });
  }
}

export async function deleteProject(req, res) {
  const { id } = req.params;
  try {
    const pool = await getPool();
    await pool.request().input("id", sql.Int, id).query("DELETE FROM dbo.Projects WHERE Id=@id");
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: "Failed to delete project", detail: err.message });
  }
}
