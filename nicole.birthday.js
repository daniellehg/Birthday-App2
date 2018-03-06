
var button2 = document.getElementById('findAge');

function getSign() {
    birthday = document.getElementById('inputDate').value;
    birth = new Date(birthday);
    var month = birth.getMonth();
    var day = birth.getDay();
    var zodiac = "";

    if ((month() === 0 && day() > 19) || (month === 1 && day < 19)) {
        zodiac = "Aquarius";
    } else if ((month() === 1 && day() > 18) || (month() === 2 && day() < 21)) {
        zodiac = "Pisces";
    } else if ((month() === 2 && day() > 20) || (month() === 3 && day() < 20)) {
        zodiac = "Aries";
    } else if ((month() === 3 && day() > 19) || (month() === 4 && day() < 21)) {
        zodiac = "Taurus";
    } else if ((month() === 4 && day() > 20) || (month() === 5 && day() < 21)) {
        zodiac = "Gemini";
    } else if ((month() === 5 && day() > 20) || (month() === 6 && day() < 23)) {
        zodiac = "Cancer";
    } else if ((month() === 6 && day() > 22) || (month() === 7 && day() < 23)) {
        zodiac = "Leo";
    } else if ((month() === 7 && day() > 22) || (month() === 8 && day() < 23)) {
        zodiac = "Virgo";
    } else if ((month() === 8 && day() > 22) || (month() === 9 && day() < 23)) {
        zodiac = "Libra";
    } else if ((month() === 9 && day() > 22) || (month() === 10 && day() < 22)) {
        zodiac = "Scorpio";
    } else if ((month() === 10 && day() > 21) || (month() === 11 && day() < 22)) {
        zodiac = "Sagittarius";
    } else if ((month() === 11 && day() > 21) || (month() === 0 && day() < 20)) {
        zodiac = "Capricorn";
    }

return zodiac ;
}

















