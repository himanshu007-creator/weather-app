function timeFunction() {
  setTimeout(function () {
    alert("After 5 seconds!");
  }, 5000);
}
document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("submit").classList.remove("submit");
  document.getElementById("submit").classList.add("sub-focus");
});
document.getElementById("submit").addEventListener("mouseout", () => {
  document.getElementById("submit").classList.remove("sub-focus");
  document.getElementById("submit").classList.add("submit");
});

var d = new Date();
var hrs = d.getHours();
console.log(hrs);
if (hrs <= 19) {
  document.querySelector("body").style["background-image"] =
    "url('assets/sunny.jpeg')";
} else {
  document.querySelector("body").style["background-image"] =
    "url('assets/night.jpg')";
}
const city = document.querySelector("#city");
var button = document.querySelector("#submit");
const showData = document.querySelector(".showData");

//Get API Key By Login To OpenWeather.org
const API_Key = "a0e78d3b449db7059df0a38abd3952f8";

//Now Add Event Listener
button.addEventListener("click", () => {
  //Get Input Value
  const cityInput = city.value;
  // console.log(cityInput);

  //Now Fetch Through Get API
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&APPID=${API_Key}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      //When Fill Input Field Then Clear Input Field
      city.value = " ";
      //Now Show All Data Value
      showData.innerHTML = `
            <ul>
            <br>
            <li class="desc">${data.name}</li>
            <br>
            <li class="temp">${data.main.temp}°c</li>
            <li class="temp">Cloud% ${data.clouds.all}</li>
            <li class="temp">🌪 speed ${data.wind.speed}</li>
            <li class="temp">Humidity ${data.main.humidity}</li>
            <li class="temp">Conclusion: ${data.weather[0].description}</li>
        </ul>
         `;
    });
});
