import jwt from "jsonwebtoken";
import Usuario from "../models/usuario.model.js";

const rotaProtegida = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;

        if (!token) {
            res.status(401).json({ error: "Acesso inautorizado: Token não providenciado!" });
        }

        const descriptografado = jwt.verify(token, process.env.JWT_SECRET);

        if(!descriptografado) {
            res.status(401).json({ error: "Acesso inautorizado: Token inválido!" });
        }

        const usuario = await Usuario.findById(descriptografado.usuarioId).select("-senha");

        if(!usuario) {
            res.status(404).json({ error: "Usuário não encontrado" });
        }

        req.usuario = usuario;

        next();
    } catch (err) {
        console.log("Erro no middleware Rota Protegida.", err.message);
        res.status(500).json({ error: "Internal server error." })
    }
}

export default rotaProtegida;