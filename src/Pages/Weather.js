import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../Components/Nav";
import WeatherCard from "../Components/WeatherCard";
import { SEARCH_WEATHER } from "../app/RecipeAction";

const Weather = () => {
  const data = useSelector((state) => state.weather.weatherArticle);
  console.log(data);
  const [state, setState] = useState({
    value: "",
    status: false,
  });

  let today = new Date().toDateString();

  const key = "01aadc1ac4b67bef7f6ef3616ca24b4c";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${state.value}&appid=${key}`;
  // let today = new Date().toLocaleDateString();
  const dispatch = useDispatch();

  function updateWeather() {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: SEARCH_WEATHER, weatherData: data });
      });
  }

  const handleValue = (event) => {
    setState({
      ...state,
      value: event.target.value,
    });
  };

  const celcius = (kelvin) => {
    return kelvin - 273.15;
  };

  const handleSubmit = (event) => {
    return (
      event.preventDefault(), updateWeather(), setState({ ...state, value: "" })
    );
  };

  // console.log(typeof data.main);
  return (
    <div
      className={
        typeof data.main !== "undefined"
          ? Math.round(celcius(data.main.temp)) > 16
            ? "weatherContainer warm"
            : "weatherContainer"
          : "weatherContainer"
      }
    >
      <Nav />
      <main>
        <div className="weatherSearchBox">
          <form onSubmit={handleSubmit}>
            <input
              onChange={handleValue}
              value={state.value}
              type="text"
              className="weatherSearchbar"
              placeholder="Search weather..."
            />
          </form>
        </div>
        {typeof data.main !== "undefined" ? (
          <WeatherCard
            name={data.name}
            country={data.sys.country}
            weatherCount={Math.round(celcius(data.main.temp)) + "°C"}
            today={today}
            weatherDescription={data.weather[0].description}
          />
        ) : (
          <div></div>
        )}
      </main>
    </div>
  );
};

export default Weather;
