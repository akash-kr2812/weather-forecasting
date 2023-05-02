let element = document.getElementById('output');
element.addEventListener('click', updateWeatherItems);
function GetInfo() {

    var newName = document.getElementById("cityInput");
    var cityName = document.getElementById("cityName");
    cityName.innerHTML = "--" + newName.value + "--";


    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + newName.value + '&appid=32ba0bfed592484379e51106cef3f204')
        .then(response => response.json())
        .then(data => {
            //Getting the min and max values for each day
            for (i = 0; i < 7; i++) {
                document.getElementById("day" + (i + 1) + "Min").innerHTML = "Min: " + Number(data.list[i].main.temp_min - 273.15).toFixed(1) + "°";
                //Number(1.3450001).toFixed(2); // 1.35
            }

            for (i = 0; i < 7; i++) {
                document.getElementById("day" + (i + 1) + "Max").innerHTML = "Max: " + Number(data.list[i].main.temp_max - 273.15).toFixed(2) + "°";
            }
            //------------------------------------------------------------

            //Getting Weather Icons
            for (i = 0; i < 7; i++) {
                document.getElementById("img" + (i + 1)).src = "http://openweathermap.org/img/wn/" +
                    data.list[i].weather[0].icon
                    + ".png";
            }
            //------------------------------------------------------------
            console.log(data)


        })

        .catch(err => alert("Something Went Wrong: Try Checking Your Internet Coneciton"))
}
function updateWeatherItems() {
    const currentWeatherItemsEl = document.getElementById('current-weather-items');
    var newName = document.getElementById("cityInput");
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + newName.value + '&appid=32ba0bfed592484379e51106cef3f204')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let { humidity, temp } = data.list[0].main;
            let speed = data.list[0].wind.speed;
            let description = data.list[0].weather[0].description;
            currentWeatherItemsEl.innerHTML =
                `<div class="weather-item">
            <div>Humidity : ${humidity}%</div>
        </div>
        <div class="weather-item">
            <div>Temperature : ${Math.floor(temp-273)}°C</div>
            <div></div>
        </div>
        <div class="weather-item">
            <div>Wind Speed : ${speed}</div>
        </div>
        <div class="weather-item">
            <div>Wheather condition : ${description}</div>
        </div>
        
        
        `;
        });

}

function DefaultScreen() {
    document.getElementById("cityInput").defaultValue = "London";
    GetInfo();
}


//Getting and displaying the text for the upcoming five days of the week
var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];

//Function to get the correct integer for the index of the days array
function CheckDay(day) {
    if (day + d.getDay() > 6) {
        return day + d.getDay() - 7;
    }
    else {
        return day + d.getDay();
    }
}

for (i = 0; i < 7; i++) {
    document.getElementById("day" + (i + 1)).innerHTML = weekday[CheckDay(i)];
}
//------------------------------------------------------------



document.getElementById("day1Min").innerHTML = Math.round(data.list[0].main.temp_min - 273.15, -2);
document.getElementById("day2Min").innerHTML = Math.round(data.list[1].main.temp_min - 273.15, -2);
document.getElementById("day3Min").innerHTML = Math.round(data.list[2].main.temp_min - 273.15, -2);
document.getElementById("day4Min").innerHTML = Math.round(data.list[3].main.temp_min - 273.15, -2);
document.getElementById("day5Min").innerHTML = Math.round(data.list[4].main.temp_min - 273.15, -2);
document.getElementById("day6Min").innerHTML = Math.round(data.list[5].main.temp_min - 273.15, -2);
document.getElementById("day7Min").innerHTML = Math.round(data.list[6].main.temp_min - 273.15, -2);

document.getElementById("day1Max").innerHTML = Math.round(data.list[0].main.temp_max - 273.15, -2);
document.getElementById("day2Max").innerHTML = Math.round(data.list[0].main.temp_max - 273.15, -2);
document.getElementById("day3Max").innerHTML = Math.round(data.list[0].main.temp_max - 273.15, -2);
document.getElementById("day4Max").innerHTML = Math.round(data.list[0].main.temp_max - 273.15, -2);
document.getElementById("day5Max").innerHTML = Math.round(data.list[0].main.temp_max - 273.15, -2);
document.getElementById("day6Max").innerHTML = Math.round(data.list[0].main.temp_max - 273.15, -2);
document.getElementById("day7Max").innerHTML = Math.round(data.list[0].main.temp_max - 273.15, -2);

document.getElementById("img1").src = "http://openweathermap.org/img/w/" +
    data.list[0].weather[0].icon
    + ".png";
document.getElementById("img2").src = "http://openweathermap.org/img/w/" +
    data.list[1].weather[0].icon
    + ".png";
document.getElementById("img3").src = "http://openweathermap.org/img/w/" +
    data.list[2].weather[0].icon
    + ".png";
document.getElementById("img4").src = "http://openweathermap.org/img/w/" +
    data.list[3].weather[0].icon
    + ".png";
document.getElementById("img5").src = "http://openweathermap.org/img/w/" +
    data.list[4].weather[0].icon
    + ".png";
document.getElementById("img5").src = "http://openweathermap.org/img/w/" +
    data.list[5].weather[0].icon
    + ".png";
document.getElementById("img5").src = "http://openweathermap.org/img/w/" +
    data.list[6].weather[0].icon
    + ".png";


document.getElementById("day1").innerHTML = weekday[CheckDay(0)];
document.getElementById("day2").innerHTML = weekday[CheckDay(1)];
document.getElementById("day3").innerHTML = weekday[CheckDay(2)];
document.getElementById("day4").innerHTML = weekday[CheckDay(3)];
document.getElementById("day5").innerHTML = weekday[CheckDay(4)];
document.getElementById("day6").innerHTML = weekday[CheckDay(5)];
document.getElementById("day7").innerHTML = weekday[CheckDay(6)];

weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";