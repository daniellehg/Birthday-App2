 var button3 = document.getElementById('findAge');

 function numberOfdaysUnitlBirthday() {
     var input = document.getElementById('inputDate').value
     var birthdate = new Date(input);
     var today = new Date();
     if ((today.getTime() - birthdate.getTime()) > 0) {
         birthdate.setFullYear(today.getFullYear());
     }
         else {
             birthdate.setFullYear(today.getFullYear() + 1);
 }
 var days = Math.floor((birthdate.getTime() / 86400000) - (today.getTime() / 86400000)); //round down to the nearest day
 document.getElementById('days').textContent = "Number of days until your birthday: " + days;
 }

 button3.addEventListener('click', numberOfdaysUnitlBirthday);
