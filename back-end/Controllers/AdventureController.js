const express = require("express");
const { getAllAdventures } = require("../Queries/Adventure");
const adventures = express.Router();

adventures.get("/", async (request, response) => {
  console.log(`This is the response for the all query,girl`);
  const allAdventures = await getAllAdventures();
  response.status(200).json(allAdventures);
});

module.exports = adventures;
