document.addEventListener('DOMContentLoaded', () => {
  const joinButton = document.getElementById('joinButton');

  
  if(joinButton){
  joinButton.addEventListener('click', () => {
    var nameinput= document.getElementById('nameInput').value;
    window.location.href = 'lobby.html?name=' + encodeURIComponent(nameinput);
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
