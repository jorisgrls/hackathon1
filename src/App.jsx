/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import SearchSection from './components/SearchSection';
import convertisseur from './utils/convertisseur';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [searchValueConvert, setSearchValueConvert] = useState({});
  const [coordsNotFound, setCoordsNotFound] = useState(false);
  const [selectedValueDays, setSelectedValueDays] = useState(1);
  const [selectedValueDuration, setSelectedValueDuration] = useState(1);
  const [displaySearchSection, setDisplaySearchSection] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const handleOnClick = async () => {
    setCoordsNotFound(false);
    const searchValueCoords = await convertisseur(searchValue);
    if (searchValueCoords.lat) {
      setSearchValueConvert(searchValueCoords);
      setDisplaySearchSection(false);
      setIsLoading(false);
    } else {
      setCoordsNotFound(true);
      setIsLoading(false);
    }
  };
  return (
    <div className="bg-main bg-no-repeat bg-cover flex items-center justify-center h-100 pb-20 md:min-h-screen py-6 md:py-4 bg-light-main dark:bg-gray-800">
      <SearchSection isLoading={isLoading} setIsLoading={setIsLoading} setDisplaySearchSection={setDisplaySearchSection} displaySearchSection={displaySearchSection} selectedValueDays={selectedValueDays} setSelectedValueDays={setSelectedValueDays} selectedValueDuration={selectedValueDuration} setSelectedValueDuration={setSelectedValueDuration} isError={coordsNotFound} setCoordsNotFound={setCoordsNotFound} searchValue={searchValue} setSearchValue={setSearchValue} onClick={handleOnClick} />
    </div>
  );
}

export default App;
