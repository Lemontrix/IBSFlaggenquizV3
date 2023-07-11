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
        sendUserInput(userInput.value);
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
    
    obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
    
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




