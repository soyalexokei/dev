const screen = document.getElementById('tv-container');
const btnPower = document.getElementById('btn_on_off');

screen.width=320;
screen.height=600;

const TEST_IMAGE_URL = "../img/hobbies/no-signal.png";

btnPower.onclick = () => {

    //-- Establecer la fuente de la cámara 1
    video1.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4";

    //-- Reprodeucimos un vídeo, desde el comienzo
    video1.currentTime = 0;
    video1.play();

    //-- Y en silencio...
    video1.muted;
    screen.poster = TEST_IMAGE_URL;
}