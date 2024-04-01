const btn = document.querySelector("#btn");
const inp = document.querySelector("input");
const icon = document.querySelector(".icon");
const weather = document.querySelector(".weather");
const temp = document.querySelector(".temperature");
const desc = document.querySelector(".description");

const apikey = "4830fe3e6ca4152b601c2bb0578b8a5e";

btn.addEventListener("click", () => {
  let city = inp.value;
  getWeather(city);
});

function getWeather(city) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const iconCode = data.weather[0].icon;
      icon.innerHTML=`<img src="https://openweathermap.org/img/wn/${iconCode}.png" alt="weather icon"/>`
      const weatherCity = data.name;
      const weatherCountry = data.sys.country;
      let weatherTemp = data.main.temp;
      const descri = data.weather[0].description;

      weatherTemp = weatherTemp - 273.15;
      weather.innerHTML = `${weatherCity}, ${weatherCountry}`
      temp.innerHTML = Math.floor(weatherTemp)+"°C";
      desc.innerHTML = descri;
    });
}
