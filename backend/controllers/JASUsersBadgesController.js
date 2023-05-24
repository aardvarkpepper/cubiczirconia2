const express = require('express');
const JASUsersBadges = express.Router({mergeParams: true});

const {
    getAllJASUsersBadgesSortByDate,
    getAllJASUsersBadgesByUserSortByDate,
    getAllJASUsersBadgesByBadgeSortByDate,
    getOneJASUserBadge,
    createJASUserBadge,
    deleteJASUserBadge,
    updateJASUserBadge
} = require('../queries/JASUsersBadges.js');

//index route, JASUserBadges, sort by date.
JASUsersBadges.get('/', async (req, res) => {
    const allJASUsersBadgesSortByDate = await getAllJASUsersBadgesSortByDate();

    if (allJASUsersBadgesSortByDate.success) {
        res.status(200).json(allJASUsersBadgesSortByDate.payload);
    } else {
        res.status(400).json({ error: `Error: ${allJASUsersBadgesSortByDate.payload}` });
    }
})

//index route, JASUserBadges by badge, sort by date.  Entered before "/:id" route to prevent bad routing.
JASUsersBadges.get('/badge/:badgeId', async (req, res) => {
    const { badgeId } = req.params;
    const allJASUsersBadgesByBadgeSortByDate = await getAllJASUsersBadgesByBadgeSortByDate(badgeId);

    if (allJASUsersBadgesByBadgeSortByDate.success) {
        res.status(200).json(allJASUsersBadgesByBadgeSortByDate.payload);
    } else {
        res.status(400).json({ error: `Error: ${allJASUsersBadgesByBadgeSortByDate.payload}` });
    }
})

//index route, JASUserBadges by user, sort by date.  Entered before "/:id" route to prevent bad routing.
JASUsersBadges.get('/user/:userId', async (req, res) => {
    const { userId } = req.params;
    const allJASUsersBadgesByUserSortByDate = await getAllJASUsersBadgesByUserSortByDate(userId);

    if (allJASUsersBadgesByUserSortByDate.success) {
        res.status(200).json(allJASUsersBadgesByUserSortByDate.payload);
    } else {
        res.status(400).json({ error: `Error: ${allJASUsersBadgesByUserSortByDate.payload}` });
    }
})

//show route
JASUsersBadges.get('/:id', async (req, res) => {
    const { id } = req.params;
    const oneJASUserBadge = await getOneJASUserBadge(id);

    if (oneJASUserBadge.success) {
        res.status(200).json(oneJASUserBadge.payload);
    } else {
        res.status(400).json({ error: `Error: ${oneJASUserBadge.payload}` });
    }
})

//create route
JASUsersBadges.post('/', async (req, res) => {
    const newJASUserBadge = req.body;
    const createdJASUserBadge = await createJASUserBadge(newJASUserBadge);

    if (createdJASUserBadge.success) {
        res.status(200).json(createdJASUserBadge.payload);
    } else {
        res.status(400).json({ error: `Error: ${createdJASUserBadge.payload}` });
    }
})

//delete route
JASUsersBadges.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const deletedJASUserBadge = await deleteJASUserBadge(id);

    if (deletedJASUserBadge.success) {
        res.status(200).json(deletedJASUserBadge.payload);
    } else {
        res.status(400).json({ error: `Error: ${deletedJASUserBadge.payload}` });
    }
})

//update route
JASUsersBadges.put('/:id', async (req, res) => {
    const { id } = req.params;
    const editJASUserBadge = req.body;
    const updatedJASUserBadge = await updateJASUserBadge(id, editJASUserBadge);

    if (updatedJASUserBadge.success) {
        res.status(200).json(updatedJASUserBadge.payload);
    } else {
        res.status(400).json({ error: `Error: ${updatedJASUserBadge.payload}` });
    }
})

module.exports = JASUsersBadges;