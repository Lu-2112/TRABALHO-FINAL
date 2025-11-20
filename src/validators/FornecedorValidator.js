// FORNECEDOR VALIDATOR
const yup = require('yup');

const fornecedorCadastro = yup.object({
    nome: yup.string().required(),
    email: yup.string().email().required(),
    cnpj: yup.string().required(),
    telefone: yup.string().required(),
    endereco: yup.string().required()
});

const fornecedorAtualizacao = yup.object({
    nome: yup.string(),
    email: yup.string().email(),
    cnpj: yup.string(),
    telefone: yup.string(),
    endereco: yup.string()
});

async function validarNovoFornecedor(req, res, next) {
    try {
        await fornecedorCadastro.validate(req.body);
        next();
    } catch (erro) {
        res.status(400).json({ erro: erro.errors });
    }
}

async function validarAtualizacaoFornecedor(req, res, next) {
    try {
        await fornecedorAtualizacao.validate(req.body);
        next();
    } catch (erro) {
        res.status(400).json({ erro: erro.errors });
    }
}

module.exports = {
    validarNovoFornecedor,
    validarAtualizacaoFornecedor
};
