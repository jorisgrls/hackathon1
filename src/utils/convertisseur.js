import axios from "axios";

const convertisseur = async (city) => {
  const { data } = await axios
    .get(`https://nominatim.openstreetmap.org/search.php?city=${city}&format=jsonv2`)
  if(!data.length){
    return {}
  }
  return {lat : data[0].lat , lon: data[0].lon}
} 

export default convertisseur