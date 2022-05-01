import React from "react";
import "./styles.css";
import weatherData from "./weatherData.js"
import WeatherForecast from "./components/WeatherForecast";
import WeatherInfo from "./components/WeatherInfo";

export default function App() {
  // console.log(weatherData)
  const weatherBar = weatherData.map((element, index) => {
    return <WeatherForecast 
    //you can use {...element} here instead of these three tags individually!
    img={element.img} 
    conditions={element.conditions} 
    time = {element.time} 
    // ---
    key={index} />
  })
  return (
    <div className="App">
      <h1>My WeatherIcons App</h1> 
      <section>{weatherBar}</section>
    </div>
  );
}
