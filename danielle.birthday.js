
var button3 = document.getElementById('getDays');

function numberOfdaysUnitlBirthday() {
    var input = document.getElementById('birthdate').value

    var birthdate = new Date(input);
    var today = new Date();
    var days = Math.floor((birthdate.getTime() - today.getTime()) / 86400000); //round down to the nearest day

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
    document.getElementById('Days').textContent = "hi";

    document.getElementById('days').textContent = "Number of days until your birthday: " + days;
}



button3.addEventListener('click', numberOfdaysUnitlBirthday);
