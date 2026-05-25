import { readFile } from "node:fs/promises";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

const port = Number(process.env.PORT || 3000);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(__dirname, "../public");
const appRoutes = new Set([
  "/",
  "/about",
  "/capabilities",
  "/projects",
  "/cases",
  "/quality",
  "/contact",
]);

const contentTypes = new Map([
  [".css", "text/css; charset=utf-8"],
  [".html", "text/html; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".jsx", "text/jsx; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".pdf", "application/pdf"],
  [".png", "image/png"],
  [".svg", "image/svg+xml; charset=utf-8"],
  [".webp", "image/webp"],
]);

async function serveFile(response, filePath) {
  const resolvedPath = path.resolve(publicDir, filePath);

  if (!resolvedPath.startsWith(publicDir)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  try {
    const body = await readFile(resolvedPath);
    const contentType =
      contentTypes.get(path.extname(resolvedPath)) ||
      "application/octet-stream";

    response.writeHead(200, {
      "cache-control": "public, max-age=0, must-revalidate",
      "content-type": contentType,
    });
    response.end(body);
  } catch {
    response.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    response.end("Not found\n");
  }
}

const server = http.createServer(async (request, response) => {
  if (request.url === "/health") {
    response.writeHead(200, { "content-type": "application/json" });
    response.end(JSON.stringify({ ok: true }));
    return;
  }

  const url = new URL(request.url || "/", `http://${request.headers.host}`);

  if (appRoutes.has(url.pathname)) {
    await serveFile(response, "index.html");
    return;
  }

  await serveFile(response, url.pathname.slice(1));
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Huasheng listening on port ${port}`);
});
