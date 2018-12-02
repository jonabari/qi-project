const path = require('path')

module.exports = function (app) {

    app.get('/', function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.sendFile(path.join(__dirname, ('../public/index.html')))
        next();
    })
    app.get('/cdmx', function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.sendFile(path.join(__dirname, (`../public/cities/cdmx.html`)))
        next();
    })
    app.get('/nyc', function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.sendFile(path.join(__dirname, (`../public/cities/nyc.html`)))
        next();
    })
    app.get('/dallas', function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.sendFile(path.join(__dirname, (`../public/cities/dallas.html`)))
        next();
    })
    app.get('/denver', function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.sendFile(path.join(__dirname, (`../public/cities/denver.html`)))
        next();
    })
}