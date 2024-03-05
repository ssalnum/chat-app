import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js"
import mensagemRoutes from "./routes/mensagem.routes.js"
import usuarioRoutes from "./routes/usuario.routes.js"
import connectionMongoDB from "./db/connectionMongoDB.js";

import {app, server} from "./socket/socket.js"

const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use(cookieParser())

app.use("/api/auth", authRoutes);
app.use("/api/mensagens", mensagemRoutes);
app.use("/api/usuarios", usuarioRoutes);

server.listen(PORT, ()=> {
    connectionMongoDB();
    console.log(`O servidor está escutando na porta ${PORT}`);
})