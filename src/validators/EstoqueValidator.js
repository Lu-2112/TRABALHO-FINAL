// ESTOQUE VALIDATOR
const yup = require('yup');

const estoqueCadastro = yup.object({
    livro: yup.string().required(),
    fornecedor: yup.string().required(),
    quantidade: yup.number().required(),
    localizacao: yup.string().required(),
    dataEntrada: yup.date().required()
});

const estoqueAtualizacao = yup.object({
    livro: yup.string(),
    fornecedor: yup.string(),
    quantidade: yup.number(),
    localizacao: yup.string(),
    dataEntrada: yup.date()
});

async function validarNovoEstoque(req, res, next) {
    try {
        await estoqueCadastro.validate(req.body);
        next();
    } catch (erro) {
        res.status(400).json({ erro: erro.errors });
    }
}

async function validarAtualizacaoEstoque(req, res, next) {
    try {
        await estoqueAtualizacao.validate(req.body);
        next();
    } catch (erro) {
        res.status(400).json({ erro: erro.errors });
    }
}

module.exports = {
    validarNovoEstoque,
    validarAtualizacaoEstoque
};
