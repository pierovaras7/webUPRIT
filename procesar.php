<?php
    include('conexion.php');
    //$datos="No existe ID";
    if(isset($_POST['codigo'])){
        $codigo=$_POST['codigo'];
        $consulta="select * from evento where codigo='$codigo'";
        $resultado=mysqli_query($conexion,$consulta);

        if(!$resultado)
            die('No hay');

        $json = array();
        while($registro=mysqli_fetch_array($resultado)){
            $json[] = array(
                'descripcion' => $registro['descripcion'],
                'participante_ape' => $registro['participante_ape'],
                'participante_nom' => $registro['participante_nom'],
                'horas' => $registro['horas'],
                'fecha' => $registro['fecha'],
            );
        }
        $jsonstring = json_encode($json);
        echo $jsonstring;
    }
    else
        echo 'ERROR!!!';
?>