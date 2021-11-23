document.querySelector('#boton-pulsar').addEventListener('click',(e)=>
inputs.forEach(element=>{
    let inputs = document.querySelectorAll('input')
    let activados = inputs[0].disabled
    element.disabled = !activados 
}))