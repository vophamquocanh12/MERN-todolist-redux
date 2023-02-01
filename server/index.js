const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()

const bodyParser = require('body-parser')
const morgan = require('morgan')
const dotenv = require('dotenv')

const PORT = 5000

dotenv.config()

// config routes
const todo = require('./routes/todo')

mongoose.set('strictQuery', false)
// connect database
mongoose.connect(process.env.MONGODB_URL, () => {
  console.log('===> Connected to MongoDB <===')
})

app.use(bodyParser.json({ limit: '50mb' }))
app.use(cors())
app.use(morgan('common'))
// morgan 200 is success

app.use('/todos', todo)

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`)
})
