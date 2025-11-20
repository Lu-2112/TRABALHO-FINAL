//LIVRO VALIDATOR
const yup = require('yup');

//Validação para cadastro de novo livro
const livroSchemaCadastro = yup.object({
    titulo: yup.string().required(),
    autor: yup.string().required(),
    ano: yup.number().required(),
    genero: yup.string().required(),
    preco: yup.number().required(),
});

//Validação para atualização de livro
const livroSchemaAtualizacao = yup.object({
    titulo: yup.string(),
    autor: yup.string(),
    ano: yup.number(),
    genero: yup.string(),
    preco: yup.number(),
});

async function validarNovoLivro(req, res, next) {
    try {
        await livroSchemaCadastro.validate(req.body);
        next();
    } catch (erro) {
        res.status(400).json({ erro: erro.errors });
    }
}

async function validarAtualizacaoLivro(req, res, next) {
    try {
        await livroSchemaAtualizacao.validate(req.body);
        next();
    } catch (erro) {
        res.status(400).json({ erro: erro.errors });
    }
}

module.exports = {
    validarNovoLivro,
    validarAtualizacaoLivro
};
