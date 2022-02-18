const db = require("../db/dbConfig");

const getAllAdventures = async () => {
  try {
    allAdventures = await db.any("SELECT * FROM adventures");
    // console.log(allAdventures);
    return allAdventures;
  } catch (error) {
    // console.log(`This is from the query page ${error}`);
    return error;
  }
};

getOneAdventure = async (id) => {
  try {
    oneAdventure = await db.one("SELECT * FROM adventures WHERE id=$1", id);
    return oneAdventure;
  } catch (error) {
    console.log(error);
    return error;
  }
};

deleteOneAdventure = async (id) => {
  try {
    deletedAdventure = await db.one(
      "DELETE FROM adventures WHERE id=$1 RETURNING *",
      id
    );
    return deletedAdventure;
  } catch (error) {
    return error;
  }
};

createAnAdventure = async (adventureObject) => {
  const { name, description, price, rating, adrenaline_approved } =
    adventureObject;
  try {
    createdAdventure = await db.one(
      "INSERT INTO adventures (name, description, price, rating, adrenaline_approved) VALUES ($1, $2,$3,$4,$5) RETURNING *",
      [name, description, price, rating, adrenaline_approved]
    );
    return createdAdventure;
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = {
  getAllAdventures,
  getOneAdventure,
  deleteOneAdventure,
  createAnAdventure,
};
