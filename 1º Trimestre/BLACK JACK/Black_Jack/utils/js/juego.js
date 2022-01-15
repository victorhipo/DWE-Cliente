let palos = ['C', 'D', 'P', 'T'];
let baraja = [];
let jugadores = [];
let turno = false;

//VARIABLES JUGADOR
let botonIniciar = document.querySelector('#btn-iniciar');
let botonSacar = document.querySelector('#btn-sacar');
let botonMostar = document.querySelector('#btn-mostrar');
let botonPlantarse = document.querySelector('#btn-plantarse');

let cartaJugador = document.querySelector('#carta-jugador');
let cartaJ2 = document.querySelector('#carta-j2');
let puntuacionJugador = document.querySelector('#puntuacion_jugador');
let puntuacionJ2 = document.querySelector('#puntuacion_j2');

let nombreJugador = prompt("Introduce tu nombre");
document.querySelector('#nombre_jugador').textContent = nombreJugador;
jugadores.push(new jugador(nombreJugador));

jugadores.push(new jugador('j2'));

console.log(jugadores);

botonIniciar.addEventListener('click', (e) => {
    iniciarBaraja();
    baraja = _.shuffle(baraja);
    botonIniciar.disabled = true;

})

botonMostar.addEventListener('click', (e) => {
    console.log(baraja);
})

botonSacar.addEventListener('click', () => {

    ponerCarta(sacarCarta());

    if (baraja.length == 0) {
        botonSacar.disabled = true;
    }
})

botonPlantarse.addEventListener('click', () => {
    botonSacar.disabled = true;
    botonPlantarse.disabled = true;
    turno = true;

    //la maquina empieza a jugar

    setInterval(() => {
        // la maquina saca una 
        ponerCarta(sacarCarta());
    }, 2000);
})

function iniciarBaraja() {

    for (let i = 1; i < 14; i++) {
        for (let x = 0; x < palos.length; x++) {
            if (i < 11) {
                baraja.push( new Carta(i,palos[x]));
            } else if (i == 11) {
                baraja.push(new Carta('J',palos[x]));
            } else if (i == 12) {
                baraja.push(new Carta('Q',palos[x]));
            } else if (i == 13) {
                baraja.push(new Carta('K',palos[x]));
            }
        }
    }
}

function sacarCarta() {

    let carta = baraja.pop();
    return carta;

}

function ponerCarta(carta) {

    let imagen = document.createElement("img");
    imagen.className = "carta-jugador";
    imagen.src = carta.getImg;

    if (turno) {
        cartaJ2.appendChild(imagen);
        jugadores[1].setPuntuacion(carta.getValor);
        puntuacionJugador.textContent = jugadores[1].getPuntuacion;
    } else {
        cartaJugador.appendChild(imagen);

        jugadores[0].setPuntuacion(carta.getValor);
        puntuacionJugador.textContent = jugadores[0].getPuntuacion;
    }


}
