
var button3 = document.getElementById('getDays');

function numberOfdaysUnitlBirthday() {
    var input = document.getElementById('birthdate').value

    var birthdate = new Date(input);
    var today = new Date();
    var days = Math.floor((birthdate.getTime() - today.getTime()) / 86400000); //round down to the nearest day
<<<<<<< HEAD
    <<
    << << < HEAD
=======

>>>>>>> origin/master
    var month = Math.floor((birthdate.getTime() - today.getTime()) / 2.628e+9);
    var hour = Math.floor((birthdate.getTime() - today.getTime()) / 3.6e+6);
    var minute = Math.floor((birthdate.getTime() - today.getTime()) / 60000);
    var result = "There are ",
        month, " Months, ", days, " Days, ", hour, " hours and ", minute, " minutes until summer!";
    return result
}

function displayDays() {
    // var input = document.getElementById('birthdate').value;
    //  var result = daysTillBirthday(input);
<<<<<<< HEAD
    document.getElementById('Days').textContent = "hi"; ===
    === =
    document.getElementById('days').textContent = "Number of days until your birthday: " + days;
}

>>>
>>> > origin / master
=======
    document.getElementById('Days').textContent = "hi";

    document.getElementById('days').textContent = "Number of days until your birthday: " + days;
}


>>>>>>> origin/master

button3.addEventListener('click', numberOfdaysUnitlBirthday);

var button2 = document.getElementById('GetMySign');

function getSign() {
    var birth = new Date(birthday);
    var month = birth.getMonth() + 1;
    var day = birth.getDay();


    this.getSign = function () {
        var sign = new Date(birthDate);
        if ((sign.getMonth() === 0 && sign.getDate() > 19) || (sign.getMonth === 1 && sign.getDate < 19)) {
            return "Aquarius";
        } else if ((sign.getMonth() === 1 && sign.getDate() > 18) || (sign.getMonth() === 2 && sign.getDate() < 21)) {
            return "Pisces";
        } else if ((sign.getMonth() === 2 && sign.getDate() > 20) || (sign.getMonth() === 3 && sign.getDate() < 20)) {
            return "Aries";
        } else if ((sign.getMonth() === 3 && sign.getDate() > 19) || (sign.getMonth() === 4 && sign.getDate() < 21)) {
            return "Taurus";
        } else if ((sign.getMonth() === 4 && sign.getDate() > 20) || (sign.getMonth() === 5 && sign.getDate() < 21)) {
            return "Gemini";
        } else if ((sign.getMonth() === 5 && sign.getDate() > 20) || (sign.getMonth() === 6 && sign.getDate() < 23)) {
            return "Cancer";
        } else if ((sign.getMonth() === 6 && sign.getDate() > 22) || (sign.getMonth() === 7 && sign.getDate() < 23)) {
            return "Leo";
        } else if ((sign.getMonth() === 7 && sign.getDate() > 22) || (sign.getMonth() === 8 && sign.getDate() < 23)) {
            return "Virgo";
        } else if ((sign.getMonth() === 8 && sign.getDate() > 22) || (sign.getMonth() === 9 && sign.getDate() < 23)) {
            return "Libra";
        } else if ((sign.getMonth() === 9 && sign.getDate() > 22) || (sign.getMonth() === 10 && sign.getDate() < 22)) {
            return "Scorpio";
        } else if ((sign.getMonth() === 10 && sign.getDate() > 21) || (sign.getMonth() === 11 && sign.getDate() < 22)) {
            return "Sagittarius";
        } else if ((sign.getMonth() === 11 && sign.getDate() > 21) || (sign.getMonth() === 0 && sign.getDate() < 20)) {
            return "Capricorn";
        }
    }
}


function display getSign() {

    var input = document.getElementById('inputNumber').value;
    var result = getSign(input);
    if (resutlt == "Capricorn") {

        document.getElementById('sign').textContent = "Your zodiac sign is Capricorn";
    } else if (result == "Aquarius") {
        document.getElementById('sign').textContent = "Your zodic sign is Aquarius";
    } else if (result == "Pisces") {
        document.getElementById('sign').textContent = "Your zodic sign is Pisces";
    } else if (result == "Aries") {
        document.getElementById('sign').textContent = "Your zodic sign is Aries";
    } else if (result == "Taurus"){
        document.getElementById('sign').textContent = "Your zodic sign is Taurus"

    } else if (result == "Gemini"){
        document.getElementById('sign').textContent = "Your zodic sign is Gemini";
    } else if (result == "Cancer"){
        document.getElementById('sign').textContent = "Your zodic sign is Cancer";
    } else if (result == "Leo"){
        document.getElementById('sign').textContent = "Your zodic sign is Leo";
    } else if (result == "Virgo"){
        document.getElementById('sign').textContent = "Your zodic sign is Virgo"
    }









}

