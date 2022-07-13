const Reserva = require("../models/reservas.model");
const ReservaEstado = require("../models/reservasEstado.model");
const Usuario = require("../models/usuario.model");

const { sendMessage } = require("../services/sendEmail.services");

module.exports = class equipamientoController {
  async list(req, res, next) {
    const list = await Reserva.findAll();
    res.send(list);
  }

  async get(req, res, next) {
    const id = req.params.id;
    const reserva = await Reserva.findAll({
      where: {
        idusuario: id,
      },
    });
    res.send(reserva);
  }

  async list1(req, res, next) {
    const disponible = 4;
    const reservas = await Reserva.findAll({
      where: {
        estado: disponible,
      },
    });
    res.send(reservas);
  }

  async list2(req, res, next) {
    const disponibles = 1;
    const reservas = await Reserva.findAll({
      where: {
        estado: disponibles,
      },
    });
    res.send(reservas);
  }

  async list3(req, res, next) {
    const disponible = 4;
    const reservas = await Reserva.findAll({
      where: {
        estado: disponible,
      },
    });
    res.send(reservas);
  }
  async list4(req, res, next) {
    const id = req.params.id;
    const reservas = await Reserva.findAll({
      where: {
        idreserva: id,
      },
    });
    res.send(reservas);
  }

  async cambioEstado(req, res) {
    const id = req.params.id;
    const { estado } = req.body;
    if (!id) return res.status(400).send({ message: "id es requerido" });
    await ReservaEstado.update(
      {
        estado,
      },
      {
        where: {
          idreserva: id,
        },
      }
    );

    const reservaUser = await Reserva.findOne({
      where: {
        idreserva: id,
      },
    });
    const user = await Usuario.findOne({
      where: {
        idUsuario: reservaUser.idusuario,
      },
    });

    const settings = {
      MAIL: {
        MAIL_HOST: "smtp.gmail.com",
        MAIL_PORT: 465,
        MAIL_ACCOUNT: "hoteldlido46@gmail.com",
        MAIL_PASSWORD: "mmnbejhzodqmdeyo",
      },
    };

    // send email
    const htmlBody = `<p>Hola ${user.nombre} su estado ha sido cambiado</p>`;
    const htmlBody2 = `<p>Hola ${user.nombre} matthew me la pela</p>`;
    sendMessage(user.email, htmlBody, settings);
    sendMessage(user.email, htmlBody2, settings);
    res.status(204).json({
      msg: "Email Enviado"
    });
  }

  async update(req, res, next) {
    const id = req.params.id;
    const {
      fechaEntrada,
      fechaSalida,
      estado,
      cantPersonas,
      idservicio,
      idhabitacion,
      idusuario,
      idcategoriaHab,
    } = req.body;
    if (!id) return res.status(400).send({ message: "id es requerido" });
    if (!fechaEntrada)
      return res
        .status(400)
        .send({ message: "La fecha de entrada es requerida" });
    if (!fechaSalida)
      return res
        .status(400)
        .send({ message: "La fecha de salida es requerida" });
    if (!estado)
      return res.status(400).send({ message: "El estado es requerido" });
    if (!cantPersonas)
      return res
        .status(400)
        .send({ message: "La cantidad de personas es requerida" });
    if (!idhabitacion)
      return res.status(400).send({ message: "La habitacion es requerida" });
    if (!idusuario)
      return res.status(400).send({ message: "El usuario es requerido" });
    const reserva = await Reserva.update(
      {
        fechaEntrada,
        fechaSalida,
        estado,
        cantPersonas,
        idservicio,
        idhabitacion,
        idusuario,
        idcategoriaHab,
      },
      {
        where: {
          idreserva: id,
        },
      }
    );
    res.status(204).send(reserva);
  }

  async create(req, res, next) {
    const {
      fechaEntrada,
      fechaSalida,
      estado,
      cantPersonas,
      idservicio,
      idhabitacion,
      idusuario,
      idcategoriaHab,
    } = req.body;
    if (!fechaEntrada)
      return res
        .status(400)
        .send({ message: "La fecha de entrada es requerida" });
    if (!fechaSalida)
      return res
        .status(400)
        .send({ message: "La fecha de salida es requerida" });
    if (!estado)
      return res.status(400).send({ message: "El estado es requerido" });
    if (!cantPersonas)
      return res
        .status(400)
        .send({ message: "La cantidad de personas es requerida" });
    if (!idhabitacion)
      return res.status(400).send({ message: "La habitacion es requerida" });
    if (!idusuario)
      return res.status(400).send({ message: "El usuario es requerido" });
    const fechaInicio = new Date(req.body.fechaEntrada).getTime();
    const fechaFin = new Date(req.body.fechaSalida).getTime();
    const diff = fechaFin - fechaInicio;
    const cantDay = diff / (1000 * 60 * 60 * 24);
    const reserva = await Reserva.create({
      fechaEntrada,
      fechaSalida,
      estado,
      cantPersonas,
      idservicio,
      idhabitacion,
      idusuario,
      idcategoriaHab,
      dias: cantDay,
    });
    res.status(201).send(reserva);
  }

  async delete(req, res, next) {
    const id = req.params.id;
    const { estado } = req.body;
    if (!id) return res.status(400).send({ message: "id es requerido" });
    // if (!estado) return res.status(400).send({ message: 'El estado es requerido' })
    const destroyResult = await Reserva.update(
      {
        estado,
      },
      {
        where: {
          idreserva: id,
        },
      }
    );
    if (destroyResult) {
      return res.sendStatus(204);
    }

    res.status(500);
  }
};
