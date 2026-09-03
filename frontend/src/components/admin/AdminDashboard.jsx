import { useState } from "react";
import Button from "../ui/Button.jsx";
import ThemeToggle from "../ui/ThemeToggle.jsx";
import ResourceManager from "./ResourceManager.jsx";
import { useFetch } from "../../hooks/useFetch.js";
import { api } from "../../services/api.js";

const TABS = ["Profile", "Projects", "Skills", "Experience", "Messages"];

export default function AdminDashboard() {
  const [tab, setTab] = useState("Profile");

  function logout() {
    localStorage.removeItem("admin_token");
    window.location.reload();
  }

  return (
    <div className="min-h-screen bg-ink px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-verified">Admin panel</p>
            <h1 className="font-display text-2xl font-semibold text-paper">Content ledger</h1>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href={import.meta.env.BASE_URL}
              className="font-mono text-xs uppercase tracking-widest text-muted hover:text-paper"
            >
              View site
            </a>
            <Button variant="outline" onClick={logout}>
              Log out
            </Button>
          </div>
        </div>

        <div className="mb-8 flex gap-2 border-b border-rule">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-2 font-mono text-xs uppercase tracking-widest ${
                tab === t ? "border-b-2 border-verified text-verified" : "text-muted hover:text-paper"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {tab === "Profile" && <ProfileTab />}
        {tab === "Projects" && <ProjectsTab />}
        {tab === "Skills" && <SkillsTab />}
        {tab === "Experience" && <ExperienceTab />}
        {tab === "Messages" && <MessagesTab />}
      </div>
    </div>
  );
}

function ProfileTab() {
  const { data: profile, refetch } = useFetch(api.getProfile, {}, [], { enabled: true });
  const [form, setForm] = useState(null);
  const [saving, setSaving] = useState(false);
  const current = form || profile || {};

  async function save() {
    setSaving(true);
    try {
      await api.saveProfile(current);
      await refetch();
      setForm(null);
    } finally {
      setSaving(false);
    }
  }

  const fields = [
    ["fullName", "Full name"],
    ["headline", "Headline"],
    ["location", "Location"],
    ["email", "Email"],
    ["githubUrl", "GitHub URL"],
    ["linkedinUrl", "LinkedIn URL"],
    ["resumeUrl", "Resume URL"],
  ];

  return (
    <div className="max-w-xl space-y-4">
      {fields.map(([key, label]) => (
        <div key={key}>
          <label className="mb-1 block font-mono text-xs uppercase tracking-widest text-muted">{label}</label>
          <input
            value={current[key] || current[key.charAt(0).toUpperCase() + key.slice(1)] || ""}
            onChange={(e) => setForm({ ...current, [key]: e.target.value })}
            className="w-full rounded-sm border border-rule bg-surface2 px-3 py-2 text-sm text-paper outline-none focus:border-verified"
          />
        </div>
      ))}
      <div>
        <label className="mb-1 block font-mono text-xs uppercase tracking-widest text-muted">Summary</label>
        <textarea
          rows={4}
          value={current.summary || current.Summary || ""}
          onChange={(e) => setForm({ ...current, summary: e.target.value })}
          className="w-full resize-none rounded-sm border border-rule bg-surface2 px-3 py-2 text-sm text-paper outline-none focus:border-verified"
        />
      </div>
      <Button onClick={save} disabled={saving}>
        {saving ? "Saving…" : "Save profile"}
      </Button>
    </div>
  );
}

function ProjectsTab() {
  const { data: projects, refetch } = useFetch(api.getProjects, [], [], { enabled: true });
  const fields = [
    { key: "title", label: "Title", required: true },
    { key: "slug", label: "Slug (unique, url-safe)", required: true },
    { key: "summary", label: "Short summary", type: "textarea", required: true },
    { key: "description", label: "Full description", type: "textarea" },
    { key: "techStack", label: "Tech stack (comma separated)" },
    { key: "repoUrl", label: "Repo URL" },
    { key: "liveUrl", label: "Live URL" },
    { key: "featured", label: "Featured", type: "checkbox" },
    { key: "sortOrder", label: "Sort order", type: "number" },
  ];

  return (
    <ResourceManager
      title="Projects"
      fields={fields}
      items={projects}
      onCreate={async (p) => {
        await api.createProject(p);
        refetch();
      }}
      onUpdate={async (id, p) => {
        await api.updateProject(id, p);
        refetch();
      }}
      onDelete={async (id) => {
        await api.deleteProject(id);
        refetch();
      }}
      mapIn={(item) => ({
        title: item.Title,
        slug: item.Slug,
        summary: item.Summary,
        description: item.Description,
        techStack: item.TechStack,
        repoUrl: item.RepoUrl,
        liveUrl: item.LiveUrl,
        featured: item.Featured,
        sortOrder: item.SortOrder,
      })}
      mapOut={(f) => f}
    />
  );
}

function SkillsTab() {
  const { data: skills, refetch } = useFetch(api.getSkills, [], [], { enabled: true });
  const fields = [
    { key: "category", label: "Category", required: true },
    { key: "name", label: "Skill name", required: true },
    { key: "proficiency", label: "Proficiency (1-5)", type: "number" },
    { key: "sortOrder", label: "Sort order", type: "number" },
  ];

  return (
    <ResourceManager
      title="Skills"
      fields={fields}
      items={skills}
      onCreate={async (p) => {
        await api.createSkill(p);
        refetch();
      }}
      onUpdate={async (id, p) => {
        await api.updateSkill(id, p);
        refetch();
      }}
      onDelete={async (id) => {
        await api.deleteSkill(id);
        refetch();
      }}
      mapIn={(item) => ({
        category: item.Category,
        name: item.Name,
        proficiency: item.Proficiency,
        sortOrder: item.SortOrder,
      })}
      mapOut={(f) => f}
    />
  );
}

function ExperienceTab() {
  const { data: experience, refetch } = useFetch(api.getExperience, [], [], { enabled: true });
  const fields = [
    { key: "company", label: "Company", required: true },
    { key: "role", label: "Role", required: true },
    { key: "location", label: "Location" },
    { key: "startDate", label: "Start date", type: "date", required: true },
    { key: "endDate", label: "End date (blank = current)", type: "date" },
    { key: "summary", label: "Summary", type: "textarea" },
    { key: "sortOrder", label: "Sort order", type: "number" },
  ];

  return (
    <ResourceManager
      title="Experience"
      fields={fields}
      items={experience}
      onCreate={async (p) => {
        await api.createExperience(p);
        refetch();
      }}
      onUpdate={async (id, p) => {
        await api.updateExperience(id, p);
        refetch();
      }}
      onDelete={async (id) => {
        await api.deleteExperience(id);
        refetch();
      }}
      mapIn={(item) => ({
        company: item.Company,
        role: item.Role,
        location: item.Location,
        startDate: item.StartDate?.slice(0, 10),
        endDate: item.EndDate?.slice(0, 10),
        summary: item.Summary,
        sortOrder: item.SortOrder,
      })}
      mapOut={(f) => f}
    />
  );
}

function MessagesTab() {
  const { data: messages, refetch } = useFetch(api.getMessages, [], [], { enabled: true });

  return (
    <div className="divide-y divide-rule rounded-sm border border-rule">
      {(messages || []).map((m) => (
        <div key={m.Id} className="p-4">
          <div className="mb-1 flex items-center justify-between">
            <p className="font-display font-semibold text-paper">
              {m.Name} <span className="font-mono text-xs font-normal text-muted">— {m.Email}</span>
            </p>
            {!m.IsRead && (
              <button
                onClick={async () => {
                  await api.markMessageRead(m.Id);
                  refetch();
                }}
                className="font-mono text-xs uppercase tracking-widest text-wire hover:text-verified"
              >
                Mark read
              </button>
            )}
          </div>
          <p className="text-sm text-muted">{m.Message}</p>
          <p className="mt-2 font-mono text-[11px] text-muted">{new Date(m.CreatedAt).toLocaleString()}</p>
        </div>
      ))}
      {!messages?.length && <p className="p-4 font-mono text-xs text-muted">No messages yet.</p>}
    </div>
  );
}
