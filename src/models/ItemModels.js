const mongoose = require('mongoose')

const schema = new mongoose.Schema(
  {
    nomeDoItem: { type: String, required: true },
    valor: { type: Number, required: true },
    fornecedor: { type: mongoose.Schema.Types.ObjectId, ref: 'Fornecedor', required: true }
  }
)

const ItemModel = mongoose.model('Item', schema)

module.exports = ItemModel