const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/ruta1', (req, res) => {
  res.json({ message: 'una respuesta' })
})

app.use('/api', require('./routes/index'))

app.use(cors())

app.listen(3000, (err) => {
  if (err) console.log('an error ocurred')
  console.log('server running on port 3000')
})