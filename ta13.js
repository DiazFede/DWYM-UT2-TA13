const texto = document.getElementById("texto");
const btnCambiar = document.getElementById("btnCambiar");

btnCambiar.addEventListener("click", function() {
    texto.textContent = "Texto cambiado";
});
