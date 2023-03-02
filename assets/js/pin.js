// Récupération des éléments HTML
const inputs = document.querySelectorAll('input');
const confirmBtn = document.getElementById('confirm');

// Fonction pour passer automatiquement au champ suivant après avoir entré un chiffre
function focusNextInput(e) {
  const input = e.target;
  if (input.value.length === input.maxLength) {
    const nextInput = input.nextElementSibling;
    if (nextInput) {
      nextInput.focus();
    } else {
      confirmBtn.focus(); // Déplacer le focus sur le bouton "CONFIRM" après avoir entré un chiffre dans la dernière case
    }
  }
}

// Ajout d'un écouteur d'événement sur chaque champ d'entrée
inputs.forEach((input) => {
  input.addEventListener('keyup', focusNextInput);
});

// Fonction pour vérifier le code PIN
function checkPin() {
  const pin = inputs[0].value + inputs[1].value + inputs[2].value + inputs[3].value;
  if (pin === "1109") {
    window.location.href = "unobot.html";
  } else {
    alert("Code incorrect");
  }
}

// Ajout d'un écouteur d'événement sur le bouton "CONFIRM"
confirmBtn.addEventListener('click', checkPin);
