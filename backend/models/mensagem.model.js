import mongoose from "mongoose";

const mensagemSchema = new mongoose.Schema({
    emissorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usuario",
        required: true
    },
    receptorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usuario",
        required: true
    }, 
    mensagem: {
        type: String,
        required: true
    }
}, {timestamps: true})

const Mensagem = mongoose.model("Mensagem", mensagemSchema);

export default Mensagem;