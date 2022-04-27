const {createCrop, fetchcrops} = require("../../controllers/crop/cropctlr");


const express = require("express");
const crRoute = express.Router();

crRoute.get("/", fetchcrops);
crRoute.post("/add", createCrop);

module.exports = crRoute;