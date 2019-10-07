var fcoinsidirM = document.getElementById('fcoinsidirM'),
fcontraM2 = document.getElementById('fcontraM2'),
fConfirmacionM = document.getElementById('fConfirmacionM'),
fCorreoM2 = document.getElementById('fCorreoM2'), 
fPaisM = document.getElementById('fPaisM'),
fGeneroM = document.getElementById('fGeneroM'),
fNacimientoM = document.getElementById('fNacimientoM'),
fapellidoM = document.getElementById('fapellidoM'),
fNombreM = document.getElementById('fNombreM'), 
correoM = document.getElementById('correoM'), 
fcorreoM  = document.getElementById('fcorreoM'),
contraM  = document.getElementById('contraM'),
fcontraM  = document.getElementById('fcontraM'),
abrirRegistroMuro = document.getElementById('abrirRegistroMuro'),
usuarioMuro = document.getElementById('usuarioMuro'),
muroT = document.getElementById('muroT'),
perfil = document.getElementById('perfil'),
muroSeccion = document.getElementById('muroSeccion'),
muroPopup = document.getElementById('muroPopup'),
cerrarMuro = document.getElementById('cerrarMuro'),
botonInicioMuro = document.getElementById('botonInicioMuro');

perfil.addEventListener('click', function(){
    muroSeccion.classList.add('activo');
    muroPopup.classList.add('activo');
});

cerrarMuro.addEventListener('click', function(){
    muroSeccion.classList.remove('activo');
    muroPopup.classList.remove('activo');
});

botonInicioMuro.addEventListener('click', function(){
    muroSeccion.classList.add('activo');
    muroPopup.classList.add('activo');
});

function validar(){
    if (correoM.value == "") {
        fcorreoM.classList.remove('ocultar');
    } else {
        fcorreoM.classList.add('ocultar');
    }
    if (contraM.value == "") {
        fcontraM.classList.remove('ocultar');
    } else {
        fcontraM.classList.add('ocultar');
    }
}

function Validar2(){
    if (usuarioMuro.nombreM.value == "") {
        fNombreM.classList.remove('ocultar');
    } else {
        fNombreM.classList.add('ocultar');
    }
    if (usuarioMuro.apellidoM.value == "") {
        fapellidoM.classList.remove('ocultar');
    } else {
        fapellidoM.classList.add('ocultar');
    }
    if (usuarioMuro.nacimientoM.value == "") {
        fNacimientoM.classList.remove('ocultar');
    } else {
        fNacimientoM.classList.add('ocultar');
    }
    if (usuarioMuro.generoM.value == 0) {
        fGeneroM.classList.remove('ocultar');
    } else {
        fGeneroM.classList.add('ocultar');
    }
    if (usuarioMuro.paisM.value == 0) {
        fPaisM.classList.remove('ocultar');
    } else {
        fPaisM.classList.add('ocultar');
    }
    if (usuarioMuro.correoM2.value == "") {
        fCorreoM2.classList.remove('ocultar');
    } else {
        fCorreoM2.classList.add('ocultar');
    }
    if (usuarioMuro.contraM2.value == "") {
        fcontraM2.classList.remove('ocultar');
    } else {
        fcontraM2.classList.add('ocultar');
    }
    if (usuarioMuro.confirmacionM.value == "") {
        fConfirmacionM.classList.remove('ocultar');
    } else {
        fConfirmacionM.classList.add('ocultar');
    }
    if (usuarioMuro.contraM2.value != usuarioMuro.confirmacionM.value) {
        fcoinsidirM.classList.remove('ocultar');
    } else {
        fcoinsidirM.classList.add('ocultar');
    }
    if (usuarioMuro.nombreM.value != "" && usuarioMuro.apellidoM.value != "" && usuarioMuro.nacimientoM.value != "" && usuarioMuro.generoM.value != 0 && usuarioMuro.paisM.value != 0 && usuarioMuro.correoM2.value != "" && usuarioMuro.contraM2.value != "" && usuarioMuro.confirmacionM.value != "") {
        setTimeout('location="verificacion.html"', 500);
    } else {
        
    }
   
}



