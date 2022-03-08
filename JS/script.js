// declaration and initialization
var form = document.getElementById("myform");
function handleForm(event) {
  event.preventDefault();
}
form.addEventListener('submit', handleForm);

document.getElementById('btn').addEventListener('click', callDayofWeek);


function callDayofWeek() {

    var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; 

    const maleNames = ['Kwasi', 'Kwadwo' , 'Kwabena', 'Kwaku' , 'Yaw' , 'Kofi', 'Kwame'];
    const femaleNames =['Akosua', 'Adwoa','Abenaa','Akua', 'Yaa', 'Afua', 'Ama'];

    var day = document.getElementById('dd').value;
    day = parseInt(day);
    var month = document.getElementById('mm').value;
    month = parseInt(month);
    var year = document.getElementById('yy').value;
    year = parseInt(year);
    
    
    // the formular //
    var a = Math.floor((14-month)/12);
    var y = year - a;
    var m = month + 12 * a - 2;
    var d = (day + y + Math.floor(y/4) - Math.floor(y/100) + Math.floor(year/400) + Math.floor((31*m)/12))%7;

     
     // writing a variable inside an element//
if (document.getElementById('gender') == 'male') {
   document.getElementById('message').innerHTML = 'Your Akan name  is' + maleNames[d]; 
 } else {
  document.getElementById('message').innerHTML= 'Your Akan name  is' +  femaleNames[d]; 
 }
// writing date on element//
  document.getElementById('date-message').innerHTML = 'and you were born on' + daysOfWeek[d]; 

}




