import http from "node:http";

const port = Number(process.env.PORT || 3000);

const server = http.createServer((request, response) => {
  if (request.url === "/health") {
    response.writeHead(200, { "content-type": "application/json" });
    response.end(JSON.stringify({ ok: true }));
    return;
  }

  response.writeHead(200, { "content-type": "text/plain; charset=utf-8" });
  response.end("Huasheng is running.\n");
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Huasheng listening on port ${port}`);
});
