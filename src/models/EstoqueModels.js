// ESTOQUE MODEL 
const mongoose = require('mongoose');

const EstoqueSchema = new mongoose.Schema({
    livro: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Livro',
        required: true
    },

    item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item',
        required: true
    },

    quantidade: { type: Number, required: true },
    dataEntrada: { type: String, required: true },
    dataSaida: { type: Date, required: true }
});

const EstoqueModel = mongoose.model('Estoque', EstoqueSchema);
module.exports = EstoqueModel;
