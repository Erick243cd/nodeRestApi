const express = require('express')
const {
    addUser,
    getUsers,
    getUser,
    updateUser
} = require('../controller/utilisateur');
const router = express.Router();


router.route('/users').post(addUser);
router.route('/users').get(getUsers);
router.route('/users/:id').get(getUser);
router.route("/users/:id").put(updateUser);
// router.route("/utilisateurs/:id").delete(deleteUtilisateur);

module.exports = router;