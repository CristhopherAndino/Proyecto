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