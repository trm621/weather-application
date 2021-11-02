var cityInputEl = document.querySelector("#city");
var userFormEl = document.querySelector("#user-form");

var submitCity = function(event) {
    event.preventDefault();
    
    var cityName = cityInputEl.value.trim();
    
    if (cityName) {
        getWeather(cityName);
    }
}

var getWeather = function(city) {
    var apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=2bffd4e95c0b4e30175b53413f54c060";

    fetch(apiUrl).then(function(response) {
        if (response.ok) {
            console.log(response);
            response.json().then(function(data) {
                console.log(data);
            })
        } else {
            alert("Please input a city.")
        }
    });
};

userFormEl.addEventListener('submit', submitCity);

