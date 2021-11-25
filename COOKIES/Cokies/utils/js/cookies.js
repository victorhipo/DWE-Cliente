let botonAgregar;
let botonRecuperar;
let botonBorrar;
let botonIndex;

let almacenamiento;

window.addEventListener('load', (e) => {

    instancias();

    botonAgregar.addEventListener('click', () => {
        let nombre = document.querySelector('#input-nombre').value;
        let apellido = document.querySelector('#input-apellido').value;
        let telefono = document.querySelector('#input-telefono').value;
        let fecha = document.querySelector('#input-fecha').value;

        if(nombre!="" && apellido!="" && telefono!="" && fecha!=""){
            localStorage.setItem('nombre', nombre);
            localStorage.setItem('apellido', apellido);
            localStorage.setItem('telefono', telefono);
            localStorage.setItem('fecha', fecha);
            
            localStorage.setItem(
            
                "objeto", 
            
                JSON.stringify(new persona(nombre, apellido))
            
                );

        } else{
            alert("Faltan datos");
        }

    })
    botonRecuperar.addEventListener('click', ()=>{
        console.log(localStorage.getItem('nombre'));
        console.log(localStorage.getItem('apellido'));
        console.log(localStorage.getItem('telefono'));
        console.log(localStorage.getItem('fecha'));
        console.log(localStorage.getItem('objeto'));
        console.log(JSON.parse(localStorage.getItem('objeto')));
    })
    botonBorrar.addEventListener('click', ()=>{
        localStorage.clear('nombre');
        localStorage.clear('apellido');
        localStorage.clear('telefono');
        localStorage.clear('fecha');
        localStorage.clear('objeto');
    })
    botonIndex.addEventListener('click',()=>{
        for(let i = 0; i < localStorage.length; i ++){
            console.log(localStorage.getItem(localStorage.key(i)));
        }
    })

    // document.querySelector('#contenido').textContent = "Contenido sobre nuestra web de almacenamiento.";
    // localStorage.setItem('nombre', 'victor');

    // console.log(localStorage.getItem('nombre'));
    //alert("Bienvenido a nuestra web de almacenamiento.");
});

function instancias() {

    botonAgregar = document.querySelector('#btn-agregar');
    botonRecuperar = document.querySelector('#btn-consultar');
    botonBorrar = document.querySelector('#btn-borrar');
    botonIndex = document.querySelector('#btn-index');
}