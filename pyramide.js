function genererPyramide() {
    let lignes = document.getElementById('nombre-lignes').value;
    let pyramide = document.getElementById('pyramide');

   
    if (isNaN(lignes) || lignes <= 0) {
        pyramide.textContent = 'Veuillez entrer un nombre valide.';
        return;
    }

    // Générer la pyramide
    let resultat = '';
    for (let i = 1; i <= lignes; i++) {
        let espaces = ' '.repeat(lignes - i); 
        let etoiles = '*'.repeat(2 * i - 1); 
        resultat += espaces + etoiles + '\n'; 
    }

    pyramide.textContent = resultat;
}
