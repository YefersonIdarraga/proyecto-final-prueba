import express from 'express'
import dataBase from './config/conexionDatabase.js'
import ClienteRouter from './routes/RoutesCliente.js'
import cors from 'cors'
import ProductoRouter from './routes/RoutesProducto.js'
import CitaRouter from './routes/RouterCita.js'

const app = express()
const port = 3100

try {
  await dataBase.authenticate()
  console.log(`Coneccion exitosa a la base de datos`)
  dataBase.sync()
} catch (error) {
  console.log(`No fue posible conectarse a la base de datos`)
  console.log(`Motivo: ${error}`)
}

app.use(express.json())
app.use(cors())

app.use('/productos', ProductoRouter)
app.use('/clientes', ClienteRouter)
app.use('/citas', CitaRouter)

app.listen(port, ()=>{
  console.log(`Servidor corriendo en el puerto ${port}`)
  console.log(`URL Productos: http://localhost:${port}/productos`)
})