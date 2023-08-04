let username = document.getElementById('username')
let password = document.getElementById('password')
let email=document.getElementById('email')
let confirm_password=document.getElementById('confirmPassword')
let flag = 1;

const isValidEmail = email => {
     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

function validateForm() {
    // -----username start
    if (username.value == '') {
        document.getElementById('usererror').innerHTML = "username is empty!"
        flag = 0;
    } else if (username.value.length < 3) {
        document.getElementById('usererror').innerHTML = "username require minimum 3 digits"
        flag = 0;
    } else {
        document.getElementById('usererror').innerHTML = "";
        flag = 1;
    }
//------email start
    if(email.value==''){
        document.getElementById('emailerror').innerHTML="email is required!";
        flag=0;
    }
    else if(!isValidEmail(email.value)){
        document.getElementById('emailerror').innerHTML="vaild email is required!";
        flag=0;
    } else{
        document.getElementById('emailerror').innerHTML=""
        flag=1;
    }
//-----password start
    if (password.value == '') {
        document.getElementById('passerror').innerHTML = "password is required!."
        flag = 0;
    } else if (password.value.length < 8) {
        document.getElementById('passerror').innerHTML = "password must be  8 charactor"
        flag = 0;
    } else {
        document.getElementById('passerror').innerHTML = "";
        flag = 1;
    }
    //----------confirmPasswrod
    if(confirm_password==''){
        document.getElementById('confirmPasswordError').innerHTML="Confirm Password is required!"
        flag = 0;
    }else if(confirm_password.value !== password.value){
        document.getElementById('confirmPasswordError').innerHTML=" Password didn't match!"
        flag = 0;
    }
    else{
        document.getElementById('confirmPasswordError').innerHTML = "";
        flag = 1;
    }

    if (flag) {
        return true;
    } else {
        return false
    }
    
}