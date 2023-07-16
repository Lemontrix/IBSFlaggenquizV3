window.addEventListener("DOMContentLoaded", () => {
    // Benutzername aus der URL holen
    const userName = window.location.hash.substring(1);
    var correctResultArray = [];
  
    getResultScreenUserInput();
  
    function getResultScreenUserInput() {
      fetch('/getResultScreenUserInput', {
        method: 'GET'
      })
        .then(response => response.json())
        .then(data => {
          userTipps = data;
          console.log(data);
          var userInputArray = userTipps;
  
          getCorrectAnwser(userTipps);
        });
    }
  
    function getCorrectAnwser(userTipps) {
      fetch('/correctAnwser', {
        method: 'GET'
      })
        .then(response => response.json())
        .then(data => {
          correctResultArray = data;
          console.log(userTipps);
          // Tabelle finden
          const table = document.getElementById("resultReviewTable");
  
          // Arrays durchlaufen und Tabellenzeilen erstellen
          for (let i = 0; i < correctResultArray.length; i++) {
            const newRow = table.insertRow(); // Neue Zeile erstellen
  
                if(userName==userTipps[i].Name){
            // Zellen erstellen und Daten einfügen
            const userInputCell = newRow.insertCell();
            userInputCell.textContent = userTipps[i].UserInput;
            
        
        }
        const correctResultCell = newRow.insertCell();
        correctResultCell.textContent = correctResultArray[i];
          }
        });
    }
  });