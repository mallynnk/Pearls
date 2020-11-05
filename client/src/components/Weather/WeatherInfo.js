import React from "react";


import Weather from "./Weather";

function WeatherInfo(props) {
  const { temp, humidity, desc, icon } = props.data;
const weatherIcon = `http://openweathermap.org/img/wn/${icon}.png`
  return (
    <React.Fragment>
      <p>{desc}</p>
      <div>
        <p>Current Temperature</p>
        <p>{temp}°F</p>
      </div>
      <div>
        <p>Current Humidity</p>
        <p>{humidity}°</p>
      </div>
      
    </React.Fragment>
  );
}

export default WeatherInfo;
