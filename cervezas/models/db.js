const db = require('diskdb');
db.connect('./data', ['cervezas','bares'])

if (!db.cervezas.find().length) {
    const cerveza = [{
        "Nombre": "DAMM INEDIT",
        "Descripción": "Creada por los cerveceros de Damm junto a Ferrán Adriá y los sumilleres de El Bulli, se elabora con una mezcla de malta de cebada y trigo aromatizada con cilantro, piel de naranja y regaliz.",
        "Graduación": "4,8º",
        "Envase": "Botella de 75cl",
        "Precio": "3,90€"
    }, {
        "Nombre": "ALHAMBRA 1925",
        "Descripción": "Con su característica botella de color verde, se trata de una cerveza extra con una graduación de 6,8º. Se distingue por su peculiar toque acaramelado y por su perfecto y refrescante amargor final.Gran cuerpo y mucho equilibrio.",
        "Graduación": "6,8º",
        "Envase": "Botella de 33 cl.",
        "Precio": "1€"
    }, {
        "Nombre": "MAHOU CINCO ESTRELLAS",
        "Descripción": "Un auténtico clásico entre nuestras cervezas. Muy ligera y agradable, resulta especialmente refrescante. Con una ligera acidez, sabor a cebada tostada y un correcto amargor final.",
        "Graduación": "5,5º",
        "Envase": "Pack de 6 botellines de 25 cl.",
        "Precio": "2,70 euros."
    }, {
        "Nombre": "SAN MIGUEL 1516",
        "Descripción": "Entre las varias opciones de esta marca, una de las más internacionales de las españolas, destaca esta 1516 elaborada según métodos tradicionales. Fresca, amarga y con baja graduación, lo que la hace muy agradable a cualquier hora.",
        "Graduación": "4,2º",
        "Envase": "Botella de 33 cl.",
        "Precio": "0,80€"
    }, {
        "Nombre": "CRUZ CAMPO GRAN RESERVA 1904",
        "Descripción": "Cerveza cien por cien malta, de gran calidad. Intensa y equilibrada, con agradable final amargo. Graduación muy adecuada para acompañar cualquier tipo de comida.",
        "Graduación": "6,4º",
        "Envase": "Botella de 33cl",
        "Precio": "1€"
    }];
    db.cervezas.save(cerveza);
}

module.exports = db