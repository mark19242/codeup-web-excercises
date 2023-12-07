import {keys} from "./keys.js";

const getLastCommit = (username) => {
    const url = `https://api.github.com/users/:${username}/events`;
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `token ${keys.github}`,
        },
    };
    return fetch (url, options)
        .then(response =>response.json())
        .catch(error=>console.log(error))

};

getLastCommit(`mark19242`).then((event) =>{
    console.log(event[0])
});

