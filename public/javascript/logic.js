const cdmx = { name: 'Mexico', display_name: '墨西哥成', lat: '19.4326', lon: '-99.1332', img: 'cdmx.svg' }
const nyc = { name: 'New York', display_name: '纽约', lat: '40.7128', lon: '-74.0060', img: 'ny.svg' }
const dallas = { name: 'Dallas', display_name: '达拉斯', lat: '32.7767', lon: '-96.7970', img: 'dallas.svg' }
const denver = { name: 'Denver', display_name: '丹佛', lat: '39.7392', lon: '-104.9903', img: 'denver.svg' }

let city
let modal = document.getElementById('menuModal')

function getCityName() {
    if (document.URL.indexOf('localhost:8080/cdmx') >= 0) { city = cdmx }
    if (document.URL.indexOf('localhost:8080/nyc') >= 0) { city = nyc }
    if (document.URL.indexOf('localhost:8080/dallas') >= 0) { city = dallas }
    if (document.URL.indexOf('localhost:8080/denver') >= 0) { city = denver }
    renderCity()
}

function renderCity() {
    console.log(`Now viewing: ${city.name}`)
    $('.openMenu').text(city.display_name)
    $('.backgroundPainting').css('background-image', `url('../images/painting-${city.img}')`)
    GetAQI()
}

function GetAQI() {

    let key = 'E0A84CAA-864F-41AA-BDF7-100EFA2048E4'
    let URL = `https://www.airnowapi.org/aq/observation/latLong/current/?format=application/json&latitude=${city.lat}&longitude=${city.lon}&distance=25&API_KEY=${key}`

    $.ajax({
        url: URL,
        success: function (res) {
            let AQI = res[1].AQI
            $('#pollution-index').text(`${res[1].Category.Name} (AQI: ${AQI})`)
            calculateHazeAndFog(AQI)
        }
    })
}

function calculateHazeAndFog(AQI) {
    haze = (500 - AQI) * .002
    fog = AQI / 500
    $('#check-haze').text(`Haze: ${haze.toFixed(3)}`)
    $('#check-fog').text(`Fog: ${fog.toFixed(3)}`)
    displayAQI(AQI)
}

function displayAQI(AQI) {
    if (AQI >= 300) {
        $('#airQualityIndexName').attr('class', 'severe').text('严重污染')
        $('#airQualityIndexNumber').attr('class', 'severe').text('六')
        $('#selectedLocation').attr('class', 'severe')
    } else if (AQI <= 299 && AQI > 201) {
        $('#airQualityIndexName').attr('class', 'heavy').text('重度污染')
        $('#airQualityIndexNumber').attr('class', 'heavy').text('五')
        $('#selectedLocation').attr('class', 'heavy')
    } else if (AQI <= 200 && AQI > 151) {
        $('#airQualityIndexName').attr('class', 'moderate').text('中度污染')
        $('#airQualityIndexNumber').attr('class', 'moderate').text('四')
        $('#selectedLocation').attr('class', 'moderate')
    } else if (AQI <= 150 && AQI > 101) {
        $('#airQualityIndexName').attr('class', 'light').text('轻度污染')
        $('#airQualityIndexNumber').attr('class', 'light').text('三')
        $('#selectedLocation').attr('class', 'light')
    } else if (AQI <= 100 && AQI > 51) {
        $('#airQualityIndexName').attr('class', 'good').text('良')
        $('#airQualityIndexNumber').attr('class', 'good').text('二')
        $('#selectedLocation').attr('class', 'good')
    } else if (AQI <= 51) {
        $('#airQualityIndexName').attr('class', 'excellent').text('优')
        $('#airQualityIndexNumber').attr('class', 'excellent').text('一')
        $('#selectedLocation').attr('class', 'excellent')
    }
}

getCityName()