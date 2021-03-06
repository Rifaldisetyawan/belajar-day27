require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT
const members = require('./routes/member')
var bodyParser = require('body-parser')
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/members',members)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
