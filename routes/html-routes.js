const path = require('path')

module.exports = function (app) {

    app.get('/', function (req, res, next) {
        res.sendFile(path.join(__dirname, ('../public/index.html')))
    })
    app.get('/:cities', function (req, res, next) {
        res.json({ msg: 'listening for cities!' })
    })
    app.get('/cdmx', function (req, res) {
        res.sendFile(path.join(__dirname, (`../public/cities/cdmx.html`)))
    })
    app.get('/nyc', function (req, res) {
        res.sendFile(path.join(__dirname, (`../public/cities/nyc.html`)))
    })
    app.get('/dallas', function (req, res) {
        res.sendFile(path.join(__dirname, (`../public/cities/dallas.html`)))
    })
    app.get('/denver', function (req, res) {
        res.sendFile(path.join(__dirname, (`../public/cities/denver.html`)))
    })
}