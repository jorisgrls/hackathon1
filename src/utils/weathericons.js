const weathericons = [
  {
    id: 1,
    icon_name: 'ensoleillé',
    id_weathercode: [0],
    icon_url: 'https://weatherstack.com/site_images/weather_icon_full_sun.svg',
  },
  {
    id: 2,
    icon_name: 'mitigé',
    id_weathercode: [1, 2],
    icon_url: 'https://weatherstack.com/site_images/weather_icon_partly_cloudy.svg',
  },
  {
    id: 3,
    icon_name: 'nuageux',
    id_weathercode: [3, 45, 48],
    icon_url: 'https://weatherstack.com/site_images/weather_icon_full_clouds.svg',
  },
  {
    id: 4,
    icon_name: 'pluvieux',
    id_weathercode: [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82],
    icon_url: 'https://weatherstack.com/site_images/weather_icon_rainy.svg',
  },
  {
    id: 5,
    icon_name: 'neigeux',
    id_weathercode: [71, 73, 75, 77, 85, 86],
    icon_url: 'https://res.cloudinary.com/db2sa2bxv/image/upload/v1669298616/neigeux_td71pq.png',
  },
  {
    id: 6,
    icon_name: 'orageux',
    id_weathercode: [95, 96, 99],
    icon_url: 'https://weatherstack.com/site_images/weather_icon_thunder.svg',
  },
];

export default weathericons;
