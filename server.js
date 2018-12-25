const express = require('express')
const app = express()
require("dotenv").config()

const PORT = process.env.PORT || 8080

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(__dirname + '/public'));

require('./routes/html-routes.js')(app)
require('./routes/api-routes.js')(app)

app.listen(PORT, function () {
    console.log(`Now listening on PORT: ${PORT}`)
})

// YOU WERE FIGURING OUT WHY THERE IS A SERVER 500 ERROR