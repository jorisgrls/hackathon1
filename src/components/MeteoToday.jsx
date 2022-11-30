/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ForecastWeather from './ForecastWeather';

function MeteoToday() {
  const [coordsUser, setCoordsUser] = useState(null);
  const [isError, setIsError] = useState(true);
  const [data, setData] = useState();
  const success = ({ coords }) => {
    setIsError(false);
    setCoordsUser({ lat: coords.latitude, lon: coords.longitude });
  };
  const error = () => {
    setIsError(true);
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error);
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (coordsUser) {
          const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${coordsUser.lat}&longitude=${coordsUser.lon}&daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&timezone=auto`);
          setData(response.data);
        }
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchData();
  }, [coordsUser]);
  return (
    <div>
      {isError
        ? (
          <div className="text-white font-medium flex justify-center items-center rounded h-[200px] w-100 px-4">
            <p className="text-center">Vous n&apos;avez pas autorisé la géolocalisation. Si vous souhaitez voir la météo de votre ville, vous devez activer la géolocalisation dans vos paramètres.</p>
          </div>
        )
        : (
          <div className="flex justify-center items-center rounded-l w-100">
            {data && <ForecastWeather data={data} displayNextDays limit={4} />}
          </div>
        )}
    </div>
  );
}

export default MeteoToday;
