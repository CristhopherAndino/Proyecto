$('#inicioI').on('click', function(){
    let parametros = $("#formularioI").serialize();
    $.ajax({
      url:"../Proyecto/PHP/ajax/loginUsuario/?accion=login",
        method:"POST",
        data:parametros,
        dataType:"json",
        success:(res)=>{
            if(res.validar){
              setTimeout('location="paginas/verificacionE.html"', 500);
                alert('si') 
            }
        },
        error:(error)=>{
            console.log(error);
        }
    }); 
});