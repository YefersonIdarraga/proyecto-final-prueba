import Cita from "../models/ModelCitas.js";

export const listarCitas = async(req, res) =>{
  const cita = await Cita.findAll(req.body)
  if(!cita){
    res.json({
      msg: 'Base de datos vacía'
    })
  } else{
    res.json(cita)
  }
}

export const listarCita = async(req, res) =>{
  const cita= await Cita.findOne({
    where: {id: req.params.id}
  })
  if(!cita){
    res.json({
      msg: 'No existe el elemento en la base de datos'
    })
  } else{
    res.json(cita)
  }
}

export const crearCita = async(req, res) =>{
  const cita= await Cita.create(req.body)
  if(!cita){
    res.json({
      msg: 'No fue posible crear el cita'
    })
  } else{
    res.json({
      msg: 'cita creada correctamente'
    })
  }
}

export const editarCita = async(req, res) =>{
  const cita= await Cita.update(req.body, {where: {id: req.params.id}})
  if(!cita){
    res.json({
      msg: 'No fue posible actualziar el cita'
    })
  } else{
    res.json({
      msg: 'cita Actualizado correctamente'
    })
  }
}
export const eliminarCita = async(req, res) =>{
  const cita= await Cita.destroy({where: {id: req.params.id}})
  if(!cita){
    res.json({
      msg: 'No se pudo eliminar el cita'
    })
  } else{
    res.json({
      msg: 'cita eliminado correctamente'
    })
  }
}
