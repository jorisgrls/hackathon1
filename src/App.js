import './App.css';
import Valise from './Valise' ;
import ForecastWeather from './components/ForecastWeather';
import SearchSection from './components/SearchSection';
import React, { useEffect, useState } from "react";
import convertisseur from "./utils/convertisseur";
import fetchMeteo from './utils/fetchMeteo';
import Loading2 from './components/Loading2';

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


function App() {
  const [searchValue, setSearchValue] = useState("");
  const [searchValueConvert, setSearchValueConvert] = useState({});
  const [coordsNotFound, setCoordsNotFound] = useState(false);
  const [selectedValueDays, setSelectedValueDays] = useState(1);
  const [selectedValueDuration, setSelectedValueDuration] = useState(1);
  const [displaySearchSection, setDisplaySearchSection] = useState(true)
  const [isLoading, setIsLoading] = useState(false);
  const handleOnClick = async () => {
    setCoordsNotFound(false);
    const searchValueCoords = await convertisseur(searchValue);
    if(searchValueCoords.lat){

      setSearchValueConvert(searchValueCoords);
      // Faire la gestion ici quand la ville rentré existe
      setDisplaySearchSection(false);
      setIsLoading(true)

      setTimeout(() => {
        setIsLoading(false)
      }, 10000);

    }
    else{
      setCoordsNotFound(true);
    }

  }
  useEffect(()=>{
    console.log(selectedValueDays,selectedValueDuration);
  },[selectedValueDays, selectedValueDuration])
  return isLoading ? <Loading2/> : (
    
    <div className="bg-main bg-no-repeat bg-cover flex items-center justify-center h-100 md:h-screen py-4 bg-blue-800 dark:bg-gray-800">
      <SearchSection setDisplaySearchSection={setDisplaySearchSection} displaySearchSection={displaySearchSection} selectedValueDays={selectedValueDays} setSelectedValueDays={setSelectedValueDays} selectedValueDuration={selectedValueDuration} setSelectedValueDuration={setSelectedValueDuration} isError={coordsNotFound} searchValue={searchValue} setSearchValue={setSearchValue} onClick={handleOnClick}/>
    </div>
    
  );
}

export default App;
