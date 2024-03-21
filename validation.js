function printError(element, message) {
    document.getElementById(element).innerHTML = message;
}

function validateForLogin() {
    console.log("hehehehehehehe")
    return false;
}
function validationForSignUp() {
    console.log("SignUp Validation");
    const username = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmpassword = document.getElementById("confirm_password").value;

    var nameErr = emailErr = passwordErr = confirmPasswordErr = true;

   if(username == ""){
    printError("nameErr","Please Enter your name")
   }else{
    var regex = /^[A-Za-z ]+$/;
    if(regex.test(username)=== false){
        printError("nameErr","please enter valid name address")
    }else{
        printError("nameErr","");
        nameErr=false;
    }
   }

   if(email == ""){
    printError("emailErr","Please enter yor email address") 
   }else{
    var regex = /^\S+@\S+\.\S+$/;
    if(regex.test(email)===false){
        printError("emailErr","please enter valid email address");
    }else{
        printError("emailErr","");
        emailErr = false;
    }
   }

    if (password == "") {
        printError("passwordErr", "Please enter your password here");
    } else {
        printError("passwordErr", "");
        passwordErr = false;
    }

    if (confirmpassword == "") {
        printError("confirmPasswordErr", "Please enter confirm password here");
    } else {
        if (confirmpassword !== password) {
            printError("confirmPasswordErr", "Passwords do not match");
        } else {
            printError("confirmPasswordErr", "");
            confirmPasswordErr = false;
        }
    }

    if ((nameErr || emailErr || passwordErr || confirmPasswordErr) == true) {
        return false;
    } else {
        return true;
    }
}

// function validationForLogin() {
//     console.log("sign in")
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;

//     var emailErr = passwordErr =  true;

//     if(email == null){
//         printError("emailErr","Please enter yor email address") 
//     }else{
//         var regex =  /^\S+@\S+\.\S+$/;
//         if(regex.test(email)===false){
//             printError("emailErr","please enter valid email address");
//         }else{
//             printError("emailErr","");
//             emailErr = false;
//         }
//        }

//     if (password == null) {
//         printError("passwordErr", "Please enter your password here");
//     } else {
//         printError("passwordErr", "");
//         passwordErr = false;
//     } 
//     if((emailErr || passwordErr)==true ){
//         return false;
//     }
//     else{
//         return true;
//     }  
// }


