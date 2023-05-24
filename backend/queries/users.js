const db = require('../db/dbConfig.js');

//users index query, sort by user id
const getAllUsersSortByUserId = async () => {
  try {
    const allUsersSortByUserId = await db.any("SELECT * FROM users ORDER BY user_id ASC");
    return { success: true, payload: allUsersSortByUserId };
  } catch (error) {
    return { success: false, payload: error };
  }
}

//show query
const getOneUser = async (userId) => {
  try {
    const oneUser = await db.one("SELECT * FROM users WHERE user_id=$1;", userId);
    return { success: true, payload: oneUser };
  } catch (error) {
    return { success: false, payload: error };
  }
}

//show query, by 
const getOneUserByUserLoginName = async (userId) => {
  try {
    const oneUser = await db.one("SELECT * FROM users WHERE user_login_name=$1;", userId);
    return { success: true, payload: oneUser };
  } catch (error) {
    return { success: false, payload: error };
  }
}

//create query.  Field specific.
const createUser = async (userToAdd) => {
  const {
    user_login_name, 
    user_login_password, 
    user_failed_logins, 
    user_last_login, 
    user_date_of_birth, 
    user_account_create_date, 
    user_username, 
    user_image_type, 
    user_image_local, 
    user_image_url, 
    user_subscription_type, 
    user_access_level, 
    user_email, 
    user_quote, 
    user_notepad
  } = userToAdd;

  /*
  Excluding id, if 10 fields, 10 variables.
  As there are queries for each field (maintaining scalability), and database queries are to be minimized for cost,
  rather than using humps to retrieve data names and convert, they are manually entered.
  */
  try {
    const newUser = await db.one(
      "INSERT INTO users (user_login_name, user_login_password, user_failed_logins, user_last_login, user_date_of_birth, user_account_create_date, user_username, user_image_type, user_image_local, user_image_url, user_subscription_type, user_access_level, user_email, user_quote, user_notepad) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) RETURNING *;",
      [user_login_name, user_login_password, user_failed_logins, user_last_login, user_date_of_birth, user_account_create_date, user_username, user_image_type, user_image_local, user_image_url, user_subscription_type, user_access_level, user_email, user_quote, user_notepad]
    );
    return { success: true, payload: newUser };
  } catch (error) {
    return { success: false, payload: error };
  }
}

//delete query
const deleteUser = async (userId) => {
  try {
    const deletedUser = await db.one("DELETE FROM users WHERE user_id=$1 RETURNING *;", userId);
    return { success: true, payload: deletedUser };
  } catch (error) {
    return { success: false, payload: error };
  }
}

//update query.  Field specific.
const updateUser = async (userId, userToUpdate) => {
  const {
    user_login_name,
    user_login_password,
    user_failed_logins,
    user_last_login,
    user_date_of_birth,
    user_account_create_date,
    user_username,
    user_image_type,
    user_image_local,
    user_image_url,
    user_subscription_type,
    user_access_level,
    user_email,
    user_quote,
    user_notepad
  } = userToUpdate;

  /*
  Excluding id, if 10 fields, 11 variables (id at end)
  As there are queries for each field (maintaining scalability), and database queries are to be minimized for cost,
  rather than using humps to retrieve data names and convert, they are manually entered.
  */

  try {
    const updatedUser = await db.one(
      "UPDATE users SET user_login_name=$1, user_login_password=$2, user_failed_logins=$3, user_last_login=$4, user_date_of_birth=$5, user_account_create_date=$6, user_username=$7, user_image_type=$8, user_image_local=$9, user_image_url=$10, user_subscription_type=$11, user_access_level=$12, user_email=$13, user_quote=$14, user_notepad=$15 WHERE user_id=$16 RETURNING *;",
      [user_login_name, user_login_password, user_failed_logins, user_last_login, user_date_of_birth, user_account_create_date, user_username, user_image_type, user_image_local, user_image_url, user_subscription_type, user_access_level, user_email, user_quote, user_notepad, userId]
    );
    return { success: true, payload: updatedUser };
  } catch (error) {
    return { success: false, payload: error };
  }
}

module.exports = {
  getAllUsersSortByUserId,
  getOneUser,
  getOneUserByUserLoginName,
  createUser,
  deleteUser,
  updateUser
};