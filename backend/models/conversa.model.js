import mongoose from "mongoose";

const conversaSchema = new mongoose.Schema({
    participantes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Usuario"
        }
    ],
    mensagens: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Mensagem",
            default: [],
        }
    ]
}, { timestamps: true })

const Conversa = mongoose.model("Conversa", conversaSchema);

export default Conversa;