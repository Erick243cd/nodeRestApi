const express = require('express');
const { connection } = require('./config/db');
const userRoutes = require('./route/utilisateur');
const bodyParser = require('body-parser');
const app = express()

//Create Endpoint (Point de terminaison)



// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use(bodyParser.json());

app.use("/api/v1", userRoutes);

connection('mongodb://127.0.0.1:27017/', (error) => {
    if (error) {
        console.log('erreur lors de la connexion à la bd');
        process.exit(-1); //Instruction pour quitter l'applicatione
    } else {
        console.log('Connexion établies');

        app.listen(3000)
        console.log('En attente de la requête au port 3000');
    }
})


