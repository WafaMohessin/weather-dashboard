var button= document.querySelector('.button')

var inputValue = document.querySelector('.inputValue')

var name = document.querySelector('.name')

var description= document.querySelector('.description')

var tempreture= document.querySelector('.tempreture')


// Today's date
//let date = moment().format('M/D/YYYY')


button.addEventListener ('click', function() {

fetch ('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=d92c1de5dbde6aa07889a7702b188571')
.then(response => response.json())
.then(data => {

var nameValue = data['name'];
var tempretureValue = data['main']['tempreture'];
var descriptionValue = data['weather'][0]['description'];

name.innerHTML=nameValue;
tempreture.innerHTML=tempretureValue;
description.innerHTML=descriptionValue;

})
.catch (err => alert ("worng city name!"))

})
