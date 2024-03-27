const email = document.getElementById("email1");
const submitBtn = document.getElementById("submit");
const errorMsg = document.getElementById("error");
const errorImage = document.getElementById("errorimage");

//validate inputs

const validateInputs = () => {
    const email = email.value.trim()

} 

//function to check email

function checkEmail(){
    if(email.value ==""){
        errorMsg.classList.remove("hidden")
    } else{
    errorMsg.style.display="none"
    }
}


//show icon error
function iconError(){
    if(email.value ==""){
        errorImage.classList.remove("hidden")
    } else{
    errorImage.style.display="none"
    }
}