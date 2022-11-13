//DATABASE
const db = require('diskdb');
db.connect('./data', ['bares'])

 if (!db.bares.find().length) {
    const bares = [{
        "Nombre": "Bar Manolete",
        "Descripción": "No te vas sin comer un filete.",
        "Calles": "Calle del Dominos"
    }, {
        "Nombre": "Bar Chapatales",
        "Descripción": "Alioli de calidad.",
        "Calles": "Calle de los Chapatales"
    }, {
        "Nombre": "Bar Navío",
        "Descripción": "Nada que ver con barcos.",
        "Calles": "Calle del Estadio"
    }, {
        "Nombre": "Bar Er Kike",
        "Descripción": "Tapitas gratis con cerveza.",
        "Calles": "Calle de las Monjas"
    }, {
        "Nombre": "Bar La Laguna",
        "Descripción": "El piripi bueno niño.",
        "Calles": "Calle Córdoba"
    }];

    db.bares.save(bares);
 }
 module.exports = db