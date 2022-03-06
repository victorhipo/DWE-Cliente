let btnLSAgregar;
let btnLSAgregarObj;
let btnLSBorrar;

let btnSSAgregar;
let btnSSAgregarObj;
let btnSSBorrar;

let btnAgregarCookie;
let btnBorrarCookie;

window.addEventListener('load', (e) => {

    instanciar();
    colorLocalStorage();
    colorSesionStorage();
    //colorCookie();

    //local
    btnLSAgregar.addEventListener('click', (e => {
        let clave = document.querySelector('#ls-ind-clave').value;
        let valor = document.querySelector('#ls-ind-valor').value;
        let colorLS = document.querySelector('#ls-color').value;

        let clavels = document.querySelector('#LSclave');
        let valorls = document.querySelector('#LSvalor');
        
        if (clave != "" && valor != "") {
            localStorage.setItem("clave", clave);
            localStorage.setItem("valor", valor);
            localStorage.setItem("color", colorLS);

            clavels.innerHTML =`<td>${clave}</td>`;
            valorls.innerHTML =`<td>${valor}</td>`;
        
        }
    }));
    btnLSAgregarObj.addEventListener('click', (e) => {
        let nombre = document.querySelector('#ls-obj-nombre').value;
        let apellido = document.querySelector('#ls-obj-apellido').value;
        let telefono = document.querySelector('#ls-obj-tlf').value;
        let disponivilidad = document.querySelector('#ls-obj-disp').value;

        let objetols = document.querySelector('#LSobjeto');
        
        if (nombre != "" && apellido != "" && telefono != "") {
            localStorage.setItem("objeto", JSON.stringify(new objeto(nombre, apellido, telefono, disponivilidad)));
            objetols.innerHTML = `<td>${objeto}</td>`;

        }
    });
    btnLSBorrar.addEventListener('click', (e) => {
        console.log("hola");
        let claveBorrar = document.querySelector('#ls-obj-borrar').value;

        if (claveBorrar == localStorage.getItem('clave')) {
            localStorage.clear('clave');
            localStorage.clear('valor');
            localStorage.clear('objeto');
        }

    });

    //sesion
    btnSSAgregar.addEventListener('click', (e) => {
        let clave = document.querySelector('#ss-ind-clave').value;
        let valor = document.querySelector('#ss-ind-valor').value;
        let colorSS = document.querySelector('#ss-color').value;

        let clavess = document.querySelector('#SSclave');
        let valorss = document.querySelector('#SSvalor');


        if (clave != "" && valor != "") {
            sessionStorage.setItem("clave", clave);
            sessionStorage.setItem("valor", valor);
            sessionStorage.setItem("color", colorSS);

            clavess.innerHTML =`<td>${clave}</td>`;
            valorss.innerHTML =`<td>${valor}</td>`;

        }

    });
    btnSSAgregarObj.addEventListener('click', (e) => {

        let nombre = document.querySelector('#ss-obj-nombre').value;
        let apellido = document.querySelector('#ss-obj-apellido').value;
        let telefono = document.querySelector('#ss-obj-tlf').value;
        let disponivilidad = document.querySelector('#ss-obj-disp').value;

        let objetoss = document.querySelector('#SSobjeto');

        if (nombre != "" && apellido != "" && telefono != "") {
            sessionStorage.setItem("objeto", JSON.stringify(new objeto(nombre, apellido, telefono, disponivilidad)));
            objetoss.innerHTML = `<td>${objeto}</td>`;
        }
    });
    btnSSBorrar.addEventListener('click',(e)=>{
        let claveBorrar = document.querySelector('#borrar-clave').value;

        if(claveBorrar == sessionStorage.getItem('clave')){
            sessionStorage.clear('clave');
            sessionStorage.clear('valor');
            sessionStorage.clear('objeto');
        }
    });

    //cookie
    btnAgregarCookie.addEventListener('click', (e) => {
        let clave = document.querySelector('#clave-cookie').value;
        let valor = document.querySelector('#valor-cookie').value;
        let expiracion = document.querySelector('#expiracion-cookie').value;
        let color = document.querySelector('#color-cookie').value;

        let tbcookie= document.querySelector('#ck')

        if (clave != "" && valor != "") {
            document.cookie = `clave= ${clave};`;
            document.cookie = `valor= ${valor};`;
            document.cookie = `expiracion=${expiracion};`;
            document.cookie = `color=${color};`;

        }
        let CookieCompleta = document.cookie;
        let CookiesParitidas = CookieCompleta.replace(" ", ";").split(";")
        CookiesParitidas.forEach(element => {
            let CookieIndividual = element.split("=")
            tbcookie.innerHTML= `El valor de la cookie ${CookieIndividual[0]} es ${CookieIndividual[2]}, tiene una expiracion de ${CookieIndividual[3]}`;
        })
    });
});

function instanciar() {
    btnLSAgregar = document.querySelector('#ls-ind-agregar');
    btnLSAgregarObj = document.querySelector('#ls-obj-agregar');
    btnLSBorrar = document.querySelector('#ls-obj-eliminar');

    btnSSAgregar = document.querySelector('#ss-ind-agregar');
    btnSSAgregarObj = document.querySelector('#ss-obj-agregar');
    btnSSBorrar = document.querySelector('#eliminar-obj');

    btnAgregarCookie = document.querySelector('#agregar-cookie');
    btnBorrarCookie = document.querySelector('#eliminar-cookie');
}
function colorLocalStorage() {
    let color = localStorage.getItem('color');
    document.getElementById('LocalStorage').style.background = `${color}`;
}
function colorSesionStorage() {
    let color = sessionStorage.getItem('color');
    document.getElementById('SessionStorage').style.background = `${color}`;
}
// function colorCookie(){
//     let color = document.cookie.indexOf(color);
//     document.getElementById('cookie').style.background = `${color}`;
// }

function tablas(){

}