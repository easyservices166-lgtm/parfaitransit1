const fs = require("node:fs");
const path = require("node:path");
const { execFileSync } = require("node:child_process");
const root = __dirname;
const output = path.join(root, "dist");
fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(output, { recursive: true });
for (const item of ["index.html", "css", "js", "img", "media-data.js", "media"]) {
  const source = path.join(root, item);
  if (fs.existsSync(source)) fs.cpSync(source, path.join(output, item), { recursive: true });
}
const packs = fs.readdirSync(root).filter(name => name.startsWith("PARFAITRANSIT_MEDIA_PACK_") && name.endsWith(".zip")).sort();
for (const pack of packs) execFileSync("unzip", ["-oq", path.join(root, pack), "-d", output]);
console.log(`PARFAITRANSIT: production site copied to dist/ (${packs.length} media packs extracted)`);
