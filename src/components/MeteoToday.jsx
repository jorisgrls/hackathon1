import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ForecastWeather from './ForecastWeather';

const MeteoToday = () => {
    const [coordsUser, setCoordsUser] = useState(null);
    const [isError, setIsError] = useState(true);
    const [data, setData] = useState();
    let response;
    const success = ({coords}) => {
        setIsError(false);
        setCoordsUser({lat:coords.latitude,lon:coords.longitude});
    }
    const error = (error) => {
        setIsError(true);
        console.error(error);
    }
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(success, error)
    },[])
    useEffect( ()=>{
        const fetchData = async () => {
            try {
                if(coordsUser){
                    const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${coordsUser.lat}&longitude=${coordsUser.lon}&daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&timezone=auto`)
                    setData(response.data);
                }
            }
            catch(error) {
                console.log(error.message)
            }
            
        }
        fetchData();
        
    },[coordsUser])
    console.log(response);
    return (
        <div>
            {isError ? 
                <div className="text-white font-medium flex justify-center items-center rounded h-[200px] w-100 px-4">
                    <p className="text-center">Vous n'avez pas autorisé la géolocalisation. Si vous souhaitez voir la météo de votre ville, vous devez activer la géolocalisation dans vos paramètres.</p>
                </div>
            : 
                <div className="bg-blue-300 flex justify-center items-center rounded h-[200px] w-100">
                    {/* Ajouter ici le composant pour afficher la météo avec en props l'appel de la fonction meteotoday et coords user */}
                    {data && <ForecastWeather data={data} />}
                </div>
            }
        </div>
    );
};

export default MeteoToday;