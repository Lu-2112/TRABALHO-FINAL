const mongoose = require('mongoose')

const schema = new mongoose.Schema(
  {
    valor: { type: Number, required: true },
    dataVenda: { type: Date, required: true },
    pedido: { type: mongoose.Schema.Types.ObjectId, ref: 'Pedido', required: true },
    funcionario: { type: mongoose.Schema.Types.ObjectId, ref: 'Funcionario', required: true }
  }
)

const VendaModel = mongoose.model('Venda', schema)

module.exports = VendaModel