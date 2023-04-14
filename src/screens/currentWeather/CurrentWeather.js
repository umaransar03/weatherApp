import './CurrentWeather.css';
import React from 'react'

const CurrentWeather = () => {
  return (
    <div>
        <div className='weatherCard'>
            <div className='cityName'>
                <p className='city'>Lahore</p>
                <p className='description'>Sunny</p>
            </div>
            <img alt='weather' className='weatherIcon' src="icons/01d.png" />
        </div>
    </div>
  )
}

export default CurrentWeather