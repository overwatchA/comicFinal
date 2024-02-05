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
        // escena1Narracion.muted = !escena1Narracion.muted;
        audioEscena1.muted = !audioEscena1.muted;
        audioEscena2.muted = !audioEscena2.muted;
        audioEscena3.muted = !audioEscena3.muted;
        audioEscena4.muted = !audioEscena4.muted;
        audioEscena9.muted = !audioEscena9.muted;

    });
    
    
    voicesSlider.addEventListener('input', function () {
        // escena1Narracion.volume = voicesSlider.value;
        audioEscena1.volume = voicesSlider.value;
        audioEscena2.volume = voicesSlider.value;
        audioEscena3.volume = voicesSlider.value;
        audioEscena4.volume = voicesSlider.value;
        audioEscena9.volume = voicesSlider.value;
        
    });
});





//////escena 1 //////

//hover contorno seleccion//

var divContornoEscena1 = document.getElementById('div-contorno-escena1')
var contornoEscena1 = document.getElementById('contorno-escena1')

divContornoEscena1.addEventListener('mouseover', borde_escena1)

function borde_escena1(){
    contornoEscena1.classList.remove('d-none')
    divContornoEscena1.addEventListener('mouseout', borde_escena1_Oculto)

    function borde_escena1_Oculto(){
        contornoEscena1.classList.add('d-none')
    }
}


//Esto es para activar el gif, y el audio, esconder el contorno verde y la primera flecha, apenas acaba el video, 
//lo esconde, agrega una imagen, la imagen del ultimo frame del gif y muestra la segunda flecha.

var escena1gif = document.getElementById('escena1gif')
var arrow1Escena1 = document.getElementById('arrow1Escena1')
var imgEscena1gif = document.getElementById('imgEscena1gif')
var arrow2Escena1 = document.getElementById('arrow2Escena1')
var audioEscena1 = document.getElementById('audioEscena1')


divContornoEscena1.addEventListener('click', activeEscena1)

function activeEscena1 (){
    escena1gif.classList.remove('d-none')
    divContornoEscena1.classList.add('d-none')
    arrow1Escena1.classList.add('d-none')
    audioEscena1.play()

    setTimeout(function() {
        escena1gif.classList.add('d-none');
        imgEscena1gif.classList.remove('d-none')
        arrow2Escena1.classList.remove('d-none')
    }, 8000);

    //esto de acá que esta comentado abajo es para que al darle click se active de forma correcta la animación
    //por ahora no lo voy a utilizar pero me sirve de plantilla
    // escena1Narracion.classList.remove('d-none');
    // escena1Narracion.play();
}








//////escena 2 //////

//hover contorno seleccion//

var divContornoEscena2 = document.getElementById('divContornoEscena2')
var contornoEscena2 = document.getElementById('contornoEscena2')

divContornoEscena2.addEventListener('mouseover', borde_escena2)

function borde_escena2(){
    contornoEscena2.classList.remove('d-none')
    divContornoEscena2.addEventListener('mouseout', borde_escena2_Oculto)

    function borde_escena2_Oculto(){
        contornoEscena2.classList.add('d-none')
    }
}

//Esto es para activar el gif, y el audio, esconder el contorno verde y la primera flecha, apenas acaba el video, 
//lo esconde, agrega una imagen, la imagen del ultimo frame del gif y muestra la segunda flecha.

var familiaEscena2 = document.getElementById('familiaEscena2')
var familiaEscena2y1 = document.getElementById('familiaEscena2y1')
var imgFamiliaEscena2 = document.getElementById('imgFamiliaEscena2')
var narracionEscena2 = document.getElementById('narracionEscena2')
var imgNarracionEscena2 = document.getElementById('imgNarracionEscena2')
var arrow1Escena2 = document.getElementById('arrow1Escena2')
var arrow2Escena2 = document.getElementById('arrow2Escena2')
var audioEscena2 = document.getElementById('audioEscena2')
var escena2Gomez = document.getElementById('escena2Gomez')
var gaseosasEscena2 = document.getElementById('gaseosasEscena2')


divContornoEscena2.addEventListener('click', activeEscena2)

function activeEscena2 (){
    narracionEscena2.classList.remove('d-none')
    divContornoEscena2.classList.add('d-none')
    arrow1Escena2.classList.add('d-none')
    audioEscena2.play()

    setTimeout(function() {
        
    }, 7000);

    setTimeout(function() {
        familiaEscena2.classList.remove('d-none')
        escena2Gomez.classList.remove('d-none')
    }, 8000);

    setTimeout(function() {
        
    }, 14000);

    setTimeout(function() {
        familiaEscena2.classList.add('d-none')
        familiaEscena2y1.classList.remove('d-none')
        gaseosasEscena2.classList.add('d-none')
    }, 15000);

    setTimeout(function() {
        narracionEscena2.classList.add('d-none');
        imgNarracionEscena2.classList.remove('d-none')
        escena2Gomez.classList.add('d-none')
    }, 22000);

    setTimeout(function() {
        familiaEscena2y1.classList.add('d-none');
        imgFamiliaEscena2.classList.remove('d-none')
        arrow2Escena2.classList.remove('d-none')
    }, 27000);

}


//////escena 3 //////

//hover contorno seleccion//

var divContornoEscena3 = document.getElementById('divContornoEscena3')
var contornoEscena3 = document.getElementById('contornoEscena3')

