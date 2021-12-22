let pres = require('./presentation');

console.log('** Administration Hotel **');
pres.start();

/**
 * Charger le module express intallé en local :
 * npm i express (package.json)
 * API permet de gérer les appels HTTP GET, POST, DELETE, PUT, PATCH
 * (Server HTTP) qui attendent les requêtes Client HTTP
 */
// 1 Charger le module
let express = require("express");

// 2 Charger l'export (arrow function) 
let app = express();

//Middleware
// Chargement de Gestion des API REST : flux JSON
app.use(express.json());

/**
 * Des données en objets JSON [{}, {}]
 */
const clients = require('./clients.json');

/**
 * Configurer un appel HTTP GET + Mapping "/clients"
 * localhost:8080/clients
 *  -> le résultat sera en JSON la liste des clients
 */
app.get('/clients', (req, res) => {
    res.status(200).json(clients);
});

app.listen(8080, () => {
    //console.log("Serveur à l'écoute !")
});