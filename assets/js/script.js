// Mensaje de bienvenida
alert("Bienvenido a mi portafolio");

// Cambiar texto al hacer clic
const boton = document.getElementById("btn-cambiar");
const texto = document.getElementById("texto-cambiable");

boton.addEventListener("click", () => {
    texto.textContent = "Gracias por visitar mi portafolio";
});

// Mostrar / ocultar contenido
const btnMostrar = document.getElementById("btn-mostrar");
const contenido = document.getElementById("contenido-extra");

btnMostrar.addEventListener("click", () => {
    if (contenido.style.display === "none") {
        contenido.style.display = "block";
    } else {
        contenido.style.display = "none";
    }
});
