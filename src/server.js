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
  "/quality",
  "/contact",
]);
const trailingSlashRoutes = new Set([
  "/products/bus-shelters",
  "/products/advertising-light-boxes",
  "/products/metal-kiosks",
  "/products/precision-metal-oem",
]);

const contentTypes = new Map([
  [".css", "text/css; charset=utf-8"],
  [".html", "text/html; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".jsx", "text/jsx; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".txt", "text/plain; charset=utf-8"],
  [".xml", "application/xml; charset=utf-8"],
  [".webmanifest", "application/manifest+json; charset=utf-8"],
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

async function serveAppRoute(response, pathname) {
  const routeFile = pathname === "/"
    ? "index.html"
    : path.join(pathname.slice(1), "index.html");
  await serveFile(response, routeFile);
}

const server = http.createServer(async (request, response) => {
  if (request.url === "/health") {
    response.writeHead(200, { "content-type": "application/json" });
    response.end(JSON.stringify({ ok: true }));
    return;
  }

  const url = new URL(request.url || "/", `http://${request.headers.host}`);
  const host = request.headers.host || "";
  const forwardedProto = request.headers["x-forwarded-proto"];
  if (host.startsWith("www.") || forwardedProto === "http") {
    const canonicalHost = host.replace(/^www\./, "") || "hua-sheng.org";
    response.writeHead(301, {
      location: `https://${canonicalHost}${url.pathname}${url.search}`,
    });
    response.end();
    return;
  }

  if (url.pathname === "/cases") {
    response.writeHead(301, { location: "/projects" });
    response.end();
    return;
  }

  if (trailingSlashRoutes.has(url.pathname)) {
    response.writeHead(301, { location: `${url.pathname}/` });
    response.end();
    return;
  }

  if (appRoutes.has(url.pathname)) {
    await serveAppRoute(response, url.pathname);
    return;
  }

  const filePath = url.pathname.endsWith("/")
    ? path.join(url.pathname.slice(1), "index.html")
    : url.pathname.slice(1);
  await serveFile(response, filePath);
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Huasheng listening on port ${port}`);
});
