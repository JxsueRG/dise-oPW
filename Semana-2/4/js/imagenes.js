function cambiarImagen() {
    // Menú desplegable
    const select = document.getElementById('imagen');
    // División para mostrar la imagen
    const backGroundBox = document.getElementById('backGroundBox');
    // Obtenemos la imagen seleccionada
    const selectImagen = select.value;
    if (selectImagen) {
        backGroundBox.style.backgroundImage = `url(${selectImagen})`;
    } else {
        backGroundBox.style.backgroundImage = 'none';
    }
}
