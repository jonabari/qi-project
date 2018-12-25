const cdmx = { name: 'Mexico City', display_name: '墨西哥成', img: 'cdmx.svg' }
const nyc = { name: 'New York', display_name: '纽约', img: 'ny.svg' }
const dallas = { name: 'Dallas', display_name: '达拉斯', img: 'dallas.svg' }
const denver = { name: 'Denver', display_name: '丹佛', img: 'denver.svg' }
const shanghai = { name: 'Shanghai', display_name: '上海', img: 'shanghai.svg' }
let city
let modal = $('#menuModal')[0]

getCityName = () => {
    let location = window.location.href.split('/').pop()

    switch (location) {
        case 'cdmx':
            city = cdmx
            break
        case 'nyc':
            city = nyc
            break
        case 'dallas':
            city = dallas
            break
        case 'denver':
            city = denver
            break
        case 'shanghai':
            city = shanghai
            break
    }
    renderCity()
}

renderCity = () => {
    console.log(`==> Now viewing: ${city.name}`)
    $('.openMenu').text(city.display_name)
    $('.backgroundPainting').css('background-image', `url('../images/painting-${city.img}')`)
    GetAQI()
}

GetAQI = () => {
    $.get(`/api/${city.name}`)
        .then (data => {
        displayAQI(data)
    })
}

displayAQI = (AQI) => {
    if (AQI >= 300) {
        $('#display-fog').css('opacity', '1')
        $('#airQualityIndexName').attr('class', 'severe').text('严重污染')
        $('#airQualityIndexNumber').attr('class', 'severe').text('六')
        $('#selectedLocation').attr('class', 'severe')
    } else if (AQI <= 299 && AQI >= 201) {
        $('#display-fog').css('opacity', '0.9')
        $('#airQualityIndexName').attr('class', 'heavy').text('重度污染')
        $('#airQualityIndexNumber').attr('class', 'heavy').text('五')
        $('#selectedLocation').attr('class', 'heavy')
    } else if (AQI <= 200 && AQI >= 151) {
        $('#display-fog').css('opacity', '0.8')
        $('#airQualityIndexName').attr('class', 'moderate').text('中度污染')
        $('#airQualityIndexNumber').attr('class', 'moderate').text('四')
        $('#selectedLocation').attr('class', 'moderate')
    } else if (AQI <= 150 && AQI >= 101) {
        $('#display-fog').css('opacity', '0.7')
        $('#airQualityIndexName').attr('class', 'light').text('轻度污染')
        $('#airQualityIndexNumber').attr('class', 'light').text('三')
        $('#selectedLocation').attr('class', 'light')
    } else if (AQI <= 100 && AQI >= 51) {
        $('#display-fog').css('opacity', '0.6')
        $('#airQualityIndexName').attr('class', 'good').text('良')
        $('#airQualityIndexNumber').attr('class', 'good').text('二')
        $('#selectedLocation').attr('class', 'good')
    } else if (AQI <= 51) {
        $('#display-fog').css('opacity', '0.5')
        $('#airQualityIndexName').attr('class', 'excellent').text('优')
        $('#airQualityIndexNumber').attr('class', 'excellent').text('一')
        $('#selectedLocation').attr('class', 'excellent')
    }
}

// Open Menu
$('.openMenu').on('click', function () {
    modal.style.display = "block"
})

// When the user clicks on <span> (x), close the modal
$('#menuCloseButton').on('click', function () {
    modal.style.display = "none"
})

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none"
    }
}

getCityName()