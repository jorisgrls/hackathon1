/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import DisplayValise from './DisplayValise';
import MeteoToday from './MeteoToday';
import Searchbar from './Searchbar';
import SelectChoices from './SelectChoices';
import ForecastWeather from './ForecastWeather';
import convertisseur from '../utils/convertisseur';
import dateRetour from '../utils/dateRetour';
import dateDepart from '../utils/dateDepart';
import getClothings from '../utils/getClothings';

function SearchSection({
  isLoading, setIsLoading, setDisplaySearchSection, setCoordsNotFound, displaySearchSection, setSearchValue, searchValue, onClick, isError, selectedValueDays, setSelectedValueDays, selectedValueDuration, setSelectedValueDuration,
}) {
  const [data, setData] = useState();
  const handleOnClick = () => {
    setIsLoading(true);
    const fetchData = async () => {
      const convert = await convertisseur(searchValue);
      const depart = dateDepart(selectedValueDays);
      const retour = dateRetour(selectedValueDays, selectedValueDuration);
      const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${convert.lat}&longitude=${convert.lon}&daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&timezone=auto${selectedValueDays && selectedValueDuration ? `&start_date=${depart}&end_date=${retour}` : ''}`);
      setData(response.data);
    };
    fetchData();
    onClick();
  };
  return (
    <section className="flex flex-col justify-center gap-4 md:w-10/12 md:m-auto">
      {displaySearchSection && (
        <div className="flex flex-col md:flex-row">
          <div className="py-4 w-full px-4 md:p-0 md:w-8/12 text-white flex flex-col items-center md:items-start gap-4">
            <div className="flex gap-2 items-center font-semibold text-5xl">
              <h1>
                <span className="hidden md:inline">Faire ta valise n&apos;a jamais été aussi simple avec </span>
                Valease
              </h1>
            </div>
            <p className="text-lg text-center md:text-left">
              Tu pars en vacances dans quelques jours et tu n&apos;as pas encore fait ta valise ?
              <br />
              {' '}
              Valease la fait pour toi ! Rentre seulement ta destination et les dates de ton séjour.
              <br />
            </p>
          </div>
        </div>
      )}
      {displaySearchSection ? (
        <div className="bg-gray-800 bg-opacity-30 rounded flex flex-col-reverse gap-2 items-center md:gap-8 md:flex-row w-11/12 md:w-full mx-auto md:mx-0">
          <div className="w-full md:w-8/12 h-full">
            <MeteoToday />
          </div>
          <div className="flex flex-col gap-8 w-full md:w-4/6 p-6">
            <div className="flex flex-col">
              <div>
                <Searchbar setCoordsNotFound={setCoordsNotFound} isError={isError} setSearchValue={setSearchValue} searchValue={searchValue} />
              </div>
              <div className="flex w-full">
                <SelectChoices selectedValueDays={selectedValueDays} setSelectedValueDays={setSelectedValueDays} selectedValueDuration={selectedValueDuration} setSelectedValueDuration={setSelectedValueDuration} />
              </div>
            </div>
            <button onClick={handleOnClick} type="button" className="w-full bg-light-button dark:bg-gray-800 hover:bg-light-button/70 dark:hover:bg-gray-800/90 text-color-main font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center mr-2 mb-2">
              VALIDER
              {isLoading ? (
                <svg aria-hidden="true" role="status" className="inline ml-2 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                </svg>
              ) : (
                <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              )}
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-6 md:flex-row items-center">
          <div className="w-full px-2 md:3/12 md:px-0 flex flex-col gap-4">
            <div className="flex items-center gap-2 cursor-pointer" onClick={setDisplaySearchSection}>
              <button type="button" className="text-color-main border-color-main border-2 hover:bg-color-main hover:text-black font-medium rounded-full text-xl p-1 text-center inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 font-extrabold">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                </svg>
              </button>
              <p className="font-medium text-color-main">Modifier ma recherche</p>
            </div>
            {data && <ForecastWeather searchValue={searchValue} data={data} displayNextDays limit={7} />}
          </div>
          <div className="px-2 w-full md:w-9/12 md:px-0">
            {data && <DisplayValise result={getClothings(data, selectedValueDuration)} />}
          </div>
        </div>
      )}
    </section>
  );
}

SearchSection.propTypes = {
  isLoading: PropTypes.bool,
  setIsLoading: PropTypes.func,
  setDisplaySearchSection: PropTypes.func,
  setCoordsNotFound: PropTypes.func,
  displaySearchSection: PropTypes.bool,
  setSearchValue: PropTypes.func,
  searchValue: PropTypes.string,
  onClick: PropTypes.func,
  isError: PropTypes.bool,
  selectedValueDays: PropTypes.number,
  setSelectedValueDays: PropTypes.func,
  selectedValueDuration: PropTypes.number,
  setSelectedValueDuration: PropTypes.func,

};

SearchSection.defaultProps = {
  isLoading: false,
  setIsLoading: () => {},
  setDisplaySearchSection: () => {},
  setCoordsNotFound: () => {},
  displaySearchSection: false,
  setSearchValue: () => {},
  searchValue: 1,
  onClick: () => {},
  isError: false,
  selectedValueDays: '',
  setSelectedValueDays: () => {},
  selectedValueDuration: 1,
  setSelectedValueDuration: () => {},
};

export default SearchSection;
