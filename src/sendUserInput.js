document.addEventListener('DOMContentLoaded', () => {
    const okButton = document.getElementById('okButton');
    const userInput = document.getElementById("userInput");
    

    showFlag();
    

    userInput.addEventListener('keydown', (event) => {
        if (event.key == 'Enter') {
            event.preventDefault()
        }

    });
 //counter ist hier drunter on Button click getriggert.
    let counter=1;

    okButton.addEventListener('click', () => {
        sendUserInput(userInput.value);
        counter++;
        document.getElementById('counter').innerText=counter+"/15";

        if(counter > 15){
            window.location.href = "resultscreen.html"
        }
    });
});


function showFlag() {
    const flag = document.getElementById('flag');
    fetch('/apiImage', {
        method: 'GET'
    })
        .then(response => response.text())
        .then(data => {
            flag.src = data;
        });

}

function resizeIframe(obj) {
    obj.style.height =0;
    obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
    obj.style.width =0;
    obj.style.width = obj.contentWindow.document.body.scrollWidth + 'px';
}

//function zum senden des Spielertipps
function sendUserInput(userInput) {
    fetch('/userInput', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userInput })
    })
        .then(response => {
            showFlag()
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



