const tabelle = document.getElementById("resultTable");
const tbody = tabelle.querySelector("tbody");

// Beispiel-Daten
const daten = [
  { spieler: "Peter", punkte: 100, zeit: "1:30" },
  { spieler: "Anna", punkte: 50, zeit: "2:00" },
  { spieler: "Max", punkte: 75, zeit: "1:45" }
];

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

function ergebniss(){
    window.location.href = "resultreview.html"
}