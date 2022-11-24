import './App.css';
import SearchSection from './components/SearchSection';
import React, { useState } from "react";
import convertisseur from "./utils/convertisseur";
import fetchMeteo from './utils/fetchMeteo';


function App() {
  const [searchValue, setSearchValue] = useState("");
  const [searchValueConvert, setSearchValueConvert] = useState({});
  const [coordsNotFound, setCoordsNotFound] = useState(false);
  const handleOnClick = async () => {
    setCoordsNotFound(false);
    const searchValueCoords = await convertisseur(searchValue);
    if(searchValueCoords.lat){
      setSearchValueConvert(searchValueCoords);
      fetchMeteo()
    }
    else{
      setCoordsNotFound(true);
    }
  }
  return (
    <div className="bg-main bg-no-repeat bg-cover flex items-center justify-center h-100 md:h-screen py-4 bg-cyan-900">
      <SearchSection isError={coordsNotFound} searchValue={searchValue} setSearchValue={setSearchValue} onClick={handleOnClick}/>
    </div>
  );
}

export default App;
