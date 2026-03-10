const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const cityName = document.getElementById("cityName");
const temp = document.getElementById("temp");
const weatherDesc = document.getElementById("weatherDesc");
const wind = document.getElementById("wind");
const humidity = document.getElementById("humidity");
const feels = document.getElementById("feels");
const pressure = document.getElementById("pressure");
const icon = document.getElementById("icon");

const API_KEY = "6319fd6668237480003eb459c097aa72";

async function loadWeather(){
const city = cityInput.value.trim();

    if(city === ""){
        alert("Enter city name");
        return;
    }

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try{

        const response = await fetch(url);
        const data = await response.json();

        if(data.cod !== 200){
            alert("City not found");
            return;
        }

        cityName.innerText = data.name;
        temp.innerText = data.main.temp + " °C";
        weatherDesc.innerText = data.weather[0].description;
        wind.innerText = data.wind.speed + " km/h";
        humidity.innerText = data.main.humidity + " %";
        feels.innerText = data.main.feels_like + " °C";
        pressure.innerText = data.main.pressure + " hPa";
        const iconCode = data.weather[0].icon;

        icon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    }

    catch(error){

        console.log(error);
        alert("Error loading weather data");

    }

}

searchBtn.addEventListener("click", loadWeather);

cityInput.addEventListener("keypress", function(e){

    if(e.key === "Enter"){
        loadWeather();
    }

});