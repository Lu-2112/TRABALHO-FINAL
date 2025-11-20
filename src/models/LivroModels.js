// LIVRO MODEL
const mongoose = require('mongoose');

const LivroSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    autor: { type: String, required: true },
    ano: { type: Number, required: true },
    genero: { type: String, required: true },
    preco: { type: Number, required: true },

    fornecedor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Fornecedor",
        required: true
    }
});

const LivroModel = mongoose.model('Livro', LivroSchema);
module.exports = LivroModel;
