(()=>{
    $.ajax({
        url:"../PHP/ajax/usuarios/",
        dataType:"json",
        success:(res)=>{
            llenarTabla(res);
        },
        error:(error)=>{
            console.error(error);
        }
    });
})();

function llenarTabla(usuarios){
    $('#tablaRegistros').empty();
    for (let Indice in usuarios) {
       
        $('#tablaRegistro').append(
            `<tr id="${Indice}">
            <th>${usuarios[Indice].nombre}</th>
            <th>${usuarios[Indice].apellido}</th>
            <th>${usuarios[Indice].correo}</th>
            <th>${usuarios[Indice].genero}</th>
            <th>${usuarios[Indice].contrasena}</th>
            <th>${usuarios[Indice].fecha}</th>
            <th>
            <button class="boton2" onclick="eliminar('${Indice}')">Eliminar</button>
            <button class="boton3" onclick="editar('${Indice}')">editar</button>
            </th>
            </tr>`
        );
    }
}

function eliminar(id){
    $.ajax({
        url:`../PHP/ajax/usuarios/?id=${id}`,
        method:"DELETE",
        dataType:"json",
        success:(res)=>{
            $("#"+id).remove();
        },
        error:(error)=>{
            console.log(error);
        }
    })
}

function editar(id){
    idG = id;
    $('#t').append(
        `<form class="ventanaIndex activo" id="ventanaIndex">
        <div class="popup activo" id="popup">
            <u><h2>Editar Usuario</h2></u><br>        
            <input name="nombreE"  id="nombreEd" class="input1" type="text" placeholder="Nombre" value=""><br>
            <input name="apellidoE" id="apellidoEd" class="input1" type="text" placeholder="Apellido"><br>
            <input name="correoE" id="emailEd" class="input1" type="email" placeholder="Email"><br>
            <h5>Genero</h5>
            <select name="generoE" required="" id="generoED" name="generoU" class="input1">
                    <option value="0">VACIO</option>
                    <option value="Masculino">Hombre</option>
                    <option value="Femenino">Mujer</option>
                    <option value="No Binario">No Binario</option>
                </select><br>
                <h5>Pais</h5>
                <select name="paisE" required="" id="paisED" name="paisU" class="input1">
                    <option value="0">VACIO</option>
                    <option value="Honduras">Honduras</option>
                    <option value="Guatemala">Guatemala</option>
                    <option value="Costa rica">Costa rica</option>
                    <option value="Panama">Panama</option>
                    <option value="El Salvador">El Salvador</option>
                    <option value="Nicaragua">Nicaragua</option>
                </select><br>
            <input name="contrasenaE" id="contraseñaEd" class="input1" type="text" placeholder="Contraseña"><br>
            <input name="cContrasenaE" id="confirmarC" class="input1" type="text" placeholder="Confirmar Contraseña"><br>
            <input name="fechaE" id="cumpleañosEd" class="input1" type="date" placeholder="Cumpleaños"><br>
            <p class="falta ocultar" id="faltaT">Hay un campo sin llenar</p><br>
            <p class="falta ocultar" id="faltaC">No coinciden la contraseñas</p><br>
            <button class="boton3" onclick="edicionC('${id}')">Edicion Completa</button>
        </div>
    </form>`
    )
    $.ajax({
        url:"../PHP/ajax/usuarios/?id="+id,
        method:"GET",
        dataType:"json",
        success:(res)=>{
            alert(id);
        },
        error:(error)=>{
            
        }
    });
}

function edicionC(id) {
    if($('#nombreEd').val() != "" && $('#apellidoEd').val() != "" && $('#emailEd').val() != "" && $('#generoED').val() != 0 && $('#paisED').val() != 0 && $('#cumpleañosEd').val() != 0){
        if($('#contraseñaEd').val() == $('#confirmarC').val()){
            $("#faltaT").addClass("ocultar");
            $("#faltaC").addClass("ocultar");
        var parametros = $('#ventanaIndex').serialize();
        $.ajax({
            url:"../PHP/ajax/usuarios/?id="+id,
            method:"PUT",
            data:parametros,
            dataType:"json",
            success:(res)=>{
            },
            error:(error)=>{
                console.error(error);
            }
        });
        }else{
            $("#faltaC").removeClass("ocultar");
        }
    }else{
        $("#faltaT").removeClass("ocultar");
    }
}