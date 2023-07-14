document.addEventListener('DOMContentLoaded', () => {
    const okButton = document.getElementById('okButton');
    const userInput = document.getElementById("userInput");





    showFlag();


    userInput.addEventListener('keydown', (event) => {
        if (event.key == 'Enter') {
            event.preventDefault()
        }

    });



    okButton.addEventListener('click', () => {
        const hash = window.location.hash;
        const cleanhash = hash.slice(1);
        const name = cleanhash;
        const eingabeUndName = { userInput: userInput.value, name: name }

        sendUserInput(eingabeUndName);
        counter++;
        document.getElementById('counter').innerText = counter + "/15";

        if (counter > 15) {
            let endzeit=totalTimeInSeconds;
            sendendzeit(endzeit); //senden der ENDZEIT beim Seitenwechsel
            window.location.href = "resultscreen.html#" + name;
        }
    });
});

//um dem BACKEND die ENDZEIT zu senden
function sendendzeit(endzeit) {
    fetch('/sendendzeit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ endzeit: endzeit })
    })
    .then(response => {
        // Verarbeitung der Antwort des Backends
    });
}


//counter ist hier drunter on Button click getriggert.
let counter = 1;

function showFlag() {
    const flag = document.getElementById('flag');
    fetch('/apiImage?counter=' + counter, {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain'
        }
    })
        .then(response => response.text())
        .then(data => {
            flag.src = data;
        });
}
// anpassung des iframes an die Größer der Flagge
function resizeIframe(obj) {
    obj.style.height = 0;
    obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
    obj.style.width = 0;
    obj.style.width = obj.contentWindow.document.body.scrollWidth + 'px';
}

//function zum senden des Spielertipps
function sendUserInput(eingabeUndName) {
    fetch('/userInput', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(eingabeUndName)
    })
        .then(response => {

            showFlag()

            //userInput im Frontend leeren
            document.getElementById('userInput').value = '';
        });

}

var timerElement = document.getElementById("timer");
var totalTimeInSeconds = 0;

function updateTimer() {
    var minutes = Math.floor(totalTimeInSeconds / 60);
    var seconds = totalTimeInSeconds % 60;

    var formattedTime = formatTime(minutes) + ":" + formatTime(seconds);
    timerElement.textContent = formattedTime;

    totalTimeInSeconds++;
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

setInterval(updateTimer, 1000);



