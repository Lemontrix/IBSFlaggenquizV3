const tabelle = document.getElementById("resultTable");
const tbody = tabelle.querySelector("tbody");
var userTipps = null;
const hash = window.location.hash;
const cleanhash = hash.slice(1);
const userName = cleanhash;
var correct = 0;
let correctAnswers = 0;

getResultScreenUserInput();


const test = [
  { UserInput: "Deutschland", Name: "Evo", Correct: "true" },
  { UserInput: "KA", Name: "Evo", Correct: "false" },
  { UserInput: "KA", Name: "Lemon", Correct: "true" }
]

//endpunkt um das User Eingabe Array zu erhalten
function getResultScreenUserInput() {
  fetch('/getResultScreenUserInput', {
    method: 'GET'
  })
    .then(response => response.json())
    .then(data => {
      userTipps = data;
      var length = userTipps.length;

      if (userTipps[length - 1].Name == userName) {
        const tr = document.createElement("tr");

        // Ergebnis-Button generieren
        const resultCell = document.createElement("td");
        const resultButton = document.createElement("button");
        resultButton.textContent = "Mehr Informationen";
        resultButton.addEventListener("click", () => {
          window.location.href = "resultreview.html#" + userName;
        });
        resultCell.appendChild(resultButton);
        tr.appendChild(resultCell);

        // Spielername hinzufügen
        const spielerCell = document.createElement("td");
        spielerCell.textContent = userName;
        tr.appendChild(spielerCell);

        // Punkte hinzufügen
        const punkteCell = document.createElement("td");
        const punkte = getPoints(userTipps, userName); // Hier deine Funktion getPoints implementieren
        punkteCell.textContent = punkte + "/15";
        tr.appendChild(punkteCell);

        // Zeit hinzufügen
        const zeitCell = document.createElement("td");
        const userTime = "00:30"; // Beispielzeit
        zeitCell.textContent = userTime;
        tr.appendChild(zeitCell);

        tbody.appendChild(tr);
      }

    });
}
//ließt die richtigen Punkte der Spieler aus
function getPoints(userTipps, userName) {
  for (let i = 0; i < userTipps.length; i++) {
    if (userTipps[i].Name == userName && userTipps[i].Correct == true) {
      correctAnswers++;
    }
  }
  return correctAnswers;
}
