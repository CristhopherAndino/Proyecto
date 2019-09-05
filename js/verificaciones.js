var fcontraV = document.getElementById('fcontraV'),
contraV = document.getElementById('contraV'),
correoV = document.getElementById('correoV'),
fcorreoV = document.getElementById('fcorreoV'),
cerrarV = document.getElementById('cerrarV'),
popupV = document.getElementById('popupV'),
seccionV = document.getElementById('seccionV'),
bInicioV = document.getElementById('bInicioV');

bInicioV.addEventListener('click', function(){
    seccionV.classList.add('activo');
    popupV.classList.add('activo');
});

cerrarV.addEventListener('click', function(){
    seccionV.classList.remove('activo');
    popupV.classList.remove('activo');
});

function Validar1(){
    if (correoV.value == "") {
        fcorreoV.classList.remove('ocultar');
    } else {
        fcorreoV.classList.add('ocultar');
        
    }
    if (contraV.value == "") {
        fcontraV.classList.remove('ocultar');
    } else {
        fcontraV.classList.add('ocultar');
        
    }
}