const express = require("express");
const kids = express.Router();

const { createAllKids, getAllKids } = require("../controllers/kids");
const {
  createAllKidsEasternWestern,
  getAllKidsEasternWestern,
} = require("../controllers/kids_Eastern_Western");


// Routes for Kids
kids.post("/createAllKids", createAllKids);
kids.get("/getAllKids", getAllKids);

// Routes for Kids Eastern Western
kids.post("/createAllKidsEasternWestern", createAllKidsEasternWestern);
kids.get("/getAllKidsEasternWestern", getAllKidsEasternWestern);


module.exports = kids;
