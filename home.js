
const signUpForm = document.getElementById('signUpForm');
const nameField = document.getElementById('name');
let passwordField = document.getElementById('password');
const signButton = document.getElementById('sign-up');

const names = ['amr','hima'];
const passwords = ['12345678','910111213'];


function Check(){
    let error;
    for (let i = 0; i < names.length; i++){
        if (nameField.value !== names[i]  || passwordField.value !== passwords[i]){
            error = 'Please Check UserName or Password';
            document.getElementById('error_para').innerHTML = error;
            console.log(nameField.value);
            console.log(names[i]);
            console.log(passwordField.value);
            console.log(passwords[i]);
            return false;

        } 
        else{
            error = 'Good JOb';
            document.getElementById('error_para').innerHTML = error;
            console.log(nameField.value);
            console.log(names[i]);
            console.log(passwordField.value);
            console.log(passwords[i]);
            return false;
        }
    
    }   
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



