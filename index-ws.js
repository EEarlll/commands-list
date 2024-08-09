const express = require("express");
const server = require("http").createServer();
const app = express();
const PORT = 3000;

app.get("/", function (req, res) {
  res.sendFile("index.html", { root: __dirname });
});

server.on("request", app);

server.listen(PORT, function () {
  console.log(`listening on Port: ${PORT}`);
});

/* Web socket part */

const WebSocketServer = require("ws").Server;
const wss = new WebSocketServer({ server: server });

wss.on("connection", function connection(ws) {
  const numClients = wss.clients.size;

  console.log(`Clients connected: ${numClients}`);

  wss.broadcast(`Current visitor : ${numClients}`);

  if (ws.readyState === ws.OPEN) {
    ws.send("welcome !");
  }

  ws.on("close", function close() {
    wss.broadcast(`Current Visitor: ${wss.clients.size}`);
    console.log("client disconnected");
  });

  ws.on("error", function error() {
    //
  });
});

/**
 * Broadcasts data to all connected clients
 * @param {object} data
 * @void
 */
wss.broadcast = function broadcast(data) {
  console.log(`Broadcasting ${data}`);
  wss.clients.forEach((client) => {
    client.send(data);
  });
};

/* End of Websocket */
