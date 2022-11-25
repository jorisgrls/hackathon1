import './App.css';
import ForecastWeather from './components/ForecastWeather';
import SearchSection from './components/SearchSection';
import React, { useEffect, useState } from "react";
import convertisseur from "./utils/convertisseur";
import fetchMeteo from './utils/fetchMeteo';
import axios from "axios";
import dateDepart from "./utils/dateDepart"
import dateRetour from "./utils/dateRetour"

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [searchValueConvert, setSearchValueConvert] = useState({});
  const [coordsNotFound, setCoordsNotFound] = useState(false);
  const [selectedValueDays, setSelectedValueDays] = useState(1);
  const [selectedValueDuration, setSelectedValueDuration] = useState(1);
  const [displaySearchSection, setDisplaySearchSection] = useState(true);
  const [data,setData] = useState();
  let startDate;
  let endDate;
  const handleOnClick = async () => {
    setCoordsNotFound(false);
    const searchValueCoords = await convertisseur(searchValue);
    if(searchValueCoords.lat){
      const fetchData = async () => {
        console.log(`https://api.open-meteo.com/v1/forecast?latitude=${searchValueCoords.lat}&longitude=${searchValueCoords.lon}&daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&timezone=auto${selectedValueDays && selectedValueDuration ? `&start_date=${dateDepart(selectedValueDays)}&end_date=${dateRetour(selectedValueDays,selectedValueDuration)}` : ""}`)
          const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${searchValueCoords.lat}&longitude=${searchValueCoords.lon}&daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&timezone=auto${selectedValueDays && selectedValueDuration ? `&start_date=${dateDepart(selectedValueDays)}&end_date=${dateRetour(selectedValueDays,selectedValueDuration)}` : ""}`)
          setData(response.data);   
      }
      fetchData();
      setDisplaySearchSection(false);

    }
    else{
      setCoordsNotFound(true);
    }

  }


  return (
    <div className="bg-main bg-no-repeat bg-cover flex items-center justify-center h-100 md:h-screen py-4 bg-blue-800 dark:bg-gray-800">
      <SearchSection data={data} setDisplaySearchSection={setDisplaySearchSection} displaySearchSection={displaySearchSection} selectedValueDays={selectedValueDays} setSelectedValueDays={setSelectedValueDays} selectedValueDuration={selectedValueDuration} setSelectedValueDuration={setSelectedValueDuration} isError={coordsNotFound} searchValue={searchValue} setSearchValue={setSearchValue} onClick={handleOnClick}/>
    </div>
  );
}

export default App;
