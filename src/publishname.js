const lobbyList = document.getElementById('lobbyList');

getNameList()


function getNameList() {
    fetch('/publishName', {
        method: 'GET'
    })
        .then(response => response.json())
        .then(data => {
            lobbyList.innerHTML = '';
            data.names.forEach(name => {
                const player = document.createElement('p');
                player.textContent = name;
                lobbyList.appendChild(player);
            });

        });
}