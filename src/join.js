const joinButton = document.getElementById('joinButton');
const nameInput = document.getElementById('nameInput');

joinButton.addEventListener('click', () => {
  const name = nameInput.value;
  checkNameAvailability(name);
});

function checkNameAvailability(name) {
  getNameList()
    .then(names => {
      if (names.includes(name)) {
        // Name existiert bereits
        alert('Der Name wird bereits verwendet. Bitte wähle einen anderen Namen.');
      } else {
        // Name ist verfügbar
        joinLobby(name);
      }
    })
    .catch(error => {
      console.error('Fehler beim Abrufen der Namen:', error);
    });
}

function getNameList() {
  return fetch('/get-lobby-names')
    .then(response => response.json())
    .then(data => data.names);
}

function joinLobby(name) {
  fetch('/join-lobby', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name })
  })
    .then(response => response.json())
    .then(data => {
      // Erfolgreich beigetreten, weiter zur Lobby
      window.location.href = "/lobby.html#" + name;
    })
    .catch(error => {
      console.error('Fehler beim Beitritt zur Lobby:', error);
    });
}
