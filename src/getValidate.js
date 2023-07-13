module.exports = { getValidate }




//funktion zur überprüfung auf richtiger der Spielereingabe
function getValidate(userInput, countryName, countryNameAlternativ) {
    if (userInput == countryName || userInput == countryNameAlternativ) {
        return 1;

    }
    else {
        return 0;

    }
}