// src/WeatherCard.js
import React from 'react';
import './WeatherCard.css';

const WeatherCard = ({ weather }) => {
  const { name, main, weather: weatherDetails, wind } = weather;

  const weatherIcon = weatherDetails[0].icon;
  const weatherDescription = weatherDetails[0].description;
  const temperature = Math.round(main.temp);
  const humidity = main.humidity;
  const pressure = main.pressure;
  const windSpeed = wind.speed;

  return (
    <div className="weather-card">
      <div className="weather-card-header">
        <h2>{name}</h2>
      </div>
      <div className="weather-card-body">
        <div className="weather-icon">
          <img src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`} alt={weatherDescription} />
        </div>
        <div className="weather-info">
          <div className="temperature">{temperature}°C</div>
          <div className="description">{weatherDescription}</div>
        </div>
      </div>
      <div className="weather-card-footer">
        <div className="details">
          <div>Humidity: {humidity}%</div>
          <div>Pressure: {pressure} hPa</div>
          <div>Wind: {windSpeed} km/h</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
