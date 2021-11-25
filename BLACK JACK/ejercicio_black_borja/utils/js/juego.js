let palos = ["C", "D", "P", "T"];
let baraja = [];
let jugadores = []

let botonIniciar = document.querySelector("#boton-iniciar");
let botonVer = document.querySelector("#boton-ver");
let botonSacar = document.querySelector("#boton-aleatorio");
let botonPlantarse = document.querySelector("#boton-plantarse");

let cartasJugador = document.querySelector("#cartas-jugador");
let puntuacionJugador = document.querySelector("#puntuacion_jugador");

let nombreJugador = prompt("Introduce tu nombre");
document.querySelector("#nombre_jugador").textContent = nombreJugador
jugadores.push(new jugador(nombreJugador));

console.log(jugadores);

botonSacar.addEventListener("click", () => {
  // el string con el nombre de la carta 8C
  //sacarCarta();
  /*let carta = sacarCarta();
  let imagen = document.createElement("img");
  imagen.className = "carta";
  imagen.src = `utils/images/${carta}.png`;

  cartasJugador.appendChild(imagen);
  calcularValor(carta);

  if (baraja.length == 0) {
    botonSacar.disabled = true;
  }*/
  // saca un objeto de tipo carta de la baraja
  let cartaActual = sacarCarta();
  console.log(cartaActual);
  console.log(cartaActual.getValor);

  let imagen = document.createElement("img");
  imagen.className = "carta";
  imagen.src = cartaActual.getImagen;
  cartasJugador.appendChild(imagen);

  jugadores[0].setPuntuacion(cartaActual.getValor);
  puntuacionJugador.textContent = jugadores[0].getPuntuacion

  if (baraja.length == 0) {
    botonSacar.disabled = true;
  }
});

botonIniciar.addEventListener("click", () => {
  iniciarBaraja();
  baraja = _.shuffle(baraja);

  let btn = document.querySelector("#boton-iniciar")
  btn.disabled = true;
});

botonVer.addEventListener("click", () => {
  console.log(baraja);
});

botonPlantarse.addEventListener('click', ()=>{
  console.log('holas');
  terminar()

})

function iniciarBaraja() {
  for (let i = 1; i < 14; i++) {
    for (let x = 0; x < palos.length; x++) {
      if (i < 11) {
        baraja.push(new carta(`${i}${palos[x]}`));
      } else if (i == 11) {
        baraja.push(new carta(`J${palos[x]}`));
      } else if (i == 12) {
        baraja.push(new carta(`Q${palos[x]}`));
      } else if (i == 13) {
        baraja.push(new carta(`K${palos[x]}`));
      } 
    }
  }
}

function sacarCarta() {
  //console.log(baraja.pop());
  let carta = baraja.pop();
  return carta;
}

function terminar(){
  let btns = document.querySelectorAll("#boton-plantarse, #boton-aleatorio")

  btns.forEach((element)=>{
    element.disabled = true
  })

  
}