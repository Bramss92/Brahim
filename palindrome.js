"use strict";

console.log("Konnichiwa, WonderOfU");

function verifierSiPalindrome() {
    let motUtilisateur = document.getElementById('wordInput').value;
    let motEnMinuscule = motUtilisateur.toLowerCase();
    let motInverse = motEnMinuscule.split('').reverse().join('');

    if (motEnMinuscule === motInverse) {
        document.getElementById('output').textContent = `"${motUtilisateur}" est un palindrome !`;
    } else {
        document.getElementById('output').textContent = `"${motUtilisateur}" n'est pas un palindrome.`;
    }
}
