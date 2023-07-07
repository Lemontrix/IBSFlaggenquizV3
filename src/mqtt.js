const mqttClient = mqtt.connect('wss://test.mosquitto.org:8081');
//error handling bei fehlschlag mit verbindung zum MQTT Broker
mqttClient.on('connect', () => {
    console.log('Connected to MQTT broker');
});

mqttClient.on('error', (error) => {
    console.error('MQTT error:', error);
});

mqttClient.subscribe('lobby');

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

