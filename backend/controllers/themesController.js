const express = require('express');
const themes = express.Router({mergeParams: true});

const {
    getAllThemesSortByThemeId,
    getAllThemesByUserSortByThemeId,
    getOneTheme,
    createTheme,
    deleteTheme,
    updateTheme
} = require('../queries/themes.js');

//index route, themes, sort by theme id
themes.get('/', async (req, res) => {
    const allThemesSortByThemeId = await getAllThemesSortByThemeId();

    if (allThemesSortByThemeId.success) {
        res.status(200).json(allThemesSortByThemeId.payload);
    } else {
        res.status(400).json({ error: `Error: ${allThemesSortByThemeId.payload}` });
    }
})

//index route, themes by user, sort by theme id
themes.get('/user/:userId', async (req, res) => {
    const { userId } = req.params;
    const allThemesByUserSortByThemeId = await getAllThemesByUserSortByThemeId(userId);

    if (allThemesByUserSortByThemeId.success) {
        res.status(200).json(allThemesByUserSortByThemeId.payload);
    } else {
        res.status(400).json({ error: `Error: ${allThemesByUserSortByThemeId.payload}` });
    }
})

//show route
themes.get('/:id', async (req, res) => {
    const { id } = req.params;
    const oneTheme = await getOneTheme(id);

    if (oneTheme.success) {
        res.status(200).json(oneTheme.payload);
    } else {
        res.status(400).json({ error: `Error: ${oneTheme.payload}` });
    }
})

//create route
themes.post('/', async (req, res) => {
    const newTheme = req.body;
    const createdTheme = await createTheme(newTheme);

    if (createdTheme.success) {
        res.status(200).json(createdTheme.payload);
    } else {
        res.status(400).json({ error: `Error: ${createdTheme.payload}` });
    }
})

//delete route
themes.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const deletedTheme = await deleteTheme(id);

    if (deletedTheme.success) {
        res.status(200).json(deletedTheme.payload);
    } else {
        res.status(400).json({ error: `Error: ${deletedTheme.payload}` });
    }
})

//update route
themes.put('/:id', async (req, res) => {
    const { id } = req.params;
    const editTheme = req.body;
    const updatedTheme = await updateTheme(id, editTheme);

    if (updatedTheme.success) {
        res.status(200).json(updatedTheme.payload);
    } else {
        res.status(400).json({ error: `Error: ${updatedTheme.payload}` });
    }
})

module.exports = themes;