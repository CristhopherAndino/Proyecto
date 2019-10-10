var fContraseña2E = document.getElementById('fContraseña2E'),
fContraseñaE = document.getElementById('fContraseñaE'),
fCorreoE = document.getElementById('fCorreoE'),
fTelefonoE = document.getElementById('fTelefonoE'), 
fFacebookE = document.getElementById('fFacebookE'),
fInstagramE = document.getElementById('fInstagramE'),
fTwitterE = document.getElementById('fTwitterE'),
fLatitudE = document.getElementById('fLatitudE'),
fLongitudE = document.getElementById('fLongitudE'),
fDirreccionE = document.getElementById('fDirreccionE'),
fPaisE = document.getElementById('fPaisE'),  
fNombreE = document.getElementById('fNombreE'),
correoI = document.getElementById('correoI'),
fContraI = document.getElementById('fContraI'),
fcorreoI = document.getElementById('fcorreoI'), 
fContra3 = document.getElementById('fContra3'),
fTerminos = document.getElementById('fTerminos'),
fPais = document.getElementById('fPais'),
generoU = document.getElementById('generoU'),
fContra2 = document.getElementById('fContra2'),
fContra = document.getElementById('fContra'),
fCorreo = document.getElementById('fCorreo'),
fNacimiento = document.getElementById('fNacimiento'),
fApellido = document.getElementById('fApellido'),
fNombre = document.getElementById('fNombre'),
usuario = document.getElementById('usuario'),
abrir2 = document.getElementById('abrir2'),
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
popupPromo = document.getElementById('popupPromo'),
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

//validar registro//
function ValidarUsuario(){
    if (usuario.nombreU.value == "") {
        fNombre.classList.remove('ocultar');
    }else{
        fNombre.classList.add('ocultar');
    }
    if (usuario.apellidoU.value == "") {
        fApellido.classList.remove('ocultar');
    }else{
        fApellido.classList.add('ocultar');
    }
    if (usuario.nacimientoU.value == "") {
        fNacimiento.classList.remove('ocultar');
    }else{
        fNacimiento.classList.add('ocultar');
    }
    if (usuario.correoU.value == "") {
        fCorreo.classList.remove('ocultar');
    }else{
        fCorreo.classList.add('ocultar');
    }
    if (usuario.contraU.value == "") {
        fContra.classList.remove('ocultar');
    }else{
        fContra.classList.add('ocultar');
    }
    if (usuario.contraU2.value == "") {
        fContra2.classList.remove('ocultar');
    }else{
        fContra2.classList.add('ocultar');
    }
    if (usuario.generoU.value == 0) {
        fGenero.classList.remove('ocultar');
    }else{
        fGenero.classList.add('ocultar');
    }
    if (usuario.paisU.value == 0) {
        fPais.classList.remove('ocultar');
    }else{
        fPais.classList.add('ocultar');
    }
    if(usuario.contraU.value != usuario.contraU2.value){
        fContra3.classList.remove('ocultar');
    }
    if($('#nombreU').val() != "" && $('#apellidoU').val() != "" && $('#nacimientoU').val() != 0 && $('#generoU').val() != 0 && $('#paisU').val() != 0 && $('#correoU').val() != "" && $('#contraU').val() == $('#contraU2').val()){
        setTimeout('location="paginas/verificacionE.html"', 500);

    }
}
function ValidarEmpresa(){
    if(empresa.nombreE.value == ""){
        fNombreE.classList.remove("ocultar");  
    }else{
        fNombreE.classList.add("ocultar");
    }
    if(empresa.paisE.value == 0){
        fPaisE.classList.remove("ocultar");  
    }else{
        fPaisE.classList.add("ocultar");
    }
    if(empresa.dirreccionE.value == ""){
        fDirreccionE.classList.remove("ocultar");  
    }else{
        fDirreccionE.classList.add("ocultar");
    }
    if(empresa.longitudE.value == ""){
        fLongitudE.classList.remove("ocultar");  
    }else{
        fLongitudE.classList.add("ocultar");
    }
    if(empresa.latitudE.value == ""){
        fLatitudE.classList.remove("ocultar");  
    }else{
        fLatitudE.classList.add("ocultar");
    }
    if(empresa.facebookE.value == ""){
        fFacebookE.classList.remove("ocultar");  
    }else{
        fFacebookE.classList.add("ocultar");
    }
    if(empresa.InstagramE.value == ""){
        fInstagramE.classList.remove("ocultar");  
    }else{
        fInstagramE.classList.add("ocultar");
    }
    if(empresa.TwitterE.value == ""){
        fTwitterE.classList.remove("ocultar");  
    }else{
        fTwitterE.classList.add("ocultar");
    }
    if(empresa.telefonoE.value == ""){
        fTelefonoE.classList.remove("ocultar");  
    }else{
        fTelefonoE.classList.add("ocultar");
    }
    if(empresa.correoE.value == ""){
        fCorreoE.classList.remove("ocultar");  
    }else{
        fCorreoE.classList.add("ocultar");
    }
    if(empresa.contraEM.value == ""){
        fContraseñaE.classList.remove("ocultar");  
    }else{
        fContraseñaE.classList.add("ocultar");
    }
    if(empresa.contraEM.value == ""){
        fContraseña2E.classList.remove("ocultar");  
    }else{
        fContraseña2E.classList.add("ocultar");
    }
    if(empresa.contraEM.value != empresa.contraEM.value){
        fVerificacionE.classList.remove('ocultar');
    }else{
        fVerificacionE.classList.add('ocultar');
    }
    if(empresa.nombreE.value != "" && empresa.paisE.value != 0 && empresa.dirreccionE.value != "" && empresa.longitudE.value != "" && empresa.latitudE.value != "" && empresa.facebookE.value != "" && empresa.InstagramE.value != "" && empresa.TwitterE.value != "" && empresa.telefonoE.value != "" && empresa.correoE.value != "" && empresa.contraEM.value != "" && empresa.contraEM.value != ""){
        setTimeout('location="paginas/verificacionE.html"', 500);

    }

}


