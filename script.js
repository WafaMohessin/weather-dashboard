var apiKey = "d92c1de5dbde6aa07889a7702b188571"
var searchEL = document.getElementById("searchBTN")

//fetch for 5 days weather for a city
function getWeather(cityName){
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + cityName+ '&units=imperial&appid=' + apiKey)
    .then(function(resp) { return resp.json() }) 
    // Convert data to json
      .then(function(data) {
        console.log(data);
        current(data);
        firstDay(data);
        secondDay(data);
        thirdDay(data);
        fourthDay(data);
        fifthDay(data);

      })
      .catch(function() {
        // catch any errors
      });
}
//get city name from text box and get API Data
function requestCity() {
    var city = document.getElementById("cityName").value
    if (city.length < 1) return;
    else getWeather("" + city);

  }
// Weather currently
function current( d ) {
    var RequestDay = 0
    var numIcon = d.list[RequestDay].weather[0].icon
    document.getElementById("conditionIcon").src="http://openweathermap.org/img/wn/" + numIcon +"@2x.png"
    document.getElementById('date').innerHTML =d.list[RequestDay].dt_txt;
	document.getElementById('description').innerHTML = d.list[RequestDay].weather[0].description;
	document.getElementById('temp').innerHTML = d.list[RequestDay].main.temp + "°";
	document.getElementById('location').innerHTML = d.city.name;
    document.getElementById('humidity').innerHTML = d.list[RequestDay].main.humidity + "%";
    document.getElementById('wind').innerHTML = d.list[RequestDay].wind.speed;
    
}
// Weather for 5 coming days
function firstDay( d ) {
    var RequestDay = 3
    var numIcon = d.list[RequestDay].weather[0].icon
    document.getElementById('firstDayconditionIcon').src="http://openweathermap.org/img/wn/" + numIcon +"@2x.png"
    document.getElementById('firstDaydate').innerHTML =d.list[RequestDay].dt_txt;
	document.getElementById('firstDaydescription').innerHTML = d.list[RequestDay].weather[0].description;
	document.getElementById('firstDaytemp').innerHTML = d.list[RequestDay].main.temp + "°";
	document.getElementById('firsyDaylocation').innerHTML = d.city.name;
    document.getElementById('firstDayhumidity').innerHTML = d.list[RequestDay].main.humidity + "%";
    document.getElementById('firstDaywind').innerHTML = d.list[RequestDay].wind.speed;
}
function secondDay( d ) {
    var RequestDay = 11
    var numIcon = d.list[RequestDay].weather[0].icon
    document.getElementById("secondDayconditionIcon").src="http://openweathermap.org/img/wn/" + numIcon +"@2x.png"
    document.getElementById('secondDaydate').innerHTML =d.list[RequestDay].dt_txt;
	document.getElementById('secondDaydescription').innerHTML = d.list[RequestDay].weather[0].description;
	document.getElementById('secondDaytemp').innerHTML = d.list[RequestDay].main.temp + "°";
	document.getElementById('secondDaylocation').innerHTML = d.city.name;
    document.getElementById('secondDayhumidity').innerHTML = d.list[RequestDay].main.humidity + "%";
    document.getElementById('secondDaywind').innerHTML = d.list[RequestDay].wind.speed;
}

function thirdDay( d ) {
    var RequestDay = 19
    var numIcon = d.list[RequestDay].weather[0].icon
    document.getElementById("thirdDayconditionIcon").src="http://openweathermap.org/img/wn/" + numIcon +"@2x.png"
    document.getElementById('thirdDaydate').innerHTML =d.list[RequestDay].dt_txt;
	document.getElementById('thirdDaydescription').innerHTML = d.list[RequestDay].weather[0].description;
	document.getElementById('thirdDaytemp').innerHTML = d.list[RequestDay].main.temp + "°";
	document.getElementById('thirdDaylocation').innerHTML = d.city.name;
    document.getElementById('thirdDayhumidity').innerHTML = d.list[RequestDay].main.humidity + "%";
    document.getElementById('thirdDaywind').innerHTML = d.list[RequestDay].wind.speed;
}
function fourthDay( d ) {
    var RequestDay = 27
    var numIcon = d.list[RequestDay].weather[0].icon
    document.getElementById("fourthconditionIcon").src="http://openweathermap.org/img/wn/" + numIcon +"@2x.png"
    document.getElementById('fourthDaydate').innerHTML =d.list[RequestDay].dt_txt;
	document.getElementById('fourthDaydescription').innerHTML = d.list[RequestDay].weather[0].description;
	document.getElementById('fourthDaytemp').innerHTML = d.list[RequestDay].main.temp + "°";
	document.getElementById('fourthDaylocation').innerHTML = d.city.name;
    document.getElementById('fourthDayhumidity').innerHTML = d.list[RequestDay].main.humidity + "%";
    document.getElementById('fourthDaywind').innerHTML = d.list[RequestDay].wind.speed;
    
}

function fifthDay( d ) {
    var RequestDay = 35
    var numIcon = d.list[RequestDay].weather[0].icon
    document.getElementById("fifthDayconditionIcon").src="http://openweathermap.org/img/wn/" + numIcon +"@2x.png"
    document.getElementById('fifthDaydate').innerHTML =d.list[RequestDay].dt_txt;
	document.getElementById('fifthDaydescription').innerHTML = d.list[RequestDay].weather[0].description;
	document.getElementById('fifthDaytemp').innerHTML = d.list[RequestDay].main.temp + "°";
	document.getElementById('fifthDaylocation').innerHTML = d.city.name;
    document.getElementById('ifthDayhumidity').innerHTML = d.list[RequestDay].main.humidity + "%";
    document.getElementById('fifthDaywind').innerHTML = d.list[RequestDay].wind.speed;
    
}

//Run Function when Search is Selected
searchEL.addEventListener("click",requestCity)
//Save to local data
function weatherRecords(event) {
    var weatherRecords = document.querySelector('#cupcake')
    var cityName = document.getElementById("cityName").value
    event.preventDefault();
//don't add if no input
if (cityName.length < 1) return;
//add item to list
weatherRecords.innerHTML += '<li>' + '<button type= "button" class="btn btn-primary prevCity" id="'+ cityName+'">' + cityName + '</button>' + '</li>';
// Clear input
	cityName = '';
// Save the list to localStorage
	localStorage.setItem('pastCities',cityName)
// Check for saved storage items
// If there are any saved items, update our list
}

searchEL.addEventListener("click",weatherRecords)