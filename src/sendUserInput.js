document.addEventListener('DOMContentLoaded', () => {
    const okButton = document.getElementById('okButton');


    okButton.addEventListener('click', () => {
        var userInput = document.getElementById("userInput").value;
        sendUserInput(userInput);
    });
});

function sendUserInput(userInput) {
    fetch('/userInput', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userInput })
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        });
}


