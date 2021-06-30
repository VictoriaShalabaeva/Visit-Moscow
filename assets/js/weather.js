// Weather API

// Code credit: the code is written following the tutorial by George Martsoukos https://webdesign.tutsplus.com/tutorials/build-a-simple-weather-app-with-vanilla-javascript--cms-33893


const apiKey = "53aa85202982e78f1e57a4b50e0335a6";

const url = `https://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=${apiKey}&units=metric`;

fetch(url)

  .then(response => response.json())

  .then(data => {

    const { main, weather } = data;

    const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]}.png`;

    document.getElementById("temperature").innerHTML = `<h2>${Math.round(main.temp)}°C</h2>`

    document.getElementById("weather-image").innerHTML = `

    <img src=${icon} alt=${weather[0]["main"]}>
    <span>${weather[0]["description"]}</span>`
  })

  .catch(() => {

    document.getElementById("temperature").innerHTML = `<h4>No weather found</h4>`;

    throw new Error("No weather found");
  });

  




