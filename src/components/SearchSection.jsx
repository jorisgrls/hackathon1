import React, { useState } from 'react';
import DisplayValise from './DisplayValise';
import MeteoToday from './MeteoToday';
import Searchbar from './Searchbar';
import SelectChoices from './SelectChoices';
import ForecastWeather from './ForecastWeather';
import axios from "axios";
import convertisseur from '../utils/convertisseur';
import dateRetour from '../utils/dateRetour';
import dateDepart from '../utils/dateDepart';
import test from '../utils/test';

const SearchSection = ({setDisplaySearchSection, displaySearchSection,setSearchValue, searchValue, onClick, isError, selectedValueDays, setSelectedValueDays, selectedValueDuration, setSelectedValueDuration}) => {
    const [data,setData] = useState();
    const handleOnClick = () => {
        console.log(`start_date=${dateDepart(selectedValueDays)}&end_date=${dateRetour(selectedValueDays,selectedValueDuration)}`);
        const fetchData = async () => {
            const convert = await convertisseur(searchValue)
            const depart = dateDepart(selectedValueDays);
            const retour = dateRetour(selectedValueDays,selectedValueDuration);
            const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${convert.lat}&longitude=${convert.lon}&daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&timezone=auto${selectedValueDays && selectedValueDuration ? `&start_date=${depart}&end_date=${retour}` : ""}`)
            setData(response.data);   
        }
        fetchData();
        onClick()
    }
    console.log(data);
    return (
        <section className="flex flex-col gap-4 md:w-10/12 md:m-auto">
            <div className="flex flex-col md:flex-row">
                <div className="py-4 mt-12 md:mt-0 w-full px-4 md:p-0 md:w-7/12 text-white flex flex-col items-center md:items-start gap-4">
                    <div className="flex gap-2 items-center font-semibold text-6xl md:mt-20">
                        <h1 className="">Welcome on <span className="text-[#b6fBFF]">Val<span className="italic text-yellow-200" ><span className="text-yellow-500">E</span>ase</span></span></h1>
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"></path></svg>
                    </div>
                    <p className="text-lg text-center md:text-left">Tu pars en vacances dans quelques jours et tu n'as pas encore fait ta valise ? <br /> ValEase la fait pour toi ! Rentre seulement ta destination et les dates de ton séjour.< br/><span className="text-2xl font-medium">Bon voyage ! </span></p>
                </div>
                {!displaySearchSection && (
                    <div className="flex justify-center items-center w-full mt-2 md:mt-0 md:w-5/12">
                        <button onClick={setDisplaySearchSection} type="button" className="w-2/3 bg-[#b6fBFF] dark:bg-gray-800 dark:text-white hover:bg-[#b6fBFF]/90 dark:hover:bg-gray-800/90 focus:ring-4 focus:outline-none dark:focus:ring-gray-800/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center dark:focus:ring-[#b6fBFF/55 mr-2 mb-2">
                            MODIFIER MA RECHERCHE
                            <svg class="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>
                    </div>
                )}
            </div>
            {displaySearchSection ? (
                <div className="bg-gray-800 bg-opacity-30 rounded p-6 flex flex-col gap-2 items-center md:gap-8 md:flex-row w-11/12 md:w-full mx-auto md:mx-0"> {/* DIV CONTAINER METEO SEARCHBAR SELECT BUTTON */}
                    <div className="w-full md:w-8/12"> {/* COMPONENT METEO */}
                        <MeteoToday />
                    </div>
                    <div className="flex flex-col gap-8 w-full md:w-4/6"> {/* DIV CONTAINER SEARCHBAR SELECT BUTTON */}
                        <div className="flex flex-col">
                            <div> {/* DIV SEARCHBAR */}
                                <Searchbar isError={isError} setSearchValue={setSearchValue} searchValue={searchValue}/>
                            </div>
                            <div className="flex w-full"> {/* DIV SELECTS */}
                                <SelectChoices selectedValueDays={selectedValueDays} setSelectedValueDays={setSelectedValueDays} selectedValueDuration={selectedValueDuration} setSelectedValueDuration={setSelectedValueDuration}/>
                            </div>
                        </div>
                        <button onClick={handleOnClick} type="button" className="w-full bg-[#b6fBFF] dark:bg-gray-800 hover:bg-[#b6fBFF]/90 dark:hover:bg-gray-800/90 focus:ring-4 dark:text-white focus:outline-none dark:focus:ring-gray-800/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center mr-2 mb-2">
                            VALIDER
                            <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </button>
                    </div>
                </div>
             ) : (
             <div className="flex flex-col gap-6 md:flex-row">
                <div className="w-full px-2 md:3/12 md:px-0">
                    {/* ici on importe le composant pour la meteo */}
                    {data && <ForecastWeather data={data} displayNextDays={true}/>}
                </div>
                <div className="px-2 w-full md:w-9/12 md:px-0">
                    {data && <DisplayValise result={test(data,selectedValueDuration)} />}
                </div>
            </div>
             )}
        </section>
    );
};

export default SearchSection;