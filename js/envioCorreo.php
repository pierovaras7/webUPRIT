<?php
  //Para y asunto del mensaje a enviar
  $email_to = "admision@uprit.edu.pe"; 
  //$email_subject = "Web UPRIT";
  $email_subject = "Inscripcion"; 

  $document_tipo = $_POST['Documento'];
  $document_nro = $_POST['Nro'];
  $nombres = $_POST['Nombres'];
  $apellidos = $_POST['Apellidos'];
  $correo = $_POST['Correo'];
  /*$codigo_pais = $_POST['Pais'];*/
  $edad = $_POST['Edad'];
  $celular = $_POST['Telefono'];
  $modalidad = $_POST['Modalidad'];
  $carrera = $_POST['Carrera'];
  $campus = $_POST['Campus'];
        
  function clean_string($string) {
    $bad = array("content-type","bcc:","to:","cc:","href");
    return str_replace($bad,"",$string);
  }
  $CuerpoMensaje='';    
  // Cuerpo del Email
  $CuerpoMensaje .= "¡Tienes un nuevo mensaje para Admisión!\r\n\r\n";
  $CuerpoMensaje .= "Tipo de documento: ".clean_string($document_tipo)."\r\n";
  $CuerpoMensaje .= "Nro de documento: ".clean_string($document_nro)."\r\n";
  $CuerpoMensaje .= "Nombres: ".clean_string($nombres)."\r\n";
  $CuerpoMensaje .= "Apellidos: ".clean_string($apellidos)."\r\n";
  $CuerpoMensaje .= "Correo: ".clean_string($correo)."\r\n";
  $CuerpoMensaje .= "Edad: ".clean_string($edad)."\r\n";
  $CuerpoMensaje .= "Nro Telégono: ".clean_string($celular)."\r\n";
  $CuerpoMensaje .= "Modalidad: ".clean_string($modalidad)."\r\n";
  $CuerpoMensaje .= "Carrera: ".clean_string($carrera)."\r\n"; 
  $CuerpoMensaje .= "Campus Universitario: ".clean_string($campus)."\r\n";
      
   //cabecera del email (forma correcta de codificarla)
  //$headers = "From: Web UPRIT web@uprit.edu.pe \r\n";
  $headers = "From: Inscripción web@uprit.edu.pe \r\n";
  //$header .= "Reply-To: " . $replyto . "\r\n";
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: multipart/mixed; boundary=\"=A=G=R=O=\"\r\n\r\n";
  //$headers .= "Content-Transfer-Encoding: 7bit \r\n";
  //$headers .= "From: Web UPRIT web@uprit.edu.pe \r\n";

  //armando mensaje del email
  $email_message = "--=A=G=R=O=\r\n";
  $email_message .= "Content-type:text/plain; charset=utf-8\r\n";
  $email_message .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
  $email_message .= $CuerpoMensaje . "\r\n\r\n";

  //enviamos el email
  if(mail($email_to, 'Inscripción', $email_message, $headers)){
    header('Location: https://uprit.edu.pe/web');
  }
  else 
    echo "<h4 align='center'><b>Error al enviar la solicitud</b><br></h4>";
?>
<!--<a href="regsitrate.php"><center>Regresar</center></a>-->
