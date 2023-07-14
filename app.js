const express = require('express');
const app = express();
const mqtt = require('mqtt')
const mqttClient = mqtt.connect('wss://test.mosquitto.org:8081');
const flags = require('./src/flags.js')
var userTipps = [];
var correctAnswer = [];
let flaglist = [];
var userEingaben = null;
var endzeit = null;

// zufallsvariable zur bestimmung der zufälligen Flagge
var randomID = null;

// json mit name des landes, alternativ name des lades(falls vorhanden) und filepath
var country = null;

// flaggen schätzung des nutzers und name des benutzers
var userInput = null;
var name = null;
var correct = null;

const bodyParser = require('body-parser');

const { getValidate } = require('./src/getValidate.js');

app.use(bodyParser.json());

// Array zum Speichern sämtlicher der Lobby beigetretenen Spieler
const lobby = [];

// Endpunkt zum Übergeben des Spielernamens
app.post('/join-lobby', (req, res) => {
    const { name } = req.body;

    lobby.push(name);

    res.json({ names: lobby });
    mqttClient.publish('lobby', JSON.stringify(lobby));
});

// Endpunkt zum Anzeigen der beigetretenen Spieler
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

app.get('/resultscreen.js', (req, res) => res.sendFile(__dirname + '/src/resultscreen.js'));

app.get('/resultscreen.css', (req, res) => res.sendFile(__dirname + '/src/resultscreen.css'));

app.get('/resultreview.html', (req, res) => res.sendFile(__dirname + '/src/resultreview.html'));

app.get('/gamejoin.js', (req, res) => res.sendFile(__dirname + '/src/gamejoin.js'));

// Endpunkt zum eigentlichen Flaggenquiz
app.post('/apiImage', (req, res) => {
    if (flaglist.length == 0) {
        for (let it = 0; it < 15; it++) {
            randomID = Math.floor(Math.random() * 242);
            flaglist.push(randomID);
            country = (flags.randomFlag(randomID));
            correctAnswer.push(country.countryName);
        }
    }
    let counter = req.query.counter;
    country = flags.randomFlag(flaglist[counter - 1]);
    res.send(country.path);
});

//backend für die Zeit die der user gebruacht hat //TODOOOOOOOO
app.post('/sendendzeit', (req, res) => {
    endzeit = req.body.endzeit;
    var minutes = Math.floor(endzeit / 60);
    var seconds = endzeit % 60;
    var formattedTime = formatTime(minutes) + ":" + formatTime(seconds);
    console.log(formattedTime+ " hat der Kelb gebraucht");
  });
  
  function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

// Endpunkt zum Absenden & Überprüfen der vom Spieler getippten Flagge
app.post('/userInput', (req, res) => {

    userEingaben = req.body;
    userInput = userEingaben.userInput
    name = userEingaben.name
    res.status(200).send()

    if (getValidate(userInput, country.countryName, country.alternativCountryName) == 1) {
        correct = true;
    } else {
        correct = false;
    }
    userTipps.push({ UserInput: userInput, Name: name, Correct: correct });

});
// Endpunkt zum Abrufen der Namen der Spieler in der Lobby
app.get('/get-lobby-names', (req, res) => {
    res.json({ names: lobby });
});

app.get('/getResultScreenUserInput', (req, res) => {
    res.send(userTipps);
});

app.get('/getResultScreenTime', (req, res) => {
    res.send(endzeit.stringify);
});


// Konsolenübergabe des Ports
app.listen(3000, () => {
    console.log('Port 3000!')
});
