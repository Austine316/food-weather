import React from "react";

const WeatherCard = (props) => {
  return (
    <>
      <div className="locationBox">
        <div className="location">
          {props.name}, {props.country}
        </div>
        <div className="date">{props.today}</div>
      </div>
      <div className="weatherBox">
        <div className="temp">{props.weatherCount}</div>
        <div className="weather">{props.weatherDescription}</div>
      </div>
    </>
  );
};

export default WeatherCard;
