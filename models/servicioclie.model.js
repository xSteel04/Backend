const Sequelize = require('sequelize')
const Connection = require('./connection')

const connection = new Connection()
const Servicioclie = connection.sequelize.define(
  'servicio-cliente',
  {
    idserviciocliente: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    idreserva: Sequelize.INTEGER,
    idservicio: Sequelize.INTEGER,
    cantidad: Sequelize.STRING
  },
  {
    tableName: 'servicio-cliente',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
)

module.exports = Servicioclie
