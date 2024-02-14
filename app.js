
// , array k begait object k ander ,
//object k ander object lagana hai
// acha sa login or signup page baana hai welcome wali  jagah par todo application arrahi hogi or niche logout btn araha hoga

// var arr = {
//     key : "value",
//     abcd: '1234',
// }
// document.write(arr.)


// localStorage.setItem("id" , "01");
// localStorage.clear()

// sessionStorage.setItem("name" , "ali");
// localStorage.clear()


//website ka js

function signup(){
    var getemail = document.querySelector("#ema");
    var getpass = document.querySelector("#pass");
    localStorage.setItem('email', getemail.value);
    localStorage.setItem('pass', getpass.value);
    alert("Data saved successfully");
}


function signin(){
    var getemail = document.querySelector("#ema");
    var getpass = document.querySelector("#pass");

    var storedEmail = localStorage.getItem('email');
    var storedPass = localStorage.getItem('pass');

    if (storedEmail === getemail.value && storedPass === getpass.value) {
        alert("Login successful!");
        location.href = './welcome.html';
    } 

    else  {
        alert("Incorrect email or password");
    }
}

























// function signup(){
//     var getemail = document.querySelector(`#ema`);
//     var getpassword = document.querySelector(`#pass`);
// localStorage.setItem("email" , getemail.value);
// localStorage.setItem("password" , getpassword.value);
// alert('tmhara data saved hogaya hai');
// }

// function signin() {
//     var getemail = document.querySelector(`#ema`);
//     var getpass = document.querySelector(`#pass`);
//     var storedEmail = localStorage.getItem('email');
//     var storedPass = localStorage.getItem('password'); 

//     if (storedEmail === getemail.value && storedPass === getpass.value)  {
//         alert("Ustaad, tumhara data same hai, yani OK hai");

//     } else {
//         alert("Jao, sahi info dalo, shabash!");
//     }
// }

