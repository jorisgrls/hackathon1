import axios from "axios";

const convertisseur = (city) => {
  let cityLocation={};
  axios
    .get(`https://nominatim.openstreetmap.org/search.php?city=${city}&format=jsonv2`)
    .then((res) => res.data[0])
    .then((data) =>{ 
      cityLocation = {lat : data.lat, long: data.lon}
    }     
    )
    return cityLocation
} 

export default convertisseur