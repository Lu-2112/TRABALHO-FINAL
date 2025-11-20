// FORNECEDOR CONTROLLER 
const express = require('express');
const router = express.Router();

// Importo o modelo
const FornecedorModel = require('../models/FornecedorModel');

// Importo os validadores
const { validarNovoFornecedor, validarAtualizacaoFornecedor } = require('../validators/FornecedorValidator');
const { validarNovoEstoque } = require('../validators/EstoqueValidator');
const { validarID } = require('../validators/IDValidator');

// Rotas
// Leitura
router.get('/fornecedores', async (req, res, next) => {
    const fornecedores = await FornecedorModel.find();
    res.json(fornecedores);
});

// Leitura por ID
router.get('/fornecedores/:id', validarID, async (req, res, next) => {
    const fornecedorEncontrado = await FornecedorModel.findById(req.params.id);
    if (!fornecedorEncontrado) {
        return res.status(404).json({ erro: 'Fornecedor não encontrado' });
    }
    res.status(200).json(fornecedorEncontrado);
});

// Cadastro
router.post('/fornecedores', validarNovoFornecedor, async (req, res, next) => {
    const dados = req.body;
    const fornecedorCadastrado = await FornecedorModel.create(dados);
    res.status(201).json(fornecedorCadastrado);
});

// Atualização
router.put('/fornecedores/:id', validarID, validarAtualizacaoFornecedor, async (req, res, next) => {
    const id = req.params.id;
    const novosDados = req.body;

    const fornecedorAtualizado = await FornecedorModel.findByIdAndUpdate(id, novosDados, { new: true });

    if (!fornecedorAtualizado) {
        return res.status(404).json({ erro: 'Fornecedor não encontrado!' });
    }

    res.json(fornecedorAtualizado);
});

// Exclusão
router.delete('/fornecedores/:id', validarID, async (req, res, next) => {
    const id = req.params.id
    await FornecedorModel.findByIdAndDelete(id);
    res.status(204).send("Fornecedor excluído com sucesso!");
});


// Importando o módulo
module.exports = router;
