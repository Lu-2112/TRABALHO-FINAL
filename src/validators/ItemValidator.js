const yup = require('yup')

const schema = yup.object().shape(
  {
    nomeDoItem: yup.string()
    .min(3, "O nome precisa de pelo menos 3 caracteres!")
    .max(60, "O nome precisa de no máximo 60 caracteres")
    .required("Nome do Item é obrigatório!"),
    valor: yup.number()
    .required("Valor é obrigatório")
    .min(1.99, "Valor minimo é de 1.99")
    // relacionamento: id fornecedor
  }
)

async function validarItem(req, res, next) {
  try {
    await schema.validate(req.body, { abortEarly: false })
    next()
  } catch (error) {
    return res.status(400).json({ erros: error.errors })
  }
}

module.exports = { validarItem }