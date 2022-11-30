/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
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
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gray-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
          </svg>

        </div>
        <input
          type="text"
          id="simple-search"
          className={`bg-gray-50 border-2 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none ${isError ? 'border-red-500' : 'border-gray-300'}`}
          autoComplete="off"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          placeholder="What's your destination ?"
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
