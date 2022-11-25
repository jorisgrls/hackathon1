import React from 'react';
import weathericons from '../utils/weathericons.js';

const data = {
    "latitude": 43.6,
    "longitude": 1.44,
    "generationtime_ms": 0.9080171585083008,
    "utc_offset_seconds": 3600,
    "timezone": "Europe/Paris",
    "timezone_abbreviation": "CET",
    "elevation": 156,
    "current_weather": {
        "temperature": 12.4,
        "windspeed": 8.5,
        "winddirection": 118,
        "weathercode": 2,
        "time": "2022-11-24T12:00"
    },
    "daily_units": {
        "time": "iso8601",
        "weathercode": "wmo code",
        "temperature_2m_max": "°C",
        "temperature_2m_min": "°C"
    },
    "daily": {
        "time": [
            "2022-11-21",
            "2022-11-22",
            "2022-11-23",
            "2022-11-24",
            "2022-11-25"
        ],
        "weathercode": [
            71,
            45,
            0,
            61,
            95
        ],
        "temperature_2m_max": [
            14.7,
            12,
            11,
            11.8,
            10
        ],
        "temperature_2m_min": [
            5.6,
            6,
            8.3,
            5.6,
            3
        ]
    }
}


const ForecastWeather = () => {

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
        <div className='w-full h-fit bg-cyan-800 opacity-70 rounded-xl py-4 px-6 flex flex-col items-center text-slate-300 font-thin'>
            <div className='w-full h-fit flex justify-around border-b border-slate-300'>
                <div className='h-full'>
                    <h2 className='text-xl'>Maintenant</h2>
                    <p className='text-sm'>{new Date(data.current_weather.time).toLocaleDateString()}</p>
                    <div className='h-28 pl-8'>
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
                            <li key={index} className='m-4 h-24 w-14 text-center'>
                                <p>{days[new Date(elem).getDay()]}</p>
                                <div classname='h-3 w-3'><img classname='h-full w-auto' src={
                                    weathericons.filter((icon) => icon.id_weathercode.includes(data.daily.weathercode[index]))[0].icon_url
                                } alt="" /></div>
                                <p className='text-sm'>{Math.round(data.daily.temperature_2m_min[index])}° / {Math.round(data.daily.temperature_2m_max[index])}°</p>

                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default ForecastWeather;