let botonAutorizar = document.querySelector('#boton-autorizar')
let botonAñadir = document.querySelector('#boton-añadir')
let botonBorrar = document.querySelector('#boton-borrar')
let botonmodificar = document.querySelector('#boton-modificar')

/*
let clave1 = "victor"
let clave2 = 1234

let nombreClave = document.querySelector('#clave1')
let contraseñaClave = document.querySelector('#clave2')

botonAutorizar.addEventListener('click',(e)=>{

    let inputs = document.querySelectorAll('input')

    if( nombreClave.value == clave1 && contraseñaClave.value == clave2){
        console.log('hola');
        inputs.forEach(element=>{
            
            let activados = inputs[0].disabled
            element.disabled = !activados
        })
    }
})*/
botonAutorizar.addEventListener('click', (event)=>{
    if(document.querySelector("#clave1").value.toString().toLowerCase() == "victor" && document.querySelector("#clave2").value.toString().toLowerCase() == "villajos"){
        let nodos = document.querySelectorAll(
            "#form input, #form button "
        );

        nodos.forEach((element)=>{
            element.disabled = false;
        });
    }
    else{
        alert("Datos incorrectos");
    }
})

//*******************AÑADIR******************************

botonAñadir.addEventListener("click", (event)=>{
    console.log('holis');

    let nombre = document.querySelector('#nombre_añadir').value;
    let apellido = document.querySelector('#apellido_añadir').value;
    let exp = document.querySelector('#exp').checked;
    let numero = document.querySelector('#tabla-resultados tbody').childElementCount;

    let fila = document.createElement("tr");
    fila.innerHTML = `<th scope="row">${numero +1} </th>
    <td>${nombre}</td>
    <td>${apellido}</td>
    <td>${exp}</td>`;

    document.querySelector("#tabla-resultados tbody").appendChild(fila);
})


//*******************BORRAR******************************

botonBorrar.addEventListener("click", (event)=>{

    let nombres = document.querySelectorAll("#tabla-resultados tbody td ");

    nombres.forEach((element, i)=> {

        if(i % 3 == 0){

            console.log(element.textContent);
            
            if(element.textContent == document.querySelector("#nombre_borrar").value){

                document.querySelector("#tabla-resultados tbody").removeChild(element.parentNode);
            }
        }
    })
})