divContornoEscena3.addEventListener('mouseover', borde_escena3)

function borde_escena3(){
    contornoEscena3.classList.remove('d-none')
    divContornoEscena3.addEventListener('mouseout', borde_escena3_Oculto)

    function borde_escena3_Oculto(){
        contornoEscena3.classList.add('d-none')
    }
}

//Esto es para activar el gif, y el audio, esconder el contorno verde y la primera flecha, apenas acaba el video, 
//lo esconde, agrega una imagen, la imagen del ultimo frame del gif y muestra la segunda flecha.



var padresCaminan = document.getElementById('padresCaminan')
var padresQuietos = document.querySelector('.padresQuietos')
var anaParpadeaEscena3 = document.getElementById('anaParpadeaEscena3')
var luisParpadeaEscena3 = document.getElementById('luisParpadeaEscena3')

var narracionEscena3 = document.getElementById('narracionEscena3')
var imgNarracionEscena3 = document.getElementById('imgNarracionEscena3')
var arrow1Escena3 = document.getElementById('arrow1Escena3')
var arrow2Escena3 = document.getElementById('arrow2Escena3')
var audioEscena3 = document.getElementById('audioEscena3')


divContornoEscena3.addEventListener('click', activeEscena3)

function activeEscena3 (){
    narracionEscena3.classList.remove('d-none')
    divContornoEscena3.classList.add('d-none')
    arrow1Escena3.classList.add('d-none')
    audioEscena3.play()

    setTimeout(function() {
        padresCaminan.classList.remove('d-none')
    }, 2000);

    setTimeout(function() {
        padresCaminan.classList.add('d-none')
        padresQuietos.classList.remove('d-none')
        anaParpadeaEscena3.classList.remove('d-none')
        luisParpadeaEscena3.classList.remove('d-none')
    }, 6000);

    setTimeout(function() {
        narracionEscena3.classList.add('d-none');
        imgNarracionEscena3.classList.remove('d-none');
        arrow2Escena3.classList.remove('d-none')
    }, 14150);

}




//////escena 4 //////

//hover contorno seleccion//

var divContornoEscena4_1 = document.getElementById('divContornoEscena4_1')
var contornoEscena4_1 = document.getElementById('contornoEscena4_1')

divContornoEscena4_1.addEventListener('mouseover', borde_escena4_1)

function borde_escena4_1(){
    contornoEscena4_1.classList.remove('d-none')
    divContornoEscena4_1.addEventListener('mouseout', borde_escena4_1_Oculto)

    function borde_escena4_1_Oculto(){
        contornoEscena4_1.classList.add('d-none')
    }
}

var divContornoEscena4_2 = document.getElementById('divContornoEscena4_2')
var contornoEscena4_2 = document.getElementById('contornoEscena4_2')

divContornoEscena4_2.addEventListener('mouseover', borde_escena4_2)

function borde_escena4_2(){
    contornoEscena4_2.classList.remove('d-none')
    divContornoEscena4_2.addEventListener('mouseout', borde_escena4_2_Oculto)

    function borde_escena4_2_Oculto(){
        contornoEscena4_2.classList.add('d-none')
    }
}


//Esto es para activar el gif, y el audio, esconder el contorno verde y la primera flecha, apenas acaba el video, 
//lo esconde, agrega una imagen, la imagen del ultimo frame del gif y muestra la segunda flecha.



var padresCaminanEscena4 = document.getElementById('padresCaminanEscena4')
var padresQuietosEscena4 = document.getElementById('padresQuietosEscena4')
var anaParpadeaEscena4 = document.getElementById('anaParpadeaEscena4')
var luisParpadeaEscena4 = document.getElementById('luisParpadeaEscena4')
var padresHablanEscena4 = document.getElementById('padresHablanEscena4')
var padresBocasEscena4 = document.getElementById('padresBocasEscena4')

var narracionEscena4 = document.getElementById('narracionEscena4')
var imgNarracionEscena4 = document.getElementById('imgNarracionEscena4')
var arrow1Escena4 = document.getElementById('arrow1Escena4')
var arrow2Escena4 = document.getElementById('arrow2Escena4')
var arrow3Escena4 = document.getElementById('arrow3Escena4')
var audioEscena4 = document.getElementById('audioEscena4')


divContornoEscena4_1.addEventListener('click', activeEscena4)

function activeEscena4 (){
    narracionEscena4.classList.remove('d-none')
    divContornoEscena4_1.classList.add('d-none')
    arrow1Escena4.classList.add('d-none')
    audioEscena4.play()

    setTimeout(function() {
        padresCaminanEscena4.classList.remove('d-none')
    }, 16000);

    setTimeout(function() {
        padresCaminanEscena4.classList.add('d-none')
        padresQuietosEscena4.classList.remove('d-none')
        anaParpadeaEscena4.classList.remove('d-none')
        luisParpadeaEscena4.classList.remove('d-none')
        padresBocasEscena4.classList.remove('d-none')
    },22000);

    setTimeout(function() {
        padresBocasEscena4.classList.add('d-none')
        padresHablanEscena4.classList.remove('d-none')
    },28000);

    setTimeout(function() {
        padresBocasEscena4.classList.remove('d-none')
        padresHablanEscena4.classList.add('d-none')
        narracionEscena4.classList.add('d-none');
        imgNarracionEscena4.classList.remove('d-none');
        arrow3Escena4.classList.remove('d-none')
    },47200);

}



