var dbHost = process.env.dbHost || "localhost";
var port = process.env.port  || 3000
module.exports = {
  name: "Djezzyin",
  title: "Djezzyin",
  app: {
    host: process.env.url || "localhost",
    port: process.env.port  || 3000
  },
  author: "abdm64",
  version: "2.0.0",
  db: {
    connectionUri: "mongodb://" + dbHost + ":27017/djezzyinemp",
    params: {},
    collections: ["moment", "user", "feeling", "ask"]
  }
};
