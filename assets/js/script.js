var cityInputEl = document.querySelector("#city");
var userFormEl = document.querySelector("#user-form");
var cardContainer = document.querySelector("#card-container");
var forecast = document.querySelector("#forecast");
var p = document.createElement("p");
var searchHistory = document.getElementById("#history")

var submitCity = function(event) {
    event.preventDefault();
    var cityName = cityInputEl.value.trim();

    if (cityName) {
    getCurrentWeather(cityName);
    getFiveDayForecast(cityName);
    localStorage.setItem("" + cityName, cityName);
    cityInputEl.value = "";
    }
    else {
        alert("Please input a city.")
    }
};

var getCurrentWeather = function(city) {
    var apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=2bffd4e95c0b4e30175b53413f54c060";

    fetch(apiUrl).then(function(response) {
        if (response.ok) {
            console.log(response);
            response.json().then(function(data) {
                console.log(data);
                displayCurrentWeather(data);
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
                displayFiveDayForecast(data);
            })
        } else {
            alert("Please input a city")
        }
    });
};

var displayCurrentWeather = function(data) {
    let divEl = document.createElement("div");
    divEl.classList = "card";

    let h1 = document.createElement("h1")
    h1.textContent = data.name;
    h1.classList = "card-info";
    divEl.appendChild(h1)

    forecast.appendChild(divEl);
    
}

var displayFiveDayForecast = function(data) {

}

userFormEl.addEventListener('submit', submitCity);