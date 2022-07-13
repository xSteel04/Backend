const MetodoPago = require('../models/metodoPago.model')

module.exports = class equipamientoController {
  async list (req, res, next) {
    const list = await MetodoPago.findAll()
    res.send(list)
  }

  async get (req, res, next) {
    const id = req.params.id
    const metodoPago = await MetodoPago.findAll(
      {
        where: {
          idreserva: id,
          estado: 0
        }
      }
    )
    res.send(metodoPago)
  }

  async get2 (req, res, next) {
    const id = req.params.id
    const metodoPago = await MetodoPago.findAll(
      {
        where: {
          idmetodo: id,
        
        }
      }
    )
    res.send(metodoPago)
  }

  async create (req, res, next) {
    const {
    nombreTarjeta,
      numeroTarjeta,
      fechaVence,
      cvc,
      tipoTarjeta,
      idusuarios,
      idreserva,
      costo,
      pago,
      saldo,
      motivo,
      fecha,
      hora,
      estado

    } = req.body
 
    const metodoPago = await MetodoPago.create({
      nombreTarjeta,
      numeroTarjeta,
      fechaVence,
      cvc,
      tipoTarjeta,
      idusuarios,
      idreserva,
      costo,
      pago,
      saldo,
      motivo,
      fecha,
      hora,
      estado,
    })
    res.status(201).send(metodoPago)
  }

  async update (req, res, next) {
    const id = req.params.id
    const {
      nombreTarjeta,
      numeroTarjeta,
      fechaVence,
      cvc,
      tipoTarjeta,
      idusuarios,
      idreserva,
      costo,
      pago,
      saldo,
      motivo,
      fecha,
      hora,
      estado
    } = req.body
    // eslint-disable-next-line max-len
    
    // eslint-disable-next-line camelcase,max-len
  
    const metodoPago = await MetodoPago.update(
      {
      nombreTarjeta,
      numeroTarjeta,
      fechaVence,
      cvc,
      tipoTarjeta,
      idusuarios,
      idreserva,
      costo,
      pago,
      saldo,
      motivo,
      fecha,
      hora,
      estado
      },
      {
        where: {
          idmetodo: id
        }
      }
    )
    res.status(204).send(metodoPago)
  }

  async delete (req, res, next) {
    const id = req.params.id

    const destroyResult = await MetodoPago.destroy({
      where: {
        idmetodo: id
      }
    })
    if (destroyResult) {
      return res.sendStatus(204)
    }

    res.status(500)
  }
}
