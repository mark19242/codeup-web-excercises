import { getPokemon, getPokemonAll } from "./pokemon-api.js";




//MAIN
(async () => {
    getPokemonAll().then((list) => {
        console.log(list);
    });
})();