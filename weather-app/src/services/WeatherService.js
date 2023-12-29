import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const getWeatherData = async (city) => {
  try {
    const response = await axios.get(apiUrl, {
      params: {
        q: city,
        appid: apiKey,
        units: 'metric',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { getWeatherData };
