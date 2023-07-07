document.addEventListener('DOMContentLoaded', () => {
    const clientForm = document.getElementById('client-form');
  
    clientForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      // Obtener los valores ingresados en el formulario
      const nombre = document.getElementById('nombre').value;
      const direccion = document.getElementById('direccion').value;
      const precioHora = document.getElementById('precio-hora').value;
      const horasContratadas = document.getElementById('horas-contratadas').value;
      const entregaLlaves = document.getElementById('entrega-llaves').value;
  
      // Crear un objeto cliente con los datos ingresados
      const cliente = {
        nombre,
        direccion,
        precioHora,
        horasContratadas,
        entregaLlaves
      };
  
      // Aquí puedes realizar la lógica para guardar el cliente en tu sistema o enviarlo al servidor
  
      // Mostrar un mensaje de éxito
      showMessage('Cliente guardado exitosamente.', 'success');
  
      // Limpiar los campos del formulario
      clientForm.reset();
    });
  
    function showMessage(message, messageType) {
      const messageContainer = document.createElement('div');
      messageContainer.textContent = message;
      messageContainer.className = `message ${messageType}`;
  
      document.body.appendChild(messageContainer);
  
      // Eliminar el mensaje después de 3 segundos
      setTimeout(() => {
        document.body.removeChild(messageContainer);
      }, 3000);
    }
  });
  