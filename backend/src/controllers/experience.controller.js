import { getPool, sql } from "../config/db.js";

export async function listExperience(req, res) {
  try {
    const pool = await getPool();
    const result = await pool
      .request()
      .query("SELECT * FROM dbo.Experience ORDER BY SortOrder ASC, StartDate DESC");
    res.json(result.recordset);
  } catch (err) {
    res.status(500).json({ error: "Failed to load experience", detail: err.message });
  }
}

export async function createExperience(req, res) {
  const { company, role, location, startDate, endDate, summary, sortOrder } = req.body;
  try {
    const pool = await getPool();
    const result = await pool
      .request()
      .input("company", sql.NVarChar(150), company)
      .input("role", sql.NVarChar(150), role)
      .input("location", sql.NVarChar(120), location || null)
      .input("startDate", sql.Date, startDate)
      .input("endDate", sql.Date, endDate || null)
      .input("summary", sql.NVarChar(sql.MAX), summary || null)
      .input("sortOrder", sql.Int, sortOrder || 0).query(`
        INSERT INTO dbo.Experience (Company, Role, Location, StartDate, EndDate, Summary, SortOrder)
        OUTPUT INSERTED.*
        VALUES (@company, @role, @location, @startDate, @endDate, @summary, @sortOrder)
      `);
    res.status(201).json(result.recordset[0]);
  } catch (err) {
    res.status(500).json({ error: "Failed to create experience entry", detail: err.message });
  }
}

export async function updateExperience(req, res) {
  const { id } = req.params;
  const { company, role, location, startDate, endDate, summary, sortOrder } = req.body;
  try {
    const pool = await getPool();
    const result = await pool
      .request()
      .input("id", sql.Int, id)
      .input("company", sql.NVarChar(150), company)
      .input("role", sql.NVarChar(150), role)
      .input("location", sql.NVarChar(120), location || null)
      .input("startDate", sql.Date, startDate)
      .input("endDate", sql.Date, endDate || null)
      .input("summary", sql.NVarChar(sql.MAX), summary || null)
      .input("sortOrder", sql.Int, sortOrder || 0).query(`
        UPDATE dbo.Experience SET
          Company=@company, Role=@role, Location=@location, StartDate=@startDate,
          EndDate=@endDate, Summary=@summary, SortOrder=@sortOrder
        OUTPUT INSERTED.*
        WHERE Id=@id
      `);
    if (!result.recordset.length) return res.status(404).json({ error: "Experience entry not found" });
    res.json(result.recordset[0]);
  } catch (err) {
    res.status(500).json({ error: "Failed to update experience entry", detail: err.message });
  }
}

export async function deleteExperience(req, res) {
  const { id } = req.params;
  try {
    const pool = await getPool();
    await pool.request().input("id", sql.Int, id).query("DELETE FROM dbo.Experience WHERE Id=@id");
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: "Failed to delete experience entry", detail: err.message });
  }
}
