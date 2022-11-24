import React, { useRef, useState} from 'react';
import useOnClickOutside from "../hooks/useOnClickOutside";

const Searchbar = () => {
    const refSearchBar = useRef();
    const [displayResult, setDisplayResult] = useState(false)
    useOnClickOutside(refSearchBar, () => setDisplayResult(false));
    return (
        <div
        ref={displayResult ? refSearchBar : null}
        className="flex items-center w-full py-3"
        >
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <input
          type="text"
          id="simple-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none"
          autoComplete="off"
          onChange={()=>setDisplayResult(true)}
          onFocus={() => setDisplayResult(true)}
        />
        {displayResult && (
        <div className="absolute w-full z-10 rounded shadow-lg bg-white dark:bg-gray-600 ring-1 ring-black ring-opacity-5 focus:outline-none">
            <p className="cursor-pointer text-gray-700 dark:text-white block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-500">Toulouse</p>
            <p className="cursor-pointer text-gray-700 dark:text-white block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-500">Madrid</p>
            <p className="cursor-pointer text-gray-700 dark:text-white block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-500">Paris</p>
        </div> 
        )}
      </div>
    </div>
    );
};

export default Searchbar;