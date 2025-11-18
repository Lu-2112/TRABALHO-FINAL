const mongoose = require('mongoose')

const schema = new mongoose.Schema(
  {
    valor: { type: Number, required: true },
    dataVenda: { type: Date, required: true },
    //relacionamento: id pedido
    //relacionamento: id funcionario
  }
)

const VendaModel = mongoose.model('Venda', schema)

module.exports = VendaModel