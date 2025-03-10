<?php
if(isset($_POST['enviar'])) {
    $headers   = array();
    $headers[] = "MIME-Version: 1.0";
    $headers[] = "Content-type: text/html; charset=iso-8859-1";
    $headers[] = "From: UPRIT Web <web@uprit.edu.pe>";
    $headers[] = "X-Mailer: PHP/".phpversion();

    // Destinatario
    $para  = 'franklin.diaz@uprit.edu.pe';

    // título
    $titulo = 'Solicitud de informe';

    // mensaje
    $mensaje = "
        <html>
        <head>
          <title>Mensaje Web</title>
        </head>
        <body>
          <p>¡Tienes un nuevo mensaje desde la web!</p>
          <table>
            <tr>
              <td>Nombre:</td>
              <td>".$_POST['nombre']."</td>
            </tr>
            <tr>
              <td>Apellido:</td>
              <td>".$_POST['apellido']."</td>
            </tr>
            <tr>
              <td>Correo:</td>
              <td>".$_POST['correo']."</td>
            </tr>
            <tr>
              <td>Teléfono:</td>
              <td>".$_POST['telefono']."</td>
            </tr>
            <tr>
              <td>Mensaje:</td>
              <td>".$_POST['mensaje']."</td>
            </tr>
          </table>
        </body>
        </html>
        ";

    $response = mail($para, $titulo, $mensaje, implode("\r\n", $headers));
    $info = "";

    // if($response) $info = "success";
    // else $info = "error";

    echo json_encode(array('info' => $info));
}else {
    header("Location: ../index");
}

?>