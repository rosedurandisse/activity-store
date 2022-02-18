const express = require("express");
const {
  getAllAdventures,
  getOneAdventure,
  deleteOneAdventure,
} = require("../Queries/Adventure");
const adventures = express.Router();

adventures.get("/", async (request, response) => {
  console.log(`This is the response for the all query,girl`);
  const allAdventures = await getAllAdventures();
  response.status(200).json(allAdventures);
});

adventures.get("/:id", async (request, response) => {
  console.log("This is each item");
  const oneAdventure = await getOneAdventure(request.params.id);
  response.status(200).json(oneAdventure);
});

adventures.delete("/:id", async (request, response) => {
  console.log("This is gone girl");
  const deletedAdventure = await deleteOneAdventure(request.params.id);
  response.status(200).json(deletedAdventure);
});

module.exports = adventures;
