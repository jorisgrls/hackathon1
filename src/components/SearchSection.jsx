import React from 'react';
import DisplayValise from './DisplayValise';
import MeteoToday from './MeteoToday';
import Searchbar from './Searchbar';
import SelectChoices from './SelectChoices';

const SearchSection = ({setDisplaySearchSection, displaySearchSection,setSearchValue, searchValue, onClick, isError, selectedValueDays, setSelectedValueDays, selectedValueDuration, setSelectedValueDuration}) => {
    return (
        <section className="flex flex-col gap-4 md:w-10/12 md:m-auto">
            <div className="flex flex-col md:flex-row">
                <div className="py-4 mt-12 md:mt-0 w-full px-4 md:p-0 md:w-7/12 text-white flex flex-col items-center md:items-start gap-4">
                    <div className="flex gap-2 items-center font-semibold text-4xl">
                        <h1>WeatherStack</h1>
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"></path></svg>
                    </div>
                    <p className="text-center md:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab magnam inventore ea, consequatur eum, amet incidunt impedit magni aspernatur necessitatibus provident odio id, debitis corrupti hic optio perferendis vero accusantium!</p>
                </div>
                {!displaySearchSection && (
                    <div className="flex justify-center items-center w-full mt-2 md:mt-0 md:w-5/12">
                        <button onClick={setDisplaySearchSection} type="button" className="w-2/3 text-white bg-blue-400 dark:bg-gray-800 hover:bg-blue-400/90 dark:hover:bg-gray-800/90 focus:ring-4 focus:outline-none dark:focus:ring-gray-800/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2">
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
                        <button onClick={onClick} type="button" className="w-full text-white bg-blue-400 dark:bg-gray-800 hover:bg-blue-400/90 dark:hover:bg-gray-800/90 focus:ring-4 focus:outline-none dark:focus:ring-gray-800/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center mr-2 mb-2">
                            VALIDER
                            <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </button>
                    </div>
                </div>
             ) : (
             <div>
                <DisplayValise />
            </div>
             )}
        </section>
    );
};

export default SearchSection;