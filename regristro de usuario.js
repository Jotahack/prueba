// Obtener el botón "Agregar Usuario"
const addUserButton = document.getElementById('add-user-button');

// Obtener la pantalla de agregar usuario
const addUserScreen = document.getElementById('add-user-screen');

// Manejar el clic en el botón "Agregar Usuario"
addUserButton.addEventListener('click', () => {
  // Mostrar la pantalla de agregar usuario
  addUserScreen.style.display = 'block';
});

// Obtener el formulario de agregar usuario
const addUserForm = document.getElementById('add-user-form');

// Manejar el envío del formulario de agregar usuario
addUserForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Obtener los valores del formulario
  const username = document.getElementById('new-username').value;
  const password = document.getElementById('new-password').value;

  // Realizar las operaciones necesarias con los datos del nuevo usuario
  // ...

  // Restablecer los valores del formulario
  addUserForm.reset();

  // Ocultar la pantalla de agregar usuario
  addUserScreen.style.display = 'none';
});
