import http from "http";

const PORT = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.writeHeader("Content-Type", "plain/text");
  res.end("Hello world");
});

server.listen(PORT, () => {
  console.log(`Server is being listend at ${PORT}`);
});
