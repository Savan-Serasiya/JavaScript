if (sessionStorage.getItem('isLogin') === 'false' && sessionStorage.getItem('isAdmin') === 'false') {
    location.href='login.html';
}

var adminName = document.getElementById('adminName');
    if (localStorage.getItem('adminDetails') != null) {
        var admin = JSON.parse(localStorage.getItem('adminDetails'));
        adminName.innerHTML += admin.name;
    }

var uname = document.forms['userForm']['uname'];
var email = document.forms['userForm']['email'];
var password = document.forms['userForm']['password'];
var bithdate = document.forms['userForm']['birthdate'];
var id = 0;
var tbody = document.getElementById('tbody');
if(localStorage.getItem('setId')===null){
    id =1;
    localStorage.setItem('setId',id);
}else{
    id = parseInt(localStorage.getItem('setId'));
}

document.forms['userForm']['btnAdd'].addEventListener('click',function(){

    if(uname.value===''){
        alert('Please Enter name');
        uname.focus();
    }else if(email.value===''){
        alert("Please Enter Email Address");
        email.focus();
    }else if(password.value===''){
        alert("Please Enter Password");
        password.focus();
    }else if(bithdate.value===''){
            alert("Select BirthDte");
            birthdate.focus();
    }else{
        insertData();
    }

});

function User(id,name,email,password,birthdate,age,isUser){
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.birthdate = birthdate;
    this.age = age;
    this.isUser = isUser;
    
}

var users = [];

function insertData(){
    id +=1;
    var date = birthdate.value;
    date = date.substring(0,4);
    var now = new Date().getFullYear();
    
    var age = parseInt(now) - parseInt(date);
    users.push(new User(id,uname.value,email.value,password.value,birthdate.value,age,true));
    localStorage.setItem('UserDetails',JSON.stringify(users));

    display();

    
}
display();

function display(){
    tbody.innerHTML = '';
    if(localStorage.getItem('UserDetails')!=null){
        users = JSON.parse(localStorage.getItem('UserDetails'));
        for(var i=0;i<users.length;i++){
            
            tbody.innerHTML += `<tr><td>${users[i].name}</td>
                                    <td>${users[i].email}</td>
                                    <td>${users[i].password}</td>
                                    <td>${users[i].birthdate}</td>
                                    <td>${users[i].age}</td>
                                    <td><a href =''>Edit</a> | <a href=''>Delete</a></td>
            `;
        }
    }  
}

function logout(){
    
    sessionStorage.setItem('isLogin',false);
    sessionStorage.setItem('isAdmin',false);
    location.href='login.html';
}