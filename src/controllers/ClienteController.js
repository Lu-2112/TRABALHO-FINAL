const express = require('express')
const router = express.Router()

const ClienteModel = require('../models/ClienteModels')
const { validarCliente } = require('../validators/ClienteValidator')
const {validarID} = require('../validators/IDValidator')

// rotas
router.get('/clientes', async (req, res, next) => {
  const clientes = await ClienteModel.find()
  res.json(clientes)
})

router.get('/clientes/:id', validarID, async (req, res, next) => {
  const clienteEncontrado = await ClienteModel.findById(req.params.id)
  if (!clienteEncontrado) {
    return res.status(404).json({ erro: "Não encontrado" })
  }
})

router.post('/clientes', validarCliente, async (req, res, next) => {
  const clienteCriado = await ClienteModel.create(req.body)
  res.status(201).json(clienteCriado)
})

router.put('/clientes/:id', validarID, validarCliente, async (req, res, next) => {
  const id = req.params.id
  const clienteAtualizado = await ClienteModel.findByIdAndUpdate(id, req.body,
    { new: true })
  if (!clienteAtualizado) {
    return res.status(404).json({ erro: "Não encontrado" })
  }
  res.json(clienteAtualizado)
})

router.delete('/clientes/:id', validarID, async (req, res, next) => {
  await ClienteModel.findByIdAndDelete(req.params.id)
  res.status(204).send()
})

module.exports = router