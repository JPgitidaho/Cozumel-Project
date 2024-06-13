document.addEventListener('DOMContentLoaded', function () {
    getWeather('Cozumel', 'mx', 'today'); 
    getWeather('Cozumel', 'mx', 'tomorrow', 15); 
});

// Function to fetch weather data from the OpenWeatherMap API
async function getWeather(city, country, type, hour = null) {
    try {
        // OpenWeatherMap API key
        const apiKey = '39a93938e81e6967af92542761303653';
        let apiUrl = '';

        if (type === 'today') {
            apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`;
        } else if (type === 'tomorrow') {
            apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${apiKey}`;
        }

        // Fetch weather data from the API
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Extract relevant information based on type
        let weatherInfo = '';
        if (type === 'today') {
            // Extract weather info for today
            const weatherDescription = data.weather[0].description;
            const temperature = (data.main.temp - 273.15).toFixed(2); // Temperature in Celsius
            const feelsLike = (data.main.feels_like - 273.15).toFixed(2); // Feels like temperature in Celsius
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;

            const weatherIconCode = data.weather[0].icon;

            // Create the content to display for today
            weatherInfo = `
            <div class="home-grid">
            <div>
                <h4>WEATHER  NOW </h4>
                <p>${weatherDescription} </p>
                <p><img src="http://openweathermap.org/img/wn/${weatherIconCode}.png" alt="Weather Icon"></p>
                <p>tº: ${temperature} °C </p>
                <p> Feels Like: ${feelsLike} °C </p>
                <p> Humidity: ${humidity} % </p>
                <p> Wind Speed: ${windSpeed} m/s </p>
                </div>
                </div>

            `;
        } else if (type === 'tomorrow') {
            // Find the forecast for tomorrow
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            const tomorrowDateString = tomorrow.toISOString().split('T')[0];

            const forecast = data.list.find(item => item.dt_txt.includes(tomorrowDateString));

            // Extract weather info for tomorrow at specified hour
            const weatherDescription = forecast.weather[0].description;
            const temperature = (forecast.main.temp - 273.15).toFixed(2); // Temperature in Celsius
            const feelsLike = (forecast.main.feels_like - 273.15).toFixed(2); // Feels like temperature in Celsius
            const humidity = forecast.main.humidity;
            const windSpeed = forecast.wind.speed;

            // Get the weather icon code
            const weatherIconCode = forecast.weather[0].icon;

            // Create the content to display for tomorrow
            weatherInfo = `
            <div class="home-grid">
            <div>
                <h4>TOMORROW--AT 15:00</h4>
                <p>${weatherDescription} </p>
                <p><img src="http://openweathermap.org/img/wn/${weatherIconCode}.png" alt="Weather Icon"></p>
                <p>tº: ${temperature} °C</p>
                <p> Feels Like: ${feelsLike} °C </p>
                <p> Humidity: ${humidity} % </p>
                <p> Wind Speed: ${windSpeed} m/s </p>
                </div>
                </div>

            `;
        }

        document.getElementById('weather-info').innerHTML += weatherInfo;
    } catch (error) {
        console.error('Error fetching weather information:', error);
    }
}
