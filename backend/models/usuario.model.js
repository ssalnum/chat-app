import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
    nomeCompleto: {
        type: String,
        required: true
    },
    nomeDeUsuario: {
        type: String,
        required: true,
        unique: true
    },
    senha: {
        type: String,
        required: true,
        minlength: 6
    },
    genero: {
        type: String,
        required: true,
        enum: ["masculino", "feminino"]
    },
    imagemDePerfil: {
        type: String,
        default: ""
    }
}, { timestamps: true });

const Usuario = mongoose.model("Usuario", usuarioSchema)

export default Usuario;