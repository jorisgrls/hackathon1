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
        <select value={selectedValueDays} onChange={(event) => setSelectedValueDays(event.target.value)} id="begining" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          {[...Array(Math.abs(selectedValueDuration - 7))].map((element, index) => (
            <option value={index + 1}>
              {index + 1}
              {' '}
              {index + 1 > 1 ? 'jours' : 'jour'}
            </option>
          ))}
        </select>
      </div>
      <div className="w-1/2">
        <label htmlFor="duration" className="block mb-2 font-medium text-white">Durée du voyage</label>
        <select value={selectedValueDuration} onChange={(event) => setSelectedValueDuration(event.target.value)} id="duration" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          {[...Array(Math.abs(selectedValueDays - 7))].map((element, index) => (
            <option value={index + 1}>
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
  selectedValueDays: PropTypes.string,
  setSelectedValueDays: PropTypes.func,
  selectedValueDuration: PropTypes.string,
  setSelectedValueDuration: PropTypes.func,
};

SelectChoices.defaultProps = {
  selectedValueDays: '',
  setSelectedValueDays: () => {},
  selectedValueDuration: '',
  setSelectedValueDuration: () => {},
};

export default SelectChoices;
