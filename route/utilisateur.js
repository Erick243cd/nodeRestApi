const express = require('express')
const {
    addUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser
} = require('../controller/utilisateur');
const router = express.Router();


router.route('/users').post(addUser);
router.route('/users').get(getUsers);
router.route('/users/:id').get(getUser);
router.route("/users/:id").put(updateUser);
router.route("/users/:id").delete(deleteUser);

module.exports = router;