export const getPokemon = (id = 1) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };
    return fetch(url, options)
        .then((response) => response.json())
        .catch((error) => console.log(error));
};

const getPokemonAll = async (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };

    const response = await fetch(url, options);
    let list = await response.json();
    const pokemon = await Promise.all(list.results.map((item) => getPokemon(item.name)));
    list.results = pokemon;
    return list;
};