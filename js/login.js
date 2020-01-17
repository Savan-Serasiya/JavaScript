document.getElementById("btnRegister").addEventListener('click', function () {
    location.href = 'registration.html';
});

if (JSON.parse(localStorage.getItem('adminDetails')) != null) {
    document.forms['loginform']['btnRegister'].style.display = 'none';
}
var loginEmail = document.forms['loginform']['loginEmail'];
var loginPassword = document.forms['loginform']['loginPassword'];
document.forms['loginform']['btnLogin'].addEventListener('click', function () {
    if (loginEmail.value === '') {
        alert("Please Enter Email");
    } else if (loginPassword.value === '') {
        alert("Please Enter Password")
    } else {
        logIn();
    }
});

function logIn() {
    var admin = JSON.parse(localStorage.getItem('adminDetails'));

    if (admin.email === loginEmail.value && admin.password === loginPassword.value && admin.isAdmin) {
        sessionStorage.setItem('isAdmin', true);
        sessionStorage.setItem('isLogin', true);
        location.href = 'dashboard.html';
    } else {
        var user = JSON.parse(localStorage.getItem('UserDetails'));
        if (user != null) {
            for (i = 0; i < user.length; i++) {
                if (loginEmail.value === user[i].email && loginPassword.value === user[i].password && user[i].isUser) {
                    var LoginTime = new Date();
                    sessionStorage.setItem('isAdmin', false);
                    sessionStorage.setItem('isLogin', true);
                    sessionStorage.setItem('user', user[i].name);
                    sessionStorage.setItem('LoginTime',LoginTime.getHours()+' : '+LoginTime.getMinutes());
                    location.href = 'subusers.html';
                    break;
                }
            }
        }
    }
}