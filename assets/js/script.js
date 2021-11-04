var cityInputEl = document.querySelector("#city");
var userFormEl = document.querySelector("#user-form");
var cardContainer = document.querySelector("#card-container");
var currentWeatherContainer = document.querySelector("#weather-container");
var divEl = document.createElement("div");
var searchHistory = document.getElementById("#history")
var listItem = document.createElement("li");

// var displayCurrentWeather = function(cityName) {

//     listItem.textContent = cityName;
//     searchHistory.appendChild(listItem)
//     listItem.setAttribute("style", "font-size:30px; text-align:center;")
// }

var submitCity = function(event) {
    event.preventDefault();
    var saveCities = function() {
        localStorage.setItem("" + cityName, cityName);
    }
    var cityName = cityInputEl.value.trim();
    if (cityName) {
        getCurrentWeather(cityName);
        getFiveDayForecast(cityName);
        // displayCurrentWeather(cityName);
    }
    else {
        alert("Please input a city.")
    }
    saveCities();
};

var getCurrentWeather = function(city) {
    var apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=2bffd4e95c0b4e30175b53413f54c060";

    fetch(apiUrl).then(function(response) {
        if (response.ok) {
            console.log(response);
            response.json().then(function(data) {
                console.log(data);
                displayCurrentWeather(data, city)
            })
        } else {
            alert("Please input a city.")
        }
    });
};



var getFiveDayForecast = function(city) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=2bffd4e95c0b4e30175b53413f54c060";

    fetch(apiUrl).then(function(response) {
        if (response.ok) {
            console.log(response);
            response.json().then(function(data) {
                console.log(data);
            })
        } else {
            alert("Please input a city")
        }
    });
};

userFormEl.addEventListener('submit', submitCity);