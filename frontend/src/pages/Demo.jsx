import { Link, useParams } from "react-router-dom";
import UtilityDemo from "../components/demo/UtilityDemo.jsx";
import BondDemo from "../components/demo/BondDemo.jsx";
import FundTransferDemo from "../components/demo/FundTransferDemo.jsx";
import LoggingDemo from "../components/demo/LoggingDemo.jsx";

const DEMOS = {
  "utility-payments": UtilityDemo,
  "bond-platform": BondDemo,
  "fund-transfer": FundTransferDemo,
  "conversation-logging": LoggingDemo,
};

export default function Demo() {
  const { slug } = useParams();
  const DemoApp = DEMOS[slug];

  if (!DemoApp) {
    return (
      <div className="grain flex min-h-screen flex-col items-center justify-center bg-ink px-6 text-center">
        <h1 className="font-display text-2xl font-bold text-paper">Demo not found</h1>
        <p className="mt-2 text-sm text-muted">Interactive demos exist for the four featured projects.</p>
        <Link to="/#projects" className="mt-6 text-sm font-semibold text-verified link-underline">
          Back to projects
        </Link>
      </div>
    );
  }

  return <DemoApp />;
}
