const Habitaciones = require('../models/habitaciones.models')
const HabitacionEstado = require('../models/habitacionesEstado.model')

module.exports = class equipamientoController {
  async obtenerTodos (req, res, next) {
    const list = await Habitaciones.findAll()
    res.send(list)
  }

  async list (req, res, next) {
    // const list = await Habitaciones.findAll()
    // res.send(list)
    const disponible = 'Disponible'
    const habitaciones = await Habitaciones.findAll(
      {
        where: {
          estado: !disponible
        }
      }
    )
    res.send(habitaciones)
  }

  async list1 (req, res, next) {
    const oc = 'Ocupada'
    const habitaciones = await Habitaciones.findAll(
      {
        where: {
          estado: oc
        }
      }
    )
    res.send(habitaciones)
  }

  async list2 (req, res, next) {
    const re = 'Reservadas'
    const habitaciones = await Habitaciones.findAll(
      {
        where: {
          estado: re
        }
      }
    )
    res.send(habitaciones)
  }

  async list3 (req, res, next) {
    const limpieza = 'Limpieza'
    const habitaciones = await Habitaciones.findAll(
      {
        where: {
          estado: limpieza
        }
      }
    )
    res.send(habitaciones)
  }

  async get (req, res, next) {
    const id = req.params.id
    const habitaciones = await Habitaciones.findAll(
      {
        where: {
          idcategoriaHab: id
        }
      }
    )
    res.send(habitaciones)
  }
  async get2 (req, res, next) {
    const id = req.params.id
    const habitaciones = await Habitaciones.findAll(
      {
        where: {
          idhabitacion: id
        }
      }
    )
    res.send(habitaciones)
  }


  async update (req, res, next) {
    const id = req.params.id
    const {
      nombre,
      estado,
      descripcion,
      img,
      precio,
      idequipamiento,
      idcategoriaHab
    } = req.body
    if (!id) return res.status(400).send({ message: 'id es requerido' })
    if (!nombre) return res.status(400).send({ message: 'El nombre de la habitacion es requerido' })
    if (!estado) return res.status(400).send({ message: 'El estado de la habitacion es requerido' })
    if (!descripcion) return res.status(400).send({ message: 'La descripcion de la habitacion es requerida' })
    if (!img) return res.status(400).send({ message: 'La imagen de la habitacion es requerida' })
    if (!idequipamiento) return res.status(400).send({ message: 'El equipamiento es requerido' })
    if (!idcategoriaHab) return res.status(400).send({ message: 'La categoria de habitacion es requerida' })
    const habitacion = await Habitaciones.update(
      {
        nombre,
        estado,
        descripcion,
        img,
        precio,
        idequipamiento,
        idcategoriaHab
      },
      {
        where: {
          idhabitacion: id
        }
      }
    )
    res.status(204).send(habitacion)
  }

  async create (req, res, next) {
    const {
      nombre,
      estado,
      descripcion,
      img,
      precio,
      idequipamiento,
      idcategoriaHab
    } = req.body
    if (!nombre) return res.status(400).send({ message: 'El nombre de la habitacion es requerido' })
    if (!estado) return res.status(400).send({ message: 'El estado de la habitacion es requerido' })
    if (!descripcion) return res.status(400).send({ message: 'La descripcion de la habitacion es requerida' })
    if (!img) return res.status(400).send({ message: 'La imagen de la habitacion es requerida' })
    if (!idequipamiento) return res.status(400).send({ message: 'El equipamiento es requerido' })
    if (!idcategoriaHab) return res.status(400).send({ message: 'La categoria de habitacion es requerida' })
    const habitacion = await Habitaciones.create({
      nombre,
      estado,
      descripcion,
      img,
      precio,
      idequipamiento,
      idcategoriaHab
    })
    res.status(201).send(habitacion)
  }

  async delete (req, res, next) {
    const id = req.params.id
    const {
      estado
    } = req.body
    if (!id) return res.status(400).send({ message: 'id es requerido' })
    const destroyResult = await HabitacionEstado.update(
      {
        estado
      },
      {
        where: {
          idhabitacion: id
        }
      }
    )
    if (destroyResult) {
      return res.sendStatus(204)
    }

    res.status(500)
  }
}
