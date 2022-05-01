import React from 'react'
import WeatherData from './weatherData'
import WeatherIcon from './WeatherIcon'

export default function WeatherForecast(props) {
    return (
        <div className="weather">
            {/* <img src={props.img} alt="" /> */}
            <WeatherIcon img={props.img} />
            {/* <p><span>conditions:</span> {props.conditions}</p>
            <p><span>time:</span> {props.time}</p> */}
            <WeatherData conditions={props.conditions} time={props.time} />
        </div>
    )
}

// also can do 
// const WeatherForecast = (props) => {
//etc
// } 
//export default WeatherForecast