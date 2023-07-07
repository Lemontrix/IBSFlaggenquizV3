module.exports = {getValidate}

//funktion zur überprüfung auf richtiger der Spielereingabe
function getValidate(userInput, countryName, countryNameAlternativ) {
    if (userInput == countryName || userInput == countryNameAlternativ) {
        return console.log("UserEingabe:" + userInput + " ist das gleiche wie " + countryName)
    }
    else {
        return console.log("UserEingabe:" + userInput + " ist nicht das gleiche wie " + countryName)
    }
}