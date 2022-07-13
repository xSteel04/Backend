const express = require('express')
const router = express.Router()

const Reserva = require('../controllers/reserva.controller')
const reserva = new Reserva()

/* Get categories list */
router.get('/', reserva.list)
router.get('/list1', reserva.list1)
router.get('/list2', reserva.list2)
router.get('/list3', reserva.list3)
router.get('/list4/:id', reserva.list4)
/* Get category by id */
router.get('/:id', reserva.get)
/* Update category */
router.put('/update/:id', reserva.update)

router.put('/cambioEstado/:id', reserva.cambioEstado)
/* Create category */
router.post('/create', reserva.create)
/* Delete category */
router.delete('/delete/:id', reserva.delete)

module.exports = router
