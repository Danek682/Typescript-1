class Movie{
    constructor(
       public titleMovie: string,
        public subtitleMovie: string,
        public year: number,
        public country: string,
        public slogan: string,
        public genre: string,
        public time: number | string
    ) {}
}

const avengers = new Movie (
    "Мстители",
    "The Avengers",
    2012,
    "США",
    "Avengers Assemble!",
    "Фантастика, боевик",
    "137 мин./02:17"
)

const cart: Movie[] = []

function addCart(movie: Movie): void {
    cart.push(movie)
}