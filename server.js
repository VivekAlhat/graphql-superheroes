const { ApolloServer } = require("apollo-server");

const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");

const server = new ApolloServer({ typeDefs, resolvers });
server
  .listen({ port: 5000 })
  .then((res) => console.log(`Server is running at ${res.url}`));
