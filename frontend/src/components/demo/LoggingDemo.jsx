import { useState } from "react";
import DemoShell, { StatusPill, Panel, Field, inputClass, Btn } from "./DemoShell.jsx";

const PAGES = [
  { id: "host", label: "1. Host API" },
  { id: "conversations", label: "2. Conversations" },
  { id: "detail", label: "3. Call chain" },
  { id: "wireup", label: "4. DI / pipeline" },
];

function newConv() {
  return `cnv_${Math.random().toString(36).slice(2, 10)}`;
}

export default function LoggingDemo() {
  const [page, setPage] = useState("host");
  const [endpoint, setEndpoint] = useState("/api/payments/submit");
  const [conversations, setConversations] = useState([
    {
      id: "cnv_demo001",
      service: "DemoHost.Api",
      path: "/api/health",
      status: 200,
      at: "10:02:11",
      hops: [
        { type: "IN", method: "GET", path: "/api/health", status: 200, ms: 4 },
      ],
    },
  ]);
  const [selected, setSelected] = useState("cnv_demo001");
  const [firing, setFiring] = useState(false);

  const active = conversations.find((c) => c.id === selected);

  function fireRequest() {
    setFiring(true);
    const id = newConv();
    const hops = [
      { type: "IN", method: "POST", path: endpoint, status: 202, ms: 12 },
      { type: "OUT", method: "POST", path: "https://cbs.demo/enquiry", status: 200, ms: 84 },
      { type: "OUT", method: "POST", path: "https://cbs.demo/transfer", status: 200, ms: 140 },
      { type: "IN", method: "POST", path: endpoint, status: 200, ms: 240, note: "response persisted" },
    ];
    setTimeout(() => {
      setConversations((prev) => [
        {
          id,
          service: "DemoHost.Api",
          path: endpoint,
          status: 200,
          at: new Date().toLocaleTimeString(),
          hops,
        },
        ...prev,
      ]);
      setSelected(id);
      setFiring(false);
      setPage("detail");
    }, 800);
  }

  return (
    <DemoShell
      title="Conversation & API Logging"
      subtitle="Correlation IDs · inbound/outbound SQL persistence"
      pages={PAGES}
      activePage={page}
      onNavigate={setPage}
      caseStudySlug="conversation-logging"
    >
      {page === "host" && (
        <Panel title="Simulate a host API request">
          <Field label="Endpoint">
            <select className={inputClass()} value={endpoint} onChange={(e) => setEndpoint(e.target.value)}>
              <option>/api/payments/submit</option>
              <option>/api/bonds/approve</option>
              <option>/api/channel/transfer</option>
            </select>
          </Field>
          <p className="mt-2 text-xs text-muted">
            Middleware stamps ConversationId, buffers bodies (size-capped), and logs outbound CBS calls under the same
            id.
          </p>
          <div className="mt-4">
            <Btn onClick={fireRequest} disabled={firing}>
              {firing ? "Pipeline executing…" : "Send request through pipeline"}
            </Btn>
          </div>
        </Panel>
      )}

      {page === "conversations" && (
        <Panel title="SQL log index by ConversationId">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[480px] text-left text-xs">
              <thead className="text-muted">
                <tr className="border-b border-rule">
                  <th className="py-2 font-medium">ConversationId</th>
                  <th className="py-2 font-medium">Service</th>
                  <th className="py-2 font-medium">Path</th>
                  <th className="py-2 font-medium">Status</th>
                  <th className="py-2 font-medium">Time</th>
                </tr>
              </thead>
              <tbody>
                {conversations.map((c) => (
                  <tr
                    key={c.id}
                    onClick={() => {
                      setSelected(c.id);
                      setPage("detail");
                    }}
                    className={`cursor-pointer border-b border-rule/60 ${selected === c.id ? "bg-verified/10" : ""}`}
                  >
                    <td className="py-2 font-mono text-verified">{c.id}</td>
                    <td className="py-2">{c.service}</td>
                    <td className="py-2 text-muted">{c.path}</td>
                    <td className="py-2">
                      <StatusPill status={c.status === 200 || c.status === 202 ? "SUCCESS" : "FAILED"} />
                    </td>
                    <td className="py-2 text-muted">{c.at}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>
      )}

      {page === "detail" && (
        <Panel title={`Call chain · ${active?.id || "—"}`}>
          {!active ? (
            <p className="text-sm text-muted">Select a conversation.</p>
          ) : (
            <ol className="space-y-2">
              {active.hops.map((h, i) => (
                <li
                  key={`${h.type}-${i}`}
                  className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-rule bg-ink/40 px-3 py-2 text-xs"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`rounded px-1.5 py-0.5 font-mono font-bold ${
                        h.type === "IN" ? "bg-verified/20 text-verified" : "bg-amber/20 text-amber"
                      }`}
                    >
                      {h.type}
                    </span>
                    <span className="font-mono text-paper">
                      {h.method} {h.path}
                    </span>
                    {h.note && <span className="text-muted">· {h.note}</span>}
                  </div>
                  <span className="font-mono text-muted">
                    HTTP {h.status} · {h.ms}ms
                  </span>
                </li>
              ))}
            </ol>
          )}
        </Panel>
      )}

      {page === "wireup" && (
        <Panel title="Host registration (illustrative)">
          <pre className="overflow-x-auto rounded-lg border border-rule bg-ink p-4 font-mono text-[11px] leading-relaxed text-muted">{`// Program.cs — pattern only, not production bank code
builder.Services.AddConversationLogging(o => {
  o.ServiceName = "DemoHost.Api";
  o.MaxBodyBytes = 64_000;
});
app.UseConversationId();
app.UseApiLogging();
// ExternalApiLogger shares scoped ConversationId`}</pre>
          <ul className="mt-4 space-y-1 text-xs text-muted">
            <li>· Captures bodies without breaking the stream pipeline</li>
            <li>· Correlates inbound + outbound under one ConversationId</li>
            <li>· Truncates large payloads; failed external logs don’t crash the request</li>
          </ul>
        </Panel>
      )}
    </DemoShell>
  );
}
