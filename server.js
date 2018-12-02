const express = require('express')
const cors = require('cors')
const app = express()

const PORT = process.env.PORT || 8080

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(__dirname + '/public'));

require('./routes/html-routes.js')(app)

app.listen(PORT, function () {
    console.log(`Now listening on PORT: ${PORT}`)
})