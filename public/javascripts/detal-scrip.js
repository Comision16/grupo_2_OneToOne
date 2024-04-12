document.addEventListener("DOMContentLoaded", function() {
    const imagenesSecundarias = document.querySelectorAll(".imagen-secundaria");
    const imagenPrincipal = document.getElementById("imagen-principal");

    imagenesSecundarias.forEach(function(imgSecundaria) {
        imgSecundaria.addEventListener("click", function() {
            const indice = imgSecundaria.getAttribute("data-index");
            const nuevaImagenSrc = imgSecundaria.getAttribute("src");

            // Guarda la imagen actual principal
            const imagenAnteriorSrc = imagenPrincipal.src;

            // Establece la nueva imagen principal
            imagenPrincipal.src = nuevaImagenSrc;

            // Establece la nueva imagen secundaria como la imagen principal anterior
            imgSecundaria.src = imagenAnteriorSrc;
        });
    });
});