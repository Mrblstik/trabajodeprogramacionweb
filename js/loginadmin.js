document.getElementById('loginForm').addEventListener('submit', function(event) {
    var username = document.getElementById('username').value.trim();
    var password = document.getElementById('password').value.trim();
    var usernameError = document.getElementById('usernameError');
    var passwordError = document.getElementById('passwordError');

    
    var emailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    var uppercaseRegex = /[A-Z]/;

    var isValid = true;

   
    if (username === '') {
        usernameError.textContent = 'Por favor, ingresa tu correo electronico';
        usernameError.style.display = 'block';
        isValid = false;
    } else if (!emailFormat.test(username)) {
        usernameError.textContent = 'Por favor, ingresa un correo electrónico válido';
        usernameError.style.display = 'block';
        isValid = false;
    } else {
        usernameError.style.display = 'none';
    }

    if (password === '') {
        passwordError.textContent = 'Por favor, ingresa tu contraseña';
        passwordError.style.display = 'block';
        isValid = false;
    } else if (password.length < 8) {
        passwordError.textContent = 'La contraseña debe tener al menos 8 caracteres';
        passwordError.style.display = 'block';
        isValid = false;
    } else if (!uppercaseRegex.test(password)) {
        passwordError.textContent = 'La contraseña debe contener al menos una letra mayúscula';
        passwordError.style.display = 'block';
        isValid = false;
    } else {
        passwordError.style.display = 'none';
    }

    
    if (isValid) {
        window.location.href = 'vistaadmin.html';
    }

  
    event.preventDefault();
});