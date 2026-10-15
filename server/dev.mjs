import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

const apiEntry = fileURLToPath(new URL("./index.mjs", import.meta.url));
const viteEntry = fileURLToPath(new URL("../node_modules/vite/bin/vite.js", import.meta.url));
const children = [
  spawn(process.execPath, [apiEntry], { stdio: "inherit", windowsHide: true }),
  spawn(process.execPath, [viteEntry, ...process.argv.slice(2)], { stdio: "inherit", windowsHide: true }),
];

let stopping = false;
function stop(code = 0, signal) {
  if (stopping) return;
  stopping = true;
  process.exitCode = code;
  for (const child of children) {
    if (child.exitCode === null && !child.killed) child.kill(signal || "SIGTERM");
  }
}

for (const child of children) {
  child.on("error", () => stop(1));
  child.on("exit", (code) => {
    if (!stopping) stop(code || 0);
  });
}

process.on("SIGINT", () => stop(0, "SIGINT"));
process.on("SIGTERM", () => stop(0, "SIGTERM"));
