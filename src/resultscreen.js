const tabelle = document.getElementById("resultTable");
const tbody = tabelle.querySelector("tbody");
var userTipps = null;
const hash = window.location.hash;
const cleanhash = hash.slice(1);
const userName = cleanhash;
var correct = 0;
let correctAnswers = 0;

getResultScreenUserInput();
getResultScreenTime();



// User-Array / Time
const daten = [
  { spieler: "Peter", punkte: 100, zeit: "1:30" },
  { spieler: "Anna", punkte: 50, zeit: "2:00" },
];

const test = [
  { UserInput: "Deutschland", Name: "Evo", Correct: "true" },
  { UserInput: "KA", Name: "Evo", Correct: "false" },
  { UserInput: "KA", Name: "Lemon", Correct: "true" }
]


function getResultScreenUserInput() {
  fetch('/getResultScreenUserInput', {
    method: 'GET'
  })
    .then(response => response.json())
    .then(data => {
      userTipps = data;
      correct = getPoints(userTipps, userName);
      console.log(correct);
      console.log(userTipps);

    });
}


function getResultScreenTime() {
  fetch('/getResultScreenTIme', {
    method: 'GET'
  })
    .then(response => response.json())
    .then(data => {
      endzeit = data;
      var minutes = Math.floor(endzeit / 60);
      var seconds = endzeit % 60;
      var formattedTime = formatTime(minutes) + ":" + formatTime(seconds);
      console.log(formattedTime+ " hat der Kelb gebraucht");

    });
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}

function getPoints(userTipps, userName) {
  for (let i = 0; i < userTipps.length; i++) {
    console.log(userTipps[i].Name == userName)
    console.log(userTipps[i].Correct == true)
    if (userTipps[i].Name == userName && userTipps[i].Correct == true) {
      correctAnswers++;
    }
  }
  console.log(correctAnswers);
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