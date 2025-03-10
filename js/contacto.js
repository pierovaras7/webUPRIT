const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const textarea = document.querySelector('#formulario textarea');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,9}$/, // 7 a 9 numeros.
	mensaje: /^[a-zA-ZÀ-ÿ\s]{1,100}$/
}

const campos = {
	nombre: false,
    apellido: false,
	correo: false,
	telefono: false,
	mensaje: false
}

const validarFormulario = (e) => {
    switch(e.target.name){
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
            break
        case "apellido":
            validarCampo(expresiones.apellido, e.target, 'apellido');
            break
        case "correo":
            validarCampo(expresiones.correo, e.target, 'correo');
            break
        case "telefono":
            validarCampo(expresiones.telefono, e.target, 'telefono');
            break
		case "mensaje":
			validarCampo(expresiones.mensaje, e.target, 'mensaje');
			break
    }
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-circle-check');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-circle-xmark');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-circle-xmark');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-circle-check');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario)
    input.addEventListener('blur', validarFormulario)
})

textarea.addEventListener('keyup', validarFormulario)
textarea.addEventListener('blur', validarFormulario)

formulario.addEventListener('submit', (e) =>{
    e.preventDefault();
	console.log('Sending...!!!')
    if(campos.nombre && campos.apellido && campos.correo && campos.telefono && campos.mensaje){
		formulario.reset();
        
        document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
})