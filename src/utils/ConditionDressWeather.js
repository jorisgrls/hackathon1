


const selectDress = (data, vetements) => {
    const v = vetements
    const t = data.daily.temperature_2m_max;
    const n = data.daily.weathercode;
    const j = data.daily.time.length;
    let filtrage = []
    for (let i=0; i<j; i++) {
        const valise =[]
        

        filtrage = v.filter(ve => ve.id_weather_code.includes(n[i]) && t[i].toFixed(0) <= ve.temperatureMax && t[i].toFixed(0) >= ve.temperatureMin)
        
    };
const cloth = filtrage.map((item) => {
    return ({quantity : (data.daily.time.length*item.ratio ? Math.ceil(data.daily.time.length*item.ratio) : 1),
    clothing :item})
    

    });
   
    return cloth
}

export default selectDress 





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