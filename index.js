const createHandler = require("azure-function-express").createHandler;
const express = require("express");


var http = require("http");
var path = require("path");
var models = require("./models");
var router = require("./routes/routes");
var logger = require("morgan");
const app = express();
var clientPath = path.resolve(__dirname, "client");


app.use(logger("dev"));
app.use("/",express.static(clientPath));
app.use("/", router);


models.sequelize.sync().then(function () {
  var server = app.listen(4000, function() {
  console.log('Express server listening on port ' + server.address().port);
  });
});

module.exports = createHandler(app);
