var button2 = document.getElementById('findAge');
button2.addEventListener('click', () => {
    document.getElementById("Sign").textContent = getSign()
});

function getSign() {
    var input = document.getElementById("inputDate").value;
    var birth = new Date(input);
    var month = birth.getMonth() + 1;
    var day = birth.getDay();
    var zodiac = "";


    if ((month == 1 && day >= 19) || (month == 12 && day <= 22)) {
        var zodiac = "Capricorn";
    } else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
        var zodiac = "Aquarius";
    } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
        var zodiac = "Pisces";
    } else if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
        var zodiac = "Aries";
    } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
        var zodiac = "Taurus";
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        var zodiac = "Gemini";
    } else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
        var zodiac = "Cancer";
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
        var zodiac = "Leo";
    } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
        var zodiac = "Virgo";
    } else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
        var zodiac = "Libra";
    } else if ((month == 10 && day >= 23) || (month == 11 && day <= 22)) {
        var zodiac = "Scorpio";
    } else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
        var zodiac = "Sagittarius";
    }

return zodiac;
};
