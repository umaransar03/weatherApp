import React from 'react'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion'
import './Forecast.css';


const Forecast = ({ data }) => {

    console.log(data)

    const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));

    return (
        <div>
            <label className='title'>Daily Forecast</label>
            <div className='forecastContainer'>
                <Accordion allowZeroExpanded>
                    {data.list.splice(0, 7).map((item, idx) => (
                        <AccordionItem key={idx}>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    <div className='dailyItem'>
                                        <img alt='weather' className='iconSmall' width={40} src={`icons/${item.weather[0].icon}.png`} />
                                        <label className='Day'>{forecastDays[idx]}</label>
                                        <label className='desc'>
                                            {item.weather[0].description}
                                        </label>
                                        <label className='min-max'>
                                            {Math.round(item.main.temp_min)}°C / {" "}
                                            {Math.round(item.main.temp_max)}°C
                                        </label>
                                    </div>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className='dailyGrid'>
                                    <div className='dailyItems'>
                                        <label >Feels Like</label>
                                        <label >{Math.round(item.main.feels_like)}°C</label>
                                    </div>
                                    <div className='dailyItems'>
                                        <label >Wind Speed</label>
                                        <label >{item.wind.speed} m/s</label>
                                    </div>
                                    <div className='dailyItems'>
                                        <label >Humidity</label>
                                        <label >{item.main.humidity}%</label>
                                    </div>
                                    <div className='dailyItems'>
                                        <label >Pressure</label>
                                        <label >{item.main.pressure} hPa</label>
                                    </div>
                                    <div className='dailyItems'>
                                        <label >Clouds</label>
                                        <label >{item.clouds.all}%</label>
                                    </div>
                                    <div className='dailyItems'>
                                        <label >Sea Level</label>
                                        <label >{item.main.sea_level}m</label>
                                    </div>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    )
}

export default Forecast