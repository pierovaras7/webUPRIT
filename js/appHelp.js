export function llamada(){
    $(document).ready(function(){
        $("#form-procesar").submit(function(e){
            e.preventDefault();
            
            let codigo = $('#codigo').val();
            $.ajax({
                url: 'procesar.php',
                type: 'POST',
                data: { codigo },
                success: function(response){
                    let resultado = JSON.parse(response);
                    //console.log(resultado);
                    let descripcion = '';
                    let participante_ape = '';
                    let participante_nom = '';
                    let fecha = '';
                    let horas = '';
                    
                    if(resultado.length>0){
                        resultado.forEach(resultado => {
                            //descripcion = `<p>${resultado.descripcion}</p>`;
                            descripcion = resultado.descripcion + '<br><br>' + 'Código/Id: ' + codigo;
                            participante_ape = resultado.participante_ape;
                            participante_nom = resultado.participante_nom;
                            fecha = resultado.fecha;
                            horas = resultado.horas;
                        });
    
                        $('#par_ape').html(participante_ape);
                        $('#par_nom').html(participante_nom);
                        $('#par_des').html(descripcion);
                        $('#fec').html(fecha);
                        $('#hor').html(horas);
                    }
                    else{
                        $('#par_ape').html("Ninguna");
                        $('#par_nom').html("coincidencia");
                        $('#par_des').html("---");
                        $('#fec').html("---");
                        $('#hor').html("---");
                    }
                    document.getElementById("form-procesar").reset();
                    $('#codigo').focus()
                }
            })
        });
    });
}