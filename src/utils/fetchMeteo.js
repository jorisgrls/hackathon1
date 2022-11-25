import axios from "axios"

const fetchMeteo = async (lat, lon, startDate=null, endDate=null) => {
    const { data } = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&timezone=auto${startDate && endDate ? `&start_date=${startDate}&end_date=${endDate}` : ""}`)
    return data;
}

export default fetchMeteo