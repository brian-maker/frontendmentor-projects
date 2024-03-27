//get input fields  by id
const firstName = document.getElementById("First Name");
const lastName = document.getElementById("Last Name");
const email = document.getElementById("Email Address");
const password = document.getElementById("Password");

//get errors by id 
const error1 = document.getElementById("error1");
const error2 = document.getElementById("error2");
const error3 = document.getElementById("error3");
const error4 = document.getElementById("error4");
const iconErrorF = document.getElementById("icon-error1")
const iconErrorL = document.getElementById("icon-error2")
const iconErrorE = document.getElementById("icon-error3")
const iconErrorP = document.getElementById("icon-error4")




//function to show error image Firstname
function errorF(){
    if(firstName.value==""){
        iconErrorF.classList.remove("hidden")
    }else{
        iconErrorF.classList.add("hidden")
    }
}

//function to show error image lastname
function errorL() {
    if(lastName.value==""){
        iconErrorL.classList.remove("hidden")
    }else{
        iconErrorL.classList.add("hidden")
    }
}
//function to show error image email
function errorE() {
    if(email.value==""){
        iconErrorE.classList.remove("hidden")
    }else{
        iconErrorE.classList.add("hidden")
    }
}

//function to show error image Password
function errorP() {
    if(email.value==""){
        iconErrorP.classList.remove("hidden")
    }else{
        iconErrorp.classList.add("hidden")
    }
}
//function to check first name
function checkFirstName(){
    if(!firstName.checkValidity()){
        document.getElementById("error1").innerHTML="First Name cannot be empty";   
    } else{
        document.getElementById("error1").innerHTML=""
    }
}

//function to check last name
function checkLastName(){
    if(!lastName.checkValidity()){
        document.getElementById("error2").innerHTML="Last Name cannot be empty";   
    } else{
        document.getElementById("error2").innerHTML=""
    }
}

//function to check email
function checkEmail(){
    if(!email.checkValidity()){
        document.getElementById("error3").innerHTML="Looks like this is not an email";   
    } else{
        document.getElementById("error3").innerHTML=""
    }
}

//function to password
function checkPassword(){
    if(!password.checkValidity()){
        document.getElementById("error4").innerHTML="Password cannot be empty";   
    } else{
        document.getElementById("error4").innerHTML=""
    }
}

