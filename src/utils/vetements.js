const vetements = [
    {
        id: 1,
        dress_name: 'T-shirt',
        image_url: "https://res.cloudinary.com/db2sa2bxv/image/upload/v1669290429/tee-shirt_gvormv.png",
        id_weather_code : [100],
        temperature : [-30, 50],
        ratio: 7/7
    },
    {
        id: 2,
        dress_name: 'Veste',
        image_url: "https://res.cloudinary.com/db2sa2bxv/image/upload/v1669290455/veste-universitaire_bfqeqt.png",
        id_weather_code : [0, 1, 2, 3],
        temperature : [14, 22],
        ratio: 2/7
    },
    {
        id: 3,
        dress_name: 'Manteau',
        image_url: "https://res.cloudinary.com/db2sa2bxv/image/upload/v1669290365/manteau_prpbmw.png",
        id_weather_code : [45, 48, 51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 71, 73, 75, 77, 80, 81, 82, 85, 86, 95, 96, 99],
        temperature : [-50, 13],
        ratio : null
    },
    {
        id: 4,
        dress_name: 'Pull',
        image_url: "https://res.cloudinary.com/db2sa2bxv/image/upload/v1669290401/pull_rthuo5.png",
        id_weather_code : [0, 1, 2, 3, 45, 48, 51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 71, 73, 75, 77, 80, 81, 82, 85, 86, 95, 96, 99],
        temperature : [-50, 16],
        ratio : 3/7
    },
    {
        id: 5,
        dress_name: 'K-way',
        image_url: "https://res.cloudinary.com/db2sa2bxv/image/upload/v1669290347/impermeable_ofw0ak.png",
        id_weather_code : [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82],
        temperature : [-50, 50],
        ratio : null
    },
    
    {
        id: 6,
        dress_name: 'Pantalon',
        image_url: "https://res.cloudinary.com/db2sa2bxv/image/upload/v1669290373/pantalon_lre8k7.png",
        id_weather_code : [0, 1, 2, 3, 45, 48, 51,53, 55, 56, 57, 61, 63, 65, 66, 67, 71, 73, 75, 77, 80, 81, 82, 85, 86, 95, 96, 99],
        temperature : [-50, 25],
        ratio : 5/7
    },
    {
        id: 7,
        dress_name: 'Short',
        image_url: "https://res.cloudinary.com/db2sa2bxv/image/upload/v1669290412/short_mtjhti.png",
        id_weather_code : [0, 1, 2, 3, 51, 53, 61, 80],
        temperature : [26, 50],
        ratio : 5/7
    },
    {
        id: 8,
        dress_name: 'Sneakers',
        image_url: "https://res.cloudinary.com/db2sa2bxv/image/upload/v1669290337/chaussure-de-course_do9hyg.png",
        id_weather_code : [0, 1, 2, 3, 45, 51, 53, 55, 61, 63, 71, 80, 95, 96],
        temperature : [0, 35],
        ratio : null
    },
    {
        id: 9,
        dress_name: 'Bottes de pluie',
        image_url: "https://res.cloudinary.com/db2sa2bxv/image/upload/v1669290328/bottes_yodxs4.png",
        id_weather_code : [56, 57, 65, 66, 67, 81, 82, 99 ],
        temperature : [0, 35],
        ratio : null
    },
    {
        id: 10,
        dress_name: 'Bottes de neige',
        image_url: "https://res.cloudinary.com/db2sa2bxv/image/upload/v1669290320/botte-de-neige_p2lu6h.png",
        id_weather_code : [0, 45, 48, 71, 73, 75, 77, 85, 86, 96, 99 ],
        temperature : [-50, 5],
        ratio : null
    },
    {
        id: 11,
        dress_name: 'Maillot de bain',
        image_url: "https://res.cloudinary.com/db2sa2bxv/image/upload/v1669290356/maillots-de-bain_nxxitn.png",
        id_weather_code : [0, 1, 2, 3],
        temperature : [25, 50],
        ratio : null
    },
    {
        id: 12,
        dress_name: 'Parapluie',
        image_url: "https://res.cloudinary.com/db2sa2bxv/image/upload/v1669290390/parapluie_euffzv.png",
        id_weather_code : [51, 53, 55, 56, 57, 51, 63, 65, 66, 67, 80, 81, 82, 95],
        temperature : [-50, 50],
        ratio : null
    },
    {
        id: 13,
        dress_name: 'Casquette et lunettes de soleil',
        image_url: "https://res.cloudinary.com/db2sa2bxv/image/upload/v1669290308/accessoires_rw9xke.png",
        id_weather_code : [0, 1, 2],
        temperature : [25, 50],
        ratio:null
    },
    {
        id: 14,
        dress_name: 'Sous-vêtements',
        image_url: "https://res.cloudinary.com/db2sa2bxv/image/upload/v1669294269/underwear3_wpzbcb.png",
        id_weather_code : [100],
        temperature : [-50, 50],
        ratio : 7/7
    },
    {
        id: 15,
        dress_name: 'Écharpe et bonnet',
        image_url: "https://res.cloudinary.com/db2sa2bxv/image/upload/v1669290468/vetements-dhiver_fngsje.png",
        id_weather_code : [0, 1, 2, 3, 45, 48, 51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 71, 73, 75, 77, 80, 81, 82, 85, 86, 95, 96, 99],
        temperature : [-50, 10],
        ratio : null
    },
    {
        id: 16,
        dress_name: 'Tongue',
        image_url: "https://res.cloudinary.com/db2sa2bxv/image/upload/v1669290439/tongs_jofxd6.png ",
        id_weather_code : [0, 1, 2, 3],
        temperature : [25, 50],
        ratio : null
    }
];


export default vetements