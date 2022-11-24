import React from 'react';
import MeteoToday from './MeteoToday';
import Searchbar from './Searchbar';
import SelectChoices from './SelectChoices';

const SearchSection = ({setSearchValue, searchValue, onClick, isError}) => {
    return (
        <section className="flex flex-col gap-4 md:w-10/12 md:m-auto">
            <div className="py-4 mt-12 md:mt-0 w-full px-4 md:p-0 md:w-1/2 text-white flex flex-col items-center md:items-start gap-4">
                <h1 className="font-semibold text-4xl">WeatherStack</h1>
                <p className="text-center md:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab magnam inventore ea, consequatur eum, amet incidunt impedit magni aspernatur necessitatibus provident odio id, debitis corrupti hic optio perferendis vero accusantium!</p>
            </div>
            <div className="flex flex-col gap-2 items-center md:gap-8 md:flex-row w-11/12 md:w-full mx-auto md:mx-0"> {/* DIV CONTAINER METEO SEARCHBAR SELECT BUTTON */}
                <div className="w-full md:w-8/12"> {/* COMPONENT METEO */}
                    <MeteoToday />
                </div>
                <div className="flex flex-col gap-8 w-full md:w-4/6"> {/* DIV CONTAINER SEARCHBAR SELECT BUTTON */}
                    <div className="flex flex-col">
                        <div> {/* DIV SEARCHBAR */}
                            <Searchbar isError={isError} setSearchValue={setSearchValue} searchValue={searchValue}/>
                        </div>
                        <div className="flex w-full"> {/* DIV SELECTS */}
                            <SelectChoices />
                        </div>
                    </div>
                    <button onClick={onClick} type="button" className="w-full text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2">
                        VALIDER
                        <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SearchSection;