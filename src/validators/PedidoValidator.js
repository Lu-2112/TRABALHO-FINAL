const yup = require("yup");

const schema = yup.object().shape(
{
  codigo: yup
    .string()
    .required("Código do pedido é obrigatório!")
    .min(3, "Código deve ter no mínimo 3 caracteres!")
    .max(20, "Código deve ter no máximo 20 caracteres!"),

  descricao: yup
    .string()
    .required("Descrição é obrigatória!")
    .min(5, "Descrição deve ter no mínimo 5 caracteres!")
    .max(200, "Descrição deve ter no máximo 200 caracteres!"),

  dataPedido: yup
    .date()
    .transform((value, originalValue) => {
      if (typeof originalValue === "string") {
        const parsedDate = new Date(originalValue);
        return isNaN(parsedDate) ? value : parsedDate;
      }
      return value;
    })
    .typeError("Data do pedido deve ser uma data válida!")
    .required("Data do pedido é obrigatória!"),

  valorTotal: yup
    .number()
    .required("O valor total é obrigatório!")
    .min(0, "O valor não pode ser negativo!"),

  status: yup
    .string()
    .oneOf(["pendente", "pago", "cancelado"], "Status inválido!")
});

async function validarPedido(req, res, next) {
  try {
    await schema.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    return res.status(400).json({ erros: error.errors });
  }
}

module.exports = { validarPedido };