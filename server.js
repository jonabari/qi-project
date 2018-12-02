const express = require('express')
const app = express()

const PORT = process.env.PORT || 8080

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(__dirname + '/public'));

require('./routes/html-routes.js')(app)

app.listen(PORT, function () {
    console.log(`Now listening on PORT: ${PORT}`)
})