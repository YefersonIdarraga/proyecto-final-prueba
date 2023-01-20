import express from 'express'
import { crearCita, editarCita, eliminarCita, listarCita, listarCitas } from '../controllers/ControllerCitas.js'
const CitaRouter = express.Router()

CitaRouter.get('/' , listarCitas)
CitaRouter.get('/:id' , listarCita)
CitaRouter.delete('/:id' , eliminarCita)
CitaRouter.put('/:id' , editarCita)
CitaRouter.post('/' , crearCita)

export default CitaRouter