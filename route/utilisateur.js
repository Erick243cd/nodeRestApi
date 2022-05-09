const express = require('express')
const {
    addUser,
    getUsers,
    getUser
} = require('../controller/utilisateur');
const router = express.Router();


router.route('/users').post(addUser);
router.route('/users').get(getUsers);
router.route('/users/:id').get(getUser);


// router.route("/utilisateurs/:id").put(updateUtilisateur);
// router.route("/utilisateurs/:id").delete(deleteUtilisateur);

module.exports = router;