const express = require('express')
const router = express.Router()

const ItemModel = require('../models/ItemModels')
const { validarItem } = require('../validators/ItemValidator')
const {validarID} = require('../validators/IDValidator')

// rotas
router.get('/itens', async (req, res, next) => {
  const itens = await ItemModel.find()
  res.json(itens)
})

router.get('/itens/:id', validarID, async (req, res, next) => {
  const itemEncontrado = await ItemModel.findById(req.params.id)
  if (!itemEncontrado) {
    return res.status(404).json({ erro: "Não encontrado" })
  }
})

router.post('/itens', validarItem, async (req, res, next) => {
  const itemCriado = await ItemModel.create(req.body)
  res.status(201).json(itemCriado)
})

router.put('/itens/:id', validarID, validarItem, async (req, res, next) => {
  const id = req.params.id
  const itemAtualizado = await ItemModel.findByIdAndUpdate(id, req.body,
    { new: true })
  if (!itemAtualizado) {
    return res.status(404).json({ erro: "Não encontrado" })
  }
  res.json(itemAtualizado)
})

router.delete('/itens/:id', validarID, async (req, res, next) => {
  await ItemModel.findByIdAndDelete(req.params.id)
  res.status(204).send()
})

module.exports = router