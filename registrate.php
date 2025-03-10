<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>UPRIT - Regístrate</title>
    <link rel="shortcut icon" href="img/favicon.png" type="image/x-icon">
    <!-------------------------------------------- Estilos personalizados ---------------------------->
    <link rel="stylesheet" href="css/diseño.css">
    <!---------------------------------------------FUENTES GOOGLE------------------------------------->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200&display=swap" rel="stylesheet">
</head>
<body>
<!-- Cuadro inicial -->
<section class="inition">
    <div class="inition-content">
        <img src="img/uprit-licenciada.png" alt="Universidad Privada de Trujillo" class="logo">
        <div class="text-content">
            <h2>Mediante Resolución</h2>
            <p>N° 0032-2024-SUNEDU-CD</p>
        </div>
    </div>
</section>
<!-- Banner principal -->
    <!--<section class="banner">
        <div class="banner-content">
            <h1>Programa Educativo</h1>
            <p>Construye tu futuro profesional con nosotros</p>
        </div>
    </section>-->

<!-- Sección del formulario -->
<section class="form-section">
    <div class="form-container">
        <div class="form-box">
            <h3>COMPLETA TUS DATOS</h3><br>
            <!--<form id="registro-form" method="post" action="https://script.google.com/macros/s/AKfycbzTH-j6OUywG6S1i8KC2UELwHzFxIrT0R_230VxhixSBAd_z_nomzRKDNpdvd1T4rjfag/exec">-->
            <form id="registro-form" action="js/envioCorreo.php" method="POST" enctype="multipart/form-data">
                <div class="form-group">
                    <div class="document-group">
                        <select id="document_tipo" name="Documento" required>
                            <option value="DNI">DNI</option>
                            <option value="PAS">PASAPORTE</option>
                        </select>
                        <input type="text" id="document_nro" name="Nro" placeholder="Número de documento" required>
                    </div>
                </div>
                <div class="form-group">
                    <input type="text" id="nombres" name="Nombres" placeholder="Nombres" required>
                </div>
                <div class="form-group">
                    <input type="text" id="apellidos" name="Apellidos" placeholder="Apellidos" required>
                </div>
                <div class="form-group">
                    <input type="email" id="correo" name="Correo" placeholder="Correo" required>
                </div>
                <div class="form-group phone-group">
                    <!--<select id="codigo_pais" name="Pais" required>
                        <option value="PER">+51 (PER)</option>
                    </select>-->
                    <input type="text" id="edad" name="Edad" placeholder="Edad" class="edad" required>
                    <input type="tel" id="celular" name="Telefono" placeholder="Teléfono" class="telefono" required>
                </div>
                <div class="form-group">
                    <select id="programa" name="Modalidad" required>
                        <option value="">Modalidad</option>-->
                        <option value="Regular">Regular</option>
                        <option value="PUEDE">PUEDE</option>
                    </select>
                </div>
                <div class="form-group">
                    <select id="carrera" name="Carrera" required>
                        <option value="">Carrera Universitaria</option>
                        <option value="Administración de Empresas">Administración de Empresas</option>
                        <option value="Arquitectura y Urbanismo">Arquitectura y Urbanismo</option>
                        <option value="Contabilidad y Finanzas">Contabilidad y Finanzas</option>
                        <option value="Derecho">Derecho</option>
                        <option value="Educación Inicial">Educación Inicial</option>
                        <option value="Educación Primaria">Educación Primaria</option>
                        <option value="Educación Matemática e Informática">Educación Matemática e Informática</option>
                        <option value="Educación Idiomas Extranjeros">Educación con mención en Idiomas Extranjeros</option>
                        <option value="Educación Ciencias Sociales">Educación con mención en Ciencias Sociales</option>
                        <option value="Ing. Civil">Ingeniería Civil</option>
                        <option value="Ing. de Sistemas e Inteligencia Artificial">Ingeniería de Sistemas e Inteligencia Artificial</option>
                        <option value="Ing. Industrial">Ingeniería Industrial</option>
                    </select>
                </div>
                <div class="form-group">
                    <select id="campus" name="Campus" required>
                        <option value="Campus Trujillo">Campus Trujillo</option>
                    </select>
                </div>
                <!--<div class="form-group checkbox-group">
                    <div class="checkbox-item">
                        <input type="checkbox" id="terminos" name="terminos" required>
                        <label for="terminos">He leído y acepto los términos y condiciones</label>
                    </div>
                    <div class="checkbox-item">
                        <input type="checkbox" id="privacidad" name="privacidad" required>
                        <label for="privacidad">He leído y acepto las políticas de privacidad</label>
                    </div>
                </div>-->
                <div class="form-group">
                    <button type="submit" class="submit-btn">Inscribirse</button>
                </div>
            </form>
        </div>
        <!--<script src="sheet.js"></script>-->
        <div class="form-content">
            <img src="img/puede.png" alt="Programa PUEDE">
            <!--<h2>La Universidad Privada de Trujillo ofrece 4 carreras profesionales:</h2>
            1. Administración de Empresas<br>
            2. Contabilidad y Finanzas<br>
            3. Derecho<br>
            4. Ingeniería Civil<br>
            
            <br>
            <p>Tienes 2 modalidades para estudiar: <br>
            a. Regular, con clases entre semana <br>
            b. PUEDE, con clases los fines de semana para las personas que trabajan</p>
            <br>
            <p>Para saber más, llena el formulario y te atenderemos.</p>-->
            <!--<button class="download-btn">Descarga el brochure</button>-->
        </div>
    </div>
