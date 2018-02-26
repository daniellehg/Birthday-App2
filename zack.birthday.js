var button1 = document.getElementById('findAge');
button1.addEventListener('click', () => {
    document.getElementById('output').textContent = getAge()
});

function getAge() {
    var now = new Date(),
        birthday = document.getElementById("inputDate").value,
        birthdate = new Date(birthday),
        age = Math.floor((now - birthdate) / (365 * 24 * 60 * 60 * 1000));
    return "You are " + age + " years old";
}
