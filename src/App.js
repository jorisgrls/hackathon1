import './App.css';
import SearchSection from './components/SearchSection';
import React, { useState, useEffect, useMemo } from "react";
import convertisseur from "./utils/convertisseur";



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
      
    }
    else{
      setCoordsNotFound(true);
    }

  }
  useEffect(()=>{
    console.log(selectedValueDays,selectedValueDuration);
  },[selectedValueDays, selectedValueDuration])
  return (
    
    <div className="bg-main bg-no-repeat bg-cover flex items-center justify-center h-100 pb-20 md:min-h-screen py-4 bg-blue-800 dark:bg-gray-800">
      <SearchSection setDisplaySearchSection={setDisplaySearchSection} displaySearchSection={displaySearchSection} selectedValueDays={selectedValueDays} setSelectedValueDays={setSelectedValueDays} selectedValueDuration={selectedValueDuration} setSelectedValueDuration={setSelectedValueDuration} isError={coordsNotFound} searchValue={searchValue} setSearchValue={setSearchValue} onClick={handleOnClick}/>
    </div>
    )

}

export default App;
