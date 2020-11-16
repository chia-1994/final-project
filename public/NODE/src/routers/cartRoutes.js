const express = require('express')
const app = express()
const router = express.Router()

const db = require('../db_connect2')

router.get('/', (req, res) => {
  res.send('123')
})

router.get('/cart', (req, res) => {
  db.query('SELECT * FROM tsao_products').then(([results]) => {
    res.json(results)
  })
})

module.exports = router
