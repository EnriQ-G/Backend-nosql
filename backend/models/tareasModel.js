const mongoose = require('mongoose');

const tareaSchema = mongoose.Schema({
    texto: {
        type: String,
        required: [true, 'El texto es obligatorio']
    }
},{
    timestamps: true
});

module.exports = mongoose.model('Tarea', tareaSchema);