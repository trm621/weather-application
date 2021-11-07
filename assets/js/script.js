var cityInputEl = document.querySelector("#city");
var userFormEl = document.querySelector("#user-form");
var cardContainer = document.querySelector("#card-container");
var forecast = document.querySelector("#forecast");
var p = document.createElement("p");
var li = document.createElement("li");
var h1 = document.createElement("h1");
var searchHistory = document.getElementById("#history")
var divEl1 = document.createElement("div");
var divEl2 = document.createElement("div");


var submitCity = function(event) {
    event.preventDefault();
    var cityName = cityInputEl.value.trim();

    if (cityName) {
    getCurrentWeather(cityName);
    getFiveDayForecast(cityName);
    localStorage.setItem("" + cityName, cityName);

    li.textContent = cityName;
    li.setAttribute("style", "color:black; padding:10px; font-size:35px; text-align:center; list-style:none");
    cardContainer.appendChild(li);

    cityInputEl.value = "";
    divEl1.innerHTML = "";
    divEl2.innerHTML = "";
    }
    else {
        alert("Please input a city.")
    }
};

var getCurrentWeather = function(city) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=2bffd4e95c0b4e30175b53413f54c060";

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
    var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=2bffd4e95c0b4e30175b53413f54c060";

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
    var cli1 = document.createElement("li");
    var cli2 = document.createElement("li");
    var cli3 = document.createElement("li");
    var cli4 = document.createElement("li");

    divEl1.classList = "card";
    let h1 = document.createElement("h1")
    h1.textContent = data.city.name + " (" + moment().format("dddd, MMMM Do, YYYY") + ")";
    h1.classList = "card-header bg-light";
    divEl1.appendChild(h1);

    cli1.textContent = "Current Temp: " + data.list[0].main.temp + "° F"
    cli1.classList = "card-info";
    h1.appendChild(cli1);

    cli2.textContent = "Wind: " + data.list[0].wind.speed + " MPH"
    cli2.classList = "card-info";
    cli1.appendChild(cli2);

    cli3.textContent = "Humidity: " + data.list[0].main.humidity + "%";
    cli3.classList = "card-info";
    cli2.appendChild(cli3);

    cli4.textContent = "UV Index: ";
    cli4.classList = "card-info";
    cli3.appendChild(cli4);

    forecast.appendChild(divEl1);
}

var displayFiveDayForecast = function(data) {
    divEl2.classList = "flex-row space-evenly card";
    divEl1.appendChild(divEl2);

    let img1 = document.createElement("img");
    let div1 = document.createElement("div");
    let f1li1 = document.createElement("li");
    let f1li2 = document.createElement("li");
    let f1li3 = document.createElement("li");
    let tomorrow = moment().add(1,'day').format("dddd, MMMM Do, YYYY");

        div1.classList = "five-day-card even-width";
        div1.textContent = tomorrow;

        f1li1.textContent =  "Temp: " + data.list[1].main.temp + "° F";
        div1.appendChild(f1li1);

        f1li2.textContent = "Wind: " + data.list[1].wind.speed + " MPH"
        f1li1.appendChild(f1li2);

        f1li3.textContent = "Humidity: " + data.list[1].main.humidity + "%";
        f1li2.appendChild(f1li3);

        img1.setAttribute("src", src="https://openweathermap.org/img/wn/" + data.list[1].weather[0].icon + "@2x.png")
        f1li3.appendChild(img1);

        divEl2.appendChild(div1);

    let img2 = document.createElement("img");
    let div2 = document.createElement("div");
    let f2li1 = document.createElement("li");
    let f2li2 = document.createElement("li");
    let f2li3 = document.createElement("li");
    let twoDays = moment().add(2,'days').format("dddd, MMMM Do, YYYY");

        div2.classList = "five-day-card even-width";
        div2.textContent = twoDays;
        
        f2li1.textContent = "Temp: " + data.list[2].main.temp + "° F";
        div2.appendChild(f2li1);

        f2li2.textContent = "Wind: " + data.list[2].wind.speed + " MPH"
        f2li1.appendChild(f2li2);

        f2li3.textContent = "Humidity: " + data.list[2].main.humidity + "%";
        f2li2.appendChild(f2li3);

        img2.setAttribute("src", src="https://openweathermap.org/img/wn/" + data.list[2].weather[0].icon + "@2x.png")
        f2li3.appendChild(img2);

        divEl2.appendChild(div2);

    let img3 = document.createElement("img");
    let div3 = document.createElement("div");
    let f3li1 = document.createElement("li");
    let f3li2 = document.createElement("li");
    let f3li3 = document.createElement("li");
    let threeDays = moment().add(3,'days').format("dddd, MMMM Do, YYYY");

        div3.classList = "five-day-card even-width";
        div3.textContent = threeDays;
        
        f3li1.textContent = "Temp: " + data.list[3].main.temp + "° F";
        div3.appendChild(f3li1);

        f3li2.textContent = "Wind: " + data.list[3].wind.speed + " MPH"
        f3li1.appendChild(f3li2);

        f3li3.textContent = "Humidity: " + data.list[3].main.humidity + "%";
        f3li2.appendChild(f3li3);

        img3.setAttribute("src", src="https://openweathermap.org/img/wn/" + data.list[3].weather[0].icon + "@2x.png")
        f3li3.appendChild(img3);

        divEl2.appendChild(div3);

    let img4 = document.createElement("img");
    let div4 = document.createElement("div");
    let f4li1 = document.createElement("li");
    let f4li2 = document.createElement("li");
    let f4li3 = document.createElement("li");
    let fourDays = moment().add(4,'days').format("dddd, MMMM Do, YYYY");

        div4.classList = "five-day-card even-width";
        div4.textContent = fourDays;
        
        f4li1.textContent = "Temp: " + data.list[4].main.temp + "° F";
        div4.appendChild(f4li1);

        f4li2.textContent = "Wind: " + data.list[4].wind.speed + " MPH"
        f4li1.appendChild(f4li2);

        f4li3.textContent = "Humidity: " + data.list[4].main.humidity + "%";
        f4li2.appendChild(f4li3);

        img4.setAttribute("src", src="https://openweathermap.org/img/wn/" + data.list[4].weather[0].icon + "@2x.png")
        f4li3.appendChild(img4);

        divEl2.appendChild(div4);

    let img5 = document.createElement("img");
    let div5 = document.createElement("div");
    let f5li1 = document.createElement("li");
    let f5li2 = document.createElement("li");
    let f5li3 = document.createElement("li");
    let fiveDays = moment().add(5,'days').format("dddd, MMMM Do, YYYY");

        div5.classList = "five-day-card even-width";
        div5.textContent = fiveDays;
        
        f5li1.textContent = "Temp: " + data.list[5].main.temp + "° F";
        div5.appendChild(f5li1);

        f5li2.textContent = "Wind: " + data.list[5].wind.speed + " MPH"
        f5li1.appendChild(f5li2);

        f5li3.textContent = "Humidity: " + data.list[5].main.humidity + "%";
        f5li2.appendChild(f5li3);

        img5.setAttribute("src", src="https://openweathermap.org/img/wn/" + data.list[5].weather[0].icon + "@2x.png")
        f5li3.appendChild(img5);

        divEl2.appendChild(div5);

    forecast.appendChild(divEl2);

}

userFormEl.addEventListener('submit', submitCity);