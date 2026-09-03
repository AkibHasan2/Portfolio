import { getPool, sql } from "../config/db.js";

export async function listSkills(req, res) {
  try {
    const pool = await getPool();
    const result = await pool.request().query("SELECT * FROM dbo.Skills ORDER BY Category, SortOrder");
    res.json(result.recordset);
  } catch (err) {
    res.status(500).json({ error: "Failed to load skills", detail: err.message });
  }
}

export async function createSkill(req, res) {
  const { category, name, proficiency, sortOrder } = req.body;
  try {
    const pool = await getPool();
    const result = await pool
      .request()
      .input("category", sql.NVarChar(80), category)
      .input("name", sql.NVarChar(80), name)
      .input("proficiency", sql.TinyInt, proficiency || 3)
      .input("sortOrder", sql.Int, sortOrder || 0).query(`
        INSERT INTO dbo.Skills (Category, Name, Proficiency, SortOrder)
        OUTPUT INSERTED.*
        VALUES (@category, @name, @proficiency, @sortOrder)
      `);
    res.status(201).json(result.recordset[0]);
  } catch (err) {
    res.status(500).json({ error: "Failed to create skill", detail: err.message });
  }
}

export async function updateSkill(req, res) {
  const { id } = req.params;
  const { category, name, proficiency, sortOrder } = req.body;
  try {
    const pool = await getPool();
    const result = await pool
      .request()
      .input("id", sql.Int, id)
      .input("category", sql.NVarChar(80), category)
      .input("name", sql.NVarChar(80), name)
      .input("proficiency", sql.TinyInt, proficiency || 3)
      .input("sortOrder", sql.Int, sortOrder || 0).query(`
        UPDATE dbo.Skills SET Category=@category, Name=@name, Proficiency=@proficiency, SortOrder=@sortOrder
        OUTPUT INSERTED.*
        WHERE Id=@id
      `);
    if (!result.recordset.length) return res.status(404).json({ error: "Skill not found" });
    res.json(result.recordset[0]);
  } catch (err) {
    res.status(500).json({ error: "Failed to update skill", detail: err.message });
  }
}

export async function deleteSkill(req, res) {
  const { id } = req.params;
  try {
    const pool = await getPool();
    await pool.request().input("id", sql.Int, id).query("DELETE FROM dbo.Skills WHERE Id=@id");
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: "Failed to delete skill", detail: err.message });
  }
}
