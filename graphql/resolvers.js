const { getMovies } = require("./movie.api");

const resolvers = {
    Query: {
        movies: getMovies,
    },
};

module.exports = resolvers;