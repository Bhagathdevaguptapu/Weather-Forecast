const url = '';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '3b64f92343mshfb797517ac0ff24p1aec12jsn652ea7952332',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeatherOfCity = (city) => {
    let cityName = document.getElementById("cityName")
    cityName.innerHTML = city
    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
        .then((response) => response.json())
        .catch(err => console.log(err))
        .then(response => {
            console.log(response)
             cloud_pct.innerHTML =  response.cloud_pct
            temp.innerHTML = response.temp
            temp1.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity1.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp 
            wind_speed.innerHTML = response.wind_speed
            wind_speed1.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
    })
}
    
    searchBtn.addEventListener("click", (e) => {
        e.preventDefault();
        getWeatherOfCity(city.value);
    })
    
    getWeatherOfCity("Rajahmundry")

    

