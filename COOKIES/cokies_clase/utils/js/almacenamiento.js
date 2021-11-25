let botonAgregar;
let botonRecuperar;
let botonBorrar;
let botonIndex;
let botonCrearCookie;
let botonRecuperarCookie;
let botonEliminarCookie;
let botonModificarCookie;

window.addEventListener('load', (e) => {

    instancias();
    botonAgregar.addEventListener('click', (e) => {
        let nombre = document.querySelector('#input-nombre').value;
        let apellido = document.querySelector('#input-apellido').value;
        let telefono = document.querySelector('#input-telefono').value;
        let fecha = document.querySelector('#input-fecha').value;
        let color = document.querySelector('#input-color').value;

        if (nombre != "" && apellido != "" && telefono != "" && fecha != "") {
            localStorage.setItem("nombre", nombre);
            localStorage.setItem("apellido", apellido);
            localStorage.setItem("telefono", telefono);
            localStorage.setItem("fecha", fecha);
            localStorage.setItem("objeto", JSON.stringify(new persona(nombre, apellido)));

        }
    });

    botonBorrar.addEventListener('click', (e) => {
        localStorage.clear('nombre');
        localStorage.clear('apellido');
        localStorage.clear('numero');
        localStorage.clear('fecha');
        localStorage.clear('objeto');
    });

    botonRecuperar.addEventListener('click', (e) => {
        console.log(localStorage.getItem("nombre"));
        console.log(localStorage.getItem("apellido"));
        console.log(localStorage.getItem("telefono"));
        console.log(localStorage.getItem("fecha"));
        console.log(localStorage.getItem("objeto"));
    });

    botonIndex.addEventListener('click', (e) => {
        for (let i = 0; i < localStorage.length; i++) {
            console.log(localStorage.getItem(localStorage.key(i)));
        }
    });


    botonCrearCookie.addEventListener('click', (e) => {
        console.log("elemento");
        document.cookie = `nombre= ${nombre}; secure`;
        document.cookie = `apellido= ${apellido}; secure"`;
        document.cookie = `telefono= ${numero}; secure`;
        document.cookie = `fecha= ${fecha}; secure`;
    });

    botonRecuperarCookie.addEventListener('click', (e) => {
        let CookieCompleta = document.cookie;
        let CookiesParitidas = CookieCompleta.replace(" ", ";").split(";")
        CookiesParitidas.forEach(element => {
            let CookieIndividual = element.split("=")
            console.log(`El valor de la cookie ${CookieIndividual[0]} es ${CookieIndividual[1]}`)
        })

    });

    botonEliminarCookie.addEventListener('click', (e) => {
        document.cookie = "nombre=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    });

    botonModificarCookie.addEventListener('click', (e) => {
        document.cookie = "Apellido = True";
    });
    /*
    document.querySelector('#contenido').textContent=('Contenido de la pagina para expliar los diferentes tipos de almacenamiento')
    localStorage.setItem("nombre","Victor")

    console.log(localStorage.getItem("nombre"));
    console.log(localStorage.getItem("apellido"))
    */
});
function setearCookie(nombre, valor, expiracion) {
    document.cookie = `${nombre}=${valor}; expires=${expiracion}`
}

function deleteCookie(nombre, expiracion) {
    document.cookie = `${nombre}=; expires=${expiracion}`
}

function recuperarcookie(nombre) {
    document.cookie.substring(document.cookie.indexOf(nombre));
}

function instancias() {
    botonAgregar = document.querySelector('#boton-agregar')
    botonRecuperar = document.querySelector('#boton-recuperar')
    botonBorrar = document.querySelector('#boton-borrar')
    botonIndex = document.querySelector("#boton-index")
    botonCrearCookie = document.querySelector('#boton-crear-cookie')
    botonRecuperarCookie = document.querySelector('#boton-recuperar-cookie')
    botonEliminarCookie = document.querySelector('#boton-borrar-cookie')
}

function separar_cookie() {

}