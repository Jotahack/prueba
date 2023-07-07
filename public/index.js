document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const messageContainer = document.getElementById('message');

  // Usuarios válidos en el sistema
  const validUsers = [
    { username: 'Agusto', password: 'contraseña1' },
    { username: 'Hector', password: 'contraseña2' }
  ];

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    // Validar el inicio de sesión
    const validUser = validUsers.find(user => user.username === username && user.password === password);

    if (validUser) {
      showMessage('Inicio de sesión exitoso.', 'success');
      setTimeout(() => {
        window.location.href = '/Main.html';
      }, 2000); // Redireccionar después de 2 segundos
    } else {
      showMessage('Credenciales inválidas. Por favor, intenta nuevamente.', 'error');
    }
    

    // Limpiar los campos de entrada
    usernameInput.value = '';
    passwordInput.value = '';
  });

  function showMessage(message, messageType) {
    messageContainer.textContent = message;
    messageContainer.className = `message ${messageType}`;
  }
});
