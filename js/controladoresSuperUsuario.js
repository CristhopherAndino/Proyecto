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

(()=>{
    $.ajax({
        url:"../PHP/ajax/empresa/",
        dataType:"json",
        success:(res)=>{
            llenarTabla2(res);
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

function llenarTabla2(usuarios){
    $('#tablaRegistros').empty();
    for (let Indice in usuarios) {
       
        $('#tablaRegistro').append(
            `<tr id="${Indice}">
            <th>${usuarios[Indice].nombre}</th>
            <th>${usuarios[Indice].pais}</th>
            <th>${usuarios[Indice].dirreccion}</th>
            <th>${usuarios[Indice].telefono}</th>
            <th>${usuarios[Indice].correo}</th>
            <th>${usuarios[Indice].contrasena}</th>
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
    $('#t').append(
        `<form class="ventanaIndex activo" id="ventanaIndex">
        <div class="popup activo" id="popup">
            <u><h2>Editar Usuario</h2></u><br>        
            <input name="nombreEd"  id="nombreEd" class="input1" type="text" placeholder="Nombre" value=""><br>
            <input name="apellidoEd" id="apellidoEd" class="input1" type="text" placeholder="Apellido"><br>
            <input name="emailEd" id="emailEd" class="input1" type="email" placeholder="Email"><br>
            <h5>Genero</h5>
            <select name="generoED" required="" id="generoED" name="generoU" class="input1">
                    <option value="0">VACIO</option>
                    <option value="Masculino">Hombre</option>
                    <option value="Femenino">Mujer</option>
                    <option value="No Binario">No Binario</option>
                </select><br>
                <h5>Pais</h5>
                <select name="paisED" required="" id="paisED" name="paisU" class="input1">
                    <option value="0">VACIO</option>
                    <option value="Honduras">Honduras</option>
                    <option value="Guatemala">Guatemala</option>
                    <option value="Costa rica">Costa rica</option>
                    <option value="Panama">Panama</option>
                    <option value="El Salvador">El Salvador</option>
                    <option value="Nicaragua">Nicaragua</option>
                </select><br>
            <input name="contraseñaEd" id="contraseñaEd" class="input1" type="text" placeholder="Contraseña"><br>
            <input name="confirmarC" id="confirmarC" class="input1" type="text" placeholder="Confirmar Contraseña"><br>
            <input name="cumpleañosEd" id="cumpleañosEd" class="input1" type="date" placeholder="Cumpleaños"><br>
            <p class="falta ocultar" id="faltaT">Hey un campo sin llenar o no coinciden las contraseñas</p><br>
            <input class="ocultar" id="key" type="text">
            <button class="boton3">Edicion Completa</button>
        </div>
    </form>`
    )
    $.ajax({
        url:`../PHP/ajax/usuarios/?id=${id}`,
        method:"GET",
        dataType:"json",
        success:(res)=>{   
        },
        error:(error)=>{
            console.log(error);
        }
    })
}
