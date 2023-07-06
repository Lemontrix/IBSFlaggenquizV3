document.addEventListener('DOMContentLoaded', () => {
    const okButton = document.getElementById('ok');


    okButton.addEventListener('click', () => {
        var eingabe = document.getElementById("userEingabe").value;
        sendFlag(eingabe);
    });
});

function sendFlag(eingabe) {
    fetch('/validate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ eingabe })
    })
        .then(response => response.json())
        .then(data => {
            var punkte = data.value;
            punkte += 1
            console.log(punkte)
            console.log(data + "wurde versendet!")
        });
}


