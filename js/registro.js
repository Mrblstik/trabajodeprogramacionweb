function validarRegistro() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var rut = document.getElementById("rut").value;
    var telefono = document.getElementById("telefono").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var passwordRepeat = document.getElementById("passwordRepeat").value;

    if (nombre === "" || apellido === "" || rut === "" || telefono === "" || email === "" || password === "" || passwordRepeat === "") {
        alert("Por favor complete todos los campos.");
        return;
    }

    if (nombre.length < 4 || apellido.length < 4) {
        alert("El nombre y el apellido deben tener al menos 4 caracteres.");
        return;
    }

    if (!/^\d{7,8}-[k|K|\d]{1}$/.test(rut)) {
        alert("El RUT debe tener un formato válido (Ejemplo: 12345678-9).");
        return;
    }

    if (!/^\d{9}$/.test(telefono)) {
        alert("El número de teléfono debe tener exactamente 9 dígitos.");
        return;
    }

    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
        alert("El correo electrónico debe tener un formato válido.");
        return;
    }

    if (password.length < 8 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/\d/.test(password)) {
        alert("La contraseña debe tener al menos 8 caracteres, incluir al menos una letra mayúscula, una letra minúscula y un número.");
        return;
    }

    if (password !== passwordRepeat) {
        alert("Las contraseñas no coinciden.");
        return;
    }

    // Si todas las validaciones son exitosas, redirigir a login.html
    window.location.href = "../html/login.html";
}

