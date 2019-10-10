var idG = "-Lqk_-GjCAVKgQ7h5Umz";


(()=>{
    $.ajax({
        url:"../PHP/ajax/controladorEmpresa/?id="+idG,
        method:"GET",
        dataType:"json",
        success:(res)=>{
            llenarTabla(res); 
            Publicidad(res);  
            Oferton(res);
            grafica(res);
                 
        },
        error:(error)=>{
            console.log(error);
        }
    })
})();

(()=>{
    $.ajax({
        url:"../PHP/ajax/sucursales/",
        method:"GET",
        dataType:"json",
        success:(res)=>{
            sucursalesLlenar(res);       
        },
        error:(error)=>{
            console.log(error);
        }
    })
})();

function Publicidad(usuario){
    $('#pulicidad').empty();
    $('#pulicidad').append(
        `<center>
        <h2>Registro De Productos</h2><br>
        <input required="" name="nombreP" id="nombreP" class="input1" type="text" placeholder="Nombre">
        <input required="" name="precioP" id="precioP" class="input1" type="number" placeholder="Presio"><br>
        <h6>Fotografia</h6>
        <input name="nombreE" class="ocultar" type="text" value="${usuario.nombre}"><br>
        <input name="fotoP" class="input1" type="file" accept="image/*"><br>
        <input required="" name="informacionP" id="informacionP" class="input2" type="text" placeholder="informacion"><br><br>
        <p class="falta ocultar" id="faltaCP">Falta llenar Un Campo</p><br>
        <p class="falta ocultar" id="faltaCPY">Ya a Sido publicado</p><br>
        <button class="boton2" onclick="publicar()">Publicar</button>
        </center>`
    );
}


//graficas
function grafica(res){
    
$(function($){
    $('#graficasS').highcharts({
        title:{text:'Segidores'},
        xAxis:{categories:['Agoste','Septiempre','Octubre']},
        yAxis:{title:'Porsentaje %'},plotLines:[{value:0,width:1,color:'#808080'}],
        tooltip:{valueSuffix:'%'},
        legend:{layout:'vertical',align:'right',verticalAlign:'middle',borderWidth:0},
        series:[{name: 'Seguidores', data:[25,45,76]}]
    });
});

$(function($){
    $('#graficasV').highcharts({
        title:{text:'Ventas'},
        xAxis:{categories:['Agoste','Septiempre','Octubre']},
        yAxis:{title:'Porsentaje %'},plotLines:[{value:0,width:1,color:'#808080'}],
        tooltip:{valueSuffix:'%'},
        legend:{layout:'vertical',align:'right',verticalAlign:'middle',borderWidth:0},
        series:[{name: 'Ventas', data:[54,34,65]}]
    });
});
}

//edicion

function llenarTabla(empresa){
    $('#tablaEmpresa').empty();
       
        $('#tablaEmpresa').append(
            `<div>
            <button class="cerrarU" id="cerrarPE">Cerrar</button>
            <div id="cajaPerfilE">
            <div id="logobaner">
            <img src="../imagenes/imagen-muro.png"></button>
            <img src="../imagenes/imagen-muro.png"></button><br><br> 
            <h5>Nombre:</h5> 
            <h6>${empresa.nombre}</h6>
            <h5>Pais:</h5>   
            <h6>${empresa.pais}</h6>
            <h5>Dirreccion:</h5>
            <h6>${empresa.dirreccion}</h6>
            <h5>Longitud y Latitud:</h5>
            <h6>${empresa.longitud} , ${empresa.latitud}</h6>
            <h5>Redes Sociales</h5>
            <h6>${empresa.facebook}</h5><h6>${empresa.instagram}</h5><h6>${empresa.twitter}</h5>
            <h5>Telefono:</h5>
            <h6>${empresa.telefono}</h5>
            <h5>Correo:</h5>
            <h6>${empresa.correo}</h5>
            <h5>Plan:</h5>
            <h6>${empresa.plan.nombre}</h5>
            <button class="boton3" id="editarPerfilEmpresa">Editar</button>
        </div>
            </div>
            <form id="editarPerfil" class="ocultar">
            <input required="" name="nombre" id="nombreEE"  class="input1" type="text" name="nombre" value="${empresa.nombre}" placeholder="Nombre">
            <input required="" name="pais" id="paisEE" class="input1" type="text" value="${empresa.pais}" placeholder="Pais">
            <input required="" name="dirreccion" id="dirreccionEE" class="input1" type="text" value="${empresa.dirreccion}" placeholder="Dirreccion">
            <input required=""  name="longitud" id="longitudEE" class="input1" type="number" value="${empresa.longitud}" placeholder="Longitud"> , <input required="" name="latitud" id="latitudEE" class="input1" type="number" value="${empresa.latitud}" placeholder="Latitud">
            <input required="" name="facebook" id="facebookEE" class="input1" type="text" value="${empresa.facebook}" placeholder="Facebook"><input required="" name="instagram" id="instagramEE" class="input1" type="text" value="${empresa.instagram}" placeholder="Instagram"></h5><input required="" name="twitter" id="twitterEE" class="input1"  type="text" value="${empresa.twitter}" placeholder="Twitter">
            <input required="" name="correo" id="correoEE"  class="input1" type="text" value="${empresa.correo}" placeholder="Correo">
            <input required="" name="telefono" id="telefonoEE"  class="input1" type="number" value="${empresa.telefono}" placeholder="Telefono">
            <input name="logotipo" id="logotipo" class="input1" value="${empresa.logotipo}" placeholder="Logotipo" type="file">
            <input name="banner" class="input1" value="${empresa.banner}" placeholder="Banner" type="file">
            <input required="" name="contraseña" id="contraseña"  class="input1" type="text" value="${empresa.contraseña}" placeholder="contraseña"><br>
            <p class="falta ocultar" id="faltaCEE">Falta llenar Un Campo</p><br>
            <button class="boton" id="caselarEE">Canselar</button>
            <button class="boton" id="editarC" onclick="edicionCompleta()">Edicion Completa</button>
            </form>          
            </div>`
        );


        $('#editarPerfilEmpresa').click(function(){
            $('#cajaPerfilE').addClass('ocultar');
            $('#editarPerfil').removeClass('ocultar');
           
        });

        $('#cerrarPE').click(function(){
            $('#popupPerfil').removeClass('activo');
            $('#ventanaPerfil').removeClass('activo');
        });

        $('#caselarEE').click(function(){
            $('#cajaPerfilE').removeClass('ocultar');
            $('#editarPerfil').addClass('ocultar');
           
        });

        $('#PSC').click(function(){
            $('#tablaES').removeClass('ocultar');
            $('#editarPerfil').addClass('ocultar');
           
        });
}

