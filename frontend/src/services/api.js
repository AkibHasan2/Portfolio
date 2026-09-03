import { API_URL } from "../config.js";

const BASE_URL = API_URL;

function authHeaders() {
  const token = localStorage.getItem("admin_token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

async function request(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...authHeaders(),
      ...(options.headers || {}),
    },
  });

  if (res.status === 204) return null;

  const data = await res.json().catch(() => null);
  if (!res.ok) {
    throw new Error(data?.error || `Request failed (${res.status})`);
  }
  return data;
}

export const api = {
  // Public reads
  getProfile: () => request("/profile"),
  getProjects: () => request("/projects"),
  getSkills: () => request("/skills"),
  getExperience: () => request("/experience"),
  sendMessage: (payload) => request("/messages", { method: "POST", body: JSON.stringify(payload) }),

  // Auth
  login: (email, password) =>
    request("/auth/login", { method: "POST", body: JSON.stringify({ email, password }) }),

  // Admin writes
  saveProfile: (payload) => request("/profile", { method: "PUT", body: JSON.stringify(payload) }),

  createProject: (payload) => request("/projects", { method: "POST", body: JSON.stringify(payload) }),
  updateProject: (id, payload) => request(`/projects/${id}`, { method: "PUT", body: JSON.stringify(payload) }),
  deleteProject: (id) => request(`/projects/${id}`, { method: "DELETE" }),

  createSkill: (payload) => request("/skills", { method: "POST", body: JSON.stringify(payload) }),
  updateSkill: (id, payload) => request(`/skills/${id}`, { method: "PUT", body: JSON.stringify(payload) }),
  deleteSkill: (id) => request(`/skills/${id}`, { method: "DELETE" }),

  createExperience: (payload) => request("/experience", { method: "POST", body: JSON.stringify(payload) }),
  updateExperience: (id, payload) =>
    request(`/experience/${id}`, { method: "PUT", body: JSON.stringify(payload) }),
  deleteExperience: (id) => request(`/experience/${id}`, { method: "DELETE" }),

  getMessages: () => request("/messages"),
  markMessageRead: (id) => request(`/messages/${id}/read`, { method: "PUT" }),
};
