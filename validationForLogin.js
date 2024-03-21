function printError(element, message) {
    document.getElementById(element).innerHTML = message;
}

function validateForLogin() {
    console.log("sign in")
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    var emailErr = passwordErr =  true;

    if(email == null){
        printError("emailErr","Please enter yor email address") 
    }else{
        var regex =  /^\S+@\S+\.\S+$/;
        if(regex.test(email)===false){
            printError("emailErr","please enter valid email address");
        }else{
            printError("emailErr","");
            emailErr = false;
        }
       }

    if (password == null) {
        printError("passwordErr", "Please enter your password here");
    } else {
        printError("passwordErr", "");
        passwordErr = false;
    } 
    if((emailErr || passwordErr)==true ){
        return false;
    }
    else{
        return true;
    }  
}