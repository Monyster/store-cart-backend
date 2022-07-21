const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");
const db = require("./config/db");
const app = express();

const corsMiddleware = require("./middleware/cors.middleware");

const port = 8000;

app.use(corsMiddleware);

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(db.url, (err, client) => {
  if (err) return console.log(err);

  const db = client.db("mytestingdb");

  require("./app/routes")(app, db);
  app.listen(port, () => {
    console.log("We are live on " + port);
  });
});
