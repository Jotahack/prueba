// Obtener el botón "Añadir Cliente"
const addClientButton = document.getElementById('.add-client-button');

// Manejar el clic en el botón "Añadir Cliente"
addClientButton.addEventListener('click', () => {
  // Redirigir a la página "agregarcliente.html"
  window.location.href = 'agregarcliente.html';
});

// Obtener el botón "Organizador de Horarios"
const scheduleButton = document.getElementById('schedule-button');

// Manejar el clic en el botón "Organizador de Horarios"
scheduleButton.addEventListener('click', () => {
  // Acciones a realizar cuando se hace clic en el botón "Organizador de Horarios"
});

// Obtener el botón "Tareas Pendientes"
const tasksButton = document.querySelector('.tasks-button');

// Manejar el clic en el botón "Tareas Pendientes"
tasksButton.addEventListener('click', () => {
  // Acciones a realizar cuando se hace clic en el botón "Tareas Pendientes"
});

// Obtener el botón "Cerrar Sesión"
const logoutButton = document.querySelector('.logout-button');

// Manejar el clic en el botón "Cerrar Sesión"
logoutButton.addEventListener('click', () => {
  // Cerrar sesión
  logout();
});

// Función para cerrar sesión
function logout() {
  // Eliminar los datos de inicio de sesión almacenados
  localStorage.removeItem('isLoggedIn');
  
  // Redirigir a la página de inicio de sesión
  window.location.href = 'login.html'; // Reemplaza 'login.html' con la ruta de tu página de inicio de sesión
}

// Verificar el estado de inicio de sesión al cargar la página
window.addEventListener('DOMContentLoaded', () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  // Si no está iniciada la sesión, redirigir a la página de inicio de sesión
  if (!isLoggedIn) {
    window.location.href = 'login.html'; // Reemplaza 'login.html' con la ruta de tu página de inicio de sesión
  }
});


// Obtener el botón "Agregar Usuario"
const addUserButton = document.getElementById('add-user-button');

// Obtener la pantalla de agregar usuario
const addUserScreen = document.getElementById('add-user-screen');

// Manejar el clic en el botón "Agregar Usuario"
addUserButton.addEventListener('click', () => {
  // Mostrar la pantalla de agregar usuario
  addUserScreen.style.display = 'block';
});


