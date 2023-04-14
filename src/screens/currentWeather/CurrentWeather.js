import './CurrentWeather.css';
import React from 'react'

const CurrentWeather = ({ data }) => {
    return (
        <div>
            <div className='weatherCard'>
                <div className='top'>
                    <div className='cityName'>
                        <p className='city'>{data.city}</p>
                        <p className='description'>{data.weather[0].description}</p>
                    </div>
                    <img alt='weather' className='weatherIcon' src={`icons/${data.weather[0].icon}.png`} width={100} />
                </div>
                <div className='bottom'>
                    <p className='temperature'>{Math.round(data.main.temp)}°C</p>
                    <div className='details'>
                        <div className='parameter-row'>
                            <span className='parameter-label'>Feels Like</span>
                            <span className='parameter-value'>{Math.round(data.main.feels_like)}°C</span>
                        </div>
                        <div className='parameter-row'>
                            <span className='parameter-label'>Wind</span>
                            <span className='parameter-value'>{data.wind.speed} m/s</span>
                        </div>
                        <div className='parameter-row'>
                            <span className='parameter-label'>Humidity</span>
                            <span className='parameter-value'>{data.main.humidity}%</span>
                        </div>
                        <div className='parameter-row'>
                            <span className='parameter-label'>Pressure</span>
                            <span className='parameter-value'>{data.main.pressure} hPa</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather