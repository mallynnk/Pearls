import React, { Component, useState, useEffect } from "react";
import WeatherInfo from "./WeatherInfo";
import dotenv from "dotenv";
require("dotenv").config();
// const myKey = process.env.REACT_APP_WEATHER_API;
const myVisibleKey = 'eba23db029bb076b1335ac28a0b028bb'
// console.log(myKey)
console.log(process.env.REACT_APP_WEATHER_API, 'API KEY');
// console.log('eba23db029bb076b1335ac28a0b028bb')

function WeatherContainer() {
  
  const lat = 34;
  const lon = -76;
  const [weatherData, setWeatherData] = useState({
    temp: null,
    humidity: null,
    desc: null,
    icon: null,
    wind: null
  });
  useEffect(( ) => {
      console.log('[useEffect] is triggering')
      getWeatherData() 
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${myVisibleKey}`
          )
            .then((response) => response.json())
            .then(data =>  
              // console.log(data)
              
                
              // ======= The Code Below Works.....only Commented out to save API calls =====
                setWeatherData({
                temp: Math.floor((data.main.temp * 9) / 5 - 459.67),
                humidity: data.main.humidity,
                desc: data.weather[0].description,
                wind: data.wind.speed,
                icon: data.weather[0].icon
              })
            )
      
      setTimeout(() => {

      }, 8.64e+7)
  }, [])
function getWeatherData(){}


  return (
    <section className="weatherBox card col" >
      <h5>Current Weather on the Farm</h5>
      
      <section className="weatherInfo">
        {weatherData.temp === null ? (
          <p>
            Getting Current Weather <i className="material-icons">wb_sunny</i>
          </p>
        ) : (
          <WeatherInfo data={weatherData} />
        )}
      </section>
    </section>
  );
}

export default WeatherContainer;


