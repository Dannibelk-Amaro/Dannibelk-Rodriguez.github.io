/* Dark mode */
document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const btnDark = document.getElementById('link-dark');
    const btnLight = document.getElementById('link-light');

    // Mostrar solo el botón correspondiente
    function updateButtons() {
        if (body.classList.contains('dark-mode')) {
            btnDark.style.display = 'none';
            btnLight.style.display = 'inline-block';
        } else {
            btnDark.style.display = 'inline-block';
            btnLight.style.display = 'none';
        }
    }

    btnDark.addEventListener('click', function(e) {
        e.preventDefault();
        body.classList.add('dark-mode');
        updateButtons();
    });

    btnLight.addEventListener('click', function(e) {
        e.preventDefault();
        body.classList.remove('dark-mode');
        updateButtons();
    });

    // Inicializa los botones al cargar
    updateButtons();
});
