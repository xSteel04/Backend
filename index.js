const express = require('express')
const cors = require('cors')
const app = express()
const Connection = require('./models/connection')
const { associations } = require('./models/associations')

const PORT = process.env.PORT || 3000

const authenticationRoutes = require('./routes/authentication.routes')
const bookingsRoutes = require('./routes/bookings.routes')
const categoriesRoutes = require('./routes/categories.routes')
const checkInsRoutes = require('./routes/check-ins.routes')
const checkOutsRoutes = require('./routes/check-outs.routes')
const equipmentsRoutes = require('./routes/equipments.routes')
const featuresRoutes = require('./routes/features.routes')
const guestsRoutes = require('./routes/guests.routes')
const imagesRoutes = require('./routes/images.routes')
const roomsRoutes = require('./routes/rooms.routes')

// nuevos requerimientos.
const paisRoutes = require('./routes/pais.routes')
const ciudadRoutes = require('./routes/ciudad.routes')
const actividadJuridicaRoutes = require('./routes/ActividadJuridica.routes')
const tipoentidadRoutes = require('./routes/tipoEntidad.routes')
const entidadRoutes = require('./routes/entidad.routes')
const rolRoutes = require('./routes/rol.routes')
const usuarioRoutes = require('./routes/usuario.routes')
const usuariorolRoutes = require('./routes/usuarioRol.routes')
const categoriaHabRoutes = require('./routes/categoriaHab.routes')
const equipamientoRoutes = require('./routes/equipamientoHab.routes')
const habitacionesRoutes = require('./routes/habitaciones.routes')
// const servicioRoutes = require('./routes/servicios.routes')
const servicioRoutes = require('./routes/servicioclie.routes')
const serviciosRoutes= require('./routes/servicios.routes')
const cajaRoutes = require('./routes/caja.routes')
const reservaRoutes = require('./routes/reserva.routes')
const metodopagoRoutes = require('./routes/metodoPago.routes')
const facturaRoutes = require('./routes/factura.routes')
const acompananteRoutes = require('./routes/acompanante.routes')
const authenticationAdminRoutes = require('./routes/authentificacionAdmin.routes')
const solicitudcajaRoutes = require('./routes/solicitudcaja.routes')

const email = require('./routes/email.route')
app.use(
  cors({
    origin: ['http://localhost:4000'],
    credentials: true
  })
)

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Up and running')
})

app.use('/authenticacionAdmin', authenticationAdminRoutes)
app.use('/authentication', authenticationRoutes)
app.use('/bookings', bookingsRoutes)
app.use('/categories', categoriesRoutes)
app.use('/check-ins', checkInsRoutes)
app.use('/check-outs', checkOutsRoutes)
app.use('/equipments', equipmentsRoutes)
app.use('/features', featuresRoutes)
app.use('/guests', guestsRoutes)
app.use('/images', imagesRoutes)
app.use('/rooms', roomsRoutes)
// nuevos requerimientos.
app.use('/pais', paisRoutes)
app.use('/ciudad', ciudadRoutes)
app.use('/actividadJuridica', actividadJuridicaRoutes)
app.use('/tipoentidad', tipoentidadRoutes)
app.use('/entidad', entidadRoutes)
app.use('/rol', rolRoutes)
app.use('/usuario', usuarioRoutes)
app.use('/usuariorol', usuariorolRoutes)
app.use('/categoriaHab', categoriaHabRoutes)
app.use('/equipamiento', equipamientoRoutes)
app.use('/habitaciones', habitacionesRoutes)
app.use('/caja', cajaRoutes)
app.use('/reserva', reservaRoutes)
app.use('/metodoPago', metodopagoRoutes)
app.use('/factura', facturaRoutes)
app.use('/acompanante', acompananteRoutes)
app.use('/servicioclie', servicioRoutes)
app.use('/servicios', serviciosRoutes)
app.use('/solicitudcaja', solicitudcajaRoutes)
app.use('/email', email)


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
  const connection = new Connection()
  connection.sequelize
    .authenticate()
    .then(() => {
      console.log('Database connected')
      associations().then(() => {
        console.log('Models associated')
      })
    })
    .catch((error) => console.error(error))
})
