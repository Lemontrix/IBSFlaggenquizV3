const mqttClient = mqtt.connect('wss://test.mosquitto.org:8081');

mqttClient.on('connect', () => {
    console.log('Connected to MQTT broker');
});

mqttClient.on('error', (error) => {
    console.error('MQTT error:', error);
});

mqttClient.subscribe('lobby');


mqttClient.on('message', (topic, message) => {
    if (topic === 'lobby') {
        var lobby = [];
        lobby = JSON.parse(message.toString());
        lobbyList.innerHTML = '';
        lobby.forEach(name => {
          const listItem = document.createElement('li');
          listItem.textContent = name;
          lobbyList.appendChild(listItem);
        });
    }
});

