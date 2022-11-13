const db = require('../models/db')
const { response, request } = require('express');
const Cerveza = require('../models/cerveza');

async function getBeers(req, res) {
    const {Nombre, Envase} = req.query
    const query = {Nombre, Envase}
    for (const key in query) {
        if (query[key] === undefined) {
          delete query[key];
        }
    }
    const cervezas = await Cerveza.find(query)
    res.json(cervezas)
}

async function getBeer(req = request, res = response) {
    const id = req.params.id
    const beers = await Cerveza.find({ _id: id });
    if (beers.length) {
        res.json(beers);
    } else {
        res.json({ message: `La cerveza ${id} no existe` })
    }

}

async function addBeer(req = request, res = response) {
    const { Nombre, Descripción, Graduación, Envase, Precio } = req.body;
    const cerveza = new Cerveza({ Nombre, Descripción, Graduación, Envase, Precio });

    await cerveza.save();

    res.json({
        cerveza
    });
}

async function deleteBeer(req = request, res = response) {
    const beerId = req.params.id;
    const removed = await Cerveza.deleteOne({ _id: beerId });
    res.json(removed);
}

async function editBeer(req = request, res = response) {
    const beerId = req.params.id;
    const beer = req.body;
    const updatedBeer = await Cerveza.updateOne({ _id: beerId }, beer);

    res.json(updatedBeer);
}

module.exports = { getBeers, getBeer, addBeer, deleteBeer, editBeer}