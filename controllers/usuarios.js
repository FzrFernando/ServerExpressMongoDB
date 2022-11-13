const db = require('../models/db')
const { response, request } = require('express');
const usuarios = require('../models/usuarios');

async function addUsuario(req = request, res = response) {
    const { Nombre, apellidos, nick, email,contrasenna } = req.body;
    const usuario = new usuarios({ Nombre, apellidos, nick, email,contrasenna});

    await usuario.save();

    res.json({
        usuario
    });
}

async function getUsuarios(req, res) {
    const {Nombre, nick,apellidos,email,contrasenna} = req.query
    const query = {Nombre, nick,apellidos,email,contrasenna}
    for (const key in query) {
        if (query[key] === undefined) {
          delete query[key];
        }
      }
    const usu = await usuarios.find(query)
    res.json(usu)
}

async function getUsuario(req = request, res = response) {
    const id = req.params.id
    const usuarioDevuelto = await usuarios.find({ _id: id });
    if (usuarioDevuelto.length) {
        res.json(usuarioDevuelto);
    } else {
        res.json({ message: `El usuario con el ${id} no existe` })
    }

}

async function deleteUsuario(req , res) {
    const usuarioId = req.params.id;
    const borrado=await usuarios.deleteOne({ _id: usuarioId });
    res.json(borrado.acknowledged);
}

async function editUsuario(req = request, res = response) {
    const usuarioId = req.params.id;
    const usuarioNuevo = req.body;
    const actualizaUsuario = await usuarios.updateOne({ _id: usuarioId }, usuarioNuevo);

    res.json(actualizaUsuario);
}

module.exports = { addUsuario,getUsuarios,getUsuario,deleteUsuario,editUsuario}