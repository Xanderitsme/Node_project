const route = require('express').Router()

route.get('/customer', (req, res) => {
  res.json({
    id: 1,
    name: 'juanito',
    description: 'software engineer',
    age: 32
  })
})

module.exports = route