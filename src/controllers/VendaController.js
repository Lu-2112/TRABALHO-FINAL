const express = require('express')
const router = express.Router()

const VendaModel = require('../models/VendaModel')
const { validarVenda } = require('../validators/VendaValidator')
const {validarID} = require('../validators/IDValidator')

// rotas
router.get('/vendas', async (req, res, next) => {
  const vendas = await VendaModel.find()
  res.json(vendas)
})

router.get('/vendas/:id', validarID, async (req, res, next) => {
  const vendaEncontrada = await VendaModel.findById(req.params.id)
  if (!vendaEncontrada) {
    return res.status(404).json({ erro: "Não encontrado" })
  }
})

router.post('/vendas', validarVenda, async (req, res, next) => {
  const vendaCriada = await VendaModel.create(req.body)
  res.status(201).json(vendaCriada)
})

router.put('/vendas/:id', validarID, validarVenda, async (req, res, next) => {
  const id = req.params.id
  const vendaAtualizada = await VendaModel.findByIdAndUpdate(id, req.body,
    { new: true })
  if (!vendaAtualizada) {
    return res.status(404).json({ erro: "Não encontrado" })
  }
  res.json(vendaAtualizada)
})

router.delete('/vendas/:id', validarID, async (req, res, next) => {
  await VendaModel.findByIdAndDelete(req.params.id)
  res.status(204).send()
})

module.exports = router