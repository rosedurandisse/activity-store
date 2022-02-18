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

module.exports = {
  getAllAdventures,
};
