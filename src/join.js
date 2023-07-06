document.addEventListener('DOMContentLoaded', () => {
  const joinButton = document.getElementById('joinButton');
  const nameInput = document.getElementById('nameInput');


  joinButton.addEventListener('click', () => {
    const name = nameInput.value;
    joinLobby(name);
  });

});

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
      window.location.href = "/lobby.html"
    });

}