$(document).ready(function() {
    // Manejar el envío del formulario para agregar usuarios
    $('#user-form').submit(function(event) {
      event.preventDefault(); // Evitar el envío del formulario
      
      // Obtener valores de los campos de entrada
      var correo = $('#correo').val();
      var descripcion = $('#descripcion').val();
      
      // Validar que se haya ingresado el correo electrónico
      if (!correo) {
        alert('Por favor ingrese el correo electrónico.');
        return;
      }
      
      // Crear un nuevo elemento de lista para el usuario
      var listItem = $('<li class="list-group-item"></li>');
      listItem.append('<strong>' + correo + '</strong>: ' + descripcion);
      
      // Agregar botón de eliminar
      var deleteButton = $('<button type="button" class="btn btn-danger btn-sm float-right ml-2">Eliminar</button>');
      deleteButton.click(function() {
        listItem.remove(); // Eliminar el elemento de lista cuando se hace clic en el botón
      });
      listItem.append(deleteButton);
      
      // Agregar el nuevo elemento de lista a la lista de usuarios
      $('#user-list').append(listItem);
      
      // Limpiar los campos de entrada
      $('#correo').val('');
      $('#descripcion').val('');
    });
  });
  