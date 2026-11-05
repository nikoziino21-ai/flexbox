//Gestione del Modal contatti: apertura e chiusura

const overlay = document.getElementById("overlay-contatti");
const apri = document.getElementById("apri-contatti");
const chiudi = document.getElementById("chiudi-contatti");

// Apertura del modal al click su "Scrivimi"
apri.addEventListener("click", function () {
  overlay.removeAttribute("hidden");
});

//Chiusura del modal al click sulla X
chiudi.addEventListener("click", function () {
  overlay.setAttribute("hidden", "");
});

//Chiusura del modal cliccando sull'overlay scuro esterno
overlay.addEventListener("click", function (event) {
  if (event.target === overlay) {
    overlay.setAttribute("hidden", "");
  }
});
