"use strict";

const apiKey = "Your_Api_key";
const searchButton = document.querySelector(".search-bar button");
const input = document.querySelector("#city-search");
const temperatureDisplay = document.querySelector(".temperature");
const locationDisplay = document.querySelector(".location");
const humidityDisplay = document.querySelector(".humidity");
const windSpeedDisplay = document.querySelector(".wind-speed");
const weatherIcon = document.querySelector(".weather-widget img");

searchButton.addEventListener("click", () => {
  const city = input.value;
  getWeather(city);
});

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const city = input.value;
    getWeather(city);
  }
});

async function getWeather(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    if (!response.ok) {
      throw new Error("City not found");
    }
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    alert(error.message);
  }
}

function displayWeather(data) {
  const { name, main, wind, weather } = data;
  temperatureDisplay.textContent = `${Math.round(main.temp)}°C`;
  locationDisplay.textContent = name;
  humidityDisplay.textContent = `${main.humidity}%`;
  windSpeedDisplay.textContent = `${wind.speed} km/h`;

  // Update weather icon based on weather condition
  const weatherCondition = weather[0].main.toLowerCase();
  let iconSrc;
  switch (weatherCondition) {
    case "clear":
      iconSrc = "Assets/sunny.png";
      break;
    case "clouds":
      iconSrc = "Assets/cloudy.png";
      break;
    case "rain":
      iconSrc = "Assets/rainy.png";
      break;
    case "snow":
      iconSrc = "Assets/snowy.png";
      break;
    case "thunderstorm":
      iconSrc = "Assets/thunderstorm.png";
      break;
    case "drizzle":
      iconSrc = "Assets/drizzle.png";
      break;
    case "mist":
    case "smoke":
    case "haze":
    case "dust":
    case "fog":
    case "sand":
    case "ash":
    case "squall":
    case "tornado":
      iconSrc = "Assets/haze.png";
      break;
    default:
      iconSrc = "Assets/haze.png";
  }
  weatherIcon.src = iconSrc;
  weatherIcon.alt = weather[0].description;
}

// Fetch and display weather for Mumbai on page load
getWeather("Mumbai");
