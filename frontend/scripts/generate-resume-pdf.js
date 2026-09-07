/**
 * Generates a standard ATS-friendly resume PDF (US Letter).
 * Run: npm run resume:pdf
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import PDFDocument from "pdfkit";
import {
  staticProfile as profile,
  staticExperience,
  staticSkills,
  resumeBullets,
  staticProjects,
} from "../src/data/portfolio.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(__dirname, "..", "public", "Akib-Hasan-Resume.pdf");

const MARGIN = 50;
const PAGE_WIDTH = 612;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2;

const summary =
  "Backend-focused .NET engineer specializing in enterprise API middleware, system integration, and controlled payment workflows. Proven connecting digital/branch channels to core banking and payment providers with maker/checker authorization, recoverable settlement paths, SQL-backed audit trails, and multi-provider façades. Also builds React operations UIs and reusable observability middleware when workflows demand it.";

function formatDate(iso) {
  if (!iso) return "Present";
  return new Date(iso).toLocaleString("en-US", { month: "short", year: "numeric" });
}

function section(doc, title) {
  doc.moveDown(0.55);
  if (doc.y > doc.page.height - 90) doc.addPage();
  doc.font("Helvetica-Bold").fontSize(11).fillColor("#0f172a").text(title.toUpperCase(), {
    characterSpacing: 0.6,
  });
  const lineY = doc.y + 3;
  doc
    .moveTo(MARGIN, lineY)
    .lineTo(MARGIN + CONTENT_WIDTH, lineY)
    .lineWidth(1.2)
    .strokeColor("#2563eb")
    .stroke();
  doc.moveDown(0.55);
}

function bullet(doc, text) {
  if (doc.y > doc.page.height - 70) doc.addPage();
  const startY = doc.y;
  doc.font("Helvetica").fontSize(9.5).fillColor("#0f172a");
  doc.text("•", MARGIN, startY, { width: 10 });
  doc.text(text, MARGIN + 12, startY, { width: CONTENT_WIDTH - 12, lineGap: 1.2 });
  doc.moveDown(0.28);
}

async function main() {
  fs.mkdirSync(path.dirname(outPath), { recursive: true });

  const doc = new PDFDocument({
    size: "LETTER",
    margins: { top: MARGIN, bottom: MARGIN, left: MARGIN, right: MARGIN },
    info: {
      Title: `${profile.fullName} — Resume`,
      Author: profile.fullName,
      Subject: profile.roleLabel,
    },
  });

  const stream = fs.createWriteStream(outPath);
  doc.pipe(stream);

  // —— Header ——
  doc.font("Helvetica-Bold").fontSize(22).fillColor("#0f172a").text(profile.fullName, { align: "center" });
  doc
    .moveDown(0.2)
    .font("Helvetica-Bold")
    .fontSize(11)
    .fillColor("#1d4ed8")
    .text(profile.roleLabel, { align: "center" });
  doc
    .moveDown(0.12)
    .font("Helvetica")
    .fontSize(9)
    .fillColor("#475569")
    .text(profile.roleDetail, { align: "center" });

  const contact = [
    profile.location,
    profile.email,
    "linkedin.com/in/akib-hasan-iz",
    "github.com/AkibHasan2",
    "AkibHasan2.github.io/Portfolio",
  ].join("  ·  ");

  doc.moveDown(0.4).fontSize(8.5).fillColor("#334155").text(contact, { align: "center" });

  // —— Summary ——
  section(doc, "Professional Summary");
  doc.font("Helvetica").fontSize(9.5).fillColor("#1e293b").text(summary, {
    width: CONTENT_WIDTH,
    align: "left",
    lineGap: 2,
  });

  // —— Experience ——
  section(doc, "Experience");
  for (const exp of staticExperience) {
    const roleLine = `${exp.Role}  |  ${exp.Company}`;
    const dates = `${formatDate(exp.StartDate)} – Present`;
    const y0 = doc.y;
    doc.font("Helvetica-Bold").fontSize(10.5).fillColor("#0f172a").text(roleLine, MARGIN, y0, {
      width: CONTENT_WIDTH * 0.68,
    });
    doc.font("Helvetica").fontSize(9).fillColor("#475569").text(dates, MARGIN, y0, {
      width: CONTENT_WIDTH,
      align: "right",
    });
    doc.moveDown(0.15);
    doc
      .font("Helvetica")
      .fontSize(9)
      .fillColor("#334155")
      .text(exp.Summary, { width: CONTENT_WIDTH, lineGap: 1.2 });
    doc.moveDown(0.35);

    for (const b of resumeBullets) {
      bullet(doc, b);
    }
  }

  // —— Projects (compact) ——
  section(doc, "Key Projects");
  for (const p of staticProjects) {
    bullet(doc, `${p.Title} — ${p.Highlights?.slice(0, 2).join("; ") || p.Category}`);
  }

  // —— Skills ——
  section(doc, "Technical Skills");
  const byCat = staticSkills.reduce((acc, s) => {
    const cat = s.Category || "Other";
    (acc[cat] ||= []).push(s.Name);
    return acc;
  }, {});
  for (const [cat, names] of Object.entries(byCat)) {
    if (doc.y > doc.page.height - 60) doc.addPage();
    doc.font("Helvetica-Bold").fontSize(9.5).fillColor("#0f172a").text(`${cat}: `, { continued: true });
    doc.font("Helvetica").fillColor("#1e293b").text(names.join(" · "));
    doc.moveDown(0.22);
  }

  // —— Open to ——
  section(doc, "Target Roles");
  doc
    .font("Helvetica")
    .fontSize(9.5)
    .fillColor("#1e293b")
    .text((profile.openTo || []).join("  ·  "), { width: CONTENT_WIDTH });

  doc.moveDown(1.1);
  doc
    .font("Helvetica")
    .fontSize(7.5)
    .fillColor("#64748b")
    .text(
      "Full case studies: https://AkibHasan2.github.io/Portfolio/  ·  Proprietary banking source is not published.",
      { align: "center" }
    );

  doc.end();
  await new Promise((resolve, reject) => {
    stream.on("finish", resolve);
    stream.on("error", reject);
  });
  console.log(`Wrote ${outPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
