const apiKey ="e0e6e380e3c67cc828a97690150dd63d";
const api ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchInput =document.querySelector(".search input");
const searchBtn =document.querySelector(".search button");
const icon = document.querySelector(".ico");


async function checkWeather(city){
  const response = await fetch(api + city + `&appid=${apiKey}`);
  let data = await response.json();
  
  document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

if(data.weather[0].main == "Clouds"){
  icon.src = "images/clouds.png";
}else if(data.weather[0].main == "Clear"){
  icon.src = "images/clear.png";
}else if(data.weather[0].main == "Drizzle"){
  icon.src = "images/drizzle.png";
}else if (data.weather[0].main == "Rain") {
  icon.src = "images/rain.png";
}else if (data.weather[0].main == "Mist") {
  icon.src = "images/mist.png";
}else if (data.weather[0].main == "Snow") {
  icon.src = "images/snow.png";
}

document.querySelector(".weather").style.display = "block";
  
}

searchBtn.addEventListener("click", ()=>{
  checkWeather(searchInput.value);
});

