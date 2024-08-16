const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'c048e9e681msh468e87a6da4389ap1cea7ejsn6b29c8e7cc93',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city= Hyderabad', options)
    .then(response => response.json())
    .then((response) => {


        console.log(response)
        cloud_pct1.innerHTML = response.cloud_pct
        temp1.innerHTML = response.temp
        feels_like1.innerHTML = response.feels_like
        humidity1.innerHTML = response.humidity
        min_temp1.innerHTML = response.min_temp
        max_temp1.innerHTML = response.max_temp
        wind_speed1.innerHTML = response.wind_speed
        wind_degrees1.innerHTML = response.wind_degrees
        sunrise1.innerHTML = response.sunrise
        sunset1.innerHTML = response.sunset


    })
    .catch(err => console.error(err));