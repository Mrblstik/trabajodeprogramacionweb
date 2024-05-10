function validateEmail() {
    var emailInput = document.getElementById("email");
    var email = emailInput.value.trim();

    // Verificar si el campo está vacío
    if (email === "") {
        alert("Por favor ingrese su correo electrónico.");
        return false;
    }

    // Verificar si el correo es de dominio @gmail.com
    if (!email.endsWith("@gmail.com")) {
        alert("Por favor ingrese un correo electrónico de dominio @gmail.com.");
        return false;
    }

    // Si pasa todas las validaciones, se envía el formulario
    return true;
}
