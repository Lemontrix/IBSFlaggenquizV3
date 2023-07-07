const express = require('express');
const app = express();
const mqtt = require('mqtt')
const mqttClient = mqtt.connect('wss://test.mosquitto.org:8081');
const flags = require('./flags.js')
var randomID = null;
var country = null;
var userInput = {};

const bodyParser = require('body-parser');
const { getValidate } = require('./src/getValidate.js');

app.use(bodyParser.json());

// Array to store the names in the lobby
const lobby = [];

// Endpoint to join the lobby
app.post('/join-lobby', (req, res) => {
    const { name } = req.body;
    lobby.push(name);

    res.json({ names: lobby });
    mqttClient.publish('lobby', JSON.stringify(lobby));
});

app.get('/publishname', (req, res) => {
    res.json({ names: lobby });

});

// serve your css and javascript as static 
app.use(express.static(__dirname + "/"));

app.get('/', (req, res) => res.sendFile(__dirname + '/src/index.html'));

app.get('/join.js', (req, res) => res.sendFile(__dirname + '/src/join.js'));

app.get('/mqtt.js', (req, res) => res.sendFile(__dirname + '/src/mqtt.js'));

app.get('/lobby.html', (req, res) => res.sendFile(__dirname + '/src/lobby.html'));

app.get('/senduserinput.js', (req, res) => res.sendFile(__dirname + '/src/senduserinput.js'));

app.get('/publishname.js', (req, res) => res.sendFile(__dirname + '/src/publishname.js'));

app.get('/flags.js', (req, res) => res.sendFile(__dirname + '/flags.js'));

app.get('/getvalidate.js', (req, res) => res.sendFile(__dirname + '/getvalidate.js'));

app.get('/apiImage', (req, res) => {

    randomID = Math.floor(Math.random() * 242);
    country = flags.randomFlag(randomID);
    res.sendFile(country.path);

});

app.post('/userInput', (req, res) => { 
    Object.assign(userInput, req.body);
    getValidate(userInput.userInput, country.countryName, country.alternativCountryName);

});


app.listen(3000, () => {
    console.log('Port 3000!')

})