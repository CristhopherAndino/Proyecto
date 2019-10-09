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
        <input name="nombreP" class="input1" type="text" placeholder="Nombre">
        <input name="precioP" class="input1" type="text" placeholder="Presio"><br>
        <h6>Fotografia</h6>
        <input name="nombreE" class="ocultar" type="text" value="${usuario.nombre}"><br>
        <input name="fotoP" class="input1" type="file" accept="image/*"><br>
        <input name="informacionP" class="input2" type="text" placeholder="informacion"><br><br>
        <button class="boton2" onclick="publicar()">Publicar</button>
        </center>`
    );
}


//graficas
$(function($){
    $('#graficasS').highcharts({
        title:{text:'Segidores'},
        xAxis:{categories:['Octubre']},
        yAxis:{title:'Porsentaje %'},plotLines:[{value:0,width:1,color:'#808080'}],
        tooltip:{valueSuffix:'%'},
        legend:{layout:'vertical',align:'right',verticalAlign:'middle',borderWidth:0},
        series:[{name: 'Seguidores', data:[25]}]
    });
});

$(function($){
    $('#graficasV').highcharts({
        title:{text:'Ventas'},
        xAxis:{categories:['Agoste','Septiempre','Octubre']},
        yAxis:{title:'Porsentaje %'},plotLines:[{value:0,width:1,color:'#808080'}],
        tooltip:{valueSuffix:'%'},
        legend:{layout:'vertical',align:'right',verticalAlign:'middle',borderWidth:0},
        series:[{name: 'Ventas', data:[25,23,21]}]
    });
});

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
            <input name="nombre"  class="input1" type="text" name="nombre" value="${empresa.nombre}" placeholder="Nombre">
            <input name="pais" class="input1" type="text" value="${empresa.pais}" placeholder="Pais">
            <input name="dirreccion" class="input1" type="text" value="${empresa.dirreccion}" placeholder="Dirreccion">
            <input name="longitud" class="input1" type="text" value="${empresa.longitud}" placeholder="Longitud"> , <input name="latitud" class="input1" type="text" value="${empresa.latitud}" placeholder="Latitud">
            <input name="facebook" class="input1" type="text" value="${empresa.facebook}" placeholder="Facebook"><input name="instagram" class="input1" type="text" value="${empresa.instagram}" placeholder="Instagram"></h5><input name="twitter" class="input1"  type="text" value="${empresa.twitter}" placeholder="Twitter">
            <input name="correo"  class="input1" type="text" value="${empresa.correo}" placeholder="Correo">
            <input name="telefono"  class="input1" type="text" value="${empresa.telefono}" placeholder="Telefono">
            <input name="logotipo" id="logotipo" class="input1" value="${empresa.logotipo}" placeholder="Logotipo" type="file">
            <input name="banner" class="input1" value="${empresa.banner}" placeholder="Banner" type="file">
            <input name="contraseña"  class="input1" type="text" value="hola" placeholder="contraseña"><br>

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
}

function edicionCompleta(){
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
}

function publicar(){
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
}

function Oferton(usuario){
    $('#ofertones').empty();
    $('#ofertones').append(
        `<center>
        <h2>Registrar Oferto!</h2><br>
    <input name="nombreE" class="input1 ocultar" type="text" value="${usuario.nombre}">    
    <input name="descuento" class="input1" type="text" placeholder="Porcentaje De Descuento">
    <input name="real"  class="input1" type="text" placeholder="Presio Real"><br>
    <input name="Oferton" class="input1" type="text" placeholder="Precio De Oferto!"><br>
    <p class="falta ocultar" id="fPaisE">Falta Porcentaje De Descuento</p><br>
    <p class="falta ocultar" id="fPaisE">Falta Precio Real</p><br>
    <p class="falta ocultar" id="fPaisE">Falta Precio De Oferton!</p><br>
    <p class="falta ocultar" id="fPaisE">Falta Fecha De Efectividad</p><br>
    <p>Fecha De Inicio</p>
    <input name="fechaI" class="input1" type="date"><br>
    <p class="falta ocultar" id="fPaisE">Falta Fecha De Inicio</p><br>
    <p>Fecha Final</p>
    <input name="fechaF" class="input1" type="date">
    <p class="falta ocultar" id="fPaisE">Falta Fecha Final</p><br>
    <input name="sucursales" class="cajaEmpresa3 cajaEmpresa" placeholder="Sucursales" type="text">
    <p  class="falta ocultar" id="fPaisE">Falta las Sucursales</p><br>
    <input name="foto" class="cajaEmpresa3 cajaEmpresa" type="file" placeholder="Imagen Del Producto" accept="image/*"><br>
<button class="boton2" onclick="PublicarOfeton()">Publicar Oferton</button>
</center>`
    );
}

function PublicarOfeton(){
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
}




