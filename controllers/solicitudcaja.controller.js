const SolicitudCaja = require('../models/solitudcaja.model')

module.exports = class solicitudcajaController {
  async list (req, res, next) {
    const list = await SolicitudCaja.findAll()
    res.send(list)
  }
  async list2 (req, res, next) {
    const id = req.params.id   
    const solicitud = await SolicitudCaja.findAll(
      {
        where: {
          idsolicitud: id
        }
      }
    )
    res.send(solicitud)
  }
  async list3 (req, res, next) {
    const id = req.params.id   
    const solicitud = await SolicitudCaja.findAll(
      {
        where: {
          idusuario: id
        }
      }
    )
    res.send(solicitud)
  }

  async get (req, res, next) {
    const id = req.params.id
    const solicitud = await SolicitudCaja.findByPk(id)
    res.send(solicitud)
  }

  async update (req, res, next) {
    const id = req.params.id
    const {
      idusuario,
      idusuarioaprobado,
      idCaja,
      // eslint-disable-next-line camelcase
      fecha_apertura,
      // eslint-disable-next-line camelcase
      cantidad_inicial,
      descripcion,
      estado
    } = req.body
    
    const updateResult = await SolicitudCaja.update(
      {
      idusuario ,
      idusuarioaprobado,
      idCaja,
      fecha_apertura,
      cantidad_inicial,
      descripcion,
      estado,
      },
      {
        where: {
          idsolicitud: id
        }
      }
    )
    res.status(204).send(updateResult)
  }

  async create (req, res, next) {
    const {
      idusuario,
      idCaja,
      // eslint-disable-next-line camelcase
      fecha_apertura,
      // eslint-disable-next-line camelcase
      cantidad_inicial,
      descripcion,
      estado
    } = req.body
    if (!idusuario) return res.status(400).send({ message: 'Nombre es requerido' })
    const Solicitud = await SolicitudCaja.create({
      idusuario ,
      idCaja,
      fecha_apertura,
      cantidad_inicial,
      descripcion,
      estado,
    })
    res.status(201).send(Solicitud)
  }
}
