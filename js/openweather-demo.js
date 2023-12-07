import {keys} from "./keys.js";

/**
 * Gets a forecast from the OpenWeather API
 * @param {number} lat - latitude of coordinates
 * @param {number} lng - longitude of coordinates
 * @returns {Promise<void>}
 */
const getForecast = async (lat,lng) =>{
    if (Array.isArray(lat)) {
        lng =lat[1];
        lat = lat [0];
    }
const url = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lng}&exclude={part}&appid=${keys.openweather}`;
const options= {
    method: "GET"

};
const response = await fetch(url, options);
const data = response.json();
return data;
};
//main
(async() => {
    const sanAntonioForecast = await getForecast(29.458472, -98.6791838)
    console.log(sanAntonioForecast)

})();