function sucursalesLlenar(surcusal){
    $('#tablaSucursales').empty();
    for (let Indice in surcusal) {
       
        $('#tablaSucursales').append(
            `<tr id="${Indice}">
            <th>${surcusal[Indice].nombre}</th>
            <th>${surcusal[Indice].latitud}</th>
            <th>${surcusal[Indice].longitud}</th>
            <th>
            </th>
            </tr>`
        );
    }
}

function edicionCompleta(){
    if($('#nombreEE').val() != " " && $('#paisEE').val() != " " && $('#dirreccionEE').val() != " " && $('#longitudEE').val() != 0 && $('#facebookEE').val() != " " && $('#correoEE').val() != " " && $('#telefonoEE').val() != 0 && $('#contraseña').val() != " " && $('#twitterEE').val() != " " && $('#latitudEE').val() != " " && $('#instagramEE').val() != " "){
    var parametros = $('#editarPerfil').serialize();
$.ajax({
    url:"../PHP/ajax/ePerfil/?id="+idG,
    method:"PUT",
    data:parametros,
    dataType:"json",
    success:(res)=>{
    },
    error:(error)=>{
        console.error(error);
    }
});
$('#faltaCEE').addClass('ocultar');
}else{
    $('#faltaCEE').removeClass('ocultar');
}
}

function publicar(){
    if($('#nombreP').val() != " " && $('#precioP').val() != 0 && $('#informacionP').val() != " "){
        var parametros = $('#pulicidad').serialize();
    $.ajax({
        url:"../PHP/ajax/publicacionN/",
        method:"POST",
        data:parametros,
        dataType:"json",
        success:(res)=>{

        },
        error:(error)=>{
            console.error(error);
        }
    });
    $('#faltaCP').addClass('ocultar');
    $('#faltaCPY').removeClass('ocultar');
}else{
    $('#faltaCP').removeClass('ocultar');

}
}

function Oferton(usuario){
    $('#ofertones').empty();
    $('#ofertones').append(
        `<center>
        <h2>Registrar Oferto!</h2><br>
    <input required="" name="nombreE" id="nombreEO" class="input1 ocultar" type="text" value="${usuario.nombre}">    
    <input required=""  name="descuento" id=" descuentoO" class="input1" type="number" placeholder="Porcentaje De Descuento">
    <input required="" name="real" id="realO" class="input1" type="number" placeholder="Presio Real"><br>
    <input required="" name="Oferton" id="OfertonO" class="input1" type="number" placeholder="Precio De Oferto!"><br>
    <p>Fecha De Inicio</p>
    <input required="" name="fechaI" id="fechaIO" class="input1" type="date"><br>
    <p>Fecha Final</p>
    <input required="" name="fechaF" id="fechaFO" class="input1" type="date">
    <input required="" name="sucursales" id="sucursalesO" class="cajaEmpresa3 cajaEmpresa" placeholder="Sucursales" type="text">
    <input name="foto" class="cajaEmpresa3 cajaEmpresa" type="file" placeholder="Imagen Del Producto" accept="image/*"><br>
    <p class="falta ocultar" id="faltaCEEO">Falta llenar Un Campo</p><br>
<button class="boton2" onclick="PublicarOfeton()">Publicar Oferton</button>
</center>`
    );
}

function PublicarOfeton(){
    if($('#nombreEO').val() != " " && $('#descuentoO').val() != 0 && $('#realO').val() != 0 && $('#OfertonO').val() != 0 && $('#fechaIO').val() != 0 && $('#fechaFO').val() != 0 && $('#sucursalesO').val() != " "){   
    var parametros = $('#ofertones').serialize();
    $.ajax({
        url:"../PHP/ajax/ofertones/",
        method:"POST",
        data:parametros,
        dataType:"json",
        success:(res)=>{

        },
        error:(error)=>{
            console.error(error);
        }
    });
    $('#faltaCEEO').addClass('ocultar');
}else{
    $('#faltaCEEO').removeClass('ocultar');
}
}



