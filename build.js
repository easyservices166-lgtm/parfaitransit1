const fs = require("node:fs");
const path = require("node:path");
const output = path.join(__dirname, "dist");
fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(output, { recursive: true });
for (const item of ["index.html", "css", "js", "img", "media", "media-data.js"]) {
  const source = path.join(__dirname, item);
  if (!fs.existsSync(source)) throw new Error("Required site file or folder is missing: " + item);
  fs.cpSync(source, path.join(output, item), { recursive: true });
}
console.log("PARFAITRANSIT: production site copied to dist/");
