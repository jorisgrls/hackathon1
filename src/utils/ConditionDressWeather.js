const data = {
    "latitude": 43.6,
    "longitude": 1.44,
    "generationtime_ms": 1.098036766052246,
    "utc_offset_seconds": 3600,
    "timezone": "Europe/Paris",
    "timezone_abbreviation": "CET",
    "elevation": 156,
    "current_weather": {
        "temperature": 13.8,
        "windspeed": 5.8,
        "winddirection": 120,
        "weathercode": 3,
        "time": "2022-11-24T16:00"
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
            61,
            80,
            45
        ],
        "temperature_2m_max": [
            14.3,
            10.9,
            11.8
        ],
        "temperature_2m_min": [
            6,
            7.9,
            5.6
        ]
    }
}


const vetements = [
    {
        id: 1,
        dress_name: 'T-shirt',
        image_url: "https://res.cloudinary.com/db2sa2bxv/image/upload/v1669290429/tee-shirt_gvormv.png",
        id_weather_code : [100],
        temperatureMin : -30, 
        temperatureMax : 50
        

    },
    {
        id: 2,
        dress_name: 'Veste',
        image_url: "https://res.cloudinary.com/db2sa2bxv/image/upload/v1669290455/veste-universitaire_bfqeqt.png",
        id_weather_code : [0, 1, 2, 3],
        temperatureMin : 14, 
        temperatureMax : 22
        

    },
    {
        id: 3,
        dress_name: 'Manteau',
        image_url: "https://res.cloudinary.com/db2sa2bxv/image/upload/v1669290365/manteau_prpbmw.png",
        id_weather_code : [45, 48, 51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 71, 73, 75, 77, 80, 81, 82, 85, 86, 95, 96, 99  ],
        temperatureMin : -50, 
        temperatureMax : 13
        

    },
    {
        id: 4,
        dress_name: 'Pull',
        image_url: "https://res.cloudinary.com/db2sa2bxv/image/upload/v1669290401/pull_rthuo5.png",
        id_weather_code : [0, 1, 2, 3, 45, 48, 51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 71, 73, 75, 77, 80, 81, 82, 85, 86, 95, 96, 99],
        temperatureMin : -50, 
        temperatureMax : 16

    },
    {
        id: 5,
        dress_name: 'K-way',
        image_url: "https://res.cloudinary.com/db2sa2bxv/image/upload/v1669290347/impermeable_ofw0ak.png",
        id_weather_code : [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82],
        temperatureMin : -50, 
        temperatureMax : 50
        

    },
    
    {
        id: 6,
        dress_name: 'Pantalon',
        image_url: "https://res.cloudinary.com/db2sa2bxv/image/upload/v1669290373/pantalon_lre8k7.png",
        id_weather_code : [0, 1, 2, 3, 45, 48, 51,53, 55, 56, 57, 61, 63, 65, 66, 67, 71, 73, 75, 77, 80, 81, 82, 85, 86, 95, 96, 99],
        temperatureMin : -50, 
        temperatureMax : 25
        

    },
    {
        id: 7,
        dress_name: 'Short',
        image_url: "https://res.cloudinary.com/db2sa2bxv/image/upload/v1669290412/short_mtjhti.png",
        id_weather_code : [0, 1, 2, 3, 51, 53, 61, 80],
        temperatureMin : 26, 
        temperatureMax : 50
        

    },
    {
        id: 8,
        dress_name: 'Sneakers',
        image_url: "https://res.cloudinary.com/db2sa2bxv/image/upload/v1669290337/chaussure-de-course_do9hyg.png",
        id_weather_code : [0, 1, 2, 3, 45, 51, 53, 55, 61, 63, 71, 80, 95, 96],
        temperatureMin : 0, 
        temperatureMax : 35
        

    },
    
    {
        id: 9,
        dress_name: 'Bottes de pluie',
        image_url: "https://res.cloudinary.com/db2sa2bxv/image/upload/v1669290328/bottes_yodxs4.png",
        id_weather_code : [56, 57, 65, 66, 67, 81, 82, 99 ],
        temperatureMin : 0, 
        temperatureMax : 35
        

    },
    {
        id: 10,
        dress_name: 'Bottes de neige',
        image_url: "https://res.cloudinary.com/db2sa2bxv/image/upload/v1669290320/botte-de-neige_p2lu6h.png",
        id_weather_code : [0, 45, 48, 71, 73, 75, 77, 85, 86, 96, 99 ],
        temperatureMin : -50, 
        temperatureMax : 3
        

    },
    {
        id: 11,
        dress_name: 'Maillot de bain',
        image_url: "https://res.cloudinary.com/db2sa2bxv/image/upload/v1669290356/maillots-de-bain_nxxitn.png",
        id_weather_code : [0, 1, 2, 3],
        temperatureMin : 25, 
        temperatureMax : 50
        

    },
    {
        id: 12,
        dress_name: 'Parapluie',
        image_url: "https://res.cloudinary.com/db2sa2bxv/image/upload/v1669290390/parapluie_euffzv.png",
        id_weather_code : [51, 53, 55, 56, 57, 51, 63, 65, 66, 67, 80, 81, 82, 95],
        temperatureMin : -50, 
        temperatureMax : 50
        

    },
    {
        id: 13,
        dress_name: 'Casquette et lunettes de soleil',
        image_url: "https://res.cloudinary.com/db2sa2bxv/image/upload/v1669290308/accessoires_rw9xke.png",
        id_weather_code : [0, 1, 2],
        temperatureMin : 25, 
        temperatureMax : 50
        

    },
    {
        id: 14,
        dress_name: 'Sous-vêtements',
        image_url: "https://res.cloudinary.com/db2sa2bxv/image/upload/v1669294269/underwear3_wpzbcb.png",
        id_weather_code : [100],
        temperatureMin : -50, 
        temperatureMax : 50
        

    },
    {
        id: 15,
        dress_name: 'Écharpe et bonnet',
        image_url: "https://res.cloudinary.com/db2sa2bxv/image/upload/v1669291143/underwear2_h9aqcy.png",
        id_weather_code : [0, 1, 2, 3, 45, 48, 51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 71, 73, 75, 77, 80, 81, 82, 85, 86, 95, 96, 99],
        temperatureMin : -50, 
        temperatureMax : 10
        

    },
    {
        id: 16,
        dress_name: 'Tongue',
        image_url: "https://res.cloudinary.com/db2sa2bxv/image/upload/v1669291143/underwear2_h9aqcy.png",
        id_weather_code : [0, 1, 2, 3],
        temperatureMin : 25, 
        temperatureMax : 50
        

    }
    

];





const a = () => {
    const valise = [];
    const v = vetements
    const t = data.daily.temperature_2m_max;
    const n = data.daily.weathercode;
    const j = data.daily.time.length;
    for (let i=0; i<j; i++) {
        const valise =[]
        
        const filtrage = v.filter(ve => ve.id_weather_code.includes(n[i]) && t[i].toFixed(0) <= ve.temperatureMax && t[i].toFixed(0) >= ve.temperatureMin)
        valise.push(filtrage)
        
        console.log(valise)
        return(valise)
        
        
    };

    
};




a();

// console.log(a())






// const t = data.daily.temperature_2m_max
// const v = vetements
// const n = data.daily.weathercode;
// console.log(v.filter(ve => ve.id_weather_code.includes(n[0]) && t[0] <= ve.temperatureMax && t[0] >= ve.temperatureMin));

// "weathercode": [
//     61,
//     80,
//     45
// ],
// "temperature_2m_max": [
//     14.3,
//     10.9,
//     11.8