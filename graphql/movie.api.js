const { default: axios } = require("axios");

const API_URL = "https://yts.mx/api/v2/list_movies.json?";

module.exports = {
    getMovies: async (_, { limit, rating }) => {
        const params = [];
        limit > 0 && params.push(`limit=${limit}`);
        rating > 0 && params.push(`minimum_rating=${rating}`);

        const { data: { data: { movies } } } = await axios({
            method: 'GET',
            url: API_URL + params.join('&')
        });

        return movies;
    }
};
