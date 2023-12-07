import { NETFLIX_TITLES } from "../data/netflix-titles.js";
(() => {
    console.log(NETFLIX_TITLES);
    // THE FILTER METHOD

    // HERE IS HOW TO FILTER AN ARRAY WITHOUT THE FILTER METHOD
    // const scifiTitles = [];
    // for (let title of NETFLIX_TITLES) {
    // 	if (title.listed_in.includes("Sci-Fi")) {
    // 		scifiTitles.push(title);
    // 	}
    // }
    // NOW WITH THE FILTER METHOD
    // const scifiTitles = NETFLIX_TITLES.filter((title) => {
    // 	if (!title.listed_in) {
    // 		return false;
    // 	}
    // 	return title.listed_in.includes("Sci-Fi");
    // 	return title.listed_in?.includes("Sci-Fi"); /* NOTICE THE OPTIONAL CHAINING "?." */
    // });
    // console.log(scifiTitles);
    // console.log("Sci-Fi Titles => ", scifiTitles);

    const unitedStatesTitles = NETFLIX_TITLES.filter((title) => {
        return title.country?.includes("United States");
    });
    // console.log("United States Shows => ", unitedStatesTitles);

    const shows3SeasonsOrMore = NETFLIX_TITLES.filter((title) => {
        return title?.type === "TV Show";
    }).filter((title) => {
        let nmrOfSeasons = parseFloat(title.duration?.split(" ")[0]);
        return nmrOfSeasons >= 3;
    });
    // console.log("Long Running Seasons => ", shows3SeasonsOrMore);

    // THE FIND METHOD
    // const theNextGeneration = NETFLIX_TITLES.find((movie) => {
    // 	return movie.title.toLowerCase() === "Star Trek: The Next Generation".toLowerCase();
    // });
    // console.log(theNextGeneration);
    // // THE SOME METHOD
    // const hasStarTrek = NETFLIX_TITLES.some((movie) => {
    // 	return movie.title.toLowerCase().includes("star trek") && movie.type.toLowerCase() === "movie";
    // });
    // if (hasStarTrek) {
    // 	console.log("It has star trek movies, but star wars is better.");
    // }
    // THE MAP METHOD
    const betterNetflixTitles = NETFLIX_TITLES.map((movie, index) => {
        const betterObject = {
            id: index + 1,
            title: movie.title,
            type: movie.type,
            director: movie.director?.split(", "),
            cast: movie.cast?.split(", "),
            date_added: movie.date_added,
            release_year: movie.release_year,
            rating: movie.rating,
            duration: movie.duration,
            categories: movie.listed_in?.split(", "),
            description: movie.description,
        };
        return betterObject;
    });
    // console.log(betterNetflixTitles);
    console.log("Mapped => ", betterNetflixTitles);

    // THE REDUCE METHOD
    // How many action movies did Sylvester Stallone star in?
    const actionStalloneMovies = betterNetflixTitles.reduce((accumulator, movie) => {
        if (movie.categories?.includes("Action & Adventure") && movie.cast?.includes("Sylvester Stallone")) {
            return `${movie.title}, ${accumulator}`;

            const longestMovie = NETFLIX_TITLES.reduce((accumulator, show, index, array) => {
                if (show.type === "Movie") {
                    if (parseFloat(show.duration?.split(" ")[0]) > parseFloat(accumulator.duration?.split(" ")[0])) {
                        return show;
                    } else {
                        return accumulator;
                    }
                } else {
                    return accumulator;
                }
            }, NETFLIX_TITLES[0]);
            console.log("Longest Movie => ", longestMovie);

            let shoppingCart = [
                { name: "Apples", price: 2.99 },
                { name: "Bread", price: 1.49 },
                { name: "Milk", price: 0.99 },
                { name: "Eggs", price: 2.49 },
                { name: "Cheese", price: 3.99 },
            ];
            // incrementing the accumulator
            let total = shoppingCart.reduce((accumulator, product) => {
                return accumulator + product.price;
            }, 0);
            console.log("Total => ", total);

            // replacing the accumulator
            let mostExpensiveProduct = shoppingCart.reduce(
                (accumulator, product) => {
                    if (accumulator.price < product.price) {
                        return product;
                    } else {
                        return accumulator;
                    }
                },
                {
                    name: "Dummy",
                    price: 0,
                }
            );
            console.log("Most expensive product => ", mostExpensiveProduct);

            let mostExpensivePrice = shoppingCart.reduce((accumulator, product) => {
                if (product.price > accumulator) {
                    return product.price;
                } else {
                    return accumulator;
                }
            }, shoppingCart[0].price);
            console.log("Most Expensive Price => ", mostExpensivePrice);

            let leastExpensiveProduct = shoppingCart.reduce((accumulator, product) => {
                if (product.price < accumulator.price) {
                    return product;
                } else {
                    return accumulator;
                }
            }, "");
            console.log(actionStalloneMovies);
        }, shoppingCart[0]);
        console.log("Least Expensive Product => ", leastExpensiveProduct);
    })();