$(document).ready(function() {
   
    $('#user-form').submit(function(event) {
      event.preventDefault(); 
      
      
      var correo = $('#correo').val();
      var descripcion = $('#descripcion').val();
      
      
      if (!correo) {
        alert('Por favor ingrese el correo electrónico.');
        return;
      }
      
      
      var listItem = $('<li class="list-group-item"></li>');
      listItem.append('<strong>' + correo + '</strong>: ' + descripcion);
      
      
      var deleteButton = $('<button type="button" class="btn btn-danger btn-sm float-right ml-2">Eliminar</button>');
      deleteButton.click(function() {
        listItem.remove(); 
      });
      listItem.append(deleteButton);
      
      
      $('#user-list').append(listItem);
      
      
      $('#correo').val('');
      $('#descripcion').val('');
    });
  });
  