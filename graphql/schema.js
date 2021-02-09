const gql = require("graphql-tag");

const typeDefs = gql`
  type Query {
    fetchSuperhero(id: Int!): Superhero
  }

  type Superhero {
    id: Int!
    name: String!
    powerstats: Powerstats
    work: Work
    connections: Connections
    image: Image
  }

  type Powerstats {
    intelligence: Int
    strength: Int
    speed: Int
    durability: Int
    power: Int
    combat: Int
  }

  type Work {
    occupation: String
    base: String
  }

  type Connections {
    relatives: String
  }

  type Image {
    url: String
  }
`;

module.exports = typeDefs;
