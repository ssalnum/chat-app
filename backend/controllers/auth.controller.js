import bcryptjs from "bcryptjs"
import Usuario from "../models/usuario.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
    try {
        const { nomeCompleto, nomeDeUsuario, senha, confirmarSenha, genero } = req.body;
        if (senha !== confirmarSenha) {
            return res.status(400).json({ error: "As senhas não coincidem." })
        }

        const usuario = await Usuario.findOne({ nomeDeUsuario })

        if (usuario) {
            return res.status(400).json({ error: "Nome de usuário já registrado." })
        }

        const salt = await bcryptjs.genSalt(10);
        const senhaHasheada = await bcryptjs.hash(senha, salt);

        const imagemDePerfilMasculino = `https://avatar.iran.liara.run/public/boy?nomeDeUsuario=${nomeDeUsuario}`;
        const imagemDePerfilFeminino = `https://avatar.iran.liara.run/public/girl?nomeDeUsuario=${nomeDeUsuario}`;

        const novoUsuario = new Usuario({
            nomeCompleto,
            nomeDeUsuario,
            senha: senhaHasheada,
            genero,
            imagemDePerfil: genero === "masculino" ? imagemDePerfilMasculino : imagemDePerfilFeminino
        })

        if (novoUsuario) {
            generateTokenAndSetCookie(novoUsuario._id, res);
            await novoUsuario.save();

            res.status(201).json({
                _id: novoUsuario._id,
                nomeCompleto: novoUsuario.nomeCompleto,
                nomeDeUsuario: novoUsuario.nomeDeUsuario,
                imagemDePerfil: novoUsuario.imagemDePerfil,
            });
        } else {
            res.status(400).json({ error: "Dados de usuário inválidos." });
        }
    } catch (err) {
        console.log("Erro no signUp Controller.", error.message);
        res.status(500).json({ error: "Internal server error." })
    }
};

export const login = async (req, res) => {
    try {
        const { nomeDeUsuario, senha } = req.body;
        const usuario = await Usuario.findOne({ nomeDeUsuario });
        const aSenhaEstaCorreta = await bcryptjs.compare(senha, usuario?.senha || "");

        if (!usuario || !aSenhaEstaCorreta) {
            return res.status(400).json({ error: "Usuario ou Senha inválidos." })
        }

        generateTokenAndSetCookie(usuario._id, res);

        res.status(200).json({
            _id: usuario._id,
            nomeCompleto: usuario.nomeCompleto,
            nomeDeUsuario: usuario.nomeDeUsuario,
            imagemDePerfil: usuario.imagemDePerfil,
        });
    } catch (err) {
        console.log("Erro no login Controller.", err.message);
        res.status(500).json({ error: "Internal server error." })
    }
};

export const logout = async (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ message: "Sessão finalizada com sucesso." })
    } catch (err) {
        console.log("Erro no login Controller.", err.message);
        res.status(500).json({ error: "Internal server error." })
    }
};
