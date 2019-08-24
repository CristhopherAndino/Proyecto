var abrirRegistroMuro = document.getElementById('abrirRegistroMuro'),
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

abrirRegistroMuro.addEventListener('click', function(){
    muroSeccion.classList.remove('activo');
    muroPopup.classList.remove('activo');
    muroT.classList.add('ocultar');
    usuarioMuro.classList.remove('ocultar');
});



