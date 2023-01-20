import Sequelize from "sequelize";
import dataBase from "../config/conexionDatabase.js";

const Cita = dataBase.define('citas', {
  fecha: {
    type: Sequelize.STRING
  },
  lugar: {
    type: Sequelize.STRING
  },
  nombreServicio: {
    type: Sequelize.STRING
  },
  descripcionServicio: {
    type: Sequelize.STRING
  },
  imgCliente: {
    type: Sequelize.STRING
  },
  direccionCliente: {
    type: Sequelize.STRING
  }
})

export default Cita