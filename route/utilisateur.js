const express = require('express')
const {addUser, getUsers} = require('../controller/utilisateur');
const router = express.Router();


router.route('/users').post(addUser);
router.route('/users').get(getUsers);

module.exports = router;