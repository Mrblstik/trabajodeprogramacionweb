// pagos.js

$(document).ready(function() {
    $('#payment-form').submit(function(event) {
      // Validar que ningún campo esté vacío
      var formValid = true;
      $(this).find('input, select').each(function() {
        if (!$(this).val()) {
          formValid = false;
          return false; // Salir del bucle each si se encuentra un campo vacío
        }
      });
      if (!formValid) {
        alert('Por favor complete todos los campos.');
        event.preventDefault(); // Evitar el envío del formulario si hay campos vacíos
      } else {
        // Redirigir a historialdecompras.html si todos los campos están completos
        window.location.href = 'historialdecompras.html';
      }
    });
    
    $('#numero-tarjeta').on('input', function() {
      // Eliminar todos los caracteres que no sean dígitos
      var cardNumber = this.value.replace(/\D/g, '');
      // Insertar un espacio después de cada conjunto de 4 dígitos
      cardNumber = cardNumber.replace(/(.{4})/g, '$1 ').trim();
      // Actualizar el valor del campo
      this.value = cardNumber;
    });
    
    $('#fecha-vencimiento').on('input', function() {
      this.value = this.value.replace(/\D/g, '');
      if (this.value.length > 2) {
        this.value = this.value.substring(0, 2) + '/' + this.value.substring(2);
      }
    });
    
    $('#cvv').on('input', function() {
      // Reemplazar todos los caracteres por puntos
      this.value = this.value.replace(/./g, '•');
    });
    
    $('#codigo-postal').on('input', function() {
      this.value = this.value.replace(/[^0-9]/g, '');
    });
    
    $('#rut').on('input', function() {
      this.value = this.value.replace(/[^\dKk]/g, '');
      var rut = this.value.replace(/[.-]/g, '');
      if (rut.length > 1) {
        var formattedRut = rut.slice(0, -1).replace(/^0+/, '').replace(/(\d)(?=(\d{3})+(\.|$))/g, '$1.') + '-' + rut.slice(-1);
        this.value = formattedRut;
      }
    });
  });
  