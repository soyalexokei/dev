document.addEventListener("DOMContentLoaded", function () {

    const screen = document.getElementById('pantalla');
    const contexto = canvas.getContext("2d");

    //-- Definir el tamaño del canvas.
    screen.width = 256;
    screen.height = 446;

    // Lista de URLs de imágenes
    var imageUrls = [
        "../img/hobbies/no-signal.png",
        "../img/hobbies/nike.png"
    ];

    // Cargar imágenes
    var images = [];
    var cont = 0;

    function loadImages() {
        for (var i = 0; i < imageUrls.length; i++) {
            var img = new Image();
            img.src = imageUrls[i];
            images.push(img);
        }
    }

    // Dibujar la imagen actual en el canvas
    function drawImage() {
        contexto.clearRect(0, 0, screen.width, screen.height);
        contexto.drawImage(images[cont], 0, 0, screen.width, screen.height);
    }

    // Cambiar a la siguiente imagen cada segundo
    function changeImage() {
        cont = (cont + 1) % images.length;
        drawImage();
    }

    // Cargar imágenes y comenzar la animación
    loadImages();
    drawImage();
    setInterval(changeImage, 1000);
});