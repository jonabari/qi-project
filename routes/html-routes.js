const path = require('path')
const cors = require('cors')

let corsOptions = {
    origin: 'https://qi-project.herokuapp.com',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

module.exports = function (app) {

    app.get('/', function (req, res, next) {
        res.sendFile(path.join(__dirname, ('../public/index.html')))
    })
    app.get('/cdmx', cors(corsOptions), function (req, res, next) {
        res.sendFile(path.join(__dirname, (`../public/cities/cdmx.html`)))
    })
    app.get('/nyc', cors(corsOptions), function (req, res, next) {
        res.sendFile(path.join(__dirname, (`../public/cities/nyc.html`)))
    })
    app.get('/dallas', cors(corsOptions), function (req, res, next) {
        res.sendFile(path.join(__dirname, (`../public/cities/dallas.html`)))
    })
    app.get('/denver', cors(corsOptions), function (req, res, next) {
        res.sendFile(path.join(__dirname, (`../public/cities/denver.html`)))
    })
}