/*PAGINA DONDE BUSCAR API
https://ed.team/blog/las-mejores-apis-publicas-para-practicar*/

let pagina = 1;
const previous = document.getElementById('previous');
const next = document.getElementById('next');

next.addEventListener('click', ()=>{
    pagina = pagina + 1;
    loadAPI();
})

const loadAPI = async() => {
    try {
        //SE MUESTRA TODOS LOS POKEMONS
        //const response = await fetch('https://pokeapi.co/api/v2/pokemon');

        //offset: permite hacer uso de la paginación
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${pagina}`);
        //console.log(response);
        if(response.status === 200){
            pokemons = await response.json();
            
            //ESTE CODIGO SOLO ES PARA VERIFICAR QUE FUNCIONA EN CONSOLA
            //console.log(pokemons.results)
            // pokemons.results.forEach(pokemon => {
            //     console.log(pokemon.name);
            // });

            let resultado = '';
            pokemons.results.forEach(pokemon => {
                resultado = resultado + `<div class='poke'>
                    <h3>${pokemon.name}</h3>
                    <a href=${pokemon.url}>Ver detalle</a>
                </div>`;
            });

            document.getElementById('container').innerHTML = resultado;
        }
        else if(response.status === 401){
            console.log('Algo anda mal en mi código')
        }
        else{
            console.log('Algo anda mal con la página')
        }
    } catch (error) {
        console.log(error)
    }
}

loadAPI();