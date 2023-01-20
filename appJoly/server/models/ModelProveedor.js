import Sequelize from "sequelize";
import dataBase from "../config/conexionDatabase.js";

const Proveedor = dataBase.define('proveedores', {
  nit: {
    type: Sequelize.STRING
  },
  nombre: {
    type: Sequelize.STRING
  },
  nombreRepresentante: {
    type: Sequelize.STRING
  },
  telefono: {
    type: Sequelize.INTEGER
  },
  correo: {
    type: Sequelize.DATE
  },
  correo: {
    type: Sequelize.DATE
  },
  direccion: {
    type: Sequelize.INTEGER
  },
  logo: {
    type: Sequelize.INTEGER
  }
})

export default Proveedor