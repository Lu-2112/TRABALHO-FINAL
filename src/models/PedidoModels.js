const mongoose = require('mongoose')

const schema = new mongoose.Schema(
  {
    codigo: { 
      type: String, 
      required: true 
    },

    descricao: { 
      type: String, 
      required: true,
      minlength: 5,
      maxlength: 200
    },

    dataPedido: { 
      type: Date, 
      required: true 
    },

    valorTotal: { 
      type: Number, 
      required: true,
      min: 0
    },

    status: { 
      type: String, 
      enum: ["pendente", "pago", "cancelado"],
      default: "pendente"
    }
  },
  { timestamps: true }
)

const PedidoModel = mongoose.model('Pedido', schema)

module.exports = PedidoModel
