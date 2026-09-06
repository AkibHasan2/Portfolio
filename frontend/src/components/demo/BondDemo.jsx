import { useState } from "react";
import DemoShell, { StatusPill, Panel, Field, inputClass, Btn } from "./DemoShell.jsx";

const PAGES = [
  { id: "invest", label: "1. New investment" },
  { id: "checker", label: "2. Checker desk" },
  { id: "inventory", label: "3. Bond inventory" },
  { id: "cert", label: "4. Certificate" },
  { id: "transfer", label: "5. Transfer" },
];

const INV_SEED = [
  { series: "DEMO-BOND-A", face: 1000, available: 420, reserved: 15, issued: 1560 },
  { series: "DEMO-BOND-B", face: 5000, available: 88, reserved: 4, issued: 310 },
];

export default function BondDemo() {
  const [page, setPage] = useState("invest");
  const [role, setRole] = useState("Maker");
  const [form, setForm] = useState({
    investor: "Demo Investor Ltd.",
    account: "110200****21",
    series: "DEMO-BOND-A",
    units: 10,
    payment: "Account",
  });
  const [queue, setQueue] = useState([
    {
      id: "BND-501",
      investor: "Demo Investor Ltd.",
      series: "DEMO-BOND-A",
      units: 10,
      amount: 10000,
      status: "PENDING",
      cert: null,
    },
  ]);
  const [inventory, setInventory] = useState(INV_SEED);
  const [selected, setSelected] = useState("BND-501");
  const [transfer, setTransfer] = useState({
    from: "Demo Investor Ltd.",
    to: "Demo Buyer Co.",
    units: 3,
    status: null,
  });

  const active = queue.find((q) => q.id === selected);

  function createInvestment() {
    if (role !== "Maker") return;
    const units = Number(form.units) || 1;
    const face = inventory.find((i) => i.series === form.series)?.face || 1000;
    const id = `BND-${500 + queue.length + 1}`;
    setQueue((prev) => [
      {
        id,
        investor: form.investor,
        series: form.series,
        units,
        amount: units * face,
        status: "PENDING",
        cert: null,
      },
      ...prev,
    ]);
    setInventory((prev) =>
      prev.map((i) =>
        i.series === form.series
          ? { ...i, available: Math.max(0, i.available - units), reserved: i.reserved + units }
          : i
      )
    );
    setSelected(id);
    setPage("checker");
  }

  function approve() {
    if (role !== "Checker" || active?.status !== "PENDING") return;
    const token = `QR-DEMO-${active.id}-${Date.now().toString(36).toUpperCase()}`;
    setQueue((prev) =>
      prev.map((q) =>
        q.id === selected
          ? {
              ...q,
              status: "APPROVED",
              cert: {
                ref: `CERT-${q.id}`,
                token,
                issuedAt: new Date().toISOString().slice(0, 10),
              },
            }
          : q
      )
    );
    setInventory((prev) =>
      prev.map((i) =>
        i.series === active.series
          ? {
              ...i,
              reserved: Math.max(0, i.reserved - active.units),
              issued: i.issued + active.units,
            }
          : i
      )
    );
    setPage("cert");
  }

  function reject() {
    if (role !== "Checker" || active?.status !== "PENDING") return;
    setQueue((prev) => prev.map((q) => (q.id === selected ? { ...q, status: "REJECTED" } : q)));
    setInventory((prev) =>
      prev.map((i) =>
        i.series === active.series
          ? { ...i, available: i.available + active.units, reserved: Math.max(0, i.reserved - active.units) }
          : i
      )
    );
  }

  function runTransfer() {
    if (role !== "Checker") return;
    setTransfer((t) => ({ ...t, status: "PROCESSING" }));
    setTimeout(() => {
      setTransfer((t) => ({ ...t, status: "COMPLETED" }));
      setInventory((prev) =>
        prev.map((i) =>
          i.series === "DEMO-BOND-A"
            ? { ...i, issued: i.issued } // holdings move; inventory face stays for demo
            : i
        )
      );
    }, 1200);
  }

  return (
    <DemoShell
      title="Bond Investment Ops"
      subtitle="Purchase · inventory · certificate · transfer"
      pages={PAGES}
      activePage={page}
      onNavigate={setPage}
      caseStudySlug="bond-platform"
      role={role}
      roles={["Maker", "Checker"]}
      onRoleChange={setRole}
    >
      {page === "invest" && (
        <Panel title="Maker — create bond investment">
          <div className="grid gap-3 sm:grid-cols-2">
            <Field label="Investor">
              <input
                className={inputClass()}
                value={form.investor}
                onChange={(e) => setForm((f) => ({ ...f, investor: e.target.value }))}
              />
            </Field>
            <Field label="CBS account">
              <input
                className={inputClass()}
                value={form.account}
                onChange={(e) => setForm((f) => ({ ...f, account: e.target.value }))}
              />
            </Field>
            <Field label="Bond series">
              <select
                className={inputClass()}
                value={form.series}
                onChange={(e) => setForm((f) => ({ ...f, series: e.target.value }))}
              >
                {inventory.map((i) => (
                  <option key={i.series} value={i.series}>
                    {i.series} (face {i.face})
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Units">
              <input
                type="number"
                min={1}
                className={inputClass()}
                value={form.units}
                onChange={(e) => setForm((f) => ({ ...f, units: e.target.value }))}
              />
            </Field>
            <Field label="Payment mode">
              <select
                className={inputClass()}
                value={form.payment}
                onChange={(e) => setForm((f) => ({ ...f, payment: e.target.value }))}
              >
                <option>Account</option>
                <option>Cheque</option>
              </select>
            </Field>
          </div>
          <div className="mt-4">
            <Btn onClick={createInvestment} disabled={role !== "Maker"}>
              Submit &amp; reserve inventory
            </Btn>
            {role !== "Maker" && <p className="mt-2 text-xs text-amber">Switch to Maker to create.</p>}
          </div>
        </Panel>
      )}

      {page === "checker" && (
        <Panel
          title="Checker — approve purchase"
          actions={
            <div className="flex gap-2">
              <Btn onClick={approve} disabled={role !== "Checker" || active?.status !== "PENDING"}>
                Approve + CBS post
              </Btn>
              <Btn variant="danger" onClick={reject} disabled={role !== "Checker" || active?.status !== "PENDING"}>
                Reject
              </Btn>
            </div>
          }
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[480px] text-left text-xs">
              <thead className="text-muted">
                <tr className="border-b border-rule">
                  <th className="py-2 font-medium">Id</th>
                  <th className="py-2 font-medium">Investor</th>
                  <th className="py-2 font-medium">Units</th>
                  <th className="py-2 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {queue.map((q) => (
                  <tr
                    key={q.id}
                    onClick={() => setSelected(q.id)}
                    className={`cursor-pointer border-b border-rule/60 ${selected === q.id ? "bg-verified/10" : ""}`}
                  >
                    <td className="py-2 font-mono">{q.id}</td>
                    <td className="py-2 text-muted">{q.investor}</td>
                    <td className="py-2">{q.units}</td>
                    <td className="py-2">
                      <StatusPill status={q.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {active && (
            <p className="mt-3 text-sm text-muted">
              Selected {active.id}: {active.series} · BDT {active.amount.toLocaleString()} · dual-control required
            </p>
          )}
        </Panel>
      )}

      {page === "inventory" && (
        <Panel title="Bond inventory state machine">
          <div className="grid gap-3 sm:grid-cols-2">
            {inventory.map((i) => (
              <div key={i.series} className="rounded-lg border border-rule bg-ink/40 p-4 text-sm">
                <p className="font-mono font-semibold text-paper">{i.series}</p>
                <p className="mt-1 text-xs text-muted">Face value BDT {i.face}</p>
                <dl className="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
                  <div>
                    <dt className="text-muted">Available</dt>
                    <dd className="font-mono text-lg text-success">{i.available}</dd>
                  </div>
                  <div>
                    <dt className="text-muted">Reserved</dt>
                    <dd className="font-mono text-lg text-amber">{i.reserved}</dd>
                  </div>
                  <div>
                    <dt className="text-muted">Issued</dt>
                    <dd className="font-mono text-lg text-wire">{i.issued}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </Panel>
      )}

      {page === "cert" && (
        <Panel title="PDF certificate (simulated)">
          {active?.cert ? (
            <div className="rounded-xl border border-dashed border-verified/40 bg-verified/5 p-6 text-center">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-verified">Certificate of holding</p>
              <h3 className="mt-2 font-display text-2xl font-bold">{active.cert.ref}</h3>
              <p className="mt-2 text-sm text-muted">
                {active.investor} · {active.units} units · {active.series}
              </p>
              <p className="mt-4 font-mono text-xs text-paper">Verify token: {active.cert.token}</p>
              <p className="mt-1 text-xs text-muted">Issued {active.cert.issuedAt} · QR-verifiable short token (demo)</p>
            </div>
          ) : (
            <p className="text-sm text-muted">Approve an investment to issue a certificate.</p>
          )}
        </Panel>
      )}

      {page === "transfer" && (
        <Panel title="Partial transfer workflow">
          <div className="grid gap-3 sm:grid-cols-2">
            <Field label="From (seller)">
              <input
                className={inputClass()}
                value={transfer.from}
                onChange={(e) => setTransfer((t) => ({ ...t, from: e.target.value }))}
              />
            </Field>
            <Field label="To (buyer)">
              <input
                className={inputClass()}
                value={transfer.to}
                onChange={(e) => setTransfer((t) => ({ ...t, to: e.target.value }))}
              />
            </Field>
            <Field label="Units to transfer">
              <input
                type="number"
                className={inputClass()}
                value={transfer.units}
                onChange={(e) => setTransfer((t) => ({ ...t, units: e.target.value }))}
              />
            </Field>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <Btn onClick={runTransfer} disabled={role !== "Checker"}>
              Checker: CBS + reallocate + invalidate old cert
            </Btn>
            {transfer.status && <StatusPill status={transfer.status} />}
          </div>
          <ol className="mt-4 list-decimal space-y-1 pl-5 text-xs text-muted">
            <li>Search seller holdings</li>
            <li>Calculate remainder / partial split</li>
            <li>Checker authorization + CBS</li>
            <li>Invalidate old certificates → issue new refs</li>
          </ol>
        </Panel>
      )}
    </DemoShell>
  );
}
