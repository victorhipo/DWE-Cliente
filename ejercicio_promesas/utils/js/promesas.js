//ejercicios van a tardar
/***se ejecuta en segindo plano
 *      aceptan -- se ha resuelto bien
 *      fallido -- la promesa no se ha resuelto
 * 
 * fetch();
 

let promesa = new Promise((resolve,reject)=>{
    //ejecuto cuando la promesa es resuelta con exito
    setTimeout(function(){
        numero = Math.random()* 20;
        if(numero <= 10){
            return resolve(numero);
        }else{
            return reject('superiror');
        }
    },5000);
});
/*promesa.then((data)=>console.log(`El numero es ${data}`)
,(data)=>console.log(data))
.catch(err) => console.log('error detectado')*/

let url="https://jsonplaceholder.typicode.com/posts";
let contenedor = document.querySelector('#contenedor-cartas');

await fetch(url).then(
    (res)=>{
        json = res.json();
        return json;
    },
    (rej)=>{
        console.log('Error' + rej);
    }
).then(
    (res)=>{
        //console.log(res);
        res.forEach((element) => {
            let nodoNuevo = document.createElement('div');
            nodoNuevo.classList.add("card");
            nodoNuevo.style.width='18rem';
            nodoNuevo.innerHTML=`
            <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <p class="card-text">${element.body}</p>
                <p>${element.id}</p>
            </div>`
            contenedor.append(nodoNuevo);
        });
    },
    (rej)=>{

    });

    

