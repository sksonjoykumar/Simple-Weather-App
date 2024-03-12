// Selected all html id
const inputBox = document.getElementById("input-box");
const submitBtn = document.getElementById("clickBtn");
const images = document.getElementById("imageId");
const temp = document.getElementById("temp");
const city = document.getElementById("city");
const humidityData = document.getElementById("humidity-data");
const windData = document.getElementById("wind-data");

const apiKey = "b7729543282cba4770dde336a9fce325";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function weatherCheck(cityName) {
  const response = await fetch(`${apiUrl}${cityName} &appid=${apiKey}`);
  const data = await response.json();
  if (response.status === 404) {
    alert("Invalid City Name!");
  }

  //   update all data
  temp.innerHTML = `${data.main.temp.toFixed()}° C`;
  city.innerHTML = `${data.name}`;
  humidityData.innerHTML = `${data.main.humidity}%`;
  windData.innerHTML = `${data.wind.speed} km/h`;

  if (data.weather[0].main === "clouds") {
    images.src = "images/clouds.png";
  } else if (data.weather[0].main === "Clear") {
    images.src = "images/clear.png";
  } else if (data.weather[0].main === "Rain") {
    images.src = "images/rain.png";
  } else if (data.weather[0].main === "Drizzle") {
    images.src = "images/drizzle.png";
  } else if (data.weather[0].main === "Mist") {
    images.src = "images/mist.png";
  } else if (data.weather[0].main === "Snow") {
    images.src = "images/snow.png";
  } else if (data.weather[0].main === "Haze") {
    images.src = "images/haze.png";
  }
}
// section two

submitBtn.addEventListener("click", function () {
  document.querySelector(".section-two").style.display = "block";
  if (inputBox.value === "") {
    alert("Please enter valid city name!");
  } else {
    weatherCheck(inputBox.value);
    inputBox.value = "";
  }
});
inputBox.addEventListener("keypress", function (e) {
  if (e.key === "Enter" && e.target.value === "") {
    alert("Please enter valid city name!");
  } else if (e.key === "Enter") {
    weatherCheck(inputBox.value);
    inputBox.value = "";
    document.querySelector(".section-two").style.display = "block";
  }
});
