import express  from "express";
import { getUsuariosParaSideBar } from "../controllers/usuario.controller.js";
import rotaProtegida from "../middleware/rotaProtegida.js";

const router = express.Router();

router.get("/", rotaProtegida, getUsuariosParaSideBar);

export default router;