const MovieAPI = require('./movie.api');

module.exports = class MovieService {
    constructor() {
        this.api = new MovieAPI('./database/movies.json', 'movies');
        this.movies = null;
        this.init();
    }

    async init() {
        this.movies = await this.api.get();
    }

    async getAllMovies() {
        if (!this.movies) {
            await this.init();
        }

        return await this.movies;
    }
}