const express = require('express');
const users = express.Router({mergeParams: true});

const {
    getAllUsersSortByUserId,
    getOneUserByUserLoginName,
    getOneUser,
    createUser,
    deleteUser,
    updateUser
} = require('../queries/users.js');

//index route, users, sort by user id
users.get('/', async (req, res) => {
    const allUsersSortByUserId = await getAllUsersSortByUserId();

    if (allUsersSortByUserId.success) {
        res.status(200).json(allUsersSortByUserId.payload);
    } else {
        res.status(400).json({ error: `Error: ${allUsersSortByUserId.payload}` });
    }
})

//show route
users.get('/:id', async (req, res) => {
    const { id } = req.params;
    const oneUser = await getOneUser(id);

    if (oneUser.success) {
        res.status(200).json(oneUser.payload);
    } else {
        res.status(400).json({ error: `Error: ${oneUser.payload}` });
    }
})

//show route
users.get('/user/:id', async (req, res) => {
    const { id } = req.params;
    const oneUser = await getOneUserByUserLoginName(id);

    if (oneUser.success) {
        res.status(200).json(oneUser.payload);
    } else {
        res.status(400).json({ error: `Error: ${oneUser.payload}` });
    }
})

//create route
users.post('/', async (req, res) => {
    const newUser = req.body;
    const createdUser = await createUser(newUser);

    if (createdUser.success) {
        res.status(200).json(createdUser.payload);
    } else {
        res.status(400).json({ error: `Error: ${createdUser.payload}` });
    }
})

//delete route
users.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const deletedUser = await deleteUser(id);

    if (deletedUser.success) {
        res.status(200).json(deletedUser.payload);
    } else {
        res.status(400).json({ error: `Error: ${deletedUser.payload}` });
    }
})

//update route
users.put('/:id', async (req, res) => {
    const { id } = req.params;
    const editUser = req.body;
    const updatedUser = await updateUser(id, editUser);

    if (updatedUser.success) {
        res.status(200).json(updatedUser.payload);
    } else {
        res.status(400).json({ error: `Error: ${updatedUser.payload}` });
    }
})

module.exports = users;