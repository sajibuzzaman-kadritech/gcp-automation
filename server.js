const express = require('express')
const app = express()
const port = 5001
const open = require('open');

app.get('/', async (req, res) => {
  res.send("Hello world-vercel")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})