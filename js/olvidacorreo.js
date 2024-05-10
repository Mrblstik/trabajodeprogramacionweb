function validateEmail() {
    var emailInput = document.getElementById("email");
    var email = emailInput.value.trim();

    
    if (email === "") {
        alert("Por favor ingrese su correo electrónico.");
        return false;
    }

    
    if (!email.endsWith("@gmail.com")) {
        alert("Por favor ingrese un correo electrónico de dominio @gmail.com.");
        return false;
    }

    
    return true;
}
