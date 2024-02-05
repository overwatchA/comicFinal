// Obtener la altura de la imagen principal
window.onload = function() {
    var imagenPrincipal = document.getElementById('carouselExample');
    var alturaImagen = imagenPrincipal.clientHeight;

    // Aplicar la altura al otro elemento
    var otroElemento = document.getElementById('controladores-comic');
    otroElemento.style.height = alturaImagen + 'px';
};





document.addEventListener('DOMContentLoaded', function () {

    //////btn sonido ambiente
    var music = document.getElementById("music");
    var playMusicBtn = document.getElementById("playMusicBtn");
    var musicSlider = document.getElementById("musicSlider");
    
    music.play();  // Reproducir música al cargar la página
    
    playMusicBtn.addEventListener('click', function () {
        if (music.paused) {
            music.play();
        } else {
            music.pause();
        }
    });
    
    music.volume = 0.1;
    
    musicSlider.addEventListener('input', function () {
        music.volume = musicSlider.value;
    });



    /////btn sonido audios /////
    
    // var escena1Narracion = document.getElementById('escena1Narracion');
    var playVoicesBtn = document.getElementById('playVoicesBtn');
    var voicesSlider = document.getElementById('voicesSlider');
    
    playVoicesBtn.addEventListener('click', function () {
        audioEscena5.muted = !audioEscena5.muted;
        audioEscena7.muted = !audioEscena7.muted;
    });
    
    voicesSlider.addEventListener('input', function () {
        audioEscena5.volume = voicesSlider.value;
        audioEscena7.volume = voicesSlider.value;
    });
});


//////escena 5 //////

//hover contorno seleccion//

var divContornoEscena5 = document.getElementById('divContornoEscena5')
var contornoEscena5 = document.getElementById('contornoEscena5')

divContornoEscena5.addEventListener('mouseover', borde_escena5)

function borde_escena5(){
    contornoEscena5.classList.remove('d-none')
    divContornoEscena5.addEventListener('mouseout', borde_escena5_Oculto)
    function borde_escena5_Oculto(){
        contornoEscena5.classList.add('d-none')
    }
}

var divContornoLetrero = document.getElementById('divContornoLetrero')
var contornoLetrero = document.getElementById('contornoLetrero')

divContornoLetrero.addEventListener('mouseover', borde_Letrero)

function borde_Letrero(){
    contornoLetrero.classList.remove('d-none')
    divContornoLetrero.addEventListener('mouseout', borde_Letrero_Oculto)
    function borde_Letrero_Oculto(){
        contornoLetrero.classList.add('d-none')
    }
}

//Esto es para activar el gif, y el audio, esconder el contorno verde y la primera flecha, apenas acaba el video, 
//lo esconde, agrega una imagen, la imagen del ultimo frame del gif y muestra la segunda flecha.

var familiaQuietosEscena5 = document.getElementById('familiaQuietosEscena5')
var narracionEscena5 = document.getElementById('narracionEscena5')
var imgNarracionEscena5 = document.getElementById('imgNarracionEscena5')
var arrow1Escena5 = document.getElementById('arrow1Escena5')
var arrow2Escena5 = document.getElementById('arrow2Escena5')
var audioEscena5 = document.getElementById('audioEscena5')


divContornoEscena5.addEventListener('click', activeEscena5)

function activeEscena5 (){
    narracionEscena5.classList.remove('d-none')
    divContornoEscena5.classList.add('d-none')
    arrow1Escena5.classList.add('d-none')
    audioEscena5.play()

    setTimeout(function() {
        familiaQuietosEscena5.classList.remove('d-none')
    }, 35000);

    setTimeout(function() {
        familiaQuietosEscena5.classList.add('d-none')
    }, 53000);

    setTimeout(function() {
        narracionEscena5.classList.add('d-none')
        imgNarracionEscena5.classList.remove('d-none')
        arrow2Escena5.classList.remove('d-none')
    }, 70000);

}







//escena 6 y 9
function reproducirInfinitamente() {
    var video = document.getElementsByClassName("pasaTiempo");
    video.currentTime = 0; // Reiniciar el video
    video.play(); // Reproducir el video nuevamente{
    }





//////escena 7 //////

//hover contorno seleccion//

var divContornoEscena7 = document.getElementById('divContornoEscena7')
var contornoEscena7 = document.getElementById('contornoEscena7')

divContornoEscena7.addEventListener('mouseover', borde_escena7)

function borde_escena7(){
    contornoEscena7.classList.remove('d-none')
    divContornoEscena7.addEventListener('mouseout', borde_escena7_Oculto)

    function borde_escena7_Oculto(){
        contornoEscena7.classList.add('d-none')
    }
}

//Esto es para activar el gif, y el audio, esconder el contorno verde y la primera flecha, apenas acaba el video, 
//lo esconde, agrega una imagen, la imagen del ultimo frame del gif y muestra la segunda flecha.

var familiacaminan = document.getElementById('familiacaminan')
var familiaHablan = document.getElementById('familiaHablan')
var familiaQuietos = document.getElementById('familiaQuietos')
var ojosEscena7 = document.getElementById('ojosEscena7')
var imgFamiliaEscena7 = document.getElementById('imgFamiliaEscena7')
var narracionEscena7 = document.getElementById('narracionEscena7')
var imgNarracionEscena7 = document.getElementById('imgNarracionEscena7')
var arrow1Escena7 = document.getElementById('arrow1Escena7')
var arrow2Escena7 = document.getElementById('arrow2Escena7')
var audioEscena7 = document.getElementById('audioEscena7')


divContornoEscena7.addEventListener('click', activeEscena7)

function activeEscena7 (){
    narracionEscena7.classList.remove('d-none');
    divContornoEscena7.classList.add('d-none');
    arrow1Escena7.classList.add('d-none');
    audioEscena7.play();

    setTimeout(function() {
        familiacaminan.classList.remove('d-none');
    }, 10000);

    setTimeout(function() {
        familiacaminan.classList.add('d-none');
        familiaQuietos.classList.remove('d-none');
        familiaHablan.classList.remove('d-none');
    }, 17000);

    setTimeout(function() {
        familiaHablan.classList.add('d-none');
        narracionEscena7.classList.add('d-none');
        imgNarracionEscena7.classList.remove('d-none');
        arrow2Escena7.classList.remove('d-none');
        ojosEscena7.remove('d-none');
    }, 34000);

}
