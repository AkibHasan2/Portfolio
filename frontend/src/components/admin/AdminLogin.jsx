import { useState } from "react";
import Button from "../ui/Button.jsx";
import ThemeToggle from "../ui/ThemeToggle.jsx";
import { api } from "../../services/api.js";

export default function AdminLogin({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const { token } = await api.login(email, password);
      localStorage.setItem("admin_token", token);
      onLogin();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-ink px-6">
      <div className="absolute right-6 top-6">
        <ThemeToggle />
      </div>
      <form onSubmit={handleSubmit} className="w-full max-w-sm rounded-sm border border-rule bg-surface p-8">
        <p className="mb-1 font-mono text-xs uppercase tracking-widest text-verified">Restricted // admin</p>
        <h1 className="mb-6 font-display text-2xl font-semibold text-paper">Sign in to edit content</h1>

        <div className="mb-4">
          <label className="mb-1 block font-mono text-xs uppercase tracking-widest text-muted">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-sm border border-rule bg-surface2 px-3 py-2 text-sm text-paper outline-none focus:border-verified"
          />
        </div>
        <div className="mb-6">
          <label className="mb-1 block font-mono text-xs uppercase tracking-widest text-muted">Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-sm border border-rule bg-surface2 px-3 py-2 text-sm text-paper outline-none focus:border-verified"
          />
        </div>

        {error && <p className="mb-4 font-mono text-xs text-[#E8646C]">{error}</p>}

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Verifying…" : "Sign in"}
        </Button>
      </form>
    </div>
  );
}
