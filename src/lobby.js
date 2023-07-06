document.addEventListener('DOMContentLoaded', () => {
  const nameInput = document.getElementById('nameInput');
  const joinButton = document.getElementById('joinButton');
  const lobbyList = document.getElementById('lobbyList');

  joinButton.addEventListener('click', () => {
    const name = nameInput.value;
    joinLobby(name);
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
        lobbyList.innerHTML = '';
        data.names.forEach(name => {
          const listItem = document.createElement('li');
          listItem.textContent = name;
          lobbyList.appendChild(listItem);
        });
      });
  }
});