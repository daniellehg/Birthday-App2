var button1 = document.getElementById('GetMyAge');

function Birthday() {
    this.birthdate = new Date(birthdate);
    var current = new Date()
    age = Math.round((current - this.birthdate) / 31536000000)
    return age
}

function displayAge() {
    var input = document.getElementById()
}

function daysTillBirthday() {
    var today = new Date();
    var days = Math.floor((birthdate.getTime() - today.getTime()) / 86400000); //round down to the nearest day
    var month = Math.floor((birthdate.getTime() - today.getTime()) / 2.628e+9);
    var hour = Math.floor((birthdate.getTime() - today.getTime()) / 3.6e+6);
    var minute = Math.floor((birthdate.getTime() - today.getTime()) / 60000);

}

function displayDays() {
    var input = document.getElementById('input').value;
    var result = Birthday(input);
    document.getElementById('daysTillBirthday').textContent = "There are ", month, " Months, ", days, " Days, ", hour, " hours and ", minute, " minutes until summer!";

}
button1.addEventListener('click',display);
