var botonpromocionEmpresa = document.getElementById('botonpromocionEmpresa'),
ventanaEmpresa = document.getElementById('ventanaEmpresa'),
popupEmpresa = document.getElementById('popupEmpresa'),
cerrarEmpresa = document.getElementById('cerrarEmpresa'),
botonSubida = document.getElementById('botonSubida'),
ventanaSubir = document.getElementById('ventanaSubir'),
popupSubida = document.getElementById('popupSubida'),
cerrarSubida = document.getElementById('cerrarSubida'),
perfilEmpresa = document.getElementById('perfilEmpresa'),
ventanaPerfil = document.getElementById('ventanaPerfil'),
popupPerfil = document.getElementById('popupPerfil');


botonpromocionEmpresa.addEventListener('click', function(){
    popupEmpresa.classList.add('activo');
    ventanaEmpresa.classList.add('activo');
});

cerrarEmpresa.addEventListener('click', function(){
    popupEmpresa.classList.remove('activo');
    ventanaEmpresa.classList.remove('activo');
});

botonSubida.addEventListener('click', function(){
    ventanaSubir.classList.add('activo');
    popupSubida.classList.add('activo');
});

cerrarSubida.addEventListener('click', function(){
    ventanaSubir.classList.remove('activo');
    popupSubida.classList.remove('activo');
});

perfilEmpresa.addEventListener('click', function(){
    ventanaPerfil.classList.add('activo');
    popupPerfil.classList.add('activo');
});

cerrarEmpresaPerfil.addEventListener('click', function(){
    ventanaPerfil.classList.remove('activo');
    popupPerfil.classList.remove('activo');
});

