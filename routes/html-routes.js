const path = require('path')

module.exports = function (app) {
    app.get(
        ['/', '/cdmx', '/nyc', '/dallas', '/denver', '/shanghai'],
        function (req, res) {
            res.sendFile(path.join(__dirname, ('../public/index.html')))
    })
}