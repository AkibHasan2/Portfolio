import { useState } from "react";
import { Link } from "react-router-dom";

const DEMOS = {
  "utility-payments": {
    screens: ["Bill fetch", "Maker", "Checker", "Workflow"],
    render(screen, setScreen) {
      return (
        <UtilityMini screen={screen} setScreen={setScreen} />
      );
    },
  },
  "bond-platform": {
    screens: ["Investment", "Checker", "Inventory", "Certificate"],
    render(screen) {
      return <BondMini screen={screen} />;
    },
  },
  "fund-transfer": {
    screens: ["Verify", "Transfer", "Status"],
    render(screen, setScreen) {
      return <FundMini screen={screen} setScreen={setScreen} />;
    },
  },
  "conversation-logging": {
    screens: ["Pipeline", "Conversations", "Call chain"],
    render(screen) {
      return <LogMini screen={screen} />;
    },
  },
};

export default function ProjectDemo({ project }) {
  const slug = project?.Slug || project?.slug;
  const demo = DEMOS[slug];
  const [screen, setScreen] = useState(0);
  const title = project?.Title || project?.title || "Project";

  if (!demo) return null;
  const active = demo.screens[screen] || demo.screens[0];

  return (
    <div className="overflow-hidden rounded-2xl border border-rule bg-[#0b1220] text-left shadow-xl">
      <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          <span className="ml-2 font-mono text-[11px] text-slate-400">demo · fictional data</span>
        </div>
        <span className="text-[11px] font-medium text-slate-300">Interactive preview</span>
      </div>
      <div className="flex gap-1 overflow-x-auto border-b border-white/10 px-3 py-2">
        {demo.screens.map((label, i) => (
          <button
            key={label}
            type="button"
            onClick={() => setScreen(i)}
            className={`rounded-md px-2.5 py-1 text-[11px] font-semibold ${
              i === screen ? "bg-blue-500/20 text-blue-300" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="min-h-[280px] p-4 text-slate-200">
        <p className="mb-3 text-xs text-slate-400">{title}</p>
        {demo.render(active, setScreen, demo.screens)}
      </div>
      <div className="flex items-center justify-between border-t border-white/10 px-4 py-3 text-xs">
        <span className="text-slate-500">Not connected to any bank</span>
        {slug && (
          <Link to={`/work/${slug}`} className="font-semibold text-blue-300 hover:underline">
            Case study →
          </Link>
        )}
      </div>
    </div>
  );
}

function Pill({ children, tone = "slate" }) {
  const map = {
    slate: "bg-slate-700/60 text-slate-200",
    amber: "bg-amber-500/20 text-amber-200",
    green: "bg-emerald-500/20 text-emerald-200",
    blue: "bg-blue-500/20 text-blue-200",
  };
  return <span className={`rounded px-2 py-0.5 font-mono text-[10px] font-semibold ${map[tone]}`}>{children}</span>;
}

function UtilityMini({ screen, setScreen }) {
  const [fetched, setFetched] = useState(false);
  const [status, setStatus] = useState("PENDING");

  if (screen === "Bill fetch") {
    return (
      <div className="space-y-3 text-sm">
        <p className="text-slate-400">Biller: Demo Electric · Consumer DEMO-EL-99102</p>
        <button type="button" onClick={() => setFetched(true)} className="rounded-md bg-blue-500 px-3 py-1.5 text-xs font-semibold text-white">
          Fetch bill
        </button>
        {fetched && (
          <div className="rounded-lg border border-white/10 bg-white/5 p-3">
            <p>Demo Customer</p>
            <p className="mt-1 font-mono text-blue-300">BDT 2,450.50</p>
            <button type="button" onClick={() => setScreen?.(1)} className="mt-3 text-xs font-semibold text-blue-300">
              Submit as maker →
            </button>
          </div>
        )}
      </div>
    );
  }
  if (screen === "Maker") {
    return (
      <div className="text-sm">
        <p className="font-mono">UTL-2401</p>
        <p className="mt-1 text-slate-400">Demo Electric · account debit</p>
        <div className="mt-3"><Pill tone="amber">PENDING</Pill></div>
      </div>
    );
  }
  if (screen === "Checker") {
    return (
      <div className="space-y-3 text-sm">
        <p>UTL-2401 awaits dual control</p>
        <div className="flex gap-2">
          <button type="button" onClick={() => { setStatus("PROCESSING"); setScreen?.(3); }} className="rounded-md bg-emerald-500 px-3 py-1.5 text-xs font-semibold text-slate-950">
            Approve
          </button>
          <button type="button" onClick={() => setStatus("REJECTED")} className="rounded-md border border-white/15 px-3 py-1.5 text-xs">
            Reject
          </button>
        </div>
        <Pill tone={status === "REJECTED" ? "slate" : "amber"}>{status}</Pill>
      </div>
    );
  }
  return (
    <ol className="space-y-2 text-sm">
      {["Start workflow", "CBS debit", "Biller confirm", "COMPLETED"].map((step, i) => (
        <li key={step} className="flex items-center justify-between rounded-md border border-white/10 px-3 py-2">
          <span>{step}</span>
          <Pill tone={i < 3 ? "green" : "blue"}>{i < 3 ? "DONE" : "DONE"}</Pill>
        </li>
      ))}
    </ol>
  );
}

function BondMini({ screen }) {
  if (screen === "Investment") {
    return <p className="text-sm text-slate-300">Maker capture · 10 units DEMO-BOND-A · Account payment · inventory reserved</p>;
  }
  if (screen === "Checker") {
    return <p className="text-sm text-slate-300">Checker approves CBS debit, then certificate issuance. Reject releases reserved units.</p>;
  }
  if (screen === "Inventory") {
    return (
      <div className="grid grid-cols-3 gap-2 text-center text-xs">
        <div className="rounded-lg border border-white/10 p-3"><p className="text-slate-400">Available</p><p className="text-lg text-emerald-300">410</p></div>
        <div className="rounded-lg border border-white/10 p-3"><p className="text-slate-400">Reserved</p><p className="text-lg text-amber-200">15</p></div>
        <div className="rounded-lg border border-white/10 p-3"><p className="text-slate-400">Issued</p><p className="text-lg text-blue-300">1570</p></div>
      </div>
    );
  }
  return <p className="font-mono text-sm text-slate-300">CERT-BND-501 · QR token QR-DEMO · old certs invalidate on transfer</p>;
}

function FundMini({ screen, setScreen }) {
  const [ok, setOk] = useState(false);
  if (screen === "Verify") {
    return (
      <div className="space-y-3 text-sm">
        <p>Channel DEMO-WALLET · product DEPOSIT · ****88</p>
        <button type="button" onClick={() => { setOk(true); setScreen?.(1); }} className="rounded-md bg-blue-500 px-3 py-1.5 text-xs font-semibold text-white">
          Verify account
        </button>
        {ok && <p className="font-mono text-emerald-300">CBS prefetch OK</p>}
      </div>
    );
  }
  if (screen === "Transfer") {
    return <p className="text-sm text-slate-300">ClientTxnID uniqueness check, then CBS credit. Duplicate posts are rejected.</p>;
  }
  return <p className="font-mono text-sm text-slate-300">CHN-99112200 · DPS · SUCCESS · CBS-778812</p>;
}

function LogMini({ screen }) {
  if (screen === "Pipeline") {
    return <p className="font-mono text-xs leading-6 text-slate-300">UseConversationId() → UseApiLogging() → ExternalApiLogger shares the same id</p>;
  }
  if (screen === "Conversations") {
    return <p className="font-mono text-sm text-blue-300">cnv_demo001 · DemoHost.Api · HTTP 200</p>;
  }
  return (
    <ul className="space-y-2 text-xs">
      <li className="rounded border border-white/10 px-3 py-2">IN POST /api/payments/submit · 202</li>
      <li className="rounded border border-white/10 px-3 py-2">OUT POST cbs.demo/enquiry · 200</li>
      <li className="rounded border border-white/10 px-3 py-2">OUT POST cbs.demo/transfer · 200</li>
    </ul>
  );
}
