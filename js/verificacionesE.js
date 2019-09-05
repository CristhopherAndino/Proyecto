var fcontraE = document.getElementById('fcontraE'),
contraE = document.getElementById('contraE'),
correoE = document.getElementById('correoE'),
fcorreoE = document.getElementById('fcorreoE'),
cerrarE = document.getElementById('cerrarE'), 
popupE = document.getElementById('popupE'),
seccionE = document.getElementById('seccionE'),
bInicioE = document.getElementById('bInicioE');

bInicioE.addEventListener('click', function(){
    seccionE.classList.add('activo');
    popupE.classList.add('activo');
});

cerrarE.addEventListener('click', function(){
    seccionE.classList.remove('activo');
    popupE.classList.remove('activo');
});

function Validar2(){
    if (correoE.value == "") {
        fcorreoE.classList.remove('ocultar');
    } else {
        fcorreoE.classList.add('ocultar');
        
    }
    if (contraE.value == "") {
        fcontraE.classList.remove('ocultar');
    } else {
        fcontraE.classList.add('ocultar');
    }
}

