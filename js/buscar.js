droptext

//Formulario buscador
var textoBuscar = document.getElementById('Buscartexto');

//botón de cerrar
var drop = document.getElementById('droptext');

//constantes de valores encontrados en la búsqueda
const info = document.querySelectorAll('p');
const listado = document.querySelectorAll('.listado')
const vinetas = document.querySelectorAll('.perfil_bloques ul li')
const footer = document.querySelectorAll('.informes div')

textoBuscar.addEventListener("keyup", function(event) {
   if (event.key === 'Enter') {
      let input = textoBuscar.value;
      
      for (let i = 0; i < info.length; i++) {
         if (input !== "") {
            let regExp = new RegExp(input,"gi");
            info[i].innerHTML = info[i].textContent.replace(regExp,"<mark>$&</mark>");
         }
      }
      for (let i = 0; i < listado.length; i++) {
         if (input !== "") {
            let regExp = new RegExp(input,"gi");
            listado[i].innerHTML = listado[i].textContent.replace(regExp,"<mark>$&</mark>");
         }
      }
      for (let i = 0; i < vinetas.length; i++) {
         if (input !== "") {
            let regExp = new RegExp(input,"gi");
            vinetas[i].innerHTML = vinetas[i].textContent.replace(regExp,"<mark>$&</mark>");
         }
      }
      for (let i = 0; i < footer.length; i++) {
         if (input !== "") {
            let regExp = new RegExp(input,"gi");
            footer[i].innerHTML = footer[i].textContent.replace(regExp,"<mark>$&</mark>");
         }
      }
   }
});

drop.addEventListener('click',function (){
//    let input = document.getElementById('Buscartexto').value='';
   
//    for (let i = 0; i < info.length; i++) {
//        if (input == "") {
//           let regExp = new RegExp(input,"gi");
//           info[i].innerHTML = info[i].textContent.replace(regExp,"");
//        }
//    }

//    for (let i = 0; i < listado.length; i++) {
//       if (input == "") {
//          let regExp = new RegExp(input,"gi");
//          listado[i].innerHTML = listado[i].textContent.replace(regExp,"");
//       }
//   }

   window.location.reload()
})