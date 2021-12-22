exports.start = start;

function start() {
    console.log('1. Lister les clients');
    console.log('99. Sortir');

    // récupération du module `readline`
    let readline = require('readline');

    // création d'un objet `rl` permettant de récupérer la saisie utilisateur
    let rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    // récupération de la saisie utilisateur
    rl.question('Merci de selectionner une option : ', function (saisie) {
        if (saisie == 1) {
            console.log('>> Liste des clients');
            rl.close();
            start();
        } else if (saisie === '99') {
            console.log('Au revoir');
            rl.close();
        } else {
            console.log('Merci de saisir une option valable');
            rl.close();
            start();
        }
    });
}



