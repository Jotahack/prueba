// Obtener el formulario de inicio de sesión
const loginForm = document.getElementById('login-form');

// Manejar el envío del formulario de inicio de sesión
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Obtener los valores del formulario
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Verificar las credenciales del usuario (ejemplo: usuario "Hector" y contraseña "1234")
  if (username === 'Hector' && password === '1234') {
    // Inicio de sesión exitoso, redirigir a index.html
    window.location.href = 'index.html';
  } else {
    // Credenciales incorrectas, mostrar mensaje de error
    const errorMessage = document.getElementById('message');
    errorMessage.textContent = 'Usuario o contraseña incorrectos';
  }
});
