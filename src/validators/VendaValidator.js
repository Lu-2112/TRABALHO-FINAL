const yup = require('yup')

const schema = yup.object().shape(
  {
    dataVenda: yup.date().required("Data da venda é obrigatória!"),
    valor: yup.number()
    .required("Valor é obrigatório")
    .min(1.99, "Valor minimo é de 1.99")
    //relacionamento: id pedido
    //relacionamento: id funcionario
  }
)

async function validarVenda(req, res, next) {
  try {
    await schema.validate(req.body, { abortEarly: false })
    next()
  } catch (error) {
    return res.status(400).json({ erros: error.errors })
  }
}

module.exports = { validarVenda }