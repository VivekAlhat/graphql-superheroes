const { APIURI } = require("../config/config");
const fetch = require("node-fetch");

const resolvers = {
  Query: {
    fetchSuperhero: async (_, { id }) => {
      const response = await fetch(`${APIURI}/${id}`);
      return response.json();
    },
  },
};

module.exports = resolvers;
