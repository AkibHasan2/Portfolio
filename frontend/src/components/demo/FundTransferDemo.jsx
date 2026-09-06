import { useState } from "react";
import DemoShell, { StatusPill, Panel, Field, inputClass, Btn } from "./DemoShell.jsx";

const PAGES = [
  { id: "verify", label: "1. Verify account" },
  { id: "transfer", label: "2. Transfer" },
  { id: "status", label: "3. Status enquiry" },
  { id: "config", label: "4. Channel config" },
  { id: "logs", label: "5. Audit log" },
];

export default function FundTransferDemo() {
  const [page, setPage] = useState("verify");
  const [form, setForm] = useState({
    channel: "DEMO-WALLET",
    product: "DEPOSIT",
    creditAccount: "220100****88",
    amount: "1500",
    clientTxnId: `CHN-${Date.now().toString().slice(-8)}`,
  });
  const [verified, setVerified] = useState(null);
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([
    {
      clientTxnId: "CHN-99112200",
      product: "DPS",
      amount: 500,
      status: "SUCCESS",
      bankTxn: "CBS-778812",
    },
  ]);
  const [busy, setBusy] = useState(false);

  function verify() {
    setBusy(true);
    setTimeout(() => {
      setVerified({
        accountName: "Demo Channel Customer",
        productOk: true,
        restrictions: form.product === "LOAN" ? "None (demo)" : "N/A",
        cbsPrefetch: "OK",
      });
      setBusy(false);
      setPage("transfer");
    }, 600);
  }

  function transfer() {
    if (!verified) return;
    const dup = history.some((h) => h.clientTxnId === form.clientTxnId);
    if (dup) {
      setResult({ status: "FAILED", message: "Duplicate ClientTxnID rejected" });
      return;
    }
    setBusy(true);
    setTimeout(() => {
      const row = {
        clientTxnId: form.clientTxnId,
        product: form.product,
        amount: Number(form.amount),
        status: "SUCCESS",
        bankTxn: `CBS-${Math.floor(100000 + Math.random() * 899999)}`,
      };
      setResult(row);
      setHistory((prev) => [row, ...prev]);
      setBusy(false);
      setPage("status");
    }, 900);
  }

  return (
    <DemoShell
      title="Channel Fund Transfer API"
      subtitle="Verify → credit deposit / DPS / loan via CBS façade"
      pages={PAGES}
      activePage={page}
      onNavigate={setPage}
      caseStudySlug="fund-transfer"
    >
      {page === "verify" && (
        <Panel title="POST /api/verify (channel client)">
          <div className="grid gap-3 sm:grid-cols-2">
            <Field label="Channel">
              <select
                className={inputClass()}
                value={form.channel}
                onChange={(e) => setForm((f) => ({ ...f, channel: e.target.value }))}
              >
                <option>DEMO-WALLET</option>
                <option>DEMO-AGENT</option>
              </select>
            </Field>
            <Field label="Product">
              <select
                className={inputClass()}
                value={form.product}
                onChange={(e) => setForm((f) => ({ ...f, product: e.target.value }))}
              >
                <option value="DEPOSIT">DEPOSIT</option>
                <option value="DPS">DPS</option>
                <option value="LOAN">LOAN</option>
              </select>
            </Field>
            <Field label="Credit account">
              <input
                className={inputClass()}
                value={form.creditAccount}
                onChange={(e) => setForm((f) => ({ ...f, creditAccount: e.target.value }))}
              />
            </Field>
            <Field label="Amount (BDT)">
              <input
                className={inputClass()}
                value={form.amount}
                onChange={(e) => setForm((f) => ({ ...f, amount: e.target.value }))}
              />
            </Field>
          </div>
          <div className="mt-4">
            <Btn onClick={verify} disabled={busy}>
              {busy ? "Calling CBS prefetch…" : "Verify account"}
            </Btn>
          </div>
          {verified && (
            <pre className="mt-4 overflow-x-auto rounded-lg border border-rule bg-ink p-3 font-mono text-xs text-success">
              {JSON.stringify(verified, null, 2)}
            </pre>
          )}
        </Panel>
      )}

      {page === "transfer" && (
        <Panel title="POST /api/transfer">
          <Field label="ClientTxnID (unique)">
            <input
              className={inputClass()}
              value={form.clientTxnId}
              onChange={(e) => setForm((f) => ({ ...f, clientTxnId: e.target.value }))}
            />
          </Field>
          <p className="mt-2 text-xs text-muted">
            Channel JWT assumed · debit account resolved from channel–product mapping · fictional CBS response.
          </p>
          <div className="mt-4 flex gap-2">
            <Btn onClick={transfer} disabled={!verified || busy}>
              {busy ? "Posting to CBS…" : "Execute transfer"}
            </Btn>
            {!verified && <span className="self-center text-xs text-amber">Verify first.</span>}
          </div>
          {result && (
            <pre className="mt-4 overflow-x-auto rounded-lg border border-rule bg-ink p-3 font-mono text-xs text-paper">
              {JSON.stringify(result, null, 2)}
            </pre>
          )}
        </Panel>
      )}

      {page === "status" && (
        <Panel title="GET /api/status by ClientTxnID">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[480px] text-left text-xs">
              <thead className="text-muted">
                <tr className="border-b border-rule">
                  <th className="py-2 font-medium">ClientTxnID</th>
                  <th className="py-2 font-medium">Product</th>
                  <th className="py-2 font-medium">Amount</th>
                  <th className="py-2 font-medium">Bank txn</th>
                  <th className="py-2 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {history.map((h) => (
                  <tr key={h.clientTxnId} className="border-b border-rule/60">
                    <td className="py-2 font-mono">{h.clientTxnId}</td>
                    <td className="py-2">{h.product}</td>
                    <td className="py-2 font-mono">{h.amount}</td>
                    <td className="py-2 font-mono text-muted">{h.bankTxn}</td>
                    <td className="py-2">
                      <StatusPill status={h.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>
      )}

      {page === "config" && (
        <Panel title="Channel · product · debit mapping">
          <div className="space-y-2 text-sm">
            {[
              ["DEMO-WALLET", "DEPOSIT", "Suspense GL ****1102"],
              ["DEMO-WALLET", "DPS", "Suspense GL ****1102"],
              ["DEMO-WALLET", "LOAN", "Loan pool ****3301"],
              ["DEMO-AGENT", "DEPOSIT", "Agent float ****2209"],
            ].map(([ch, prod, debit]) => (
              <div
                key={`${ch}-${prod}`}
                className="grid grid-cols-3 gap-2 rounded-lg border border-rule bg-ink/40 px-3 py-2 font-mono text-xs"
              >
                <span>{ch}</span>
                <span className="text-verified">{prod}</span>
                <span className="text-muted">{debit}</span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-muted">Partners never call CBS directly — only this façade.</p>
        </Panel>
      )}

      {page === "logs" && (
        <Panel title="SQL-backed audit trail (sample)">
          <ul className="space-y-2 font-mono text-xs text-muted">
            <li className="rounded-md border border-rule bg-ink/40 px-3 py-2">
              [INFO] Verify DEPOSIT ****88 → CBS prefetch OK
            </li>
            <li className="rounded-md border border-rule bg-ink/40 px-3 py-2">
              [INFO] Transfer ClientTxnID={form.clientTxnId} amount={form.amount}
            </li>
            <li className="rounded-md border border-rule bg-ink/40 px-3 py-2">
              [INFO] Duplicate guard checked · uniqueness on ClientTxnID
            </li>
            <li className="rounded-md border border-rule bg-ink/40 px-3 py-2">
              [INFO] Persist Transactions + structured Serilog sinks
            </li>
          </ul>
        </Panel>
      )}
    </DemoShell>
  );
}
