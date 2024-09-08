// server.js
import { Server } from "socket.io";
import http from "http";
import express from "express";
import path from "path";

export class MyServer {
  constructor(port) {
    this.app = express();
    this.server = http.createServer(this.app);
    this.io = new Server(this.server);
    console.log("Server constructor: ", port);
    this.port = port;
    this.start();
    this.serveDashboard();
  }

  serveDashboard() {
    this.app.get("/", (req, res) => {
      const dashboardPath = new URL("./multi_dashboard.html", import.meta.url)
        .pathname;
      const decodedPath = decodeURIComponent(dashboardPath);
      const normalizedPath = path.normalize(decodedPath);
      console.log(normalizedPath);
      res.sendFile(normalizedPath);
    });
  }

  start() {
    // let rando_port = Math.floor(Math.random() * 10000) + 1;
    // rando_port = 3000;
    this.server.listen(this.port, () => {
      console.log("Dashboard server running on http://localhost:" + this.port);
    });
  }

  emitMessage(event, data) {
    this.io.emit(event, data);
  }
}

// export default new MyServer();
