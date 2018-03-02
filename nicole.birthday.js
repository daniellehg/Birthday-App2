var button2 = document.getElementById('findSign');

function getSign() {
    birthday = document.getElementById('inputDate').value,
        birth = new Date(birthday),
        var month = birth.getMonth() + 1;
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
}
}



function display getSign() {
    var result = getSign();
    document.getElementById('findSign').textContent = zodiac;
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
button.addEventListener('click', displayGetSign);
