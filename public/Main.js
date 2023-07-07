document.addEventListener('DOMContentLoaded', () => {
    const addClientButton = document.getElementById('add-client-button');
    const scheduleButton = document.querySelector('.schedule-button');
    const tasksButton = document.querySelector('.tasks-button');
    const logoutButton = document.querySelector('.logout-button');
    const addUserButton = document.getElementById('add-user-button');
  
    addClientButton.addEventListener('click', () => {
        // Redireccionar al archivo agregarcliente.html
        window.location.href = 'agregarcliente.html';
      });
      
  
    scheduleButton.addEventListener('click', () => {
      // Lógica para manejar el evento del botón "Organizador de Horarios"
      window.location.href = 'organizadorHorarios.html';
    });
  
    tasksButton.addEventListener('click', () => {
      // Lógica para manejar el evento del botón "Tareas Pendientes"
      console.log('Tareas Pendientes');
    });
  
    logoutButton.addEventListener('click', () => {
      // Lógica para manejar el evento del botón "Cerrar Sesión"
      
      // Eliminar los datos de sesión del usuario
      // Por ejemplo, puedes utilizar localStorage o sessionStorage para almacenar el estado de la sesión
      // Puedes eliminar los datos de sesión de esta manera:
      localStorage.removeItem('usuario');
      
      // Redireccionar a la página de inicio de sesión
      window.location.href = 'index.html';
    });
    
  
    addUserButton.addEventListener('click', () => {
      // Lógica para manejar el evento del botón "Agregar Usuario"
      window.location.href = 'registrodeusuario.html';
    });
  });
  