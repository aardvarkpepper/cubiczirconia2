const db = require('../db/dbConfig.js');

//badges index query, sort by badge id;
const getAllBadgesSortByBadgeId = async () => {
  try {
    const allBadgesSortByBadgeId = await db.any("SELECT * FROM badges ORDER BY badge_id ASC");
    return { success: true, payload: allBadgesSortByBadgeId };
  } catch (error) {
    return { success: false, payload: error };
  }
}

//show query;
const getOneBadge = async (badgeId) => {
  try {
    const oneBadge = await db.one("SELECT * FROM badges WHERE badge_id=$1;", badgeId);
    return { success: true, payload: oneBadge };
  } catch (error) {
    return { success: false, payload: error };
  }
}

//create query.  Field specific.
const createBadge = async (badgeToAdd) => {
  console.log(badgeToAdd);
  const {
    badge_name,
    badge_description,
    badge_image_local,
  } = badgeToAdd;

  /*
  Excluding id, if 10 fields, 10 variables.
  As there are queries for each field (maintaining scalability), and database queries are to be minimized for cost,
  rather than using humps to retrieve data names and convert, they are manually entered.
  */
  try {
    const newBadge = await db.one(
      "INSERT INTO badges (badge_name, badge_description, badge_image_local) VALUES ($1, $2, $3) RETURNING *;",
      [badge_name, badge_description, badge_image_local]
    );
    return { success: true, payload: newBadge };
  } catch (error) {
    return { success: false, payload: error };
  }
}

//delete query
const deleteBadge = async (badgeId) => {
  try {
    const deletedBadge = await db.one("DELETE FROM badges WHERE badge_id=$1 RETURNING *;", badgeId);
    return { success: true, payload: deletedBadge };
  } catch (error) {
    return { success: false, payload: error };
  }
}

//update query.  Field specific.
const updateBadge = async (badgeId, badgeToUpdate) => {
  const {
    badge_name,
    badge_description,
    badge_image_local,
  } = badgeToUpdate;

  /*
  Excluding id, if 10 fields, 11 variables (id at end)
  As there are queries for each field (maintaining scalability), and database queries are to be minimized for cost,
  rather than using humps to retrieve data names and convert, they are manually entered.
  */

  try {
    const updatedBadge = await db.one(
      "UPDATE badges SET badge_name=$1, badge_description=$2, badge_image_local=$3 WHERE badge_id=$4 RETURNING *;",
      [badge_name, badge_description, badge_image_local, badgeId]
    );
    return { success: true, payload: updatedBadge };
  } catch (error) {
    return { success: false, payload: error };
  }
}

module.exports = {
  getAllBadgesSortByBadgeId,
  getOneBadge,
  createBadge,
  deleteBadge,
  updateBadge
};