window.addEventListener("DOMContentLoaded", () => {
    // Benutzername aus der URL holen
    const userName = window.location.hash.substring(1);
    var correctResultArray = [];

    getCorrectAnwser();




    // Daten für die Tabelle
    const userInputArray = ["Eingabe 1", "Eingabe 2", "Eingabe 3", "Eingabe 3", "Eingabe 3", "Eingabe 3", "Eingabe 3", "Eingabe 3", "Eingabe 3", "Eingabe 3", "Eingabe 3", "Eingabe 3", "Eingabe 3", "Eingabe 3", "Eingabe 3"]; // Beispielarray für die Benutzereingabe

    // Tabelle finden
    const table = document.getElementById("resultReviewTable");

    // Arrays durchlaufen und Tabellenzeilen erstellen
    for (let i = 0; i < correctResultArray.length; i++) {
        const newRow = table.insertRow(); // Neue Zeile erstellen

        // Zellen erstellen und Daten einfügen
        const userInputCell = newRow.insertCell();
        userInputCell.textContent = userInputArray[i];
    }

    function getCorrectAnwser() {
        fetch('/correctAnwser', {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => {
                correctResultArray = data;
                // Tabelle finden
                const table = document.getElementById("resultReviewTable");

                // Arrays durchlaufen und Tabellenzeilen erstellen
                for (let i = 0; i < correctResultArray.length; i++) {
                    const newRow = table.insertRow(); // Neue Zeile erstellen

                    // Zellen erstellen und Daten einfügen
                    const userInputCell = newRow.insertCell();
                    userInputCell.textContent = userInputArray[i];

                    const correctResultCell = newRow.insertCell();
                    correctResultCell.textContent = correctResultArray[i];
                }
            });
    }


});

