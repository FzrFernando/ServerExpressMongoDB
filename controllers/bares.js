const db = require('../models/db')
const { response, request } = require('express');
const bares = require('../models/bares');

async function addBar(req = request, res = response) {
    const { Nombre, Direccion, Telefono, Ciudad } = req.body;
    const bar = new bares({ Nombre, Direccion, Telefono, Ciudad });

    await bar.save();

    res.json({
        bar
    });
}

async function getBares(req, res) {
    const {Nombre, Telefono,Direccion,Ciudad} = req.query
    const query = {Nombre, Telefono,Direccion,Ciudad}
    for (const key in query) {
        if (query[key] === undefined) {
          delete query[key];
        }
      }
    const bar = await bares.find(query)
    res.json(bar)
}
async function getBar(req = request, res = response) {
    const id = req.params.Nombre
    const barElegido = await bares.find({ Nombre: id });
    if (barElegido.length) {
        res.json(barElegido);
    } else {
        res.json({ message: `El bar ${id} no existe` })
    }

}
async function deleteBar(req , res) {
    const barId = req.params.id;
    const borrado=await bares.deleteOne({ _id: barId });
    res.json(borrado);
}
async function editBar(req = request, res = response) {
    const Id = req.params.id;
    const barNuevo = req.body;
    const actualizaBar = await bares.updateOne({ _id: Id }, barNuevo);

    res.json(actualizaBar);
}
module.exports = { addBar,getBares,getBar,deleteBar,editBar}