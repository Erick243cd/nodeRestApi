const express = require('express');
const { connection } = require('./config/db');
const userRoutes = require('./route/utilisateur');
const app = express()

//Create Endpoint (Point de terminaison)

app.use(express.urlencoded({extended:true}));//Middleware pour les inputs post
app.use(express.json()); //Conversion de données des input en json

app.use("/api/v1/", userRoutes);

connection('mongo://127.0.0.1/27017', (error) => {
    if (error) {
        console.log('erreur lors de la connexion à la bd');
        process.exit(-1); //Instruction pour quitter l'applicatione
    } else {
        console.log('Connexion établise');

        app.listen(3000)
        console.log('En attente de la requête au port 3000');
    }
})


