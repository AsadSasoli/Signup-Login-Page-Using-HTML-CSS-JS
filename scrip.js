function login(){
    window.location.href="login.html"
}
function signup(){
    window.location.href="signup.html"
}
function usignup(){
    var unam = document.getElementById('unam').value
    var uemail = document.getElementById('uemail').value
    var upass = document.getElementById('upass').value
    localStorage.setItem("username",unam)
    localStorage.setItem("useremail",uemail)
    localStorage.setItem("userpassword",upass)
    window.location.href="login.html"
    var snam = localStorage.getItem("username")
    var semail = localStorage.getItem("useremail")
    var spass = localStorage.getItem("userpassword")
    if(snam=="" || semail=="" || spass==""){
        window.location.href="signup.html"
    }
    var usernametext = /^[a-z A-Z]{3,16}$/
    if (usernametext.test(unam)) {
        alert(" okka")
    }else{
        alert("faild")
    }
    var useremailtext = /^[a-z0-9_.-]+@[a-z]+\.[a-z]{3,10}$/
    if (useremailtext.test(uemail)) {
        alert(" okka")
    }else{
        alert("faild")
    }
    var userpasstext = /^[a-z0-9_.-@!#$%^&*)(+="':;?/><,~`]{4,10}$/
    if (userpasstext.test(upass)) {
        alert(" okka")
    }else{
        alert("faild")
    }
}
function ulogin(){
    var aemail = document.getElementById('aemail').value
    var apass = document.getElementById('apass').value
    var localuseremail = localStorage.getItem("useremail")
    var localuserpassword = localStorage.getItem("userpassword")
    if(localuseremail == aemail && localuserpassword == apass){
        window.location.href="welcom.html"
    }else{
        alert("faild")
    }
    var snam = localStorage.getItem("username")
    var semail = localStorage.getItem("useremail")
    var spass = localStorage.getItem("userpassword")
    if(snam=="" || semail=="" || spass==""){
        window.location.href="login.html"
    }
}
