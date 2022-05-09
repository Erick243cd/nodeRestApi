const { User } = require("../model/utilisateur")

const client = require('../config/db');

const { ObjectID } = require("bson");


const addUser = async (req, res) => {
    try {
        let user = new User(req.body.fullname, req.body.adress, req.body.phone);
        console.log(user);
        let result = await client.bd().collection('users').insertOne(user);
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

//Affichage des users
const getUsers = async (req, res) => {
    try {
        let cursor = await client.bd().collection('users').find();
        let result = await cursor.toArray();

        if (result.length > 0) {
            res.status(200).json(result)
        } else {
            res.status(204).json({ msg: "Aucun object n'a été trouvé" })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}


const getUser = async (req, res) => {
    try {
      let id = new ObjectID(req.params.id);
      let cursor = client.bd().collection("users").find({ _id: id });
      let result = await cursor.toArray();
      if (result.length > 0) {
        res.status(200).json(result[0]);
      } else {
        res.status(204).json({ msg: "Cet utilisateur n'existe pas" });
      }
    } catch (error) {
      console.log(error);
      res.status(501).json(error);
    }
  };

module.exports = { addUser, getUsers, getUser };