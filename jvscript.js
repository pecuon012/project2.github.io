const wrapper = document.querySelector('.wrapper');
const btnPopup = document.querySelector('.btnlogin');
const iconClose = document.querySelector('.icon-close');

btnPopup.addEventListener('click',()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click',()=> {
    wrapper.classList.remove('active-popup');
});
var correct_email= "tunn200297@gmail.com";
var correct_pass= "123456";

var inputemail = document.getElementById("email");
var inputpassword = document.getElementById("password");

var formlogin = document.getElementById("login");
if(formlogin.attachEvent) {
    formlogin.attachEvent("submit", onformsubmit);
}
else {
    formlogin.addEventListener("submit", onformsubmit);
}
function onformsubmit() {
    var email = inputemail.value;
    var password = inputpassword.value;

    if(email==correct_email && password==correct_pass) {
        alert("Dang nhap thanh cong");
        window.location.href="trangchu.html";
    }
    else{
        alert("Dang nhap that bai");
    }
}