const experss = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = experss();

const httpServer = createServer(app);

app.get("/", (req, res) => {});

app.listen(3000, () => {
  console.log("Server Started");
});

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:9000",
  },
});

io.on("connection", (socket) => {
  socket.join("room:" + 1);

  socket.on("message", (data) => {
    io.to("room:1").emit("sendMessage", data);
  });

  socket.on("disconnect", (data) => {
    console.log("disconnect");
  });
});

httpServer.listen(3001);
