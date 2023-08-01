import path from 'path';
import http from "http";
import { WebSocketServer } from "ws";
import express from "express";

const app = express();
const __dirname = path.resolve();

app.set("view engine", "pug");

app.set("views", __dirname + "/src/views");
app.use("/public", express.static(__dirname + "/src/public"));
app.get("/", (_, res) => res.render("home"));
app.get("/*", (_, res) => res.redirect("/"));

const handleListen = () => console.log('Listening on http://localhost:3000');

const server = http.createServer(app);
const wss = new WebSocketServer({ server });

function handleConnection(socket) {
    console.log(socket)
}
wss.on("connection", handleConnection)

server.listen(3000, handleListen);

//console.log("hello");
//app.listen(3000, handleListen)  