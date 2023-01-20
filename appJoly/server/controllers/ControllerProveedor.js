import Proveedor from "../models/ModelProveedor.js";

export const listarProveedores = async(req, res) =>{
  const proveedor = await Proveedor.findAll(req.body)
  if(!proveedor){
    res.json({
      msg: 'Base de datos vacía'
    })
  } else{
    res.json(proveedor)
  }
}

export const listarProveedor = async(req, res) =>{
  const proveedor= await Proveedor.findOne({
    where: {id: req.params.id}
  })
  if(!proveedor){
    res.json({
      msg: 'No existe el elemento en la base de datos'
    })
  } else{
    res.json(proveedor)
  }
}

export const crearProveedor = async(req, res) =>{
  const proveedor= await Proveedor.create(req.body)
  if(!proveedor){
    res.json({
      msg: 'No fue posible crear el proveedor'
    })
  } else{
    res.json({
      msg: 'proveedor creado correctamente'
    })
  }
}

export const editarProveedor = async(req, res) =>{
  const proveedor= await Proveedor.update(req.body, {where: {id: req.params.id}})
  if(!proveedor){
    res.json({
      msg: 'No fue posible actualziar el proveedor'
    })
  } else{
    res.json({
      msg: 'proveedor Actualizado correctamente'
    })
  }
}
export const eliminarProveedor = async(req, res) =>{
  const proveedor= await Proveedor.destroy({where: {id: req.params.id}})
  if(!proveedor){
    res.json({
      msg: 'No se pudo eliminar el proveedor'
    })
  } else{
    res.json({
      msg: 'proveedor eliminado correctamente'
    })
  }
}
