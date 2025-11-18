const mongoose = require('mongoose')

const schema = new mongoose.Schema(
  {
    nomeDoItem: { type: String, required: true },
    valor: { type: Number, required: true }
    // relacionamento: id fornecedor
  }
)

const ItemModel = mongoose.model('Item', schema)

module.exports = ItemModel