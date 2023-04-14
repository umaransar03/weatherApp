import Search from "./screens/Search/Search";
import './App.css';
import CurrentWeather from "./screens/currentWeather/CurrentWeather";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./screens/api/API";
import { useState } from "react";
import Forecast from "./screens/forecast/Forecast";


function App() {

  const [currentWeather, setCurrentWeather] = useState(null);
  const [currentforecast, setCurrentforecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
    const forecastFtech = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)

    Promise.all([currentWeatherFetch, forecastFtech])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse })
        setCurrentforecast({ city: searchData.label, ...forecastResponse })
      })
      .catch((err) => console.log(err));

  }

  // console.log(currentWeather)
  // console.log(currentforecast)

  return (
    <div className="container">
      <div className="search">
        <Search onSearchChange={handleOnSearchChange} />
        {currentWeather && <CurrentWeather data={currentWeather} />}
        {currentforecast &&  <Forecast data={currentforecast}/>}
      </div>
    </div>
  );
}

export default App;
