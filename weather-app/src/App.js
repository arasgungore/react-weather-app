// App.js
import React, { useState, useEffect } from 'react';
import WeatherCard from './components/WeatherCard';
import Calendar from './components/Calendar';
import MeteorologicalPredictions from './components/MeteorologicalPredictions';
import { getWeatherData } from './services/WeatherService';

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [date, setDate] = useState('');
  const [meteorologicalPredictions, setMeteorologicalPredictions] = useState('');

  useEffect(() => {
    const currentDate = new Date().toDateString();
    const predictions = 'Meteorological predictions for the week: ...';

    setDate(currentDate);
    setMeteorologicalPredictions(predictions);
  }, []);

  const handleSearch = async () => {
    try {
      const data = await getWeatherData(city);
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {weatherData && <WeatherCard data={weatherData} />}
      {date && <Calendar date={date} />}
      {meteorologicalPredictions && (
        <MeteorologicalPredictions predictions={meteorologicalPredictions} />
      )}
    </div>
  );
};

export default App;
