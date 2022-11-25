import React, { useEffect, useState } from 'react';
import fetchMeteo from '../utils/fetchMeteo';

const MeteoToday = () => {
    const [coordsUser, setCoordsUser] = useState(null);
    const [isError, setIsError] = useState(true)
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
    useEffect(()=>{
        if(coordsUser){
            fetchMeteo(coordsUser.lat,coordsUser.lon);
        }
    },[coordsUser])
    return (
        <div>
            {isError ? 
                <div className="text-white font-medium flex justify-center items-center rounded h-[200px] w-100 px-4">
                    <p className="text-center">Vous n'avez pas autorisé la géolocalisation. Si vous souhaitez voir la météo de votre ville, vous devez activer la géolocalisation dans vos paramètres.</p>
                </div>
            : 
                <div className="bg-blue-300 flex justify-center items-center rounded h-[200px] w-100">
                    {/* Ajouter ici le composant pour afficher la météo avec en props l'appel de la fonction meteotoday et coords user */}
                    <p>ok</p>
                </div>
            }
        </div>
    );
};

export default MeteoToday;