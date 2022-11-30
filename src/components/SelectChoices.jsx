/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

function SelectChoices({
  selectedValueDays, setSelectedValueDays, selectedValueDuration, setSelectedValueDuration,
}) {
  return (
    <div className="flex gap-2 w-full">
      <div className="w-1/2">
        <label htmlFor="begining" className="block mb-2 font-medium text-white">Je pars dans ...</label>
        <select value={selectedValueDays} onChange={(event) => setSelectedValueDays(event.target.value)} id="begining" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
          {[...Array(Math.abs(selectedValueDuration - 7))].map((element, index) => (
            <option key={index} value={index + 1}>
              {index + 1}
              {' '}
              {index + 1 > 1 ? 'jours' : 'jour'}
            </option>
          ))}
        </select>
      </div>
      <div className="w-1/2">
        <label htmlFor="duration" className="block mb-2 font-medium text-white">Durée du voyage</label>
        <select value={selectedValueDuration} onChange={(event) => setSelectedValueDuration(event.target.value)} id="duration" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
          {[...Array(Math.abs(selectedValueDays - 7))].map((element, index) => (
            <option key={index} value={index + 1}>
              {index + 1}
              {' '}
              {index + 1 > 1 ? 'jours' : 'jour'}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

SelectChoices.propTypes = {
  selectedValueDays: PropTypes.number,
  setSelectedValueDays: PropTypes.func,
  selectedValueDuration: PropTypes.number,
  setSelectedValueDuration: PropTypes.func,
};

SelectChoices.defaultProps = {
  selectedValueDays: 1,
  setSelectedValueDays: () => {},
  selectedValueDuration: 1,
  setSelectedValueDuration: () => {},
};

export default SelectChoices;
