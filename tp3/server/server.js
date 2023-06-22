const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
// was 8081
const corsOption = {
    origin: 'http://localhost:8081'
}

app.use(cors(corsOption))

//models
const db = require('./app/models')

db.connex.sync()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:true}))

//test
app.get('/', (req, res) => {
    res.json({message: 'Welcome'})
})
//route
require('./app/routes/product.route')(app)

// was 8080
const PORT = 8082
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})