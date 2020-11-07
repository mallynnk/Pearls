import React, { Component, useState, useEffect } from "react";
import WeatherInfo from "./WeatherInfo";
import dotenv from "dotenv";
require("dotenv").config();

function WeatherContainer() {
  const myKey = process.env.REACT_APP_WEATHER_API;
  console.log('weather component is rendering')
  const lat = 34;
  const lon = -76;
  const [weatherData, setWeatherData] = useState({
    temp: null,
    humidity: null,
    desc: null,
    icon: null
  });
  useEffect(( ) => {
      console.log('[useEffect] is triggering')
      getWeatherData() 
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${myKey}`
          )
            .then((response) => response.json())
            .then(data =>  
              console.log(data)
              
                
              // ======= The Code Below Works.....only Commented out to save API calls =====
              //   setWeatherData({
              //   temp: Math.floor((data.main.temp * 9) / 5 - 459.67),
              //   humidity: data.main.humidity,
              //   desc: data.weather[0].description,
              //   icon: data.weather[0].icon
              // })
            )
      
      setTimeout(() => {

      }, 8.64e+7)
  }, [])

  function getWeatherData() {
    // fetch(
    //   `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${myKey}`
    // )
    //   .then((response) => response.json())
    //   .then(data => setWeatherData({
    //       temp: Math.floor((data.main.temp * 9) / 5 - 459.67),
    //       humidity: data.main.humidity,
    //       desc: data.weather[0].description,
    //     })
    //   )
  }
//   getWeatherData() // this is where the infinite loop happens

  return (
    <section className="weatherBox" >
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

// class weather extends Component  {

//     render (data) {
//         console.log('weather is rendering')
//         return (
//             <div className='weatherBox'>
//                <p className="temp">15 degrees</p>
//                <p className="weatherDescription">Cloudy</p>
//             </div>
//         )
//     }

// }

// export default weather;
