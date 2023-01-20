import express from 'express'
import { crearProducto, editarProducto, eliminarProducto, listarProducto, listarProductos } from '../controllers/ControllerProducto.js'
const ProductoRouter = express.Router()

ProductoRouter.get('/' , listarProductos)
ProductoRouter.get('/:id' , listarProducto)
ProductoRouter.delete('/:id' , eliminarProducto)
ProductoRouter.put('/:id' , editarProducto)
ProductoRouter.post('/' , crearProducto)

export default ProductoRouter