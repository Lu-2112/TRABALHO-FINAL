// ESTOQUE CONTROLLER 
const express = require('express');
const router = express.Router();

// Importo o modelo
const EstoqueModel = require('../models/EstoqueModels');

// Importo os validadores
const { validarNovoEstoque, validarAtualizacaoEstoque } = require('../validators/EstoqueValidator');
const { validarID } = require('../validators/IDValidator');

// Rotas
// CRUD - Create, Read, Update, Delete
// Leitura
router.get('/estoque', async (req, res, next) => {
    const itens = await EstoqueModel.find().populate("livro fornecedor");
    res.json(itens);
});

// Leitura por ID
router.get('/estoque/:id', validarID, async (req, res, next) => {
    const itemEncontrado = await EstoqueModel.findById(req.params.id).populate("livro fornecedor");
    if (!itemEncontrado) {
        return res.status(404).json({ erro: 'Item de estoque não encontrado' });
    }
    res.status(200).json(itemEncontrado);
});

// Cadastro
router.post('/estoque', validarNovoEstoque, async (req, res, next) => {
    const dados = req.body;
    const itemCadastrado = await EstoqueModel.create(dados);
    res.status(201).json(itemCadastrado);
});

// Atualização
router.put('/estoque/:id', validarID, validarAtualizacaoEstoque, async (req, res, next) => {
    const id = req.params.id;
    const novosDados = req.body;

    const itemAtualizado = await EstoqueModel.findByIdAndUpdate(id, novosDados, { new: true });

    if (!itemAtualizado) {
        return res.status(404).json({ erro: 'Item de estoque não encontrado!' });
    }

    res.json(itemAtualizado);
});

// Exclusão
router.delete('/estoque/:id', validarID, async (req, res, next) => {
    const id = req.params.id;
    await EstoqueModel.findByIdAndDelete(id);
    res.status(204).json({ message: 'Item de estoque excluído com sucesso!' });
});


// Importando o módulo
module.exports = router;
