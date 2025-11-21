const yup = require('yup')
const mongoose = require('mongoose')

const schema = yup.object().shape(
  {
    nome: yup.string()
    .required("Nome do cliente é obrigatório!")
    .min(3, "Nome do cliente deve ter no mínimo 3 caracteres!")
    .max(100, "Nome do cliente deve ter no máximo 100 caracteres!"),
    cpf: yup.string().required("CPF é obrigatório!"),
    email: yup.string().email("Email inválido!").required("Email é obrigatório!"),
    dataNascimento: yup.date().required("Data de nascimento é obrigatória!")
  }
)

async function validarCliente(req, res, next) {
  try {
    await schema.validate(req.body, { abortEarly: false })
    next()
  } catch (error) {
    return res.status(400).json({ erros: error.errors })
  }
}

module.exports = { validarCliente }