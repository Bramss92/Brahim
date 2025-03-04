// Liste des éléments à tirer au sort
let mangas = [
    "Naruto",
    "One Piece",
    "DBZ",
    "Bleach",
    "HxH",
    "JJK",
    "Spy x Family",
    "Sakamoto Days",
    "JJBA",
    "HnK",
    "Boruto"
];

// Fonction pour effectuer le tirage au sort
function tirage() {
    // Générer un index aléatoire
    let indexAleatoire = Math.floor(Math.random() * mangas.length);

    // Récupérer l'élément correspondant
    let elementTire = mangas[indexAleatoire];

    // Afficher le résultat
    document.getElementById("affichage").textContent = `Résultat du tirage : ${elementTire}`;
}