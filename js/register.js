var name1 = document.forms['registrationForm']['uName'];
var email = document.forms['registrationForm']['email'];
var password = document.forms['registrationForm']['password'];
var confirmPassword = document.forms['registrationForm']['confirmPassword'];
var selectCity = document.forms['registrationForm']['selectCity'];
var selectState = document.forms['registrationForm']['selectState'];
var check = document.forms['registrationForm']['chTerms'];

function admin(name,email,password,city,state,isAdmin){
    this.name = name;
    this.email = email;
    this.password = password;
    this.city = city;
    this.state = state;
    this.isAdmin = isAdmin;
}

document.forms['registrationForm']['btnRegister'].addEventListener('click',function(){
    if(name1.value===''){
        alert("Please Enter UserName");
        name1.focus();
    }else if(email.value===''){
        alert('Please Enter Email Address');
        email.focus();
    }else if(password.value===''){
        alert("Please Enter Password");
        password.focus();
    }else if(confirmPassword.value===''){
        alert("Please Enter Confirm Password");
        confirmPassword.focus();
    }else if(selectCity.value==='default'){
        alert("Please Select City");
        selectCity.focus();
    }else if(selectState==='default'){
        alert("Please Select State");
        selectState.focus();
    }else if(!check.checked){
        alert("Please Check Terms & Conditions");
        check.focus();
    }else{
        insertData();
    }


    
});
function insertData(){
   var admin1 =  new admin(name1.value,email.value,password.value,selectCity.value,selectState.value,true);
   console.log(admin1);
   localStorage.setItem('adminDetails',JSON.stringify(admin1));
    /* var geting = JSON.parse(localStorage.getItem('adminDetails'));
    console.log(geting.name); */
    location.href = 'login.html';
   
    
   
}

