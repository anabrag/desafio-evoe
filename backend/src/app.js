const express = require('express')
const registerRoute = require('./routes/user.route')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
require('dotenv').config();
require('./database/database')

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

registerRoute(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

