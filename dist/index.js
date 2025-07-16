"use strict";
class Movie {
    constructor(titleMovie, subtitleMovie, year, country, slogan, genre, time) {
        this.titleMovie = titleMovie;
        this.subtitleMovie = subtitleMovie;
        this.year = year;
        this.country = country;
        this.slogan = slogan;
        this.genre = genre;
        this.time = time;
    }
}
const avengers = new Movie("Мстители", "The Avengers", 2012, "США", "Avengers Assemble!", "Фантастика, боевик", "137 мин./02:17");
const cart = [];
function addCart(movie) {
    cart.push(movie);
}
