const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '90574ca9d5mshd3eb24c5781386ep16c982jsn13af5e912a6b',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    cityName.innerHTML=city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            temp.innerHTML = response.temp
           
            min_temp.innerHTML = response.min_temp
           // max_temp.innerHTML = response.max_temp
            humidity.innerHTML = response.humidity
            cloud_pct.innerHTML = response.cloud_pct
           // temp2.innerHTML = response.temp
           // humidity2.innerHTML = response.humidity
            wind_speed.innerHTML = response.wind_speed
            feels_like.innerHTML = response.feels_like
            //wind_speed2.innerHTML = response.wind_speed
            //wind_degrees.innerHTML = response.wind_degrees
            let date=new Date(response.sunrise *1000)
            sunrise.innerHTML = date.toLocaleTimeString()
            let date1=new Date(response.sunset *1000)
            sunset.innerHTML = date1.toLocaleTimeString()

        })

        .catch(err => console.error(err));

}

submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Delhi")