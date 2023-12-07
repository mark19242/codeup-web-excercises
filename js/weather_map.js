import { keys } from "./keys.js";


const getCoordinates = async (searchText) => {
    searchText = encodeURIComponent(searchText);
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchText}.json?access_token=${keys.mapbox}`;
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    return data.features[0].center;
};


const getWeather = async (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${keys.OpenWeather}&units=imperial`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
};


const getForecast = async (lat, lon) => {
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${keys.OpenWeather}&units=imperial`;
    const forecastResponse = await fetch(forecastUrl);
    const forecastData = await forecastResponse.json();
    console.log("5-Day Forecast Data:", forecastData);
    return forecastData;
};


const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};


const getIconUrl = (iconCode) => `http://openweathermap.org/img/w/${iconCode}.png`;


(async () => {

    let initialCoordinates = await getCoordinates("San Antonio, TX");


    mapboxgl.accessToken = keys.mapbox;
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/satellite-streets-v12',
        center: initialCoordinates,
        zoom: 10,
    });


    const marker = new mapboxgl.Marker({
        draggable: true,
    })
        .setLngLat(initialCoordinates)
        .addTo(map);


    const updateWeatherInfo = async () => {
        const coordinates = marker.getLngLat();
        const currentWeather = await getWeather(coordinates.lat, coordinates.lng);
        const forecastData = await getForecast(coordinates.lat, coordinates.lng);


        document.getElementById("weather-info-1").innerHTML = `
            Date: ${formatDate(new Date())}<br>
            Temperature: ${currentWeather.current.temp}&deg;F<br>
            Description: ${currentWeather.current.weather[0].description}<br>
            Humidity: ${currentWeather.current.humidity}%<br>
            Wind: ${currentWeather.current.wind_speed} mph<br>
            Pressure: ${currentWeather.current.pressure} <br>
            <img src="${getIconUrl(currentWeather.current.weather[0].icon)}" alt="Weather Icon">
        `;


        for (let i = 1; i <= 5; i++) {
            const forecast = forecastData.list[i * 8 - 1];
            const forecastDate = new Date(forecast.dt * 1000);
            document.getElementById(`weather-info-${i}`).innerHTML = `
                Date: ${formatDate(forecastDate)}<br>
                Temperature: ${forecast.main.temp}&deg;F<br>
                Description: ${forecast.weather[0].description}<br>
                Humidity: ${forecast.main.humidity}%<br>
                Wind: ${forecast.wind.speed} mph<br>
                Pressure: ${forecast.main.pressure} <br>
                <img src="${getIconUrl(forecast.weather[0].icon)}" alt="Weather Icon">
            `;
        }
    };

    const findButton = document.getElementById('find-button');


    findButton.addEventListener('click', async () => {

        const locationInput = document.getElementById('location-input');
        const location = locationInput.value;


        if (location.trim() !== '') {
            const newCoordinates = await getCoordinates(location);
            map.setCenter(newCoordinates);
            marker.setLngLat(newCoordinates);
            await updateWeatherInfo();
        }
    });


    await updateWeatherInfo();


    marker.on("dragend", updateWeatherInfo);


    const toggleSwitch = document.querySelector('.switch__input');
    toggleSwitch.addEventListener('change', () => {
        // Toggle between light and dark modes
        const mapStyle = toggleSwitch.checked ? 'mapbox://styles/mapbox/dark-v11' : 'mapbox://styles/mapbox/light-v10';
        map.setStyle(mapStyle);


        const blueBanner = document.querySelector('.blue-banner');
        if (toggleSwitch.checked) {
            blueBanner.style.backgroundColor = '#111';
            blueBanner.style.boxShadow = '0px 0px 105px 45px rgba(46,147,255,0.9)';
        } else {
            blueBanner.style.backgroundColor = '#3498db';
            blueBanner.style.boxShadow = 'none';
        }
    });
})();
