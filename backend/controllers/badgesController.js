const express = require('express');
const badges = express.Router({mergeParams: true});

const {
    getAllBadgesSortByBadgeId,
    getOneBadge,
    createBadge,
    deleteBadge,
    updateBadge
} = require('../queries/badges.js');

//index route badges, sort by badge id
badges.get('/', async (req, res) => {
    const allBadgesSortByBadgeId = await getAllBadgesSortByBadgeId();

    if (allBadgesSortByBadgeId.success) {
        res.status(200).json(allBadgesSortByBadgeId.payload);
    } else {
        res.status(400).json({ error: `Error: ${allBadgesSortByBadgeId.payload}` });
    }
})

//show route
badges.get('/:id', async (req, res) => {
    const { id } = req.params;
    const oneBadge = await getOneBadge(id);

    if (oneBadge.success) {
        res.status(200).json(oneBadge.payload);
    } else {
        res.status(400).json({ error: `Error: ${oneBadge.payload}` });
    }
})

//create route
badges.post('/', async (req, res) => {
    const createdBadge = await createBadge(req.body);

    if (createdBadge.success) {
        res.status(200).json(createdBadge.payload);
    } else {
        res.status(400).json({ error: `Error: ${createdBadge.payload}` });
    }
})

//delete route
badges.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const deletedBadge = await deleteBadge(id);

    if (deletedBadge.success) {
        res.status(200).json(deletedBadge.payload);
    } else {
        res.status(400).json({ error: `Error: ${deletedBadge.payload}` });
    }
})

//update route
badges.put('/:id', async (req, res) => {
    const { id } = req.params;
    const updatedBadge = await updateBadge(id, req.body);

    if (updatedBadge.success) {
        res.status(200).json(updatedBadge.payload);
    } else {
        res.status(400).json({ error: `Error: ${updatedBadge.payload}` });
    }
})

module.exports = badges;