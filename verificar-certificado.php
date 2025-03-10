<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verificar certificado</title>
    <link rel="shortcut icon" href="img/favicon.png" type="image/x-icon">
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/estilos.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">

    <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css">
</head>
<body class="bg-gray-100">
    <div class="py-8">
        <div class="shadow-lg group container border-t rounded-md bg-white  max-w-lg flex justify-center items-center mx-auto content-div">
            <div>
                <div class="flex flex-col py-8">
                    <!--<div class="fondo rounded py-4 px-2"><img src="img/uprit-licenciada.png" alt="logo-uprit" class="mx-auto"></div>-->
                    <div><img src="img/uprit-licenciada.png" alt="logo-uprit" class="mx-auto"></div>
                </div>

                <p class="text-gray-800 font-bold text-center">VERIFICA TU CERTIFICADO</p>

                <div class="py-8 px-2 bg-white rounded-b-md fd-cl">
                    <div class="flex flex-col justify-center items-center">
                        <form class="m-4 flex" id="form-procesar" method="POST">
                          <input id="codigo" class="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" placeholder="Introduce ID"/>
                          <button type="submit" class="px-8 rounded-r-lg fondo text-blue-50 font-bold p-4 borde border-t border-b border-r"><i class="fas fa-search"></i></button>
                        </form>
                    </div>            
                </div>
            </div>
        </div>
    </div>

    <div class="py-8">
      <div class="shadow-lg group container border-t rounded-md bg-white max-w-lg flex justify-center items-center mx-auto content-div">
        <div>            
          <div class="bg-gray-200 font-sans w-full flex flex-col justify-center items-center sm:flex-row">
            <p class="text-xl text-gray-800 font-bold text-center py-8 my-4 sm:my-0">RESULTADO DE LA BÚSQUEDA</p>
            <div class="card w-96 mx-auto bg-white shadow-xl">
              <div class="text-center mt-2 text-2xl font-small" id="par_ape"></div>
              <div class="text-center mt-2 text-2xl font-small" id="par_nom"></div>
              <div class="text-center font-normal text-lg mt-4"><p>Asistente al evento:</p></div>
              <div class="px-6 text-center mt-2 font-bold text-sm" id="par_des">
                
              </div>
              
              <hr class="mt-8">
              <div class="flex p-4">
                <div class="w-1/2 text-center">
                  <span class="font-bold">Fecha emisión:</span> <p id="fec"></p>
                </div>
                <div class="w-0 border border-gray-300">
                  
                </div>
                <div class="w-1/2 text-center">
                  <span class="font-bold">Total de horas:</span> <p id="hor"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

<footer class="relative bg-gray-200 pt-8 pb-6">
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap text-left lg:text-left">
      <div class="w-full sm:w-6/12 px-4">
        <h4 class="text-xl font-semibold text-blueGray-700">UNIVERSIDAD PRIVADA DE TRUJILLO</h4>
        <h5 class="text-base mt-0 mb-2 text-blueGray-600">
          Av. C. Industrial a Laredo Km 4 s/n, Trujillo - Perú
        </h5>
      </div>
      <div class="w-full sm:w-6/12 px-4">
        <div class="flex flex-wrap items-top mb-6">
          <div class="w-full lg:w-4/12 px-4 ml-auto">
            <span class="block uppercase text-blueGray-800 text-xs font-bold mb-2">Enlaces recurrentes</span>
            <ul class="list-unstyled">
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-xs" href="https://www.uprit.edu.pe/web/">Página principal</a>
              </li>
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-xs" href="http://repositorio.uprit.edu.pe/">Repositorio UPRIT</a>
              </li>
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-xs" href="https://uprit.edu.pe/web/transparencia.html">Portal de Transparencia</a>
              </li>
            </ul>
          </div>
          <div class="w-full lg:w-4/12 px-4">
            <span class="block uppercase text-blueGray-800 text-xs font-bold mb-2">Otros enlaces</span>
            <ul class="list-unstyled">
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-xs" href="https://www.uprit.edu.pe/uprit">ERP UPRIT</a>
              </li>
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-xs" href="https://uprit.edu.pe/web/registrate.php">Inscripciones</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr class="my-1 border-blueGray-800">
    <div class="flex flex-wrap items-center md:justify-between justify-center">
      <div class="w-full md:w-4/12 px-4 mx-auto text-center">
        <div class="text-sm text-blueGray-500 font-semibold py-1">
          <!--<span id="get-current-year"> 2015 - 2021</span> © <span class="text-blueGray-500"> Area de Sistemas - UPRIT </span>-->
          <span id="get-current-year"> UPRIT </span> © <span class="text-blueGray-500">2024 Todos los derechos reservados </span><br>
          <span id="get-current-year"><span class="text-blueGray-500"> Dpto de Tecnologías de Información </span>
        </div>
      </div>
    </div>
  </div>
</footer>

    <!--LIBRERIA JQUERY MINIFIED-->
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <!--JQUERY PROPIO-->
    <script src="js/app.js" type="module"></script>
</body>
</html>