/**APUNTES DEL TRABAJO
 *  .split("separador"): Separa el estring en un array  de string separandolos por un caracter especifico.
 *  .trim: elimina todos los espacios.
 *  .replace("sustituido", "sustituto"): sustituye el primer caracter(que le hemos indicado) del string por el segundo.
 *  .indexOff(): selecciona el ultimo caracter de lo buscado.
 *  */ 


let botonAgregar;
let botonRecuperar;
let botonBorrar;
let botonIndex;
let botonAgregarCookie;
let botonRecuperarCookie;
let botonBorrarCookie;
let botonModificarCookie;

let almacenamiento;

window.addEventListener('load', (e) => {

    instancias();

    botonAgregar.addEventListener('click', () => {
        let nombre = document.querySelector('#input-nombre').value;
        let apellido = document.querySelector('#input-apellido').value;
        let telefono = document.querySelector('#input-telefono').value;
        let fecha = document.querySelector('#input-fecha').value;
        let color = document.querySelector('#input-color').value;

        if(nombre!="" && apellido!="" && telefono!="" && fecha!=""){
            localStorage.setItem('nombre', nombre);
            localStorage.setItem('apellido', apellido);
            localStorage.setItem('telefono', telefono);
            localStorage.setItem('fecha', fecha);
            localStorage.setItem('color', color);
            
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

    /* document.querySelector('#contenido').textContent = "Contenido sobre nuestra web de almacenamiento.";
       localStorage.setItem('nombre', 'victor');

       console.log(localStorage.getItem('nombre'));
    alert("Bienvenido a nuestra web de almacenamiento.");*/

    botonAgregarCookie.addEventListener('click',()=>{
        document.cookie = "nombre=victor";
        document.cookie = "apellido=villajos";
        document.cookie = "telefono=987654321";
    })
    botonRecuperarCookie.addEventListener('click',()=>{
        let cookieCompleta = document.cookie;
        let cookiesPartidas = cookieCompleta.split('; ');
        cookiesPartidas.forEach(e => {
            let cookieIndividual =  e.split('=');
            console.log(`el valor de la cookie ${cookieIndividual[0]} es ${cookieIndividual[1]}`);
        });
    })
    botonBorrarCookie.addEventListener('click',()=>{
        document.cookie = "apellido=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
        document.cookie = "telefono=; expires=Thu, 01 Jan 1970 00:00:00 UTC";

    })

    botonModificarCookie.addEventListener('click', ()=>{
        document.cookie = "nombre=Jose";
    })

});

function instancias() {

    botonAgregar = document.querySelector('#btn-agregar');
    botonRecuperar = document.querySelector('#btn-consultar');
    botonBorrar = document.querySelector('#btn-borrar');
    botonIndex = document.querySelector('#btn-index');
    botonAgregarCookie = document.querySelector('#btn-cookie-crear');
    botonRecuperarCookie = document.querySelector('#btn-cookie-recuperar');
    botonBorrarCookie = document.querySelector('#btn-cookie-borrar');
    botonModificarCookie = document.querySelector('#btn-cookie-modificar');
}

function partitCookie(cookie) {
    let cookiesPartida = cookie.split("; ")

    return cookiesPartida
}
function setearCookie(nombre, valor, expiracion) {
    document.cookie = `${nombre}=${valor}; expires=${expiracion}`;
}

function deleteCookie(nombre, expiracion) {
    document.cookie = `${nombre}=; expires=${expiracion}`;
}
function reuperarCookieConcreta(nombre) {
    document.cookie.substring(document.cookie.indexOf(nombre),)
    
}