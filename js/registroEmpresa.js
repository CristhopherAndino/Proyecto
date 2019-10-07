var indiceG= null,plang=null;
$("#crearEmpresa").on("click", function(){
    if($('#nombreE').val() != " " && $('#paisE').val() != 0 && $('#dirreccionE').val() != " " && $('#longitudE').val() != 0 && $('#latitudE').val() != 0 && $('#facebookE').val() != " " && $('#InstagramE').val() != " " && $('#TwitterE').val() != " " && $('#telefonoE').val() != 0 && $('#correoE').val() != " " && $('#contraEM').val() == $('#contraEM2').val()){
    var parametros = $('#empresa').serialize();
    $.ajax({
        url:"../Proyecto/PHP/ajax/empresa/",
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
});

(()=>{
    $.ajax({
        url:"PHP/ajax/planes/",
        dataType:"json",
        success:(res)=>{
            llenarPlanes(res);
        },
        error:(error)=>{
            console.error(error);
        }
    });
})();

function llenarPlanes(plan){

    $('#tablaPlanesI').empty();
    for (let Indice in plan) {
       
        $('#tablaPlanesI').append(
            `<tr required="" id="${Indice}">
            <th>${plan[Indice].nombre}</th>
            <th>${plan[Indice].cantidad}</th>
            <th>${plan[Indice].tiempo}</th>
            <th>
            <button required="" class="boton3" onclick="Escoger('${Indice}','${plan}')">Ecoger</button>
            </th>
            </tr>`
        );
    }
}

function Escoger(id,plan){
    for(let indice in plan){
        if(id != indice){
            $("#"+indice).remove();
        }
    }
    
}
