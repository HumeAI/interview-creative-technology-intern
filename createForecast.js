const fs = require('fs');

// Function to generate a random temperature between min and max (inclusive)
function generateRandomTemperature(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate an array of forecast objects
function generateForecast() {
  const forecast = [];
  const startDate = new Date('2023-05-01T00:00:00Z');

  for (let i = 0; i < 168; i++) {
    const currentDate = new Date(startDate.getTime() + i * 3600000); // Adding one hour (3600000 milliseconds)
    const description = i % 3 === 0 ? 'Cloudy' : i % 3 === 1 ? 'Sunny' : 'Raining';
    const temperature = generateRandomTemperature(15, 30);

    forecast.push({
      description,
      date: currentDate.toISOString(),
      temperature
    });
  }

  return forecast;
}

// Generate the forecast array
const forecastData = generateForecast();

// Convert the forecast array to JSON
const jsonData = JSON.stringify(forecastData, null, 2);

// Save the JSON data to a file
fs.writeFile('forecast.json', jsonData, 'utf8', (err) => {
  if (err) {
    console.error('An error occurred while writing the file:', err);
  } else {
    console.log('forecast.json file has been created successfully!');
  }
});
