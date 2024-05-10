document.getElementById('registroForm').addEventListener('submit', function(event) {
    var nombre = document.getElementById('nombre').value.trim();
    var apellido = document.getElementById('apellido').value.trim();
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value.trim();
    var confirm_password = document.getElementById('confirm_password').value.trim();
    var nombreError = document.getElementById('nombreError');
    var apellidoError = document.getElementById('apellidoError');
    var emailError = document.getElementById('emailError');
    var passwordError = document.getElementById('passwordError');
    var confirm_passwordError = document.getElementById('confirm_passwordError');

    var emailFormat = /^[a-zA-Z0-9._%+-]+@gmail\.com$/; 
    var passwordFormat = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/; 

    var isValid = true;

    if (nombre === '') {
        nombreError.textContent = 'Por favor, ingresa tu nombre';
        nombreError.style.display = 'block';
        isValid = false;
    } else {
        nombreError.style.display = 'none';
    }

    if (apellido === '') {
        apellidoError.textContent = 'Por favor, ingresa tu apellido';
        apellidoError.style.display = 'block';
        isValid = false;
    } else {
        apellidoError.style.display = 'none';
    }

    if (email === '') {
        emailError.textContent = 'Por favor, ingresa tu correo electrónico';
        emailError.style.display = 'block';
        isValid = false;
    } else if (!emailFormat.test(email)) {
        emailError.textContent = 'Por favor, ingresa un correo electrónico válido de Gmail';
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }

    if (password === '') {
        passwordError.textContent = 'Por favor, ingresa tu contraseña';
        passwordError.style.display = 'block';
        isValid = false;
    } else if (password.length < 8) {
        passwordError.textContent = 'La contraseña debe tener al menos 8 caracteres';
        passwordError.style.display = 'block';
        isValid = false;
    } else if (!passwordFormat.test(password)) {
        passwordError.textContent = 'La contraseña debe contener al menos una letra minúscula, una letra mayúscula y 8 caracteres como mínimo';
        passwordError.style.display = 'block';
        isValid = false;
    } else {
        passwordError.style.display = 'none';
    }

    if (confirm_password === '') {
        confirm_passwordError.textContent = 'Por favor, confirma tu contraseña';
        confirm_passwordError.style.display = 'block';
        isValid = false;
    } else if (confirm_password !== password) {
        confirm_passwordError.textContent = 'Las contraseñas no coinciden';
        confirm_passwordError.style.display = 'block';
        isValid = false;
    } else {
        confirm_passwordError.style.display = 'none';
    }

    if (isValid) {
        
        window.location.href = 'login.html';
    }

    event.preventDefault();
});
