import Usuario from "../models/usuario.model.js";

export const getUsuariosParaSideBar = async (req, res) => {
    try {
        const UsuarioIdLogado = req.usuario._id;

        const usuariosFiltrados = await Usuario.find({ _id: { $ne: UsuarioIdLogado } })

        res.status(200).json(usuariosFiltrados);
    } catch (err) {
        console.log("Erro em get Usuarios para Side Bar.", err.message);
        res.status(500).json({ error: "Internal server error." })
    }
}