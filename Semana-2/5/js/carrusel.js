let indice = 0;
const intervalTime = 3000;

document.addEventListener("DOMContentLoaded", function() {
    const imagenes = document.getElementById('imagenes');
    const totalImagenes = imagenes.children.length;

    function siguiente() {
        indice = (indice + 1) % totalImagenes;
        actualizarCarrusel();
    }

    function anterior() {
        indice = (indice - 1 + totalImagenes) % totalImagenes;
        actualizarCarrusel();
    }

    function actualizarCarrusel() {
        const desplazamiento = -indice * 100;
        imagenes.style.transform = `translateX(${desplazamiento}%)`;
    }

    function iniciarCarrusel() {
        setInterval(siguiente, intervalTime);
    }

    iniciarCarrusel();
});
