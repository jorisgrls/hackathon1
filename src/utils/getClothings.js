/* eslint-disable max-len */
import vetements from './vetements';

const isInRange = (min, max, value) => value >= min && value <= max;

const isClothingInArray = (clothingId, clothingList) => clothingList.find((clothing) => clothing.id === clothingId) !== undefined;

const getClothings = (data, nbDays) => {
  const clothings = data.daily.time.reduce(((clothingsAcc, date, index) => {
    const weatherCode = data.daily.weathercode[index];
    const temperature = data.daily.temperature_2m_max[index];
    const currentClothings = vetements.filter((clothing) => !isClothingInArray(clothing.id, clothingsAcc) && ((clothing.id_weather_code.includes(weatherCode) && isInRange(clothing.temperature[0], clothing.temperature[1], temperature)) || clothing.id_weather_code.includes(100)));
    return clothingsAcc.concat(currentClothings);
  }), []);

  return clothings.map((clothing) => ({ quantity: clothing.ratio === null ? 1 : Math.ceil(clothing.ratio * nbDays), clothing }));
};

export default getClothings;
