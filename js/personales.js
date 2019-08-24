var abrir2 = document.getElementById('abrir2'),
ventana = document.getElementById('ventana'),
usuario = document.getElementById('usuario'),
bInicio = document.getElementById('bInicio'),
abrir2 = document.getElementById('abrir2'),
abrir3 = document.getElementById('abrir3'),
empresa = document.getElementById('empresa'),
abrir4 = document.getElementById('abrir4'),
inicioIndex = document.getElementById('inicioIndex'),
ventanaIndex = document.getElementById('ventanaIndex'),
popup = document.getElementById('popup'),
cerrarIndex = document.getElementById('cerrarIndex'),
ventanasPromo = document.getElementById('ventanasPromo'),
popupPromo = document.getElementById('popupPromo')
abrirPromo = document.getElementById('abrirPromo'),
cerrarPromo = document.getElementById('cerrarPromo'),
p1 = document.getElementById('p1'),
p2 = document.getElementById('p2'),
p3 = document.getElementById('p3');

abrir2.addEventListener('click', function(){
    ventana.classList.add('ocultar');
    usuario.classList.remove('ocultar');
    bInicio.classList.remove('ocultar');
    abrir2.classList.add('ocultar');
    empresa.classList.add('ocultar');
    abrir3.classList.remove('ocultar');
});

bInicio.addEventListener('click', function(){
    ventana.classList.remove('ocultar');
    usuario.classList.add('ocultar');
    bInicio.classList.add('ocultar');
    abrir2.classList.remove('ocultar');
});

abrir3.addEventListener('click', function(){
    ventana.classList.add('ocultar');
    empresa.classList.remove('ocultar');
    bInicio.classList.remove('ocultar');
    abrir3.classList.add('ocultar');
    usuario.classList.add('ocultar');
    abrir2.classList.remove('ocultar');
});

bInicio.addEventListener('click', function(){
    ventana.classList.remove('ocultar');
    empresa.classList.add('ocultar');
    bInicio.classList.add('ocultar');
    abrir3.classList.remove('ocultar');
});

abrir4.addEventListener('click', function(){
    ventana.classList.add('ocultar');
    usuario.classList.remove('ocultar');
    bInicio.classList.remove('ocultar');
    abrir2.classList.add('ocultar');
    empresa.classList.add('ocultar');
    abrir3.classList.remove('ocultar');
    ventanaIndex.classList.remove('activo');
    popup.classList.remove('activo');
});

inicioIndex.addEventListener('click', function(){
    ventanaIndex.classList.add('activo');
    popup.classList.add('activo');
});

cerrarIndex.addEventListener('click', function(){
    ventanaIndex.classList.remove('activo');
    popup.classList.remove('activo');
});

abrirPromo.addEventListener('click', function(){
    popupPromo.classList.add('A');
    ventanasPromo.classList.add('activo');
    popupPromo.classList.add('activo');
});

cerrarPromo.addEventListener('click', function(){
    ventanasPromo.classList.remove('activo');
    popupPromo.classList.remove('activo');
    popupPromo.classList.remove('A');
});

p1.addEventListener('click', function(){
    ventanasPromo.classList.remove('activo');
    popupPromo.classList.remove('activo');
    popupPromo.classList.remove('A');
    ventana.classList.add('ocultar');
    empresa.classList.remove('ocultar');
    bInicio.classList.remove('ocultar');
    abrir3.classList.add('ocultar');
    usuario.classList.add('ocultar');
    abrir2.classList.remove('ocultar');
});

p2.addEventListener('click', function(){
    ventanasPromo.classList.remove('activo');
    popupPromo.classList.remove('activo');
    popupPromo.classList.remove('A');
    ventana.classList.add('ocultar');
    empresa.classList.remove('ocultar');
    bInicio.classList.remove('ocultar');
    abrir3.classList.add('ocultar');
    usuario.classList.add('ocultar');
    abrir2.classList.remove('ocultar');
});

p3.addEventListener('click', function(){
    ventanasPromo.classList.remove('activo');
    popupPromo.classList.remove('activo');
    popupPromo.classList.remove('A');
    ventana.classList.add('ocultar');
    empresa.classList.remove('ocultar');
    bInicio.classList.remove('ocultar');
    abrir3.classList.add('ocultar');
    usuario.classList.add('ocultar');
    abrir2.classList.remove('ocultar');
});
