import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import useOnClickOutside from '../hooks/useOnClickOutside';

function Searchbar({
  setSearchValue, searchValue, isError, setCoordsNotFound,
}) {
  const refSearch = useRef();
  useOnClickOutside(refSearch, () => setCoordsNotFound(false));
  return (
    <div
      className="flex flex-col w-full py-3"
      ref={refSearch}
      onFocus={() => setCoordsNotFound(false)}
    >
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
          className={`bg-gray-50 border-2 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none ${isError ? 'border-red-500' : 'border-gray-300'}`}
          autoComplete="off"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          placeholder="Search your destination"
        />
      </div>
      {isError && <p className="text-red-500 text-sm font-semibold">City not found</p>}
    </div>
  );
}

Searchbar.propTypes = {
  setSearchValue: PropTypes.func,
  searchValue: PropTypes.string,
  isError: PropTypes.bool,
  setCoordsNotFound: PropTypes.func,

};

Searchbar.defaultProps = {
  setSearchValue: () => {},
  searchValue: '',
  isError: false,
  setCoordsNotFound: () => {},
};

export default Searchbar;
