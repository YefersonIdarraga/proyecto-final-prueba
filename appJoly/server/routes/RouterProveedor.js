import express from 'express'
import { crearProveedor, editarProveedor, eliminarProveedor, listarProveedor, listarProveedores } from '../controllers/ControllerProveedor.js'
const ProveedorRouter = express.Router()

ProveedorRouter.get('/' , listarProveedores)
ProveedorRouter.get('/:id' , listarProveedor)
ProveedorRouter.delete('/:id' , eliminarProveedor)
ProveedorRouter.put('/:id' , editarProveedor)
ProveedorRouter.post('/' , crearProveedor)

export default ProveedorRouter