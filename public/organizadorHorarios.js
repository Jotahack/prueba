$(document).ready(function() {
    $('#backButton').click(function() {
        window.location.href = 'Main.html';
      });
      
  // Inicializar el calendario
  $('#calendar').fullCalendar({
    header: {
      left: 'prev,next',
      center: 'title', 
      right: 'agendaDay,agendaWeek,month'
    },
    defaultView: 'agendaDay',
    editable: true,
    selectable: true,
    selectHelper: true,
    slotDuration: '00:15:00',
    minTime: '06:00:00',
    maxTime: '22:00:00',
    select: function(start, end) {
      // Abrir un cuadro de diálogo para crear un nuevo evento
      var title = prompt('Ingrese el título del evento:');
      if (title) {
        var eventData = {
          title: title,
          start: start,
          end: end
        };
        $('#calendar').fullCalendar('renderEvent', eventData, true); // Agregar el evento al calendario
      }
      $('#calendar').fullCalendar('unselect');
    },
    eventDrop: function(event, delta, revertFunc) {
      // Manejar el evento de arrastre de eventos
      var confirmMessage = confirm("¿Está seguro de mover este evento?");
      if (confirmMessage) {
        // Realizar la acción de actualización del evento en la base de datos o servidor
      } else {
        revertFunc(); // Revertir el cambio y devolver el evento a su posición original
      }
    },
    eventResize: function(event, delta, revertFunc) {
      // Manejar el evento de cambio de tamaño de eventos
      var confirmMessage = confirm("¿Está seguro de cambiar el tamaño de este evento?");
      if (confirmMessage) {
        // Realizar la acción de actualización del evento en la base de datos o servidor
      } else {
        revertFunc(); // Revertir el cambio y devolver el evento a su tamaño original
      }
    },
    events: [
      // Aquí puedes cargar los eventos existentes desde tu base de datos o servidor
      {
        title: 'Evento 1',
        start: '2023-07-01T10:00:00',
        end: '2023-07-01T12:00:00'
      },
      {
        title: 'Evento 2',
        start: '2023-07-03T14:00:00',
        end: '2023-07-03T16:00:00'
      },
      // Agrega más eventos según tus necesidades
    ]
  });
});
