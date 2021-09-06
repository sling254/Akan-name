/* Get the Current Year */
function getcurrentyear() {
    var d = new Date();
    var n = d.getFullYear();
    return n;
  }

function getname(){
    var maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleName = ["Akosu", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Amna"];
    var dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    /* Get user Input */
    var Fname = document.getElementById("name").value;
    var dob = parseInt(document.getElementById('dob').value);
    var mob = parseInt(document.getElementById('mob').value);
    var yob = parseInt(document.getElementById('yob').value);
    var gender = document.querySelector('select').value;
    /* form validation */
    if(!dob){
        alert("!! Date Can not be null")
        return false;
    }
    if(!mob){
        alert("!! Month can not be null");
    }
    if(!yob){
        alert("!! Year can not be null");
    }
    if (dob <= 0 || dob>31){
        alert("Date can not be zero or greater than 31")
        return false;
    }else if(mob <= 0 || mob>12){
        alert("Month can not be zero or greater than 12")
        return false;
    }else if(yob <= 0 || yob>getcurrentyear()){
        alert("Year can not be zero or greater than current year")
        return false;
    }
    
    /* Get  day of the week one was born*/
    var  y = yob.toString();
    var century = y.slice(0,2);
    var year = y.slice(2,4);
    var dayOfBirth = ( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(mob+1)/10)) + dob ) % 7;
    var dayOfBirth = Math.floor(dayOfBirth);
    

    if(gender === "Male"){
        document.getElementById("results").innerHTML = "You were born on " + dayOfWeek[dayOfBirth - 1]+" and your name is " +  maleName[dayOfBirth -1];
        
    }else if(gender === "Female")
        document.getElementById("results").innerHTML = "You were born on " + dayOfWeek[dayOfBirth - 1]+" and your name is " +  femaleName[dayOfBirth -1];


    
}

