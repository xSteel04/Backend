const Sequelize = require('sequelize')
const Connection = require('./connection')

const connection = new Connection()
const Solicitud = connection.sequelize.define(
  'Solicitud',
  {
    idsolicitud: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    idusuario: Sequelize.INTEGER,
    idusuarioaprobado: Sequelize.INTEGER,
    idCaja: Sequelize.INTEGER,
    fecha_apertura: Sequelize.TIME,
    cantidad_inicial: Sequelize.STRING,
    descripcion: Sequelize.STRING,
    estado: Sequelize.INTEGER
  },
  {
    tableName: 'solicitudcaja',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
)

module.exports = Solicitud
