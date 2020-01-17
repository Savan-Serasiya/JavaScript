if (sessionStorage.getItem('isLogin') === 'true' && sessionStorage.getItem('isAdmin') === 'true') {
    var adminName = document.getElementById('adminName');
    if (localStorage.getItem('adminDetails') != null) {
        var admin = JSON.parse(localStorage.getItem('adminDetails'));
        adminName.innerHTML += admin.name;
    }
}else{
    location.href = 'login.html';
}   

var less18 = document.getElementById('less18');
var is1850 = document.getElementById('is1850');
var gt50 = document.getElementById('gt50');

function logout(){
    
    sessionStorage.setItem('isLogin',false);
    sessionStorage.setItem('isAdmin',false);
    location.href='login.html';
}
userCount();
function userCount(){
    var users = JSON.parse(localStorage.getItem('UserDetails'));
    var less18 = 0;
    var is1815 = 0;
    var gt50 = 0;
    for(var i=0;i<users.length;i++){
        if(parseInt(users[i].age)<18){
            less18+=1;
        }
        if(parseInt(users[i].age)>=18 && parseInt(users[i].age)<=50){
            is1815+=1;
        }
        if(parseInt(users[i].age)>50){
            gt50+=1;
        }
    }
    less18.innerHTML = less18 + ' Users';
    is1850.innerHTML = is1815 + ' Users';
    gt50.innerHTML = gt50 + ' Users';


}