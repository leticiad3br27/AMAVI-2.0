document.addEventListener('DOMContentLoaded', function() {
  // Toggle da barra lateral
  const toggleButton = document.getElementById('toggle-btn');
  const sidebar = document.getElementById('sidebar');

  function toggleSidebar() {
    sidebar.classList.toggle('close');
    toggleButton.classList.toggle('rotate');
    closeAllSubMenus();
  }

  function toggleSubMenu(button) {
    const subMenu = button.nextElementSibling;

    // Fecha todos os submenus, exceto o que está sendo aberto
    if (!subMenu.classList.contains('show')) {
      closeAllSubMenus();
    }

    // Alterna o submenu atual
    subMenu.classList.toggle('show');
    button.classList.toggle('rotate');
  }

  function closeAllSubMenus() {
    Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
      ul.classList.remove('show');
      ul.previousElementSibling.classList.remove('rotate');
    });
  }

  // Configuração do tema
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('change', function() {
    if (this.checked) {
      document.body.classList.add('light-mode');
      document.querySelector('header').classList.add('light-mode');
      document.querySelectorAll('.sidebar a').forEach(link => link.classList.add('light-mode'));
    } else {
      document.body.classList.remove('light-mode');
      document.querySelector('header').classList.remove('light-mode');
      document.querySelectorAll('.sidebar a').forEach(link => link.classList.remove('light-mode'));
    }
  });

  // Configuração do calendário
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    locale: 'pt-br',
    events: [
      {
        title: 'Reunião',
        start: '2024-10-30', // Data do evento
        description: 'Reunião com a equipe para discutir o projeto'
      },
      {
        title: 'Aniversário',
        start: '2024-10-31', // Data do evento
        description: 'Aniversário do João'
      }
    ],
    eventClick: function(info) {
      alert('Título: ' + info.event.title + '\nDescrição: ' + info.event.extendedProps.description);
    }
  });

  calendar.render();

  // Modo ADM
  const adminSwitch = document.getElementById('adminSwitch');
  adminSwitch.addEventListener('change', function() {
    if (this.checked) {
      // Redireciona para a página dashboard se o switch estiver ativado
      window.location.href = 'ADM.html'; // Certifique-se de que o nome do arquivo está correto
    }
  });
});
