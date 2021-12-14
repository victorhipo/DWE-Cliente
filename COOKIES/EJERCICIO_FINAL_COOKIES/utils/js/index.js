let btnLSAgregar;
let btnLSAgregarObj;
let btnLSBorrar;

let btnSSAgregar;
let btnSSAgregarObj;
let btnSSBorrar;

let btnAgregarCookie;
let btnBorrarCookie;

window.addEventListener('load',(e)=>{

    instanciar();
    colorLocalStorage();
    colorSesionStorage();
    
    //local
    btnLSAgregar.addEventListener('click',(e=>{
        let clave = document.querySelector('#ls-ind-clave').value;
        let valor = document.querySelector('#ls-ind-valor').value;
        let colorLS = document.querySelector('#ls-color').value;

        if(clave != "" && valor != ""){
            localStorage.setItem("clave",clave);
            localStorage.setItem("valor",valor);
            localStorage.setItem("color",colorLS);
        }
    }));
    btnLSAgregarObj.addEventListener('click',(e)=>{
        let nombre = document.querySelector('#ls-obj-nombre').value;
        let apellido = document.querySelector('#ls-obj-apellido').value;
        let telefono = document.querySelector('#ls-obj-tlf').value;
        let disponivilidad = document.querySelector('#ls-obj-disp').value;

        if (nombre != "" && apellido != "" && telefono != ""){
            localStorage.setItem("objeto", JSON.stringify(new objeto(nombre, apellido,telefono,disponivilidad)));
        }
    });

    //sesion
    btnSSAgregar.addEventListener('click',(e)=>{
        let clave = document.querySelector('#ss-ind-clave').value;
        let valor = document.querySelector('#ss-ind-valor').value;
        let colorSS = document.querySelector('#ss-color').value;


        if(clave != "" && valor != ""){
            sessionStorage.setItem("clave",clave);
            sessionStorage.setItem("valor",valor);
            sessionStorage.setItem("color",colorSS);

        }

    });
    btnSSAgregarObj.addEventListener('click',(e)=>{

        let nombre = document.querySelector('#ss-obj-nombre').value;
        let apellido = document.querySelector('#ss-obj-apellido').value;
        let telefono = document.querySelector('#ss-obj-tlf').value;
        let disponivilidad = document.querySelector('#ss-obj-disp').value;

        if (nombre != "" && apellido != "" && telefono != ""){
            sessionStorage.setItem("objeto", JSON.stringify(new objeto(nombre, apellido,telefono,disponivilidad)));
        }
    });

    //cookie
    btnAgregarCookie.addEventListener('click',(e)=>{
        let clave = document.querySelector('#clave-cookie').value;
        let valor = document.querySelector('#valor-cookie').value;
        let expiracion = document.querySelector('#expiracion-cookie').value;

        if(clave != "" && valor != ""){
            document.cookie = `clave= ${clave};`;
            document.cookie = `valor= ${valor};`;
        }        
    });
});

function instanciar(){
    btnLSAgregar = document.querySelector('#ls-ind-agregar');
    btnLSAgregarObj = document.querySelector('#ls-obj-agregar');
    btnLSBorrar = document.querySelector('#ls-obj-eliminar');

    btnSSAgregar = document.querySelector('#ss-ind-agregar');
    btnSSAgregarObj = document.querySelector('#ss-obj-agregar');
    btnSSBorrar = document.querySelector('#ss-obj-eliminar');

    btnAgregarCookie = document.querySelector('#agregar-cookie');
    btnBorrarCookie = document.querySelector('#eliminar-cookie');
}
function colorLocalStorage(){
    let color = localStorage.getItem('color');
    document.getElementById('LocalStorage').style.background = `${color}`;
}
function colorSesionStorage(){
    let color = sessionStorage.getItem('color');
    document.getElementById('SessionStorage').style.background = `${color}`;
}
function colorCookie(){
    let color = sessionStorage.getItem('color');
    document.getElementById('LocalStorage').style.background = `${color}`;
}