const express = require('express')
const app = express()
const serveStatic = require('serve-static')
const path = require('path')


const PORT = process.env.PORT || 8080

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(serveStatic(path.join(__dirname, 'public')))
app.use(allowCrossDomain)

require('./routes/html-routes.js')(app)


app.listen(PORT, function () {
    console.log(`Now listening on PORT: ${PORT}`)
})