// Weather API Configuration
const API_KEY = 'b6fd43b90d830a22ab5a1c8d34dab894'; // OpenWeatherMap free API key
const API_BASE_URL = 'https://api.openweathermap.org/data/2.5';
const GEO_API_URL = 'https://api.openweathermap.org/geo/1.0';

// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const weatherContainer = document.getElementById('weatherContainer');
const loadingEl = document.getElementById('loading');
const errorMessage = document.getElementById('errorMessage');
const suggestionsDiv = document.getElementById('suggestions');

// Event Listeners
searchBtn.addEventListener('click', searchWeather);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') searchWeather();
});
searchInput.addEventListener('input', handleSuggestions);
document.addEventListener('click', (e) => {
    if (e.target !== searchInput && e.target !== suggestionsDiv) {
        suggestionsDiv.innerHTML = '';
    }
});

// Search Weather Function
async function searchWeather() {
    const city = searchInput.value.trim();
    if (!city) {
        showError('Please enter a city name');
        return;
    }

    try {
        showLoading(true);
        hideError();
        
        // Get coordinates from city name
        const geoResponse = await fetch(`${GEO_API_URL}/direct?q=${city}&limit=1&appid=${API_KEY}`);
        const geoData = await geoResponse.json();

        if (!geoData.length) {
            showError('City not found. Please try another name.');
            showLoading(false);
            return;
        }

        const { lat, lon, name, country } = geoData[0];

        // Get weather data
        const weatherResponse = await fetch(`${API_BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
        const forecastResponse = await fetch(`${API_BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);

        if (!weatherResponse.ok || !forecastResponse.ok) {
            throw new Error('Failed to fetch weather data');
        }

        const weatherData = await weatherResponse.json();
        const forecastData = await forecastResponse.json();

        displayWeather(weatherData, name, country);
        displayForecast(forecastData);
        
        suggestionsDiv.innerHTML = '';
        searchInput.value = '';
    } catch (error) {
        console.error('Error:', error);
        showError('An error occurred while fetching weather data. Please try again.');
    } finally {
        showLoading(false);
    }
}

// Display Current Weather
function displayWeather(data, cityName, country) {
    const { main, weather, wind, clouds, sys, visibility, dt } = data;
    const weatherIcon = `https://openweathermap.org/img/wn/${weather[0].icon}@4x.png`;

    // Update city info
    document.getElementById('cityName').textContent = `${cityName}, ${country}`;
    document.getElementById('currentDate').textContent = new Date(dt * 1000).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    // Update weather main info
    document.getElementById('temperature').textContent = `${Math.round(main.temp)}°C`;
    document.getElementById('weatherDescription').textContent = weather[0].description;
    document.getElementById('weatherIcon').src = weatherIcon;

    // Update weather details
    document.getElementById('humidity').textContent = `${main.humidity}%`;
    document.getElementById('windSpeed').textContent = `${Math.round(wind.speed)} m/s`;
    document.getElementById('pressure').textContent = `${main.pressure} hPa`;
    document.getElementById('visibility').textContent = `${(visibility / 1000).toFixed(1)} km`;

    // Update additional info
    document.getElementById('feelsLike').textContent = `${Math.round(main.feels_like)}°C`;
    document.getElementById('sunrise').textContent = new Date(sys.sunrise * 1000).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'
    });
    document.getElementById('sunset').textContent = new Date(sys.sunset * 1000).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'
    });
    document.getElementById('dewPoint').textContent = `${Math.round(main.temp - ((100 - main.humidity) / 5))}°C`;

    weatherContainer.style.display = 'block';
}

// Display 5-Day Forecast
function displayForecast(data) {
    const forecastContainer = document.getElementById('forecastContainer');
    forecastContainer.innerHTML = '';

    // Get one forecast per day (using 12:00 UTC)
    const dailyForecasts = {};
    
    data.list.forEach(item => {
        const date = new Date(item.dt * 1000).toDateString();
        
        if (!dailyForecasts[date]) {
            dailyForecasts[date] = item;
        }
    });

    // Display next 5 days
    Object.values(dailyForecasts).slice(0, 5).forEach(item => {
        const { main, weather, dt } = item;
        const icon = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
        const date = new Date(dt * 1000);
        const dateStr = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

        const forecastHTML = `
            <div class="forecast-item">
                <div class="forecast-date">${dateStr}</div>
                <img src="${icon}" alt="${weather[0].description}" class="forecast-icon">
                <div class="forecast-temp">${Math.round(main.temp)}°C</div>
                <div class="forecast-desc">${weather[0].description}</div>
            </div>
        `;

        forecastContainer.innerHTML += forecastHTML;
    });
}

// Handle Suggestions
async function handleSuggestions(e) {
    const value = e.target.value.trim();
    
    if (value.length < 2) {
        suggestionsDiv.innerHTML = '';
        return;
    }

    try {
        const response = await fetch(`${GEO_API_URL}/direct?q=${value}&limit=5&appid=${API_KEY}`);
        const data = await response.json();
        
        suggestionsDiv.innerHTML = '';
        
        if (data.length > 0) {
            data.forEach(city => {
                const suggestionEl = document.createElement('div');
                suggestionEl.className = 'suggestion-item';
                suggestionEl.textContent = `${city.name}, ${city.country}`;
                suggestionEl.onclick = () => {
                    searchInput.value = city.name;
                    suggestionsDiv.innerHTML = '';
                    searchWeather();
                };
                suggestionsDiv.appendChild(suggestionEl);
            });
        }
    } catch (error) {
        console.error('Error fetching suggestions:', error);
    }
}

// Helper Functions
function showLoading(show) {
    loadingEl.classList.toggle('show', show);
}

function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.add('show');
}

function hideError() {
    errorMessage.classList.remove('show');
}

// Load default city on page load (London)
window.addEventListener('load', () => {
    searchInput.value = 'London';
    searchWeather();
});