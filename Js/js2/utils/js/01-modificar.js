let botonAñadir = document.querySelector("#boton-añadir")
let botonBorrar = document.querySelector("#boton-borrar")
let botonBorrarTodo = document.querySelector("#boton-borrar-todos")

botonAñadir.addEventListener('click',(e)=>{

    let nodoCreado = document.createElement('p')
    nodoCreado.textContent = "Esto es un parrafo con texto"
    //let nodoRecuperado = document.querySelector('#resultados')
    //nodoRecuperado.append(nodoCreado)
    //document.querySelector("#resultados").appendChild(nodoCreado);
    document.querySelector("#resultados").append(nodoCreado);
    //document.querySelector("#resultados").insertBefore(nodoCreado,document.querySelector('#lista-elementos'))
    //document.querySelector("#resultados").insertBefore(nodoCreado,document.querySelector('#lista-elementos')).nextElementSibling()
})

botonBorrar.addEventListener('click',(e)=>{

        document.querySelector('#resultados').removeChild(document.querySelector('#lista-elementos'))
    
})

botonBorrarTodo.addEventListener('click',(e)=>{
    
    let hijos = document.querySelector('#resultados').children;

    for(let i = 0; i < hijos.length; i++){
        hijos[i].remove()
    }
        //document.querySelector('#resultados').removeChild(document.querySelector('#lista-elementos'))
})
