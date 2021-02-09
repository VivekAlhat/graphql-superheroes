require("dotenv").config();

module.exports = {
  APIURI: `https://superheroapi.com/api/${process.env.API_ACCESS_TOKEN}`,
};
