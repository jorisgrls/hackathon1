import React, { useEffect, useState } from 'react';
import fetchMeteo from '../utils/fetchMeteo';

const MeteoToday = () => {
    const [coordsUser, setCoordsUser] = useState(null);
    const success = ({coords}) => {
        setCoordsUser({lat:coords.latitude,lon:coords.longitude});
        console.log(coords);
    }
    const error = (error) => {
        console.log(error)
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
        <div className="bg-black rounded h-[200px] w-100">
            <p>ok</p>
        </div>
    );
};

export default MeteoToday;