import { useState } from "react";
import Button from "../ui/Button.jsx";

const emptyFromFields = (fields) =>
  fields.reduce((acc, f) => ({ ...acc, [f.key]: f.type === "checkbox" ? false : "" }), {});

/**
 * fields: [{ key, label, type: 'text'|'textarea'|'number'|'checkbox'|'date', required }]
 * item shape from the API uses PascalCase keys (matches SQL Server columns);
 * `mapIn` converts a record to the form's camelCase state, `mapOut` converts back for submission.
 */
export default function ResourceManager({ title, fields, items, onCreate, onUpdate, onDelete, mapIn, mapOut }) {
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptyFromFields(fields));
  const [isNew, setIsNew] = useState(false);
  const [saving, setSaving] = useState(false);

  function startCreate() {
    setForm(emptyFromFields(fields));
    setIsNew(true);
    setEditingId("new");
  }

  function startEdit(item) {
    setForm(mapIn(item));
    setIsNew(false);
    setEditingId(item.Id || item.id);
  }

  function cancel() {
    setEditingId(null);
    setForm(emptyFromFields(fields));
  }

  async function save() {
    setSaving(true);
    try {
      const payload = mapOut(form);
      if (isNew) {
        await onCreate(payload);
      } else {
        await onUpdate(editingId, payload);
      }
      cancel();
    } finally {
      setSaving(false);
    }
  }

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-display text-xl font-semibold text-paper">{title}</h2>
        <Button onClick={startCreate}>+ Add</Button>
      </div>

      {editingId && (
        <div className="mb-6 space-y-3 rounded-sm border border-verified/50 bg-surface p-5">
          {fields.map((f) => (
            <div key={f.key}>
              <label className="mb-1 block font-mono text-xs uppercase tracking-widest text-muted">
                {f.label}
              </label>
              {f.type === "textarea" ? (
                <textarea
                  rows={3}
                  value={form[f.key] ?? ""}
                  onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                  className="w-full resize-none rounded-sm border border-rule bg-surface2 px-3 py-2 text-sm text-paper outline-none focus:border-verified"
                />
              ) : f.type === "checkbox" ? (
                <input
                  type="checkbox"
                  checked={!!form[f.key]}
                  onChange={(e) => setForm({ ...form, [f.key]: e.target.checked })}
                  className="h-4 w-4"
                />
              ) : (
                <input
                  type={f.type || "text"}
                  required={f.required}
                  value={form[f.key] ?? ""}
                  onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                  className="w-full rounded-sm border border-rule bg-surface2 px-3 py-2 text-sm text-paper outline-none focus:border-verified"
                />
              )}
            </div>
          ))}
          <div className="flex gap-3 pt-2">
            <Button onClick={save} disabled={saving}>
              {saving ? "Saving…" : "Save"}
            </Button>
            <Button variant="ghost" onClick={cancel}>
              Cancel
            </Button>
          </div>
        </div>
      )}

      <div className="divide-y divide-rule rounded-sm border border-rule">
        {(items || []).map((item) => (
          <div key={item.Id || item.id} className="flex items-center justify-between gap-4 p-4">
            <p className="text-sm text-paper">
              {item[fields[0].labelKey || Object.keys(item).find((k) => k.toLowerCase() === fields[0].key.toLowerCase())] ||
                item.Title ||
                item.Name ||
                item.Company ||
                "Untitled"}
            </p>
            <div className="flex gap-3 font-mono text-xs uppercase tracking-widest">
              <button onClick={() => startEdit(item)} className="text-wire hover:text-verified">
                Edit
              </button>
              <button
                onClick={() => onDelete(item.Id || item.id)}
                className="text-[#E8646C] hover:text-red-400"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
        {!items?.length && <p className="p-4 font-mono text-xs text-muted">No entries yet.</p>}
      </div>
    </div>
  );
}
