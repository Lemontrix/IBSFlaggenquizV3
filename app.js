const express = require('express');
const app = express();
const mqtt = require('mqtt')
const mqttClient = mqtt.connect('wss://test.mosquitto.org:8081');
const flags = require('./src/flags.js')
var userTipps = [];
var correctAnswer = [];
var pointCounter = 0;
let flaglist = [];

// zufallsvariable zur bestimmung der zufälligen Flagge
var randomID = null;

// json mit name des landes, alternativ name des lades(falls vorhanden) und filepath
var country = null;

// flaggen schätzung des nutzers
var userInput = {};

const bodyParser = require('body-parser');

const { getValidate } = require('./src/getValidate.js');

app.use(bodyParser.json());

// Array zum Speichern sämmtlicher der Lobby begetreten Spieler
const lobby = [];

// endpunkt zum übergeben des Spielernamens
app.post('/join-lobby', (req, res) => {
    const { name } = req.body;
    lobby.push(name);

    res.json({ names: lobby });
    mqttClient.publish('lobby', JSON.stringify(lobby));
});

//endpunkt zum anzeigen der begetretenen Spieler
app.get('/publishname', (req, res) => {
    res.json({ names: lobby });

});

// serve your css and javascript as static 
app.use(express.static(__dirname + "/"));

app.get('/', (req, res) => res.sendFile(__dirname + '/src/index.html'));

app.get('/join.js', (req, res) => res.sendFile(__dirname + '/src/join.js'));

app.get('/mqtt.js', (req, res) => res.sendFile(__dirname + '/src/mqtt.js'));

app.get('/lobby.html', (req, res) => res.sendFile(__dirname + '/src/lobby.html'));

app.get('/apiimagehandling.js', (req, res) => res.sendFile(__dirname + '/src/apiimagehandling.js'));

app.get('/publishname.js', (req, res) => res.sendFile(__dirname + '/src/publishname.js'));

app.get('/flags.js', (req, res) => res.sendFile(__dirname + '/src/flags.js'));

app.get('/getvalidate.js', (req, res) => res.sendFile(__dirname + '/getvalidate.js'));

app.get('/resultscreen.html', (req, res) => res.sendFile(__dirname + '/src/resultscreen.html'));

app.get('/ergebnissausgabe.js', (req, res) => res.sendFile(__dirname + '/src/ergebnissausgabe.js'));

app.get('/resultscreen.css', (req, res) => res.sendFile(__dirname + '/src/resultscreen.css'));

app.get('/resultreview.html', (req, res) => res.sendFile(__dirname + '/src/resultreview.html'));

app.get('/gamejoin.js', (req, res) => res.sendFile(__dirname + '/src/gamejoin.js'));


//Endpunkt zum eigentlichen Flaggenquiz
app.post('/apiImage', (req, res) => {

    if (flaglist.length == 0) {
        for (let it = 0; it < 15; it++) {
            randomID = Math.floor(Math.random() * 242);
            flaglist.push(randomID);

        }
    }
    let counter = req.query.counter;
    country = flags.randomFlag(flaglist[counter - 1]);
    res.send(country.path);

});

//Endpunkt zum absenden & überprüfen der vom Spieler getippten Flagge
app.post('/userInput', (req, res) => {
    Object.assign(userInput, req.body);
    if (getValidate(userInput.userInput, country.countryName, country.alternativCountryName) == 1) {
        pointCounter++
    }
    res.status(200).send()
    userTipps.push(userInput.userInput);
    correctAnswer.push(country.countryName);
    console.log(userTipps, correctAnswer, "Punkte:" + pointCounter);

});

//consolen übergabe des Ports
app.listen(3000, () => {
    console.log('Port 3000!')

})