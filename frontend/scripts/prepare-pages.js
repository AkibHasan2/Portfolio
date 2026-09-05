import { copyFileSync, writeFileSync, readFileSync, existsSync } from "fs";
import { join } from "path";

const dist = join(process.cwd(), "dist");
const indexPath = join(dist, "index.html");

if (!existsSync(indexPath)) {
  console.error("[prepare-pages] dist/index.html missing — run vite build first");
  process.exit(1);
}

// SPA fallback: GitHub Pages serves 404.html for unknown paths
copyFileSync(indexPath, join(dist, "404.html"));

// Disable Jekyll processing on GitHub Pages
writeFileSync(join(dist, ".nojekyll"), "");

// Stamp HTML so deploys are easy to verify and harder to cache stale
const stamp = new Date().toISOString();
const sha = process.env.GITHUB_SHA?.slice(0, 7) || "local";
let html = readFileSync(indexPath, "utf8");
if (!html.includes("data-deploy-id")) {
  html = html.replace(
    "<head>",
    `<head>\n    <!-- deploy ${sha} @ ${stamp} -->\n    <meta name="deploy-id" content="${sha}" />\n    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />\n    <meta http-equiv="Pragma" content="no-cache" />\n    <meta http-equiv="Expires" content="0" />`
  );
  writeFileSync(indexPath, html);
  copyFileSync(indexPath, join(dist, "404.html"));
}

console.log(`[prepare-pages] ready — deploy ${sha} @ ${stamp}`);
