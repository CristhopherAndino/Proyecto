$("#crearU").on("click", function(){
    if($('#nombreU').val() != "" && $('#apellidoU').val() != "" && $('#nacimientoU').val() != 0 && $('#generoU').val() != 0 && $('#paisU').val() != 0 && $('#correoU').val() != "" && $('#contraU').val() == $('#contraU2').val()){
    var parametros = $('#usuario').serialize();
    $.ajax({
        url:"../Proyecto/PHP/ajax/usuarios/",
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