import React, { useEffect, useState } from "react";
import axios from "axios";
import './WeatherApi.css'


export const WeatherApi = () => {
  const [temperature, setTemperature] = useState("");
  const [desc, setDesc] = useState("");
  const [city, setCity] = useState("Saint Petersburg");
 

  const getWeatherData = (city) => {
    axios({
      method: "GET",
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=9563a1b4990c88e627f33542fa8f6735`,
    })
      .then((response) => {
        console.log(response);
        setTemperature(response.data.main.temp - 273.15);
        setDesc(response.data.weather[0].main);

      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(()=>{
    getWeatherData(city)
      }, [desc, city, temperature])

      const weather = () => {
        if (desc === 'Clouds') {
          return "🌥" 
        } else if (desc === 'Clear') {
          return "🌞"
        } else if (desc === 'Atmosphere') {
          return "🌬"
        } else if (desc === 'Snow') {
          return "🌨"
        } else if (desc === 'Rain') {
          return "🌧"
        } else if (desc === 'Drizzle') {
          return "🌦"
        } else if (desc === 'Thunderstorm') {
          return "🌪"
        }
      }

  return (
    <>
      <div className="api-weather-container">
          {/* <p >Город: {city}</p> */}
          <p>{Math.round(Math.round(temperature * 100) / 100)} ℃<span> {weather()} </span></p>
        {/* <input type="text" readOnly value={city} onChange={(e) => setCity(e.target.value)} /> */}
        {/* <button className="btn-about a" >Click</button> */}
      </div>
    </>
  );
};
