import {keys} from "./keys.js";
const getCoordinates = async (searchText) => {
    const url = `https://api.mapbox.com/geocoding/v5/{mapbox.places}/{search_text}.json?access_token=${keys.mapbox}`;
    const options ={
        method: "GET",
        headers: {
            "Content_Type": "application/json",
        },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}


//MAIN
    (async () => {
        const coordinates = await getCoordinates("8700 Tesoro Dr Suite 100, San Antonio, TX 78217")
        console.log(coordinates);
        mapboxgl.accessToken = keys.mapbox
 mapboxgl.accessToken = keys.mapbox;
        const map = new mapboxgl.Map({
            container: 'map', // container ID
// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
            style: 'mapbox://styles/mapbox/streets-v12', // style URL
            center: [ -98.45388935362625,29.51918888949737, ], // starting position [lng, lat]
            zoom: 25 // starting zoom

        });
        // const marker = new mapboxgl.Marker()
        //     .setLngLat([-80.96758831821627,29.20141391326364])
        //     .addTo(map);
        // let popup = new mapboxgl.Popup()
        //     .setLngLat([-80.96758831821627,29.20141391326364])
        //     .setHTML("<p>Señor Taco!</p>")
        //     .addTo(map);
    })();



// const favoriteRestaurants = [
//     { name: "Who's Got Soul", address: "3580 Breckinridge Blvd, Duluth, GA 30096" },
//     { name: "The Licking", address: "12328 Miramar Pkwy Miramar, FL 33025" },
//     { name: "Señor Taco", address: "3174 S Atlantic Ave ste a, Daytona Beach, FL 32118" }
// ];
//
// const createMap = async (restaurant) => {
//     const coordinates = await getCoordinates(restaurant.address);
//
//     mapboxgl.accessToken = keys.mapbox;
//
//     const map = new mapboxgl.Map({
//         container: 'map', // container ID
//         style: 'mapbox://styles/mapbox/streets-v12', // style URL
//         center: [coordinates.features[0].center[0], coordinates.features[0].center[1]], // use the obtained coordinates
//         zoom: 12 // starting zoom
//     });
//
//     const marker = new mapboxgl.Marker()
//         .setLngLat([coordinates.features[0].center[0], coordinates.features[0].center[1]])
//         .addTo(map);
//
//     let popup = new mapboxgl.Popup()
//         .setLngLat([ -84.1699803199103,34.59860475429779])
//         .setHTML(`<p>Who's Got Soul</p>`)
//         .addTo(map);
// };
//
// // Call the function for each restaurant
// favoriteRestaurants.forEach(async (restaurant) => {
//     await createMap(restaurant);
// });
