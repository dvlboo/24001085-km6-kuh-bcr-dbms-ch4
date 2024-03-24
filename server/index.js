const express = require('express')
const port = 3001

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.status(200).render('index')
})

app.listen(port, () => console.log(`Listening server on port : ${port}`))
