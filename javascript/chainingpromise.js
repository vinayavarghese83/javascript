// Function to simulate fetching weather data from an API
function fetchWeather(city) {
    return new Promise((resolve, reject) => {
      // Simulate API call with a delay
      setTimeout(() => {
        const weatherData = {
          temperature: 25, // in Celsius
          conditions: 'Clear',
        };
        resolve(weatherData);
      }, 1000);
    });
  }
  
  // Function to convert temperature from Celsius to Fahrenheit
  function convertToFahrenheit(celsiusTemp) {
    return new Promise((resolve, reject) => {
      // Conversion formula: (Celsius * 9/5) + 32
      const fahrenheitTemp = (celsiusTemp * 9) / 5 + 32;
      resolve(fahrenheitTemp);
    });
  }
  
  // Function to display weather information
  function displayWeather(weatherInfo) {
    return new Promise((resolve, reject) => {
      // Format the weather information
      const formattedWeather = `Temperature: ${weatherInfo.temperature}°F, Conditions: ${weatherInfo.conditions}`;
      resolve(formattedWeather);
    });
  }
  
  // Example usage
  fetchWeather('New York')
    .then(weatherData => convertToFahrenheit(weatherData.temperature))
    .then(convertedTemp => displayWeather({ temperature: convertedTemp, conditions: 'Sunny' }))
    .then(formattedWeather => console.log(formattedWeather))
    .catch(error => console.error('Error:', error.message));
  