const space = document.getElementById('pantalla');

//-- Definir el tamaño del canvas.
space.width = 280;
space.height = 492;

//-- Obtener el contexto del canvas
const contexto = space.getContext("2d");

// Lista de URLs de imágenes
const imagen = new Image();
imagen.src = 'hobbies/no-signal.png';

imagen.onload = function () {

    function update() {

        contexto.clearRect(0, 0, space.width, space.height);
        contexto.drawImage(imagen, 10, 10, 50, 150);
        requestAnimationFrame(update);

    }

    update();
};