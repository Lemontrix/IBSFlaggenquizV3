document.addEventListener('DOMContentLoaded', () => {
  const joinButton = document.getElementById('joinButton');

  
  if(joinButton){
  joinButton.addEventListener('click', () => {
    localStorage.setItem('xyz', document.getElementById('nameInput'));
    const name = localStorage.getItem('xyz')
    if (name) {
      joinLobby(localStorage.getItem('xyz'));
      window.location.href = "lobby.html";
    } else
      alert("Bitte geben Sie Ihren Namen ein.");
  });
  }



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
        console.log("Deine Mutter")
      });
    });
}
