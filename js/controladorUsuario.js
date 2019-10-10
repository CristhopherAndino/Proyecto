var idG = "-Lqo9X0lHGmxBoAoG-sM";

(()=>{
    $.ajax({
        url:"../PHP/ajax/controladorEmpresa/?id="+idG,
        method:"GET",
        dataType:"json",
        success:(res)=>{
            llenarTabla(res); 
            Publicidad(res);  
            Oferton(res);
            usuario = res;      
        },
        error:(error)=>{
            console.log(error);
        }
    })
})();

function llenarTabla(empresa){
    $('#muroPopup').empty();
       
        $('#muroPopup').append(
            `<form>
            <u><h2>Iniciar Secion</h2></u><br>        
            <input class="input1" type="text" id="correoM" placeholder="Correo Electronico"><br>
            <p class="falta ocultar" id="fcorreoM">Falta Correo</p><br>
            <input class="input1" type="password" id="contraM" placeholder="Contraseña"><br>
            <p class="falta ocultar" id="fcontraM">Falta Contraseña</p><br>
            <button onclick="validar()" class="boton2">Iniciar Secion</button><br>
        </form>`
        );
}