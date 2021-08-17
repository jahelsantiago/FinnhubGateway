const { ApolloServer } = require('apollo-server');
const {typeDefs} = require("./squema")
const {query} = require("./resolvers/query")
const {FinnHub} = require("./data_sources/FinnHub")

const resolvers = {
  Query: query,
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources : () => {
    return {
      finnHub : new FinnHub(),
    }
  }
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});