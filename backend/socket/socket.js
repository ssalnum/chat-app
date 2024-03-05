import { Server } from "socket.io";
import http from 'http';
import express from 'express'

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"]
    }
});

export const getReceptorSocketId = (receptorId) => {
    return usuarioSocketMap[receptorId];
}

const usuarioSocketMap = {};

io.on('connection', (socket) => {
    console.log("Um usuário foi conectado", socket.id)

    const usuarioId = socket.handshake.query.usuarioId;
    if(usuarioId != "undefined") usuarioSocketMap[usuarioId] = socket.id;
    io.emit("getUsuariosOnline", Object.keys(usuarioSocketMap));

    socket.on("disconnect", () => {
        console.log("Usuario desconectado", socket.id);
        delete usuarioSocketMap[usuarioId];
        io.emit("getUsuariosOnline", Object.keys(usuarioSocketMap));
    })
})


export { app, io, server }