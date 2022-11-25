import React from 'react';

const SelectChoices = ({selectedValueDays,setSelectedValueDays, selectedValueDuration, setSelectedValueDuration}) => {
    return (
        <div className="flex gap-2 w-full">
            <div className="w-1/2">
                <label htmlFor="begining" className="block mb-2 font-medium text-white">Je pars dans ...</label>
                <select value={selectedValueDays} onChange={(event)=>setSelectedValueDays(event.target.value)} id="begining" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value={1} >1 jour</option>
                    <option value={2}>2 jours</option>
                    <option value={3}>3 jours</option>
                    <option value={4}>4 jours</option>
                    <option value={5}>5 jours</option>
                </select>
            </div>
            <div className="w-1/2">
                <label htmlFor="duration" className="block mb-2 font-medium text-white">Durée du voyage</label>
                <select value={selectedValueDuration} onChange={(event)=>setSelectedValueDuration(event.target.value)} id="duration" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value={1}>1 jour</option>
                    <option value={2}>2 jours</option>
                    <option value={3}>3 jours</option>
                    <option value={4}>4 jours</option>
                    <option value={5}>5 jours</option>
                </select>
            </div>
        </div>
    );
};

export default SelectChoices;