/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite klasę "Movie", kuri sukuria objektus su 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnis nei 100 000 000 mln USD, tada gražins true, kitu atveju false.
------------------------------------------------------------------------------------------------------ */

class Movie {
    constructor(title, director, budget){
        this.title = title;
        this.director = director;
        this.budget = budget;
    }
    wasExpensive(budget){
        return this.budget > 100000000;
    }
}

let movieList = [
    new Movie("Avatar", "James Cameron", 237000000),
    new Movie("Titanikas", "James Cameron", 200000000),
    new Movie("Matrica", "Lana Wachowski", 90000000)
]

console.log(movieList[2].wasExpensive());