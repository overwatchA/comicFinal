// Obtener la altura de la imagen principal
window.onload = function() {
    var imagenPrincipal = document.getElementById('carouselExample');
    var alturaImagen = imagenPrincipal.clientHeight;
    

    // Aplicar la altura al otro elemento
    var otroElemento = document.getElementById('controladores-comic');
    otroElemento.style.height = alturaImagen + 'px';

    var alturaImgFinCap = document.getElementById('altura-img-cap');
    alturaImgFinCap.style.height = otroElemento + 'px';
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
        audioEscena8.muted = !audioEscena8.muted;
        audioEscena9.muted = !audioEscena9.muted;
        

    });
    
    
    voicesSlider.addEventListener('input', function () {
        audioEscena8.volume = voicesSlider.value;
        audioEscena9.volume = voicesSlider.value;
        
    });
});






//escena 6 y 9
function reproducirInfinitamente() {
    var video = document.getElementsByClassName("pasaTiempo");
    video.currentTime = 0; // Reiniciar el video
    video.play(); // Reproducir el video nuevamente{
    }


//////escena 8 //////

//hover contorno seleccion//

var divContornoEscena8 = document.getElementById('divContornoEscena8')
var contornoEscena8 = document.getElementById('contornoEscena8')

divContornoEscena8.addEventListener('mouseover', borde_escena8)

function borde_escena8(){
    contornoEscena8.classList.remove('d-none')
    divContornoEscena8.addEventListener('mouseout', borde_escena8_Oculto)
    function borde_escena8_Oculto(){
        contornoEscena8.classList.add('d-none')
    }
}

//Esto es para activar el gif, y el audio, esconder el contorno verde y la primera flecha, apenas acaba el video, 
//lo esconde, agrega una imagen, la imagen del ultimo frame del gif y muestra la segunda flecha.

var familiaQuietosEscena8 = document.getElementById('familiaQuietosEscena8')
var narracionEscena8 = document.getElementById('narracionEscena8')
var arrow1Escena8 = document.getElementById('arrow1Escena8')
var arrow2Escena8 = document.getElementById('arrow2Escena8')
var audioEscena8 = document.getElementById('audioEscena8')


divContornoEscena8.addEventListener('click', activeEscena8)

function activeEscena8 (){
    narracionEscena8.classList.remove('d-none')
    divContornoEscena8.classList.add('d-none')
    arrow1Escena8.classList.add('d-none')
    audioEscena8.play()

    setTimeout(function() {
        familiaQuietosEscena8.classList.remove('d-none')
    }, 27010);

    setTimeout(function() {
        familiaQuietosEscena8.classList.add('d-none')
    }, 73000);

    setTimeout(function() {
        narracionEscena8.classList.add('d-none')
        arrow2Escena8.classList.remove('d-none')
    }, 82100);

}




//////escena 9 //////

//hover contorno seleccion//

var divContornoEscena9 = document.getElementById('div-contorno-escena9')
var contornoEscena9 = document.getElementById('contorno-escena9')

divContornoEscena9.addEventListener('mouseover', borde_escena9)

function borde_escena9(){
    contornoEscena9.classList.remove('d-none')
    divContornoEscena9.addEventListener('mouseout', borde_escena9_Oculto)

    function borde_escena9_Oculto(){
        contornoEscena9.classList.add('d-none')
    }
}


//Esto es para activar el gif, y el audio, esconder el contorno verde y la primera flecha, apenas acaba el video, 
//lo esconde, agrega una imagen, la imagen del ultimo frame del gif y muestra la segunda flecha.

var narracionEscena9 = document.getElementById('narracionEscena9')
var imgNarracionEscena9 = document.getElementById('imgNarracionEscena9')
var arrow1Escena9 = document.getElementById('arrow1Escena9')
var arrow2Escena9 = document.getElementById('arrow2Escena9')
var audioEscena9 = document.getElementById('audioEscena9')


divContornoEscena9.addEventListener('click', activeEscena9)

function activeEscena9 (){
    narracionEscena9.classList.remove('d-none')
    divContornoEscena9.classList.add('d-none')
    arrow1Escena9.classList.add('d-none')
    audioEscena9.play()

    setTimeout(function() {
        narracionEscena9.classList.add('d-none');
        imgNarracionEscena9.classList.remove('d-none')
        arrow2Escena9.classList.remove('d-none')
    }, 37000);

}