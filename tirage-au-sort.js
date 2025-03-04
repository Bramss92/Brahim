function tirage() {
    // Créer un tirage aléatoire entre 1 et 100 (par exemple)
    let tirageAleatoire = Math.floor(Math.random() * 100) + 1;
    
    // Affichage des résultats
    let resultatElement = document.getElementById('resultat');
    let resultatAleatoireElement = document.getElementById('resultatAleatoire');
    
    // Afficher un message générique avant de montrer le tirage
    resultatElement.textContent = "Tirage en cours...";
    resultatAleatoireElement.textContent = "";
    
    // Simuler un petit délai avant d'afficher le résultat
    setTimeout(() => {
        resultatElement.textContent = "Le résultat du tirage est :";
        resultatAleatoireElement.textContent = tirageAleatoire;
    }, 1500); // Attendre 1.5 secondes avant de montrer le résultat
}
