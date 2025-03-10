<?php
	$server="127.0.0.1"; //"localhost:3306";
	$user="adminbolsa";
	$pwd="bolsatrabajo2020";
	$db="bolsat";

	$conexion=mysqli_connect($server,$user,$pwd,$db);
	mysqli_set_charset($conexion,"utf8");
	
	// if($conexion)
		// echo "Conexión EXITOSA";
	// else
		// echo "Conexión FALLIDA";
?>