import express from 'express'
import { crearCliente, editarCliente, eliminarCliente, listarCliente, listarClientes } from '../controllers/ControllerCliente.js'
const ClienteRouter = express.Router()

ClienteRouter.get('/' , listarClientes)
ClienteRouter.get('/:id' , listarCliente)
ClienteRouter.delete('/:id' , eliminarCliente)
ClienteRouter.put('/:id' , editarCliente)
ClienteRouter.post('/' , crearCliente)

export default ClienteRouter