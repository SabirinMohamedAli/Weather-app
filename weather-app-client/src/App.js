import React, { useState } from 'react';
import axios from 'axios';
import WeatherCard from './WeatherCard';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!city) {
      setError('Please enter a city name');
      return;
    }
    try {
      console.log(`Searching weather for city: ${city}`);
      const response = await axios.get(`http://localhost:3001/api/weather`, {
        params: { city }
      });
      console.log('Weather data:', response.data);
      setWeather(response.data);
      setError('');
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setError('Error fetching weather data');
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Weather App</h1>
        <div className="search">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name please"
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        {error && <div className="error">{error}</div>}
      </header>
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default App;
