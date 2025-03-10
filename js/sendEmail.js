$(function () {
    $('#sendcorreo').on('click', function (event) {
        event.preventDefault();
        var destino = 'informes@uprit.edu.pe';
        var subject = 'Solicitud de informes';
        var nombre =  $('#nombre').val();
        var apellido =  $('#apellido').val();
        var correo =  $("#correo").val();
        var numero =  $('#telefono').val();
        var mensaje =  $('#mensaje').val();
                
        /* validateEmail(correo) */
        /* validarCampos(nombre,apellido,correo,numero,mensaje);
        validateEmail(nombre,apellido,correo,numero,mensaje,destino ,subject); */
        
        if(nombre.length == "" || apellido.length == "" || correo.length == ""  || numero.length == ""  || mensaje.length == "" ){
            message_Text()
        }else{
            limpiar()
            validateEmail(nombre,apellido,correo,numero,mensaje,destino,subject);
        }
    });
});

function message_Text(){
    var txtnombre = $('#valcmp_nombre');
    var txtapellido = $('#valcmp_apellido');
    var txtcorreo = $('#val_email');
    var txtcelular = $('#valcmp_celular');
    var txtmensaje = $('#valcmp_mensaje');

    txtnombre.html("*El nombre es obligatorio");
    txtapellido.html("*El apellido es obligatorio");
    txtcorreo.html("*El correo es obligatorio");
    txtcelular.html("*El celular es obligatorio");
    txtmensaje.html("*El mensaje es obligatorio");
}

function limpiar(){
    var txtnombre = $('#valcmp_nombre');
    var txtapellido = $('#valcmp_apellido');
    var txtcorreo = $('#val_email');
    var txtcelular = $('#valcmp_celular');
    var txtmensaje = $('#valcmp_mensaje');

    txtnombre.html("");
    txtapellido.html("");
    txtcelular.html("");
    txtmensaje.html("");
}

function validateEmail(nombre,apellido,correo,numero,mensaje,destino ,subject){  
    let txtcorreo = $('#val_email');
    let emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    let verificar = emailRegex.test(correo);
    if (correo !="" && !verificar) {
        txtcorreo.html("*Formato requerido: correo@dominio.com");
    }else{
        txtcorreo.html("");
        var emailBody =  `Nombre: ${nombre}, Apellido: ${apellido}, Correo: ${correo}, Numero: ${numero}, Mensaje: ${mensaje} `;  
    window.location = 'mailto:' + destino + '?subject=' + subject + '&body=' +   emailBody; 
    }
}
          
        
  