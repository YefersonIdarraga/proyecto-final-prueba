import Producto from "../models/ModelProducto.js";

export const listarProductos = async(req, res) =>{
  const productos = await Producto.findAll(req.body)
  if(!productos){
    res.json({
      msg: 'Base de datos vacía'
    })
  } else{
    res.json(productos)
  }
}

export const listarProducto = async(req, res) =>{
  const producto = await Producto.findOne({
    where: {id: req.params.id}
  })
  if(!producto){
    res.json({
      msg: 'No existe el elemento en la base de datos'
    })
  } else{
    res.json(producto)
  }
}

export const crearProducto = async(req, res) =>{
  const producto = await Producto.create(req.body)
  if(!producto){
    res.json({
      msg: 'No fue posible crear el producto'
    })
  } else{
    res.json({
      msg: 'Producto creado correctamente'
    })
  }
}

export const editarProducto = async(req, res) =>{
  const producto = await Producto.update(req.body, {where: {id: req.params.id}})
  if(!producto){
    res.json({
      msg: 'No fue posible actualziar el producto'
    })
  } else{
    res.json({
      msg: 'Producto Actualizado correctamente'
    })
  }
}
export const eliminarProducto = async(req, res) =>{
  const producto = await Producto.destroy({where: {id: req.params.id}})
  if(!producto){
    res.json({
      msg: 'No se pudo eliminar el producto'
    })
  } else{
    res.json({
      msg: 'Producto eliminado correctamente'
    })
  }
}
