const tabelle = document.getElementById("resultTable");
const tbody = tabelle.querySelector("tbody");
var userTipps = [];
const hash = window.location.hash;
const cleanhash = hash.slice(1);
const userName = cleanhash;
var correct = 0;
let correctAnswers = 0;

getResultScreenUserInput();
correct = getPoints(userTipps, userName);
console.log(correct);
console.log(userTipps);



// User-Array / Time
const daten = [
  { spieler: "Peter", punkte: 100, zeit: "1:30" },
  { spieler: "Anna", punkte: 50, zeit: "2:00" },
];

const test = [
  { UserInput: "Deutschland", Name: "Evo", Correct: "correct" },
  { UserInput: "KA", Name: "Evo", Correct: "false" },
  { UserInput: "KA", Name: "Lemon", Correct: "correct" }
]


function getResultScreenUserInput() {
  fetch('/getResultScreenUserInput', {
    method: 'GET'
  })
    .then(response => response.json())
    .then(data => {
      userTipps.push(data);
    });
}

function getPoints(userTipps, userName) {

  for (let i = 0; i < userTipps.length; i++) {
    if (userTipps[i].Name == userName && userTipps[i].Correct == "correct") {
      correctAnswers++;
    }
  }

  return correctAnswers;
}





// Elemente zur Tabelle hinzufügen
daten.forEach((eintrag) => {
  const tr = document.createElement("tr");

  // Ergebnis-Zelle hinzufügen
  const ergebnisCell = document.createElement("td");
  const ergebnisButton = document.createElement("button");
  ergebnisButton.textContent = "Ergebnis";
  ergebnisButton.addEventListener("click", () => {
    // Aktion ausführen, wenn auf den Ergebnis-Button geklickt wird
    console.log("Weitere Informationen zum Ergebnis anzeigen");
  });
  ergebnisCell.appendChild(ergebnisButton);
  tr.appendChild(ergebnisCell);

  // Datenzellen hinzufügen
  Object.values(eintrag).forEach((wert) => {
    const td = document.createElement("td");
    td.textContent = wert;
    tr.appendChild(td);
  });

  tbody.appendChild(tr);
});

function ergebniss() {
  window.location.href = "resultreview.html"
}