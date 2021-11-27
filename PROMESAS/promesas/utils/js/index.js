/*let promesa = new Promise((resolve, reject)=>{
    setTimeout(function () {
        numero = Math.random()*20;
        if (numero <= 10){
            console.log("Numero inferior");
            return resolve(numero);
        }
        else{
            console.log("Numero superior");
            return reject("superiror");
        }
    },5000);
});

  promesa.then(
      (res)=>{
         console.log(`el numero es ${res}`);
      },
      (rej)=>{
         console.log(rej);
      }
  ).catch((err)=>{console.log("error detectado");});*/

let url = "https://jsonplaceholder.typicode.com/posts";
let contenedor = document.querySelector("#contendor-carta");

fetch(url)
    .then(
        (res) => {
            json = res.json();
            return json;
        },
        (rej) => {
            console.log('Error' + rej);
        }
    )
    .then(
        (res) => {
            res.forEach((element) => {
                let nodoNuevo = document.createElement('div');
                nodoNuevo.classList.add("card");
                nodoNuevo.classList.add("animated__fadein");
                nodoNuevo.innerHTML = `
                    <div class="card-body">
                        <h5 class="card-title">${element.title}</h5>
                        <p class="card-text">${element.body}</p>
                        <p>${element.userId}</p>
                    </div>`;
                contenedor.append(nodoNuevo);
            });
        },
        (rej) => {

        }
    );