import express  from "express";
import { enviarMensagem, getMensagens } from "../controllers/mensagem.controller.js";
import rotaProtegida from "../middleware/rotaProtegida.js";

const router = express.Router();

router.get("/:id", rotaProtegida, getMensagens)
router.post("/enviar/:id", rotaProtegida, enviarMensagem);

export default router;
