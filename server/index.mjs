import { createServer } from "node:http";
import { handleChat, handleHealth } from "./copilot-api.mjs";

try {
  process.loadEnvFile(".env.local");
} catch (error) {
  if (error.code !== "ENOENT") {
    console.error("Unable to load .env.local.");
    process.exit(1);
  }
}

const host = "127.0.0.1";
const port = Number(process.env.PORT || 8787);

const server = createServer(async (request, response) => {
  const url = new URL(request.url || "/", `http://${host}:${port}`);
  if (url.pathname === "/api/health") {
    await handleHealth(request, response);
    return;
  }
  if (url.pathname === "/api/chat") {
    await handleChat(request, response);
    return;
  }
  response.writeHead(404, { "Content-Type": "application/json; charset=utf-8" });
  response.end(JSON.stringify({ error: "Not found." }));
});

server.listen(port, host, () => {
  console.log(`AIFAGen Copilot API listening on http://${host}:${port}`);
  if (!process.env.GROQ_API_KEY) console.log("GROQ_API_KEY is not configured; add it to .env.local.");
});
