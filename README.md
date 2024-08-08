# Weather App

## Overview

The Weather App is a simple web application that allows users to search for the current weather conditions of any city. It uses the OpenWeatherMap API to fetch weather data and displays it in a user-friendly interface.

## Features

- Search for weather information by city name.
- Display current weather conditions including temperature, humidity, pressure, and wind speed.
- Responsive design to provide a good user experience on both desktop and mobile devices.

## Technologies Used

- **Frontend**: React, CSS
- **Backend**: Node.js, Express, Axios
- **API**: OpenWeatherMap

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/SabirinMohamedAli/Weather-app.git
    cd weather-app
    ```

2. **Backend Setup:**

    ```bash
    cd weather-app
    npm install
    ```

    - Create a `server.js` file with the following content and replace `'YOUR_OPENWEATHERMAP_API_KEY'` with your actual OpenWeatherMap API key:

    ```javascript
    const express = require('express');
    const axios = require('axios');
    const cors = require('cors');
    const bodyParser = require('body-parser');

    const app = express();
    const PORT = process.env.PORT || 3001;

    app.use(cors());
    app.use(bodyParser.json());

    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';

    app.get('/api/weather', async (req, res) => {
      const { city } = req.query;
      try {
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
        res.json(response.data);
      } catch (error) {
        res.status(500).json({ error: 'Error fetching weather data' });
      }
    });

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
    ```

3. **Frontend Setup:**

    ```bash
    cd weather-app-client
    npm install
    ```

4. **Running the Application:**

    - Start the backend server:

        ```bash
        node server.js
        ```

    - Start the frontend:

        ```bash
        npm start
        ```

    - Open your browser and navigate to `http://localhost:3000`.

## Usage

- Enter the name of a city in the search box and click the "Search" button to retrieve the current weather information for that city.


