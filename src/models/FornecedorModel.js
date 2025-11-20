// FORNECEDOR MODEL 
const mongoose = require('mongoose');

const FornecedorSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true },
    cnpj: { type: String, required: true },
    telefone: { type: String, required: true },
    endereco: { type: String, required: true },

    livrosFornecidos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Livro'
    }]
});

const FornecedorModel = mongoose.model('Fornecedor', FornecedorSchema);
module.exports = FornecedorModel;
