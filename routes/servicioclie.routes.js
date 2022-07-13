const express = require('express')
const router = express.Router()

const Servicioclie = require('../controllers/servicioclie.controller')
const servicioclie = new Servicioclie()

/* Get rooms list */
router.get('/', servicioclie.list)
/* Get room by id */
router.get('/:id', servicioclie.get)
/* Create room */
router.post('/create', servicioclie.create)


module.exports = router
