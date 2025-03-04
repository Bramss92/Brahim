"use strict";

document.addEventListener('DOMContentLoaded', function () {
    function trouverMotLong() {
        // Accéder à l'élément contenant la citation
        const citation = document.getElementById("citation").textContent.trim();

        // Supprimer les caractères non-alphabétiques et séparer la phrase en mots
        const phraseNettoyee = citation.replace(/[^a-zA-ZÀ-ÿ\s]/g, " ");
        const mots = phraseNettoyee.split(/\s+/);

        // Identifier le mot ayant la longueur maximale
        const motLePlusLong = mots.reduce((longest, current) => (current.length > longest.length ? current : longest), "");

        // Afficher le mot le plus long et sa longueur
        document.getElementById("mot_long").textContent = `Le mot le plus long du texte est "${motLePlusLong}" qui mesure ${motLePlusLong.length} lettres.`;
    }

    // Rendre la fonction disponible globalement pour l'appel via le bouton
    window.trouverMotLong = trouverMotLong;
});
