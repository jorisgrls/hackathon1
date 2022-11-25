import './App.css';
import ForecastWeather from './components/ForecastWeather';


const data = {
    "latitude": 43.6,
    "longitude": 1.44,
    "generationtime_ms": 0.9080171585083008,
    "utc_offset_seconds": 3600,
    "timezone": "Europe/Paris",
    "timezone_abbreviation": "CET",
    "elevation": 156,
    "current_weather": {
        "temperature": 12.4,
        "windspeed": 8.5,
        "winddirection": 118,
        "weathercode": 2,
        "time": "2022-11-24T12:00"
    },
    "daily_units": {
        "time": "iso8601",
        "weathercode": "wmo code",
        "temperature_2m_max": "°C",
        "temperature_2m_min": "°C"
    },
    "daily": {
        "time": [
            "2022-11-21",
            "2022-11-22",
            "2022-11-23",
            "2022-11-24",
            "2022-11-25"
        ],
        "weathercode": [
            71,
            45,
            0,
            61,
            95
        ],
        "temperature_2m_max": [
            14.7,
            12,
            11,
            11.8,
            10
        ],
        "temperature_2m_min": [
            5.6,
            6,
            8.3,
            5.6,
            3
        ]
    }
}


function App() {
  return (
    <div>
      <p>coucou</p>
      <ForecastWeather data={data}/>
    </div>
  );
}

export default App;
