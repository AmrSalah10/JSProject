

const signUp = document.getElementById('singUpButton')
signUp.addEventListener('click', function () {
    document.getElementById('signInForm').style.display = 'none';
    document.getElementById('signUpForm').style.display = 'block';
})
const signUpForm = document.getElementById('signUpForm'); // FIXME- if this element used ? if not delete it
const signButton = document.getElementById('sign-up'); // FIXME- if this element used ? if not delete it

const names = ['amr', 'hima'];
const passwords = ['12345678', '910111213'];


function Check() {
    const nameField = document.getElementById('name');
    let passwordField = document.getElementById('password');
    let error;
    for (let i = 0; i < names.length; i++) {
        if (nameField.value !== names[i] || passwordField.value !== passwords[i]) {
            error = 'Please Check UserName or Password';
            document.getElementById('error_para').innerHTML = error;
            console.log(nameField.value);
            console.log(names[i]);
            console.log(passwordField.value);
            console.log(passwords[i]);
            return false; // FIXME- try to login with hima and 910111213 and solve it

        }
        else {
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




function finish() {
    // this variables should be inside the function only
    const firstName = document.getElementById('first-Name');
    const lastName = document.getElementById('last-Name');
    const Email = document.getElementById('Email');
    const Password = document.getElementById('Pass');
    const Address = document.getElementById('Address');
    const message = document.getElementById('message');
    const Done = document.getElementById('done')
    if (firstName.value == '' || lastName.value == '') { message.innerHTML = ('Please Enter Your Name'); return false; } // FIXME: why do you always return false?
    else if (Email.value = '' || Email.value.search('@') == -1) { message.innerHTML = ('Please Enter a Valid Mail'); return false; }
    else if (Password.value.length < 8) { message.innerHTML = ('Password Must be at least 8 digits'); return false; }
    else if (Address.value == '') { message.innerHTML = ('Please Enter Your Address'); return false; }
    else {
        Done.addEventListener('click', function () {
            document.getElementById('signInForm').style.display = 'block';
            document.getElementById('signUpForm').style.display = 'none';
        })
    }; return false;
}



