const screen = document.getElementById('pantalla');

//-- Definir el tamaño del canvas.
screen.width = 280;
screen.height = 492;

//-- Obtener el contexto del canvas
const contexto = screen.getContext("2d");

// Lista de URLs de imágenes
var imageUrls = [
    "../img/hobbies/no-signal.png",
    "../img/hobbies/nike.png"
];

//-- Posición del elemento a animar
let x = 0;
let y = 0;

//-- Velocidad horizontal del objeto
let velx = 3;
let vely = 1.75;

//-- Cte de las medidas del objeto a mover.
const anchoObj = 20;
const altoObj = 20;

//-- Funcion principal de animacion
function update() 
{
    console.log("test");
    //-- Algoritmo de animacion:
    //-- 1) Actualizar posicion del  elemento
    //-- (física del movimiento rectilineo uniforme)

    //-- Condicion de rebote en extremos del canvas
    if (x < 0 || x >= (screen.width - anchoObj) ) {
        velx = -velx;
    }
    if (y < 0 || y >= (screen.height - altoObj)) {
        vely = -vely;
    }

    //-- Actualizar la posición
    x = x + velx;
    y = y + vely;

    //-- 2) Borrar el canvas
    contexto.clearRect(0, 0, screen.width, screen.height);

    //-- 3) Dibujar los elementos visibles
    contexto.beginPath();
    contexto.rect(x, y, anchoObj, altoObj);

    //-- Dibujar
    contexto.fillStyle = 'red';

    //-- Rellenar
    contexto.fill();

    //-- Dibujar el trazo
    contexto.stroke()
    contexto.closePath();

    //-- 4) Volver a ejecutar update cuando toque
    requestAnimationFrame(update);
}

//-- ¡Que empiece la función!
update();