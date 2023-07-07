document.getElementById('user-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    // Realizar acciones con los datos del formulario, como enviarlos al servidor
  
    console.log('Nombre:', nombre);
    console.log('Apellido:', apellido);
    console.log('Email:', email);
    console.log('Contraseña:', password);
  
    // Limpiar los campos del formulario
    document.getElementById('user-form').reset();
  });
  