require('dotenv').config()

const express = require('express')
const router = require('./routes')
const fileUpload = require('express-fileupload')

const app = express()
const port = 3001

app.use(express.json())
app.use(
  fileUpload({
    useTempFiles : true
  })
)

app.use(express.static('public'))

app.use('/api',router)

app.use('*', (req, res) => {

  const response = {
    data : null,
    message : "Route Not Found!!!"
  }

  res.status(400).json(response)
})

// Error Middleware
app.use((err, req, res, next) => {
  let statusCode = 500
  let message = "Internal Server Error"

  if (err.statusCode) {
    statusCode = err.statusCode
  }
  if (err.message) {
    message = err.message
  }

  res.status(statusCode).json({
    data : null,
    message
  })
})

app.listen(port, () => console.log(`Listening server on port : ${port}`))