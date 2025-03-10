const btnAbrirModal = document.querySelector("#btn-abrir-modal")
const btnCerrarModal = document.querySelector("#btn-cerrar-modal")
const modal = document.querySelector("#modal")

btnAbrirModal.addEventListener("click", ()=>{
    modal.showModal()
})

window.addEventListener("load", ()=>{
    modal.showModal()
})

btnCerrarModal.addEventListener("click", ()=>{
    modal.close()
})