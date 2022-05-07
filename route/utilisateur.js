const express = require('express')
const {addUser} = require('../controller/utilisateur');
const router = express.Router();


router.route('/addUser').post(addUser);

module.exports = router;