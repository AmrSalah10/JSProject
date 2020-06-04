let nameField = document.getElementById('name');
let passwordField = document.getElementById('password');

const accounts = [{name:'amr',password:'12345678',Email:'miro@yahoo.com'}, {name:'hima',password:'910111213',Email:'hima@yahoo.com'} ];
//const names = ['amr','hima'];
//const passwords = ['12345678','910111213'];


function Check(){
    let error;
    for (let i = 0; i < accounts.length; i++){
        if (nameField.value !== accounts[i].name  || passwordField.value !== accounts[i].password){
            console.log(nameField.value);
            console.log(accounts[i].name);
            console.log(passwordField.value);
            console.log(accounts[i].password);
        } 

        else{
            error = 'Good JOb';
            document.getElementById('error_para').innerHTML = error;
            console.log(nameField.value);
            console.log(accounts[i].name);
            console.log(passwordField.value);
            console.log(accounts[i].password);
            return false;
        }
    } 
    error = 'Please Check UserName or Password';
    document.getElementById('error_para').innerHTML = error;
    return false;
}

const signUp = document.getElementById('singUpButton')
signUp.addEventListener('click',function(){
    document.getElementById('signInForm').style.display = 'none';
    document.getElementById('signUpForm').style.display = 'block';
})

const firstName = document.getElementById('first-Name');
const lastName = document.getElementById('last-Name');
const Email = document.getElementById('Email');
const Password = document.getElementById('Pass');
const Address = document.getElementById('Address');
const message = document.getElementById('message');
const Done = document.getElementById('done')


function finish () {
    if (firstName.value == '' || lastName.value == '') { message.innerHTML = ('Please Enter Your Name'); return false;}
    else if (Email.value = '' || Email.value.search('@') == -1 ) { message.innerHTML = ('Please Enter a Valid Mail');return false;}
    else if (Password.value.length < 8) {message.innerHTML = ('Password Must be at least 8 digits'); return false;}
    else if (Address.value == '') { message.innerHTML = ('Please Enter Your Address'); return false;}
    else {Done.addEventListener('click',function(){
            document.getElementById('signInForm').style.display = 'block';
            document.getElementById('signUpForm').style.display = 'none';
    })
    } ;return false;
}

let link = document.getElementById('resetLink');
let newPass = document.getElementById('newPass');
let rePass = document.getElementById('rePass');
let reset = document.getElementById('reset');
let reset_message = document.getElementById('reset-message');
let user = document.getElementById('user');

link.addEventListener('click',function(){
    document.getElementById('signInForm').style.display = 'none';
    document.getElementById('resetForm').style.display = 'block';
    })

let names = []
let find = function(){
    for (let i = 0; i < accounts.length; i++){
        names.push(accounts[i].name)
    }
}
function resetFun(){
    find()
    if (names.indexOf(user.value) == -1 ){reset_message.innerHTML = ('Please check your username');
    console.log(user.value);
    console.log(names.indexOf(user.value));}
    else if (newPass.value < 8 || newPass.value !== rePass.value){reset_message.innerHTML = ('Please check your new pass');}
    else {reset_message.innerHTML = ('your password is changed');
        for (let i = 0; i < accounts.length; i++){
            let x = accounts[i];
            if (x.name == user.value) {x.password = newPass.value}
         };
        reset.addEventListener('click',function(){
            document.getElementById('signInForm').style.display = 'block';
            document.getElementById('resetForm').style.display = 'none';
    })}
    return false;
}

