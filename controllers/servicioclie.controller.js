const ServicioClie = require('../models/servicioclie.model')
const Ciudad = require('../models/ciudad.model')

module.exports = class servicioclieController {
  async list (req, res, next) {
    const list = await ServicioClie.findAll()
    res.send(list)
  }

  async get (req, res, next) {
    const id = req.params.id
    const servicioclie = await ServicioClie.findAll(
      {
        where: {
          idserviciocliente: id
        }
      }
    )
    res.send(servicioclie)
  }

  async update (req, res, next) {
    const id = req.params.id
    const {
      idreserva,
      idservicio,
      cantidad
    } = req.body
    if (!idreserva) return res.status(400).send({ message: 'La reserva es requerido' })
    if (!idservicio) return res.status(400).send({ message: 'El servicio es requerido' })
    if (!cantidad) return res.status(400).send({ message: 'La cantidad es requerido' })
    const ServicioClie = await Ciudad.update(
      {
        idreserva,
        idservicio,
        cantidad
      },
      {
        where: {
          idserviciocliente: id
        }
      }
    )
    res.status(204).send(ServicioClie)
  }

  async create (req, res, next) {
    const {
      idreserva,
      idservicio,
      cantidad
    } = req.body
    // eslint-disable-next-line max-len
    if (!idreserva) return res.status(400).send({ message: 'La reserva es requerido' })
    if (!idservicio) return res.status(400).send({ message: 'El servicio es requerido' })
    if (!cantidad) return res.status(400).send({ message: 'La cantidad es requerido' })

    const servicio = await ServicioClie.create({
      idreserva,
      idservicio,
      cantidad
    })
    res.status(201).send(servicio)
  }
}
