const mqttClient = mqtt.connect('wss://test.mosquitto.org:8081');
//error handling bei fehlschlag mit verbindung zum MQTT Broker
mqttClient.on('connect', () => {
    console.log('Connected to MQTT broker');
});

mqttClient.on('error', (error) => {
    console.error('MQTT error:', error);
});

mqttClient.subscribe('lobby');
mqttClient.subscribe('ergebnis')

//mqtt übergabe des begetretenen Spielers an alle Clients
mqttClient.on('message', (topic, message) => {
    if (topic === 'lobby') {
        var lobby = [];
        lobby = JSON.parse(message.toString());
        lobbyList.innerHTML = '';
        lobby.forEach(name => {
            const player = document.createElement('p');
            player.textContent = name;
            lobbyList.appendChild(player);
        });
    }
});

mqttClient.on('message', (topic, message) => {
    if (topic === 'ergebnis') {
        var mqttErgebnis = []
        mqttErgebnis = JSON.parse(message);
        var userName = mqttErgebnis.UserName;
        correctAnswer = mqttErgebnis.CorrectAnswer;
        var formattedTime = mqttErgebnis.FormattedTime;
        console.log(mqttErgebnis);
        const tr = document.createElement("tr");

        // Ergebnis-Button generieren
        const resultCell = document.createElement("td");
        const resultButton = document.createElement("button");
        resultButton.textContent = "Mehr Informationen";
        resultButton.addEventListener("click", () => {
          const popupWindow = window.open("resultreview.html#" + userName, "_blank", "width=500,height=500");
        });
        resultCell.appendChild(resultButton);
        tr.appendChild(resultCell);

        // Spielername hinzufügen
        const spielerCell = document.createElement("td");
        spielerCell.textContent = userName;
        tr.appendChild(spielerCell);

        // Punkte hinzufügen
        const punkteCell = document.createElement("td");
        punkteCell.textContent = correctAnswer + "/15";
        tr.appendChild(punkteCell);

        // Zeit hinzufügen
        const zeitCell = document.createElement("td");
        zeitCell.textContent = formattedTime;
        tr.appendChild(zeitCell);

        tbody.appendChild(tr);


    }
});
