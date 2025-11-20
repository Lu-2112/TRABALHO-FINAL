const express = require('express')
const router = express.Router()

const PedidoModel = require('../models/PedidoModels')
const { validarPedido } = require('../validators/PedidoValidator')
const { validarID } = require('../validators/IDValidator')

// listar todos
router.get('/pedidos', async (req, res, next) => {
  const pedidos = await PedidoModel.find()
  res.json(pedidos)
})

// listar por id
router.get('/pedidos/:id', validarID, async (req, res, next) => {
  const pedidoEncontrado = await PedidoModel.findById(req.params.id)
  if (!pedidoEncontrado) {
    return res.status(404).json({ erro: "Não encontrado" })
  }
  res.json(pedidoEncontrado)
})

// criar
router.post('/pedidos', validarPedido, async (req, res, next) => {
  const pedidoCriado = await PedidoModel.create(req.body)
  res.status(201).json(pedidoCriado)
})

// atualizar
router.put('/pedidos/:id', validarID, validarPedido, async (req, res, next) => {
  const id = req.params.id
  const pedidoAtualizado = await PedidoModel.findByIdAndUpdate(id, req.body, { new: true })

  if (!pedidoAtualizado) {
    return res.status(404).json({ erro: "Não encontrado" })
  }

  res.json(pedidoAtualizado)
})

// deletar
router.delete('/pedidos/:id', validarID, async (req, res, next) => {
  await PedidoModel.findByIdAndDelete(req.params.id)
  res.status(204).send()
})

module.exports = router