# Weather Dashboard 🌤️

A beautiful and responsive weather dashboard that fetches real-time weather data from the OpenWeatherMap API.

## Features

✨ **Current Weather Display**
- Temperature and weather conditions
- Humidity, wind speed, pressure, and visibility
- Real-time sunrise and sunset times
- "Feels like" temperature

📅 **5-Day Forecast**
- Daily weather predictions
- Temperature and weather icons
- Easy-to-read forecast cards

🔍 **City Search**
- Search weather by city name
- Auto-complete suggestions
- Support for cities worldwide

📱 **Responsive Design**
- Works on desktop, tablet, and mobile
- Beautiful gradient background
- Smooth animations and transitions

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with gradients and animations
- **JavaScript (ES6+)** - Dynamic functionality
- **OpenWeatherMap API** - Real-time weather data
- **Font Awesome** - Weather and weather-related icons

## Getting Started

### Prerequisites
- A web browser (Chrome, Firefox, Safari, Edge)
- Internet connection for API requests

### Installation

1. Clone the repository:
```bash
git clone https://github.com/nadilmodan12-boop/meu-amor.git
cd meu-amor
```

2. Open `index.html` in your web browser

### Usage

1. The dashboard loads with London's weather by default
2. Enter any city name in the search box
3. Select from suggestions or press Enter
4. View current weather and 5-day forecast

## API Configuration

This project uses the **OpenWeatherMap API** (free tier).

- API Base URL: `https://api.openweathermap.org/data/2.5`
- Free API Key included (limited requests)
- For production, get your own free key at: https://openweathermap.org/api

### To use your own API key:

1. Get a free API key from [OpenWeatherMap](https://openweathermap.org/api)
2. Replace the `API_KEY` value in `script.js`:

```javascript
const API_KEY = 'YOUR_API_KEY_HERE';
```

## Project Structure

```
meu-amor/
├── index.html          # HTML structure
├── styles.css          # Styling and responsive design
├── script.js           # JavaScript functionality
└── README.md           # Documentation
```

## Features Breakdown

### Current Weather Section
- City name and country
- Current date and time
- Weather icon and temperature
- Weather description
- Humidity percentage
- Wind speed
- Atmospheric pressure
- Visibility distance

### Additional Information
- Sunrise time
- Sunset time
- Feels like temperature
- Dew point

### Forecast Section
- Next 5 days of weather
- Daily temperature
- Weather conditions with icons
- Easy comparison between days

## Responsive Breakpoints

- **Desktop**: 1200px+ (full layout)
- **Tablet**: 768px - 1199px (adjusted grid)
- **Mobile**: Below 768px (optimized for small screens)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- [ ] Temperature unit toggle (Celsius/Fahrenheit)
- [ ] Multiple city comparison
- [ ] Weather alerts and warnings
- [ ] Hourly forecast
- [ ] Weather history graphs
- [ ] Favorite cities bookmarks
- [ ] Dark/Light theme toggle
- [ ] Geolocation support
- [ ] Air quality index
- [ ] UV index information

## Troubleshooting

### "City not found" error
- Check spelling of the city name
- Try using the full city name with country
- Some small towns may not be available in the API

### Weather data not loading
- Check internet connection
- Verify API key is valid
- Check browser console for error messages
- API rate limit may be exceeded (free tier limits: 60 calls/minute)

### Images not loading
- Weather icons come from OpenWeatherMap CDN
- Ensure stable internet connection
- Check if CDN is accessible in your region

## API Rate Limits

Free OpenWeatherMap API includes:
- 60 API calls per minute
- 1,000 calls per day
- 30 days of forecast data

For higher limits, consider upgrading to a paid plan.

## Credits

- Weather data: [OpenWeatherMap](https://openweathermap.org/)
- Icons: [Font Awesome](https://fontawesome.com/)

## License

This project is licensed under the Apache License 2.0 - see the LICENSE file for details.

## Author

**Nadil Modan**
- GitHub: [@nadilmodan12-boop](https://github.com/nadilmodan12-boop)

## Support

If you encounter any issues or have suggestions, please open an issue on GitHub.

---

**Enjoy checking the weather! 🌡️☀️🌧️**