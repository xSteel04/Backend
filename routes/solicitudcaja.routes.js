const express = require('express')
const router = express.Router()

const SolicitudCaja = require('../controllers/solicitudcaja.controller')
const solicitud = new SolicitudCaja()

/* Get categories list */
router.get('/', solicitud.list)
router.get('/list2/:id', solicitud.list2)
router.get('/list3/:id', solicitud.list3)
/* Get category by id */
router.get('/:id', solicitud.get)
/* Update category */
router.put('/update/:id', solicitud.update)
/* Create category */
router.post('/create', solicitud.create)

module.exports = router
