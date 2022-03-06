/*et nodobusqueda = document.querySelector('div.form-check.form-check-input');
console.log(nodobusqueda);

// EN DOS SEGUNDOS ARA EL CAMBIO Y TERMINA
/*setTimeout(() => {
    document.querySelector('#parrafo-texto').innerHTML = 'cambio';    
}, 2000);

//CADA UN SEGUNDO ACTUALIZA EL CAMBIO CONTINUAMENTE

//let numero = 9;
/*setInterval(() => {
    document.querySelector('#parrafo-texto').innerHTML = 'actualiza';  
    //document.querySelector('#parrafo-texto').innerHTML = numero;  
    //numero--;
}, 1000);*/

let boton = document.querySelector('button');
let input = document.querySelector("input");
boton.className += "btn-primary"

boton.addEventListener("click",(event)=>{console.log("Boton pulsado")})

input.addEventListener("keypress",(e)=>{console.log(e.key)}) //console.log(input.value) 