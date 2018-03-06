<<<<<<< HEAD
var button = document.getElementById('getSign');


function getSign(birthday) {
    var birthday = new Date(birthday);
    var month =birthday.getMonth() + 1;
    var day = birthday.getDay();


         if ((month == 1 && day <= 19) || (month == 12 && day >= 22)) {
           return "capricorn";
        } else if ((month == 1 && day <= 20) || (month == 2 && day >= 18)) {
            return "aquarius";
        } else if ((month == 2 && day <= 19) || (month == 3 && day >= 20)) {
            return "pisces";
        } else if ((month == 3 && day <= 21) || (month == 4 && day >= 19)) {
            return "aries";
        } else if ((month == 4 && day <= 20) || (month == 5 && day >= 20)) {
            return "taurus";
        } else if ((month == 5 && day <= 21) || (month == 6 && day >= 20)) {
            return "gemini";
        } else if ((month == 6 && day <= 21) || (month == 7 && day >= 22)) {
            return "cancer";
        } else if ((month == 7 && day <= 23) || (month == 8 && day >= 22)) {
            return "leo";
        } else if ((month == 8 && day <= 23) || (month == 9 && day >= 22)) {
            return "virgo";
        } else if ((month == 9 && day <= 23) || (month == 10 && day >= 22)) {
            return "libra";
        } else if ((month == 10 && day <= 23) || (month == 11 && day >= 22)) {
            return "scorpio";
        } else if ((month == 11 && day <= 22) || (month == 12 && day >= 21)) {
            return "sagittarius";
        }

    }
document.getElementById('day').textContent = getSign
button2.addEventListener('click', getSign);
=======
var button2 = document.getElementById('findAge');

function getSign() {
    birthday = document.getElementById('inputDate').value;
    birth = new Date(birthday);
    var month = birth.getMonth();
    var day = birth.getDay();
    var zodiac = "";

    if ((month() === 0 && day() > 19) || (month === 1 && day < 19)) {
        return "Aquarius";
    } else if ((month() === 1 && day() > 18) || (month() === 2 && day() < 21)) {
        return "Pisces";
    } else if ((month() === 2 && day() > 20) || (month() === 3 && day() < 20)) {
        return "Aries";
    } else if ((month() === 3 && day() > 19) || (month() === 4 && day() < 21)) {
        return "Taurus";
    } else if ((month() === 4 && day() > 20) || (month() === 5 && day() < 21)) {
        return "Gemini";
    } else if ((month() === 5 && day() > 20) || (month() === 6 && day() < 23)) {
        return "Cancer";
    } else if ((month() === 6 && day() > 22) || (month() === 7 && day() < 23)) {
        return "Leo";
    } else if ((month() === 7 && day() > 22) || (month() === 8 && day() < 23)) {
        return "Virgo";
    } else if ((month() === 8 && day() > 22) || (month() === 9 && day() < 23)) {
        return "Libra";
    } else if ((month() === 9 && day() > 22) || (month() === 10 && day() < 22)) {
        return "Scorpio";
    } else if ((month() === 10 && day() > 21) || (month() === 11 && day() < 22)) {
        return "Sagittarius";
    } else if ((month() === 11 && day() > 21) || (month() === 0 && day() < 20)) {
        return "Capricorn";
    }

    document.getElementById('Sign').textContent = "Your zodiac sign is" + zodiac;
}

function checkFormat() {
    var format = document.getElementById("birthday").value;
    var check1 = format.substring(2,3);
    var check2 = format.substring(5,6);
    if ((check1 == "/") && (check2 == "/") && (format.length == 10)) {
        var birhtday = new Date(format);





    }










}
