const joinButton = document.getElementById('joinButton');
const nameInput = document.getElementById('nameInput');

joinButton.addEventListener('click', () => {
  const name = nameInput.value;
  checkNameAvailability(name);
});

function checkNameAvailability(name) {
  getNameList()
    .then(names => {
      console.log(/\s/.test(name));
      if (names.includes(name) ||name == '' ||Object.keys(names).length==2 || name.trim()!=name || name.includes("?") ||name.includes("#") || /\s/.test(name)) {
        // Name existiert bereits

        if(Object.keys(names).length==2){
          alert('Maximale Spieleranzahl ist erreich!!!');
        }
        else if(names.includes(name)){
          alert('Der eingegebene Name wird bereits verwendet. Bitte wähle einen anderen Namen.');
        }
        else if(/\s/.test(name) || name.trim()!=name){
          alert('Keine Whitespaces gestattet. Bitte schön Herr Bantel wir wissen sie mögen die nicht so.');
        }
        else if(name.includes("?") || name.includes("#")){
          alert('Kein ? oder # gestattet');
        }
        else if(name == ''){
          alert('Ein Leeres Feld wird nicht akzeptiert');
        }
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
