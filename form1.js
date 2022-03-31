let email = document.getElementById("email");
let pass = document.getElementById("pass");
let phone = document.getElementById("phone");
let re_pass = document.getElementById("re_pass");

var lowerCaseLetters = /[a-z]/g;
var upperCaseLetters = /[A-Z]/g;
var numbers = /[0-9]/g;
var phoneno = /^\d{10}$/;
var phoneno1 = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;




function validate(){

        if(email.value==""){

            alert("E-mail cannot be empty");
            return false;
    
        }
        else if(pass.value==""){
            
            alert("Password cannot be empty");
            return false;
        }
        else if(pass.value.length < 8){
            
            alert("Password should contain atleast 8 characters");
            return false;
        }
       else if(pass.value.match(lowerCaseLetters)==null) {
        alert("Password should contain atleast 1 lowercase character");
            return false;
        }
        else if(pass.value.match(upperCaseLetters)==null) {
         alert("Password should contain atleast 1 uppercase character");
            return false;
        }
        else if(pass.value.match(numbers)==null) {
            alert("Password should contain atleast 1 number");
                return false;
        }
        else if(pass.value.match(re_pass.value)==null) {
            alert("Your password and confirmation password do not match");
            return false;
        }
        else if(phone.value.match(phoneno)==null){
  
            alert("Phone number should contain 10 digits");
            return false;
         }
         else if(phone.value.match(phoneno1)==null){
  
            alert("Invalid Phone Number");
            return false;
         }
        else
            return true;
    
    }


