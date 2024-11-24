var currentInput = "";
var result = "";
// Fonction pour ajouter une entrée
function input(value) {
    var display = document.getElementById("display");
    if (display) {
        currentInput += value.toString();
        display.innerText = currentInput;
    }
    else {
        console.error("Display element not found in the DOM.");
    }
}
// Fonction pour effectuer le calcul
function calculate() {
    var display = document.getElementById("display");
    if (display) {
        try {
            result = eval(currentInput); // Attention à sécuriser eval dans un contexte réel
            display.innerText = result.toString();
            currentInput = result.toString();
        }
        catch (error) {
            display.innerText = "Erreur";
            currentInput = "";
        }
    }
    else {
        console.error("Display element not found in the DOM.");
    }
}
// Fonction pour réinitialiser l'écran
function clearDisplay() {
    var display = document.getElementById("display");
    if (display) {
        currentInput = "";
        result = "";
        display.innerText = "0";
    }
    else {
        console.error("Display element not found in the DOM.");
    }
}
function playSound() {
    var audio = new Audio('click-sound.mp3');
    audio.play();
}
// Attachez l'effet sonore aux boutons
document.querySelectorAll('.btn').forEach(function (button) {
    button.addEventListener('click', playSound);
});
