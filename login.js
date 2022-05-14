var storedName = localStorage.getItem('username');

function ValiName() {
    var userName = document.getElementById("fname");
   var errorName = document.getElementById('erorName')
    if (!userName.value.match(/^[a-zA-Z]*\s{1}[a-zA-Z]*$/)) {
        errorName.innerText = "please Enter full Name";
        errorName.style.color='red';
                 userName.style.border="Solid  5px red";
                 userName.focus();
             return false;
    }
    else {
        errorName.innerHTML = "valid";
        userName.style.border="Solid  5px green";
        errorName.style.color='green';
        // document.cookie = "username=" + userName.value;
        localStorage.setItem('username',userName.value);
        return true;
    }

}

function valiEmail() {
    var userEmail = document.getElementById("idemail").value;
    var errorEmail = document.getElementById('erorEmail')
    if (!userEmail.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)) {
        errorEmail.innerText = "invalid Email ";
        errorEmail.style.color='red';
        userEmail.style.border="Solid  5px red";
        userEmail.focus();
        return false;
    }

    else {
        errorEmail.innerText = "valid";
        // userEmail.style.border = "Solid 5px green";
        errorEmail.style.color='green';
        // document.cookie = "email=" + userEmail;
        localStorage.setItem('email', userEmail );
        return true;


    }


}

function valiPass(){
    var passUser = document.getElementById("pass");
    var errorPass = document.getElementById("erorPass");
    if(!passUser.value.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/))
    {
        errorPass.innerText = "error";
        errorPass.style.color='red';
        passUser.style.border="Solid  5px red";
        passUser.focus();
        return false;
    }
    
    else
    { 
        errorPass.innerHTML = "valid";
        passUser.style.border = "Solid 5px green";
        errorPass.style.color='green';
        // document.cookie = "password=" + passUser.value;
        localStorage.setItem('password', passUser.value);
        return true;


    }
}


function validatioTotal()
{
    var registerEror = document.getElementById('butt')
    if(!ValiName() || !valiEmail()  ||  !valiPass())
    {
  
        registerEror.innerText = "please fix the errors to submit";
        setTimeout(function(){
            registerEror.style.display = "none";
        },3000)
        return false;
    }
    else
    {
        window.open("login.html");
        return true;
    }

}



var eName = document.getElementById('erorLoginName')
var errorPass = document.getElementById("erorLoginPass");



 function check()
 {
    var fName = document.getElementById("checkuser").value;
    var password = document.getElementById("passaaa").value;
  
    var storedPassword = localStorage.getItem('password');

    if(fName != storedName)
    {
        fName.innerText = "please Enter full Name";
        fName.style.color='red';
                 storedName.style.border="Solid  5px red";
        storedName.focus();
        return false;

    }
    else if(password != storedPassword)
    {
        
        password.innerText = "please Enter full Name";
        // storedPassword.style.color='red';
        storedPassword.style.border="Solid  5px red";
        storedPassword.focus();
        return false;

    }
    else 
    {
        window.open("home.html");
        return true;
    }


    
    

 }


