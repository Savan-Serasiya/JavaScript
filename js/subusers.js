function sess(name,loginTime,logoutTime){
 this.name = name;
 this.loginTime = loginTime;
 this.logoutTime = logoutTime;
}
var now = new Date();

function createSession(){
    
    var loginTime = sessionStorage.getItem('LoginTime');
    var logoutTime = now.getHours()+' : '+now.getMinutes();
    var user = sessionStorage.getItem('user');

    var arr = [];
   
    
    if(localStorage.getItem('sess')===null){
        localStorage.setItem('sess',JSON.stringify(arr));
    }
    else{
        arr = JSON.parse(localStorage.getItem('sess'));
    }
    arr.push(new sess(user,loginTime,logoutTime));
    localStorage.setItem('sess',JSON.stringify(arr));
    
    console.log(arr);
    

    

}

function logout(){
    
    createSession();
    location.href='login.html';
    sessionStorage.setItem('isLogin',false);
    sessionStorage.setItem('isAdmin',false);
    
}




document.getElementById('username').innerHTML = 'Welcome, '+sessionStorage.getItem('user');