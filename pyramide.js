"use strict";

function afficherPyramide() {
    // Récupérer le nombre d'étages saisi par l'utilisateur
    let nombreEtages = document.getElementById("nombre-lignes").value;

    // Vérifier que la saisie est un nombre valide et supérieur à 0
    if (isNaN(nombreEtages) || nombreEtages <= 0) {
        alert("Veuillez entrer un nombre valide supérieur à zéro.");
        return;
    }

    let pyramide = "";
    let espaces = " ".repeat(nombreEtages); // Créer des espaces pour aligner la pyramide
    let etoiles = "*".repeat(2 * nombreEtages - 1); // Créer la chaîne d'étoiles de la base

    // Boucle pour construire chaque niveau de la pyramide
    for (let i = 1; i <= nombreEtages; i++) {
        // Ajouter les espaces nécessaires avant les étoiles pour centrer l'étage
        pyramide += espaces.slice(0, nombreEtages - i);

        // Ajouter les étoiles de l'étage actuel
        pyramide += etoiles.slice(0, 2 * i - 1);

        // Sauter une ligne après chaque étage
        pyramide += "\n";
    }

    // Afficher la pyramide dans la zone préformatée
    document.getElementById("pyramide").textContent = pyramide;
}
