module.exports = { getValidate }
var userTipps = []
var correctAnswer = []
const pountCounter = 0;


//funktion zur überprüfung auf richtiger der Spielereingabe
function getValidate(userInput, countryName, countryNameAlternativ) {
    userTipps.push(userInput)
    correctAnswer.push(countryName)
    if (userInput == countryName || userInput == countryNameAlternativ) {
        return userTipps, correctAnswer
    }
    else {
        return userTipps, correctAnswer

    }
}