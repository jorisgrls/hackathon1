import React from 'react';

const SelectChoices = () => {
    return (
        <div className="flex gap-2 w-full">
            <div className="w-1/2">
                <label for="begining" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Je pars dans ...</label>
                <select id="begining" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="1day" selected>1 jour</option>
                    <option value="2day">2 jours</option>
                    <option value="3day">3 jours</option>
                    <option value="4day">4 jours</option>
                    <option value="5day">5 jours</option>
                </select>
            </div>
            <div className="w-1/2">
                <label for="duration" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Durée du voyage</label>
                <select id="duration" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="1day" selected>1 jour</option>
                    <option value="2day">2 jours</option>
                    <option value="3day">3 jours</option>
                    <option value="4day">4 jours</option>
                    <option value="5day">5 jours</option>
                </select>
            </div>
        </div>
    );
};

export default SelectChoices;