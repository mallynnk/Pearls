import React from "react";

function WeatherInfo(props) {
  const { temp, humidity, desc, wind, icon } = props.data;
const weatherIcon = `http://openweathermap.org/img/wn/${icon}.png`
  return (
    
    <React.Fragment>
      
      <div>
      <p>{desc}</p><img src={weatherIcon} className="weatherIcon" alt="current weather icon"></img>
        <p>Current Temperature</p>
        <p>{temp}°F</p>
      </div>
      <div>
        <p>Current Humidity</p>
        <p>{humidity}°</p>
      </div>
      <div>
        <p>Wind Speed</p>
        <p>{wind}mph</p>
      </div>
      
    </React.Fragment>
  );
}

export default WeatherInfo;
