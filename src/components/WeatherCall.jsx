import React, { useState, useEffect } from 'react';
import axios from "axios"

const WeatherCall = () => {

const [data, setData] = useState()
const [startDate, setStartDate] = useState('2022-11-24')
const [endDate, setEndDate] = useState('2022-11-26')
const [latitude, setLatitude] = useState('43.60')
const [longitude, setLongitude] = useState('1.44')

useEffect(() => {
    axios
      .get(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&timezone=auto&start_date=${startDate}&end_date=${endDate}`
      )
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error.message));
  }, []);

    return (
        <>   
        </>
    );
};

export default WeatherCall;