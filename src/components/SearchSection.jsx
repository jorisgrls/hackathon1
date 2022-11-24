import React from 'react';
import MeteoToday from './MeteoToday';
import Searchbar from './Searchbar';
import SelectChoices from './SelectChoices';

const SearchSection = () => {
    return (
        <section className="flex flex-col gap-4 md:w-10/12 md:m-auto">
            <div className="py-4 w-1/2 text-white">
                <h1 className="font-medium text-3xl">WeatherStack</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab magnam inventore ea, consequatur eum, amet incidunt impedit magni aspernatur necessitatibus provident odio id, debitis corrupti hic optio perferendis vero accusantium!</p>
            </div>
            <div className="flex flex-col gap-2 items-center md:gap-8 md:flex-row"> {/* DIV CONTAINER METEO SEARCHBAR SELECT BUTTON */}
                <div className="w-full md:w-8/12"> {/* COMPONENT METEO */}
                    <MeteoToday />
                </div>
                <div className="flex flex-col gap-8 md:w-4/6"> {/* DIV CONTAINER SEARCHBAR SELECT BUTTON */}
                    <div className="flex flex-col">
                        <div> {/* DIV SEARCHBAR */}
                            <Searchbar />
                        </div>
                        <div className="flex w-full"> {/* DIV SELECTS */}
                            <SelectChoices />
                        </div>
                    </div>
                    <button type="button" class="w-full text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2">
                        VALIDER
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SearchSection;