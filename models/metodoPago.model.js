const Sequelize = require('sequelize')
const Connection = require('./connection')

const connection = new Connection()
const MetodoPago = connection.sequelize.define(
  'MetodoPago',
  {
    idmetodo: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombreTarjeta: Sequelize.STRING,
    numeroTarjeta: Sequelize.STRING,
    fechaVence: Sequelize.DATE,
    cvc: Sequelize.INTEGER,
    tipoTarjeta: Sequelize.STRING,
    idusuarios: Sequelize.INTEGER,
    idreserva:Sequelize.INTEGER,
    costo: Sequelize.DOUBLE,
    pago: Sequelize.DOUBLE,
    saldo: Sequelize.DOUBLE,
    estado:Sequelize.INTEGER,
    fecha:Sequelize.DATE,
    hora:Sequelize.TIME,
    motivo: Sequelize.STRING,
  },
  {
    tableName: 'metodopago',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
)

module.exports = MetodoPago
