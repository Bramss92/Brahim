function checkPalindrome() {
    let input = document.getElementById("inputWord").value.trim().toLowerCase();
    let result = document.getElementById("result");

    if (input === "") {
        result.textContent = "Veuillez entrer un mot.";
        result.style.color = "red";
        return;
    }

    let reversed = input.split("").reverse().join("");

    if (input === reversed) {
        result.textContent = `"${input}" est un palindrome ! ✅`;
        result.style.color = "green";
    } else {
        result.textContent = `"${input}" n'est pas un palindrome. ❌`;
        result.style.color = "red";
    }
}
