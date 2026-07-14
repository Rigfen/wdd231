const apiKey = "5c302fcb93a4d1f7fee5688144e35609";

// Ramstein, Germany
const lat = 49.4447;
const lon = 7.5553;

const currentURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

const currentWeather = document.querySelector("#current-weather");
const forecast = document.querySelector("#forecast");

async function getWeather() {
    try {
        // Current weather
        const currentResponse = await fetch(currentURL);

        if (!currentResponse.ok) {
            throw new Error("Unable to load current weather.");
        }

        const currentData = await currentResponse.json();
        displayCurrentWeather(currentData);

        // Forecast
        const forecastResponse = await fetch(forecastURL);

        if (!forecastResponse.ok) {
            throw new Error("Unable to load forecast.");
        }

        const forecastData = await forecastResponse.json();
        displayForecast(forecastData);

    } catch (error) {
        console.error(error);
    }
}

function displayCurrentWeather(data) {

    currentWeather.innerHTML = `
        <p><strong>Temperature:</strong> ${Math.round(data.main.temp)}°C</p>
        <p><strong>Condition:</strong> ${data.weather[0].description}</p>
    `;
}

function displayForecast(data) {

    forecast.innerHTML = "";

    // Get one forecast for each of the next 3 days (around noon)
    const dailyForecast = data.list.filter(item =>
        item.dt_txt.includes("12:00:00")
    ).slice(0, 3);

    dailyForecast.forEach(day => {

        const date = new Date(day.dt_txt);

        const forecastCard = document.createElement("div");

        forecastCard.innerHTML = `
            <h4>${date.toLocaleDateString("en-US", { weekday: "long" })}</h4>
            <p>${Math.round(day.main.temp)}°C</p>
            <p>${day.weather[0].description}</p>
        `;

        forecast.appendChild(forecastCard);
    });
}

getWeather();