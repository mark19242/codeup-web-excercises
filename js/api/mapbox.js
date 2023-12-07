import { keys } from "../keys.js";

/**
 * Create a mapbox map
 * @param {string} elementId - the id of the element to put the map in
 * @param {number[]} coordinates - the coordinates of the map, [lng, lat]
 * @param {number} [zoom=9] - *optional* the zoom level of the map
 * @returns {mapboxgl.Map} - the mapbox map
 */
export const createMap = (elementId, coordinates, zoom = 9) => {
    mapboxgl.accessToken = keys.mapbox;
    const map = new mapboxgl.Map({
        container: elementId, // container ID
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: "mapbox://styles/mapbox/dark-v11", // style URL
        center: coordinates, // starting position [lng, lat]
        zoom: 9, // starting zoom
        keyboard: false,
    });
    map.flyTo({
        center: coordinates,
        zoom,
        speed: 2,
    });
    return map;
};

/**
 * Get the coordinates of a location using the Mapbox Geocoding API
 * @param {*} searchText - the location to search for
 * @returns {number[]} - the coordinates of the location, [lng, lat]
 */
export const getCoordinates = async (searchText) => {
    searchText = encodeURIComponent(searchText);
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchText}.json?access_token=${keys.mapbox}`;
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return data.features[0].center;
    } catch (err) {
        console.error(err);
        return null;
    }
};

/**
 * Get the address of a location using the Mapbox Geocoding API
 * @param {number} lng - the longitude of the location
 * @param {number} lat - the latitude of the location
 * @returns {string} - the address of the location
 */
export const getAddress = async (lng, lat) => {
    if (Array.isArray(lng)) {
        lat = lng[1];
        lng = lng[0];
    }
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${keys.mapbox}`;
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return data.features[0].place_name;
    } catch (err) {
        console.error(err);
        return null;
    }
};