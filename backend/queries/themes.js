const db = require('../db/dbConfig.js');

//themes index query, sort by theme id
const getAllThemesSortByThemeId = async () => {
  try {
    const allThemesSortByThemeId  = await db.any("SELECT * FROM themes ORDER BY theme_id ASC");
    return { success: true, payload: allThemesSortByThemeId };
  } catch (error) {
    return { success: false, payload: error };
  }
}

//themes index query by user, order by theme id
const getAllThemesByUserSortByThemeId = async (userId) => {
  try {
    const allThemesByUserSortByThemeId = await db.any("SELECT * FROM themes WHERE user_id = $1 ORDER BY theme_id ASC", userId);
    return { success: true, payload: allThemesByUserSortByThemeId };
  } catch (error) {
    return { success: false, payload: error };
  }
}

//show query
const getOneTheme = async (themeId) => {
  try {
    const oneTheme = await db.one("SELECT * FROM themes WHERE theme_id=$1;", themeId);
    return { success: true, payload: oneTheme };
  } catch (error) {
    return { success: false, payload: error };
  }
}

//create query.  Field specific.
const createTheme = async (themeToAdd) => {
  const {
    theme_name, 
    theme_display_size, 
    theme_show_badges, 
    theme_palette, 
    theme_font, 
    theme_text_color, 
    theme_text_size, 
    theme_background, 
    user_id
  } = themeToAdd;

  /*
  Excluding id, if 10 fields, 10 variables.
  As there are queries for each field (maintaining scalability), and database queries are to be minimized for cost,
  rather than using humps to retrieve data names and convert, they are manually entered.
  */
  try {
    const newTheme = await db.one(
      "INSERT INTO themes (theme_name, theme_display_size, theme_show_badges, theme_palette, theme_font, theme_text_color, theme_text_size, theme_background, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *;",
      [theme_name, theme_display_size, theme_show_badges, theme_palette, theme_font, theme_text_color, theme_text_size, theme_background, user_id]
    );
    return { success: true, payload: newTheme };
  } catch (error) {
    return { success: false, payload: error };
  }
}

//delete query
const deleteTheme = async (themeId) => {
  try {
    const deletedTheme = await db.one("DELETE FROM themes WHERE theme_id=$1 RETURNING *;", themeId);
    return { success: true, payload: deletedTheme };
  } catch (error) {
    return { success: false, payload: error };
  }
}

//update query.  Field specific.
const updateTheme = async (themeId, themeToUpdate) => {
  const {
    theme_name, 
    theme_display_size, 
    theme_show_badges, 
    theme_palette, 
    theme_font, 
    theme_text_color, 
    theme_text_size, 
    theme_background, 
    user_id
  } = themeToUpdate;

  /*
  Excluding id, if 10 fields, 11 variables (id at end)
  As there are queries for each field (maintaining scalability), and database queries are to be minimized for cost,
  rather than using humps to retrieve data names and convert, they are manually entered.
  */

  try {
    const updatedTheme = await db.one(
      "UPDATE themes SET theme_name=$1, theme_display_size=$2, theme_show_badges=$3, theme_palette=$4, theme_font=$5, theme_text_color=$6, theme_text_size=$7, theme_background=$8, user_id=$9 WHERE theme_id=$10 RETURNING *;",
      [theme_name, theme_display_size, theme_show_badges, theme_palette, theme_font, theme_text_color, theme_text_size, theme_background, user_id, themeId]
    );
    return { success: true, payload: updatedTheme };
  } catch (error) {
    return { success: false, payload: error };
  }
}

module.exports = {
  getAllThemesSortByThemeId,
  getAllThemesByUserSortByThemeId,
  getOneTheme,
  createTheme,
  deleteTheme,
  updateTheme
};