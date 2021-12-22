const { express } = require('express');
let request = require('request');
// récupération du module `readline`
let readline = require('readline');

exports.start = start;

function start() {
    console.log('1. Lister les clients');
    console.log('99. Sortir');

    // création d'un objet `rl` permettant de récupérer la saisie utilisateur
    let rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    // récupération de la saisie utilisateur
    rl.question('Merci de selectionner une option : ', function (saisie) {
        switch (saisie) {
            case '1':
                displayClients();
                rl.close();
                break;
            case '99':
                console.log('Au revoir');
                rl.close();
            default:
                console.log('Merci de saisir une option valable');
                rl.close();
                start();
                break;
        }
        rl.close();
    });
}

function displayClients() {
    request('http://localhost:8080/clients', { json: true },
        (err, res, body) => {
            if (err) {
                return console.log('Erreur', err);
            }
            console.log('>> Liste des clients', body);
            start();
        });
}
