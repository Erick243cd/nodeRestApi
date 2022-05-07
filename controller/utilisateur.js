const { User } = require("../model/utilisateur")

const client = require('../config/db');

const addUser = async (req, res) => {
    try {
        let user = new User(req.body.fullname, req.body.adress, req.body.phone);
        let result = await client.bd().collection('users').insertOne(user);
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}