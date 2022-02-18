const db = require("../db/dbConfig");

const getAllAdventures = async () => {
  try {
    allAdventures = await db.any("SELECT * FROM adventures");
    console.log(allAdventures);
    return allAdventures;
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = {
  getAllAdventures,
};
