const { Schema, model } = require('mongoose');

const BaresSchema = Schema({
    Nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: true,
        minlength:[1, 'El nombre no puede ser menor a 1 caracteres']
    },
    Direccion: {
        type: String,
        required: [true, 'La Dirección es obligatoria'],
        
    },
    Telefono: {
        type: String,
        required: [true, 'El teléfono es obligario'],
        maxlength:[9,'El telefono tiene que tener 9 caracteres'],
        minlength:[8, 'El nombre no puede ser menor a 8 caracteres']
    },
    Ciudad: {
        type: String,
    },
});

module.exports = model( 'Bares', BaresSchema );