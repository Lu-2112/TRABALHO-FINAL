// ESTOQUE MODEL 
const mongoose = require('mongoose');

const EstoqueSchema = new mongoose.Schema({
    livro: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Livro',
        required: true
    },

    fornecedor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Fornecedor',
        required: true
    },

    quantidade: { type: Number, required: true },
    localizacao: { type: String, required: true },
    dataEntrada: { type: Date, required: true }
});

const EstoqueModel = mongoose.model('Estoque', EstoqueSchema);
module.exports = EstoqueModel;
