
var button3 = document.getElementById('getDays');

function numberOfdaysUnitlBirthday() {
    var input = document.getElementById('day').value
    var birthdate = new Date(input);
    var today = new Date();
    var days = Math.floor((birthdate.getTime() - today.getTime()) / 86400000); //round down to the nearest day
    document.getElementById('days').textContent = "Number of days until your birthday: " + days;
}


button3.addEventListener('click', numberOfdaysUnitlBirthday);
