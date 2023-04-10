const express = require('express')
const app = express()
const port = 5001
const open = require('open');

app.get('/', async (req, res) => {
  console.log("click")
  await open('https://sindresorhus.com');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})