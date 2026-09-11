/**
 * prerender.js
 *
 * Runs after your production build. Spins up a local static server for your
 * build output, opens each route in headless Chrome, waits for React to
 * finish rendering, and saves the fully-rendered HTML back into the build
 * folder so crawlers/social bots get real content instead of an empty shell.
 *
 * SETUP (one time):
 *   npm install --save-dev puppeteer serve
 *
 * USAGE:
 *   Vite:  "build": "vite build && node prerender.js"
 *   CRA:   "build": "react-scripts build && node prerender.js"
 *
 * BEFORE RUNNING: update ROUTES and DIST_DIR below to match your app.
 */

import puppeteer from "puppeteer";
import { spawn } from "child_process";
import fs from "fs";
import path from "path";

// ---- Configured for holy-ganges-dorms-2 ----
// Your Vite config sets build.outDir to "dist/public", and wrangler.jsonc
// serves assets from that same folder — so this must match exactly.
const DIST_DIR = "dist/public";
const ROUTES = [
  "/",
  "/gallery",
  "/blogs",
  "/book",
  // If you add routes to client/src/App.tsx later, add them here too.
];
// ------------------------------------------------

const PORT = 5050;
const BASE_URL = `http://localhost:${PORT}`;

function waitForServer(url, timeoutMs = 10000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const check = async () => {
      try {
        const res = await fetch(url);
        if (res.ok || res.status < 500) return resolve();
      } catch {
        // server not up yet
      }
      if (Date.now() - start > timeoutMs) {
        return reject(new Error("Static server did not start in time"));
      }
      setTimeout(check, 300);
    };
    check();
  });
}

async function prerender() {
  if (!fs.existsSync(DIST_DIR)) {
    console.error(`Build folder "${DIST_DIR}" not found. Did the build step run first?`);
    process.exit(1);
  }

  console.log(`Starting static server on port ${PORT} for "${DIST_DIR}"...`);
  const server = spawn(
    "npx",
    ["serve", "-s", DIST_DIR, "-l", String(PORT)],
    { stdio: "ignore", shell: true }
  );

  try {
    await waitForServer(BASE_URL);

    const browser = await puppeteer.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();

    for (const route of ROUTES) {
      const url = `${BASE_URL}${route}`;
      console.log(`Rendering ${url} ...`);

      await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });

      // Give client-side data fetching / animations a moment to settle.
      await new Promise((r) => setTimeout(r, 500));

      const html = await page.content();

      const outPath =
        route === "/"
          ? path.join(DIST_DIR, "index.html")
          : path.join(DIST_DIR, route.replace(/^\//, ""), "index.html");

      fs.mkdirSync(path.dirname(outPath), { recursive: true });
      fs.writeFileSync(outPath, html, "utf-8");

      console.log(`  -> saved ${outPath}`);
    }

    await browser.close();
    console.log("Prerendering complete.");
  } finally {
    server.kill();
  }
}

prerender().catch((err) => {
  console.error("Prerender failed:", err);
  process.exit(1);
});
