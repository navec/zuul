const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Second App')
})

app.listen(3010, function () {
  console.log('Example app listening on port 3010!')
})