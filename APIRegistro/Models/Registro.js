
const mongoose = require('mongoose');
const registroSchema = new mongoose.Schema({

    nombre: {type: String, required: true, unique: false},
    apellido: {type: String, required: true, unique: false},
    telefono: {type: Number, required: true, unique: true},
    email: { type: String, required: true, unique: true},
    direccion: {type: String, required: true, unique: false},
    clave: {type: Number, required: true, unique: true}
})

module.exports = mongoose.model('Registro', registroSchema)