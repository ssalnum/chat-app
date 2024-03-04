import Conversa from "../models/conversa.model.js";
import Mensagem from "../models/mensagem.model.js";

export const getMensagens = async (req, res) => {
    try {
        const { id: conversaComReceptorId } = req.params;
        const emissorId = req.usuario._id;

        const conversa = await Conversa.findOne({
            participantes: { $all: [emissorId, conversaComReceptorId] },
        }).populate("mensagens");

        res.status(200).json(conversa.mensagens);

    } catch (err) {
        console.log("Erro no get Mensagens Controller.", err.message);
        res.status(500).json({ error: "Internal server error." })
    }
}

export const enviarMensagem = async (req, res) => {
    try {
        const { mensagem } = req.body;
        const { id: receptorId } = req.params;
        const emissorId = req.usuario._id;

        let conversa = await Conversa.findOne({
            participantes: { $all: [emissorId, receptorId] }
        })

        if (!conversa) {
            conversa = await Conversa.create({
                participantes: [emissorId, receptorId],
            })
        }

        const novaMensagem = new Mensagem({
            emissorId,
            receptorId,
            mensagem
        })

        if (novaMensagem) {
            conversa.mensagens.push(novaMensagem._id);
            await Promise.all([conversa.save(), novaMensagem.save()]);
        }

        //FEATURE: SOCKET

        res.status(201).json(novaMensagem);

    } catch (err) {
        console.log("Erro no enviar Mensagem Controller.", err.message);
        res.status(500).json({ error: "Internal server error." })
    }
}