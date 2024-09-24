document.addEventListener('DOMContentLoaded', () => {
    fetchStockData();
    fetchWeatherData();
});

// Fetch stock data from Alpha Vantage API
function fetchStockData() {
    const stockSymbol = 'AAPL';  // You can replace this with any symbol like TSLA, GOOGL, etc.
    const apiKey = 'TA3FFHL6D1MHSWSB';
    const stockUrl = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=${apiKey}`;

    fetch(stockUrl)
        .then(response => response.json())
        .then(data => {
            const stockData = data['Global Quote'];
            document.getElementById('stock-symbol').innerText = stockData['01. symbol'];
            document.getElementById('stock-price').innerText = stockData['05. price'];
            document.getElementById('stock-change').innerText = stockData['09. change'];
        })
        .catch(error => console.error('Error fetching stock data:', error));
}

// Fetch weather data from WeatherAPI
function fetchWeatherData() {
    const city = 'London';  // Replace with the desired city
    const apiKey = '900248a67e3844be87960906242409';
    const weatherUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    fetch(weatherUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById('weather-city').innerText = data.location.name;
            document.getElementById('weather-temp').innerText = data.current.temp_c;
            document.getElementById('weather-condition').innerText = data.current.condition.text;
        })
        .catch(error => console.error('Error fetching weather data:', error));
}
