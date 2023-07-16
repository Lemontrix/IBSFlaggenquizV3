const tabelle = document.getElementById("resultTable");
const tbody = tabelle.querySelector("tbody");
var userTipps = null;
const userName = window.location.hash.slice(1);
var correct = 0;
let correctAnswers = 0;
let formattedTime = null;
var buttonIDCounter = 0;
var uN = [];
var dataLengthCheck = [];
var schleifenDurchgang = 0;



getResultScreenTime();
getResultScreenUserInput();


//endpunkt um das User Eingabe Array zu erhalten
function getResultScreenUserInput() {
  fetch('/getResultScreenUserInput', {
    method: 'GET'
  })
    .then(response => response.json())
    .then(data => {

      userTipps = data;
      console.log(data);

      mqttErgebnisPost(userName, getPoints(userTipps, userName), formattedTime);

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
      formattedTime = formatTime(minutes) + ":" + formatTime(seconds);


    });
}
//formatiert userTime
function formatTime(time) {
  return time < 10 ? "0" + time : time;
}

//ließt die richtigen Punkte der Spieler aus
function getPoints(userTipps, userName) {
  CorrectAnswers = 0;
  for (let i = 0; i < userTipps.length; i++) {
    if (userTipps[i].Name == userName && userTipps[i].Correct == true) {
      correctAnswers++;
    }
  }
  return correctAnswers;
}


function mqttErgebnisPost(userName, correctAnswer, formattedTime) {
  var mqttErgebnis = { UserName: userName, CorrectAnswer: correctAnswer, FormattedTime: formattedTime }

  fetch('/mqttErgebnis', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(mqttErgebnis)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
/*      dataLengthCheck.push(data);
      console.log(dataLengthCheck.length);
      if (dataLengthCheck.length == 1) {
        schleifenDurchgang = 1;
      } else {

        schleifenDurchgang = 2;
      } */
     // console.log(schleifenDurchgang);
      for (let i = 0; i < 2; i++) {
        var secoundUserData = data[i];
        var userName2 = secoundUserData.UserName;
        uN.push(userName2);
        var correctAnswer2 = secoundUserData.CorrectAnswer;
        var formattedTime2 = secoundUserData.FormattedTime;

        const tr = document.createElement("tr");

        // Ergebnis-Button generieren
        const resultCell = document.createElement("td");
        const resultButton = document.createElement("button");
        resultButton.textContent = "Mehr Informationen";
        const uniqueId = "button_" + generateUniqueId();
        resultButton.id = uniqueId;
        resultButton.addEventListener("click", () => {
          console.log(resultButton.id);
          if (resultButton.id == 'button_1') {
            const popupWindow = window.open("resultreview.html#" + uN[0], "_blank", "width=500,height=500");
          }
          if (resultButton.id == 'button_2') {
            const popupWindow = window.open("resultreview.html#" + uN[1], "_blank", "width=500,height=500");
          }
        });

        resultCell.appendChild(resultButton);
        tr.appendChild(resultCell);

        // Spielername hinzufügen
        const spielerCell = document.createElement("td");
        spielerCell.textContent = userName2;
        tr.appendChild(spielerCell);

        // Punkte hinzufügen
        const punkteCell = document.createElement("td");
        const punkte = correctAnswer2;
        punkteCell.textContent = punkte + "/15";
        tr.appendChild(punkteCell);

        // Zeit hinzufügen
        const zeitCell = document.createElement("td");
        console.log(formattedTime2);
        zeitCell.textContent = formattedTime2;
        tr.appendChild(zeitCell);

        tbody.appendChild(tr);
      }


      function generateUniqueId() {
        buttonIDCounter++
        return buttonIDCounter;
      }

    })
    .catch(error => {
      console.error('Error:', error);
    });
}

