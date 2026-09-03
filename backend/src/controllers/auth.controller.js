import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function login(req, res) {
  const email = String(req.body?.email || "").trim().toLowerCase();
  const password = String(req.body?.password || "");

  const adminEmail = String(process.env.ADMIN_EMAIL || "").trim().toLowerCase();
  const passwordHash = process.env.ADMIN_PASSWORD_HASH || "";

  if (!adminEmail || !passwordHash) {
    console.error("[auth] ADMIN_EMAIL or ADMIN_PASSWORD_HASH is missing from backend/.env");
    return res.status(500).json({ error: "Admin auth is not configured on the server" });
  }

  if (!email || email !== adminEmail) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const ok = await bcrypt.compare(password, passwordHash);
  if (!ok) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  if (!process.env.JWT_SECRET) {
    console.error("[auth] JWT_SECRET is missing from backend/.env");
    return res.status(500).json({ error: "Admin auth is not configured on the server" });
  }

  const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "12h" });
  res.json({ token });
}
