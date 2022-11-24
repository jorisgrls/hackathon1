import vetements from "./vetements.js";

const result = {
    "latitude": 43.6,
    "longitude": 1.44,
    "generationtime_ms": 0.867009162902832,
    "utc_offset_seconds": 3600,
    "timezone": "Europe/Paris",
    "timezone_abbreviation": "CET",
    "elevation": 156,
    "current_weather": {
        "temperature": 11.4,
        "windspeed": 7.4,
        "winddirection": 137,
        "weathercode": 80,
        "time": "2022-11-24T20:00"
    },
    "daily_units": {
        "time": "iso8601",
        "weathercode": "wmo code",
        "temperature_2m_max": "°C",
        "temperature_2m_min": "°C"
    },
    "daily": {
        "time": [
            "2022-11-24",
            "2022-11-25",
            "2022-11-26"
        ],
        "weathercode": [
            80,
            80,
            45
        ],
        "temperature_2m_max": [
            14.4,
            11.6,
            11.9
        ],
        "temperature_2m_min": [
            6,
            7.9,
            5.6
        ]
    }
}

const isInRange = (min, max, value) => {
    return value>=min && value<=max;
}

// const getClothings = (data) => {
//     const clothingsByDays =  data.daily.time.map((date,index) => {
//         const weatherCode = data.daily.weathercode[index];
//         const temperature = data.daily.temperature_2m_max[index];
//         return vetements.filter(clothing => (clothing.id_weather_code.includes(weatherCode) && isInRange(clothing.temperature[0],clothing.temperature[1],temperature)) || clothing.id_weather_code.includes(100))
//     })
//     const clothings = clothingsByDays.flat();
//     return clothings;
// }

const isClothingInArray = (clothingId, clothingList) => clothingList.find(clothing => clothing.id === clothingId) !== undefined

const getClothings = (data, nbDays) => {
  const clothings = data.daily.time.reduce(((clothingsAcc,date, index) => {
    const weatherCode = data.daily.weathercode[index];
    const temperature = data.daily.temperature_2m_max[index];

    const currentClothings = vetements.filter(clothing => !isClothingInArray(clothing.id, clothingsAcc) && ((clothing.id_weather_code.includes(weatherCode) && isInRange(clothing.temperature[0],clothing.temperature[1],temperature)) || clothing.id_weather_code.includes(100)))
    return clothingsAcc.concat(currentClothings);
    }), [])

  return clothings.map(clothing => ({
    quantity: clothing.ratio === null ? 1 : Math.ceil(clothing.ratio * nbDays) ,
    clothing
  }))
}

console.log(getClothings(result,4));

// [{quantity:3,clothing:{}}]