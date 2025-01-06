$(function() {
    console.log("Login script loaded");

    $('#btnRegister').click(function() {
        location.href = "register.html";
    });

    $('#formLogin').submit(function(e) {
        e.preventDefault();
        e.stopPropagation();
        alert('submit login form');

        var email =$('#email').val();
        var password =$('#password').val();
        var datalist="email"+email+"$password="+password;

        $.ajax({
            type:'post',
            
        })
    });

});