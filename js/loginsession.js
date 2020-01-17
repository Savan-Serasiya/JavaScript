if (!(sessionStorage.getItem('isLogin') === 'true' && sessionStorage.getItem('isAdmin') === 'true')) {
    location.href = 'login.html';
}   

var sessions = [];
if(localStorage.getItem('sess')!=null){
    sessions = JSON.parse(localStorage.getItem('sess'));
}

var tbody = document.getElementById('tbody');
for(var i=0;i<sessions.length;i++){
    tbody.innerHTML += `<tr>
                            <td>${sessions[i].name}</td>
                            <td>${sessions[i].loginTime}</td>
                            <td>${sessions[i].logoutTime}</td>
                        </tr>`
}

function logout(){
    
    sessionStorage.setItem('isLogin',false);
    sessionStorage.setItem('isAdmin',false);
    location.href='login.html';
}