# react-weather-app

A simple weather app built with React.js and OpenWeatherMap API. It allows users to check the current weather for a specific city, view the current date, and access meteorological predictions.



## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [API Key](#api-key)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)



## Features

- **Weather Information:** Displays the current temperature and weather conditions for a given city.
- **Calendar:** Shows the current date.
- **Meteorological Predictions:** Provides meteorological predictions for the week (simulated).



## Getting Started

1. Navigate to the project directory:

```bash
cd weather-app
```

2. Install dependencies:

```bash
npm install
```



## Project Structure

The project follows the following structure:

```
weather-app/
|-- public/
|   |-- index.html
|-- src/
|   |-- components/
|   |   |-- WeatherCard.js
|   |   |-- Calendar.js
|   |   |-- MeteorologicalPredictions.js
|   |-- services/
|   |   |-- WeatherService.js
|   |-- App.js
|   |-- index.js
|-- .env
|-- .gitignore
|-- README.md
```

- `public/`: Contains the HTML file for the app.
- `src/`: Contains the source code.
  - `components/`: React components for WeatherCard, Calendar, and MeteorologicalPredictions.
  - `services/`: Weather service for fetching data from the OpenWeatherMap API.
  - `App.js`: Main component that ties everything together.
- `.env`: Environment file for storing the OpenWeatherMap API key (not included in the repository).
- `.gitignore`: Specifies files and directories to be ignored by Git.
- `package.json`: Contains project metadata and dependencies.



## Technologies Used

- [React](https://reactjs.org/): JavaScript library for building user interfaces.
- [Axios](https://axios-http.com/): Promise-based HTTP client for making API requests.
- [Styled-components](https://styled-components.com/): CSS-in-JS library for styling React components.



## API Key

This project requires an API key from [OpenWeatherMap](https://openweathermap.org/) to fetch weather data. Follow these steps to obtain a key:

1. Sign up for a free account on the OpenWeatherMap website.
2. Once logged in, navigate to the API keys section and generate a new key.
3. Create a `.env` file in the root of the project and add your API key:

```
REACT_APP_API_KEY=your_api_key_here
```



## Usage

1. Run the app:

```bash
npm start
```

2. Open your browser and navigate to <http://localhost:3000>.

3. Enter a city in the input field and click the "Search" button to see the weather information, current date, and meteorological predictions.



## Contributing

Feel free to contribute to this project. Fork the repository, make changes, and submit a pull request.



## License

This project is licensed under the [MIT License](LICENSE).



## Author

👤 **Aras Güngöre**

- LinkedIn: [@arasgungore](https://www.linkedin.com/in/arasgungore)
- GitHub: [@arasgungore](https://github.com/arasgungore)
