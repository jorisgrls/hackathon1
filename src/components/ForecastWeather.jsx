/* eslint-disable max-len */
/* eslint-disable array-callback-return */
import React from 'react';
import PropTypes from 'prop-types';
import resetCityString from '../utils/resetCityString';
import weathericons from '../utils/weathericons';

function ForecastWeather({
  searchValue, data, displayNextDays, limit, isMeteoToday,
}) {
  const days = [
    'Dim',
    'Lun',
    'Mar',
    'Mer',
    'Jeu',
    'Ven',
    'Sam',
  ];
  return (
    <div className={`w-full h-fit bg-gray-800 gap-4 bg-opacity-30 backdrop-blur-lg py-4 px-6 flex flex-col items-center ${isMeteoToday ? 'md:rounded-l' : 'md:rounded-lg'} text-slate-300`}>
      <div className="w-full h-fit flex justify-around border-slate-300">
        <div className="flex flex-col md:flex-row items-center gap-4 mb-6 md:mb-0 py-4 md:py-0">
          <div className="flex flex-col">
            <h2 className="text-xl">
              Aujourd&apos;hui
              {searchValue ? ` à ${resetCityString(searchValue)}` : ' chez vous'}
            </h2>
          </div>
          <div className="flex items-center">
            <div className="flex items-center">
              <img
                className=" h-28 w-28"
                src={weathericons.filter((e) => e.id_weathercode.includes(data.current_weather.weathercode))[0].icon_url}
                alt="icon"
              />

            </div>
            <p className="text-5xl font-medium">
              {Math.round(data.current_weather.temperature)}
              °C
            </p>
          </div>
        </div>
      </div>
      {displayNextDays && (
        <div className="w-full">
          <ul className="flex w-full flex-wrap gap-8 justify-center">
            {
                            data.daily.time.map((elem, index) => index < limit
                                    && (
                                    <li key={`day_${elem}`} className="flex flex-col text-center">
                                      <p>
                                        {days[new Date(elem).getDay()]}
                                        {' '}
                                        {elem[8]}
                                        {elem[9]}
                                        /
                                        {elem[5]}
                                        {elem[6]}
                                      </p>
                                      <div className="h-20 w-20">
                                        <img
                                          className="h-full w-full"
                                          src={
                                            weathericons.filter((icon) => icon.id_weathercode.includes(data.daily.weathercode[index]))[0].icon_url
                                        }
                                          alt=""
                                        />
                                      </div>
                                      <p className="text-sm">
                                        {Math.round(data.daily.temperature_2m_min[index])}
                                        ° /
                                        {' '}
                                        {Math.round(data.daily.temperature_2m_max[index])}
                                        °
                                      </p>
                                    </li>
                                    ))
                        }
          </ul>
        </div>
      )}
    </div>
  );
}

ForecastWeather.propTypes = {
  searchValue: PropTypes.string,
  data: PropTypes.shape,
  displayNextDays: PropTypes.bool,
  limit: PropTypes.number,
  isMeteoToday: PropTypes.bool,

};

ForecastWeather.defaultProps = {
  searchValue: '',
  data: {},
  displayNextDays: true,
  limit: 7,
  isMeteoToday: false,
};

export default ForecastWeather;
