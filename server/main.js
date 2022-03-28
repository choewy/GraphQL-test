const { GraphQLServer } = require("graphql-yoga");
const resolvers = require("../graphql/resolvers");

const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers: resolvers
});

server.start(() => {
    console.log(`GraphQL Server Running`)
});
