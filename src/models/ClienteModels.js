const mongoose = require('mongoose')

const schema = new mongoose.Schema(
  {
    nome: { type: String, required: true },
    cpf: { type: String, required: true },
    email: { type: String, required: true },
    dataNascimento: { type: Date, required: true }
  }
)

const ClienteModel = mongoose.model('Cliente', schema)

module.exports = ClienteModel