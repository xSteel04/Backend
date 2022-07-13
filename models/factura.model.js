const Sequelize = require('sequelize')
const Connection = require('./connection')

const connection = new Connection()
const Factura = connection.sequelize.define(
  'Factura',
  {
    idFactura: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    idreserva : Sequelize.INTEGER,
    idcaja: Sequelize.INTEGER,
    idusuario: Sequelize.INTEGER,
    fecha: Sequelize.DATE,
    hora: Sequelize.TIME,
    pago: Sequelize.FLOAT,
    iva: Sequelize.FLOAT,
    descuento: Sequelize.FLOAT,
    totalpago: Sequelize.FLOAT,
    concepto: Sequelize.STRING,
  },
  {
    tableName: 'factura',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
)

module.exports = Factura
