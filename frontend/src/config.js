/**
 * Portfolio data source toggle.
 * VITE_USE_DB=true  → load profile/skills/projects/experience from the API (SQL Server)
 * VITE_USE_DB=false → use static content in src/data/static.js (no backend required)
 */
export const USE_DB = String(import.meta.env.VITE_USE_DB || "false").toLowerCase() === "true";

export const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000/api";
