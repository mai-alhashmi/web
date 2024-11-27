
function validateInput(name , name_error , msg){
    var inputName = document.getElementById(name);
    var nameError = document.getElementById(name_error);
 
    if (inputName.value.trim() == ""){
         nameError.innerHTML =msg;
         inputName.style.setProperty("border-color" ,"red");
    }else{
         nameError.innerHTML ="";
         inputName.style.setProperty("border-color" ,"rgba(128, 128, 128, 0.384)");
    }
 }

function validateEmail(){
    var inputEmail = document.getElementById("email");
    var emailError = document.getElementById("email_error");
    var email =inputEmail.value.trim();

    if (email == ""){
        emailError.innerHTML ="Email is Requried";
        inputEmail.style.setProperty("border-color" ,"red");
    }else if(!email.includes("@") || !email.includes(".")){
        emailError.innerHTML ="Invalid Email Addreess";
        inputEmail.style.setProperty("border-color" ,"red");
    }else{
        emailError.innerHTML ="";
        inputEmail.style.setProperty("border-color" ,"rgba(128, 128, 128, 0.384)");
    }

}

function validate(){
    validateName();
    validateEmail();
    validateMobeil();
    validateDate();
}