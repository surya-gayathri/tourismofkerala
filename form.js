let inputEmail = document.getElementById("inputEmail");
let inputPassword = document.getElementById("inputPassword");
var lowerCaseLetters = /[a-z]/g;
var upperCaseLetters = /[A-Z]/g;
var numbers = /[0-9]/g;



function validate(){

        if(inputEmail.value==""){

            alert("E-mail cannot be empty");
            return false;
    
        }
        else if(inputPassword.value==""){
            
            alert("Password cannot be empty");
            return false;
        }
        else if(inputPassword.value.length < 8){
            
            alert("Password should contain atleast 8 characters");
            return false;
        }
       else if(inputPassword.value.match(lowerCaseLetters)==null) {
        alert("Password should contain atleast 1 lowercase character");
            return false;
        }
        else if(inputPassword.value.match(upperCaseLetters)==null) {
         alert("Password should contain atleast 1 uppercase character");
            return false;
        }
        else if(inputPassword.value.match(numbers)==null) {
            alert("Password should contain atleast 1 number");
                return false;
        }
        

        else
            return true;
    
    }


