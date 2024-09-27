document.addEventListener("DOMContentLoaded", () => {
    const globos = document.querySelectorAll('.globo');

    globos.forEach(globo => {
        globo.addEventListener('click', () => {
            alert('Â¡Has hecho clic en un globo!');
        });
    });

    const modal = document.getElementById("modal");
    const btn = document.querySelector(".confirmar-btn");
    const span = document.getElementById("closeModal");

    // Abrir modal al hacer clic en el botÃ³n
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // Cerrar modal al hacer clic en <span> (x)
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Cerrar modal al hacer clic fuera del modal
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }

    // Manejo del envÃ­o del formulario
    document.getElementById("submit").onclick = function() {
        const nombre = document.getElementById("nombre").value;
        if (nombre) {
            alert("Â¡Gracias por confirmar, " + nombre + "!");
            modal.style.display = "none"; // Cerrar el modal

            // AquÃ­ puedes agregar lÃ³gica para enviar el nombre a la base de datos
            console.log("Nombre enviado a la base de datos:", nombre);
        } else {
            alert("Por favor, ingresa tu nombre.");
        }
    }
});