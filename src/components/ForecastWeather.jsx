import React from 'react';
import weathericons from '../utils/weathericons.js';

const ForecastWeather = ({data}) => {
    const days = [
        'Dim',
        'Lun',
        'Mar',
        'Mer',
        'Jeu',
        'Ven',
        'Sam'
    ]
    return (
        <div className='w-full h-fit bg-cyan-800 opacity-80 rounded-xl p-4 flex flex-col items-center text-slate-300 font-thin'>
            <div className='w-full h-fit flex justify-around border-b'>
                <div className='h-full'>
                    <h2 className='text-xl'>Maintenant</h2>
                    <p className='text-sm'>{data.current_weather.time}</p>
                    <div className='h-24'>
                        <img className='h-full w-auto' src={
                            weathericons.filter((e) => e.id_weathercode.includes(data.current_weather.weathercode))[0].icon_url
                        } alt="" /></div>
                </div>
                <div className='flex items-center'>
                    <p className='text-5xl'>{Math.round(data.current_weather.temperature)}°C</p>
                    {/* <p>Vent : {data.current_weather.windspeed} km/h</p> */}
                </div>
            </div>
            <div className='w-full h-1/3'>
                <ul className='flex w-full flex-wrap justify-center'>
                    {
                        data.daily.time.map((elem, index) => (
                            <li key={index} className='m-3 p-1 h-24 w-14 text-center'>
                                <p>{days[new Date(elem).getDay()]}</p>
                                <div classname='h-3 w-3'><img classname='h-full w-auto' src={
                                    weathericons.filter((icon) => icon.id_weathercode.includes(data.daily.weathercode[index]))[0].icon_url
                                } alt="" /></div>
                                <p className='text-sm'>{Math.round(data.daily.temperature_2m_min[index])}°/{Math.round(data.daily.temperature_2m_max[index])}°</p>

                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default ForecastWeather;