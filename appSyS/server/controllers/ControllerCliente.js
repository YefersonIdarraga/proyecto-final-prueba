import Cliente from "../models/ModelCliente.js";

export const listarClientes = async(req, res) =>{
  const clientes = await Cliente.findAll(req.body)
  if(!clientes){
    res.json({
      msg: 'Base de datos vacía'
    })
  } else{
    res.json(clientes)
  }
}

export const listarCliente = async(req, res) =>{
  const cliente = await Cliente.findOne({
    where: {id: req.params.id}
  })
  if(!cliente){
    res.json({
      msg: 'No existe el elemento en la base de datos'
    })
  } else{
    res.json(cliente)
  }
}

export const crearCliente = async(req, res) =>{
  const cliente = await Cliente.create(req.body)
  if(!cliente){
    res.json({
      msg: 'No fue posible crear el cliente'
    })
  } else{
    res.json({
      msg: 'Cliente creado correctamente'
    })
  }
}

export const editarCliente = async(req, res) =>{
  const cliente = await Cliente.update(req.body, {where: {id: req.params.id}})
  if(!cliente){
    res.json({
      msg: 'No fue posible actualziar el cliente'
    })
  } else{
    res.json({
      msg: 'Cliente Actualizado correctamente'
    })
  }
}
export const eliminarCliente = async(req, res) =>{
  const cliente = await Cliente.destroy({where: {id: req.params.id}})
  if(!cliente){
    res.json({
      msg: 'No se pudo eliminar el cliente'
    })
  } else{
    res.json({
      msg: 'Cliente eliminado correctamente'
    })
  }
}
