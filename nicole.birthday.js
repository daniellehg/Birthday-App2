
var button = document.getElementById('findAge');


/*function getSign() {
    var birthday = new Date(birthday);
    var month = birthday.getMonth() + 1;
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
*/
//var button2 = document.getElementById('findAge');

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

return zodiac;
   /* document.getElementById('Sign').textContent = "Your zodiac sign is" + zodiac; */
}




/*    if (resutlt == "Capricorn") {

        document.getElementById('sign').textContent = "Your zodiac sign is Capricorn";
    } else if (result == "Aquarius") {
        document.getElementById('sign').textContent = "Your zodic sign is Aquarius";
    } else if (result == "Pisces") {
        document.getElementById('sign').textContent = "Your zodic sign is Pisces";
    } else if (result == "Aries") {
        document.getElementById('sign').textContent = "Your zodic sign is Aries";
    } else if (result == "Taurus") {
        document.getElementById('sign').textContent = "Your zodic sign is Taurus"

    } else if (result == "Gemini") {
        document.getElementById('sign').textContent = "Your zodic sign is Gemini";
    } else if (result == "Cancer") {
        document.getElementById('sign').textContent = "Your zodic sign is Cancer";
    } else if (result == "Leo") {
        document.getElementById('sign').textContent = "Your zodic sign is Leo";
    } else if (result == "Virgo") {
        document.getElementById('sign').textContent = "Your zodic sign is Virgo";
    } else if (result == "Libra") {
        document.getElementById('sign').textContent = "Your zodic sign is Libra";
    } else if (result == "Scorpio") {
        document.getElementById('sign').textContent = "Your zodic sign is Scorpio";
    } else if (result == "Sagittarius") {
        document.getElementById('sign').textContent = "Your zodic sign is Sagittarius";
    } */
button.addEventListener('click', getSign);

