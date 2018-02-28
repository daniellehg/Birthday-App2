var button1 = document.getElementById('findAge');
button1.addEventListener('click', () => {
    document.getElementById('output').textContent = checkFormat()
});

function getAge() {
    var now = new Date(),
        birthday = document.getElementById("inputDate").value,
        birthdate = new Date(birthday),
        age = Math.floor((now - birthdate) / (365 * 24 * 60 * 60 * 1000));
    return "You are " + age + " years old";
}

function checkFormat() {
    var format = document.getElementById("inputDate").value;
    var check1 = format.substring(2, 3);
    var check2 = format.substring(5, 6);
    if ((check1 == "/") && (check2 == "/")) {
        return getAge();

    } else {
        return "You did not write it in the correct format of mm/dd/yyyy";
    }
}
