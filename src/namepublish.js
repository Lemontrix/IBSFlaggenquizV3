const lobbyList = document.getElementById('lobbyList');

getNameList()


function getNameList() {
    fetch('/namepublish', {
        method: 'GET'
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