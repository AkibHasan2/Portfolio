import { getPool, sql } from "../config/db.js";

// Public: visitors submit the contact form
export async function createMessage(req, res) {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required" });
  }

  try {
    const pool = await getPool();
    await pool
      .request()
      .input("name", sql.NVarChar(120), name)
      .input("email", sql.NVarChar(120), email)
      .input("message", sql.NVarChar(sql.MAX), message)
      .query("INSERT INTO dbo.Messages (Name, Email, Message) VALUES (@name, @email, @message)");
    res.status(201).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to send message", detail: err.message });
  }
}

// Admin-only: read the inbox
export async function listMessages(req, res) {
  try {
    const pool = await getPool();
    const result = await pool.request().query("SELECT * FROM dbo.Messages ORDER BY CreatedAt DESC");
    res.json(result.recordset);
  } catch (err) {
    res.status(500).json({ error: "Failed to load messages", detail: err.message });
  }
}

export async function markMessageRead(req, res) {
  const { id } = req.params;
  try {
    const pool = await getPool();
    await pool.request().input("id", sql.Int, id).query("UPDATE dbo.Messages SET IsRead = 1 WHERE Id = @id");
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to update message", detail: err.message });
  }
}
