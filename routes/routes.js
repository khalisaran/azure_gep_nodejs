var express = require("express");
var api = express.Router();
var routers = require("./routers")
var bodyParser = require('body-parser');
api.use("/Nodeappjs_Default_Activity", bodyParser.json({limit: '50mb'}), routers.Nodeappjs_Default_ActivityRouter);

module.exports = api;