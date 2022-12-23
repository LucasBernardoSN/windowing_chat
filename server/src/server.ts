import { Socket } from "socket.io";
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);

const PORT = process.env.PORT || 7777;

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use((req: any, res: any, next: any) => {
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5173");
  res.header("Access-Control-Allow-Headers", "http://127.0.0.1:5173");
  next();
});

io.on("connection", (socket: Socket) => {
  socket.on("message", (message: string) => {
    socket.broadcast.emit("message", message);
  });
});

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