</section>

    <!-- Sección de preguntas frecuentes -->
    <section class="faq-section">
        <div class="faq-container">
            <h2>Preguntas Frecuentes</h2>
            <p>Encuentra las respuestas a las dudas más comunes sobre nuestros programas educativos.</p>
            <div class="faq">
                <div class="faq-item">
                    <h3>¿Cuál es la modalidad de clases?</h3>
                    <p>Puedes elegir entre presencial, semipresencial y virtual dependiendo de la carrera profesional.</p>
                </div>
                <div class="faq-item">
                    <h3>¿Cuál es el costo de las carreras?</h3>
                    <p>Tenemos diferentes tasas educativas al alcance de la comunidad universitaria, así como becas.</p>
                </div>
                <div class="faq-item">
                    <h3>¿Qué requisitos debo tener para estudiar?</h3>
                    <p>Que tengas secundaria completa y muchas ganas de ser un profesional que el mercado demanda.</p>
                </div>
                <div class="faq-item">
                    <h3>¿Como me contacto con ustedes?</h3>
                    <p>Puedes llenar el formulario de la parte superior y/o llamarnos al número 970597183.</p>
                </div>
                
            </div>
        </div>
    </section>

    <!-- Carrusel de imagenes -->
    <section class="statistics-carousel">
        <div class="carousel-container">
            <div class="carousel-track">
                <div class="carousel-slide">
                    <div class="statistic">
                        <span class="number">01</span>
                        <div class="description">
                            <p>Facultad</p>
                            <p>Ciencias Empresariales</p>
                            <p class="source">Administración de Empresas - Contabilidad y Finanzas</p>
                        </div>
                    </div>
                </div>
                <div class="carousel-slide">
                    <div class="statistic">
                        <span class="number">02</span>
                        <div class="description">
                            <p>Facultad</p>
                            <p>Derecho y Ciencias Políticas</p>
                            <p class="source">Derecho</p>
                        </div>
                    </div>
                </div>
                <!-- Se puede agregar más slides según se necesite -->
                <div class="carousel-slide">
                    <div class="statistic">
                        <span class="number">03</span>
                        <div class="description">
                            <p>Facultad</p>
                            <p>Ingeniería</p>
                            <p class="source">Ingeniería Civil</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="carousel-dots"></div>
        </div>
    </section>

    <!-- Pie de página -->
    <footer class="footer">
        <div class="footer-content">
            <p>UPRIT © 2024 - Todos los derechos reservados <br>
            Dpto de Tecnologías de Información</p>
        </div>
    </footer>

    <!-- Script personalizado -->
    <script src="js/function.js"></script>
</body>
</html>
