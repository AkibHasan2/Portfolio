import { useMemo, useState } from "react";
import DemoShell, { StatusPill, Panel, Field, inputClass, Btn } from "./DemoShell.jsx";

const PAGES = [
  { id: "bills", label: "1. Bill fetch" },
  { id: "maker", label: "2. Maker queue" },
  { id: "checker", label: "3. Checker approve" },
  { id: "workflow", label: "4. Conductor run" },
  { id: "audit", label: "5. Status & audit" },
];

const SEED = [
  {
    id: "UTL-2401",
    biller: "Demo Electric Co.",
    consumer: "DEMO-EL-99102",
    amount: 2450.5,
    account: "****4521",
    status: "PENDING",
    mode: "Account",
  },
  {
    id: "UTL-2398",
    biller: "Demo Gas Ltd.",
    consumer: "DEMO-GAS-4411",
    amount: 890,
    account: "****7780",
    status: "COMPLETED",
    mode: "Cash",
  },
];

export default function UtilityDemo() {
  const [page, setPage] = useState("bills");
  const [role, setRole] = useState("Maker");
  const [txns, setTxns] = useState(SEED);
  const [billForm, setBillForm] = useState({ biller: "Demo Water Auth.", consumer: "DEMO-WTR-2201" });
  const [fetched, setFetched] = useState(null);
  const [activeId, setActiveId] = useState("UTL-2401");
  const [steps, setSteps] = useState([]);
  const [running, setRunning] = useState(false);

  const active = txns.find((t) => t.id === activeId);

  const stats = useMemo(() => {
    const c = (s) => txns.filter((t) => t.status === s).length;
    return { pending: c("PENDING"), processing: c("PROCESSING"), done: c("COMPLETED"), failed: c("FAILED") };
  }, [txns]);

  function fetchBill() {
    setFetched({
      biller: billForm.biller,
      consumer: billForm.consumer,
      customerName: "Demo Customer",
      dueAmount: 1260.75,
      dueDate: "2026-09-20",
    });
  }

  function submitMaker() {
    if (!fetched || role !== "Maker") return;
    const id = `UTL-${2400 + txns.length + 1}`;
    setTxns((prev) => [
      {
        id,
        biller: fetched.biller,
        consumer: fetched.consumer,
        amount: fetched.dueAmount,
        account: "****4521",
        status: "PENDING",
        mode: "Account",
      },
      ...prev,
    ]);
    setActiveId(id);
    setFetched(null);
    setPage("maker");
  }

  function approve() {
    if (role !== "Checker" || !active || active.status !== "PENDING") return;
    setTxns((prev) => prev.map((t) => (t.id === activeId ? { ...t, status: "PROCESSING" } : t)));
    setSteps([
      { name: "Start workflow", state: "DONE" },
      { name: "CBS debit (account)", state: "RUNNING" },
      { name: "Update CBS info", state: "WAIT" },
      { name: "Biller make-payment", state: "WAIT" },
      { name: "Finalize COMPLETED", state: "WAIT" },
    ]);
    setPage("workflow");
    setRunning(true);
    runWorkflow();
  }

  function runWorkflow() {
    const sequence = [
      { delay: 700, idx: 1, state: "DONE", next: 2 },
      { delay: 1400, idx: 2, state: "DONE", next: 3 },
      { delay: 2100, idx: 3, state: "DONE", next: 4 },
      { delay: 2800, idx: 4, state: "DONE", next: null },
    ];
    sequence.forEach(({ delay, idx, state, next }) => {
      setTimeout(() => {
        setSteps((prev) =>
          prev.map((s, i) => {
            if (i === idx) return { ...s, state };
            if (next != null && i === next) return { ...s, state: "RUNNING" };
            return s;
          })
        );
        if (next == null) {
          setTxns((prev) => prev.map((t) => (t.id === activeId ? { ...t, status: "COMPLETED" } : t)));
          setRunning(false);
        }
      }, delay);
    });
  }

  function reject() {
    if (role !== "Checker" || !active || active.status !== "PENDING") return;
    setTxns((prev) => prev.map((t) => (t.id === activeId ? { ...t, status: "REJECTED" } : t)));
  }

  return (
    <DemoShell
      title="Utility Bill Payment Ops"
      subtitle="Maker → Checker → Conductor → CBS → Biller"
      pages={PAGES}
      activePage={page}
      onNavigate={setPage}
      caseStudySlug="utility-payments"
      role={role}
      roles={["Maker", "Checker"]}
      onRoleChange={setRole}
    >
      {page === "bills" && (
        <div className="space-y-4">
          <Panel title="Fetch multi-provider bill">
            <div className="grid gap-3 sm:grid-cols-2">
              <Field label="Biller">
                <select
                  className={inputClass()}
                  value={billForm.biller}
                  onChange={(e) => setBillForm((f) => ({ ...f, biller: e.target.value }))}
                >
                  <option>Demo Electric Co.</option>
                  <option>Demo Gas Ltd.</option>
                  <option>Demo Water Auth.</option>
                </select>
              </Field>
              <Field label="Consumer / account no.">
                <input
                  className={inputClass()}
                  value={billForm.consumer}
                  onChange={(e) => setBillForm((f) => ({ ...f, consumer: e.target.value }))}
                />
              </Field>
            </div>
            <div className="mt-4 flex gap-2">
              <Btn onClick={fetchBill}>Fetch bill</Btn>
            </div>
            {fetched && (
              <div className="mt-4 rounded-lg border border-rule bg-ink/50 p-4 text-sm">
                <p className="font-semibold text-paper">{fetched.customerName}</p>
                <p className="mt-1 text-muted">
                  {fetched.biller} · {fetched.consumer}
                </p>
                <p className="mt-2 font-mono text-verified">BDT {fetched.dueAmount.toFixed(2)}</p>
                <p className="text-xs text-muted">Due {fetched.dueDate}</p>
                <div className="mt-3">
                  <Btn onClick={submitMaker} disabled={role !== "Maker"}>
                    Submit as maker (pending)
                  </Btn>
                  {role !== "Maker" && (
                    <p className="mt-2 text-xs text-amber">Switch role to Maker to submit.</p>
                  )}
                </div>
              </div>
            )}
          </Panel>
        </div>
      )}

      {page === "maker" && (
        <Panel title="Maker queue — pending submissions">
          <TxnTable txns={txns} activeId={activeId} onSelect={setActiveId} />
          <p className="mt-3 text-xs text-muted">Makers create PENDING rows; checkers cannot edit amounts.</p>
        </Panel>
      )}

      {page === "checker" && (
        <Panel
          title="Checker authorization"
          actions={
            <div className="flex gap-2">
              <Btn onClick={approve} disabled={role !== "Checker" || active?.status !== "PENDING"}>
                Approve → start workflow
              </Btn>
              <Btn variant="danger" onClick={reject} disabled={role !== "Checker" || active?.status !== "PENDING"}>
                Reject
              </Btn>
            </div>
          }
        >
          {active ? (
            <div className="space-y-2 text-sm">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono font-semibold">{active.id}</span>
                <StatusPill status={active.status} />
              </div>
              <p className="text-muted">
                {active.biller} · {active.consumer} · {active.mode} debit {active.account}
              </p>
              <p className="font-mono text-paper">BDT {Number(active.amount).toFixed(2)}</p>
              {role !== "Checker" && (
                <p className="text-xs text-amber">Switch role to Checker to approve or reject.</p>
              )}
            </div>
          ) : (
            <p className="text-sm text-muted">Select a transaction from Maker queue.</p>
          )}
        </Panel>
      )}

      {page === "workflow" && (
        <Panel title="Conductor-style task timeline">
          {steps.length === 0 ? (
            <p className="text-sm text-muted">Approve a pending payment to start the orchestration demo.</p>
          ) : (
            <ol className="space-y-3">
              {steps.map((s) => (
                <li key={s.name} className="flex items-center justify-between gap-3 rounded-lg border border-rule bg-ink/40 px-3 py-2 text-sm">
                  <span className="text-paper">{s.name}</span>
                  <StatusPill
                    status={s.state === "DONE" ? "COMPLETED" : s.state === "RUNNING" ? "PROCESSING" : "PENDING"}
                  />
                </li>
              ))}
            </ol>
          )}
          {running && <p className="mt-3 text-xs text-wire">Workflow running… CBS then biller (simulated).</p>}
        </Panel>
      )}

      {page === "audit" && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              ["Pending", stats.pending],
              ["Processing", stats.processing],
              ["Completed", stats.done],
              ["Failed", stats.failed],
            ].map(([label, n]) => (
              <div key={label} className="rounded-xl border border-rule bg-surface p-3 text-center">
                <p className="font-mono text-2xl font-bold text-paper">{n}</p>
                <p className="text-xs text-muted">{label}</p>
              </div>
            ))}
          </div>
          <Panel title="Transaction audit board">
            <TxnTable txns={txns} activeId={activeId} onSelect={setActiveId} />
          </Panel>
        </div>
      )}
    </DemoShell>
  );
}

function TxnTable({ txns, activeId, onSelect }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[520px] text-left text-xs">
        <thead className="text-muted">
          <tr className="border-b border-rule">
            <th className="py-2 pr-2 font-medium">Txn</th>
            <th className="py-2 pr-2 font-medium">Biller</th>
            <th className="py-2 pr-2 font-medium">Amount</th>
            <th className="py-2 font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          {txns.map((t) => (
            <tr
              key={t.id}
              onClick={() => onSelect(t.id)}
              className={`cursor-pointer border-b border-rule/60 hover:bg-surface2/50 ${
                activeId === t.id ? "bg-verified/10" : ""
              }`}
            >
              <td className="py-2.5 pr-2 font-mono text-paper">{t.id}</td>
              <td className="py-2.5 pr-2 text-muted">{t.biller}</td>
              <td className="py-2.5 pr-2 font-mono">{Number(t.amount).toFixed(2)}</td>
              <td className="py-2.5">
                <StatusPill status={t.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
