const axios = require('axios');

module.exports = function (app) {

  app.get('/api/:city', function (req, res){
    let city = req.params.city
    let key = process.env.AQI_KEY
    
    let URL = `https://api.waqi.info/feed/${city}/?token=${key}`
    
    axios.get(URL)
      .then(response => {
        res.json(response.data.data.aqi)
      })
      .catch(error => {
        console.log(error)
      });
  })
}
