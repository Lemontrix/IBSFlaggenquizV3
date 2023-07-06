const express = require('express');
const app = express();
var countryName = '';
var countryNameAlternativ = '';
const mqtt = require('mqtt')
const mqttClient = mqtt.connect('wss://test.mosquitto.org:8081');
const flags = require('./flags.js')
var randomID = null;
var country = null;

const bodyParser = require('body-parser');

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

app.get('/namepublish', (req, res) => {
    res.json({ names: lobby });

});

// serve your css and javascript as static 
app.use(express.static(__dirname + "/"));

app.get('/', (req, res) => res.sendFile(__dirname + '/src/index.html'));

app.get('/join.js', (req, res) => res.sendFile(__dirname + '/src/join.js'));

app.get('/mqtt.js', (req, res) => res.sendFile(__dirname + '/src/mqtt.js'));

app.get('/lobby.html', (req, res) => res.sendFile(__dirname + '/src/lobby.html'));

app.get('/getUserEingabe.js', (req, res) => res.sendFile(__dirname + '/src/getUserEingabe.js'));

app.get('/namepublish.js', (req, res) => res.sendFile(__dirname + '/src/namepublish.js'));

app.get('/flags.js', (req, res) => res.sendFile(__dirname + '/flags.js'));

app.get('/apiImage', (req, res) => {

    randomID = Math.floor(Math.random() * 242);
    country = flags.randomFlag(randomID);
    res.sendFile(country.path);
    console.log(country.path);

});


app.post('/validate', (req, res) => {

    var { userEingabe } = req.body;
    console.log('Die user eingabe war:' + userEingabe);



    if (userEingabe == countryName || userEingabe == countryNameAlternativ) {
        res.send('richtig');
    }
    else {
        res.send('falsch')
    }

});

app.listen(3000, () => {
    console.log('Port 3000!')

})